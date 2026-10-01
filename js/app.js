import { parseSyllabus } from "./parser.js";
import { EDITAL_PRESETS } from "./lessons-pesquisa.js";
import { FEYNMAN_STEPS, QUESTION_BANK } from "./data.js";
import {
  dateKey, ensureDailyTopic, advanceDailyTopic, markDone, registerStudy, currentStreak,
  progress, reviewsDue, markReviewed, bankQuestionsFor, discursiveFor, coachMessage, dailyTasks, lessonFor,
} from "./planner.js";
import * as ai from "./ai.js";
import * as notify from "./notify.js";

const STORAGE_KEY = "plantao-estudos:v1";

const initialState = () => ({
  syllabusRaw: "",
  topics: [],
  done: {},
  daily: null,
  tasks: {},
  notes: {},
  quizzes: {},
  reviews: {},
  stats: { answered: 0, correct: 0 },
  streak: { last: null, count: 0, best: 0 },
  settings: { name: "", examTitle: "", examDate: "", reminderTime: "19:00", apiKey: "", model: ai.DEFAULT_MODEL },
});

let state = load();
let view = location.hash.replace("#", "") || "hoje";
let quizTopicId = null;
let groupFilter = "";
let busy = {};

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) return { ...initialState(), ...saved, settings: { ...initialState().settings, ...saved.settings } };
  } catch {}
  return initialState();
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const $ = (sel) => document.querySelector(sel);
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const today = () => dateKey();
const topicById = (id) => state.topics.find((t) => t.id === id);
const hasAI = () => Boolean(state.settings.apiKey);

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2600);
}

function setTask(id, value = true) {
  const d = today();
  state.tasks[d] ||= {};
  state.tasks[d][id] = value;
  registerStudy(state, d);
}

// ---------- Render ----------

function render() {
  document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  if (!state.topics.length && view !== "config") view = "inicio";
  const main = $("#main");
  const views = { inicio: renderOnboarding, hoje: renderToday, conteudo: renderChecklist, questoes: renderQuiz, config: renderSettings };
  main.innerHTML = (views[view] || renderToday)();
  main.focus({ preventScroll: true });
  if (view === "hoje") autoPrepareLesson();
}

// Com IA configurada, prepara sozinho a aula de temas que não estão na biblioteca offline.
const autoTried = new Set();
function autoPrepareLesson() {
  const topic = topicById(state.daily?.topicId);
  if (!topic || !hasAI() || lessonOf(topic) || busy.lesson || autoTried.has(topic.id)) return;
  autoTried.add(topic.id);
  setTimeout(() => actions["ai-lesson"](), 0);
}

function renderOnboarding() {
  return `
  <section class="card hero">
    <h1>Bem-vindo(a) ao Plantão de Estudos 🩺</h1>
    <p>Cole abaixo o <strong>conteúdo programático</strong> do seu edital. Eu vou transformar em um checklist,
    sortear um tema por dia, aplicar a técnica Feynman, gerar questões e te lembrar de estudar todos os dias.</p>
  </section>
  <section class="card">
    <label>Seu nome<input id="in-name" value="${esc(state.settings.name)}" placeholder="Ex.: Mariana"></label>
    <label>Concurso<input id="in-exam" value="${esc(state.settings.examTitle)}" placeholder="Ex.: Enfermeiro — Prefeitura de ..."></label>
    <label>Data da prova<input id="in-date" type="date" value="${esc(state.settings.examDate)}"></label>
    <label>Conteúdo programático
      <textarea id="in-syllabus" rows="12" placeholder="CONHECIMENTOS ESPECÍFICOS: 1. Lei 8.080/1990; 2. Código de Ética de Enfermagem; 3. Sistematização da Assistência de Enfermagem...">${esc(state.syllabusRaw)}</textarea>
    </label>
    <div class="row">
      <button class="primary" data-action="import-syllabus">Gerar meu plano de estudos</button>
      <button data-action="load-example">Usar exemplo</button>
    </div>
  </section>
  ${renderPresets()}`;
}

function renderPresets() {
  return `<section class="card">
    <h3>📑 Editais prontos</h3>
    <p class="muted small">Planos montados a partir de editais enviados, com aulas e questões prontas para cada tema.</p>
    ${EDITAL_PRESETS.map((p) => `<button class="preset" data-action="use-preset" data-id="${p.id}">${esc(p.label)}</button>`).join("")}
  </section>`;
}

