// Banco de questões offline (usado quando não há chave de IA configurada ou como complemento).
// `tags` são trechos (sem acento, minúsculos) procurados no título do tema do edital.
// `answer` é o índice da alternativa correta.

export const QUESTION_BANK = [
  {
    tags: ["8080", "8.080", "sus", "sistema unico", "lei organica"],
    q: "A Lei nº 8.080/1990 dispõe principalmente sobre:",
    options: [
      "A participação da comunidade na gestão do SUS e as transferências intergovernamentais de recursos.",
      "As condições para a promoção, proteção e recuperação da saúde e a organização e o funcionamento dos serviços correspondentes.",
      "O exercício profissional da enfermagem.",
      "A Política Nacional de Atenção Básica.",
    ],
    answer: 1,
    explain: "A Lei 8.080/90 é a Lei Orgânica da Saúde. A participação da comunidade e as transferências de recursos são objeto da Lei 8.142/90.",
  },
  {
    tags: ["8142", "8.142", "controle social", "participacao", "conselho", "conferencia"],
    q: "Segundo a Lei nº 8.142/1990, a Conferência de Saúde reúne-se:",
    options: ["A cada 2 anos.", "Anualmente.", "A cada 4 anos.", "A cada 5 anos."],
    answer: 2,
    explain: "A Conferência de Saúde reúne-se a cada 4 anos, com a representação dos vários segmentos sociais, para avaliar a situação de saúde e propor diretrizes.",
  },
  {
    tags: ["controle social", "conselho", "8142", "8.142", "participacao"],
    q: "Nos Conselhos de Saúde, a representação dos usuários deve ser:",
    options: [
      "Paritária em relação ao conjunto dos demais segmentos (50% das vagas).",
      "De 25% das vagas.",
      "De um terço das vagas.",
      "Definida livremente pelo gestor municipal.",
    ],
    answer: 0,
    explain: "A representação dos usuários é paritária em relação ao conjunto dos demais segmentos (50%); trabalhadores de saúde 25%; gestores e prestadores 25%.",
  },
  {
    tags: ["sus", "principio", "diretriz", "8080", "8.080"],
    q: "São princípios doutrinários do SUS:",
    options: [
      "Descentralização, regionalização e hierarquização.",
      "Universalidade, integralidade e equidade.",
      "Participação popular, descentralização e universalidade.",
      "Hierarquização, equidade e resolutividade.",
    ],
    answer: 1,
    explain: "Universalidade, integralidade e equidade são os princípios doutrinários. Descentralização, regionalização, hierarquização e participação popular são diretrizes/princípios organizativos.",
  },
  {
    tags: ["atencao basica", "atencao primaria", "pnab", "estrategia saude da familia", "esf", "saude da familia"],
    q: "Segundo a PNAB (Portaria nº 2.436/2017), a equipe de Saúde da Família (eSF) é composta, no mínimo, por:",
    options: [
      "Médico, enfermeiro e agente comunitário de saúde.",
      "Médico, enfermeiro, auxiliar e/ou técnico de enfermagem e agente comunitário de saúde.",
      "Médico, enfermeiro, dentista e técnico de enfermagem.",
      "Enfermeiro, técnico de enfermagem e agente de combate às endemias.",
    ],
    answer: 1,
    explain: "A composição mínima da eSF é médico (preferencialmente de família e comunidade), enfermeiro (preferencialmente especialista em saúde da família), auxiliar e/ou técnico de enfermagem e ACS.",
  },
  {
    tags: ["7498", "7.498", "exercicio profissional", "lei do exercicio", "legislacao"],
    q: "De acordo com a Lei nº 7.498/1986, é atividade PRIVATIVA do enfermeiro:",
    options: [
      "Administração de medicamentos por via oral.",
      "Participação na programação da assistência de saúde.",
      "Consulta de enfermagem e prescrição da assistência de enfermagem.",
      "Realização de curativos simples.",
    ],
    answer: 2,
    explain: "O art. 11 lista como privativos do enfermeiro, entre outros: consulta de enfermagem, prescrição da assistência de enfermagem, cuidados diretos a pacientes graves com risco de vida e cuidados de maior complexidade técnica.",
  },
  {
    tags: ["etica", "codigo de etica", "cepe", "564", "deontologia"],
    q: "São penalidades previstas no Código de Ética dos Profissionais de Enfermagem (Resolução COFEN nº 564/2017):",
    options: [
      "Advertência verbal, multa, censura, suspensão e cassação do direito ao exercício profissional.",
      "Advertência escrita, prisão administrativa e cassação.",
      "Multa, demissão e suspensão.",
      "Advertência verbal, exoneração e censura.",
    ],
    answer: 0,
    explain: "O art. 108 prevê: advertência verbal, multa, censura, suspensão do exercício profissional e cassação do direito ao exercício profissional.",
  },
  {
    tags: ["sae", "sistematizacao", "processo de enfermagem", "358", "736", "diagnostico de enfermagem"],
    q: "Conforme a Resolução COFEN nº 736/2024, que revogou a Resolução 358/2009, o Processo de Enfermagem organiza-se nas etapas:",
    options: [
      "Histórico, exame físico, prescrição e alta.",
      "Avaliação de Enfermagem, Diagnóstico de Enfermagem, Planejamento de Enfermagem, Implementação de Enfermagem e Evolução de Enfermagem.",
      "Anamnese, diagnóstico médico, tratamento e evolução.",
      "Coleta de dados, prescrição médica, implementação e avaliação.",
    ],
    answer: 1,
    explain: "A Res. 736/2024 organiza o PE em cinco etapas inter-relacionadas: Avaliação, Diagnóstico, Planejamento, Implementação e Evolução de Enfermagem. Atenção: confira no edital qual norma está sendo cobrada.",
  },
  {
    tags: ["biosseguranca", "nr 32", "nr-32", "nr32", "saude do trabalhador", "perfurocortante"],
    q: "Segundo a NR-32, em relação aos materiais perfurocortantes, é CORRETO afirmar:",
    options: [
      "O reencape de agulhas é permitido quando feito com as duas mãos.",
      "É vedado o reencape e a desconexão manual de agulhas.",
      "Os coletores podem ser preenchidos até a borda.",
      "Agulhas podem ser descartadas em lixo comum se protegidas com esparadrapo.",
    ],
    answer: 1,
    explain: "A NR-32 veda o reencape e a desconexão manual de agulhas. Os coletores devem respeitar o limite de preenchimento indicado.",
  },
  {
    tags: ["higienizacao das maos", "higiene das maos", "infeccao", "iras", "controle de infeccao", "seguranca do paciente"],
    q: "Qual alternativa NÃO corresponde a um dos 5 momentos para a higiene das mãos (OMS/ANVISA)?",
    options: [
      "Antes de tocar o paciente.",
      "Antes de realizar procedimento limpo/asséptico.",
      "Após tocar superfícies próximas ao paciente.",
      "Antes de entrar no posto de enfermagem.",
    ],
    answer: 3,
    explain: "Os 5 momentos são: antes de tocar o paciente; antes de procedimento limpo/asséptico; após risco de exposição a fluidos corporais; após tocar o paciente; após tocar superfícies próximas ao paciente.",
  },
  {
    tags: ["precaucao", "isolamento", "tuberculose", "infeccao", "biosseguranca", "aerossol"],
    q: "Para paciente com suspeita de tuberculose pulmonar bacilífera, a precaução indicada é:",
    options: [
      "Precaução de contato, com luvas e avental.",
      "Precaução para gotículas, com máscara cirúrgica para o profissional.",
      "Precaução para aerossóis, com máscara N95/PFF2 e quarto privativo, preferencialmente com pressão negativa.",
      "Apenas precaução padrão.",
    ],
    answer: 2,
    explain: "Tuberculose, sarampo e varicela exigem precaução para aerossóis: respirador N95/PFF2 para o profissional e quarto privativo (idealmente com pressão negativa e porta fechada).",
  },
  {
    tags: ["seguranca do paciente", "metas", "pnsp", "529", "rdc 36", "qualidade"],
    q: "A primeira meta internacional de segurança do paciente é:",
    options: [
      "Reduzir o risco de quedas.",
      "Identificar corretamente o paciente.",
      "Assegurar cirurgia segura.",
      "Melhorar a comunicação entre profissionais.",
    ],
    answer: 1,
    explain: "Metas: 1) identificação correta; 2) comunicação efetiva; 3) segurança de medicamentos de alta vigilância; 4) cirurgia segura; 5) higiene das mãos/redução de infecções; 6) redução de quedas e lesões por pressão.",
  },
  {
    tags: ["cirurgia segura", "centro cirurgico", "seguranca do paciente", "perioperatorio", "checklist"],
    q: "A Lista de Verificação de Cirurgia Segura (OMS) é aplicada em três momentos:",
    options: [
      "Admissão, transoperatório e alta hospitalar.",
      "Antes da indução anestésica, antes da incisão cirúrgica e antes de o paciente sair da sala.",
      "Pré-operatório mediato, imediato e pós-operatório tardio.",
      "Antes da tricotomia, durante a anestesia e na sala de recuperação.",
    ],
    answer: 1,
    explain: "Sign in (antes da indução anestésica), Time out (antes da incisão) e Sign out (antes de o paciente sair da sala de cirurgia).",
  },
  {
    tags: ["pcr", "parada", "reanimacao", "rcp", "urgencia", "emergencia", "suporte basico", "bls"],
    q: "Na RCP do adulto sem via aérea avançada, as recomendações da AHA são:",
    options: [
      "80 a 100 compressões/min, profundidade de 4 cm, relação 15:2.",
      "100 a 120 compressões/min, profundidade de 5 a 6 cm, relação 30:2.",
      "Mais de 120 compressões/min, profundidade de 7 cm, relação 30:1.",
      "100 compressões/min, profundidade de 3 cm, relação 5:1.",
    ],
    answer: 1,
    explain: "Compressões de alta qualidade: 100–120/min, 5–6 cm de profundidade, retorno total do tórax, mínimo de interrupções e relação 30:2 sem via aérea avançada.",
  },
  {
    tags: ["calculo", "medicacao", "medicamento", "farmacologia", "administracao de medicamentos", "gotejamento"],
    q: "Prescrição: 1.000 mL de SF 0,9% em 8 horas. Com equipo macrogotas, o gotejamento aproximado é:",
    options: ["125 gotas/min.", "42 gotas/min.", "21 gotas/min.", "63 gotas/min."],
    answer: 1,
    explain: "Macrogotas: gotas/min = V ÷ (T × 3) = 1000 ÷ 24 ≈ 41,6 → 42 gotas/min. Em microgotas seria V ÷ T = 125 microgotas/min.",
  },
  {
    tags: ["calculo", "medicacao", "medicamento", "farmacologia", "diluicao"],
    q: "Prescrição: 500 mg de um antibiótico. Disponível: frasco-ampola de 1 g para diluir em 10 mL. Quanto aspirar?",
    options: ["2 mL.", "5 mL.", "7,5 mL.", "10 mL."],
    answer: 1,
    explain: "1 g = 1.000 mg em 10 mL → 100 mg/mL. 500 mg ÷ 100 mg/mL = 5 mL.",
  },
  {
    tags: ["insulina", "diabetes", "medicacao", "endocrin"],
    q: "Ao preparar insulina regular e NPH na mesma seringa, deve-se:",
    options: [
      "Aspirar primeiro a NPH e depois a regular.",
      "Aspirar primeiro a regular (transparente) e depois a NPH (leitosa).",
      "Agitar vigorosamente o frasco de NPH antes de aspirar.",
      "Nunca associar os dois tipos na mesma seringa.",
    ],
    answer: 1,
    explain: "Aspira-se primeiro a insulina regular (cristalina) para não contaminá-la com NPH. A NPH deve ser homogeneizada rolando o frasco entre as mãos, sem agitar.",
  },
  {
    tags: ["diabetes", "hipoglicemia", "endocrin", "doencas cronicas"],
    q: "Paciente consciente com glicemia capilar de 55 mg/dL. A conduta inicial recomendada é:",
    options: [
      "Administrar insulina regular.",
      "Oferecer 15 g de carboidrato de absorção rápida e reavaliar a glicemia em 15 minutos.",
      "Aguardar a próxima refeição.",
      "Iniciar soro fisiológico 0,9%.",
    ],
    answer: 1,
    explain: "Hipoglicemia: glicemia < 70 mg/dL. Paciente consciente: regra dos 15 (15 g de carboidrato de ação rápida, reavaliar em 15 min e repetir se necessário).",
  },
  {
    tags: ["hipertensao", "has", "doencas cronicas", "cardiovascular", "pressao arterial", "sinais vitais"],
    q: "Segundo a Diretriz Brasileira de Hipertensão Arterial (2020), considera-se hipertensão a PA de consultório:",
    options: ["≥ 120/80 mmHg.", "≥ 130/85 mmHg.", "≥ 140/90 mmHg.", "≥ 160/100 mmHg."],
    answer: 2,
    explain: "HA é definida por PA sistólica ≥ 140 mmHg e/ou diastólica ≥ 90 mmHg, medida com técnica correta em pelo menos duas ocasiões.",
  },
  {
    tags: ["sinais vitais", "semiologia", "semiotecnica", "exame fisico", "fundamentos"],
    q: "Em adulto em repouso, qual achado caracteriza taquipneia?",
    options: ["FR de 14 irpm.", "FR de 18 irpm.", "FR de 26 irpm.", "FR de 12 irpm."],
    answer: 2,
    explain: "A FR normal do adulto é de 12 a 20 irpm. Acima de 20 irpm caracteriza taquipneia.",
  },
  {
    tags: ["lesao por pressao", "lpp", "ferida", "curativo", "pele", "ulcera"],
    q: "Lesão por pressão com perda da pele em sua espessura total, gordura visível, sem exposição de fáscia, músculo, tendão ou osso, é classificada como:",
    options: ["Estágio 1.", "Estágio 2.", "Estágio 3.", "Estágio 4."],
    answer: 2,
    explain: "NPIAP: estágio 1 = pele íntegra com eritema que não embranquece; 2 = perda parcial com exposição da derme; 3 = perda total com gordura visível; 4 = perda total com exposição de fáscia, músculo, tendão, ligamento, cartilagem ou osso.",
  },
  {
    tags: ["braden", "lesao por pressao", "lpp", "escala", "risco"],
    q: "Sobre a Escala de Braden, é CORRETO afirmar:",
    options: [
      "Quanto maior o escore, maior o risco de lesão por pressão.",
      "Possui 6 subescalas e, quanto menor o escore, maior o risco.",
      "Avalia o nível de consciência pela abertura ocular.",
      "É utilizada para avaliar risco de queda.",
    ],
    answer: 1,
    explain: "Braden avalia percepção sensorial, umidade, atividade, mobilidade, nutrição e fricção/cisalhamento. Escore de 6 a 23: quanto menor, maior o risco.",
  },
  {
    tags: ["glasgow", "neurolog", "consciencia", "trauma", "urgencia", "emergencia"],
    q: "Na Escala de Coma de Glasgow, a melhor resposta motora pontua de:",
    options: ["1 a 4.", "1 a 5.", "1 a 6.", "0 a 6."],
    answer: 2,
    explain: "Abertura ocular: 1–4; resposta verbal: 1–5; resposta motora: 1–6. Na versão com reatividade pupilar (2018), subtrai-se 0 a 2 pontos.",
  },
  {
    tags: ["apgar", "recem-nascido", "neonat", "saude da crianca", "sala de parto"],
    q: "O índice de Apgar avalia:",
    options: [
      "Peso, estatura, perímetro cefálico, reflexos e cor.",
      "Frequência cardíaca, esforço respiratório, tônus muscular, irritabilidade reflexa e cor.",
      "Temperatura, glicemia, saturação, choro e sucção.",
      "Idade gestacional pelo método Capurro.",
    ],
    answer: 1,
    explain: "Apgar é avaliado no 1º e no 5º minuto de vida, considerando FC, respiração, tônus, irritabilidade reflexa e cor (0 a 2 pontos cada).",
  },
  {
    tags: ["imunizacao", "vacina", "pni", "bcg", "calendario vacinal"],
    q: "A vacina BCG é administrada:",
    options: [
      "Por via intramuscular, no vasto lateral da coxa.",
      "Por via intradérmica, na inserção inferior do músculo deltoide direito, em dose única ao nascer.",
      "Por via subcutânea, no braço esquerdo, aos 2 meses.",
      "Por via oral, aos 2 e 4 meses.",
    ],
    answer: 1,
    explain: "BCG: dose única, via intradérmica, na inserção inferior do deltoide direito, preferencialmente ao nascer.",
  },
  {
    tags: ["imunizacao", "vacina", "pni", "hepatite b", "calendario vacinal", "rede de frio"],
    q: "A temperatura de conservação das vacinas na rede de frio (instância local) deve ser mantida entre:",
    options: ["−20 °C e −10 °C.", "0 °C e +4 °C.", "+2 °C e +8 °C.", "+8 °C e +15 °C."],
    answer: 2,
    explain: "Na sala de vacinação, os imunobiológicos são conservados entre +2 °C e +8 °C (idealmente +5 °C).",
  },
  {
    tags: ["notificacao", "vigilancia epidemiologica", "epidemiologia", "doencas transmissiveis", "agravos"],
    q: "A notificação compulsória IMEDIATA deve ser realizada em até:",
    options: ["24 horas.", "48 horas.", "7 dias.", "30 dias."],
    answer: 0,
    explain: "Notificação imediata: em até 24 horas a partir do conhecimento da ocorrência. A semanal deve ser feita em até 7 dias.",
  },
  {
    tags: ["sonda", "nasogastrica", "cateterismo", "nutricao enteral", "semiotecnica", "procedimento"],
    q: "Para mensurar o comprimento da sonda nasogástrica a ser introduzido em adulto, mede-se:",
    options: [
      "Da ponta do nariz ao lóbulo da orelha e deste até o apêndice xifoide.",
      "Da boca até a cicatriz umbilical.",
      "Do lóbulo da orelha até a crista ilíaca.",
      "Da ponta do nariz até o esterno.",
    ],
    answer: 0,
    explain: "Técnica NEX (nose–ear–xiphoid): ponta do nariz → lóbulo da orelha → apêndice xifoide. Para sonda nasoentérica, acrescentam-se centímetros conforme protocolo institucional.",
  },
  {
    tags: ["choque", "urgencia", "emergencia", "hemorragia", "trauma", "paciente critico", "uti"],
    q: "São sinais compatíveis com choque hipovolêmico:",
    options: [
      "Bradicardia, hipertensão e pele quente.",
      "Taquicardia, hipotensão, pele fria e pegajosa e oligúria.",
      "Poliúria, febre e hipertensão.",
      "Bradipneia, rubor facial e poliúria.",
    ],
    answer: 1,
    explain: "A perda de volume causa taquicardia compensatória, vasoconstrição periférica (pele fria/pálida), queda da PA e redução do débito urinário.",
  },
  {
    tags: ["saude da mulher", "pre-natal", "prenatal", "gestacao", "obstetri"],
    q: "Qual vacina é recomendada a toda gestante a partir da 20ª semana de gestação, a cada gestação, pelo PNI?",
    options: ["Tríplice viral.", "dTpa (tríplice bacteriana acelular do adulto).", "Febre amarela.", "Varicela."],
    answer: 1,
    explain: "A dTpa é indicada a cada gestação a partir da 20ª semana, para proteção do recém-nascido contra coqueluche. Vacinas de vírus vivo atenuado (tríplice viral, varicela) são contraindicadas na gestação.",
  },
];

