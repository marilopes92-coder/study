import { test } from "node:test";
import assert from "node:assert/strict";
import { parseSyllabus } from "../js/parser.js";
import {
  ensureDailyTopic, advanceDailyTopic, markDone, currentStreak, progress,
  reviewsDue, markReviewed, bankQuestionsFor, coachMessage, daysBetween, lessonFor,
} from "../js/planner.js";
import { LESSONS } from "../js/lessons.js";

const SYLLABUS = `LEGISLAÇÃO DO SUS
1. Lei nº 8.080/1990; 2. Lei nº 8.142/1990 e controle social.
CONHECIMENTOS ESPECÍFICOS:
1. Código de Ética dos Profissionais de Enfermagem
2. Biossegurança e NR 32; 3. Cálculo de medicação.`;

const newState = () => ({ topics: parseSyllabus(SYLLABUS), done: {}, daily: null, streak: null, settings: {} });

test("parser separa disciplinas e temas", () => {
  const topics = parseSyllabus(SYLLABUS);
  assert.deepEqual(topics.map((t) => t.title), [
    "Lei nº 8.080/1990", "Lei nº 8.142/1990 e controle social",
    "Código de Ética dos Profissionais de Enfermagem", "Biossegurança e NR 32", "Cálculo de medicação",
  ]);
  assert.equal(topics[0].group, "LEGISLAÇÃO DO SUS");
  assert.equal(topics[2].group, "CONHECIMENTOS ESPECÍFICOS");
  assert.equal(new Set(topics.map((t) => t.id)).size, topics.length);
});

test("parser aceita 'DISCIPLINA: tema; tema' em uma linha", () => {
  const topics = parseSyllabus("SAÚDE PÚBLICA: Vigilância epidemiológica; Imunização.");
  assert.deepEqual(topics.map((t) => [t.group, t.title]), [
    ["SAÚDE PÚBLICA", "Vigilância epidemiológica"], ["SAÚDE PÚBLICA", "Imunização"],
  ]);
});

test("um tema por dia, mantido no mesmo dia e avançado no seguinte", () => {
  const s = newState();
  const t1 = ensureDailyTopic(s, "2026-09-27");
  assert.equal(t1, s.topics[0].id);
  markDone(s, t1, "2026-09-27");
  assert.equal(ensureDailyTopic(s, "2026-09-27"), t1, "mantém o tema concluído no mesmo dia");
  assert.equal(ensureDailyTopic(s, "2026-09-28"), s.topics[1].id);
  assert.equal(advanceDailyTopic(s, "2026-09-28"), s.topics[2].id);
});

test("sequência de dias e progresso", () => {
  const s = newState();
  markDone(s, s.topics[0].id, "2026-09-25");
  markDone(s, s.topics[1].id, "2026-09-26");
  markDone(s, s.topics[2].id, "2026-09-27");
  assert.equal(currentStreak(s, "2026-09-27"), 3);
  assert.equal(currentStreak(s, "2026-09-29"), 0);
  assert.deepEqual(progress(s), { total: 5, done: 3, pct: 60 });
});

test("revisão espaçada em 1, 7 e 30 dias", () => {
  const s = newState();
  markDone(s, s.topics[0].id, "2026-09-01");
  assert.equal(reviewsDue(s, "2026-09-01").length, 0);
  assert.equal(reviewsDue(s, "2026-09-02")[0].interval, 1);
  markReviewed(s, s.topics[0].id, 1);
  assert.equal(reviewsDue(s, "2026-09-05").length, 0);
  assert.equal(reviewsDue(s, "2026-09-08")[0].interval, 7);
});

test("banco offline encontra questões pelo tema", () => {
  const [lei] = parseSyllabus("1. Lei nº 8.080/1990");
  assert.ok(bankQuestionsFor(lei).length > 0);
  const [calc] = parseSyllabus("Cálculo e diluição de medicamentos");
  assert.ok(bankQuestionsFor(calc).some((q) => q.q.includes("gotejamento") || q.q.includes("aspirar")));
});

test("coach sempre retorna uma mensagem", () => {
  const s = newState();
  assert.match(coachMessage(s, "2026-09-27"), /\S/);
  s.settings.examDate = "2026-10-07";
  s.streak = { last: "2026-09-26", count: 4 };
  assert.match(coachMessage(s, "2026-09-27"), /10 dias/);
});

test("daysBetween", () => {
  assert.equal(daysBetween("2026-02-28", "2026-03-01"), 1);
});

test("todas as aulas offline têm o formato Feynman completo", () => {
  for (const l of LESSONS) {
    for (const k of ["raw", "keyPoints", "traps", "checks", "sources"]) assert.ok(l[k].length > 0, `${l.id}.${k}`);
    for (const k of ["title", "simple", "analogy", "summary"]) assert.ok(l[k].trim(), `${l.id}.${k}`);
    for (const c of l.checks) assert.ok(c.q && c.a, `${l.id} check`);
  }
  assert.equal(new Set(LESSONS.map((l) => l.id)).size, LESSONS.length);
});

test("o app encontra a aula certa para temas típicos de edital", () => {
  const cases = {
    "Lei nº 8.080/1990": "lei8080",
    "Lei 8.142/90 e controle social": "lei8142",
    "Código de Ética dos Profissionais de Enfermagem": "etica",
    "Sistematização da Assistência de Enfermagem (SAE)": "processo-enfermagem",
    "Biossegurança e NR 32": "nr32",
    "Cálculo e diluição de medicamentos": "calculo",
    "Lesão por pressão: prevenção e tratamento": "lpp-feridas",
    "Parada cardiorrespiratória e RCP": "pcr",
    "Imunização: calendário vacinal e rede de frio": "imunizacao",
    "Assistência de enfermagem no pré-natal": "prenatal",
    "Política Nacional de Atenção Básica": "pnab",
    "Tuberculose": "tuberculose",
    "Reforma psiquiátrica e RAPS": "saude-mental",
  };
  for (const [title, id] of Object.entries(cases)) {
    assert.equal(lessonFor({ title, group: "CONHECIMENTOS ESPECÍFICOS" })?.id, id, title);
  }
  assert.equal(lessonFor({ title: "Hemodiálise e diálise peritoneal", group: "Geral" }), null);
});