function renderToday() {
  const d = today();
  const topicId = ensureDailyTopic(state, d);
  save();
  const topic = topicById(topicId);
  const p = progress(state);
  const streak = currentStreak(state, d);
  const name = state.settings.name ? `, ${esc(state.settings.name.split(" ")[0])}` : "";
  const examDays = state.settings.examDate ? Math.ceil((new Date(state.settings.examDate + "T00:00") - new Date(d + "T00:00")) / 86400000) : null;

  const coach = `
    <section class="card coach">
      <div class="avatar" aria-hidden="true">💪</div>
      <div><strong>Coach${name}:</strong> <span>${esc(coachMessage(state, d))}</span></div>
    </section>`;

  const stats = `
    <section class="stats">
      <div><b>${p.pct}%</b><span>do edital</span></div>
      <div><b>${streak}🔥</b><span>dias seguidos</span></div>
      <div><b>${p.done}/${p.total}</b><span>temas</span></div>
      ${examDays !== null && examDays >= 0 ? `<div><b>${examDays}</b><span>dias p/ prova</span></div>` : ""}
    </section>`;

  if (!topic) {
    return `${coach}${stats}<section class="card hero"><h2>🎉 Edital completo!</h2>
      <p>Você concluiu todos os temas. Agora foque nas revisões e em resolver questões.</p></section>${renderReviews(d)}`;
  }

  const doneToday = state.done[topic.id];
  const tasks = dailyTasks(state, d);
  const checked = state.tasks[d] || {};
  const note = state.notes[topic.id] || {};

  return `
  ${coach}${stats}
  <section class="card topic">
    <p class="eyebrow">Tema do dia · ${esc(topic.group)}</p>
    <h2>${esc(topic.title)}</h2>
    ${doneToday ? `<p class="badge ok">✔ Concluído</p>` : ""}
    <div class="row">
      ${doneToday
        ? `<button class="primary" data-action="next-topic">Adiantar o próximo tema</button>`
        : `<button class="primary" data-action="complete-today">Concluir tema de hoje</button>
           <button data-action="next-topic">Trocar tema</button>`}
    </div>
  </section>

  <section class="card">
    <h3>✅ Tarefas de hoje</h3>
    <ul class="tasks">
      ${tasks.map((t) => `
        <li><label><input type="checkbox" data-action="toggle-task" data-id="${t.id}" ${checked[t.id] ? "checked" : ""}>
        <span>${esc(t.label)}</span></label></li>`).join("")}
    </ul>
  </section>

  ${renderLesson(topic, note)}

  <section class="card">
    <h3>📝 Questões do tema</h3>
    <p>Resolva as questões de múltipla escolha e a discursiva do dia.</p>
    <button class="primary" data-action="go-quiz" data-id="${topic.id}">Ir para as questões</button>
  </section>
  ${renderReviews(d)}`;
}

const list = (items) => `<ul>${items.map((k) => `<li>${esc(k)}</li>`).join("")}</ul>`;

// Aula do tema: gerada pela IA (se houver) ou da biblioteca offline.
function lessonOf(topic) {
  return state.notes[topic.id]?.lesson || lessonFor(topic);
}

