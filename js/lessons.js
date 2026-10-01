// Biblioteca de aulas offline no formato Feynman.
// Cada aula: conteúdo bruto (raw) → explicação simples → analogia → resumo em 3 frases
// → pontos-chave → pegadinhas → perguntas de checagem → fontes oficiais.
// `tags` são trechos (minúsculos, sem acento) procurados no título do tema do edital.
// Conteúdo de apoio: confira sempre a norma vigente cobrada no seu edital.

import { PESQUISA_LESSONS } from "./lessons-pesquisa.js";

export const LESSONS = [
  {
    id: "lei8080",
    tags: ["8080", "8.080", "lei organica", "sistema unico de saude", "sus"],
    title: "Lei nº 8.080/1990 — Lei Orgânica da Saúde",
    raw: [
      "Regula as ações e serviços de saúde em todo o território nacional: condições para promoção, proteção e recuperação da saúde e organização e funcionamento dos serviços.",
      "Saúde é direito fundamental do ser humano; o Estado deve prover as condições indispensáveis ao seu pleno exercício — o que não exclui o dever das pessoas, da família, das empresas e da sociedade.",
      "Determinantes e condicionantes da saúde: alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso a bens e serviços essenciais.",
      "Campo de atuação do SUS inclui: vigilância sanitária, vigilância epidemiológica, saúde do trabalhador, assistência terapêutica integral (inclusive farmacêutica), vigilância nutricional, ordenação da formação de recursos humanos, entre outros.",
      "Princípios e diretrizes (art. 7º): universalidade de acesso; integralidade; preservação da autonomia; igualdade da assistência; direito à informação; uso da epidemiologia para prioridades; participação da comunidade; descentralização político-administrativa com direção única em cada esfera, com ênfase nos municípios; regionalização e hierarquização; capacidade de resolução.",
      "Direção única: União → Ministério da Saúde; Estados e DF → Secretarias Estaduais; Municípios → Secretarias Municipais de Saúde.",
      "A iniciativa privada participa de forma COMPLEMENTAR, com preferência para entidades filantrópicas e sem fins lucrativos.",
      "Subsistemas e alterações importantes: Atenção à Saúde Indígena (Lei 9.836/1999), atendimento e internação domiciliar (Lei 10.424/2002), direito a acompanhante no trabalho de parto, parto e pós-parto imediato (Lei 11.108/2005); Comissões Intergestores Bipartite e Tripartite reconhecidas (Lei 12.466/2011).",
    ],
    simple:
      "A Lei 8.080 é o \"manual de instruções\" do SUS. Ela diz que saúde é um direito de todos e que o governo tem a obrigação de garantir isso. Ela explica o que o SUS faz (vacinar, vigiar doenças, fiscalizar alimentos e remédios, atender pessoas, cuidar da saúde do trabalhador), quem manda em cada nível (Ministério, secretaria estadual, secretaria municipal) e quais são as regras de funcionamento: atender todo mundo, cuidar da pessoa por inteiro e dividir as responsabilidades entre os governos, dando mais força aos municípios.",
    analogy:
      "Pense no SUS como um grande hospital-escola com três andares (União, Estados, Municípios). A Lei 8.080 é o regimento interno: diz quem chefia cada andar, que serviços cada setor oferece e que ninguém pode ser barrado na porta. Os hospitais particulares são \"plantonistas extras\": entram só para complementar quando falta vaga.",
    summary:
      "A Lei 8.080/90 organiza o SUS e define saúde como direito de todos e dever do Estado. Traz os princípios (universalidade, integralidade, equidade/igualdade, descentralização, participação) e as competências de cada esfera. A rede privada atua de forma complementar, com preferência para filantrópicas.",
    keyPoints: [
      "Saúde = direito fundamental; dever do Estado (sem excluir o dever das pessoas, família, empresas e sociedade).",
      "Direção única em cada esfera de governo.",
      "Descentralização com ênfase na municipalização.",
      "Participação privada é complementar; preferência para filantrópicas e sem fins lucrativos.",
      "Vigilância sanitária, epidemiológica e saúde do trabalhador fazem parte do campo de atuação do SUS.",
    ],
    traps: [
      "Participação da comunidade e transferência de recursos são da Lei 8.142/90, não da 8.080.",
      "A participação privada NÃO é \"suplementar\" nem \"substitutiva\": é COMPLEMENTAR.",
      "Descentralização é para cada esfera com direção ÚNICA — não \"direção compartilhada\".",
    ],
    checks: [
      { q: "Quem exerce a direção do SUS no âmbito municipal?", a: "A Secretaria Municipal de Saúde (ou órgão equivalente)." },
      { q: "Como a iniciativa privada participa do SUS?", a: "De forma complementar, por contrato ou convênio, com preferência para entidades filantrópicas e sem fins lucrativos." },
      { q: "Cite três determinantes e condicionantes da saúde.", a: "Por exemplo: alimentação, moradia, saneamento básico, trabalho, renda, educação, lazer, transporte." },
    ],
    sources: ["Lei nº 8.080/1990 (texto compilado no planalto.gov.br)", "Constituição Federal, arts. 196 a 200"],
  },
  {
    id: "lei8142",
    tags: ["8142", "8.142", "controle social", "participacao da comunidade", "participacao social", "conselho de saude", "conferencia de saude"],
    title: "Lei nº 8.142/1990 — Participação da comunidade e financiamento",
    raw: [
      "Dispõe sobre a participação da comunidade na gestão do SUS e sobre as transferências intergovernamentais de recursos financeiros.",
      "Instâncias colegiadas em cada esfera de governo: Conferência de Saúde e Conselho de Saúde.",
      "Conferência de Saúde: reúne-se a cada 4 anos, com representação dos vários segmentos sociais, para avaliar a situação de saúde e propor diretrizes; convocada pelo Poder Executivo ou, extraordinariamente, por ela própria ou pelo Conselho de Saúde.",
      "Conselho de Saúde: caráter PERMANENTE e DELIBERATIVO; composto por governo, prestadores, profissionais de saúde e usuários; formula estratégias e controla a execução da política, inclusive nos aspectos econômicos e financeiros; decisões homologadas pelo chefe do poder legalmente constituído em cada esfera.",
      "Representação dos usuários é PARITÁRIA em relação ao conjunto dos demais segmentos (50% usuários; 25% trabalhadores de saúde; 25% gestores e prestadores — Resolução CNS 453/2012).",
      "CONASS e CONASEMS têm representação no Conselho Nacional de Saúde.",
      "Para receber recursos, municípios, estados e DF devem ter: Fundo de Saúde, Conselho de Saúde (paritário), Plano de Saúde, Relatório de Gestão, contrapartida de recursos no orçamento e comissão de elaboração do Plano de Carreira, Cargos e Salários (PCCS).",
    ],
    simple:
      "A Lei 8.142 garante que a população ajude a mandar no SUS e explica como o dinheiro chega a estados e municípios. Existem dois espaços para isso: a Conferência, um grande encontro a cada 4 anos para discutir rumos, e o Conselho, que funciona o tempo todo e fiscaliza e decide sobre a política de saúde. Nos conselhos, metade das cadeiras é dos usuários, para que quem usa o SUS tenha voz forte.",
    analogy:
      "É como um condomínio: a Conferência é a assembleia geral que acontece de tempos em tempos para definir os grandes rumos; o Conselho é o conselho fiscal que se reúne sempre e acompanha as contas. E, para receber a verba do \"condomínio maior\", o prédio precisa ter conta própria (Fundo), plano, relatório e conselho funcionando.",
    summary:
      "A Lei 8.142/90 cria as Conferências (a cada 4 anos) e os Conselhos de Saúde (permanentes e deliberativos). Os usuários ocupam 50% das vagas nos conselhos. Para receber recursos, o ente precisa de Fundo, Conselho, Plano, Relatório de Gestão, contrapartida e comissão de PCCS.",
    keyPoints: [
      "Conferência: a cada 4 anos.",
      "Conselho: permanente e deliberativo.",
      "Usuários: paridade (50%).",
      "Requisitos para repasses: Fundo, Conselho, Plano, Relatório de Gestão, contrapartida, comissão de PCCS.",
    ],
    traps: [
      "Conselho é DELIBERATIVO, não apenas consultivo.",
      "Conferência a cada 4 anos (não 2, não 5).",
      "Paridade é dos usuários em relação ao CONJUNTO dos demais segmentos, e não 1/4 para cada segmento.",
    ],
    checks: [
      { q: "Qual o caráter do Conselho de Saúde?", a: "Permanente e deliberativo." },
      { q: "Com que periodicidade ocorre a Conferência de Saúde?", a: "A cada 4 anos." },
      { q: "Qual a proporção de usuários no Conselho de Saúde?", a: "50% (paridade com o conjunto dos demais segmentos)." },
    ],
    sources: ["Lei nº 8.142/1990", "Resolução CNS nº 453/2012"],
  },
  {
    id: "principios-sus",
    tags: ["principio", "diretriz", "doutrinario", "organizativo", "historia do sus", "reforma sanitaria", "politicas publicas de saude", "politica de saude"],
    title: "Princípios e diretrizes do SUS",
    raw: [
      "Princípios doutrinários: UNIVERSALIDADE (acesso a todos), INTEGRALIDADE (ações de promoção, prevenção, tratamento e reabilitação, vendo a pessoa como um todo) e EQUIDADE (tratar desigualmente os desiguais, priorizando quem mais precisa).",
      "Princípios organizativos: DESCENTRALIZAÇÃO (com direção única em cada esfera), REGIONALIZAÇÃO, HIERARQUIZAÇÃO (níveis de complexidade) e PARTICIPAÇÃO POPULAR (controle social).",
      "Base constitucional: art. 196 — \"A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas...\"; art. 198 — diretrizes: descentralização, atendimento integral (prioridade às atividades preventivas, sem prejuízo dos serviços assistenciais) e participação da comunidade.",
      "Marco histórico: 8ª Conferência Nacional de Saúde (1986) e Reforma Sanitária → Constituição de 1988 → Leis 8.080 e 8.142 (1990).",
    ],
    simple:
      "Os princípios do SUS são as \"regras de ouro\". Três dizem O QUE o SUS deve ser: para todos (universalidade), cuidando de tudo que a pessoa precisa (integralidade) e dando mais a quem precisa mais (equidade). Os outros dizem COMO se organizar: dividir poder entre os governos (descentralização), organizar por regiões e por níveis de complexidade, do posto de saúde ao hospital (regionalização e hierarquização), e ouvir a população (participação).",
    analogy:
      "Equidade é como numa fila de pronto-socorro com classificação de risco: todos serão atendidos (universalidade), mas quem está em estado mais grave passa na frente (equidade), e o cuidado não termina na consulta: inclui exames, reabilitação e prevenção (integralidade).",
    summary:
      "Doutrinários: universalidade, integralidade e equidade. Organizativos: descentralização, regionalização, hierarquização e participação popular. Tudo nasce da Constituição de 1988, após a 8ª Conferência Nacional de Saúde.",
    keyPoints: [
      "U-I-E: Universalidade, Integralidade, Equidade (doutrinários).",
      "Descentralização, Regionalização, Hierarquização, Participação (organizativos).",
      "A 8ª CNS (1986) foi o marco da Reforma Sanitária.",
    ],
    traps: [
      "Equidade ≠ igualdade: equidade é dar mais a quem precisa mais.",
      "Hierarquização e regionalização são ORGANIZATIVOS, não doutrinários.",
      "Algumas bancas usam a lista literal do art. 7º da Lei 8.080 (que fala em \"igualdade da assistência\").",
    ],
    checks: [
      { q: "Quais são os princípios doutrinários do SUS?", a: "Universalidade, integralidade e equidade." },
      { q: "O que significa equidade?", a: "Tratar desigualmente os desiguais, investindo mais onde a necessidade é maior." },
    ],
    sources: ["Constituição Federal de 1988, arts. 196–200", "Lei nº 8.080/1990, art. 7º"],
  },
  {
    id: "pnab",
    tags: ["atencao basica", "atencao primaria", "pnab", "estrategia saude da familia", "saude da familia", "esf", "aps"],
    title: "Política Nacional de Atenção Básica (PNAB 2017)",
    raw: [
      "Portaria nº 2.436/2017 (consolidada na Portaria de Consolidação nº 2/2017).",
      "A Atenção Básica é a principal porta de entrada e centro de comunicação da Rede de Atenção à Saúde, coordenadora do cuidado e ordenadora das ações e serviços.",
      "Princípios: universalidade, equidade e integralidade. Diretrizes: regionalização e hierarquização, territorialização, população adscrita, cuidado centrado na pessoa, resolutividade, longitudinalidade do cuidado, coordenação do cuidado, ordenação da rede e participação da comunidade.",
      "A Estratégia Saúde da Família (ESF) é a estratégia prioritária de expansão e consolidação da Atenção Básica.",
      "Equipe de Saúde da Família (eSF) mínima: médico, enfermeiro, auxiliar e/ou técnico de enfermagem e agente comunitário de saúde (ACS). Pode incluir agente de combate às endemias e profissionais de saúde bucal.",
      "População adscrita por equipe: 2.000 a 3.500 pessoas (recomendação da PNAB 2017), considerando vulnerabilidade do território.",
      "Atribuições do enfermeiro na AB incluem: consulta de enfermagem, solicitação de exames complementares e prescrição de medicamentos conforme protocolos, supervisão de ACS e da equipe de enfermagem, atividades em grupo e visitas domiciliares.",
    ],
    simple:
      "A Atenção Básica é o posto de saúde perto da sua casa: é ali que o SUS quer que você entre primeiro. A equipe conhece o território, sabe quem mora ali e acompanha as pessoas ao longo da vida. Quando precisa de especialista ou hospital, é ela que encaminha e continua acompanhando. A Saúde da Família é o jeito preferido de organizar isso, com médico, enfermeiro, técnico de enfermagem e agentes comunitários.",
    analogy:
      "A equipe de Saúde da Família é como o \"médico de família\" de antigamente, só que em time: conhece a rua, a casa e a história de cada um. Ela funciona como uma central de tráfego: organiza para onde o paciente vai na rede e garante que ele volte.",
    summary:
      "A PNAB (Portaria 2.436/2017) define a Atenção Básica como porta de entrada preferencial e coordenadora do cuidado. A ESF é a estratégia prioritária, com equipe mínima de médico, enfermeiro, técnico/auxiliar e ACS. Diretrizes-chave: território, adscrição, longitudinalidade e coordenação do cuidado.",
    keyPoints: [
      "AB = porta de entrada preferencial, coordenadora do cuidado e ordenadora da rede.",
      "Equipe mínima da eSF: médico, enfermeiro, técnico/auxiliar de enfermagem e ACS.",
      "Longitudinalidade = vínculo e acompanhamento ao longo do tempo.",
    ],
    traps: [
      "O dentista NÃO faz parte da equipe mínima da eSF (compõe a equipe de Saúde Bucal).",
      "Longitudinalidade ≠ integralidade: é continuidade do vínculo no tempo.",
    ],
    checks: [
      { q: "Qual a composição mínima da equipe de Saúde da Família?", a: "Médico, enfermeiro, auxiliar e/ou técnico de enfermagem e ACS." },
      { q: "O que é longitudinalidade?", a: "Continuidade do cuidado e do vínculo com a mesma equipe ao longo do tempo." },
    ],
    sources: ["Portaria MS nº 2.436/2017 (PNAB)"],
  },
  {
    id: "lei7498",
    tags: ["7498", "7.498", "exercicio profissional", "lei do exercicio", "94406", "94.406", "legislacao profissional", "legislacao de enfermagem"],
    title: "Lei do Exercício Profissional de Enfermagem (Lei nº 7.498/1986)",
    raw: [
      "Regulamentada pelo Decreto nº 94.406/1987. A enfermagem é exercida por Enfermeiro, Técnico de Enfermagem, Auxiliar de Enfermagem e Parteira, respeitados os graus de habilitação.",
      "PRIVATIVO do Enfermeiro: direção do órgão de enfermagem e chefia de serviço e de unidade de enfermagem; organização, planejamento, coordenação, execução e avaliação dos serviços de assistência de enfermagem; consultoria, auditoria e emissão de parecer; CONSULTA de enfermagem; PRESCRIÇÃO da assistência de enfermagem; cuidados diretos a pacientes GRAVES com risco de vida; cuidados de MAIOR COMPLEXIDADE técnica que exijam conhecimentos científicos e capacidade de tomar decisões imediatas.",
      "Como integrante da equipe de saúde, o Enfermeiro: participa do planejamento e avaliação; prescreve medicamentos estabelecidos em programas de saúde pública e em rotina aprovada pela instituição; presta assistência à gestante, parturiente e puérpera; acompanha a evolução e o trabalho de parto; executa o parto sem distocia; atua em educação em saúde e prevenção de infecções.",
      "Técnico de Enfermagem: atividade de nível médio, envolvendo orientação e acompanhamento do trabalho de enfermagem em grau auxiliar e participação no planejamento da assistência.",
      "Auxiliar de Enfermagem: atividades de nível médio, de natureza repetitiva, sob supervisão.",
      "Técnicos e auxiliares só podem atuar em instituições de saúde sob ORIENTAÇÃO e SUPERVISÃO do Enfermeiro.",
    ],
    simple:
      "Essa lei diz quem pode fazer o quê na enfermagem. O enfermeiro é quem planeja, chefia, faz a consulta de enfermagem, prescreve os cuidados e assume os pacientes graves e os procedimentos mais complexos. O técnico ajuda a executar e a planejar, e o auxiliar faz tarefas mais rotineiras, sempre com o enfermeiro supervisionando.",
    analogy:
      "É como uma cozinha profissional: o enfermeiro é o chef, que monta o cardápio (prescrição de enfermagem), coordena a equipe e cuida dos pratos mais difíceis. O técnico é o sous-chef, e o auxiliar executa as preparações do dia a dia. Ninguém trabalha sem o chef supervisionando.",
    summary:
      "A Lei 7.498/86 (regulamentada pelo Decreto 94.406/87) define as categorias da enfermagem. São privativos do enfermeiro a consulta e a prescrição de enfermagem, os cuidados a pacientes graves e as atividades de maior complexidade. Técnicos e auxiliares atuam sob supervisão do enfermeiro.",
    keyPoints: [
      "Consulta e prescrição de enfermagem = PRIVATIVAS do enfermeiro.",
      "Prescrição de MEDICAMENTOS pelo enfermeiro: somente em programas de saúde pública e rotinas institucionais.",
      "Parto sem distocia: enfermeiro como integrante da equipe.",
    ],
    traps: [
      "Prescrever medicamentos NÃO é privativo do enfermeiro; é atividade como integrante da equipe, dentro de programas/protocolos.",
      "\"Participação no planejamento\" é atribuição do técnico; \"planejamento dos serviços\" é privativo do enfermeiro.",
    ],
    checks: [
      { q: "A prescrição da assistência de enfermagem é atividade de quem?", a: "Privativa do enfermeiro." },
      { q: "Em que condição o enfermeiro prescreve medicamentos?", a: "Quando estabelecidos em programas de saúde pública e em rotina aprovada pela instituição." },
    ],
    sources: ["Lei nº 7.498/1986", "Decreto nº 94.406/1987"],
  },
  {
    id: "etica",
    tags: ["etica", "codigo de etica", "cepe", "564", "deontologia", "etica profissional"],
    title: "Código de Ética dos Profissionais de Enfermagem (Res. COFEN 564/2017)",
    raw: [
      "Organizado em princípios fundamentais, direitos, deveres, proibições, infrações e penalidades.",
      "Penalidades: advertência verbal, multa, censura, suspensão do exercício profissional e cassação do direito ao exercício profissional.",
      "Multa: de 1 a 10 vezes o valor da anuidade. Suspensão: até 90 dias. Cassação: até 30 anos.",
      "Advertência verbal, multa, censura e suspensão são aplicadas pelos Conselhos Regionais; a cassação é aplicada pelo Conselho Federal (ouvido o Regional).",
      "Infrações são classificadas em leves, graves e gravíssimas, conforme a natureza do ato e as circunstâncias.",
      "Sigilo profissional: dever de manter sigilo sobre fatos conhecidos no exercício profissional, exceto nos casos previstos em lei, por ordem judicial ou com consentimento escrito da pessoa ou representante legal; em atividade multiprofissional, fatos podem ser revelados quando necessário à prestação da assistência.",
      "Registro em prontuário: dever de registrar de forma clara, objetiva, cronológica, legível, completa e sem rasuras.",
      "Direito de recusar-se a executar atividades que não sejam de sua competência técnica, científica, ética e legal ou que não ofereçam segurança ao profissional, à pessoa, à família e à coletividade.",
    ],
    simple:
      "O Código de Ética é o conjunto de regras de conduta da enfermagem: o que podemos (direitos), o que devemos (deveres) e o que é proibido. Quem descumpre sofre punições, que vão da mais leve (uma advertência verbal) até a mais grave (perder o direito de trabalhar como profissional de enfermagem). Os conselhos regionais aplicam quase todas; só a cassação é do Conselho Federal.",
    analogy:
      "É como um cartão de futebol em escala: advertência verbal é a conversa do juiz, multa e censura são o cartão amarelo, suspensão é o vermelho (fica uns jogos fora) e cassação é ser banido do campeonato.",
    summary:
      "O CEPE (Res. COFEN 564/2017) traz direitos, deveres, proibições e penalidades. As penalidades, em ordem, são: advertência verbal, multa, censura, suspensão e cassação. Sigilo e registro correto em prontuário são deveres centrais.",
    keyPoints: [
      "Ordem das penalidades: advertência verbal → multa → censura → suspensão → cassação.",
      "Cassação: competência do COFEN.",
      "Sigilo tem exceções: previsão legal, ordem judicial, consentimento escrito.",
    ],
    traps: [
      "Não existe \"advertência escrita\" como penalidade: é advertência VERBAL.",
      "A cassação não é aplicada pelo COREN, e sim pelo COFEN.",
    ],
    checks: [
      { q: "Quais são as penalidades previstas no CEPE?", a: "Advertência verbal, multa, censura, suspensão e cassação." },
      { q: "Quem aplica a cassação?", a: "O Conselho Federal de Enfermagem (COFEN), ouvido o Conselho Regional." },
    ],
    sources: ["Resolução COFEN nº 564/2017"],
  },
  {
    id: "processo-enfermagem",
    tags: ["sae", "sistematizacao", "processo de enfermagem", "358", "736", "diagnostico de enfermagem", "nanda", "cipe", "consulta de enfermagem"],
    title: "Processo de Enfermagem e SAE (Res. COFEN 736/2024)",
    raw: [
      "A Resolução COFEN 736/2024 revogou a 358/2009 e dispõe sobre a implementação do Processo de Enfermagem (PE) em todo contexto socioambiental onde ocorre o cuidado de enfermagem.",
      "Etapas (inter-relacionadas, interdependentes e recorrentes): 1) Avaliação de Enfermagem; 2) Diagnóstico de Enfermagem; 3) Planejamento de Enfermagem; 4) Implementação de Enfermagem; 5) Evolução de Enfermagem.",
      "Avaliação: coleta de dados subjetivos (entrevista) e objetivos (exame físico, exames).",
      "Diagnóstico: julgamento clínico sobre respostas humanas (problemas, riscos ou promoção da saúde) — privativo do enfermeiro. Taxonomias: NANDA-I, CIPE.",
      "Planejamento: priorização dos diagnósticos, definição de resultados esperados (ex.: NOC) e prescrição de enfermagem (ex.: NIC).",
      "Implementação: execução das intervenções prescritas.",
      "Evolução: avaliação dos resultados e das respostas da pessoa, com registro e revisão do plano.",
      "Técnicos e auxiliares participam do PE conforme suas competências, sob supervisão do enfermeiro. Todas as etapas devem ser registradas formalmente no prontuário.",
      "A norma anterior (358/2009) usava: Coleta de dados (Histórico), Diagnóstico, Planejamento, Implementação e Avaliação.",
    ],
    simple:
      "O Processo de Enfermagem é o \"passo a passo\" do cuidado. Primeiro eu avalio o paciente (converso e examino). Depois digo qual é o problema de enfermagem (diagnóstico). Em seguida planejo o que quero alcançar e o que vou fazer (prescrição). Faço (implementação) e, por fim, vejo se funcionou (evolução), ajustando o plano se precisar. E tudo isso vai para o prontuário.",
    analogy:
      "É como o GPS de uma viagem: avaliar é descobrir onde você está; diagnosticar é entender o problema da rota; planejar é traçar o caminho; implementar é dirigir; evoluir é conferir se chegou ou recalcular a rota.",
    summary:
      "Pela Res. COFEN 736/2024, o PE tem 5 etapas: Avaliação, Diagnóstico, Planejamento, Implementação e Evolução. Diagnóstico e prescrição de enfermagem são privativos do enfermeiro. O PE deve ser registrado em prontuário em qualquer ambiente de cuidado.",
    keyPoints: [
      "5 etapas: Avaliação → Diagnóstico → Planejamento → Implementação → Evolução.",
      "Diagnóstico e prescrição de enfermagem: privativos do enfermeiro.",
      "Taxonomias: NANDA-I (diagnósticos), NIC (intervenções), NOC (resultados), CIPE.",
    ],
    traps: [
      "Confira qual resolução o edital cita: a 358/2009 (revogada) usa \"Histórico\" e \"Avaliação\" como 1ª e 5ª etapas.",
      "Diagnóstico de enfermagem descreve RESPOSTAS HUMANAS, não doenças (\"Dor aguda\", e não \"Apendicite\").",
    ],
    checks: [
      { q: "Quais as 5 etapas do PE pela Res. 736/2024?", a: "Avaliação, Diagnóstico, Planejamento, Implementação e Evolução de Enfermagem." },
      { q: "\"Pneumonia\" é um diagnóstico de enfermagem?", a: "Não. É diagnóstico médico. Um diagnóstico de enfermagem seria, por exemplo, \"Desobstrução ineficaz de vias aéreas\"." },
    ],
    sources: ["Resolução COFEN nº 736/2024", "NANDA-I — Diagnósticos de Enfermagem (edição vigente)"],
  },
  {
    id: "nr32",
    tags: ["biosseguranca", "nr 32", "nr-32", "nr32", "saude do trabalhador", "perfurocortante", "acidente com material biologico", "residuo", "rdc 222", "pgrss"],
    title: "Biossegurança e NR-32",
    raw: [
      "A NR-32 estabelece diretrizes para a segurança e saúde dos trabalhadores em serviços de saúde (riscos biológicos, químicos, radiações ionizantes e resíduos).",
      "Proibições: reencape e desconexão manual de agulhas; uso de adornos; manuseio de lentes de contato nos postos de trabalho; consumo e guarda de alimentos e bebidas nos postos de trabalho; uso de calçados abertos.",
      "O empregador deve fornecer gratuitamente vacinação contra tétano, difteria, hepatite B e outras previstas no PCMSO, além de EPIs e capacitação.",
      "Perfurocortantes: descartar no local de uso em coletor rígido, respeitando o limite de preenchimento indicado (em geral, 3/4 da capacidade), sem esvaziar ou reaproveitar.",
      "Resíduos de serviços de saúde (RDC 222/2018): Grupo A — infectante; B — químico; C — radioativo; D — comum; E — perfurocortante.",
      "Acidente com material biológico: lavar imediatamente com água e sabão (mucosas: soro fisiológico ou água), não espremer, comunicar a chefia, notificar (CAT e SINAN) e avaliar profilaxia pós-exposição ao HIV, idealmente nas primeiras 2 horas e no máximo até 72 horas.",
    ],
    simple:
      "Biossegurança é proteger quem cuida. A NR-32 é a norma que obriga o hospital a dar vacinas, EPIs e treinamento, e que proíbe comportamentos de risco, como reencapar agulha, usar anel ou brinco no trabalho e comer no posto. Se acontecer um acidente com agulha: lave, não esprema, avise e procure atendimento rápido, porque o remédio que previne HIV funciona melhor nas primeiras horas.",
    analogy:
      "É como o cinto de segurança e as regras de trânsito: a NR-32 é a lei; o EPI é o cinto; e o coletor de perfurocortante é a lixeira certa para não deixar \"pregos na estrada\" para o colega.",
    summary:
      "A NR-32 protege trabalhadores de saúde contra riscos biológicos, químicos e radiações. Proíbe reencapar agulhas, usar adornos e comer no posto de trabalho. Em acidente biológico: lavar, comunicar, notificar e avaliar profilaxia (idealmente em até 2 h, no máximo em 72 h).",
    keyPoints: [
      "Proibido reencapar e desconectar agulhas manualmente.",
      "Proibido o uso de adornos.",
      "Vacinas gratuitas: hepatite B, tétano e difteria.",
      "Grupos de resíduos: A infectante, B químico, C radioativo, D comum, E perfurocortante.",
    ],
    traps: [
      "Espremer o local do acidente é CONTRAINDICADO.",
      "Perfurocortante é Grupo E, e não A.",
      "A PEP não deve esperar resultados de exames: inicia-se o quanto antes.",
    ],
    checks: [
      { q: "Qual o grupo dos resíduos perfurocortantes?", a: "Grupo E." },
      { q: "Qual o prazo máximo para iniciar a profilaxia pós-exposição ao HIV?", a: "Até 72 horas; idealmente nas primeiras 2 horas." },
    ],
    sources: ["NR-32 (Ministério do Trabalho)", "RDC ANVISA nº 222/2018", "Protocolo Clínico de Profilaxia Pós-Exposição (PEP) — Ministério da Saúde"],
  },
  {
    id: "infeccao",
    tags: ["infeccao", "iras", "controle de infeccao", "higienizacao das maos", "higiene das maos", "precaucao", "isolamento", "ccih"],
    title: "Controle de infecção: higiene das mãos e precauções",
    raw: [
      "A higiene das mãos é a medida isolada mais importante para prevenir infecções relacionadas à assistência à saúde (IRAS).",
      "5 momentos (OMS/ANVISA): 1) antes de tocar o paciente; 2) antes de realizar procedimento limpo/asséptico; 3) após risco de exposição a fluidos corporais; 4) após tocar o paciente; 5) após tocar superfícies próximas ao paciente.",
      "Duração: água e sabão, 40–60 segundos; preparação alcoólica, 20–30 segundos. Mãos visivelmente sujas: água e sabão.",
      "Precaução PADRÃO (para todos os pacientes): higiene das mãos; luvas, avental, máscara e óculos quando houver risco de contato com sangue e fluidos; descarte seguro de perfurocortantes.",
      "Precaução de CONTATO: luvas e avental (ex.: bactérias multirresistentes, diarreia infecciosa, escabiose).",
      "Precaução para GOTÍCULAS: máscara cirúrgica (ex.: meningite meningocócica, influenza, coqueluche, rubéola, caxumba, difteria).",
      "Precaução para AEROSSÓIS: máscara N95/PFF2 para o profissional, quarto privativo com porta fechada e, se possível, pressão negativa (ex.: tuberculose pulmonar, sarampo, varicela). Paciente em transporte usa máscara cirúrgica.",
      "Na lógica de CCIH/SCIH (Lei 9.431/1997 e Portaria 2.616/1998), todo hospital deve manter programa de controle de infecção.",
    ],
    simple:
      "As infecções dentro do hospital viajam principalmente pelas nossas mãos. Por isso, lavar as mãos nos 5 momentos certos é a arma número um. Além disso, cada tipo de doença pede uma barreira diferente: se passa pelo toque, uso luva e avental; se passa por gotinhas de tosse que caem perto, máscara cirúrgica; se passa por partículas que ficam flutuando no ar, máscara N95 e quarto fechado.",
    analogy:
      "Pense no tamanho do \"transporte\": gotícula é como areia jogada (cai perto, 1 metro), então a máscara comum segura. Aerossol é como fumaça (fica no ar e se espalha), então precisa de filtro especial (N95) e porta fechada.",
    summary:
      "A higiene das mãos nos 5 momentos é a principal medida contra as IRAS. Contato pede luvas e avental; gotículas, máscara cirúrgica; aerossóis, N95 e quarto privativo. TB, sarampo e varicela são os clássicos de aerossol.",
    keyPoints: [
      "5 momentos da higiene das mãos.",
      "Água e sabão: 40–60 s; álcool: 20–30 s.",
      "Aerossóis: TB, sarampo, varicela → N95/PFF2.",
      "Gotículas: meningococo, influenza, coqueluche → máscara cirúrgica.",
    ],
    traps: [
      "Uso de luvas NÃO substitui a higiene das mãos.",
      "Varicela exige aerossol + contato.",
      "Na precaução para aerossóis, quem usa N95 é o profissional; o paciente, ao ser transportado, usa máscara cirúrgica.",
    ],
    checks: [
      { q: "Qual precaução para um paciente com tuberculose pulmonar bacilífera?", a: "Aerossóis: N95/PFF2, quarto privativo com porta fechada e, se possível, pressão negativa." },
      { q: "Quanto tempo dura a fricção com preparação alcoólica?", a: "20 a 30 segundos." },
    ],
    sources: ["ANVISA — Segurança do Paciente em Serviços de Saúde: Higienização das Mãos", "Portaria MS nº 2.616/1998"],
  },
  {
    id: "seguranca-paciente",
    tags: ["seguranca do paciente", "pnsp", "529", "rdc 36", "evento adverso", "qualidade", "gerenciamento de risco", "metas internacionais"],
    title: "Segurança do paciente",
    raw: [
      "Programa Nacional de Segurança do Paciente (PNSP): Portaria MS nº 529/2013. RDC ANVISA nº 36/2013: institui ações para a segurança do paciente e torna obrigatório o Núcleo de Segurança do Paciente (NSP) nos serviços de saúde.",
      "Metas internacionais: 1) identificar corretamente o paciente; 2) melhorar a comunicação entre profissionais; 3) melhorar a segurança de medicamentos de alta vigilância; 4) assegurar cirurgia em local, procedimento e paciente corretos; 5) higienizar as mãos para evitar infecções; 6) reduzir o risco de quedas e lesões por pressão.",
      "Protocolos básicos do MS: identificação do paciente, cirurgia segura, higiene das mãos, prevenção de quedas, prevenção de lesão por pressão e segurança na prescrição, uso e administração de medicamentos.",
      "Conceitos: incidente = evento que poderia ter resultado ou resultou em dano desnecessário; evento adverso = incidente que resulta em dano; near miss (quase erro) = incidente que não atingiu o paciente; incidente sem dano = atingiu, mas não causou dano.",
      "Identificação: no mínimo 2 identificadores (ex.: nome completo e data de nascimento), preferencialmente em pulseira; NUNCA usar número do leito ou do quarto.",
      "Notificação de eventos adversos (RDC 36/2013): mensalmente ao Sistema Nacional de Vigilância Sanitária; eventos que evoluíram para ÓBITO, em até 72 horas.",
    ],
    simple:
      "Segurança do paciente é evitar que o cuidado cause dano. Existem 6 metas básicas: saber exatamente quem é o paciente, se comunicar bem com a equipe, ter cuidado redobrado com medicamentos perigosos, operar a pessoa certa no lugar certo, lavar as mãos e prevenir quedas e lesões de pele. Todo hospital precisa ter um núcleo que cuida disso e notificar os erros, não para punir, mas para aprender.",
    analogy:
      "É como a aviação: antes de decolar, o piloto faz checklist, confirma o destino duas vezes e registra qualquer quase-acidente. Na saúde, a pulseira, o checklist cirúrgico e a notificação de incidentes cumprem esse papel.",
    summary:
      "O PNSP (Portaria 529/2013) e a RDC 36/2013 estruturam a segurança do paciente e obrigam os serviços a ter NSP. As 6 metas vão da identificação correta à prevenção de quedas e LPP. Óbitos por evento adverso devem ser notificados em até 72 h.",
    keyPoints: [
      "Meta 1 = identificação correta (2 identificadores, nunca o leito).",
      "NSP é obrigatório (RDC 36/2013).",
      "Evento adverso = incidente COM dano.",
    ],
    traps: [
      "Near miss NÃO atingiu o paciente; incidente sem dano atingiu, mas não causou dano.",
      "Número do leito não é identificador.",
    ],
    checks: [
      { q: "Qual a primeira meta internacional de segurança do paciente?", a: "Identificar corretamente o paciente." },
      { q: "Qual o prazo para notificar um evento adverso que resultou em óbito?", a: "Até 72 horas." },
    ],
    sources: ["Portaria MS nº 529/2013", "RDC ANVISA nº 36/2013", "Protocolos básicos de segurança do paciente (MS/ANVISA/Fiocruz)"],
  },
  {
    id: "cirurgia-segura",
    tags: ["cirurgia segura", "centro cirurgico", "perioperatorio", "sala de recuperacao", "srpa", "checklist cirurgico"],
    title: "Cirurgia segura e centro cirúrgico",
    raw: [
      "Lista de Verificação de Cirurgia Segura (OMS) em 3 momentos: 1) Antes da indução anestésica (Sign in); 2) Antes da incisão cirúrgica (Time out/pausa cirúrgica); 3) Antes de o paciente sair da sala de cirurgia (Sign out).",
      "Sign in: confirmar identidade, sítio cirúrgico, procedimento e consentimento; sítio demarcado; checagem do equipamento de anestesia; oxímetro funcionando; alergias; risco de via aérea difícil e de perda sanguínea.",
      "Time out: apresentação da equipe; confirmação verbal de paciente, sítio e procedimento; antibiótico profilático nos últimos 60 minutos; exames de imagem disponíveis; eventos críticos previstos.",
      "Sign out: registro do procedimento; contagem de instrumentais, compressas e agulhas; identificação de amostras; problemas com equipamentos; cuidados na recuperação.",
      "Períodos: pré-operatório (mediato e imediato), transoperatório (entrada na sala até saída), intraoperatório (início ao fim da cirurgia), pós-operatório (imediato — primeiras 24 h; mediato; tardio).",
      "Índice de Aldrete e Kroulik (SRPA): avalia atividade, respiração, circulação, consciência e saturação/cor; escore ≥ 8 geralmente indica condições de alta da SRPA.",
    ],
    simple:
      "Cirurgia segura é um checklist em 3 paradas: antes de anestesiar, antes de cortar e antes de sair da sala. Em cada parada a equipe confirma em voz alta coisas simples, mas que evitam tragédias, como o paciente certo, o lado certo, alergias, antibiótico e se nenhuma compressa ficou dentro do paciente.",
    analogy:
      "É igual ao checklist do piloto: antes de ligar os motores (indução), antes de decolar (incisão) e antes de desembarcar (saída da sala).",
    summary:
      "O checklist da OMS tem 3 momentos: antes da indução, antes da incisão e antes da saída da sala. No time out a equipe confirma paciente, sítio e procedimento, e se o antibiótico foi feito nos últimos 60 min. Na SRPA, Aldrete ≥ 8 costuma permitir a alta.",
    keyPoints: [
      "Sign in → Time out → Sign out.",
      "Antibiótico profilático: até 60 min antes da incisão.",
      "Contagem de compressas e instrumentais: no Sign out.",
    ],
    traps: [
      "Os 3 momentos NÃO são \"pré, trans e pós-operatório\".",
      "Transoperatório (da entrada à saída da sala) ≠ intraoperatório (do início ao fim do procedimento).",
    ],
    checks: [
      { q: "Quais os 3 momentos do checklist de cirurgia segura?", a: "Antes da indução anestésica, antes da incisão e antes de o paciente sair da sala." },
    ],
    sources: ["OMS — Segundo desafio global: Cirurgias seguras salvam vidas", "Protocolo de Cirurgia Segura (MS/ANVISA)"],
  },
  {
    id: "calculo",
    tags: ["calculo", "diluicao", "gotejamento", "dosagem", "farmacologia", "medicacao", "medicamento"],
    title: "Cálculo de medicação e gotejamento",
    raw: [
      "Conversões: 1 g = 1.000 mg; 1 mg = 1.000 mcg; 1 L = 1.000 mL.",
      "Equivalências de equipo: 1 mL = 20 gotas = 60 microgotas; 1 gota = 3 microgotas.",
      "Gotejamento com tempo em HORAS: gotas/min = Volume (mL) ÷ (Tempo (h) × 3); microgotas/min = Volume (mL) ÷ Tempo (h).",
      "Gotejamento com tempo em MINUTOS: gotas/min = (Volume × 20) ÷ minutos; microgotas/min = (Volume × 60) ÷ minutos.",
      "Regra de três: disponível / volume = prescrito / x. Ex.: 1 g (1.000 mg) diluído em 10 mL; prescrito 500 mg → x = 5 mL.",
      "Porcentagem de soluções: X% = X g em 100 mL. Ex.: SG 5% tem 5 g de glicose em 100 mL (50 g em 1.000 mL).",
      "Insulina U-100: 100 UI por mL. Em seringa de insulina de 1 mL (100 UI), cada unidade equivale a 0,01 mL.",
      "Bomba de infusão: programar em mL/h (mL/h = volume ÷ horas).",
      "Transformar soro: para aumentar a concentração de um soro, calcula-se quanto de soluto já existe, quanto falta e quantos mL da ampola hipertônica acrescentar (ex.: ampola de glicose 50% = 0,5 g/mL).",
    ],
    simple:
      "Quase todo cálculo de enfermagem é uma regra de três. Você sabe quanto tem de remédio em quantos mL, e descobre quantos mL contêm a dose que o médico pediu. Para o soro, você só precisa lembrar que 1 mL vira 20 gotas, ou 60 microgotas, e dividir pelo tempo.",
    analogy:
      "Pense numa pizza: se a pizza inteira (1.000 mg) tem 10 fatias (10 mL) e o paciente precisa de metade da pizza (500 mg), você dá 5 fatias (5 mL).",
    summary:
      "Use a regra de três para doses e lembre: 1 mL = 20 gotas = 60 microgotas. Macrogotas: V ÷ (T × 3); microgotas: V ÷ T, com T em horas. Soluções a X% têm X g em 100 mL.",
    keyPoints: [
      "gotas/min = V ÷ (T × 3) (T em horas).",
      "microgotas/min = V ÷ T (T em horas).",
      "Microgotas/min = mL/h.",
    ],
    traps: [
      "Arredondamento: gotas não se fracionam; arredonde para o número inteiro mais próximo.",
      "Atenção ao tempo em minutos x horas: a fórmula muda.",
      "Converter unidades (g → mg) ANTES de montar a regra de três.",
    ],
    checks: [
      { q: "Quantas gotas/min para 500 mL em 6 h (macrogotas)?", a: "500 ÷ (6 × 3) = 27,7 → 28 gotas/min." },
      { q: "Quantas microgotas/min para 240 mL em 4 h?", a: "240 ÷ 4 = 60 microgotas/min." },
      { q: "Quantos gramas de glicose há em 500 mL de SG 5%?", a: "25 g." },
    ],
    sources: ["Manuais de farmacologia aplicada à enfermagem", "Protocolo de segurança na prescrição, uso e administração de medicamentos (MS/ANVISA)"],
  },
  {
    id: "administracao-medicamentos",
    tags: ["administracao de medicamentos", "vias de administracao", "injetave", "intramuscular", "subcutanea", "intradermica", "endovenosa", "certos"],
    title: "Administração de medicamentos e vias parenterais",
    raw: [
      "Os \"certos\" da administração (versão ampliada): paciente certo, medicamento certo, via certa, hora certa, dose certa, registro certo, orientação correta, forma certa e resposta certa.",
      "Intradérmica (ID): ângulo de 10–15°, bisel para cima; pequenos volumes (até 0,5 mL); ex.: BCG, teste tuberculínico (PPD).",
      "Subcutânea (SC): ângulo de 45° a 90°, conforme o tecido e o tamanho da agulha; ex.: insulina, heparina. Volumes pequenos (geralmente até 1–1,5 mL).",
      "Intramuscular (IM): ângulo de 90°; locais: deltoide (pequenos volumes, em geral até 2–3 mL), ventroglútea (Hochstetter — considerada a mais segura), vasto lateral da coxa (local de escolha em lactentes) e dorsoglútea (em desuso pelo risco de lesão do nervo isquiático).",
      "Técnica em Z (Z-track): para medicamentos irritantes, evita refluxo para o tecido subcutâneo.",
      "Endovenosa (EV): efeito imediato; exige técnica asséptica, checagem de permeabilidade e observação de sinais de flebite e infiltração/extravasamento.",
      "Medicamentos de alta vigilância (ex.: insulina, heparina, cloreto de potássio concentrado, opioides): dupla checagem.",
    ],
    simple:
      "Antes de dar qualquer remédio, confira os \"certos\": paciente, remédio, dose, via, hora e registro. Depois escolha a via: na pele bem rasinha (intradérmica) para testes e BCG; embaixo da pele (subcutânea) para insulina e heparina; no músculo (intramuscular) para volumes maiores; e na veia (endovenosa) quando precisa de efeito rápido.",
    analogy:
      "Pense em camadas de um bolo: a cobertura fininha é a intradérmica (ângulo quase deitado), o recheio é o subcutâneo (45–90°) e a massa é o músculo (90°). A veia é o \"atalho expresso\" direto para a corrente sanguínea.",
    summary:
      "Confira os certos antes de administrar. ID a 10–15°, SC a 45–90° e IM a 90°. A ventroglútea é o local IM mais seguro, e o vasto lateral é a escolha em lactentes.",
    keyPoints: [
      "ID: 10–15°, BCG e PPD.",
      "IM: 90°; ventroglútea é a mais segura; vasto lateral em lactentes.",
      "Alta vigilância: dupla checagem.",
    ],
    traps: [
      "O volume máximo por local IM varia entre referências; leia o enunciado com atenção.",
      "O KCl concentrado nunca é administrado em bolus EV.",
    ],
    checks: [
      { q: "Qual o ângulo da via intradérmica?", a: "10 a 15 graus." },
      { q: "Qual região IM é preferida em lactentes?", a: "O vasto lateral da coxa." },
    ],
    sources: ["Protocolo de segurança na prescrição, uso e administração de medicamentos (MS/ANVISA)", "Manual de Normas e Procedimentos para Vacinação (MS) — técnicas de aplicação"],
  },
  {
    id: "diabetes",
    tags: ["diabetes", "insulina", "hipoglicemia", "glicemia", "endocrin", "cetoacidose"],
    title: "Diabetes mellitus e insulinoterapia",
    raw: [
      "DM1: destruição autoimune das células beta, com deficiência absoluta de insulina; mais comum em jovens; risco de cetoacidose.",
      "DM2: resistência à insulina e deficiência relativa; associado a obesidade, sedentarismo e idade.",
      "Diagnóstico (SBD): glicemia de jejum ≥ 126 mg/dL; glicemia 2 h após TOTG ≥ 200 mg/dL; HbA1c ≥ 6,5%; ou glicemia ao acaso ≥ 200 mg/dL com sintomas clássicos (poliúria, polidipsia, polifagia, perda de peso).",
      "Hipoglicemia: glicemia < 70 mg/dL. Sinais: sudorese, tremor, taquicardia, fome, confusão. Paciente consciente: regra dos 15 (15 g de carboidrato de ação rápida, reavaliar em 15 minutos). Inconsciente: glicose EV (ou glucagon), nunca oferecer nada pela boca.",
      "Insulinas: rápidas/ultrarrápidas (lispro, asparte, glulisina — início em minutos); regular (cristalina, início ~30–60 min); NPH (intermediária, leitosa, pico em ~4–10 h); análogos de longa duração (glargina, detemir, degludeca).",
      "Mistura na mesma seringa: aspirar primeiro a REGULAR (transparente) e depois a NPH (turva). NPH: homogeneizar rolando o frasco entre as mãos, sem agitar.",
      "Rodízio dos locais de aplicação (abdome, coxas, braços, glúteos) para evitar lipodistrofia.",
      "Cetoacidose diabética: hiperglicemia, cetose, acidose metabólica, respiração de Kussmaul e hálito cetônico.",
    ],
    simple:
      "No diabetes, o açúcar não consegue entrar direito nas células e fica sobrando no sangue. No tipo 1, o corpo não produz insulina, a \"chave\" que abre a célula. No tipo 2, a chave existe, mas a fechadura funciona mal. O perigo imediato é a hipoglicemia: se o paciente estiver acordado, dê açúcar rápido e meça de novo em 15 minutos.",
    analogy:
      "A insulina é a chave da porta da célula; a glicose é a visita esperando na porta. No DM1 não há chave; no DM2 a fechadura está emperrada. A insulina regular é uma \"chave de uso rápido\"; a NPH é a \"chave que dura o dia inteiro\".",
    summary:
      "O diabetes é diagnosticado com glicemia de jejum ≥ 126, HbA1c ≥ 6,5% ou TOTG/ao acaso ≥ 200 (com sintomas). Hipoglicemia é < 70 mg/dL e, no paciente consciente, trata-se pela regra dos 15. Na mistura de insulinas, aspira-se primeiro a regular e depois a NPH.",
    keyPoints: [
      "Hipoglicemia < 70 mg/dL → regra dos 15.",
      "Regular antes da NPH na seringa.",
      "NPH: rolar, não agitar.",
    ],
    traps: [
      "No paciente inconsciente não se dá nada por via oral.",
      "Regular é a transparente e NPH é a leitosa; a ordem é \"do claro para o escuro\".",
    ],
    checks: [
      { q: "Qual o ponto de corte da glicemia de jejum para diabetes?", a: "≥ 126 mg/dL (confirmado em nova medida)." },
      { q: "Qual insulina aspirar primeiro na mistura?", a: "A regular (transparente)." },
    ],
    sources: ["Diretrizes da Sociedade Brasileira de Diabetes (edição vigente)", "Cadernos de Atenção Básica nº 36 — Diabetes Mellitus (MS)"],
  },
  {
    id: "hipertensao",
    tags: ["hipertensao", "has", "pressao arterial", "cardiovascular", "doencas cronicas", "crise hipertensiva"],
    title: "Hipertensão arterial sistêmica",
    raw: [
      "Diretriz Brasileira de Hipertensão Arterial (2020): HA = PA sistólica ≥ 140 mmHg e/ou diastólica ≥ 90 mmHg, em medidas repetidas no consultório.",
      "Classificação: ótima < 120/80; normal 120–129/80–84; pré-hipertensão 130–139/85–89; estágio 1: 140–159/90–99; estágio 2: 160–179/100–109; estágio 3: ≥ 180/≥ 110.",
      "Técnica de aferição: repouso de 3–5 minutos; bexiga vazia; sem exercício por 60 min e sem café, álcool ou fumo por 30 min; braço apoiado na altura do coração; manguito adequado à circunferência do braço; não conversar; 2 a 3 medidas com intervalo de 1 minuto.",
      "Crise hipertensiva: URGÊNCIA (PA muito elevada sem lesão aguda de órgão-alvo) x EMERGÊNCIA (com lesão aguda de órgão-alvo — ex.: AVC, IAM, edema agudo de pulmão, dissecção de aorta).",
      "Tratamento não farmacológico: reduzir sódio (até 2 g de sódio/dia ≈ 5 g de sal), controlar peso, atividade física, moderar álcool, parar de fumar, dieta DASH.",
    ],
    simple:
      "Hipertensão é quando a pressão do sangue nas artérias fica alta o tempo todo, a partir de 14 por 9. Ela é silenciosa e vai lesando coração, cérebro, rins e olhos. Para medir direito, o paciente precisa estar descansado, sentado, com o braço na altura do coração e o manguito do tamanho certo. Numa crise, o que define a gravidade não é só o número: é se algum órgão está sendo lesado naquele momento.",
    analogy:
      "É como uma mangueira com pressão alta demais o tempo todo: com os anos, ela vai desgastando e pode estourar (AVC) ou sobrecarregar a bomba (coração).",
    summary:
      "HA = PA ≥ 140/90 mmHg em medidas repetidas. A técnica correta exige repouso, braço na altura do coração e manguito adequado. Na emergência hipertensiva há lesão aguda de órgão-alvo; na urgência, não.",
    keyPoints: [
      "≥ 140/90 = hipertensão.",
      "Estágio 3: ≥ 180/110.",
      "Urgência x emergência: presença de lesão aguda de órgão-alvo.",
    ],
    traps: [
      "Manguito pequeno SUPERESTIMA a PA; manguito grande subestima.",
      "Braço abaixo do nível do coração superestima a PA.",
    ],
    checks: [
      { q: "PA de 150/95 mmHg corresponde a qual estágio?", a: "Estágio 1 (140–159/90–99)." },
      { q: "O que diferencia emergência de urgência hipertensiva?", a: "A presença de lesão aguda de órgão-alvo na emergência." },
    ],
    sources: ["Diretrizes Brasileiras de Hipertensão Arterial — 2020 (SBC)"],
  },
  {
    id: "lpp-feridas",
    tags: ["lesao por pressao", "lpp", "ferida", "curativo", "ulcera", "braden", "pele", "cobertura"],
    title: "Lesão por pressão e tratamento de feridas",
    raw: [
      "Classificação NPIAP (2016): Estágio 1 — pele íntegra com eritema que não embranquece; Estágio 2 — perda da pele em espessura parcial com exposição da derme; Estágio 3 — perda da pele em espessura total, gordura visível; Estágio 4 — perda total da pele e perda tissular com exposição de fáscia, músculo, tendão, ligamento, cartilagem ou osso.",
      "Também: LPP não classificável (base coberta por esfacelo ou escara), LPP tissular profunda (área vermelho-escura, marrom ou púrpura que não embranquece), LPP relacionada a dispositivo médico e LPP em membranas mucosas.",
      "Escala de Braden: 6 subescalas (percepção sensorial, umidade, atividade, mobilidade, nutrição, fricção e cisalhamento); escore de 6 a 23; quanto MENOR, maior o risco (≤ 18 indica risco).",
      "Prevenção: avaliação de risco na admissão e reavaliação periódica; mudança de decúbito (geralmente a cada 2 horas); superfícies de redistribuição de pressão; hidratação da pele e controle da umidade; nutrição; proteção e elevação dos calcâneos.",
      "Coberturas: hidrocoloide (feridas pouco exsudativas, desbridamento autolítico); alginato de cálcio (muito exsudato, ação hemostática); carvão ativado com prata (feridas com odor e infectadas); hidrogel (feridas secas, desbridamento autolítico); AGE (ácidos graxos essenciais, proteção e hidratação); sulfadiazina de prata 1% (queimaduras); papaína (desbridamento químico, concentração conforme o tecido).",
    ],
    simple:
      "Lesão por pressão é quando uma parte do corpo fica muito tempo apertada contra a cama ou uma cadeira e o sangue não chega. A pele vai morrendo em camadas: primeiro fica vermelha (estágio 1), depois abre superficialmente (2), depois aparece a gordura (3) e, no pior caso, músculo ou osso (4). Prevenir é mudar a posição, proteger a pele e alimentar bem. A escala de Braden mede o risco: quanto menor a nota, maior o perigo.",
    analogy:
      "É como pisar numa mangueira: a água não passa. Se o pé fica muito tempo ali, a planta do outro lado murcha. Mudar de decúbito é tirar o pé da mangueira de tempos em tempos.",
    summary:
      "As LPP são classificadas pela NPIAP em estágios 1 a 4, além de não classificável e tissular profunda. Na Braden, escore baixo significa risco alto. O tratamento combina alívio da pressão com a cobertura adequada ao tipo de tecido e exsudato.",
    keyPoints: [
      "Estágio 1: eritema que não embranquece, pele íntegra.",
      "Braden: 6 a 23, menor = mais risco.",
      "Alginato: exsudato abundante e sangramento; hidrogel: ferida seca.",
    ],
    traps: [
      "Na Braden, a lógica é INVERSA: pontuação alta é bom.",
      "Com esfacelo ou escara cobrindo o leito não se classifica o estágio: é \"não classificável\".",
      "Não se usa hidrocoloide em ferida infectada.",
    ],
    checks: [
      { q: "LPP com gordura visível, sem exposição de músculo: qual estágio?", a: "Estágio 3." },
      { q: "Qual cobertura é indicada para ferida com muito exsudato e sangramento?", a: "Alginato de cálcio." },
    ],
    sources: ["NPIAP — Classificação de Lesões por Pressão (2016)", "Protocolo de prevenção de úlcera por pressão (MS/ANVISA)"],
  },
  {
    id: "pcr",
    tags: ["pcr", "parada", "reanimacao", "rcp", "suporte basico", "suporte avancado", "bls", "acls"],
    title: "Parada cardiorrespiratória e RCP",
    raw: [
      "Reconhecimento: vítima não responsiva, sem respiração ou com respiração agônica (gasping); checar pulso central em no máximo 10 segundos.",
      "Compressões de alta qualidade (AHA): frequência de 100–120/min; profundidade de 5–6 cm no adulto; permitir o retorno total do tórax; minimizar interrupções (< 10 s); trocar o compressor a cada 2 minutos.",
      "Relação compressão:ventilação sem via aérea avançada: 30:2 (adulto). Com via aérea avançada: compressões contínuas e 1 ventilação a cada 6 segundos (10/min).",
      "Ritmos chocáveis: fibrilação ventricular (FV) e taquicardia ventricular sem pulso (TVSP) → desfibrilação o mais rápido possível. Não chocáveis: assistolia e atividade elétrica sem pulso (AESP).",
      "Drogas: adrenalina 1 mg EV/IO a cada 3–5 minutos; amiodarona 300 mg na 1ª dose e 150 mg na 2ª (em FV/TVSP refratárias).",
      "Causas reversíveis (5 H e 5 T): hipovolemia, hipóxia, H+ (acidose), hipo/hipercalemia, hipotermia; tensão no tórax (pneumotórax hipertensivo), tamponamento cardíaco, toxinas, trombose pulmonar e trombose coronária.",
      "Assistolia: aplicar o protocolo da linha reta (checar cabos, aumentar o ganho, trocar a derivação).",
    ],
    simple:
      "Se a pessoa não responde e não respira direito, chame ajuda, peça o DEA e comece a apertar o peito com força e rapidez: 100 a 120 vezes por minuto, afundando 5 a 6 cm e deixando o tórax voltar. A cada 30 compressões, 2 ventilações. Se o ritmo for chocável (FV ou TV sem pulso), dá-se o choque; se não for, segue a RCP com adrenalina e a busca das causas reversíveis.",
    analogy:
      "As compressões são o \"coração manual\": você está bombeando o sangue no lugar do coração. Parar de comprimir é como desligar a bomba: a pressão cai na hora e demora para voltar.",
    summary:
      "RCP de alta qualidade: 100–120/min, 5–6 cm, retorno total do tórax e 30:2. FV e TVSP são chocáveis; assistolia e AESP não. Adrenalina 1 mg a cada 3–5 min e busca dos 5H/5T.",
    keyPoints: [
      "100–120 compressões/min, 5–6 cm.",
      "30:2 sem via aérea avançada.",
      "Chocáveis: FV e TVSP.",
    ],
    traps: [
      "Assistolia e AESP NÃO se desfibrilam.",
      "Checagem de pulso: no máximo 10 segundos.",
      "Com via aérea avançada não se pausa a compressão para ventilar.",
    ],
    checks: [
      { q: "Quais ritmos de PCR são chocáveis?", a: "Fibrilação ventricular e taquicardia ventricular sem pulso." },
      { q: "Com via aérea avançada, qual a frequência de ventilações?", a: "1 a cada 6 segundos (10 por minuto), com compressões contínuas." },
    ],
    sources: ["Diretrizes da American Heart Association para RCP e ACE (atualização vigente)"],
  },
  {
    id: "glasgow",
    tags: ["glasgow", "neurolog", "consciencia", "trauma", "tce", "avc", "acidente vascular"],
    title: "Avaliação neurológica: Escala de Coma de Glasgow",
    raw: [
      "Abertura ocular (1–4): 4 espontânea; 3 ao som; 2 à pressão; 1 ausente.",
      "Resposta verbal (1–5): 5 orientada; 4 confusa; 3 palavras; 2 sons; 1 ausente.",
      "Resposta motora (1–6): 6 obedece a comandos; 5 localiza; 4 flexão normal; 3 flexão anormal (decorticação); 2 extensão (descerebração); 1 ausente.",
      "Total de 3 a 15. TCE leve: 13–15; moderado: 9–12; grave: 3–8. Glasgow ≤ 8 indica necessidade de proteção de via aérea (intubação).",
      "Glasgow-P (2018): subtrai-se a reatividade pupilar (nenhuma pupila reativa: −2; uma reativa: −1; ambas reativas: 0), com escore final de 1 a 15.",
      "AVC: reconhecimento rápido pela escala SAMU/Cincinnati (face, braço, fala) e registro do horário de início dos sintomas (janela para trombólise).",
    ],
    simple:
      "A escala de Glasgow mede o nível de consciência somando três respostas: se a pessoa abre os olhos, se fala e se se mexe. A nota vai de 3 (coma profundo) a 15 (normal). Com 8 ou menos, a pessoa geralmente não consegue proteger a própria via aérea e precisa ser intubada.",
    analogy:
      "É como avaliar alguém acordando: primeiro abre os olhos (até 4 pontos), depois conversa (até 5), depois consegue obedecer (até 6). \"4-5-6\" é a ordem dos máximos.",
    summary:
      "Glasgow soma olhos (4), verbal (5) e motor (6), com total de 3 a 15. Escore ≤ 8 indica TCE grave e necessidade de via aérea definitiva. A versão com pupilas subtrai até 2 pontos.",
    keyPoints: ["Máximos: 4 (ocular), 5 (verbal), 6 (motor).", "≤ 8 = grave → intubação.", "Decorticação = 3; descerebração = 2."],
    traps: [
      "A pontuação mínima é 3, e não 0 (na Glasgow-P, o mínimo é 1).",
      "Decorticação (flexão anormal) vale mais que descerebração (extensão).",
    ],
    checks: [
      { q: "Paciente abre os olhos à pressão, emite sons e tem extensão anormal. Qual o Glasgow?", a: "2 + 2 + 2 = 6." },
      { q: "Qual a pontuação mínima da escala clássica?", a: "3." },
    ],
    sources: ["Glasgow Coma Scale — www.glasgowcomascale.org"],
  },
  {
    id: "choque",
    tags: ["choque", "sepse", "hemorragia", "paciente critico", "uti", "terapia intensiva", "anafilaxia", "urgencia", "emergencia"],
    title: "Choque e sepse",
    raw: [
      "Choque = perfusão tecidual inadequada. Tipos: hipovolêmico (perda de volume/sangue), cardiogênico (falha da bomba), distributivo (séptico, anafilático, neurogênico) e obstrutivo (tamponamento, TEP, pneumotórax hipertensivo).",
      "Sinais: taquicardia, hipotensão (PAS < 90 mmHg ou PAM < 65 mmHg), pele fria e pegajosa, enchimento capilar > 2 s, oligúria (< 0,5 mL/kg/h), alteração do nível de consciência e lactato elevado.",
      "Choque neurogênico: hipotensão com BRADICARDIA e pele quente (perda do tônus simpático).",
      "Anafilaxia: adrenalina IM no vasto lateral da coxa (adulto 0,5 mg; criança 0,01 mg/kg, máx. 0,5 mg), podendo repetir a cada 5–15 min.",
      "Sepse — pacote da 1ª hora: medir lactato; colher hemoculturas ANTES do antibiótico; iniciar antibiótico de amplo espectro; cristaloide 30 mL/kg se hipotensão ou lactato ≥ 4 mmol/L; vasopressor (noradrenalina) se PAM < 65 mmHg apesar do volume.",
    ],
    simple:
      "Choque é quando o sangue não chega bem aos órgãos. Pode faltar líquido (hemorragia), a bomba pode falhar (coração), os vasos podem abrir demais (infecção grave, alergia, lesão da medula) ou algo pode estar bloqueando o caminho. O corpo tenta compensar acelerando o coração e fechando os vasos da pele; por isso o paciente fica gelado, com pulso rápido e urinando pouco.",
    analogy:
      "Pense na circulação como um sistema de irrigação: pode faltar água (hipovolêmico), a bomba pode quebrar (cardiogênico), os canos podem ficar largos demais e a pressão cair (distributivo) ou pode haver um entupimento (obstrutivo).",
    summary:
      "Há quatro tipos de choque: hipovolêmico, cardiogênico, distributivo e obstrutivo. Os sinais clássicos são taquicardia, hipotensão, pele fria, oligúria e lactato alto; no neurogênico há bradicardia e pele quente. Na sepse, colhem-se hemoculturas antes de iniciar antibiótico na 1ª hora.",
    keyPoints: [
      "PAM alvo ≥ 65 mmHg.",
      "Hemocultura antes do antibiótico, sem atrasá-lo.",
      "Anafilaxia: adrenalina IM no vasto lateral.",
    ],
    traps: [
      "O choque neurogênico cursa com bradicardia (não taquicardia).",
      "Na anafilaxia, a adrenalina é IM, não SC.",
    ],
    checks: [
      { q: "Qual a via e o local da adrenalina na anafilaxia?", a: "Intramuscular, no vasto lateral da coxa." },
      { q: "Qual tipo de choque cursa com bradicardia e pele quente?", a: "Choque neurogênico." },
    ],
    sources: ["Surviving Sepsis Campaign (diretriz vigente)", "Instituto Latino-Americano de Sepse (ILAS) — protocolos"],
  },
  {
    id: "imunizacao",
    tags: ["imunizacao", "vacina", "pni", "calendario vacinal", "rede de frio", "esavi", "bcg"],
    title: "Imunização, PNI e rede de frio",
    raw: [
      "Programa Nacional de Imunizações (PNI), criado em 1973.",
      "Conservação na sala de vacinação: +2 °C a +8 °C (ideal +5 °C). Leitura e registro da temperatura no início e no fim do expediente.",
      "BCG: dose única ao nascer, via intradérmica, na inserção inferior do músculo deltoide DIREITO.",
      "Hepatite B: dose ao nascer, preferencialmente nas primeiras 24 horas (idealmente nas primeiras 12 horas), via IM.",
      "Vias: rotavírus — oral; tríplice viral, varicela e febre amarela — subcutânea; pentavalente, pneumocócica, meningocócica, hepatite B e dTpa — intramuscular; BCG — intradérmica.",
      "Vacinas de agentes vivos atenuados (BCG, tríplice viral, varicela, febre amarela, rotavírus): em regra contraindicadas em gestantes e em imunodeprimidos graves.",
      "Gestante: dTpa a partir da 20ª semana, a cada gestação; hepatite B e influenza conforme o calendário.",
      "ESAVI (Evento Supostamente Atribuível à Vacinação ou Imunização): deve ser notificado.",
      "O calendário é atualizado com frequência: sempre confira a versão vigente do Calendário Nacional de Vacinação.",
    ],
    simple:
      "Vacina é um \"treino\" para o sistema de defesa: mostramos ao corpo um pedaço do inimigo (ou ele enfraquecido) para que o organismo aprenda a lutar. Para funcionar, a vacina precisa ser guardada na temperatura certa, entre 2 e 8 graus, e aplicada na via certa. Vacinas feitas com vírus ou bactéria vivos enfraquecidos, em geral, não são aplicadas em gestantes nem em quem tem imunidade muito baixa.",
    analogy:
      "A vacina é o simulado da prova: o corpo \"treina\" contra um inimigo de mentira para acertar a prova de verdade. E a rede de frio é o cuidado para o simulado não chegar estragado.",
    summary:
      "Vacinas são conservadas de +2 a +8 °C. A BCG é intradérmica no deltoide direito ao nascer, e a hepatite B é aplicada nas primeiras 24 h de vida. Vacinas vivas atenuadas são, em regra, contraindicadas na gestação e na imunossupressão grave.",
    keyPoints: [
      "+2 °C a +8 °C.",
      "BCG: ID, deltoide direito, ao nascer.",
      "dTpa na gestante a partir da 20ª semana.",
    ],
    traps: [
      "A BCG é no braço DIREITO.",
      "A tríplice viral é SUBCUTÂNEA, não IM.",
      "Vacina congelada por engano não pode ser usada (a maioria é inativada pelo congelamento).",
    ],
    checks: [
      { q: "Qual a faixa de temperatura de conservação na sala de vacina?", a: "+2 °C a +8 °C." },
      { q: "Qual a via da vacina rotavírus?", a: "Oral." },
    ],
    sources: ["Calendário Nacional de Vacinação (MS — versão vigente)", "Manual de Normas e Procedimentos para Vacinação (MS)", "Manual de Rede de Frio (MS)"],
  },
  {
    id: "vigilancia",
    tags: ["vigilancia epidemiologica", "epidemiologia", "notificacao", "agravos", "doencas transmissiveis", "indicadores", "vigilancia em saude", "sinan"],
    title: "Vigilância epidemiológica e notificação compulsória",
    raw: [
      "Definição (Lei 8.080): conjunto de ações que proporcionam o conhecimento, a detecção ou a prevenção de qualquer mudança nos fatores determinantes e condicionantes da saúde individual ou coletiva, para recomendar e adotar medidas de prevenção e controle das doenças ou agravos.",
      "Vigilância sanitária (Lei 8.080): ações capazes de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários do meio ambiente, da produção e circulação de bens e da prestação de serviços.",
      "Notificação compulsória: comunicação obrigatória de doenças, agravos e eventos da lista nacional (Portaria de Consolidação nº 4/2017 e atualizações), feita por médicos, outros profissionais de saúde e responsáveis por estabelecimentos.",
      "Notificação IMEDIATA: em até 24 horas a partir do conhecimento do caso. Notificação SEMANAL: em até 7 dias.",
      "Notifica-se a SUSPEITA: não é preciso aguardar a confirmação.",
      "Sistema: SINAN (Sistema de Informação de Agravos de Notificação).",
      "Indicadores: incidência (casos NOVOS ÷ população em risco no período); prevalência (casos EXISTENTES ÷ população); letalidade (óbitos pela doença ÷ casos da doença); mortalidade (óbitos ÷ população).",
      "Endemia (ocorrência habitual), epidemia (aumento acima do esperado), pandemia (epidemia em vários continentes), surto (epidemia localizada).",
    ],
    simple:
      "A vigilância epidemiológica é o \"radar\" do SUS: ela acompanha as doenças para agir rápido. Quando um profissional desconfia de uma doença da lista, ele é obrigado a avisar, mesmo sem confirmação. As mais urgentes precisam ser avisadas em até 24 horas; as outras, em até uma semana.",
    analogy:
      "É como o corpo de bombeiros: basta cheiro de fumaça (suspeita) para ligar. Não se espera o prédio pegar fogo (confirmação) para avisar.",
    summary:
      "A vigilância epidemiológica monitora doenças para orientar prevenção e controle. A notificação é obrigatória já na suspeita: imediata em até 24 h e semanal em até 7 dias, pelo SINAN. Incidência conta casos novos; prevalência, casos existentes; letalidade mede a gravidade da doença.",
    keyPoints: ["Imediata: até 24 h.", "Semanal: até 7 dias.", "Notificar a suspeita.", "Letalidade = óbitos ÷ doentes."],
    traps: [
      "Letalidade ≠ mortalidade: o denominador da letalidade são os doentes; o da mortalidade, a população.",
      "Incidência mede casos NOVOS; prevalência, TODOS os casos existentes.",
    ],
    checks: [
      { q: "Qual o prazo da notificação compulsória imediata?", a: "Até 24 horas." },
      { q: "O que mede a letalidade?", a: "A proporção de óbitos entre os doentes (gravidade da doença)." },
    ],
    sources: ["Lei nº 8.080/1990, art. 6º", "Portaria de Consolidação MS nº 4/2017 (lista nacional de notificação compulsória, com atualizações)", "Guia de Vigilância em Saúde (MS)"],
  },
  {
    id: "prenatal",
    tags: ["saude da mulher", "pre-natal", "prenatal", "gestacao", "gestante", "obstetri", "puerperio", "parto"],
    title: "Saúde da mulher: pré-natal",
    raw: [
      "Início do pré-natal o mais cedo possível, idealmente até a 12ª semana. O Ministério da Saúde preconiza no mínimo 6 consultas (tradicionalmente: 1 no 1º trimestre, 2 no 2º e 3 no 3º); a OMS (2016) recomenda no mínimo 8 contatos.",
      "Consultas intercaladas entre médico e enfermeiro; o enfermeiro pode acompanhar integralmente o pré-natal de BAIXO risco.",
      "Data provável do parto (Naegele): DUM + 7 dias e − 3 meses (ou + 9 meses). Idade gestacional pela DUM ou pela ultrassonografia precoce.",
      "Altura uterina: útero palpável acima da sínfise púbica por volta de 12 semanas; na cicatriz umbilical por volta de 20 semanas.",
      "Batimentos cardíacos fetais (BCF): normal de 110 a 160 bpm.",
      "Manobras de Leopold: 4 tempos para identificar situação, posição, apresentação e insinuação fetal.",
      "Exames da 1ª consulta incluem: hemograma, tipagem sanguínea e fator Rh, glicemia de jejum, testes rápidos para HIV, sífilis e hepatites B e C, urina tipo I e urocultura, sorologia para toxoplasmose.",
      "Suplementação: ácido fólico (0,4 mg/dia, idealmente desde antes da concepção até a 12ª semana) e ferro, conforme o programa vigente.",
      "Sífilis na gestação: tratar com penicilina benzatina e tratar a(s) parceria(s) sexual(is).",
      "Gestante tem direito a acompanhante de livre escolha no trabalho de parto, parto e pós-parto imediato (Lei 11.108/2005).",
    ],
    simple:
      "O pré-natal é o acompanhamento da gestação para pegar problemas cedo. Começa o quanto antes e tem no mínimo 6 consultas, alternando médico e enfermeiro; no baixo risco, o enfermeiro pode conduzir tudo. Em cada consulta medimos pressão, peso, barriga (altura uterina) e o coraçãozinho do bebê, e pedimos exames para descobrir e tratar infecções como sífilis e HIV.",
    analogy:
      "É a revisão periódica de um carro numa viagem longa (9 meses): paradas programadas para conferir se está tudo em ordem antes que um problema pequeno vire grande.",
    summary:
      "O pré-natal deve começar até a 12ª semana, com no mínimo 6 consultas pelo MS. A DPP é calculada pela regra de Naegele (DUM + 7 dias − 3 meses) e o BCF normal fica entre 110 e 160 bpm. O enfermeiro pode acompanhar integralmente o pré-natal de baixo risco.",
    keyPoints: [
      "Mínimo de 6 consultas (MS).",
      "Naegele: +7 dias, −3 meses.",
      "BCF: 110–160 bpm.",
      "Útero na cicatriz umbilical por volta de 20 semanas.",
    ],
    traps: [
      "Não existe \"alta\" do pré-natal antes do parto.",
      "Sífilis: tratar também a parceria sexual; sem isso a gestante pode se reinfectar.",
    ],
    checks: [
      { q: "DUM em 10/03. Qual a DPP?", a: "17/12 (10 + 7 = 17; março − 3 meses = dezembro)." },
      { q: "Qual a faixa normal dos BCF?", a: "110 a 160 bpm." },
    ],
    sources: ["Cadernos de Atenção Básica nº 32 — Atenção ao Pré-natal de Baixo Risco (MS)", "Lei nº 11.108/2005"],
  },
  {
    id: "crianca",
    tags: ["saude da crianca", "recem-nascido", "neonat", "apgar", "aleitamento", "amamentacao", "puericultura", "crescimento e desenvolvimento", "pediatri"],
    title: "Saúde da criança e do recém-nascido",
    raw: [
      "Índice de Apgar: avaliado no 1º e no 5º minuto de vida; 5 critérios (frequência cardíaca, esforço respiratório, tônus muscular, irritabilidade reflexa e cor), 0 a 2 pontos cada; 7 a 10 indica boa vitalidade.",
      "RN a termo com boa vitalidade: contato pele a pele imediato, clampeamento tardio do cordão (1 a 3 minutos) e amamentação na primeira hora de vida.",
      "Cuidados de rotina: vitamina K ao nascer (IM) e profilaxia ocular conforme protocolo vigente.",
      "Triagens neonatais: teste do pezinho (entre o 3º e o 5º dia de vida); teste do coraçãozinho (oximetria entre 24 e 48 horas); teste da orelhinha (preferencialmente no 1º mês); teste do olhinho (reflexo vermelho).",
      "Aleitamento materno exclusivo até os 6 meses e complementado até 2 anos ou mais.",
      "Acompanhamento de crescimento e desenvolvimento pela Caderneta da Criança (curvas de peso, altura, perímetro cefálico e marcos do desenvolvimento).",
    ],
    simple:
      "Logo que o bebê nasce, damos nota para ele no 1º e no 5º minuto (Apgar), olhando coração, respiração, tônus, reflexos e cor. Se ele está bem, vai direto para o colo da mãe, pele com pele, e já mama na primeira hora. Nos primeiros dias faz os \"testinhos\" (pezinho, coraçãozinho, orelhinha e olhinho), e até os 6 meses deve receber só leite materno.",
    analogy:
      "O Apgar é como a \"nota de chegada\" do bebê: 5 quesitos valendo até 2 pontos cada, uma prova de 0 a 10 feita duas vezes.",
    summary:
      "O Apgar é feito no 1º e no 5º minuto, e 7–10 é boa vitalidade. O teste do pezinho é feito entre o 3º e o 5º dia e o do coraçãozinho entre 24 e 48 h. A amamentação deve ser exclusiva até 6 meses e continuada até 2 anos ou mais.",
    keyPoints: ["Apgar: 1º e 5º minuto.", "Pezinho: 3º ao 5º dia.", "Coraçãozinho: 24–48 h.", "AME até 6 meses."],
    traps: [
      "O Apgar NÃO é usado para decidir o início da reanimação neonatal.",
      "Água e chás não são recomendados durante o aleitamento exclusivo.",
    ],
    checks: [
      { q: "Quando se faz o teste do pezinho?", a: "Entre o 3º e o 5º dia de vida." },
      { q: "Quais os 5 critérios do Apgar?", a: "Frequência cardíaca, esforço respiratório, tônus muscular, irritabilidade reflexa e cor." },
    ],
    sources: ["Cadernos de Atenção Básica nº 33 — Saúde da Criança: crescimento e desenvolvimento (MS)", "Diretrizes de Reanimação Neonatal (SBP)"],
  },
  {
    id: "sinais-vitais",
    tags: ["sinais vitais", "semiologia", "semiotecnica", "exame fisico", "fundamentos de enfermagem", "anamnese"],
    title: "Sinais vitais e exame físico",
    raw: [
      "Adulto em repouso: frequência cardíaca de 60 a 100 bpm; frequência respiratória de 12 a 20 irpm; SpO₂ geralmente ≥ 95%; temperatura axilar em torno de 36–37 °C (os pontos de corte para febre variam entre referências).",
      "Terminologia: taquicardia (> 100 bpm), bradicardia (< 60 bpm), taquipneia (> 20 irpm), bradipneia (< 12 irpm), apneia (ausência), dispneia (dificuldade), ortopneia (dispneia deitado, melhora sentado).",
      "Padrões respiratórios: Cheyne-Stokes (ciclos de aumento e redução com períodos de apneia — ICC, lesão neurológica); Kussmaul (respirações profundas e rápidas — acidose metabólica, cetoacidose); Biot (irregular com apneias — lesão neurológica).",
      "Dor é considerada o 5º sinal vital: avaliar com escala (numérica 0–10, visual analógica, faces).",
      "Exame físico: inspeção, palpação, percussão e ausculta. No ABDOME a ordem é inspeção, AUSCULTA, percussão e palpação (para não alterar os ruídos hidroaéreos).",
      "Pulso: avaliar frequência, ritmo, amplitude e simetria; pulso deficitário = FC apical maior que o pulso radial.",
    ],
    simple:
      "Sinais vitais são os \"marcadores de funcionamento\" do corpo: pressão, pulso, respiração, temperatura, saturação e dor. Decorar os valores normais do adulto resolve a maioria das questões: coração de 60 a 100 e respiração de 12 a 20. No exame do abdome, ouvimos antes de apertar, porque apertar muda os barulhos do intestino.",
    analogy:
      "Os sinais vitais são o painel do carro: velocímetro (FC), conta-giros (FR), temperatura do motor (T) e a luz de alerta (dor). Um número fora da faixa é como uma luz acesa no painel.",
    summary:
      "No adulto: FC 60–100 bpm e FR 12–20 irpm. Kussmaul aparece na acidose metabólica e Cheyne-Stokes na ICC e em lesões neurológicas. No abdome, ausculta-se antes de percutir e palpar.",
    keyPoints: ["FC 60–100; FR 12–20.", "Abdome: I-A-P-P (inspeção, ausculta, percussão, palpação).", "Kussmaul = cetoacidose."],
    traps: [
      "A ordem do exame do abdome é diferente da dos outros segmentos.",
      "Ortopneia é dispneia na posição deitada, e não \"respiração normal\".",
    ],
    checks: [
      { q: "Qual padrão respiratório é típico da cetoacidose diabética?", a: "Kussmaul." },
      { q: "Qual a ordem do exame físico do abdome?", a: "Inspeção, ausculta, percussão e palpação." },
    ],
    sources: ["Porto — Semiologia Médica", "Potter & Perry — Fundamentos de Enfermagem"],
  },
  {
    id: "sondagens",
    tags: ["sonda", "sondagem", "nasogastrica", "nasoenteral", "cateterismo", "vesical", "nutricao enteral", "procedimentos de enfermagem"],
    title: "Sondagens gástrica, enteral e vesical",
    raw: [
      "Medida da SNG (técnica NEX): ponta do nariz → lóbulo da orelha → apêndice xifoide. Para a sonda nasoenteral, acrescentam-se centímetros conforme o protocolo institucional.",
      "Confirmação do posicionamento: a radiografia é o padrão-ouro, obrigatória para a sonda nasoenteral antes de iniciar a dieta. Teste do pH do aspirado ajuda; a ausculta com injeção de ar NÃO é método confiável isoladamente.",
      "Posição: paciente sentado ou com cabeceira elevada; durante a dieta enteral, manter cabeceira a 30–45° para reduzir risco de broncoaspiração.",
      "Sonda nasoenteral: a inserção é atribuição do enfermeiro na terapia nutricional (Res. COFEN 453/2014).",
      "Cateterismo vesical (Res. COFEN 450/2013): a inserção de cateter vesical é PRIVATIVA do enfermeiro, que também se responsabiliza pelos cuidados.",
      "Cateter vesical de demora: técnica asséptica; sistema de drenagem fechado; bolsa sempre abaixo do nível da bexiga e sem contato com o chão; fixação na face interna da coxa (mulher) e no hipogástrio/região suprapúbica (homem, para evitar fístula penoescrotal).",
    ],
    simple:
      "Para passar uma sonda no estômago, medimos do nariz até a orelha e depois até o fim do esterno: esse é o comprimento. Antes de dar dieta, precisamos ter certeza de que a sonda está no estômago ou no intestino, e não no pulmão; a radiografia é quem dá a certeza. A sonda vesical é passada pelo enfermeiro, com técnica estéril, e a bolsa fica sempre abaixo da bexiga para a urina não voltar.",
    analogy:
      "A bolsa coletora é como uma calha: a água só desce. Se você levanta a calha acima do telhado (bexiga), a água volta e leva sujeira (bactérias) junto.",
    summary:
      "A SNG é medida pela técnica NEX e a posição é confirmada por radiografia, obrigatória na nasoenteral. A inserção do cateter vesical é privativa do enfermeiro (Res. COFEN 450/2013). A bolsa coletora fica sempre abaixo da bexiga, em sistema fechado.",
    keyPoints: ["NEX: nariz–orelha–xifoide.", "RX = padrão-ouro.", "Cateter vesical: privativo do enfermeiro.", "Dieta enteral: cabeceira 30–45°."],
    traps: [
      "O \"teste do copo d'água\" e a ausculta isolada não confirmam a posição da sonda.",
      "No homem, fixa-se o cateter vesical no hipogástrio, não na coxa.",
    ],
    checks: [
      { q: "Qual o método padrão-ouro para confirmar a posição da sonda enteral?", a: "Radiografia." },
      { q: "A inserção de cateter vesical é atividade de quem?", a: "Privativa do enfermeiro (Res. COFEN 450/2013)." },
    ],
    sources: ["Resolução COFEN nº 450/2013", "Resolução COFEN nº 453/2014"],
  },
  {
    id: "cme",
    tags: ["cme", "central de material", "esterilizacao", "desinfeccao", "processamento de produtos", "rdc 15", "spaulding", "autoclave"],
    title: "Central de Material e Esterilização (CME)",
    raw: [
      "RDC ANVISA nº 15/2012: requisitos de boas práticas para o processamento de produtos para saúde.",
      "Classificação de Spaulding: CRÍTICOS (penetram tecidos estéreis ou o sistema vascular) → esterilização; SEMICRÍTICOS (contato com mucosa íntegra ou pele não íntegra) → no mínimo desinfecção de alto nível; NÃO CRÍTICOS (contato com pele íntegra) → limpeza e desinfecção de baixo/médio nível.",
      "Fluxo unidirecional: área suja (recepção e limpeza/expurgo) → preparo e acondicionamento → esterilização → armazenamento e distribuição.",
      "A LIMPEZA é a etapa mais importante: sem ela não há desinfecção nem esterilização eficazes.",
      "Métodos: vapor saturado sob pressão (autoclave, o mais usado para materiais termorresistentes); baixa temperatura (peróxido de hidrogênio, óxido de etileno, vapor de baixa temperatura e formaldeído) para termossensíveis.",
      "Monitoramento: indicadores físicos (tempo, temperatura, pressão), químicos (classes 1 a 6; a classe 1 é a fita externa de processo) e biológicos (Geobacillus stearothermophilus para vapor e peróxido de hidrogênio; Bacillus atrophaeus para óxido de etileno e calor seco).",
      "Teste de Bowie-Dick: diário, no primeiro ciclo do dia, em autoclaves com pré-vácuo, para avaliar a remoção do ar.",
    ],
    simple:
      "A CME é a \"lavanderia\" dos instrumentos. O material faz um caminho de mão única: chega sujo, é lavado, embalado, esterilizado e guardado. O quanto precisamos limpar depende de onde o material vai entrar: se entra no corpo (tecido estéril), precisa ser esterilizado; se só toca mucosa, desinfecção de alto nível; se só toca pele íntegra, limpeza basta.",
    analogy:
      "É como a louça de um restaurante: nunca se mistura prato sujo com prato limpo (fluxo unidirecional), e o mais importante é lavar bem, porque de nada adianta \"esterilizar\" um prato com comida grudada.",
    summary:
      "Spaulding classifica os materiais em críticos (esterilização), semicríticos (desinfecção de alto nível) e não críticos (limpeza/desinfecção de baixo nível). O fluxo na CME é unidirecional e a limpeza é a etapa mais importante. O Bowie-Dick é diário em autoclaves pré-vácuo, e os indicadores biológicos confirmam a esterilização.",
    keyPoints: ["Crítico → esterilização.", "Semicrítico → desinfecção de alto nível.", "Limpeza é a etapa mais importante.", "Bowie-Dick: diário, 1º ciclo."],
    traps: [
      "A fita zebrada (classe 1) só mostra que o pacote passou pelo processo; NÃO comprova esterilidade.",
      "O Bowie-Dick avalia a remoção de ar; não é indicador biológico.",
    ],
    checks: [
      { q: "Um endoscópio digestivo é classificado como?", a: "Semicrítico: exige no mínimo desinfecção de alto nível." },
      { q: "Qual indicador biológico é usado na autoclave a vapor?", a: "Geobacillus stearothermophilus." },
    ],
    sources: ["RDC ANVISA nº 15/2012"],
  },
  {
    id: "saude-mental",
    tags: ["saude mental", "psiquiatri", "10216", "10.216", "raps", "caps", "reforma psiquiatrica"],
    title: "Saúde mental: Lei 10.216/2001 e RAPS",
    raw: [
      "Lei nº 10.216/2001 (Reforma Psiquiátrica): protege os direitos das pessoas com transtornos mentais e redireciona o modelo assistencial para serviços comunitários.",
      "A internação só é indicada quando os recursos extra-hospitalares forem insuficientes, sempre com laudo médico circunstanciado.",
      "Tipos de internação: VOLUNTÁRIA (com consentimento do usuário); INVOLUNTÁRIA (sem consentimento, a pedido de terceiro — deve ser comunicada ao Ministério Público em até 72 horas); COMPULSÓRIA (determinada pela Justiça).",
      "É vedada a internação em instituições com características asilares.",
      "Rede de Atenção Psicossocial (RAPS — Portaria 3.088/2011): Atenção Básica, CAPS, atenção de urgência, residências terapêuticas, leitos em hospital geral, entre outros componentes.",
      "CAPS: I, II, III (funcionamento 24 h), CAPSi (infantojuvenil), CAPS AD (álcool e outras drogas) e CAPS AD III (24 h).",
    ],
    simple:
      "A Reforma Psiquiátrica trocou o manicômio pelo cuidado em liberdade, perto da família e da comunidade. A internação passou a ser o último recurso e só pode ocorrer de três formas: quando o paciente aceita (voluntária), quando a família pede sem o paciente aceitar (involuntária, e o Ministério Público precisa saber em 72 horas) ou quando o juiz manda (compulsória). O CAPS é o centro desse cuidado na comunidade.",
    analogy:
      "Antes o modelo era \"trancar a pessoa longe\"; agora é \"cuidar da pessoa onde ela vive\", como trocar a internação permanente por um acompanhamento de perto no bairro.",
    summary:
      "A Lei 10.216/2001 garante direitos e prioriza o cuidado comunitário. As internações podem ser voluntária, involuntária (comunicada ao MP em 72 h) ou compulsória (determinada pela Justiça). A RAPS organiza a rede, com os CAPS como serviços estratégicos.",
    keyPoints: ["Involuntária → comunicar ao MP em 72 h.", "Compulsória → determinada pela Justiça.", "CAPS III e CAPS AD III funcionam 24 h."],
    traps: [
      "Involuntária ≠ compulsória: na involuntária o pedido é de terceiro; na compulsória, do juiz.",
      "A comunicação ao MP é feita pelo responsável técnico do estabelecimento.",
    ],
    checks: [
      { q: "Em quanto tempo a internação involuntária deve ser comunicada ao MP?", a: "Em até 72 horas." },
      { q: "Quem determina a internação compulsória?", a: "A Justiça." },
    ],
    sources: ["Lei nº 10.216/2001", "Portaria MS nº 3.088/2011 (RAPS)"],
  },
  {
    id: "tuberculose",
    tags: ["tuberculose", "hanseniase", "doencas transmissiveis", "doencas infecciosas", "endemias", "infectologia"],
    title: "Tuberculose (doenças transmissíveis)",
    raw: [
      "Agente: Mycobacterium tuberculosis (bacilo de Koch); transmissão por aerossóis, a partir de pessoas com TB pulmonar ou laríngea.",
      "Sintomático respiratório: pessoa com tosse por 3 semanas ou mais (na população geral); em populações vulneráveis (PPL, PVHIV, situação de rua, indígenas), considera-se tosse de qualquer duração.",
      "Diagnóstico: teste rápido molecular (TRM-TB), baciloscopia de escarro, cultura, radiografia de tórax.",
      "Tratamento do adulto (esquema básico, 6 meses): fase intensiva de 2 meses com RHZE (rifampicina, isoniazida, pirazinamida e etambutol) + fase de manutenção de 4 meses com RH.",
      "Tratamento Diretamente Observado (TDO) é a estratégia recomendada para adesão.",
      "Isolamento respiratório (aerossóis) no ambiente hospitalar até a negativação ou conforme protocolo; após cerca de 15 dias de tratamento eficaz a transmissibilidade reduz muito.",
      "Notificação compulsória; investigação dos contatos.",
    ],
    simple:
      "A tuberculose é uma infecção por uma bactéria que passa pelo ar quando a pessoa doente tosse ou fala. Quem tosse há 3 semanas ou mais deve ser investigado. O tratamento dura pelo menos 6 meses: 2 meses com 4 remédios juntos e depois 4 meses com 2. O grande desafio é a pessoa não abandonar, e por isso o tratamento observado de perto é o ideal.",
    analogy:
      "Tratar TB é como uma maratona, não uma corrida de 100 metros: a pessoa começa a se sentir melhor nas primeiras semanas, mas se parar antes da linha de chegada, a bactéria volta mais forte (resistência).",
    summary:
      "A TB é transmitida por aerossóis; investiga-se o sintomático respiratório com tosse há 3 semanas ou mais. O esquema básico é 2RHZE + 4RH (6 meses), preferencialmente com TDO. É de notificação compulsória, com avaliação dos contatos.",
    keyPoints: ["Tosse ≥ 3 semanas = sintomático respiratório.", "2RHZE/4RH.", "Precaução para aerossóis.", "TDO."],
    traps: [
      "A BCG protege contra as formas GRAVES da TB na infância, mas não impede a infecção.",
      "Em populações vulneráveis, investiga-se tosse de qualquer duração.",
    ],
    checks: [
      { q: "Qual o esquema básico para TB em adultos?", a: "2 meses de RHZE + 4 meses de RH." },
      { q: "Quem é considerado sintomático respiratório na população geral?", a: "Quem tem tosse por 3 semanas ou mais." },
    ],
    sources: ["Manual de Recomendações para o Controle da Tuberculose no Brasil (MS — edição vigente)"],
  },
  ...PESQUISA_LESSONS,
];
