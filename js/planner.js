// Regras de negócio puras (sem DOM) — testáveis com `node --test`.
import { QUESTION_BANK, COACH, DISCURSIVE_TEMPLATES } from "./data.js";

export const REVIEW_INTERVALS = [1, 7, 30]; // revisão espaçada (dias após concluir)

export function dateKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function daysBetween(a, b) {
  const [y1, m1, d1] = a.split("-").map(Number);
  const [y2, m2, d2] = b.split("-").map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
}

export function normalize(s) {
  return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

// Garante que exista um tema para o dia `today`. Mantém o tema já sorteado para o dia
// (mesmo que concluído) e, em um novo dia, avança para o próximo tema não concluído.
export function ensureDailyTopic(state, today) {
  if (state.daily?.date === today && state.topics.some((t) => t.id === state.daily.topicId)) {
    return state.daily.topicId;
  }
  const next = state.topics.find((t) => !state.done[t.id]);
  state.daily = { date: today, topicId: next ? next.id : null };
  return state.daily.topicId;
}

// Pula para o próximo tema pendente (ex.: "adiantar" ou "trocar tema de hoje").
export function advanceDailyTopic(state, today) {
  const current = state.daily?.topicId;
  const pending = state.topics.filter((t) => !state.done[t.id] && t.id !== current);
  state.daily = { date: today, topicId: pending[0]?.id ?? null };
  return state.daily.topicId;
}

export function markDone(state, topicId, today, done = true) {
  if (done) state.done[topicId] = today;
  else delete state.done[topicId];
  registerStudy(state, today);
}

export function registerStudy(state, today) {
  const s = state.streak || { last: null, count: 0, best: 0 };
  if (s.last !== today) {
    s.count = s.last && daysBetween(s.last, today) === 1 ? s.count + 1 : 1;
    s.last = today;
    s.best = Math.max(s.best || 0, s.count);
  }
  state.streak = s;
}

export function currentStreak(state, today) {
  const s = state.streak;
  if (!s?.last) return 0;
  const gap = daysBetween(s.last, today);
  return gap <= 1 ? s.count : 0;
}

export function progress(state) {
  const total = state.topics.length;
  const done = state.topics.filter((t) => state.done[t.id]).length;
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

// Temas concluídos que completam 1, 7 ou 30 dias hoje (ou atrasados e ainda não revisados).
export function reviewsDue(state, today) {
  const out = [];
  for (const t of state.topics) {
    const doneOn = state.done[t.id];
    if (!doneOn) continue;
    const age = daysBetween(doneOn, today);
    const reviewed = state.reviews?.[t.id] || [];
    const interval = REVIEW_INTERVALS.find((i) => age >= i && !reviewed.includes(i));
    if (interval) out.push({ topic: t, interval });
  }
  return out;
}

export function markReviewed(state, topicId, interval) {
  state.reviews ||= {};
  state.reviews[topicId] ||= [];
  if (!state.reviews[topicId].includes(interval)) state.reviews[topicId].push(interval);
}

export function bankQuestionsFor(topic, limit = 5) {
  const hay = normalize(`${topic.group} ${topic.title}`);
  const scored = QUESTION_BANK.map((q, i) => ({
    q: { ...q, id: "bank-" + i },
    score: q.tags.reduce((n, tag) => n + (hay.includes(tag) ? 1 : 0), 0),
  })).filter((x) => x.score > 0);
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((x) => x.q);
}

export function discursiveFor(topic, today) {
  const idx = (daysBetween("2024-01-01", today) + topic.title.length) % DISCURSIVE_TEMPLATES.length;
  return DISCURSIVE_TEMPLATES[idx].replace("{t}", topic.title);
}

function pick(list, seed) {
  return list[Math.abs(seed) % list.length];
}

export function coachMessage(state, today) {
  const seed = daysBetween("2024-01-01", today);
  const streak = currentStreak(state, today);
  const { pct } = progress(state);
  const todayTopic = state.daily?.date === today ? state.daily.topicId : null;
  const examDays = state.settings?.examDate ? daysBetween(today, state.settings.examDate) : null;

  if (todayTopic && state.done[todayTopic] === today) return pick(COACH.doneToday, seed);
  if (examDays !== null && examDays >= 0 && examDays <= 30) {
    return pick(COACH.examSoon, seed).replace("{d}", examDays);
  }
  if (!state.streak?.last) return pick(COACH.start, seed);
  if (streak === 0) return pick(COACH.missed, seed);
  if (streak >= 3 && seed % 2 === 0) return pick(COACH.streak, seed).replace("{n}", streak);
  if (pct >= 10 && seed % 3 === 0) return pick(COACH.progress, seed).replace("{p}", pct);
  return pick(COACH.general, seed);
}

export function dailyTasks(state, today) {
  const topicId = state.daily?.topicId;
  const topic = state.topics.find((t) => t.id === topicId);
  if (!topic) return [];
  const tasks = [
    { id: "read", label: `Ler o conteúdo bruto de "${topic.title}" (1 pomodoro de 25 min)` },
    { id: "feynman", label: "Aplicar a técnica Feynman: explicar, achar lacunas e simplificar" },
    { id: "quiz", label: "Resolver as questões de múltipla escolha do tema" },
    { id: "discursive", label: "Responder a questão discursiva do dia" },
  ];
  const due = reviewsDue(state, today);
  if (due.length) tasks.push({ id: "review", label: `Revisar ${due.length} tema(s) já estudado(s) (revisão espaçada)` });
  return tasks;
}