// Frases do coach motivacional, separadas por contexto.
export const COACH = {
  start: [
    "Toda aprovação começa com o primeiro tema. Hoje é o seu dia 1 — vamos juntos!",
    "Você não precisa estudar tudo hoje. Só precisa estudar o tema de hoje.",
  ],
  streak: [
    "{n} dias seguidos! A constância está construindo a sua vaga.",
    "Sequência de {n} dias. Enfermeiro que planeja o cuidado também planeja a aprovação!",
    "{n} dias sem falhar. O seu futuro colega de plantão já está esperando por você.",
  ],
  missed: [
    "Ficou uns dias sem estudar? Tudo bem. Plantão cansa. O importante é voltar hoje.",
    "Recomeçar não é voltar do zero — é voltar com experiência. Bora pro tema de hoje?",
  ],
  doneToday: [
    "Missão de hoje cumprida! Descanse: o cérebro consolida o que você aprendeu enquanto dorme.",
    "Tema concluído! Se sobrar energia, faça as questões de revisão. Se não sobrar, orgulhe-se mesmo assim.",
  ],
  general: [
    "Explique como se fosse para um paciente leigo: se você consegue simplificar, você domina.",
    "Errar questão agora é ótimo: é a banca te mostrando o que ela vai cobrar.",
    "25 minutos de foco valem mais que 2 horas distraído. Celular longe, cronômetro ligado!",
    "Você cuida de vidas todos os dias. Cuidar da sua preparação também é cuidado.",
    "A banca não sabe o quanto você está cansado — mas a sua disciplina sabe o quanto você quer.",
    "Pequenos passos diários vencem maratonas de véspera.",
  ],
  progress: [
    "Você já concluiu {p}% do edital. Cada tema marcado é um ponto a mais na prova.",
    "{p}% do conteúdo dominado. Continue: o edital está ficando menor a cada dia!",
  ],
  examSoon: [
    "Faltam {d} dias para a prova. Priorize revisão e questões — é hora de lapidar.",
    "Reta final: {d} dias. Confie no que você construiu e mantenha a rotina.",
  ],
};

