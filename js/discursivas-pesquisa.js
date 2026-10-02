// Banco de questões discursivas — INCA Fellow 214: Pesquisa Clínica em Câncer, com ênfase no gerenciamento
// e condução de ensaios clínicos. Formato da prova (edital): 5 questões discursivas, 100 pontos; um artigo e um
// enunciado em inglês, com respostas em português. Por isso cada questão vale 20 pontos no espelho.
// Questões elaboradas a partir do conteúdo programático e das referências do edital (não são questões oficiais).
// Trechos em inglês são textos originais, escritos para treino (estudos fictícios).

const T = {
  etica: ["etica em pesquisa", "nuremberg", "helsinque", "belmont", "marcos historicos", "466", "pesquisa com seres humanos", "unesco", "bioetica e direitos humanos"],
  fluxo: ["fluxo etico", "regulatorio", "cep/conep", "plataforma brasil", "14.874", "sistema nacional de etica em pesquisa"],
  gcp: ["ich e6", "e6(r2)", "boas praticas clinicas", "eventos adversos", "monitoria", "conducao de ensaios", "fluxo etico"],
  tipos: ["tipos de estudo", "tipos de estudos", "estudos clinicos", "fases", "randomiza", "cegamento", "ensaio clinico randomizado", "oncologi", "basket", "desenhos inovadores", "observaciona"],
  tcle: ["consentimento livre", "tcle", "assentimento", "situacoes especiais", "vulnera", "biobanco"],
};

