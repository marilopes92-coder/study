// Transforma o conteúdo programático bruto (colado do edital) em uma lista de temas.
// Regras:
//  - Linhas em CAIXA ALTA ou terminadas em ":" viram "disciplinas" (grupos).
//  - Cada linha restante é quebrada em temas por ";" e por numeração "1.", "1.1", "2)".
//  - Numeração, marcadores e pontuação final são removidos.

const HEADING_RE = /^(?:[A-ZÁÉÍÓÚÂÊÔÃÕÇÜ0-9\s\-–—/,()]+|.+:)$/;

export function cleanTopic(text) {
  return text
    .replace(/^[\s•\-–—*·>]+/, "")
    .replace(/^\(?\d+(?:\.\d+)*[.)\-–]?\s*/, "")
    .replace(/^[a-z]\)\s*/i, "")
    .replace(/[\s.;,:]+$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isHeading(line) {
  const l = line.trim();
  if (l.length < 3 || l.length > 120) return false;
  if (l.endsWith(":")) return true;
  const letters = l.replace(/[^A-Za-zÀ-ÿ]/g, "");
  return letters.length >= 4 && letters === letters.toUpperCase() && HEADING_RE.test(l);
}

export function parseSyllabus(raw) {
  const topics = [];
  let group = "Geral";
  const seen = new Set();

  const lines = String(raw || "")
    .replace(/\r/g, "")
    // quebra numerações inline: "... 2. Tema ... 3. Tema" -> linhas separadas
    .replace(/\s(?=\d{1,2}(?:\.\d{1,2})*[.)]\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ])/g, "\n")
    .split("\n");

  for (const line of lines) {
    if (!line.trim()) continue;

    // "DISCIPLINA: tema1; tema2" -> heading + temas
    const inline = line.match(/^([^:]{3,80}):\s*(.+)$/);
    if (inline && isHeading(inline[1] + ":") && inline[1] === inline[1].toUpperCase()) {
      group = cleanTopic(inline[1]);
      pushParts(inline[2]);
      continue;
    }

    if (isHeading(line)) {
      group = cleanTopic(line.replace(/:$/, "")) || group;
      continue;
    }
    pushParts(line);
  }

  function pushParts(text) {
    for (const part of text.split(/;|\s\|\s/)) {
      const title = cleanTopic(part);
      if (title.length < 3) continue;
      const key = (group + "|" + title).toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      topics.push({ id: "t" + topics.length.toString(36) + "-" + hash(key), group, title });
    }
  }

  return topics;
}

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36).slice(0, 6);
}
