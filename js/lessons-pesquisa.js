// Aulas de Pesquisa Clínica (ética, fluxo ético-regulatório, tipos de estudo, TCLE e condução de ensaios),
// elaboradas a partir das referências do edital INCA — Cursos Fellow, item 214:
// Lei nº 14.874/2024; Res. CNS nº 466/2012; ICH E6(R2); Declaração Universal sobre Bioética e Direitos
// Humanos (UNESCO, 2005); Umscheid et al., 2011; Verweij et al., 2019.

export const PESQUISA_LESSONS = [
  {
    id: "etica-historia",
    tags: ["nuremberg", "helsinque", "belmont", "marcos historicos", "historia da etica"],
    title: "Marcos históricos da ética em pesquisa: Nuremberg, Helsinque e Belmont",
    raw: [
      "Código de Nuremberg (1947): elaborado após o julgamento dos médicos nazistas. Primeiro documento internacional a afirmar que o CONSENTIMENTO VOLUNTÁRIO do participante é absolutamente essencial; a pesquisa deve trazer resultados benéficos, evitar sofrimento e permitir que o participante a interrompa.",
      "Declaração de Helsinque (Associação Médica Mundial, 1964, revisada periodicamente — a mais recente em 2024): princípios éticos para pesquisa médica envolvendo seres humanos; o bem-estar do participante prevalece sobre os interesses da ciência e da sociedade; exige revisão por comitê de ética independente; restringe o uso de placebo quando existe intervenção comprovada.",
      "Caso Tuskegee (EUA, 1932–1972): homens negros com sífilis foram acompanhados sem tratamento, mesmo após a penicilina se tornar padrão — exemplo clássico de violação da justiça e do consentimento.",
      "Relatório Belmont (EUA, 1979): três princípios — RESPEITO ÀS PESSOAS (autonomia e proteção dos que têm autonomia reduzida → consentimento), BENEFICÊNCIA (maximizar benefícios e minimizar danos → avaliação risco/benefício) e JUSTIÇA (distribuição justa de ônus e benefícios → seleção equitativa dos participantes).",
      "Principialismo (Beauchamp e Childress, 1979): autonomia, beneficência, não maleficência e justiça.",
      "No Brasil: Res. CNS 01/1988 → Res. CNS 196/1996 (criou o Sistema CEP/Conep) → Res. CNS 466/2012 (vigente) e Res. CNS 510/2016 (ciências humanas e sociais) → Lei nº 14.874/2024.",
    ],
    simple:
      "As regras de ética em pesquisa nasceram de tragédias. Depois dos experimentos nazistas, o Código de Nuremberg disse: ninguém pode participar de pesquisa sem concordar livremente. A Declaração de Helsinque, dos médicos, detalhou como fazer pesquisa com responsabilidade e criou a ideia de um comitê de ética para revisar os estudos. Depois do escândalo de Tuskegee, os EUA publicaram o Relatório Belmont, que resumiu tudo em três princípios: respeitar as pessoas, fazer o bem e ser justo na escolha de quem participa.",
    analogy:
      "É como as normas de segurança da aviação: cada regra nova foi escrita depois de um acidente, para que ele nunca se repita. Nuremberg é a regra \"ninguém embarca sem querer\"; Helsinque é o manual completo de voo; Belmont é o resumo em três regras de ouro.",
    summary:
      "Nuremberg (1947) tornou o consentimento voluntário essencial. Helsinque (1964, revisada) detalhou os princípios para pesquisa médica e a revisão por comitês de ética. Belmont (1979) consolidou respeito às pessoas, beneficência e justiça.",
    keyPoints: [
      "Nuremberg = consentimento voluntário essencial.",
      "Helsinque = Associação Médica Mundial; comitê de ética; limites ao placebo.",
      "Belmont = respeito às pessoas, beneficência e justiça.",
      "Principialismo = autonomia, beneficência, não maleficência e justiça.",
    ],
    traps: [
      "Belmont tem TRÊS princípios (não quatro); \"não maleficência\" como princípio separado é do principialismo.",
      "Helsinque é da Associação Médica Mundial, não da OMS nem da ONU.",
      "A Res. 196/1996 criou o Sistema CEP/Conep; a 466/2012 a substituiu.",
    ],
    checks: [
      { q: "Qual documento afirmou pela primeira vez que o consentimento voluntário é absolutamente essencial?", a: "O Código de Nuremberg (1947)." },
      { q: "Quais os três princípios do Relatório Belmont?", a: "Respeito às pessoas, beneficência e justiça." },
    ],
    sources: ["Código de Nuremberg (1947)", "Declaração de Helsinque — Associação Médica Mundial (versão vigente)", "Relatório Belmont (1979)"],
  },
  {
    id: "unesco",
    tags: ["unesco", "declaracao universal sobre bioetica", "bioetica e direitos humanos"],
    title: "Declaração Universal sobre Bioética e Direitos Humanos (UNESCO, 2005)",
    raw: [
      "Adotada pela UNESCO em 2005. Amplia a bioética para além da relação profissional–paciente, incorporando dimensões SOCIAIS, SANITÁRIAS e AMBIENTAIS, com base nos direitos humanos.",
      "Princípios (arts. 3º a 17): dignidade humana e direitos humanos; benefício e dano; autonomia e responsabilidade individual; consentimento; proteção de indivíduos sem capacidade para consentir; respeito pela vulnerabilidade humana e pela integridade individual; privacidade e confidencialidade; igualdade, justiça e equidade; não discriminação e não estigmatização; respeito pela diversidade cultural e pelo pluralismo; solidariedade e cooperação; responsabilidade social e saúde; compartilhamento de benefícios; proteção das gerações futuras; proteção do meio ambiente, da biosfera e da biodiversidade.",
      "Art. 3º: os interesses e o bem-estar do indivíduo devem ter prioridade sobre o interesse exclusivo da ciência ou da sociedade.",
      "Consentimento (art. 6º): prévio, livre e esclarecido, baseado em informação adequada; pode ser retirado a qualquer momento e por qualquer razão, sem desvantagem ou preconceito.",
      "Pessoas sem capacidade para consentir (art. 7º): proteção especial; participar apenas em pesquisas com benefício direto à sua saúde (ou, excepcionalmente, com risco e ônus mínimos), envolvendo-as no processo de decisão na medida do possível.",
      "Compartilhamento de benefícios (art. 15): os benefícios da pesquisa devem ser compartilhados com a sociedade e com a comunidade internacional, em especial com os países em desenvolvimento.",
      "A Res. CNS 466/2012 cita expressamente esta Declaração entre os documentos que fundamentam a ética em pesquisa no Brasil.",
    ],
    simple:
      "A Declaração da UNESCO de 2005 levou a bioética para o campo dos direitos humanos. Ela não fala só do pesquisador e do participante: fala também de justiça social, acesso à saúde, respeito às culturas, cuidado com as próximas gerações e com o meio ambiente. A ideia central é que a pessoa vem antes da ciência, e que os benefícios da pesquisa precisam chegar a todos, inclusive aos países mais pobres.",
    analogy:
      "Se o Relatório Belmont é um \"regulamento interno\" da pesquisa, a Declaração da UNESCO é uma \"constituição mundial\" da bioética: vale para todos os países e olha também para a sociedade, o planeta e o futuro.",
    summary:
      "A Declaração da UNESCO (2005) fundamenta a bioética nos direitos humanos e traz 15 princípios (arts. 3º a 17). Prioriza o indivíduo sobre o interesse exclusivo da ciência ou da sociedade. Inclui dimensões sociais e ambientais, como a responsabilidade social, o compartilhamento de benefícios e a proteção das gerações futuras.",
    keyPoints: [
      "2005, UNESCO, princípios nos arts. 3º a 17.",
      "Indivíduo > interesse exclusivo da ciência/sociedade.",
      "Consentimento prévio, livre e esclarecido, revogável a qualquer momento.",
      "Inclui vulnerabilidade, compartilhamento de benefícios, gerações futuras e meio ambiente.",
    ],
    traps: [
      "A Declaração é da UNESCO (2005), não da OMS nem da Associação Médica Mundial.",
      "Ela vai além da ética clínica: inclui temas sociais e ambientais.",
      "A retirada do consentimento não exige justificativa nem gera prejuízo.",
    ],
    checks: [
      { q: "Qual a novidade da Declaração da UNESCO em relação aos documentos anteriores?", a: "Ampliou a bioética para as dimensões sociais, sanitárias e ambientais, com base nos direitos humanos." },
      { q: "O que a Declaração diz sobre o interesse da ciência?", a: "Os interesses e o bem-estar do indivíduo têm prioridade sobre o interesse exclusivo da ciência ou da sociedade." },
    ],
    sources: ["UNESCO — Declaração Universal sobre Bioética e Direitos Humanos (2005), versão em português"],
  },
  {
    id: "res466",
    tags: ["466", "etica em pesquisa", "pesquisa com seres humanos", "pesquisa envolvendo seres humanos", "direitos do participante"],
    title: "Resolução CNS nº 466/2012 — ética em pesquisa com seres humanos",
    raw: [
      "Aprova as diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos; substituiu a Res. 196/1996. Incorpora os referenciais da bioética: AUTONOMIA, NÃO MALEFICÊNCIA, BENEFICÊNCIA, JUSTIÇA e EQUIDADE.",
      "Toda pesquisa com seres humanos envolve risco, em tipos e gradações variados; deve haver ponderação entre riscos e benefícios, e a pesquisa só se justifica se o risco for admissível diante do benefício esperado.",
      "Participante de pesquisa: quem, de forma esclarecida e voluntária (ou sob autorização de seu responsável legal), aceita ser pesquisado.",
      "ASSISTÊNCIA ao participante: imediata (emergencial, sem ônus) e integral (prestada para atender complicações e danos decorrentes, direta ou indiretamente, da pesquisa).",
      "RESSARCIMENTO: compensação de despesas do participante e de seus acompanhantes (ex.: transporte e alimentação). INDENIZAÇÃO: cobertura material para reparação de dano causado pela pesquisa.",
      "O participante pode recusar-se a participar ou retirar o consentimento a qualquer momento, sem penalização.",
      "Placebo: só se justifica, em termos de não maleficência e necessidade metodológica, quando os benefícios, riscos e eficácia do novo método forem comparados aos da melhor intervenção comprovada (ou não houver método comprovado).",
      "O pesquisador responsável deve: apresentar o protocolo ao CEP, iniciar somente após aprovação, elaborar relatórios parciais e final, manter os dados em arquivo por 5 ANOS após o término e suspender a pesquisa ao perceber risco ou dano não previsto.",
      "Áreas temáticas especiais com análise adicional pela CONEP (ex.: genética humana, reprodução humana, populações indígenas, pesquisas com cooperação estrangeira) — confira a lista vigente.",
    ],
    simple:
      "A Res. 466 é o \"manual de ética\" da pesquisa com pessoas no Brasil. Ela parte de uma ideia simples: toda pesquisa tem algum risco, então só vale a pena se o benefício compensar. O participante tem direitos: entender tudo antes de aceitar, desistir quando quiser, ter assistência se algo der errado, receber de volta o que gastou para participar e ser indenizado se sofrer dano. E o pesquisador só começa depois do sinal verde do Comitê de Ética.",
    analogy:
      "É como um contrato de viagem de aventura: antes de embarcar, você é informado de todos os riscos; a agência paga seu transporte (ressarcimento); se você se machucar, ela presta socorro na hora e trata até o fim (assistência imediata e integral) e paga pelo dano (indenização). E você pode desistir da viagem a qualquer momento.",
    summary:
      "A Res. CNS 466/2012 traz as diretrizes éticas para pesquisa com seres humanos, baseadas em autonomia, beneficência, não maleficência, justiça e equidade. Garante ao participante assistência imediata e integral, ressarcimento, indenização e liberdade de retirada. A pesquisa só começa após aprovação do CEP, e os dados ficam guardados por 5 anos.",
    keyPoints: [
      "Toda pesquisa envolve risco.",
      "Ressarcimento = despesas; indenização = dano.",
      "Assistência imediata (emergencial) e integral (complicações e danos).",
      "Guarda dos dados: 5 anos após o término.",
    ],
    traps: [
      "Ressarcimento NÃO é remuneração: é devolver gastos.",
      "\"Pesquisa sem risco\" não existe para a Res. 466.",
      "Res. 510/2016 trata das ciências humanas e sociais; a 466 é a norma geral.",
    ],
    checks: [
      { q: "Qual a diferença entre ressarcimento e indenização?", a: "Ressarcimento compensa despesas da participação (transporte, alimentação); indenização repara dano causado pela pesquisa." },
      { q: "Por quanto tempo o pesquisador deve guardar os dados?", a: "Por 5 anos após o término da pesquisa." },
    ],
    sources: ["Resolução CNS nº 466/2012", "Resolução CNS nº 510/2016"],
  },
  {
    id: "cep-conep",
    tags: ["fluxo etico", "regulatorio", "cep/conep", "conep", "plataforma brasil", "comite de etica"],
    title: "Fluxo ético-regulatório: Sistema CEP/Conep, Plataforma Brasil e ANVISA",
    raw: [
      "Sistema CEP/Conep: Comitês de Ética em Pesquisa (CEPs), nas instituições, e Comissão Nacional de Ética em Pesquisa (CONEP), vinculada ao Conselho Nacional de Saúde. Com a Lei nº 14.874/2024, passa a se organizar como Sistema Nacional de Ética em Pesquisa com Seres Humanos (ver aula específica).",
      "CEP: colegiado interdisciplinar e independente, de relevância pública, de caráter consultivo, deliberativo e educativo, criado para defender os interesses dos participantes em sua integridade e dignidade.",
      "Composição do CEP: multidisciplinar, com no mínimo 7 membros, participação de ambos os sexos e representação dos usuários/participantes.",
      "Submissão: pela PLATAFORMA BRASIL (base nacional e unificada de registros de pesquisas com seres humanos). Documentos típicos: folha de rosto assinada pela instituição, projeto/protocolo, TCLE (ou pedido de dispensa), orçamento, cronograma e currículo dos pesquisadores.",
      "Tramitação (Norma Operacional CNS 001/2013): checagem documental e emissão de parecer em prazos definidos; parecer pode ser aprovado, pendente ou não aprovado (há também arquivado, suspenso e retirado). Pendências devem ser respondidas pelo pesquisador no prazo fixado.",
      "Durante o estudo: emendas ao protocolo são submetidas ao CEP ANTES de implementadas (exceto quando necessárias para eliminar risco imediato ao participante); relatórios parciais e final; notificação de eventos adversos e de encerramento ou interrupção.",
      "Fluxo regulatório: ensaios clínicos com medicamentos para fins de registro também são avaliados pela ANVISA (aspectos sanitários, qualidade e segurança do produto). A RDC 9/2015 foi substituída pela RDC 945/2024. A análise ética (CEP) e a regulatória (ANVISA) são independentes e podem ocorrer em paralelo.",
      "O estudo só pode incluir participantes após TODAS as aprovações exigidas (ética e, quando aplicável, regulatória) e, na prática, após contrato e ativação do centro.",
    ],
    simple:
      "Antes de começar um estudo, ele passa por dois \"guichês\". No guichê da ética, o Comitê de Ética da instituição, e em alguns casos a CONEP, verifica se o estudo protege os participantes. Tudo é enviado pela Plataforma Brasil. No guichê regulatório, a ANVISA avalia o medicamento em teste, quando o estudo busca registro do produto. Só com os dois sinais verdes o primeiro paciente pode entrar. E qualquer mudança no protocolo volta para o comitê antes de ser aplicada.",
    analogy:
      "É como construir uma casa: o CEP é a vistoria de segurança das pessoas (\"quem vai morar ali está protegido?\") e a ANVISA é a vistoria técnica dos materiais (\"o produto é seguro e de qualidade?\"). A Plataforma Brasil é o protocolo da prefeitura onde se dá entrada no pedido. Sem os dois alvarás, ninguém se muda.",
    summary:
      "O protocolo é submetido ao CEP pela Plataforma Brasil e, em áreas temáticas específicas, também é analisado pela CONEP. Ensaios com medicamentos para registro também passam pela ANVISA (RDC 945/2024, que substituiu a RDC 9/2015). Nada começa sem as aprovações, e emendas precisam de aprovação antes de serem implementadas.",
    keyPoints: [
      "CEP = consultivo, deliberativo, educativo, independente.",
      "Submissão pela Plataforma Brasil.",
      "Emenda: aprovar antes de implementar (salvo risco imediato).",
      "Análise ética e regulatória são independentes e podem ser paralelas.",
    ],
    traps: [
      "A ANVISA não substitui o CEP, nem o CEP substitui a ANVISA.",
      "O CEP NÃO é apenas consultivo: também é deliberativo e educativo.",
      "Confira se a banca cobra prazos da Norma Operacional 001/2013 ou da Lei 14.874/2024.",
    ],
    checks: [
      { q: "Por qual sistema os protocolos são submetidos ao CEP?", a: "Pela Plataforma Brasil." },
      { q: "Uma emenda ao protocolo pode ser implementada antes da aprovação do CEP?", a: "Não, exceto quando necessária para eliminar risco imediato aos participantes." },
    ],
    sources: ["Resolução CNS nº 466/2012, item VII", "Norma Operacional CNS nº 001/2013", "RDC ANVISA nº 945/2024", "Lei nº 14.874/2024"],
  },
  {
    id: "lei14874",
    tags: ["14.874", "14874", "lei da pesquisa clinica", "sistema nacional de etica em pesquisa", "sinep"],
    title: "Lei nº 14.874/2024 — pesquisa com seres humanos e Sistema Nacional de Ética em Pesquisa",
    raw: [
      "Lei nº 14.874, de 28 de maio de 2024: dispõe sobre a pesquisa com seres humanos e institui o Sistema Nacional de Ética em Pesquisa com Seres Humanos. É a primeira LEI federal específica sobre o tema (antes, a matéria era regida principalmente por resoluções do CNS).",
      "O Sistema Nacional é composto por uma instância nacional de ética em pesquisa e pelos Comitês de Ética em Pesquisa (CEPs). A instância nacional coordena o sistema e credencia e acompanha os CEPs; detalhes de funcionamento dependem de regulamentação.",
      "A análise ética é feita pelos CEPs; a lei fixa PRAZOS para a análise ética e para a análise regulatória (ANVISA) e permite que ambas ocorram de forma concomitante, com o objetivo de reduzir a demora para iniciar estudos no Brasil.",
      "Reforça os princípios: dignidade, autonomia, consentimento livre e esclarecido, proteção de vulneráveis, confidencialidade, assistência ao participante e reparação de danos.",
      "Define papéis: patrocinador, pesquisador, instituição, organização representativa de pesquisa clínica (ORPC/CRO), participante.",
      "Remuneração: a regra é não remunerar o participante (apenas ressarcir despesas), com exceções previstas na lei para situações específicas, como estudos de fase I e de bioequivalência.",
      "Acesso pós-estudo: disciplina o fornecimento gratuito do medicamento experimental ao participante após o término do estudo e as hipóteses em que esse fornecimento pode cessar (ex.: decisão do participante, cura, ausência de benefício, reações adversas que contraindiquem o uso, disponibilidade do medicamento na rede pública).",
      "Trata também do armazenamento e uso de material biológico humano e de dados (biobancos e biorrepositórios), com consentimento do participante.",
    ],
    simple:
      "Até 2024, a pesquisa com pessoas no Brasil era regulada principalmente por resoluções do Conselho Nacional de Saúde. A Lei 14.874 transformou essas regras em lei, criou o Sistema Nacional de Ética em Pesquisa (comitês locais coordenados por uma instância nacional) e estabeleceu prazos para que a ética e a ANVISA analisem os estudos, podendo ser ao mesmo tempo. Ela também detalha o que acontece depois que o estudo acaba: em que casos o participante continua recebendo o remédio de graça e quando isso pode parar.",
    analogy:
      "É como uma regra de condomínio que virou lei municipal: o conteúdo é parecido, mas ganhou mais força, prazos definidos e um \"síndico nacional\" (a instância nacional) que credencia e coordena os síndicos de cada prédio (os CEPs).",
    summary:
      "A Lei 14.874/2024 regula a pesquisa com seres humanos e cria o Sistema Nacional de Ética em Pesquisa (instância nacional + CEPs). Fixa prazos e permite análise ética e regulatória em paralelo. Disciplina remuneração em casos específicos (como fase I e bioequivalência) e o acesso pós-estudo ao medicamento experimental.",
    keyPoints: [
      "Lei de 28/05/2024; institui o Sistema Nacional de Ética em Pesquisa com Seres Humanos.",
      "Composição: instância nacional + CEPs.",
      "Análises ética e regulatória podem ser concomitantes.",
      "Acesso pós-estudo e suas hipóteses de interrupção.",
    ],
    traps: [
      "A lei não revogou automaticamente toda a Res. 466/2012: confira o que foi regulamentado e o que segue vigente no seu edital.",
      "Remuneração continua sendo exceção, não regra.",
      "Releia os artigos sobre prazos e acesso pós-estudo no texto oficial: são alvos frequentes de questões literais.",
    ],
    checks: [
      { q: "O que a Lei 14.874/2024 institui?", a: "O Sistema Nacional de Ética em Pesquisa com Seres Humanos." },
      { q: "As análises ética e regulatória precisam ser sequenciais?", a: "Não: a lei permite que ocorram de forma concomitante." },
    ],
    sources: ["Lei nº 14.874/2024 — texto integral em planalto.gov.br (leia os artigos sobre prazos, remuneração e acesso pós-estudo)"],
  },
  {
    id: "ich-gcp",
    tags: ["ich e6", "e6(r2)", "e6 (r2)", "boas praticas clinicas", "good clinical practice", "bpc"],
    title: "Boas Práticas Clínicas — ICH E6(R2): princípios e responsabilidades",
    raw: [
      "Boas Práticas Clínicas (BPC/GCP): padrão internacional de qualidade ética e científica para desenhar, conduzir, registrar e relatar estudos com seres humanos. Garante a proteção dos direitos, da segurança e do bem-estar dos participantes e a credibilidade dos dados.",
      "ICH E6(R2) (versão Step 4 de 9/11/2016): adendo integrado à E6(R1). Em 2025 a ICH publicou a E6(R3), mas o edital cita a R2.",
      "Princípios: conduzir conforme Helsinque, BPC e requisitos regulatórios; riscos previsíveis ponderados contra benefícios; direitos, segurança e bem-estar dos participantes prevalecem sobre os interesses da ciência e da sociedade; informações prévias adequadas sobre o produto; protocolo científico, claro e detalhado; aprovação prévia por CEP/IRB; cuidado médico sob responsabilidade de médico qualificado; equipe qualificada por formação, treinamento e experiência; consentimento livre obtido ANTES da participação; registros que permitam relato, interpretação e verificação precisos; confidencialidade; produto fabricado conforme Boas Práticas de Fabricação e usado conforme o protocolo; sistemas que assegurem a qualidade.",
      "Novidades da R2: GESTÃO DA QUALIDADE BASEADA EM RISCO, MONITORIA BASEADA EM RISCO, supervisão pelo patrocinador das tarefas terceirizadas (CRO) e pelo investigador das tarefas delegadas, e requisitos para sistemas eletrônicos.",
      "Investigador: responsável pela condução no centro; deve ter qualificação, tempo e equipe adequados; delegar tarefas a pessoas qualificadas e registrar a delegação (delegation log); obter o consentimento; manter documentos-fonte e documentos essenciais; reportar eventos adversos graves.",
      "Patrocinador: responsável por iniciar, gerenciar e/ou financiar o estudo; gestão da qualidade, monitoria, fornecimento do produto sob investigação, notificação de segurança às autoridades e aos comitês.",
      "Dados-fonte devem seguir ALCOA: Atribuível, Legível, Contemporâneo, Original e Exato (Accurate); com a extensão ALCOA+ (completo, consistente, duradouro e disponível).",
    ],
    simple:
      "As Boas Práticas Clínicas são o \"padrão de qualidade\" de todo ensaio clínico no mundo. Elas garantem duas coisas: que o participante seja protegido e que os dados sejam confiáveis. Cada pessoa tem seu papel: o patrocinador organiza e paga, o investigador conduz no hospital e responde pela equipe, o comitê de ética aprova e acompanha. A versão R2 trouxe a ideia de focar o controle de qualidade onde está o maior risco, em vez de conferir tudo igualmente.",
    analogy:
      "BPC é como a cozinha de um restaurante sob vigilância sanitária: há receita escrita (protocolo), chef responsável (investigador), dono que fornece os ingredientes e contrata o fiscal (patrocinador e monitor), e tudo é anotado para que qualquer auditor confira depois. Se não está registrado, para a auditoria \"não aconteceu\".",
    summary:
      "A ICH E6(R2) é o guia internacional de Boas Práticas Clínicas e protege participantes e a credibilidade dos dados. Os direitos e a segurança do participante prevalecem sobre a ciência, e o consentimento é obtido antes de qualquer procedimento. A R2 introduziu a abordagem baseada em risco para qualidade e monitoria.",
    keyPoints: [
      "BPC = proteção do participante + credibilidade dos dados.",
      "Consentimento ANTES de qualquer procedimento do estudo.",
      "R2 = gestão da qualidade e monitoria baseadas em risco.",
      "ALCOA para dados-fonte.",
    ],
    traps: [
      "O investigador pode delegar tarefas, mas NÃO a responsabilidade.",
      "\"Se não foi documentado, não foi feito\".",
      "R2 é de 2016; a R3 é de 2025: atenção a qual versão a questão cita.",
    ],
    checks: [
      { q: "O que significa ALCOA?", a: "Atribuível, Legível, Contemporâneo, Original e Exato." },
      { q: "Qual a principal novidade da ICH E6(R2)?", a: "A abordagem baseada em risco para gestão da qualidade e monitoria." },
    ],
    sources: ["ICH E6(R2) — Integrated Addendum to ICH E6(R1): Guideline for Good Clinical Practice (2016)", "ICH E6(R3) (2025), para comparação"],
  },
  {
    id: "conducao",
    tags: ["eventos adversos", "evento adverso grave", "monitoria", "conducao de ensaios", "conducao do estudo", "documentos essenciais", "coordenacao de estudos", "coordenador de estudos", "farmacovigilancia"],
    title: "Condução de ensaios clínicos: eventos adversos, monitoria e documentação",
    raw: [
      "Evento adverso (EA): qualquer ocorrência médica desfavorável em um participante que recebeu o produto sob investigação, SEM necessariamente ter relação causal com ele.",
      "Reação adversa ao medicamento (RAM): resposta nociva e não intencional ao produto, com relação causal pelo menos razoavelmente possível.",
      "Evento adverso GRAVE (EAG/SAE): resulta em óbito; ameaça a vida; requer hospitalização ou prolonga hospitalização existente; resulta em incapacidade persistente ou significativa; causa anomalia congênita; ou é clinicamente significativo (evento médico importante).",
      "Grave (gravidade regulatória — critérios acima) ≠ intenso/severo (intensidade do sintoma, ex.: cefaleia intensa). Em oncologia, a intensidade é graduada pelo CTCAE (graus 1 a 5).",
      "SUSAR: reação adversa grave, suspeita e inesperada (não descrita na Brochura do Investigador) — notificação expedita às autoridades pelo patrocinador.",
      "ICH E6(R2): o investigador deve comunicar ao patrocinador TODOS os EAGs IMEDIATAMENTE (exceto os que o protocolo dispense), seguidos de relatórios detalhados por escrito.",
      "Documentos e papéis: protocolo; Brochura do Investigador (BI); TCLE; ficha clínica (CRF/eCRF); documentos-fonte (prontuário, exames); arquivo do investigador (ISF) e arquivo mestre do estudo (TMF); log de delegação; registro de contabilidade e armazenamento do produto (temperatura).",
      "Monitoria: verifica se os direitos dos participantes estão protegidos, se os dados são exatos e completos (verificação de dados-fonte — SDV) e se o estudo segue protocolo, BPC e regulamentação. Auditoria = avaliação independente pelo patrocinador; inspeção = avaliação pela autoridade regulatória.",
      "Desvio de protocolo: qualquer não cumprimento do protocolo; deve ser documentado e, se afetar a segurança ou a integridade dos dados, comunicado conforme os procedimentos.",
      "Coordenador(a) de estudos (frequentemente enfermeiro/a): triagem e recrutamento, agendamento de visitas, processo de consentimento conforme delegação, coleta e registro de dados, manejo de amostras, notificação de eventos e interface com monitor e CEP.",
    ],
    simple:
      "Conduzir um estudo é cuidar do paciente e, ao mesmo tempo, registrar tudo com precisão. Qualquer coisa ruim que aconteça com o participante é um evento adverso, mesmo que não tenha nada a ver com o remédio. Se for grave (morte, risco de vida, internação, sequela ou anomalia congênita), avisa-se o patrocinador imediatamente. O monitor visita o centro para conferir se o que está na ficha bate com o prontuário, e cada documento tem seu lugar no arquivo do estudo.",
    analogy:
      "O estudo é como um voo longo: o evento adverso é qualquer turbulência anotada no diário de bordo; o evento grave é a emergência que exige aviso imediato à torre (patrocinador). O monitor é o inspetor que confere o diário com a caixa-preta (documentos-fonte).",
    summary:
      "EA é qualquer ocorrência desfavorável, com ou sem relação com o produto; EAG tem critérios de gravidade (óbito, risco de vida, hospitalização, incapacidade, anomalia congênita, evento importante). EAGs são comunicados imediatamente ao patrocinador. A monitoria confere proteção dos participantes, qualidade dos dados e adesão ao protocolo.",
    keyPoints: [
      "EA não exige relação causal; RAM exige relação causal possível.",
      "Critérios de EAG: óbito, risco de vida, hospitalização, incapacidade, anomalia congênita, evento médico importante.",
      "EAG → comunicar ao patrocinador imediatamente.",
      "Grave ≠ severo.",
    ],
    traps: [
      "Um evento \"severo\" (intenso) pode não ser \"grave\", e vice-versa.",
      "Internação eletiva já planejada antes do estudo, em geral, não configura EAG; confira o protocolo.",
      "Auditoria (patrocinador) ≠ inspeção (autoridade regulatória).",
    ],
    checks: [
      { q: "Um evento adverso precisa ter relação com o medicamento?", a: "Não. Qualquer ocorrência desfavorável é EA, independentemente de causalidade." },
      { q: "Cite três critérios de evento adverso grave.", a: "Óbito, ameaça à vida, hospitalização (ou prolongamento), incapacidade persistente, anomalia congênita, evento médico importante." },
    ],
    sources: ["ICH E6(R2), seções 1 (glossário), 4 (investigador), 5 (patrocinador) e 8 (documentos essenciais)", "ICH E2A — definições e padrões para notificação expedita", "CTCAE (Common Terminology Criteria for Adverse Events)"],
  },
  {
    id: "tipos-estudo",
    tags: ["tipos de estudo", "tipos de estudos", "desenho de estudo", "delineamento", "observaciona", "coorte", "caso-controle", "estudos clinicos", "estudo clinico", "epidemiologia clinica"],
    title: "Tipos de estudos clínicos: observacionais e experimentais",
    raw: [
      "Pergunta-chave: o pesquisador ATRIBUI a intervenção? Se sim → estudo EXPERIMENTAL (de intervenção, ensaio clínico). Se apenas observa exposições que já ocorrem → estudo OBSERVACIONAL.",
      "Observacionais descritivos: relato de caso, série de casos, estudo transversal (prevalência, \"fotografia\" num ponto do tempo).",
      "Observacionais analíticos: COORTE (parte da exposição e acompanha no tempo até o desfecho; calcula incidência e risco relativo; prospectiva ou retrospectiva) e CASO-CONTROLE (parte do desfecho — casos e controles — e investiga exposições passadas; calcula odds ratio; útil para doenças raras).",
      "Experimentais: ENSAIO CLÍNICO — o pesquisador aloca os participantes às intervenções; o ensaio clínico RANDOMIZADO e controlado (ECR) é o padrão-ouro para avaliar eficácia, por minimizar vieses e confundimento.",
      "Ensaio controlado: compara a intervenção a um grupo controle (placebo, tratamento padrão/ativo, sem tratamento ou dose diferente).",
      "Estudos não randomizados (ex.: braço único, controle histórico) são mais sujeitos a viés, mas são comuns em fases iniciais e em oncologia com doenças raras.",
      "Hierarquia de evidências: revisões sistemáticas e metanálises de ECR > ECR > coorte > caso-controle > séries/relatos de caso > opinião de especialistas.",
    ],
    simple:
      "Para saber o tipo de estudo, pergunte: o pesquisador decidiu quem recebe o tratamento? Se sim, é um ensaio clínico (experimental). Se ele só observa o que já acontece, é observacional. Entre os observacionais, a coorte vai da causa para o efeito (acompanha expostos e não expostos ao longo do tempo), e o caso-controle vai do efeito para a causa (parte de quem já tem a doença e olha para trás). O ensaio randomizado é o mais confiável para provar que um tratamento funciona.",
    analogy:
      "Coorte é assistir ao filme do começo ao fim, vendo quem fumou e quem desenvolveu câncer. Caso-controle é começar pelo final do filme (quem tem câncer) e voltar a fita para ver o que aconteceu antes. Ensaio clínico é você ser o diretor e decidir quem recebe o tratamento, por sorteio.",
    summary:
      "Estudos são experimentais quando o pesquisador atribui a intervenção, e observacionais quando apenas observa. Coorte parte da exposição para o desfecho; caso-controle parte do desfecho para a exposição. O ensaio clínico randomizado e controlado é o padrão-ouro para avaliar eficácia.",
    keyPoints: [
      "Intervenção atribuída pelo pesquisador = experimental.",
      "Coorte: exposição → desfecho; risco relativo.",
      "Caso-controle: desfecho → exposição; odds ratio; doenças raras.",
      "ECR = padrão-ouro de eficácia.",
    ],
    traps: [
      "Estudo transversal NÃO acompanha ao longo do tempo.",
      "Coorte retrospectiva continua sendo coorte (parte da exposição, com dados do passado).",
      "Ensaio clínico é sempre prospectivo.",
    ],
    checks: [
      { q: "Qual estudo é mais indicado para investigar fatores de risco de uma doença rara?", a: "Caso-controle." },
      { q: "O que diferencia um estudo experimental de um observacional?", a: "No experimental, o pesquisador atribui a intervenção aos participantes." },
    ],
    sources: ["Umscheid CA et al. Key concepts of clinical trials: a narrative review. Postgrad Med. 2011;123(5):194-204", "Livros de epidemiologia clínica (ex.: Fletcher — Epidemiologia Clínica)"],
  },
  {
    id: "fases",
    tags: ["fases", "fase i", "fase 1", "fase ii", "fase iii", "fase iv", "desenvolvimento clinico", "desenvolvimento de medicamentos"],
    title: "Fases da pesquisa clínica (0 a IV)",
    raw: [
      "Pré-clínica: estudos in vitro e em animais (farmacologia, toxicologia) antes da primeira administração em humanos.",
      "Fase 0 (exploratória, opcional): microdoses em poucos participantes para avaliar farmacocinética/farmacodinâmica; sem intenção terapêutica.",
      "FASE I: primeira em humanos; objetivo principal = SEGURANÇA e tolerabilidade, farmacocinética e definição da dose (dose máxima tolerada ou dose recomendada para a fase II); poucos participantes (dezenas). Em oncologia, geralmente em PACIENTES com câncer (não voluntários sadios), pela toxicidade dos tratamentos.",
      "Desenho clássico de escalonamento em oncologia: \"3+3\" — 3 pacientes por nível de dose; sem toxicidade limitante de dose (DLT) → escala; 1 DLT em 3 → amplia para 6; ≥ 2 DLT → dose excedida (a DMT é o nível anterior). Há desenhos baseados em modelos (ex.: CRM, BOIN) mais eficientes.",
      "FASE II: avaliação preliminar da EFICÁCIA (atividade antitumoral) e continuação da segurança; dezenas a centenas de pacientes; em oncologia, desfecho comum = taxa de resposta objetiva; pode ser de braço único ou randomizada.",
      "FASE III: confirmação da eficácia em comparação ao tratamento PADRÃO (ou placebo), geralmente randomizada e multicêntrica, com centenas a milhares de participantes; base para o registro sanitário.",
      "FASE IV: após o registro/comercialização; farmacovigilância, eventos raros e de longo prazo, novas populações e efetividade no mundo real.",
    ],
    simple:
      "Um remédio novo sobe uma escada. Primeiro, testes em laboratório e animais. Na fase I, poucas pessoas recebem o remédio para ver se é seguro e qual a dose certa. Na fase II, mais pacientes, para ver se ele funciona. Na fase III, ele é comparado com o melhor tratamento que já existe, em muitos pacientes; se vencer, pode ser registrado. Na fase IV, já na farmácia, continuamos vigiando efeitos raros que só aparecem quando milhares de pessoas usam.",
    analogy:
      "É como lançar um carro novo: fase I é o teste de segurança na pista fechada (o carro não explode? qual a velocidade segura?); fase II é o primeiro test-drive (ele anda bem?); fase III é a comparação com o líder de mercado (é melhor?); fase IV é o recall: acompanhar os carros já vendidos.",
    summary:
      "Fase I avalia segurança e dose (em oncologia, geralmente em pacientes, com escalonamento como o 3+3). Fase II avalia eficácia preliminar e fase III confirma a eficácia contra o padrão, servindo de base para o registro. Fase IV acompanha o produto após a comercialização.",
    keyPoints: [
      "I = segurança/dose; II = eficácia preliminar; III = comparação com padrão, registro; IV = pós-comercialização.",
      "Oncologia: fase I em pacientes.",
      "3+3: ≥ 2 DLT → dose excedida.",
    ],
    traps: [
      "Fase I NÃO tem como objetivo principal a eficácia.",
      "Em oncologia, fase I raramente usa voluntários sadios.",
      "Fase IV ocorre DEPOIS do registro.",
    ],
    checks: [
      { q: "Qual o principal objetivo da fase I?", a: "Avaliar segurança, tolerabilidade e farmacocinética e definir a dose." },
      { q: "Qual fase fornece a evidência principal para o registro do medicamento?", a: "A fase III." },
    ],
    sources: ["Umscheid CA et al., 2011", "Verweij J et al. Innovation in oncology clinical trial design. Cancer Treat Rev. 2019;74:15-20"],
  },
  {
    id: "ecr-metodologia",
    tags: ["randomiza", "cegamento", "mascaramento", "placebo", "ensaio clinico randomizado", "intencao de tratar", "vies", "conceitos-chave"],
    title: "Ensaio clínico randomizado: randomização, cegamento, controle e análise",
    raw: [
      "RANDOMIZAÇÃO: alocação aleatória dos participantes aos grupos; equilibra fatores de confusão conhecidos e desconhecidos e reduz o viés de seleção. Variações: simples, em blocos, estratificada.",
      "SIGILO DA ALOCAÇÃO (allocation concealment): quem inclui o participante não pode prever o próximo grupo — protege a randomização (ex.: sistema central/IWRS).",
      "CEGAMENTO (mascaramento): simples-cego (participante não sabe), duplo-cego (participante e investigador/avaliador não sabem), triplo-cego (inclui quem analisa os dados); aberto (open-label) = todos sabem. Reduz viés de desempenho e de aferição.",
      "Controle: placebo (quando eticamente aceitável) ou controle ativo (tratamento padrão).",
      "Desenhos: paralelo (cada grupo recebe uma intervenção), cruzado/crossover (cada participante recebe as intervenções em sequência, com período de washout), fatorial (testa duas ou mais intervenções ao mesmo tempo), em cluster (randomiza grupos, como hospitais).",
      "Hipóteses: superioridade (o novo é melhor), não inferioridade (o novo não é pior além de uma margem predefinida) e equivalência.",
      "Desfechos: primário (define o tamanho da amostra e a conclusão principal) e secundários; desfechos substitutos (surrogate, ex.: redução tumoral) x desfechos clinicamente relevantes (ex.: sobrevida).",
      "Análise: INTENÇÃO DE TRATAR (ITT — analisa todos conforme o grupo para o qual foram randomizados, preservando a randomização) x POR PROTOCOLO (apenas quem seguiu o protocolo).",
      "Tamanho amostral calculado a priori considerando erro alfa (tipo I, geralmente 5%) e poder (1 − beta, geralmente 80–90%).",
      "Validade interna (resultado correto para os participantes do estudo) x validade externa (generalização). Ensaios explanatórios (condições ideais) x pragmáticos (prática real).",
    ],
    simple:
      "Num bom ensaio, um sorteio decide quem recebe o tratamento novo e quem recebe o controle; assim, os grupos ficam parecidos e a diferença no resultado vem do tratamento. Ninguém pode adivinhar o próximo sorteio (sigilo da alocação), e, se possível, ninguém sabe quem está em qual grupo (cegamento), para que a expectativa não distorça os resultados. No final, analisa-se todo mundo no grupo em que foi sorteado (intenção de tratar), mesmo quem não seguiu o tratamento até o fim.",
    analogy:
      "É como uma prova de degustação justa: os copos são sorteados (randomização), quem serve não sabe a ordem antes (sigilo), quem prova e quem anota não sabem qual é a marca (duplo-cego), e todo copo servido entra na contagem, mesmo os que a pessoa não terminou de beber (intenção de tratar).",
    summary:
      "Randomização com sigilo da alocação reduz o viés de seleção e equilibra confundidores. Cegamento reduz vieses de desempenho e de aferição. A análise por intenção de tratar preserva a randomização, e o desfecho primário define o tamanho da amostra.",
    keyPoints: [
      "Randomização equilibra confundidores conhecidos e desconhecidos.",
      "Sigilo da alocação ≠ cegamento.",
      "ITT = analisa conforme randomizado.",
      "Não inferioridade usa margem predefinida.",
    ],
    traps: [
      "Sigilo da alocação ocorre ANTES da alocação; cegamento, DEPOIS.",
      "Um estudo aberto pode ser randomizado.",
      "Crossover não serve para doenças agudas ou curáveis nem para desfechos irreversíveis.",
    ],
    checks: [
      { q: "Qual a principal vantagem da randomização?", a: "Distribuir de forma equilibrada os fatores de confusão, conhecidos e desconhecidos, reduzindo o viés de seleção." },
      { q: "O que é a análise por intenção de tratar?", a: "Analisar todos os participantes no grupo para o qual foram randomizados, independentemente da adesão." },
    ],
    sources: ["Umscheid CA et al. Key concepts of clinical trials: a narrative review. Postgrad Med. 2011;123(5):194-204", "CONSORT Statement"],
  },
  {
    id: "onco-desenhos",
    tags: ["oncologi", "cancer", "basket", "umbrella", "guarda-chuva", "plataforma", "desenhos inovadores", "recist", "desfechos em oncologia", "protocolo mestre", "medicina de precisao"],
    title: "Ensaios clínicos em oncologia: desfechos e desenhos inovadores",
    raw: [
      "Desfechos em oncologia: SOBREVIDA GLOBAL (SG/OS — tempo até óbito por qualquer causa; padrão-ouro, objetivo e clinicamente relevante); SOBREVIDA LIVRE DE PROGRESSÃO (SLP/PFS — tempo até progressão ou óbito); TAXA DE RESPOSTA OBJETIVA (TRO/ORR — proporção de resposta completa + parcial); duração da resposta; qualidade de vida.",
      "RECIST 1.1 (tumores sólidos): resposta completa (desaparecimento das lesões-alvo); resposta parcial (redução ≥ 30% na soma dos diâmetros); doença progressiva (aumento ≥ 20% na soma, com aumento absoluto ≥ 5 mm, ou novas lesões); doença estável (nem resposta parcial nem progressão).",
      "Medicina de precisão levou aos PROTOCOLOS MESTRES (master protocols), que avaliam várias hipóteses dentro de uma mesma estrutura:",
      "Estudo BASKET (cesta): UM medicamento/alvo molecular testado em VÁRIOS tipos de tumor que compartilham a alteração (ex.: mesma mutação em tumores de órgãos diferentes).",
      "Estudo UMBRELLA (guarda-chuva): UM tipo de tumor, VÁRIOS medicamentos, cada um direcionado a uma alteração molecular diferente.",
      "Estudo PLATAFORMA: estrutura permanente em que braços são incluídos ou encerrados ao longo do tempo conforme resultados interinos, frequentemente com controle compartilhado.",
      "Desenhos ADAPTATIVOS: modificações pré-planejadas com base em dados acumulados (ex.: randomização adaptativa, abandono de braços ineficazes, reestimativa do tamanho amostral), preservando a validade estatística.",
      "Outras tendências (Verweij et al., 2019): estudos de fase I com coortes de expansão e transição fase I/II \"sem costura\" (seamless), escalonamento de dose baseado em modelos, seleção de pacientes por biomarcadores e uso de dados de mundo real.",
    ],
    simple:
      "Em câncer, o desfecho mais importante é viver mais (sobrevida global), mas como isso demora, usamos também medidas mais rápidas: quanto tempo o tumor fica sem crescer (sobrevida livre de progressão) e quantos pacientes têm o tumor diminuído (taxa de resposta, medida pelo RECIST). Com a medicina de precisão surgiram estudos inteligentes: o basket testa um remédio em vários cânceres com a mesma mutação; o umbrella testa vários remédios num mesmo câncer, cada um para uma mutação; e o plataforma é um estudo \"que nunca fecha\", onde braços entram e saem.",
    analogy:
      "Basket é uma chave (remédio) testada em várias portas (tumores) com a mesma fechadura (mutação). Umbrella é um chaveiro com várias chaves para as diferentes fechaduras de uma mesma casa (tipo de tumor). Plataforma é uma vitrine onde produtos entram e saem conforme vendem.",
    summary:
      "Sobrevida global é o desfecho padrão-ouro; SLP e taxa de resposta (RECIST 1.1: RP ≥ 30% de redução, DP ≥ 20% de aumento) são desfechos mais precoces. Protocolos mestres incluem basket (um alvo, vários tumores), umbrella (um tumor, vários alvos) e plataforma (braços entram e saem). Desenhos adaptativos permitem modificações pré-planejadas.",
    keyPoints: [
      "SG = padrão-ouro.",
      "RECIST: RP ≥ 30% de redução; DP ≥ 20% de aumento (e ≥ 5 mm) ou lesão nova.",
      "Basket: 1 droga, vários tumores. Umbrella: 1 tumor, várias drogas.",
      "Adaptativo = mudanças PRÉ-PLANEJADAS.",
    ],
    traps: [
      "Não confundir basket com umbrella (é a pegadinha mais comum).",
      "SLP inclui progressão OU óbito.",
      "Adaptação não planejada no protocolo não é desenho adaptativo.",
    ],
    checks: [
      { q: "Um estudo testa um inibidor de BRAF em melanoma, câncer de tireoide e câncer colorretal com mutação BRAF. Qual o desenho?", a: "Basket." },
      { q: "Pelo RECIST 1.1, qual redução caracteriza resposta parcial?", a: "Redução de pelo menos 30% na soma dos diâmetros das lesões-alvo." },
    ],
    sources: ["Verweij J et al. Innovation in oncology clinical trial design. Cancer Treat Rev. 2019;74:15-20", "RECIST 1.1 (Eisenhauer et al., 2009)"],
  },
  {
    id: "tcle",
    tags: ["consentimento livre", "tcle", "consentimento informado", "processo de consentimento"],
    title: "Termo de Consentimento Livre e Esclarecido: conteúdo e processo",
    raw: [
      "Consentimento é um PROCESSO (não apenas uma assinatura): começa no convite, inclui explicação em linguagem clara e acessível, tempo para refletir e consultar familiares, oportunidade de esclarecer dúvidas, e continua durante todo o estudo.",
      "Deve ocorrer ANTES de qualquer procedimento do estudo (inclusive exames de triagem), livre de coerção ou influência indevida, em local e momento adequados.",
      "Conteúdo mínimo (Res. 466/2012): justificativa, objetivos e procedimentos; métodos e eventuais alternativas de tratamento; possíveis desconfortos e riscos e os benefícios esperados; forma de acompanhamento e assistência e seus responsáveis; garantia de plena liberdade de recusar ou retirar o consentimento a qualquer momento, sem penalização; garantia de sigilo e privacidade; formas de ressarcimento de despesas; garantia de indenização diante de eventuais danos.",
      "Também deve informar contatos do pesquisador e do CEP, e explicar o que é o CEP.",
      "O TCLE NÃO pode conter ressalvas que afastem a responsabilidade do pesquisador ou que impliquem renúncia do participante a seus direitos, incluindo o direito de buscar indenização.",
      "Assinatura (Res. 466/2012): elaborado em duas vias, rubricadas em todas as páginas e assinadas ao final pelo participante (ou responsável legal) e pelo pesquisador responsável (ou pessoa por ele delegada); UMA VIA fica com o participante.",
      "ICH E6(R2): o TCLE e qualquer informação nova devem ser aprovados pelo CEP; o participante deve ser informado prontamente de novas informações relevantes e, se necessário, assinar uma versão atualizada (reconsentimento). Se o participante não sabe ler, uma testemunha imparcial acompanha todo o processo e também assina.",
    ],
    simple:
      "O TCLE não é \"um papel para assinar\": é uma conversa honesta antes de a pessoa entrar no estudo. O pesquisador explica, com palavras simples, para que serve a pesquisa, o que vai acontecer, os riscos e benefícios, e deixa claro que a pessoa pode dizer não ou sair a qualquer momento sem perder o tratamento. A pessoa leva o termo para casa se quiser, tira dúvidas e só então assina. Uma via fica com ela, e se surgir informação nova importante, a conversa recomeça.",
    analogy:
      "É como contratar uma cirurgia com um bom profissional: ele explica o procedimento, os riscos e as alternativas, responde às suas perguntas, dá tempo para você pensar, entrega uma cópia do que foi combinado e deixa claro que você pode desistir. Se algo mudar no plano, ele conversa de novo antes.",
    summary:
      "O consentimento é um processo contínuo, obtido antes de qualquer procedimento, em linguagem acessível e sem coerção. O TCLE informa objetivos, procedimentos, riscos, benefícios, assistência, liberdade de retirada, sigilo, ressarcimento e indenização. É assinado em duas vias, uma fica com o participante, e é reapresentado quando surgem informações relevantes.",
    keyPoints: [
      "Processo contínuo, antes de qualquer procedimento.",
      "Liberdade de recusa e retirada sem penalização.",
      "Duas vias rubricadas e assinadas; uma fica com o participante.",
      "Vedada cláusula de renúncia a direitos.",
      "Analfabeto: testemunha imparcial.",
    ],
    traps: [
      "Exames de triagem também exigem consentimento prévio.",
      "Assinatura do TCLE não retira o direito de buscar indenização.",
      "Retirar o consentimento não exige justificativa e não pode prejudicar a assistência.",
    ],
    checks: [
      { q: "Quando o TCLE deve ser obtido?", a: "Antes de qualquer procedimento relacionado ao estudo, incluindo a triagem." },
      { q: "O que fazer quando surge informação nova relevante sobre o estudo?", a: "Informar prontamente o participante e, se necessário, obter novo consentimento com o TCLE atualizado e aprovado pelo CEP." },
    ],
    sources: ["Resolução CNS nº 466/2012, item IV", "ICH E6(R2), seção 4.8", "Lei nº 14.874/2024"],
  },
  {
    id: "tcle-especiais",
    tags: ["assentimento", "dispensa do tcle", "dispensa do consentimento", "vulnera", "biobanco", "biorrepositorio", "reconsentimento", "situacoes especiais"],
    title: "TCLE em situações especiais: assentimento, vulneráveis, dispensa e biobancos",
    raw: [
      "Vulnerabilidade: estado de pessoas ou grupos com capacidade de autodeterminação reduzida ou impedida, ou de algum modo impedidas de opor resistência (ex.: crianças, pessoas com incapacidade, pacientes em situação crítica, pessoas em dependência hierárquica). Exigem proteção adicional.",
      "Crianças, adolescentes e legalmente incapazes: TCLE assinado pelo representante legal + TERMO DE ASSENTIMENTO do próprio participante, em linguagem adequada à sua compreensão, respeitando sua vontade na medida de sua capacidade.",
      "Dispensa do TCLE: pode ser solicitada ao CEP de forma justificada (ex.: estudos com dados retrospectivos quando é impossível contatar os participantes ou quando o contato traria riscos); só vale após aprovação do CEP.",
      "Situações de emergência (ICH E6): quando não é possível obter consentimento prévio, o protocolo aprovado pelo CEP deve prever o procedimento; o consentimento do participante ou do representante legal é buscado assim que possível.",
      "Participante que se torna incapaz durante o estudo ou que atinge a maioridade: o processo de consentimento é revisto (novo consentimento do representante legal ou do próprio participante).",
      "Material biológico e dados (biobancos e biorrepositórios, Res. CNS 441/2011): o armazenamento exige consentimento específico; o uso futuro em nova pesquisa precisa de aprovação ética e, em regra, de novo consentimento (ou dispensa justificada aprovada pelo CEP). O participante pode retirar o consentimento de armazenamento.",
      "Pesquisa em oncologia: atenção à vulnerabilidade de pacientes com doença avançada (esperança de benefício e \"equívoco terapêutico\" — confundir pesquisa com tratamento); deixar claros os objetivos do estudo e as alternativas de tratamento.",
    ],
    simple:
      "Algumas pessoas precisam de proteção extra para consentir. Quando o participante é criança ou não pode decidir sozinho, o responsável legal assina o TCLE, mas o participante também é ouvido e assina o termo de assentimento, numa linguagem que ele entenda. Às vezes o comitê de ética dispensa o TCLE, por exemplo em estudos com prontuários antigos de pacientes que não podem mais ser localizados, mas só com aprovação. E guardar sangue ou tecido para pesquisas futuras exige um consentimento específico para isso.",
    analogy:
      "É como uma excursão escolar: os pais assinam a autorização (TCLE do responsável), mas a criança também precisa querer ir (assentimento). Se a escola quiser guardar os desenhos dela para uma exposição futura, precisa pedir permissão específica para isso.",
    summary:
      "Vulneráveis recebem proteção adicional; para crianças e incapazes, há TCLE do representante legal e assentimento do participante. A dispensa do TCLE exige justificativa e aprovação do CEP. O armazenamento de material biológico requer consentimento específico, e o uso futuro depende de nova aprovação.",
    keyPoints: [
      "Assentimento = concordância do participante incapaz/menor, além do TCLE do responsável.",
      "Dispensa do TCLE só com aprovação do CEP.",
      "Biobanco: consentimento específico para armazenamento (Res. 441/2011).",
      "Equívoco terapêutico: confundir pesquisa com tratamento.",
    ],
    traps: [
      "O assentimento NÃO substitui o TCLE do representante legal.",
      "Não é o pesquisador quem decide dispensar o TCLE: é o CEP.",
      "Ao atingir a maioridade, o participante deve dar o próprio consentimento.",
    ],
    checks: [
      { q: "Em pesquisa com adolescente de 14 anos, quais documentos são necessários?", a: "TCLE assinado pelo responsável legal e Termo de Assentimento do adolescente." },
      { q: "Quem autoriza a dispensa do TCLE?", a: "O Comitê de Ética em Pesquisa, mediante justificativa." },
    ],
    sources: ["Resolução CNS nº 466/2012, itens II e IV", "Resolução CNS nº 441/2011 (biobancos e biorrepositórios)", "ICH E6(R2), seção 4.8"],
  },
];