function renderLesson(topic, note) {
  const lesson = lessonOf(topic);
  const checked = state.tasks[today()] || {};

  if (!lesson) {
    if (hasAI()) {
      return `<section class="card lesson"><h3>🧠 Aula do dia</h3>
        <p>${busy.lesson ? "⏳ Preparando sua aula sobre este tema…" : "Toque para o app preparar a aula deste tema."}</p>
        <button class="primary" data-action="ai-lesson" ${busy.lesson ? "disabled" : ""}>${busy.lesson ? "Preparando aula…" : "✨ Preparar aula"}</button>
      </section>`;
    }
    return `<section class="card lesson"><h3>🧠 Aula do dia</h3>
      <p>A biblioteca offline ainda não tem uma aula pronta para <b>${esc(topic.title)}</b>.</p>
      <p>Para o app ensinar <b>qualquer</b> tema do seu edital (conteúdo, explicação simples, pegadinhas e perguntas),
      adicione uma chave de IA em <a href="#config">Ajustes</a>.</p>
      <p class="muted small">Temas com aula offline: SUS e leis 8.080/8.142, PNAB, Lei 7.498, Código de Ética, Processo de Enfermagem,
      biossegurança, controle de infecção, segurança do paciente, cirurgia segura, cálculo e administração de medicamentos, diabetes,
      hipertensão, lesão por pressão, PCR, Glasgow, choque e sepse, imunização, vigilância epidemiológica, pré-natal, saúde da criança,
      sinais vitais, sondagens, CME, saúde mental e tuberculose.</p>
      <button data-action="next-topic">Pular para o próximo tema</button>
    </section>`;
  }

  const [s1, s2, s3, s4] = FEYNMAN_STEPS;
  return `<section class="card lesson">
    <p class="eyebrow">Aula do dia · Técnica Feynman</p>
    <h3>${esc(lesson.title || topic.title)}</h3>

    <details open><summary>${s1.icon} ${s1.title}</summary><p class="hint">${s1.hint}</p>${list(lesson.raw)}</details>

    <details open><summary>${s2.icon} ${s2.title}</summary><p class="hint">${s2.hint}</p>
      <p class="simple">${esc(lesson.simple)}</p>
      <h4>O que mais cai na prova</h4>${list(lesson.keyPoints)}
    </details>

    <details open><summary>${s3.icon} ${s3.title}</summary><p class="hint">${s3.hint}</p>
      <div class="traps">${list(lesson.traps)}</div>
    </details>

    <details open><summary>${s4.icon} ${s4.title}</summary><p class="hint">${s4.hint}</p>
      <p class="analogy"><b>Analogia:</b> ${esc(lesson.analogy)}</p>
      <p class="summary"><b>Em 3 frases:</b> ${esc(lesson.summary)}</p>
    </details>

    <details><summary>📚 Fontes para conferir</summary>${list(lesson.sources)}
      ${state.notes[topic.id]?.lesson ? `<p class="muted small">Aula gerada por IA: confira sempre na fonte oficial.</p>` : `<p class="muted small">Confira sempre a versão vigente da norma cobrada no seu edital.</p>`}
    </details>

    <button class="primary" data-action="lesson-read" ${checked.read ? "disabled" : ""}>${checked.read ? "✔ Aula estudada" : "Li e entendi a aula"}</button>
  </section>

  <section class="card">
    <h3>✅ Confira se entendeu</h3>
    <p class="muted small">Tente responder de cabeça e depois toque na pergunta para ver a resposta.</p>
    ${lesson.checks.map((c) => `<details class="check"><summary>${esc(c.q)}</summary><p>${esc(c.a)}</p></details>`).join("")}
    <button data-action="checks-done" ${checked.check ? "disabled" : ""}>${checked.check ? "✔ Checagem feita" : "Conferi minhas respostas"}</button>
  </section>

  <section class="card">
    <details ${note.explanation ? "open" : ""}><summary>✍️ Quer fixar ainda mais? Explique com suas palavras (opcional)</summary>
      <p class="hint">Reescrever o tema do seu jeito é a forma mais forte de memorizar.</p>
      <textarea data-note="explanation" rows="5" placeholder="Explique como se fosse para um paciente...">${esc(note.explanation)}</textarea>
      <div class="row">
        <button data-action="save-feynman">Salvar</button>
        ${hasAI() ? `<button data-action="ai-review" ${busy.review ? "disabled" : ""}>${busy.review ? "Avaliando…" : "✨ Avaliar minha explicação"}</button>` : ""}
      </div>
      ${note.feedback ? renderFeedback(note.feedback) : ""}
    </details>
  </section>`;
}

