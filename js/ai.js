// Integração opcional com a API do Claude (Anthropic).
// A chave é fornecida pelo próprio usuário nas Configurações e fica salva apenas neste aparelho.
// Sem chave, o app funciona 100% offline com o banco de questões local.

const SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk/+esm";
export const DEFAULT_MODEL = "claude-opus-5";

let clientPromise = null;
let clientKey = null;

async function getClient(apiKey) {
  if (!clientPromise || clientKey !== apiKey) {
    clientKey = apiKey;
    clientPromise = import(SDK_URL).then(
      ({ default: Anthropic }) => new Anthropic({ apiKey, dangerouslyAllowBrowser: true }),
    );
  }
  return clientPromise;
}

const SYSTEM = [
  "Você é um professor de enfermagem especialista em concursos públicos no Brasil",
  "(bancas como CEBRASPE, FGV, VUNESP, IBFC, AOCP, Instituto Consulplan).",
  "Baseie-se em legislação vigente (Lei 8.080/90, Lei 7.498/86, Código de Ética COFEN,",
  "resoluções COFEN, portarias do Ministério da Saúde, protocolos ANVISA) e em literatura",
  "de referência. Escreva em português do Brasil. Se houver norma recente que substitui outra,",
  "cite a vigente e mencione a anterior.",
].join(" ");

async function askJSON({ apiKey, model, prompt, schema, maxTokens = 8000 }) {
  const client = await getClient(apiKey);
  const response = await client.beta.messages.create({
    model: model || DEFAULT_MODEL,
    max_tokens: maxTokens,
    system: SYSTEM,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "low", format: { type: "json_schema", schema } },
    messages: [{ role: "user", content: prompt }],
  });
  if (response.stop_reason === "refusal") {
    throw new Error("A IA recusou esta solicitação. Tente reformular o tema.");
  }
  if (response.stop_reason === "max_tokens") {
    throw new Error("A resposta da IA foi cortada. Tente novamente.");
  }
  const text = response.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  return JSON.parse(text);
}

const QUIZ_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["multiple", "discursive"],
  properties: {
    multiple: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["q", "options", "answer", "explain"],
        properties: {
          q: { type: "string" },
          options: { type: "array", items: { type: "string" } },
          answer: { type: "integer" },
          explain: { type: "string" },
        },
      },
    },
    discursive: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["q", "expected"],
        properties: {
          q: { type: "string" },
          expected: { type: "array", items: { type: "string" } },
        },
      },
    },
  },
};

export function generateQuiz({ apiKey, model, topic, group, count = 5 }) {
  return askJSON({
    apiKey,
    model,
    schema: QUIZ_SCHEMA,
    prompt:
      `Crie ${count} questões de múltipla escolha (5 alternativas, só uma correta, "answer" é o índice 0-4) ` +
      `e 1 questão discursiva sobre o tema do edital de concurso para ENFERMEIRO:\n\n` +
      `Disciplina: ${group}\nTema: ${topic}\n\n` +
      `Use o estilo das bancas, com pegadinhas comuns (exceções, prazos, "EXCETO", "INCORRETA"). ` +
      `Em "explain", justifique a correta e por que as demais estão erradas, citando a fonte. ` +
      `Em "expected", liste os pontos que a banca espera na resposta discursiva.`,
  });
}

const STR_LIST = { type: "array", items: { type: "string" } };

const LESSON_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["raw", "simple", "analogy", "summary", "keyPoints", "traps", "checks", "sources"],
  properties: {
    raw: STR_LIST,
    simple: { type: "string" },
    analogy: { type: "string" },
    summary: { type: "string" },
    keyPoints: STR_LIST,
    traps: STR_LIST,
    checks: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["q", "a"],
        properties: { q: { type: "string" }, a: { type: "string" } },
      },
    },
    sources: STR_LIST,
  },
};

// Gera uma aula completa no formato Feynman: o app ensina, o estudante lê e confere.
export function generateLesson({ apiKey, model, topic, group }) {
  return askJSON({
    apiKey,
    model,
    schema: LESSON_SCHEMA,
    prompt:
      `Dê uma aula completa, aplicando você mesmo a técnica Feynman, sobre este tema de edital de concurso para ENFERMEIRO.\n\n` +
      `Disciplina: ${group}\nTema: ${topic}\n\n` +
      `"raw": o conteúdo bruto em 6 a 12 itens objetivos, com conceitos, classificações, números, prazos, exceções e a norma de origem (é o que a banca cobra). ` +
      `"simple": explicação do tema em linguagem simples, como se ensinasse a um leigo (1 a 2 parágrafos). ` +
      `"analogy": uma analogia do cotidiano que ajude a lembrar. ` +
      `"summary": o tema resumido em 3 frases. ` +
      `"keyPoints": 4 a 8 pontos que mais caem em prova. "traps": 2 a 5 pegadinhas e confusões frequentes (as lacunas mais comuns). ` +
      `"checks": 2 a 4 perguntas curtas de checagem com a resposta. "sources": leis, resoluções, manuais ou diretrizes oficiais para conferir.`,
  });
}

const FEEDBACK_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["score", "strengths", "gaps", "simpler"],
  properties: {
    score: { type: "integer" },
    strengths: { type: "array", items: { type: "string" } },
    gaps: { type: "array", items: { type: "string" } },
    simpler: { type: "string" },
  },
};

export function reviewExplanation({ apiKey, model, topic, explanation }) {
  return askJSON({
    apiKey,
    model,
    schema: FEEDBACK_SCHEMA,
    prompt:
      `Técnica Feynman. O estudante explicou o tema "${topic}" com as próprias palavras:\n\n` +
      `"""${explanation}"""\n\n` +
      `Avalie como um professor exigente, porém encorajador. "score": 0 a 10. ` +
      `"strengths": acertos. "gaps": erros conceituais e pontos importantes que faltaram (lacunas). ` +
      `"simpler": uma versão mais simples e correta da explicação, com uma analogia do cotidiano.`,
  });
}

export function reviewDiscursive({ apiKey, model, question, answer }) {
  return askJSON({
    apiKey,
    model,
    schema: FEEDBACK_SCHEMA,
    prompt:
      `Corrija esta resposta discursiva de concurso para enfermeiro como uma banca faria.\n\n` +
      `Questão: ${question}\n\nResposta do candidato:\n"""${answer}"""\n\n` +
      `"score": 0 a 10. "strengths": pontos corretos. "gaps": o que faltou ou está errado. ` +
      `"simpler": um modelo de resposta ideal, objetivo.`,
  });
}