// Edital pronto (com subtemas para distribuir o estudo em mais dias), a partir do conteúdo programático enviado.
export const EDITAL_PRESETS = [
  {
    id: "inca-214",
    label: "INCA Fellow 214 — Pesquisa clínica em câncer (plano detalhado)",
    text: `ÉTICA EM PESQUISA
1. Marcos históricos da ética em pesquisa: Nuremberg, Helsinque e Belmont
2. Declaração Universal sobre Bioética e Direitos Humanos (UNESCO, 2005)
3. Resolução CNS nº 466/2012 — ética em pesquisa com seres humanos
FLUXO ÉTICO-REGULATÓRIO
4. Fluxo ético-regulatório: Sistema CEP/Conep, Plataforma Brasil e ANVISA
5. Lei nº 14.874/2024 — pesquisa com seres humanos e Sistema Nacional de Ética em Pesquisa
6. Boas Práticas Clínicas — ICH E6(R2): princípios e responsabilidades
7. Condução de ensaios clínicos: eventos adversos, monitoria e documentação
TIPOS DE ESTUDOS CLÍNICOS
8. Tipos de estudos clínicos: observacionais e experimentais
9. Fases da pesquisa clínica (0 a IV)
10. Ensaio clínico randomizado: randomização, cegamento, controle e análise
11. Ensaios clínicos em oncologia: desfechos e desenhos inovadores
TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO
12. Termo de Consentimento Livre e Esclarecido: conteúdo e processo
13. TCLE em situações especiais: assentimento, vulneráveis, dispensa e biobancos`,
  },
];