function renderFeedback(f) {
  return `<div class="feedback">
    <p><b>Nota: ${esc(f.score)}/10</b></p>
    ${f.strengths.length ? `<h4>Acertos</h4><ul>${f.strengths.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    ${f.gaps.length ? `<h4>Lacunas</h4><ul>${f.gaps.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    <h4>Versão simplificada</h4><p>${esc(f.simpler)}</p>
  </div>`;
}

function renderReviews(d) {
  const due = reviewsDue(state, d);
  if (!due.length) return "";
  return `<section class="card">
    <h3>🔁 Revisão espaçada</h3>
    <p class="muted">Revise rapidamente relendo sua explicação Feynman e refazendo as questões.</p>
    <ul class="reviews">${due.map(({ topic, interval }) => `
      <li><span>${esc(topic.title)} <small class="muted">(${interval} dia${interval > 1 ? "s" : ""})</small></span>
      <span class="row"><button data-action="go-quiz" data-id="${topic.id}">Questões</button>
      <button data-action="reviewed" data-id="${topic.id}" data-interval="${interval}">Revisado ✔</button></span></li>`).join("")}
    </ul></section>`;
}

function renderChecklist() {
  const p = progress(state);
  const groups = [...new Set(state.topics.map((t) => t.group))];
  const shown = groupFilter ? groups.filter((g) => g === groupFilter) : groups;
  return `
  <section class="card">
    <h2>📋 Conteúdo programático</h2>
    <div class="bar" role="progressbar" aria-valuenow="${p.pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${p.pct}%"></span></div>
    <p>${p.done} de ${p.total} temas concluídos (${p.pct}%)</p>
    ${groups.length > 1 ? `<label>Disciplina<select data-action="filter-group">
      <option value="">Todas</option>${groups.map((g) => `<option ${g === groupFilter ? "selected" : ""}>${esc(g)}</option>`).join("")}
    </select></label>` : ""}
  </section>
  ${shown.map((g) => {
    const items = state.topics.filter((t) => t.group === g);
    const gd = items.filter((t) => state.done[t.id]).length;
    return `<section class="card">
      <h3>${esc(g)} <small class="muted">${gd}/${items.length}</small></h3>
      <ul class="checklist">${items.map((t) => `
        <li class="${state.done[t.id] ? "done" : ""} ${state.daily?.topicId === t.id ? "current" : ""}">
          <label><input type="checkbox" data-action="toggle-topic" data-id="${t.id}" ${state.done[t.id] ? "checked" : ""}>
          <span>${esc(t.title)}${state.done[t.id] ? ` <small class="muted">· ${state.done[t.id].split("-").reverse().join("/")}</small>` : ""}</span></label>
          <button class="link" data-action="study-now" data-id="${t.id}" title="Estudar este tema hoje">Estudar</button>
        </li>`).join("")}
      </ul></section>`;
  }).join("")}`;
}

function renderQuiz() {
  quizTopicId ||= state.daily?.topicId || state.topics[0]?.id;
  const topic = topicById(quizTopicId);
  if (!topic) return `<section class="card"><p>Nenhum tema disponível.</p></section>`;
  const quiz = state.quizzes[topic.id] || {};
  const questions = quiz.ai?.multiple?.length ? quiz.ai.multiple.map((q, i) => ({ ...q, id: "ai-" + i })) : bankQuestionsFor(topic);
  const discursive = quiz.ai?.discursive?.[0] || { q: discursiveFor(topic, today()), expected: [] };
  const answers = quiz.answers || {};
  const acc = state.stats.answered ? Math.round((state.stats.correct / state.stats.answered) * 100) : 0;

  return `
  <section class="card">
    <h2>📝 Questões</h2>
    <label>Tema<select data-action="quiz-topic">
      ${state.topics.map((t) => `<option value="${t.id}" ${t.id === topic.id ? "selected" : ""}>${esc(t.title)}</option>`).join("")}
    </select></label>
    <p class="muted">Seu aproveitamento geral: <b>${acc}%</b> (${state.stats.correct}/${state.stats.answered})</p>
    ${hasAI()
      ? `<button class="primary" data-action="ai-quiz" ${busy.quiz ? "disabled" : ""}>${busy.quiz ? "Gerando questões…" : "✨ Gerar questões inéditas com IA"}</button>`
      : `<p class="muted small">Sem IA configurada: usando o banco offline. Para questões inéditas sobre <em>qualquer</em> tema do edital, adicione sua chave em <a href="#config">Ajustes</a>.</p>`}
  </section>

  ${questions.length ? questions.map((q, i) => renderMC(q, i, answers[q.id])).join("") : `
    <section class="card"><p>Ainda não há questões de múltipla escolha offline para este tema.
    ${hasAI() ? "Toque em <b>Gerar questões inéditas com IA</b>." : `Faça o <b>simulado geral</b> abaixo ou configure a IA.`}</p></section>`}

  <section class="card">
    <h3>✍️ Questão discursiva</h3>
    <p>${esc(discursive.q)}</p>
    <textarea data-disc="${topic.id}" rows="8" placeholder="Escreva sua resposta como na prova...">${esc(quiz.discAnswer)}</textarea>
    <div class="row">
      <button data-action="save-disc" data-id="${topic.id}">Salvar resposta</button>
      ${hasAI() ? `<button data-action="ai-disc" data-id="${topic.id}" ${busy.disc ? "disabled" : ""}>${busy.disc ? "Corrigindo…" : "✨ Corrigir com IA"}</button>` : ""}
    </div>
    ${discursive.expected?.length ? `<details><summary>Espelho de resposta (o que a banca espera)</summary><ul>${discursive.expected.map((e) => `<li>${esc(e)}</li>`).join("")}</ul></details>`
      : `<details><summary>Checklist de autocorreção</summary><ul>
        <li>Apresentei o conceito de forma correta e objetiva?</li><li>Citei a base legal/norma (lei, resolução COFEN, portaria, manual do MS)?</li>
        <li>Descrevi as atribuições/intervenções do enfermeiro?</li><li>Dei um exemplo prático?</li><li>Texto com introdução, desenvolvimento e conclusão?</li></ul></details>`}
    ${quiz.discFeedback ? renderFeedback(quiz.discFeedback) : ""}
  </section>

  <section class="card">
    <h3>🎯 Simulado geral</h3>
    <p class="muted">Questões do banco offline relacionadas a todo o seu edital.</p>
    <button data-action="general-quiz">Sortear questão</button>
    <div id="general-q"></div>
  </section>`;
}

function renderMC(q, i, chosen) {
  const answered = chosen !== undefined;
  return `<section class="card mc" data-qid="${q.id}">
    <p class="eyebrow">Questão ${i + 1}</p>
    <p>${esc(q.q)}</p>
    <ol class="options" type="A">${q.options.map((o, k) => `
      <li><button class="opt ${answered && k === q.answer ? "right" : ""} ${answered && k === chosen && k !== q.answer ? "wrong" : ""}"
        data-action="answer" data-qid="${q.id}" data-k="${k}" data-answer="${q.answer}" ${answered ? "disabled" : ""}>${esc(o)}</button></li>`).join("")}
    </ol>
    ${answered ? `<p class="explain ${chosen === q.answer ? "ok" : "bad"}"><b>${chosen === q.answer ? "Acertou! 🎉" : "Errou — ótimo para aprender!"}</b> ${esc(q.explain)}</p>` : ""}
  </section>`;
}

function renderSettings() {
  const s = state.settings;
  const perm = notify.notificationsSupported() ? Notification.permission : "unsupported";
  return `
  <section class="card">
    <h2>⚙️ Ajustes</h2>
    <label>Seu nome<input data-setting="name" value="${esc(s.name)}"></label>
    <label>Concurso<input data-setting="examTitle" value="${esc(s.examTitle)}"></label>
    <label>Data da prova<input type="date" data-setting="examDate" value="${esc(s.examDate)}"></label>
  </section>

  <section class="card">
    <h3>🔔 Lembrete diário</h3>
    <label>Horário<input type="time" data-setting="reminderTime" value="${esc(s.reminderTime)}"></label>
    <p class="muted small">Status das notificações: <b>${{ granted: "ativadas", denied: "bloqueadas no navegador", default: "não ativadas", unsupported: "não suportadas neste navegador" }[perm]}</b></p>
    <div class="row">
      <button class="primary" data-action="enable-notif">Ativar notificações</button>
      <button data-action="test-notif">Testar agora</button>
      <button data-action="download-ics">📅 Adicionar à agenda</button>
    </div>
    <p class="muted small">Para receber o lembrete mesmo com o app fechado, toque em <b>Adicionar à agenda</b>: um evento diário com alarme será criado no seu calendário.
    No Android, instale o app na tela inicial para lembretes em segundo plano.</p>
  </section>

  <section class="card">
    <h3>✨ Inteligência artificial (opcional)</h3>
    <p class="muted small">Com uma chave da API do Claude (console.anthropic.com), o app gera o conteúdo do tema, avalia sua explicação Feynman,
    cria questões inéditas e corrige discursivas. A chave fica salva somente neste aparelho e é enviada apenas para a Anthropic.</p>
    <label>Chave da API<input type="password" data-setting="apiKey" value="${esc(s.apiKey)}" placeholder="sk-ant-..." autocomplete="off"></label>
    <label>Modelo<input data-setting="model" value="${esc(s.model)}"></label>
  </section>

  <section class="card">
    <h3>📚 Conteúdo programático</h3>
    <p class="muted small">Adicionar mais conteúdo mantém o progresso dos temas já existentes.</p>
    <textarea id="in-syllabus" rows="8">${esc(state.syllabusRaw)}</textarea>
    <div class="row"><button class="primary" data-action="import-syllabus">Atualizar temas</button></div>
  </section>
  ${renderPresets()}

  <section class="card">
    <h3>💾 Backup</h3>
    <div class="row">
      <button data-action="export">Exportar progresso</button>
      <label class="button">Importar<input type="file" accept="application/json" data-action="import-file" hidden></label>
      <button class="danger" data-action="reset">Apagar tudo</button>
    </div>
  </section>`;
}

// ---------- Actions ----------

const EXAMPLE = `LEGISLAÇÃO DO SUS
1. Lei nº 8.080/1990; 2. Lei nº 8.142/1990 e controle social; 3. Política Nacional de Atenção Básica.
CONHECIMENTOS ESPECÍFICOS
1. Lei do exercício profissional (Lei nº 7.498/1986); 2. Código de Ética dos Profissionais de Enfermagem.
3. Sistematização da Assistência de Enfermagem e Processo de Enfermagem.
4. Biossegurança e NR 32; 5. Controle de infecção e higienização das mãos.
6. Segurança do paciente; 7. Cálculo e administração de medicamentos.
8. Lesão por pressão e tratamento de feridas; 9. Urgência e emergência: PCR e reanimação.
10. Imunização e calendário vacinal; 11. Hipertensão e diabetes; 12. Saúde da mulher: pré-natal.`;

function importSyllabus() {
  const raw = $("#in-syllabus").value;
  const parsed = parseSyllabus(raw);
  if (!parsed.length) return toast("Não encontrei temas. Cole o conteúdo programático do edital.");
  if (view === "inicio") {
    state.settings.name = $("#in-name").value.trim();
    state.settings.examTitle = $("#in-exam").value.trim();
    state.settings.examDate = $("#in-date").value;
  }
  // Preserva IDs/progresso de temas já existentes com o mesmo título e disciplina.
  const byKey = new Map(state.topics.map((t) => [(t.group + "|" + t.title).toLowerCase(), t]));
  state.topics = parsed.map((t) => byKey.get((t.group + "|" + t.title).toLowerCase()) || t);
  state.syllabusRaw = raw;
  if (!topicById(state.daily?.topicId)) state.daily = null;
  save();
  toast(`${state.topics.length} temas criados! Bons estudos.`);
  go("hoje");
  setupReminder();
}

async function runAI(key, fn) {
  if (busy[key]) return;
  busy[key] = true;
  render();
  try {
    await fn();
  } catch (e) {
    console.error(e);
    toast("Erro na IA: " + (e.message || e));
  } finally {
    busy[key] = false;
    save();
    render();
  }
}

function aiOpts() {
  return { apiKey: state.settings.apiKey, model: state.settings.model };
}

function saveNotesFromDOM(topicId) {
  const note = (state.notes[topicId] ||= {});
  document.querySelectorAll("[data-note]").forEach((el) => (note[el.dataset.note] = el.value));
  return note;
}

function go(v) {
  view = v;
  if (location.hash !== "#" + v) history.replaceState(null, "", "#" + v);
  render();
  window.scrollTo(0, 0);
}

const actions = {
  "load-example": () => ($("#in-syllabus").value = EXAMPLE),
  "use-preset": (el) => {
    const preset = EDITAL_PRESETS.find((p) => p.id === el.dataset.id);
    if (!preset) return;
    if (state.topics.length && !confirm("Substituir o conteúdo programático atual por este edital? O progresso de temas iguais é mantido.")) return;
    $("#in-syllabus").value = preset.text;
    if (view === "inicio" && !$("#in-exam").value) $("#in-exam").value = preset.label.split(" (")[0];
    importSyllabus();
  },
  "import-syllabus": importSyllabus,
  "toggle-task": (el) => {
    setTask(el.dataset.id, el.checked);
    save();
  },
  "complete-today": () => {
    const id = state.daily?.topicId;
    if (!id) return;
    saveNotesFromDOM(id);
    markDone(state, id, today());
    save();
    toast("Tema concluído! 🎉");
    render();
  },
  "next-topic": () => {
    const id = advanceDailyTopic(state, today());
    save();
    toast(id ? "Novo tema carregado." : "Não há mais temas pendentes!");
    render();
  },
  "save-feynman": () => {
    saveNotesFromDOM(state.daily.topicId);
    save();
    toast("Explicação salva.");
  },
  "lesson-read": () => {
    setTask("read");
    save();
    toast("Aula estudada! Agora confira se entendeu. 💪");
    render();
  },
  "checks-done": () => {
    setTask("check");
    save();
    toast("Ótimo! Hora das questões.");
    render();
  },
  "ai-lesson": () => {
    const topic = topicById(state.daily.topicId);
    runAI("lesson", async () => {
      const lesson = await ai.generateLesson({ ...aiOpts(), topic: topic.title, group: topic.group });
      (state.notes[topic.id] ||= {}).lesson = { ...lesson, title: topic.title };
    });
  },
  "ai-review": () => {
    const topic = topicById(state.daily.topicId);
    const note = saveNotesFromDOM(topic.id);
    if (!note.explanation?.trim()) return toast("Escreva sua explicação primeiro.");
    runAI("review", async () => {
      note.feedback = await ai.reviewExplanation({ ...aiOpts(), topic: topic.title, explanation: note.explanation });
    });
  },
  "go-quiz": (el) => {
    quizTopicId = el.dataset.id;
    go("questoes");
  },
  "quiz-topic": (el) => {
    quizTopicId = el.value;
    render();
  },
  answer: (el) => {
    const k = Number(el.dataset.k);
    const correct = k === Number(el.dataset.answer);
    const quiz = (state.quizzes[quizTopicId] ||= {});
    quiz.answers ||= {};
    quiz.answers[el.dataset.qid] = k;
    state.stats.answered++;
    if (correct) state.stats.correct++;
    if (quizTopicId === state.daily?.topicId) {
      const total = document.querySelectorAll(".mc").length;
      if (Object.keys(quiz.answers).length >= total) setTask("quiz");
    }
    registerStudy(state, today());
    save();
    render();
    document.querySelector(`[data-qid="${el.dataset.qid}"]`)?.scrollIntoView({ block: "center" });
  },
  "ai-quiz": () => {
    const topic = topicById(quizTopicId);
    runAI("quiz", async () => {
      const result = await ai.generateQuiz({ ...aiOpts(), topic: topic.title, group: topic.group });
      result.multiple = result.multiple.filter((q) => q.options.length >= 2 && q.answer >= 0 && q.answer < q.options.length);
      state.quizzes[topic.id] = { ...state.quizzes[topic.id], ai: result, answers: {}, discFeedback: null };
    });
  },
  "save-disc": (el) => {
    const quiz = (state.quizzes[el.dataset.id] ||= {});
    quiz.discAnswer = document.querySelector(`[data-disc="${el.dataset.id}"]`).value;
    if (quiz.discAnswer.trim() && el.dataset.id === state.daily?.topicId) setTask("discursive");
    save();
    toast("Resposta salva.");
  },
  "ai-disc": (el) => {
    const topic = topicById(el.dataset.id);
    const quiz = (state.quizzes[topic.id] ||= {});
    quiz.discAnswer = document.querySelector(`[data-disc="${topic.id}"]`).value;
    if (!quiz.discAnswer.trim()) return toast("Escreva sua resposta primeiro.");
    if (topic.id === state.daily?.topicId) setTask("discursive");
    const question = quiz.ai?.discursive?.[0]?.q || discursiveFor(topic, today());
    runAI("disc", async () => {
      quiz.discFeedback = await ai.reviewDiscursive({ ...aiOpts(), question, answer: quiz.discAnswer });
    });
  },
  "general-quiz": () => {
    const related = new Map();
    state.topics.forEach((t) => bankQuestionsFor(t, 50).forEach((q) => related.set(q.id, q)));
    const pool = related.size ? [...related.values()] : QUESTION_BANK.map((q, i) => ({ ...q, id: "bank-" + i }));
    const q = pool[Math.floor(Math.random() * pool.length)];
    $("#general-q").innerHTML = renderMC({ ...q, id: "g-" + q.id }, 0).replace(/data-action="answer"/g, 'data-action="general-answer"');
  },
  "general-answer": (el) => {
    const k = Number(el.dataset.k);
    const answer = Number(el.dataset.answer);
    state.stats.answered++;
    if (k === answer) state.stats.correct++;
    registerStudy(state, today());
    save();
    const card = el.closest(".mc");
    card.querySelectorAll(".opt").forEach((b, i) => {
      b.disabled = true;
      if (i === answer) b.classList.add("right");
      else if (i === k) b.classList.add("wrong");
    });
    const bankIdx = Number(card.dataset.qid.replace("g-bank-", ""));
    card.insertAdjacentHTML("beforeend", `<p class="explain ${k === answer ? "ok" : "bad"}"><b>${k === answer ? "Acertou! 🎉" : "Errou — revise este ponto."}</b> ${esc(QUESTION_BANK[bankIdx]?.explain)}</p>`);
  },
  reviewed: (el) => {
    markReviewed(state, el.dataset.id, Number(el.dataset.interval));
    if (!reviewsDue(state, today()).length) setTask("review");
    registerStudy(state, today());
    save();
    toast("Revisão registrada!");
    render();
  },
  "toggle-topic": (el) => {
    markDone(state, el.dataset.id, today(), el.checked);
    save();
    render();
  },
  "study-now": (el) => {
    state.daily = { date: today(), topicId: el.dataset.id };
    save();
    go("hoje");
  },
  "filter-group": (el) => {
    groupFilter = el.value;
    render();
  },
  "enable-notif": async () => {
    const r = await notify.requestPermission();
    toast(r === "granted" ? "Notificações ativadas!" : r === "unsupported" ? "Seu navegador não suporta notificações." : "Permissão negada.");
    setupReminder();
    render();
  },
  "test-notif": async () => {
    const ok = await notify.showNotification("Hora de estudar! 📚", coachMessage(state, today()));
    if (!ok) toast("Ative as notificações primeiro.");
  },
  "download-ics": () => {
    const blob = new Blob([notify.buildICS(state.settings.reminderTime, state.settings.examTitle)], { type: "text/calendar" });
    download(blob, "lembrete-estudo.ics");
  },
  export: () => download(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }), `plantao-estudos-${today()}.json`),
  reset: () => {
    if (!confirm("Apagar todo o progresso deste aparelho?")) return;
    state = initialState();
    save();
    go("inicio");
  },
};