// Técnica Feynman aplicada pelo próprio app a cada aula.
export const FEYNMAN_STEPS = [
  { icon: "📖", title: "1. Conteúdo bruto", hint: "O que a banca cobra: conceitos, números, prazos e exceções." },
  { icon: "🧠", title: "2. Explicação simples", hint: "O mesmo conteúdo explicado como se fosse para um leigo." },
  { icon: "🔍", title: "3. Lacunas e pegadinhas", hint: "Onde os candidatos mais erram. Preste atenção aqui." },
  { icon: "✨", title: "4. Simplificação final", hint: "Uma analogia do dia a dia e o tema resumido em 3 frases." },
];

export const DISCURSIVE_TEMPLATES = [
  "Discorra sobre \"{t}\", abordando conceito, fundamentação legal/científica e as atribuições do enfermeiro.",
  "Um paciente sob seus cuidados apresenta uma situação relacionada a \"{t}\". Descreva a avaliação de enfermagem, pelo menos dois diagnósticos de enfermagem e as intervenções prioritárias.",
  "Explique a importância de \"{t}\" para a segurança do paciente e para a qualidade da assistência, citando exemplos práticos.",
  "Elabore um plano de educação em saúde sobre \"{t}\" para a equipe de enfermagem ou para a comunidade.",
];