export const DISCURSIVE_BANK = [
  // ---------------- 1. ÉTICA EM PESQUISA ----------------
  {
    id: "d-etica-referenciais",
    area: "Ética em pesquisa",
    tags: [...T.etica],
    q: "A Resolução CNS nº 466/2012 incorpora, sob a ótica do indivíduo e das coletividades, referenciais da bioética. Cite esses referenciais e explique como cada um deles se aplica à condução de um ensaio clínico em oncologia.",
    gabarito:
      "A Res. 466/2012 incorpora os referenciais de AUTONOMIA, NÃO MALEFICÊNCIA, BENEFICÊNCIA, JUSTIÇA e EQUIDADE, visando assegurar os direitos e deveres dos participantes, da comunidade científica e do Estado.\n" +
      "• Autonomia: respeito à decisão livre e esclarecida do paciente, concretizada no processo de consentimento (TCLE) e no direito de recusar ou retirar-se do estudo a qualquer momento, sem prejuízo da assistência. Em oncologia, exige atenção à pressão emocional do diagnóstico e à proteção de quem tem autonomia reduzida.\n" +
      "• Beneficência: ponderação entre riscos e benefícios, comprometendo-se com o máximo de benefícios; o estudo deve ter relevância científica e social.\n" +
      "• Não maleficência: garantia de que danos previsíveis serão evitados ou minimizados — critérios de elegibilidade adequados, monitoramento de segurança, ajustes de dose e suspensão do estudo quando houver risco ou dano não previsto.\n" +
      "• Justiça e equidade: relevância social da pesquisa, seleção equitativa dos participantes (sem expor grupos vulneráveis a ônus desproporcionais nem excluí-los injustificadamente dos benefícios) e garantia de assistência, ressarcimento, indenização e acesso ao benefício.",
    espelho: [
      { item: "Cita os cinco referenciais: autonomia, não maleficência, beneficência, justiça e equidade", pts: 5 },
      { item: "Autonomia aplicada: TCLE e liberdade de recusa/retirada sem prejuízo", pts: 4 },
      { item: "Beneficência aplicada: ponderação risco–benefício e relevância", pts: 3 },
      { item: "Não maleficência aplicada: evitar/minimizar danos, monitoramento de segurança, suspensão", pts: 4 },
      { item: "Justiça/equidade aplicadas: seleção equitativa, proteção de vulneráveis, distribuição de ônus e benefícios", pts: 4 },
    ],
    ref: "Res. CNS 466/2012, item I.",
  },
  {
    id: "d-etica-historia",
    area: "Ética em pesquisa",
    tags: [...T.etica],
    q: "Relacione os principais marcos históricos internacionais da ética em pesquisa (Código de Nuremberg, Declaração de Helsinque e Relatório Belmont) à construção das normas brasileiras de ética em pesquisa com seres humanos.",
    gabarito:
      "• Código de Nuremberg (1947): elaborado após o julgamento dos médicos nazistas; estabeleceu que o consentimento voluntário do participante é absolutamente essencial, que a pesquisa deve ser necessária, evitar sofrimento e permitir a interrupção pelo participante.\n" +
      "• Declaração de Helsinque (Associação Médica Mundial, 1964, com revisões periódicas): princípios éticos para pesquisa médica; prevalência do bem-estar do participante sobre os interesses da ciência e da sociedade; necessidade de revisão por comitê de ética independente; regras para uso de placebo e acesso pós-estudo.\n" +
      "• Relatório Belmont (EUA, 1979, após o caso Tuskegee): princípios de respeito às pessoas (consentimento e proteção de autonomia reduzida), beneficência (avaliação de riscos e benefícios) e justiça (seleção equitativa dos participantes).\n" +
      "• No Brasil, esses documentos fundamentaram a Res. CNS 01/1988, a Res. CNS 196/1996 (que criou o Sistema CEP/Conep) e a Res. CNS 466/2012, que os cita expressamente, além da Declaração Universal sobre Bioética e Direitos Humanos (UNESCO, 2005). Em 2024, a Lei nº 14.874 conferiu status de lei às regras de pesquisa com seres humanos e instituiu o Sistema Nacional de Ética em Pesquisa.",
    espelho: [
      { item: "Nuremberg: contexto pós-guerra e consentimento voluntário essencial", pts: 5 },
      { item: "Helsinque: AMM, bem-estar do participante acima da ciência, comitê de ética", pts: 5 },
      { item: "Belmont: respeito às pessoas, beneficência e justiça (com aplicação)", pts: 5 },
      { item: "Relação com as normas brasileiras (Res. 196/96 → 466/2012 → Lei 14.874/2024)", pts: 5 },
    ],
    ref: "Res. CNS 466/2012 (preâmbulo); Lei nº 14.874/2024.",
  },
  {
    id: "d-unesco",
    area: "Ética em pesquisa",
    tags: [...T.etica],
    q: "A Declaração Universal sobre Bioética e Direitos Humanos (UNESCO, 2005) ampliou o campo da bioética. Explique essa ampliação e discorra sobre três de seus princípios, aplicando-os à pesquisa clínica em câncer.",
    gabarito:
      "A Declaração ancorou a bioética nos DIREITOS HUMANOS e ampliou seu escopo para além da relação profissional–paciente, incorporando as dimensões sociais, sanitárias e ambientais (responsabilidade social e saúde, compartilhamento de benefícios, proteção das gerações futuras e do meio ambiente). Seus princípios (arts. 3º a 17) devem orientar Estados, pesquisadores e instituições.\n" +
      "Exemplos de princípios aplicados (o candidato deve desenvolver três):\n" +
      "• Dignidade humana e direitos humanos (art. 3º): os interesses e o bem-estar do indivíduo têm prioridade sobre o interesse exclusivo da ciência ou da sociedade — p. ex., interromper a participação de um paciente com toxicidade grave mesmo que isso afete o estudo.\n" +
      "• Consentimento (art. 6º): prévio, livre e esclarecido, revogável a qualquer momento, sem desvantagem.\n" +
      "• Respeito pela vulnerabilidade humana (art. 8º): pacientes com câncer avançado e poucas alternativas terapêuticas exigem proteção adicional contra expectativas irreais de benefício.\n" +
      "• Privacidade e confidencialidade (art. 9º): proteção dos dados clínicos e genômicos.\n" +
      "• Compartilhamento de benefícios (art. 15): acesso dos participantes e da sociedade aos resultados e ao tratamento, incluindo países em desenvolvimento.",
    espelho: [
      { item: "Explica a ampliação: base nos direitos humanos + dimensões sociais, sanitárias e ambientais", pts: 5 },
      { item: "1º princípio corretamente explicado e aplicado à pesquisa em câncer", pts: 5 },
      { item: "2º princípio corretamente explicado e aplicado", pts: 5 },
      { item: "3º princípio corretamente explicado e aplicado", pts: 5 },
    ],
    ref: "UNESCO, Declaração Universal sobre Bioética e Direitos Humanos (2005).",
  },
  {
    id: "d-fase1-vulnerabilidade",
    area: "Ética em pesquisa",
    tags: [...T.etica, ...T.tcle, "fases"],
    q: "Pacientes com câncer avançado, sem alternativas terapêuticas padrão, são frequentemente convidados a participar de estudos de fase I. Discuta os aspectos éticos envolvidos e as medidas para proteger esses participantes.",
    gabarito:
      "Aspectos éticos:\n" +
      "• Vulnerabilidade: a gravidade da doença e a falta de alternativas reduzem a capacidade de recusa e aumentam a esperança de benefício.\n" +
      "• Equívoco terapêutico: o paciente pode confundir pesquisa com tratamento e superestimar o benefício. Em fase I, o objetivo principal é avaliar segurança, tolerabilidade e definir a dose, e a probabilidade de benefício individual é incerta.\n" +
      "• Relação risco–benefício: toxicidades potencialmente graves e desconhecidas.\n" +
      "• Possível influência da relação de confiança com o médico assistente.\n" +
      "Medidas de proteção:\n" +
      "• Consentimento como processo: linguagem clara; informar explicitamente o objetivo da fase I, os riscos conhecidos e desconhecidos e as alternativas, incluindo cuidados paliativos exclusivos; tempo para reflexão e para consultar a família.\n" +
      "• Verificar a compreensão.\n" +
      "• Liberdade de retirada sem prejuízo da assistência.\n" +
      "• Critérios de elegibilidade e monitoramento de segurança rigorosos (DLT, comitê de monitoramento).\n" +
      "• Assistência imediata e integral, ressarcimento e indenização.\n" +
      "• Aprovação e acompanhamento pelo CEP.",
    espelho: [
      { item: "Identifica a vulnerabilidade e a limitação de alternativas", pts: 4 },
      { item: "Explica o equívoco terapêutico e o objetivo real da fase I (segurança/dose)", pts: 5 },
      { item: "Discute a relação risco–benefício e a incerteza", pts: 3 },
      { item: "Medidas no processo de consentimento (linguagem, alternativas, tempo, compreensão)", pts: 5 },
      { item: "Outras salvaguardas: retirada sem prejuízo, monitoramento de segurança, assistência, CEP", pts: 3 },
    ],
    ref: "Res. CNS 466/2012; Declaração da UNESCO (art. 8º); Verweij et al., 2019.",
  },
  {
    id: "d-placebo",
    area: "Ética em pesquisa",
    tags: [...T.etica, "placebo", "randomiza"],
    q: "Discuta o uso de placebo em ensaios clínicos em oncologia à luz das normas éticas. Em que situações ele é aceitável e como os estudos costumam ser desenhados para não privar o paciente de tratamento?",
    gabarito:
      "As normas éticas restringem o uso de placebo.\n" +
      "• A Res. 466/2012 exige que o uso de placebo seja plenamente justificado em termos de não maleficência e de necessidade metodológica, e que o novo método seja comparado com o melhor método comprovado.\n" +
      "• A Declaração de Helsinque admite placebo quando não há intervenção comprovada ou, por razões metodológicas convincentes, quando os participantes que recebem placebo não forem expostos a risco adicional de dano grave ou irreversível por não receber a melhor intervenção comprovada.\n" +
      "Em oncologia, é inaceitável deixar o paciente sem tratamento padrão eficaz. Por isso, usa-se o desenho \"add-on\": todos recebem o tratamento padrão, e randomiza-se o acréscimo da droga experimental versus o acréscimo de placebo (ex.: quimioterapia + droga X vs quimioterapia + placebo). Também se usa placebo quando não existe tratamento eficaz (ex.: manutenção, adjuvância em cenários sem terapia padrão) e em estudos de terapia de suporte. O placebo permite o cegamento e reduz vieses, mas não pode se sobrepor à segurança do participante.",
    espelho: [
      { item: "Res. 466: justificativa por não maleficência e necessidade metodológica; comparação com o melhor método comprovado", pts: 6 },
      { item: "Helsinque: ausência de intervenção comprovada ou razões metodológicas sem risco de dano grave/irreversível", pts: 5 },
      { item: "Explica o desenho add-on (padrão + experimental vs padrão + placebo)", pts: 6 },
      { item: "Menciona o valor metodológico (cegamento) subordinado à segurança", pts: 3 },
    ],
    ref: "Res. CNS 466/2012, item III; Declaração de Helsinque.",
  },
  {
    id: "d-direitos-participante",
    area: "Ética em pesquisa",
    tags: [...T.etica, "ressarcimento", "indenizacao"],
    q: "Diferencie assistência imediata, assistência integral, ressarcimento e indenização ao participante de pesquisa, segundo a Resolução CNS nº 466/2012, exemplificando cada um no contexto de um ensaio clínico em oncologia.",
    gabarito:
      "• Assistência imediata: emergencial e sem ônus de qualquer espécie ao participante, em situações em que dela necessite. Ex.: reação infusional grave durante a administração da droga experimental, atendida prontamente no centro.\n" +
      "• Assistência integral: prestada para atender complicações e danos decorrentes, direta ou indiretamente, da pesquisa, pelo tempo necessário. Ex.: tratamento de uma pneumonite associada à imunoterapia experimental até a resolução.\n" +
      "• Ressarcimento: compensação material, exclusivamente de despesas do participante e de seus acompanhantes, como transporte e alimentação. Ex.: passagens e alimentação nos dias de visita do estudo. Não é remuneração.\n" +
      "• Indenização: cobertura material para reparação de dano, imediato ou tardio, causado pela pesquisa. Ex.: reparação por sequela permanente decorrente do procedimento do estudo.\n" +
      "O TCLE deve explicitar essas garantias, e é vedada qualquer cláusula que afaste o direito de buscar indenização.",
    espelho: [
      { item: "Assistência imediata: emergencial, sem ônus + exemplo", pts: 5 },
      { item: "Assistência integral: complicações e danos decorrentes da pesquisa + exemplo", pts: 5 },
      { item: "Ressarcimento: despesas (transporte, alimentação), não é remuneração + exemplo", pts: 5 },
      { item: "Indenização: reparação de dano + exemplo; vedada cláusula de renúncia", pts: 5 },
    ],
    ref: "Res. CNS 466/2012, item II.",
  },

  // ---------------- 2. FLUXO ÉTICO-REGULATÓRIO ----------------
  {
    id: "d-fluxo-inicio",
    area: "Fluxo ético-regulatório",
    tags: [...T.fluxo, "conducao de ensaios"],
    q: "Descreva o fluxo ético-regulatório para o início de um ensaio clínico multicêntrico de fase III, patrocinado pela indústria, com medicamento experimental para fins de registro no Brasil, desde a submissão até a inclusão do primeiro participante.",
    gabarito:
      "1) Documentação: protocolo, Brochura do Investigador, TCLE (e assentimento, se aplicável), orçamento, cronograma, currículos e declarações institucionais.\n" +
      "2) Análise ÉTICA: submissão pela Plataforma Brasil ao CEP do centro coordenador e dos centros participantes. A instância nacional (CONEP, no modelo da Res. 466) atua nas situações previstas nas normas. Pendências são respondidas pelo pesquisador, até a emissão do parecer de aprovação.\n" +
      "3) Análise REGULATÓRIA: o patrocinador submete à ANVISA a documentação do desenvolvimento clínico do medicamento (RDC 945/2024, que substituiu a RDC 9/2015). A anuência da ANVISA avalia aspectos sanitários, de qualidade e de segurança do produto. As análises ética e regulatória são independentes e podem ocorrer em paralelo (a Lei 14.874/2024 prevê concomitância e prazos).\n" +
      "4) Registro do ensaio em base pública (ex.: ReBEC/ClinicalTrials.gov) antes da inclusão do primeiro participante.\n" +
      "5) Contrato entre patrocinador, instituição e investigador; importação e recebimento do produto sob investigação.\n" +
      "6) Ativação do centro: visita de iniciação, treinamento da equipe no protocolo e em BPC, log de delegação e arquivo do investigador organizado.\n" +
      "7) Somente após todas as aprovações: triagem do primeiro participante, iniciando pelo processo de consentimento.",
    espelho: [
      { item: "Documentos necessários (protocolo, BI, TCLE etc.)", pts: 3 },
      { item: "Análise ética: Plataforma Brasil, CEP (e instância nacional/CONEP quando aplicável), pendências e parecer", pts: 5 },
      { item: "Análise regulatória pela ANVISA e independência/paralelismo com a ética", pts: 5 },
      { item: "Registro do ensaio, contrato e ativação do centro (iniciação, treinamento, delegação)", pts: 4 },
      { item: "Inclusão só após todas as aprovações, começando pelo TCLE", pts: 3 },
    ],
    ref: "Res. CNS 466/2012; Lei nº 14.874/2024; RDC ANVISA 945/2024; ICH E6(R2).",
  },
  {
    id: "d-cep",
    area: "Fluxo ético-regulatório",
    tags: [...T.fluxo, "comite de etica", "conep"],
    q: "Explique a natureza, a composição e as atribuições do Comitê de Ética em Pesquisa (CEP), e diferencie o papel do CEP do papel da ANVISA na aprovação de um ensaio clínico com medicamento.",
    gabarito:
      "Natureza: o CEP é um colegiado interdisciplinar e independente, de relevância pública, de caráter consultivo, deliberativo e educativo, criado para defender os interesses dos participantes em sua integridade e dignidade e contribuir para o desenvolvimento da pesquisa dentro de padrões éticos.\n" +
      "Composição: multi e interdisciplinar, com no mínimo 7 membros, participação de ambos os sexos e representação dos usuários/participantes. Os membros não podem ter conflito de interesses com os protocolos que analisam.\n" +
      "Atribuições:\n" +
      "• Avaliar os protocolos e emitir parecer (aprovado, pendente, não aprovado).\n" +
      "• Acompanhar a execução da pesquisa, com análise de emendas, relatórios e notificações.\n" +
      "• Receber denúncias e requerer a apuração de irregularidades.\n" +
      "• Manter a guarda confidencial dos documentos.\n" +
      "• Desenvolver ações educativas.\n" +
      "CEP x ANVISA: o CEP faz a análise ÉTICA, voltada à proteção do participante (risco–benefício, TCLE, seleção, assistência e confidencialidade). A ANVISA faz a análise SANITÁRIA/REGULATÓRIA do produto (qualidade, segurança, dados não clínicos e clínicos, plano de desenvolvimento). Uma não substitui a outra, ambas são necessárias para ensaios com fins de registro, e podem ocorrer em paralelo.",
    espelho: [
      { item: "Natureza: colegiado interdisciplinar, independente, consultivo, deliberativo e educativo", pts: 5 },
      { item: "Composição: mínimo de 7 membros, multidisciplinar, representação de usuários", pts: 4 },
      { item: "Atribuições: análise de protocolos, acompanhamento, denúncias, ações educativas", pts: 5 },
      { item: "Diferença CEP (ética/participante) x ANVISA (sanitária/produto); complementares", pts: 6 },
    ],
    ref: "Res. CNS 466/2012, item VII; Norma Operacional CNS 001/2013.",
  },
  {
    id: "d-lei14874",
    area: "Fluxo ético-regulatório",
    tags: [...T.fluxo],
    q: "Discorra sobre as principais mudanças introduzidas pela Lei nº 14.874/2024 no cenário da pesquisa clínica com seres humanos no Brasil.",
    gabarito:
      "• Status legal: é a primeira lei federal específica sobre pesquisa com seres humanos. Antes, a matéria era regida principalmente por resoluções do CNS, como a 466/2012. A lei traz maior segurança jurídica.\n" +
      "• Institui o SISTEMA NACIONAL DE ÉTICA EM PESQUISA COM SERES HUMANOS, composto por uma instância nacional de ética em pesquisa e pelos Comitês de Ética em Pesquisa (CEPs). A instância nacional coordena o sistema e credencia e acompanha os CEPs.\n" +
      "• Análise ética: realizada pelos CEPs, com prazos definidos em lei.\n" +
      "• Análise regulatória (ANVISA): pode ocorrer de forma concomitante à análise ética, para reduzir o tempo de início dos estudos e aumentar a competitividade do país em pesquisa clínica.\n" +
      "• Define papéis e responsabilidades de patrocinador, pesquisador, instituição e organizações representativas de pesquisa clínica (CRO).\n" +
      "• Reafirma direitos do participante: consentimento livre e esclarecido, confidencialidade, assistência e indenização.\n" +
      "• Disciplina a remuneração do participante em situações específicas (como fase I e bioequivalência), mantendo como regra o ressarcimento.\n" +
      "• Disciplina o fornecimento pós-estudo do medicamento experimental e as hipóteses de sua interrupção.\n" +
      "• Trata do armazenamento e uso de material biológico e de dados.",
    espelho: [
      { item: "Status de lei e segurança jurídica (antes, resoluções do CNS)", pts: 3 },
      { item: "Sistema Nacional de Ética em Pesquisa: instância nacional + CEPs (credenciamento/coordenação)", pts: 5 },
      { item: "Prazos e possibilidade de análise ética e regulatória concomitantes", pts: 4 },
      { item: "Papéis (patrocinador, pesquisador, CRO) e direitos do participante", pts: 3 },
      { item: "Remuneração em situações específicas e acesso pós-estudo", pts: 5 },
    ],
    ref: "Lei nº 14.874/2024. Releia no texto oficial os artigos sobre prazos, remuneração e fornecimento pós-estudo antes da prova.",
  },
  {
    id: "d-emenda-notificacao",
    area: "Fluxo ético-regulatório",
    tags: [...T.fluxo, ...T.gcp],
    q: "Durante a condução de um ensaio clínico aprovado, quais comunicações o pesquisador deve fazer ao sistema de ética em pesquisa? Diferencie emenda de notificação e explique a exceção relativa à implementação de mudanças.",
    gabarito:
      "• EMENDA: proposta de modificação do protocolo aprovado ou de documentos a ele vinculados. Exemplos: alteração de critérios de inclusão, de procedimentos, de doses, do número de participantes ou do TCLE. A emenda deve ser submetida (pela Plataforma Brasil) e APROVADA antes de ser implementada.\n" +
      "• Exceção: alterações necessárias para eliminar perigo imediato aos participantes podem ser implementadas de imediato e comunicadas em seguida (ICH E6(R2), 4.5.4).\n" +
      "• NOTIFICAÇÃO: comunicação de fatos ou documentos que não alteram o protocolo. Exemplos:\n" +
      "  - relatórios parciais e relatório final;\n" +
      "  - eventos adversos graves e informações de segurança relevantes (conforme as normas e o protocolo);\n" +
      "  - desvios de protocolo relevantes;\n" +
      "  - atualização da Brochura do Investigador;\n" +
      "  - suspensão, interrupção ou encerramento do estudo, com justificativa.\n" +
      "Toda informação nova que afete a decisão do participante exige revisão do TCLE (emenda) e reconsentimento.",
    espelho: [
      { item: "Define emenda e dá exemplos", pts: 5 },
      { item: "Emenda só é implementada após aprovação", pts: 4 },
      { item: "Exceção: eliminar perigo imediato ao participante, com comunicação posterior", pts: 4 },
      { item: "Define notificação e lista exemplos (relatórios, segurança, desvios, encerramento)", pts: 5 },
      { item: "Relaciona informação nova ao reconsentimento", pts: 2 },
    ],
    ref: "Res. CNS 466/2012; Norma Operacional CNS 001/2013; ICH E6(R2), 4.5.",
  },
  {
    id: "d-investigador-patrocinador",
    area: "Fluxo ético-regulatório",
    tags: [...T.gcp],
    q: "Segundo a ICH E6(R2), compare as responsabilidades do investigador e do patrocinador em um ensaio clínico.",
    gabarito:
      "INVESTIGADOR (responsável pela condução do estudo no centro):\n" +
      "• Ter qualificação, tempo, equipe e infraestrutura adequados.\n" +
      "• Supervisionar as tarefas delegadas e manter o registro de delegação; delegar tarefas não transfere a responsabilidade.\n" +
      "• Garantir assistência médica adequada ao participante.\n" +
      "• Comunicar-se com o CEP e conduzir o estudo conforme o protocolo aprovado.\n" +
      "• Gerenciar o produto sob investigação no centro.\n" +
      "• Seguir os procedimentos de randomização e cegamento.\n" +
      "• Obter o consentimento livre e esclarecido.\n" +
      "• Manter registros e documentos-fonte exatos (ALCOA).\n" +
      "• Comunicar eventos adversos graves ao patrocinador imediatamente.\n" +
      "• Enviar relatórios e comunicar a suspensão ou o término do estudo.\n" +
      "PATROCINADOR (responsável por iniciar, gerenciar e/ou financiar o estudo):\n" +
      "• Gestão da qualidade (incluindo a abordagem baseada em risco) e sistemas de garantia e controle de qualidade.\n" +
      "• Desenho do estudo, gestão de dados e análise estatística.\n" +
      "• Seleção de investigadores qualificados.\n" +
      "• Supervisão das tarefas transferidas a CROs (a responsabilidade final permanece com o patrocinador).\n" +
      "• Fornecimento do produto sob investigação, fabricado conforme as Boas Práticas de Fabricação.\n" +
      "• Informações de segurança: avaliação contínua e notificação expedita de reações adversas graves e inesperadas.\n" +
      "• Monitoria e auditoria.\n" +
      "• Seguro e indenização.\n" +
      "• Submissões regulatórias e relatório final.",
    espelho: [
      { item: "Investigador: qualificação, supervisão e delegação sem transferência de responsabilidade", pts: 4 },
      { item: "Investigador: TCLE, protocolo, registros/documentos-fonte, produto no centro", pts: 4 },
      { item: "Investigador: comunicação imediata de EAG ao patrocinador; relatórios ao CEP", pts: 3 },
      { item: "Patrocinador: gestão da qualidade baseada em risco, monitoria, auditoria, supervisão de CRO", pts: 5 },
      { item: "Patrocinador: produto (BPF), segurança/notificações expeditas, submissões regulatórias", pts: 4 },
    ],
    ref: "ICH E6(R2), seções 4 e 5.",
  },
  {
    id: "d-risco-qualidade",
    area: "Fluxo ético-regulatório",
    tags: [...T.gcp, "gestao da qualidade"],
    q: "Explique a abordagem de gestão da qualidade baseada em risco introduzida pela ICH E6(R2) e de que maneira ela modifica a monitoria dos ensaios clínicos.",
    gabarito:
      "A ICH E6(R2) (2016) determinou que o patrocinador implemente um sistema de gestão da qualidade em todas as etapas do estudo, com foco nas atividades essenciais para a proteção dos participantes e para a confiabilidade dos resultados. As etapas da gestão de risco são:\n" +
      "1) identificação dos processos e dados críticos;\n" +
      "2) identificação dos riscos;\n" +
      "3) avaliação dos riscos (probabilidade, detectabilidade e impacto);\n" +
      "4) controle dos riscos, incluindo limites de tolerância de qualidade;\n" +
      "5) comunicação dos riscos;\n" +
      "6) revisão dos riscos;\n" +
      "7) relato no relatório do estudo.\n" +
      "Efeito na monitoria: em vez de verificar 100% dos dados in loco, o patrocinador adota uma estratégia de MONITORIA BASEADA EM RISCO. Ela combina monitoria presencial e monitoria CENTRALIZADA (análise remota dos dados acumulados para identificar centros ou dados atípicos, tendências e erros sistemáticos), com intensidade proporcional ao risco, documentada em um plano de monitoria. A verificação de dados-fonte (SDV) passa a ser direcionada aos dados críticos (ex.: elegibilidade, consentimento, desfecho primário e eventos adversos graves).",
    espelho: [
      { item: "Conceito: sistema de qualidade focado no que é crítico para a segurança e a confiabilidade", pts: 4 },
      { item: "Etapas: identificação de dados/processos críticos e de riscos, avaliação, controle, comunicação, revisão e relato", pts: 6 },
      { item: "Monitoria baseada em risco: presencial + centralizada, proporcional ao risco, plano de monitoria", pts: 6 },
      { item: "SDV direcionado aos dados críticos (exemplos)", pts: 4 },
    ],
    ref: "ICH E6(R2), seções 5.0 e 5.18.",
  },
  {
    id: "d-eag-caso",
    area: "Fluxo ético-regulatório",
    tags: [...T.gcp, "evento adverso grave"],
    q: "Caso clínico: paciente em uso de uma droga experimental em estudo de fase II apresenta neutropenia febril e é internado. Classifique o evento e descreva as condutas da equipe do centro de pesquisa.",
    gabarito:
      "Classificação:\n" +
      "• É um EVENTO ADVERSO GRAVE, pois resultou em hospitalização. Em ensaios clínicos, EA é qualquer ocorrência médica desfavorável, independentemente de relação causal com o produto.\n" +
      "• A intensidade deve ser graduada pelo CTCAE; a neutropenia febril é, no mínimo, grau 3.\n" +
      "• Gravidade (critério regulatório) é diferente de intensidade.\n" +
      "Condutas:\n" +
      "1) Prioridade é a assistência imediata e integral ao participante: avaliação, culturas e antibioticoterapia empírica conforme o protocolo institucional.\n" +
      "2) Comunicar o EAG ao patrocinador imediatamente, no prazo definido pelo protocolo (em geral, até 24 horas do conhecimento), com relatório inicial seguido de relatórios de acompanhamento até a resolução.\n" +
      "3) Avaliar a relação causal (investigador) e verificar se o evento é esperado (Brochura do Investigador). O patrocinador avalia a necessidade de notificação expedita (SUSAR) às autoridades e aos comitês.\n" +
      "4) Registrar nos documentos-fonte (prontuário) e na ficha clínica (CRF), de forma consistente.\n" +
      "5) Aplicar as regras do protocolo para suspensão ou redução de dose do produto e verificar os critérios de descontinuação.\n" +
      "6) Notificar o CEP conforme as normas vigentes e o protocolo.\n" +
      "7) Acompanhar até a resolução ou estabilização e manter o participante informado.",
    espelho: [
      { item: "Classifica como EAG (hospitalização) e distingue gravidade de intensidade (CTCAE)", pts: 5 },
      { item: "Assistência imediata ao participante como prioridade", pts: 3 },
      { item: "Comunicação imediata ao patrocinador e relatórios de seguimento", pts: 4 },
      { item: "Causalidade, expectativa (BI) e SUSAR", pts: 4 },
      { item: "Registro em fonte/CRF, regras de dose do protocolo, notificação ao CEP, seguimento", pts: 4 },
    ],
    ref: "ICH E6(R2), 4.11 e 5.17; ICH E2A; CTCAE.",
  },
  {
    id: "d-documentacao",
    area: "Fluxo ético-regulatório",
    tags: [...T.gcp, "documentos essenciais", "desvio de protocolo"],
    q: "Conceitue documento-fonte e explique os princípios que devem orientar o registro de dados em pesquisa clínica. Em seguida, descreva como o centro deve manejar um desvio de protocolo.",
    gabarito:
      "• Documento-fonte: registro original (ou cópia certificada) onde o dado clínico é registrado pela primeira vez, como prontuário, laudos, prescrições, diários do participante e registros de farmácia. Dele se transcrevem os dados para a ficha clínica (CRF/eCRF), e é a base da verificação pela monitoria, auditoria e inspeção.\n" +
      "• Princípios ALCOA: o dado deve ser Atribuível (quem registrou e quando), Legível, Contemporâneo (registrado no momento), Original e Exato. A extensão ALCOA+ acrescenta completo, consistente, duradouro e disponível. Correções não devem obscurecer o registro original: são datadas, assinadas e justificadas, com trilha de auditoria nos sistemas eletrônicos. Vale a máxima: \"o que não foi documentado não foi feito\".\n" +
      "• Desvio de protocolo: qualquer não cumprimento do protocolo aprovado (ex.: visita fora da janela, exame não realizado, erro de dose). O centro deve:\n" +
      "  1) garantir a segurança do participante;\n" +
      "  2) documentar o desvio e sua causa;\n" +
      "  3) comunicar o patrocinador/monitor;\n" +
      "  4) notificar o CEP quando o desvio for relevante (impacto na segurança, nos direitos ou na integridade dos dados), conforme as normas;\n" +
      "  5) analisar a causa e implementar ações corretivas e preventivas (ex.: retreinamento da equipe).",
    espelho: [
      { item: "Conceito de documento-fonte e exemplos; relação com a CRF", pts: 5 },
      { item: "ALCOA explicado; regras de correção e rastreabilidade", pts: 6 },
      { item: "Conceito de desvio de protocolo com exemplos", pts: 3 },
      { item: "Manejo: segurança, documentação, comunicação ao patrocinador/CEP, ações corretivas e preventivas", pts: 6 },
    ],
    ref: "ICH E6(R2), 1.51–1.52, 4.9 e 4.5.",
  },
  {
    id: "d-produto-investigacional",
    area: "Fluxo ético-regulatório",
    tags: [...T.gcp, "produto sob investigacao", "farmacia"],
    q: "Descreva o gerenciamento do produto sob investigação no centro de pesquisa, desde o recebimento até o destino final, em um ensaio clínico oncológico duplo-cego.",
    gabarito:
      "A responsabilidade pelo produto no centro é do investigador/instituição, que pode delegá-la a um farmacêutico ou a outra pessoa qualificada. O ciclo envolve:\n" +
      "1) Recebimento: conferência da remessa (quantidade, lote, validade, integridade) e das condições de transporte (registro de temperatura), com documentação de recebimento.\n" +
      "2) Armazenamento: em local seguro e de acesso restrito, nas condições especificadas, com monitoramento e registro contínuo de temperatura. Excursões de temperatura são comunicadas ao patrocinador, e o produto fica em quarentena até liberação.\n" +
      "3) Dispensação: somente a participantes incluídos, conforme o protocolo e o sistema de randomização (ex.: IWRS), preservando o cegamento. A quebra de cegamento só ocorre conforme procedimento definido (ex.: emergência) e é documentada.\n" +
      "4) Preparo e administração: por profissionais capacitados, com as normas de segurança para antineoplásicos (cabine de segurança biológica, EPIs) e orientação ao participante quanto ao uso e à devolução.\n" +
      "5) Contabilidade (accountability): registros de inventário, dispensação a cada participante, adesão, devoluções e sobras, que permitam reconciliar todas as unidades.\n" +
      "6) Destino final: devolução ao patrocinador ou destruição autorizada e documentada.",
    espelho: [
      { item: "Responsabilidade do investigador e delegação a pessoa qualificada", pts: 3 },
      { item: "Recebimento e armazenamento com controle de temperatura e manejo de excursões", pts: 5 },
      { item: "Dispensação conforme randomização, preservando o cegamento", pts: 4 },
      { item: "Segurança no preparo de antineoplásicos e orientação ao participante", pts: 3 },
      { item: "Contabilidade/reconciliação e devolução ou destruição documentada", pts: 5 },
    ],
    ref: "ICH E6(R2), 4.6 e 5.13–5.14.",
  },
  {
    id: "d-enfermeiro-pesquisa",
    area: "Fluxo ético-regulatório",
    tags: [...T.gcp, "coordenacao de estudos", "coordenador de estudos"],
    q: "Descreva as atribuições do enfermeiro que atua como coordenador de estudos clínicos (study coordinator) na condução de um ensaio em oncologia.",
    gabarito:
      "O coordenador atua sob supervisão do investigador principal e conforme o log de delegação. Suas atribuições incluem:\n" +
      "• Fase de implantação: preparo dos documentos regulatórios e da submissão ao CEP; participação na visita de seleção e de iniciação; organização do arquivo do investigador (ISF); treinamento da equipe.\n" +
      "• Recrutamento e triagem: identificação de pacientes potencialmente elegíveis e verificação dos critérios de elegibilidade, junto ao investigador.\n" +
      "• Processo de consentimento, quando delegado: explicação em linguagem acessível, verificação da compreensão e documentação.\n" +
      "• Visitas do estudo: agendamento conforme as janelas do protocolo; coleta, processamento e envio de amostras; aferição de dados clínicos; orientação ao participante sobre o tratamento e a autoavaliação de toxicidades.\n" +
      "• Segurança: identificação, registro e notificação de eventos adversos, incluindo a comunicação imediata de EAGs; manejo de toxicidades junto à equipe médica.\n" +
      "• Dados: registro em documentos-fonte segundo os princípios ALCOA, preenchimento da eCRF e resolução de queries.\n" +
      "• Interface com o monitor, o patrocinador, a farmácia, o laboratório e o CEP: emendas, relatórios e notificações.\n" +
      "• Controle de desvios de protocolo e do produto sob investigação, quando delegado.\n" +
      "• Educação e acolhimento do participante e da família, favorecendo a adesão e a retenção.\n" +
      "Sempre dentro das competências legais da enfermagem e das BPC.",
    espelho: [
      { item: "Atuação sob supervisão do investigador e conforme delegação", pts: 3 },
      { item: "Implantação do estudo (regulatório, iniciação, ISF, treinamento)", pts: 3 },
      { item: "Recrutamento, elegibilidade e processo de consentimento", pts: 4 },
      { item: "Visitas, amostras e segurança (EA/EAG)", pts: 5 },
      { item: "Dados (ALCOA, eCRF, queries) e interface com monitor/CEP", pts: 5 },
    ],
    ref: "ICH E6(R2), seção 4; Lei nº 7.498/1986.",
  },

  // ---------------- 3. TIPOS DE ESTUDOS CLÍNICOS ----------------
  {
    id: "d-observacional-experimental",
    area: "Tipos de estudos clínicos",
    tags: [...T.tipos],
    q: "Diferencie estudos observacionais e experimentais. Descreva os estudos de coorte e de caso-controle, apontando vantagens, limitações e a medida de associação de cada um, com exemplos em oncologia.",
    gabarito:
      "• Experimental (ensaio clínico): o pesquisador ATRIBUI a intervenção aos participantes, idealmente por randomização. O ensaio clínico randomizado e controlado é o padrão-ouro para avaliar eficácia, por minimizar vieses e confundimento.\n" +
      "• Observacional: o pesquisador apenas observa exposições e desfechos que ocorrem naturalmente. Pode ser descritivo (relato ou série de casos, transversal) ou analítico (coorte, caso-controle).\n" +
      "• Coorte: parte da EXPOSIÇÃO e acompanha expostos e não expostos ao longo do tempo até o desfecho. Pode ser prospectiva ou retrospectiva. Mede incidência e RISCO RELATIVO.\n" +
      "  - Vantagens: sequência temporal clara; permite estudar vários desfechos.\n" +
      "  - Limitações: custo e tempo; perdas de seguimento; inadequada para doenças raras.\n" +
      "  - Exemplo: acompanhar fumantes e não fumantes para avaliar a incidência de câncer de pulmão.\n" +
      "• Caso-controle: parte do DESFECHO (casos com a doença e controles sem ela) e investiga exposições passadas. Mede o ODDS RATIO.\n" +
      "  - Vantagens: rápido, barato, ideal para doenças raras.\n" +
      "  - Limitações: viés de memória e de seleção dos controles; não mede incidência.\n" +
      "  - Exemplo: comparar a exposição prévia ao HPV entre mulheres com e sem câncer do colo do útero.",
    espelho: [
      { item: "Diferença: atribuição da intervenção pelo pesquisador; ECR como padrão-ouro", pts: 5 },
      { item: "Coorte: direção exposição→desfecho, risco relativo, vantagens/limitações", pts: 5 },
      { item: "Caso-controle: direção desfecho→exposição, odds ratio, vantagens/limitações", pts: 5 },
      { item: "Exemplos pertinentes em oncologia", pts: 5 },
    ],
    ref: "Umscheid et al., 2011.",
  },
  {
    id: "d-fases",
    area: "Tipos de estudos clínicos",
    tags: [...T.tipos, "fase i"],
    q: "Descreva as fases do desenvolvimento clínico de um novo medicamento antineoplásico (fases I a IV), indicando objetivos, população, desenho típico e desfechos, com as particularidades da oncologia.",
    gabarito:
      "• FASE I (primeira em humanos):\n" +
      "  - Objetivos: segurança, tolerabilidade, farmacocinética e farmacodinâmica, definição da dose máxima tolerada ou da dose recomendada para a fase II.\n" +
      "  - Em oncologia, é realizada em PACIENTES com câncer (geralmente refratários), e não em voluntários sadios, pela toxicidade esperada.\n" +
      "  - Escalonamento de dose (ex.: 3+3 ou desenhos baseados em modelos); desfecho principal: toxicidade limitante de dose (DLT).\n" +
      "  - Pode incluir coortes de expansão.\n" +
      "• FASE II:\n" +
      "  - Objetivo: avaliar a atividade antitumoral e a eficácia preliminar e continuar a avaliação de segurança.\n" +
      "  - Dezenas a centenas de pacientes, com braço único ou randomizada.\n" +
      "  - Desfechos: taxa de resposta objetiva (RECIST 1.1), sobrevida livre de progressão.\n" +
      "• FASE III:\n" +
      "  - Objetivo: confirmar a eficácia comparando com o tratamento padrão (ou placebo, quando aceitável).\n" +
      "  - Randomizada e multicêntrica, com centenas a milhares de pacientes, frequentemente cega.\n" +
      "  - Desfechos: sobrevida global (padrão-ouro), sobrevida livre de progressão e qualidade de vida. Fundamenta o registro sanitário.\n" +
      "• FASE IV:\n" +
      "  - Após o registro: farmacovigilância, eventos raros e tardios, novas populações e efetividade no mundo real.\n" +
      "• Também pode haver a fase 0 (microdoses, exploratória).",
    espelho: [
      { item: "Fase I: objetivos de segurança/dose, pacientes oncológicos, escalonamento e DLT", pts: 6 },
      { item: "Fase II: atividade/eficácia preliminar, desfechos como ORR/SLP", pts: 4 },
      { item: "Fase III: comparação com padrão, randomizada, SG/SLP, base para registro", pts: 6 },
      { item: "Fase IV: pós-comercialização e farmacovigilância", pts: 4 },
    ],
    ref: "Umscheid et al., 2011; Verweij et al., 2019.",
  },
  {
    id: "d-randomizacao-cegamento",
    area: "Tipos de estudos clínicos",
    tags: [...T.tipos],
    q: "Explique randomização, sigilo da alocação e cegamento, indicando os vieses que cada um previne. Em seguida, discuta como lidar com a impossibilidade de cegamento em ensaios oncológicos.",
    gabarito:
      "• RANDOMIZAÇÃO: alocação dos participantes aos grupos por um processo aleatório (simples, em blocos ou estratificada).\n" +
      "  - Distribui igualmente os fatores prognósticos conhecidos e desconhecidos.\n" +
      "  - Previne o viés de seleção e o confundimento.\n" +
      "• SIGILO DA ALOCAÇÃO (allocation concealment): impede que quem inclui o participante conheça ou preveja o grupo seguinte (ex.: sistema central/IWRS).\n" +
      "  - Protege a randomização ANTES da alocação.\n" +
      "  - Previne a manipulação da inclusão (viés de seleção).\n" +
      "• CEGAMENTO (mascaramento): ocultação do grupo após a alocação. Pode ser simples (participante), duplo (participante e investigador/avaliador) ou triplo (inclui quem analisa os dados).\n" +
      "  - Previne vieses de desempenho (cuidados diferentes), de aferição/avaliação do desfecho e de relato.\n" +
      "• Em oncologia, o cegamento muitas vezes é inviável: vias e esquemas diferentes, toxicidades características, procedimentos cirúrgicos ou radioterapia. Estratégias:\n" +
      "  - estudo aberto (open-label) com avaliação do desfecho por comitê independente cego, como a revisão radiológica central independente cega (BICR) para a sobrevida livre de progressão;\n" +
      "  - preferência por desfechos objetivos, como a sobrevida global;\n" +
      "  - critérios padronizados (RECIST);\n" +
      "  - técnica double-dummy quando as formas de administração diferem.",
    espelho: [
      { item: "Randomização e vieses que previne (seleção, confundimento)", pts: 5 },
      { item: "Sigilo da alocação e diferença em relação ao cegamento", pts: 5 },
      { item: "Cegamento: tipos e vieses que previne (desempenho, aferição)", pts: 5 },
      { item: "Estratégias quando não há cegamento (BICR, desfechos objetivos, double-dummy)", pts: 5 },
    ],
    ref: "Umscheid et al., 2011.",
  },
  {
    id: "d-itt-nao-inferioridade",
    area: "Tipos de estudos clínicos",
    tags: [...T.tipos, "intencao de tratar"],
    q: "Diferencie análise por intenção de tratar e análise por protocolo. Explique também os ensaios de superioridade e de não inferioridade e qual análise é recomendada em cada caso.",
    gabarito:
      "• Intenção de tratar (ITT): analisa todos os participantes randomizados no grupo para o qual foram alocados, independentemente de adesão, desistência ou troca de tratamento.\n" +
      "  - Preserva os benefícios da randomização e reflete a efetividade em condições reais.\n" +
      "  - Tende a ser conservadora, aproximando os resultados dos grupos.\n" +
      "• Por protocolo (PP): analisa apenas os participantes que cumpriram o protocolo (aderentes, sem desvios maiores).\n" +
      "  - Estima o efeito sob uso ideal, mas pode introduzir viés, porque os grupos deixam de ser comparáveis.\n" +
      "• Superioridade: testa se a nova intervenção é melhor que o controle. A análise primária é por ITT, que é conservadora contra o falso positivo.\n" +
      "• Não inferioridade: testa se a nova intervenção não é pior que o padrão além de uma MARGEM pré-especificada, clinicamente aceitável. Justifica-se quando a nova opção traz outras vantagens (menos toxicidade, via oral, menor custo).\n" +
      "  - Como a ITT pode favorecer falsamente a conclusão de não inferioridade, recomenda-se apresentar as análises ITT e PP, e a conclusão deve ser consistente em ambas.\n" +
      "• Equivalência: demonstra que a diferença está dentro de margens nos dois sentidos.",
    espelho: [
      { item: "Define ITT e sua vantagem (preserva randomização)", pts: 5 },
      { item: "Define PP e seu risco de viés", pts: 4 },
      { item: "Superioridade com análise ITT primária", pts: 4 },
      { item: "Não inferioridade: margem predefinida, justificativa, ITT + PP", pts: 7 },
    ],
    ref: "Umscheid et al., 2011.",
  },
  {
    id: "d-desfechos-onco",
    area: "Tipos de estudos clínicos",
    tags: [...T.tipos, "desfechos em oncologia", "recist"],
    q: "Discuta os principais desfechos utilizados em ensaios clínicos oncológicos (sobrevida global, sobrevida livre de progressão e taxa de resposta objetiva), com vantagens e limitações, e explique os critérios de resposta do RECIST 1.1.",
    gabarito:
      "• Sobrevida global (SG/OS): tempo da randomização até o óbito por qualquer causa.\n" +
      "  - Padrão-ouro: objetivo, clinicamente relevante e sem viés de aferição.\n" +
      "  - Limitações: exige seguimento longo e grande amostra; sofre influência de tratamentos posteriores e de cruzamento (crossover).\n" +
      "• Sobrevida livre de progressão (SLP/PFS): tempo até a progressão da doença ou o óbito.\n" +
      "  - Vantagens: resultado mais precoce, sem interferência das terapias subsequentes.\n" +
      "  - Limitações: depende da frequência de avaliação por imagem e da interpretação (sujeita a viés em estudos abertos, mitigado por revisão central cega); nem sempre se traduz em ganho de SG ou de qualidade de vida (desfecho substituto).\n" +
      "• Taxa de resposta objetiva (TRO/ORR): proporção de pacientes com resposta completa ou parcial.\n" +
      "  - Útil em fase II e em estudos de braço único; mede atividade antitumoral.\n" +
      "  - Não mede durabilidade nem benefício clínico isoladamente; deve ser acompanhada da duração da resposta.\n" +
      "• RECIST 1.1 (tumores sólidos), sobre a soma dos diâmetros das lesões-alvo:\n" +
      "  - resposta completa: desaparecimento das lesões-alvo;\n" +
      "  - resposta parcial: redução ≥ 30%;\n" +
      "  - progressão: aumento ≥ 20% (e ≥ 5 mm em valor absoluto) em relação ao menor valor registrado, ou surgimento de lesão nova;\n" +
      "  - doença estável: nenhuma das situações anteriores.\n" +
      "• Desfechos centrados no paciente, como a qualidade de vida, complementam a avaliação.",
    espelho: [
      { item: "SG: definição, padrão-ouro, limitações", pts: 5 },
      { item: "SLP: definição, vantagens, limitações (substituto, viés de avaliação)", pts: 5 },
      { item: "TRO: definição e papel em fase II/braço único", pts: 4 },
      { item: "RECIST 1.1 com os pontos de corte corretos", pts: 6 },
    ],
    ref: "Verweij et al., 2019; RECIST 1.1.",
  },
  {
    id: "d-protocolos-mestres",
    area: "Tipos de estudos clínicos",
    tags: [...T.tipos, "umbrella", "plataforma", "adaptativ"],
    q: "Com o avanço da medicina de precisão, surgiram desenhos inovadores de ensaios clínicos em oncologia. Conceitue e exemplifique os estudos basket, umbrella e plataforma, e os desenhos adaptativos, apontando vantagens e desafios.",
    gabarito:
      "Protocolos mestres (master protocols) avaliam múltiplas hipóteses em uma estrutura única, com infraestrutura, triagem molecular e procedimentos compartilhados.\n" +
      "• BASKET (cesta): UM medicamento dirigido a UM alvo molecular, testado em VÁRIOS tipos de tumor que compartilham a alteração. Ex.: um inibidor dirigido a uma fusão gênica testado em tumores de diferentes órgãos. Útil para alterações raras e para aprovações \"agnósticas\" ao tecido.\n" +
      "• UMBRELLA (guarda-chuva): UM tipo de tumor, VÁRIOS braços com medicamentos diferentes, alocados conforme a alteração molecular de cada paciente. Ex.: câncer de pulmão com braços para diferentes mutações.\n" +
      "• PLATAFORMA: estrutura perene em que braços de tratamento entram e saem ao longo do tempo, conforme análises interinas, frequentemente com grupo controle compartilhado.\n" +
      "• ADAPTATIVO: permite modificações PRÉ-PLANEJADAS com base nos dados acumulados (ex.: randomização adaptativa, abandono de braços ineficazes, reestimativa da amostra, transição fase II/III), mantendo a validade estatística.\n" +
      "Vantagens: eficiência, menor número de pacientes e de tempo, acesso a terapias-alvo, aproveitamento da triagem molecular.\n" +
      "Desafios: complexidade estatística e operacional; necessidade de triagem molecular de alta qualidade; subgrupos pequenos (amostras reduzidas por histologia no basket); controle do erro tipo I; gestão de dados; consentimento em múltiplas etapas; aceitação regulatória.",
    espelho: [
      { item: "Conceito de protocolo mestre e contexto da medicina de precisão", pts: 3 },
      { item: "Basket corretamente conceituado e exemplificado", pts: 4 },
      { item: "Umbrella corretamente conceituado e exemplificado", pts: 4 },
      { item: "Plataforma e adaptativo (modificações pré-planejadas)", pts: 5 },
      { item: "Vantagens e desafios", pts: 4 },
    ],
    ref: "Verweij J et al. Innovation in oncology clinical trial design. Cancer Treat Rev. 2019;74:15-20.",
  },
  {
    id: "d-escalonamento-dose",
    area: "Tipos de estudos clínicos",
    tags: [...T.tipos, "fase i", "fases"],
    q: "Explique o desenho de escalonamento de dose \"3+3\" em estudos de fase I em oncologia, suas limitações, e as alternativas citadas na literatura recente.",
    gabarito:
      "• 3+3: coortes de 3 pacientes recebem níveis crescentes de dose.\n" +
      "  - Se 0/3 apresentam toxicidade limitante de dose (DLT) no período de avaliação, escalona-se para o próximo nível.\n" +
      "  - Se 1/3 apresenta DLT, amplia-se o nível para 6 pacientes; se ≤ 1/6, escalona-se.\n" +
      "  - Se ≥ 2 pacientes (em 3 ou 6) apresentam DLT, a dose foi excedida, e a dose máxima tolerada (DMT) é o nível anterior.\n" +
      "• Limitações:\n" +
      "  - muitos pacientes tratados em doses subterapêuticas;\n" +
      "  - imprecisão na estimativa da DMT;\n" +
      "  - baseia-se apenas na toxicidade do primeiro ciclo;\n" +
      "  - pouco adequado a terapias-alvo e imunoterapias, cuja dose ótima pode estar abaixo da DMT e cuja toxicidade pode ser tardia.\n" +
      "• Alternativas:\n" +
      "  - desenhos baseados em modelos (ex.: método de reavaliação contínua — CRM) e desenhos com intervalos, como o BOIN, que usam todos os dados acumulados;\n" +
      "  - titulação acelerada;\n" +
      "  - coortes de expansão para avaliar atividade e farmacodinâmica;\n" +
      "  - desenhos fase I/II \"sem costura\" (seamless);\n" +
      "  - escolha da dose biológica ótima com base em farmacocinética, farmacodinâmica e eficácia, e não apenas na DMT.",
    espelho: [
      { item: "Regras do 3+3 corretas (0/3, 1/3→6, ≥2 DLT, DMT = nível anterior)", pts: 8 },
      { item: "Limitações (doses subterapêuticas, imprecisão, terapias-alvo/imunoterapia)", pts: 6 },
      { item: "Alternativas (modelos, BOIN/CRM, expansão, seamless, dose ótima)", pts: 6 },
    ],
    ref: "Verweij et al., 2019.",
  },

  // ---------------- 4. TCLE ----------------
  {
    id: "d-tcle-conteudo",
    area: "Termo de Consentimento Livre e Esclarecido",
    tags: [...T.tcle],
    q: "O consentimento livre e esclarecido deve ser entendido como um processo, e não apenas como a assinatura de um documento. Discorra sobre essa afirmação e liste os elementos obrigatórios do TCLE segundo a Resolução CNS nº 466/2012.",
    gabarito:
      "Processo: o consentimento começa no convite e inclui:\n" +
      "• esclarecimento em linguagem clara e acessível, em ambiente e momento adequados, sem coerção ou influência indevida;\n" +
      "• tempo para reflexão e para consultar familiares ou outras pessoas;\n" +
      "• oportunidade de tirar dúvidas e verificação da compreensão;\n" +
      "• obtenção da concordância ANTES de qualquer procedimento do estudo, inclusive da triagem.\n" +
      "O processo continua durante toda a pesquisa: novas informações relevantes levam a reconsentimento, e o participante pode retirar o consentimento a qualquer momento.\n" +
      "Elementos do TCLE (Res. 466/2012):\n" +
      "• justificativa, objetivos e procedimentos, com detalhamento dos métodos e indicação das alternativas;\n" +
      "• possíveis desconfortos e riscos e benefícios esperados;\n" +
      "• forma de acompanhamento e assistência e seus responsáveis;\n" +
      "• garantia de plena liberdade de recusar ou retirar o consentimento, em qualquer fase, sem penalização;\n" +
      "• garantia de sigilo e privacidade;\n" +
      "• formas de ressarcimento das despesas;\n" +
      "• garantia de indenização diante de eventuais danos;\n" +
      "• explicitação de que o participante recebe uma via do termo;\n" +
      "• contatos do pesquisador e do CEP.\n" +
      "O termo é elaborado em duas vias, rubricadas em todas as páginas e assinadas pelo participante (ou representante legal) e pelo pesquisador, e uma via fica com o participante. É vedada qualquer cláusula que afaste a responsabilidade do pesquisador ou implique renúncia a direitos.",
    espelho: [
      { item: "Consentimento como processo: linguagem, tempo, dúvidas, compreensão, antes de qualquer procedimento", pts: 6 },
      { item: "Continuidade: reconsentimento e retirada a qualquer momento", pts: 3 },
      { item: "Elementos obrigatórios do TCLE (pelo menos 6 corretos)", pts: 7 },
      { item: "Formalidades: duas vias, rubricas, via do participante, vedação de cláusulas de renúncia", pts: 4 },
    ],
    ref: "Res. CNS 466/2012, item IV; ICH E6(R2), 4.8.",
  },
  {
    id: "d-tcle-especiais",
    area: "Termo de Consentimento Livre e Esclarecido",
    tags: [...T.tcle, "dispensa do tcle"],
    q: "Descreva como deve ser conduzido o processo de consentimento nas seguintes situações: (a) participante adolescente; (b) participante que não sabe ler; (c) situação de emergência em que o paciente não pode consentir; (d) dispensa do TCLE.",
    gabarito:
      "(a) Adolescente (ou criança e legalmente incapaz):\n" +
      "• TCLE assinado pelo representante legal.\n" +
      "• TERMO DE ASSENTIMENTO do próprio participante, em linguagem adequada à idade e à capacidade de compreensão, respeitando sua vontade.\n" +
      "• Ao atingir a maioridade durante o estudo, o participante deve dar o próprio consentimento.\n" +
      "(b) Participante que não sabe ler (ICH E6(R2), 4.8.9):\n" +
      "• Uma TESTEMUNHA IMPARCIAL acompanha todo o processo de esclarecimento.\n" +
      "• O participante dá o consentimento verbal e, se possível, assina ou registra a impressão digital.\n" +
      "• A testemunha assina e data o termo, atestando que as informações foram explicadas e aparentemente compreendidas e que o consentimento foi livre.\n" +
      "(c) Emergência:\n" +
      "• Quando o consentimento prévio não é possível, a inclusão só ocorre se o protocolo, aprovado pelo CEP, previr esse procedimento, com o consentimento do representante legal, se presente.\n" +
      "• O consentimento do participante (ou do representante) é obtido assim que possível, para a continuidade no estudo.\n" +
      "(d) Dispensa do TCLE:\n" +
      "• É excepcional e deve ser solicitada pelo pesquisador com justificativa, por exemplo em estudos com dados ou amostras retrospectivas em que o contato é impossível ou traria riscos.\n" +
      "• Só vale após aprovação do CEP. Confidencialidade e privacidade continuam garantidas.",
    espelho: [
      { item: "(a) TCLE do representante + assentimento; consentimento ao atingir a maioridade", pts: 5 },
      { item: "(b) Testemunha imparcial presente em todo o processo; assinatura/digital e assinatura da testemunha", pts: 5 },
      { item: "(c) Previsão no protocolo aprovado; consentimento assim que possível", pts: 5 },
      { item: "(d) Dispensa excepcional, justificada e aprovada pelo CEP", pts: 5 },
    ],
    ref: "Res. CNS 466/2012, item IV; ICH E6(R2), 4.8.",
  },
  {
    id: "d-reconsentimento-retirada",
    area: "Termo de Consentimento Livre e Esclarecido",
    tags: [...T.tcle, "reconsentimento"],
    q: "Caso: durante um ensaio clínico, o patrocinador identifica um novo risco relevante da droga experimental, e, na mesma semana, uma participante comunica que deseja sair do estudo. Descreva as condutas da equipe em cada situação.",
    gabarito:
      "NOVO RISCO:\n" +
      "1) Atualizar o TCLE (e a Brochura do Investigador) e submeter a emenda ao CEP; a nova versão é usada após aprovação.\n" +
      "2) Se houver risco imediato à segurança, adotar de pronto as medidas de proteção previstas e comunicar depois.\n" +
      "3) Informar PRONTAMENTE os participantes em tratamento sobre a nova informação, que pode afetar sua vontade de continuar.\n" +
      "4) Obter o RECONSENTIMENTO com a versão atualizada, documentando o processo.\n" +
      "5) Respeitar quem decidir sair após a nova informação.\n" +
      "RETIRADA DA PARTICIPANTE:\n" +
      "• É um direito exercido a qualquer momento, sem necessidade de justificativa e sem prejuízo à assistência, que segue com a melhor terapia disponível.\n" +
      "• A equipe deve:\n" +
      "  - esclarecer a diferença entre interromper o tratamento do estudo e retirar o consentimento para todo o acompanhamento;\n" +
      "  - oferecer, se ela aceitar, visitas de segurança e seguimento de eventos adversos em curso;\n" +
      "  - documentar a data e as circunstâncias da retirada;\n" +
      "  - recolher o produto sob investigação;\n" +
      "  - informar o patrocinador.\n" +
      "• Os dados coletados até a retirada são tratados conforme o TCLE e as normas aplicáveis. Novas coletas não ocorrem sem consentimento. Amostras armazenadas seguem a vontade da participante e as regras do biorrepositório (ex.: pedido de descarte).",
    espelho: [
      { item: "Novo risco: atualização do TCLE/BI e emenda ao CEP", pts: 4 },
      { item: "Informar prontamente os participantes e obter reconsentimento documentado", pts: 6 },
      { item: "Retirada como direito sem justificativa e sem prejuízo assistencial", pts: 4 },
      { item: "Condutas: diferenciar interrupção do tratamento x retirada total, segurança, documentação, produto", pts: 4 },
      { item: "Destino dos dados e amostras conforme TCLE e normas", pts: 2 },
    ],
    ref: "ICH E6(R2), 4.8.2 e 4.3.4; Res. CNS 466/2012; Res. CNS 441/2011.",
  },
  {
    id: "d-biobanco",
    area: "Termo de Consentimento Livre e Esclarecido",
    tags: [...T.tcle, "biorrepositorio", "material biologico"],
    q: "Em um ensaio clínico oncológico, o protocolo prevê a coleta de tecido tumoral e sangue para análises genômicas e o armazenamento das amostras para pesquisas futuras. Quais cuidados éticos e de consentimento devem ser observados?",
    gabarito:
      "• Consentimento específico e informado para coleta, armazenamento e uso do material biológico humano, separado ou destacado do consentimento para o tratamento. O participante pode aceitar o estudo principal e recusar o armazenamento.\n" +
      "• Distinção entre BIORREPOSITÓRIO (coleção vinculada a um projeto específico, por tempo determinado) e BIOBANCO (coleção institucional organizada para uso em pesquisas futuras), conforme a Res. CNS 441/2011.\n" +
      "• O TCLE deve informar:\n" +
      "  - finalidade das análises, inclusive genéticas;\n" +
      "  - local e tempo de armazenamento;\n" +
      "  - formas de codificação e proteção da confidencialidade dos dados genômicos;\n" +
      "  - possibilidade de envio ao exterior, quando houver, com as garantias exigidas;\n" +
      "  - direito de retirar o consentimento e solicitar o descarte das amostras;\n" +
      "  - política de devolução de resultados relevantes para a saúde (inclusive achados incidentais e aconselhamento genético);\n" +
      "  - ausência de comercialização do material.\n" +
      "• Uso futuro: cada nova pesquisa precisa de aprovação ética e, em regra, de novo consentimento, ou de dispensa justificada aprovada pelo CEP. Também há a possibilidade de o participante optar por ser consultado a cada nova pesquisa.\n" +
      "• A Lei 14.874/2024 também disciplina o armazenamento e o uso de material biológico e dados.",
    espelho: [
      { item: "Consentimento específico e separado para armazenamento; possibilidade de recusa parcial", pts: 5 },
      { item: "Diferença biobanco x biorrepositório (Res. 441/2011)", pts: 3 },
      { item: "Informações no TCLE: finalidade genômica, tempo/local, confidencialidade, envio ao exterior", pts: 5 },
      { item: "Retirada e descarte; devolução de resultados/achados incidentais", pts: 4 },
      { item: "Uso futuro: nova aprovação ética e novo consentimento (ou dispensa aprovada)", pts: 3 },
    ],
    ref: "Res. CNS 441/2011; Res. CNS 466/2012; Lei nº 14.874/2024.",
  },

  // ---------------- QUESTÕES COM TEXTO EM INGLÊS (formato da prova) ----------------
  {
    id: "d-en-fase3",
    area: "Inglês — leitura de artigo",
    english: true,
    tags: [...T.tipos, "ingles"],
    context:
      "\"In this open-label, randomized, phase 3 trial, 640 patients with previously untreated advanced gastric cancer were assigned in a 1:1 ratio to receive Drug X plus standard chemotherapy or standard chemotherapy alone. Randomization was stratified by performance status and geographic region. The primary end point was progression-free survival, as assessed by blinded independent central review. Median progression-free survival was 8.1 months in the Drug X group and 6.0 months in the control group (hazard ratio for progression or death, 0.72; 95% confidence interval, 0.60 to 0.86; P<0.001). Overall survival data were immature at the time of this analysis. Grade 3 or higher adverse events occurred in 45% of patients in the Drug X group and in 38% of those in the control group.\" (Fictional abstract written for practice.)",
    q: "Based on the abstract, describe the study design, the primary end point and how it was assessed, interpret the main result, and point out two limitations. (Responda em português.)",
    gabarito:
      "• Desenho: ensaio clínico de fase 3, randomizado (1:1), ABERTO (sem cegamento), com randomização estratificada por performance status e região geográfica, comparando a droga X + quimioterapia padrão versus quimioterapia padrão isolada, em 640 pacientes com câncer gástrico avançado sem tratamento prévio.\n" +
      "• Desfecho primário: sobrevida livre de progressão, avaliada por REVISÃO CENTRAL INDEPENDENTE CEGA (BICR). Essa estratégia reduz o viés de aferição de um estudo aberto.\n" +
      "• Resultado:\n" +
      "  - mediana de SLP de 8,1 vs 6,0 meses;\n" +
      "  - HR de 0,72: redução relativa de cerca de 28% no risco de progressão ou morte com a droga X;\n" +
      "  - IC 95% de 0,60–0,86, que não inclui 1, e p < 0,001: resultado estatisticamente significativo.\n" +
      "• Limitações (duas entre):\n" +
      "  - dados de sobrevida global imaturos, sem confirmação de ganho em SG;\n" +
      "  - maior toxicidade grau ≥ 3 com a droga X (45% vs 38%);\n" +
      "  - desenho aberto, com possível viés de desempenho e de relato de eventos adversos;\n" +
      "  - SLP é desfecho substituto e não garante benefício em SG ou qualidade de vida;\n" +
      "  - ganho absoluto de cerca de 2 meses, cuja relevância clínica deve ser ponderada.",
    espelho: [
      { item: "Compreensão do desenho: fase 3, randomizado 1:1, aberto, estratificado, braços corretos", pts: 5 },
      { item: "Desfecho primário SLP por revisão central independente cega (e por que isso importa)", pts: 4 },
      { item: "Interpretação do HR 0,72 (redução de ~28%), IC 95% sem o 1, p < 0,001", pts: 6 },
      { item: "Duas limitações pertinentes", pts: 5 },
    ],
    ref: "Leitura crítica de artigo científico em inglês (formato da prova); Umscheid et al., 2011.",
  },
  {
    id: "d-en-basket",
    area: "Inglês — leitura de artigo",
    english: true,
    tags: [...T.tipos, "basket", "ingles"],
    context:
      "\"We conducted a multicenter, single-arm, phase 2 basket trial enrolling adults with solid tumors harboring a fusion of Gene Y, regardless of tumor histology. Patients received Drug Z orally once daily until disease progression or unacceptable toxicity. The primary end point was objective response rate according to RECIST version 1.1, assessed by independent review. Among 120 patients representing 15 tumor types, the objective response rate was 62%, including complete responses in 9%. The median duration of response had not been reached after a median follow-up of 14 months.\" (Fictional abstract written for practice.)",
    q: "Identify the trial design and explain why it was chosen. Why is a single-arm design acceptable in this setting, and what are its main weaknesses? (Responda em português.)",
    gabarito:
      "• Desenho: ensaio de fase 2, multicêntrico, de braço único, do tipo BASKET (cesta). UM medicamento (droga Z), dirigido a UMA alteração molecular (fusão do gene Y), foi testado em VÁRIOS tipos histológicos de tumor (15 tipos).\n" +
      "• Por que foi escolhido: a fusão é rara em cada histologia. Agrupar tumores diferentes que compartilham o mesmo alvo torna o estudo viável e permite avaliar uma eficácia \"agnóstica\" ao tecido, típica da medicina de precisão.\n" +
      "• Por que o braço único é aceitável:\n" +
      "  - o desfecho é a taxa de resposta objetiva (RECIST 1.1, revisão independente);\n" +
      "  - respostas tumorais espontâneas são raras, então taxas altas e duradouras (62%, 9% de respostas completas, duração mediana não atingida) dificilmente ocorreriam sem o efeito da droga;\n" +
      "  - a randomização seria difícil em populações raras e com poucas opções.\n" +
      "• Fragilidades:\n" +
      "  - ausência de grupo controle: não permite comparar sobrevida nem estimar o benefício relativo;\n" +
      "  - poucos pacientes por histologia: estimativas imprecisas por tipo de tumor;\n" +
      "  - heterogeneidade entre os tumores;\n" +
      "  - possível viés de seleção;\n" +
      "  - seguimento ainda curto;\n" +
      "  - TRO é desfecho substituto, que não garante ganho em SG ou qualidade de vida.",
    espelho: [
      { item: "Identifica basket: uma droga/um alvo, vários tipos de tumor; fase 2, braço único", pts: 6 },
      { item: "Justificativa: alteração rara, medicina de precisão, abordagem agnóstica ao tecido", pts: 4 },
      { item: "Por que braço único é aceitável: TRO, respostas espontâneas raras, magnitude/durabilidade", pts: 5 },
      { item: "Fragilidades: sem controle, subgrupos pequenos, heterogeneidade, desfecho substituto", pts: 5 },
    ],
    ref: "Verweij et al., 2019.",
  },
  {
    id: "d-en-consent",
    area: "Inglês — leitura de artigo",
    english: true,
    tags: [...T.tcle, "ingles"],
    context:
      "\"Before a participant agrees to take part, the investigator, or a person designated by the investigator, should explain the study in language that is non-technical and understandable, allow enough time for questions, and make sure that the participant is not coerced or unduly influenced. The participant should receive a signed and dated copy of the consent form. If new information becomes available that may affect the participant's willingness to continue, the participant should be informed in a timely manner, and this communication should be documented.\" (Text written for practice, based on Good Clinical Practice principles.)",
    q: "According to the text, list the investigator's duties during the informed consent process and relate them to the Brazilian regulations on informed consent. (Responda em português.)",
    gabarito:
      "Deveres do investigador segundo o texto:\n" +
      "1) Explicar o estudo pessoalmente ou por pessoa designada (delegada) por ele.\n" +
      "2) Usar linguagem não técnica e compreensível.\n" +
      "3) Dar tempo suficiente para perguntas.\n" +
      "4) Garantir que não haja coerção nem influência indevida.\n" +
      "5) Entregar ao participante uma cópia assinada e datada do termo.\n" +
      "6) Informar em tempo hábil novas informações que possam afetar a disposição de continuar, documentando essa comunicação.\n" +
      "Relação com as normas brasileiras:\n" +
      "• A Res. CNS 466/2012 também trata o consentimento como processo, com esclarecimento em linguagem clara e acessível e tempo para reflexão e consulta a familiares.\n" +
      "• Garante a liberdade de recusa e de retirada sem penalização.\n" +
      "• Exige o TCLE em duas vias, rubricadas e assinadas, com uma via para o participante.\n" +
      "• Prevê que novas informações relevantes levem à atualização do TCLE, aprovada pelo CEP, e ao reconsentimento.\n" +
      "• A Lei nº 14.874/2024 reafirma o consentimento livre e esclarecido como direito do participante.",
    espelho: [
      { item: "Compreensão do texto: pelo menos 5 deveres corretamente extraídos", pts: 10 },
      { item: "Relação com a Res. 466/2012 (processo, linguagem, via do participante, liberdade)", pts: 6 },
      { item: "Relação com o reconsentimento e a aprovação do CEP / Lei 14.874", pts: 4 },
    ],
    ref: "ICH E6(R2), 4.8; Res. CNS 466/2012, item IV.",
  },
];