function download(blob, name) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

document.addEventListener("click", (e) => {
  const nav = e.target.closest("nav button");
  if (nav) return go(nav.dataset.view);
  const el = e.target.closest("[data-action]");
  if (el && el.tagName !== "SELECT" && el.type !== "checkbox" && el.type !== "file") actions[el.dataset.action]?.(el);
});

document.addEventListener("change", (e) => {
  const el = e.target;
  if (el.dataset.action && (el.tagName === "SELECT" || el.type === "checkbox")) actions[el.dataset.action]?.(el);
  if (el.dataset.action === "import-file" && el.files[0]) {
    el.files[0].text().then((txt) => {
      try {
        state = { ...initialState(), ...JSON.parse(txt) };
        save();
        toast("Progresso importado!");
        go("hoje");
      } catch {
        toast("Arquivo inválido.");
      }
    });
  }
  if (el.dataset.setting) {
    state.settings[el.dataset.setting] = el.value.trim();
    save();
    if (el.dataset.setting === "reminderTime") setupReminder();
    toast("Ajuste salvo.");
  }
});

// Salva rascunhos das anotações enquanto digita.
document.addEventListener("input", (e) => {
  if (e.target.dataset.note && state.daily?.topicId) {
    (state.notes[state.daily.topicId] ||= {})[e.target.dataset.note] = e.target.value;
    save();
  }
});

window.addEventListener("hashchange", () => {
  const v = location.hash.replace("#", "");
  if (v && v !== view) go(v);
});

function setupReminder() {
  notify.scheduleReminder(
    state.settings.reminderTime,
    () => coachMessage(state, today()),
    () => state.streak?.last === today(),
  );
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(setupReminder).catch(console.error);
}

render();