const ETICA = ["etica em pesquisa", "nuremberg", "helsinque", "belmont", "marcos historicos"];
const UNESCO = ["unesco", "declaracao universal sobre bioetica", "bioetica e direitos humanos"];
const RES466 = ["466", "etica em pesquisa", "pesquisa com seres humanos"];
const FLUXO = ["fluxo etico", "regulatorio", "cep/conep", "conep", "plataforma brasil", "comite de etica"];
const GCP = ["ich e6", "e6(r2)", "boas praticas clinicas", "good clinical practice"];
const CONDUCAO = ["eventos adversos", "evento adverso grave", "monitoria", "conducao de ensaios", "conducao do estudo"];
const TIPOS = ["tipos de estudo", "tipos de estudos", "estudos clinicos", "observaciona", "coorte", "caso-controle", "delineamento"];
const FASES = ["fases", "fase i", "fase 1", "desenvolvimento clinico", "tipos de estudos"];
const ECR = ["randomiza", "cegamento", "ensaio clinico randomizado", "intencao de tratar", "tipos de estudos"];
const ONCO = ["oncologi", "basket", "umbrella", "desenhos inovadores", "recist", "desfechos em oncologia"];
const TCLE = ["consentimento livre", "tcle", "consentimento informado"];
const ESPECIAIS = ["assentimento", "dispensa do tcle", "vulnera", "biobanco", "situacoes especiais", "consentimento livre"];

export const PESQUISA_QUESTIONS = [
  {
    tags: ETICA,
    q: "O documento elaborado após o julgamento dos médicos nazistas, que estabeleceu o consentimento voluntário do participante como absolutamente essencial, é:",
    options: ["A Declaração de Helsinque.", "O Relatório Belmont.", "O Código de Nuremberg.", "A Declaração Universal sobre Bioética e Direitos Humanos."],
    answer: 2,
    explain: "O Código de Nuremberg (1947) é o marco que tornou o consentimento voluntário essencial. Helsinque (1964) é da Associação Médica Mundial; Belmont (1979) é dos EUA; a Declaração da UNESCO é de 2005.",
  },
  {
    tags: ETICA,
    q: "Os princípios éticos estabelecidos pelo Relatório Belmont (1979) são:",
    options: [
      "Autonomia, beneficência, não maleficência e justiça.",
      "Respeito às pessoas, beneficência e justiça.",
      "Dignidade, solidariedade e responsabilidade social.",
      "Sigilo, privacidade e confidencialidade.",
    ],
    answer: 1,
    explain: "Belmont traz três princípios: respeito às pessoas, beneficência e justiça. Os quatro princípios (autonomia, beneficência, não maleficência e justiça) são do principialismo de Beauchamp e Childress.",
  },
  {
    tags: UNESCO,
    q: "Sobre a Declaração Universal sobre Bioética e Direitos Humanos (UNESCO, 2005), é CORRETO afirmar:",
    options: [
      "Restringe-se à ética da relação entre profissional de saúde e paciente.",
      "Os interesses e o bem-estar do indivíduo devem ter prioridade sobre o interesse exclusivo da ciência ou da sociedade.",
      "Foi elaborada e aprovada pela Associação Médica Mundial.",
      "Dispensa o consentimento em pesquisas de risco mínimo.",
    ],
    answer: 1,
    explain: "O art. 3º da Declaração dá prioridade ao indivíduo sobre o interesse exclusivo da ciência ou da sociedade. A Declaração amplia a bioética para as dimensões sociais e ambientais e é da UNESCO.",
  },
  {
    tags: RES466,
    q: "Segundo a Resolução CNS nº 466/2012, a compensação material, exclusivamente de despesas do participante e de seus acompanhantes, como transporte e alimentação, denomina-se:",
    options: ["Indenização.", "Remuneração.", "Ressarcimento.", "Assistência integral."],
    answer: 2,
    explain: "Ressarcimento compensa despesas decorrentes da participação. Indenização é a cobertura para reparação de dano causado pela pesquisa.",
  },
  {
    tags: RES466,
    q: "De acordo com a Resolução CNS nº 466/2012, o pesquisador responsável deve manter os dados da pesquisa em arquivo, sob sua guarda, por:",
    options: ["2 anos após o término da pesquisa.", "5 anos após o término da pesquisa.", "10 anos após o término da pesquisa.", "20 anos após a publicação dos resultados."],
    answer: 1,
    explain: "A Res. 466/2012 determina a guarda dos dados, em arquivo físico ou digital, por 5 anos após o término da pesquisa.",
  },
  {
    tags: FLUXO,
    q: "O Comitê de Ética em Pesquisa (CEP) é um colegiado interdisciplinar e independente, de relevância pública, de caráter:",
    options: ["Exclusivamente consultivo.", "Consultivo, deliberativo e educativo.", "Fiscalizatório e punitivo.", "Normativo e de regulação sanitária."],
    answer: 1,
    explain: "O CEP tem caráter consultivo, deliberativo e educativo, e existe para defender os interesses dos participantes em sua integridade e dignidade.",
  },
  {
    tags: FLUXO,
    q: "Durante um ensaio clínico em andamento, o patrocinador propõe uma emenda que altera os critérios de inclusão. A conduta CORRETA é:",
    options: [
      "Implementar a emenda e comunicar ao CEP no relatório final.",
      "Submeter a emenda ao CEP e implementá-la somente após a aprovação.",
      "Implementar a emenda após concordância do monitor do estudo.",
      "Implementar a emenda desde que o investigador principal concorde.",
    ],
    answer: 1,
    explain: "Emendas devem ser aprovadas pelo CEP antes de implementadas. A exceção são as alterações necessárias para eliminar risco imediato ao participante.",
  },
  {
    tags: ["14.874", "14874", "sistema nacional de etica em pesquisa", "fluxo etico", "regulatorio"],
    q: "A Lei nº 14.874, de 28 de maio de 2024:",
    options: [
      "Institui o Sistema Nacional de Ética em Pesquisa com Seres Humanos.",
      "Extingue a exigência do Termo de Consentimento Livre e Esclarecido.",
      "Extingue os Comitês de Ética em Pesquisa.",
      "Transfere a análise ética dos protocolos para a ANVISA.",
    ],
    answer: 0,
    explain: "A lei dispõe sobre a pesquisa com seres humanos e institui o Sistema Nacional de Ética em Pesquisa com Seres Humanos, integrado por uma instância nacional e pelos CEPs.",
  },
  {
    tags: GCP,
    q: "Segundo a ICH E6(R2), constitui princípio das Boas Práticas Clínicas:",
    options: [
      "Os interesses da ciência prevalecem quando o benefício social esperado for elevado.",
      "O consentimento pode ser obtido após os exames de triagem.",
      "Os direitos, a segurança e o bem-estar dos participantes prevalecem sobre os interesses da ciência e da sociedade.",
      "O investigador pode transferir ao coordenador a responsabilidade pelo estudo.",
    ],
    answer: 2,
    explain: "Os direitos, a segurança e o bem-estar dos participantes são a consideração mais importante. O consentimento é obtido antes de qualquer procedimento, e o investigador delega tarefas, mas não a responsabilidade.",
  },
  {
    tags: GCP,
    q: "No contexto da qualidade dos dados-fonte em pesquisa clínica, o acrônimo ALCOA significa:",
    options: [
      "Auditado, Liberado, Conferido, Organizado e Arquivado.",
      "Atribuível, Legível, Contemporâneo, Original e Exato (Accurate).",
      "Anônimo, Lacrado, Confidencial, Objetivo e Autorizado.",
      "Aprovado, Legal, Completo, Oficial e Assinado.",
    ],
    answer: 1,
    explain: "ALCOA: Atribuível, Legível, Contemporâneo, Original e Exato. O ALCOA+ acrescenta completo, consistente, duradouro e disponível.",
  },
  {
    tags: CONDUCAO,
    q: "É CORRETO afirmar sobre evento adverso (EA) em ensaios clínicos:",
    options: [
      "Só é considerado EA quando há relação causal comprovada com o produto sob investigação.",
      "É qualquer ocorrência médica desfavorável no participante, sem necessariamente ter relação causal com o produto.",
      "Todo EA de intensidade severa é, por definição, um evento adverso grave.",
      "EAs que ocorrem após a primeira dose não precisam ser registrados.",
    ],
    answer: 1,
    explain: "EA não exige causalidade. A intensidade (severo) é diferente da gravidade regulatória (óbito, risco de vida, hospitalização, incapacidade, anomalia congênita, evento médico importante).",
  },
  {
    tags: CONDUCAO,
    q: "Participante de ensaio clínico é internado por pneumonia durante o estudo. Segundo a ICH E6(R2), o investigador deve:",
    options: [
      "Registrar o evento apenas no relatório final.",
      "Comunicar o evento adverso grave ao patrocinador imediatamente, seguido de relatório detalhado.",
      "Aguardar a confirmação da relação causal antes de notificar.",
      "Retirar o participante do estudo sem comunicar o patrocinador.",
    ],
    answer: 1,
    explain: "Hospitalização é critério de gravidade. EAGs devem ser comunicados imediatamente ao patrocinador (salvo os que o protocolo dispense), independentemente da causalidade.",
  },
  {
    tags: TIPOS,
    q: "Estudo que seleciona pacientes com câncer de pulmão e indivíduos sem a doença para investigar exposições passadas ao tabagismo é do tipo:",
    options: ["Coorte prospectiva.", "Caso-controle.", "Ensaio clínico randomizado.", "Transversal."],
    answer: 1,
    explain: "O caso-controle parte do desfecho (casos e controles) e investiga exposições passadas. A coorte parte da exposição para o desfecho.",
  },
  {
    tags: FASES,
    q: "Em oncologia, o principal objetivo de um estudo de fase I é:",
    options: [
      "Comparar o novo tratamento ao tratamento padrão em larga escala.",
      "Avaliar segurança e tolerabilidade e definir a dose a ser usada nas fases seguintes.",
      "Realizar farmacovigilância após a comercialização.",
      "Confirmar a eficácia para fins de registro sanitário.",
    ],
    answer: 1,
    explain: "A fase I avalia segurança, farmacocinética e dose (DMT ou dose recomendada para a fase II). Em oncologia, costuma incluir pacientes com câncer, não voluntários sadios.",
  },
  {
    tags: FASES,
    q: "No escalonamento de dose \"3+3\", ocorrem 2 toxicidades limitantes de dose (DLT) entre os 3 primeiros pacientes de um nível. A conduta é:",
    options: [
      "Escalonar para o próximo nível de dose.",
      "Incluir mais 3 pacientes no mesmo nível.",
      "Considerar a dose excedida; a dose máxima tolerada é o nível anterior.",
      "Repetir o mesmo nível com 6 novos pacientes.",
    ],
    answer: 2,
    explain: "No 3+3: 0/3 DLT → escala; 1/3 → amplia para 6; ≥ 2 DLT → dose excedida, e a DMT é o nível de dose anterior.",
  },
  {
    tags: ECR,
    q: "O procedimento que impede que o profissional que inclui o participante consiga prever o grupo para o qual ele será alocado denomina-se:",
    options: ["Cegamento duplo.", "Sigilo da alocação.", "Estratificação.", "Período de washout."],
    answer: 1,
    explain: "O sigilo da alocação (allocation concealment) protege a randomização ANTES da alocação; o cegamento atua DEPOIS, impedindo que se saiba o grupo durante o estudo.",
  },
  {
    tags: ECR,
    q: "A análise por intenção de tratar (ITT) consiste em:",
    options: [
      "Analisar apenas os participantes que completaram o tratamento conforme o protocolo.",
      "Analisar todos os participantes no grupo para o qual foram randomizados, independentemente da adesão.",
      "Excluir da análise os participantes com eventos adversos.",
      "Reagrupar os participantes conforme o tratamento efetivamente recebido.",
    ],
    answer: 1,
    explain: "A ITT preserva os benefícios da randomização. A análise por protocolo considera apenas quem seguiu o protocolo.",
  },
  {
    tags: ONCO,
    q: "Ensaio clínico que avalia um mesmo medicamento em diferentes tipos de tumor que compartilham a mesma alteração molecular é denominado:",
    options: ["Umbrella (guarda-chuva).", "Basket (cesta).", "Cruzado (crossover).", "Fatorial."],
    answer: 1,
    explain: "Basket: um alvo/medicamento, vários tipos de tumor. Umbrella: um tipo de tumor, vários medicamentos para alterações moleculares diferentes.",
  },
  {
    tags: ONCO,
    q: "Pelos critérios RECIST 1.1, a resposta parcial corresponde a:",
    options: [
      "Redução de pelo menos 30% na soma dos diâmetros das lesões-alvo.",
      "Redução de pelo menos 50% no maior diâmetro de uma lesão.",
      "Aumento de até 20% na soma dos diâmetros.",
      "Desaparecimento de todas as lesões-alvo.",
    ],
    answer: 0,
    explain: "RECIST 1.1: resposta parcial = redução ≥ 30%; progressão = aumento ≥ 20% (com ≥ 5 mm absolutos) ou nova lesão; resposta completa = desaparecimento das lesões-alvo.",
  },
  {
    tags: TCLE,
    q: "Segundo a Resolução CNS nº 466/2012, o Termo de Consentimento Livre e Esclarecido deve:",
    options: [
      "Ser assinado em via única, que fica arquivada com o pesquisador.",
      "Conter cláusula que isente o pesquisador de responsabilidade por danos.",
      "Ser elaborado em duas vias, rubricadas em todas as páginas e assinadas, ficando uma via com o participante.",
      "Ser obtido somente após a realização dos exames de triagem.",
    ],
    answer: 2,
    explain: "O TCLE é elaborado em duas vias, rubricadas e assinadas, e uma fica com o participante. São vedadas ressalvas que afastem a responsabilidade do pesquisador, e o consentimento é obtido antes de qualquer procedimento.",
  },
  {
    tags: ESPECIAIS,
    q: "Em pesquisa que inclui adolescente de 15 anos, deve-se obter:",
    options: [
      "Apenas o TCLE assinado pelo adolescente.",
      "Apenas o TCLE assinado pelo responsável legal.",
      "O TCLE do responsável legal e o Termo de Assentimento do adolescente.",
      "Autorização judicial em todos os casos.",
    ],
    answer: 2,
    explain: "Para crianças, adolescentes e legalmente incapazes: TCLE do representante legal + Termo de Assentimento do participante, em linguagem adequada à sua compreensão.",
  },
  {
    tags: ESPECIAIS,
    q: "A dispensa do Termo de Consentimento Livre e Esclarecido:",
    options: [
      "Pode ser decidida pelo pesquisador responsável em estudos retrospectivos.",
      "Deve ser solicitada de forma justificada e aprovada pelo Comitê de Ética em Pesquisa.",
      "É automática em pesquisas com dados de prontuário.",
      "É vedada em qualquer circunstância.",
    ],
    answer: 1,
    explain: "A dispensa do TCLE é possível em situações justificadas (ex.: impossibilidade de contato com os participantes), mas só vale com aprovação do CEP.",
  },
];
