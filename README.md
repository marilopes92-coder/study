# 🩺 Plantão de Estudos

App de estudo diário para **enfermeiros que estão se preparando para concurso**.
Você cola o conteúdo programático do edital e o app monta a rotina de estudos.

## O que o app faz

| Recurso | Como funciona |
|---|---|
| **Um tema por dia** | O edital é dividido em disciplinas e temas. A cada dia o app traz o próximo tema pendente (dá para trocar ou adiantar). |
| **Aula do dia (Feynman)** | O próprio app ensina o tema: 1) conteúdo bruto (o que a banca cobra), 2) explicação simples, 3) lacunas e pegadinhas, 4) analogia e resumo em 3 frases. Depois, perguntas de "Confira se entendeu". Explicar com as próprias palavras é opcional. |
| **Checklist do edital** | Todos os temas, agrupados por disciplina, com barra de progresso. Marque como feito ao concluir. |
| **Tarefas diárias** | Leitura (pomodoro), Feynman, questões de múltipla escolha, questão discursiva e revisões espaçadas (1, 7 e 30 dias). |
| **Questões** | Banco offline com questões no estilo das bancas (SUS, ética, Lei 7.498, processo de enfermagem, NR-32, segurança do paciente, cálculo de medicação, PCR, LPP, imunização, etc.) + discursivas com checklist de autocorreção. |
| **Lembretes diários** | Notificações no horário escolhido e botão **📅 Adicionar à agenda**, que cria um evento diário com alarme no calendário do celular. |
| **Coach motivacional** | Mensagens que mudam conforme sua sequência de dias, seu progresso, dias sem estudar e a proximidade da prova. |

### Aulas offline

A biblioteca `js/lessons.js` traz 29 aulas prontas, que funcionam sem internet, sobre os temas mais cobrados: SUS (Leis 8.080 e 8.142, princípios, PNAB),
Lei 7.498, Código de Ética, Processo de Enfermagem (Res. COFEN 736/2024), NR-32, controle de infecção, segurança do paciente,
cirurgia segura, cálculo e administração de medicamentos, diabetes, hipertensão, lesão por pressão, PCR, Glasgow, choque e sepse,
imunização, vigilância epidemiológica, pré-natal, saúde da criança, sinais vitais, sondagens, CME, saúde mental e tuberculose.

Em `js/lessons-pesquisa.js` há também 13 aulas e 22 questões de **Pesquisa Clínica** (edital INCA Fellow 214: ética em pesquisa,
fluxo ético-regulatório, tipos de estudos clínicos e TCLE), baseadas na Lei 14.874/2024, Res. CNS 466/2012, ICH E6(R2),
Declaração da UNESCO (2005), Umscheid et al. (2011) e Verweij et al. (2019). O edital está disponível como **edital pronto**
na tela inicial e em Ajustes.

**Banco discursivo (`js/discursivas-pesquisa.js`)**: 30 questões discursivas com resposta-modelo (gabarito) e espelho de
correção (20 pontos cada), incluindo 3 com texto e enunciado em inglês, como na prova do INCA. Na aba Questões há o
**simulado discursivo** (5 questões = 100 pontos: uma por tema do edital + uma em inglês), o banco completo com filtro
por tema e autoavaliação marcando os itens do espelho.

### IA opcional (Claude)

Em **Ajustes**, você pode colar uma chave da API do Claude ([console.anthropic.com](https://console.anthropic.com)). Com ela, o app:

- prepara **automaticamente a aula completa** de qualquer tema do edital que não esteja na biblioteca offline;
- **avalia sua explicação Feynman** (nota, acertos, lacunas e versão simplificada);
- cria **questões inéditas** de múltipla escolha e discursivas para *qualquer* tema do edital;
- **corrige sua resposta discursiva** como uma banca.

A chave fica salva só no seu aparelho e é enviada apenas à API da Anthropic. Sem chave, tudo funciona com o banco offline.
As chamadas usam fallback automático de modelo do lado do servidor (`fallbacks: "default"`) caso uma solicitação seja recusada.

> ⚠️ Conteúdos gerados por IA podem conter erros: confira sempre na lei, resolução ou manual oficial cobrado no edital.

## Como usar

É um PWA (site instalável), sem build e sem servidor próprio:

```bash
npm start          # sobe em http://localhost:8080 (python3 -m http.server)
npm test           # testes das regras de negócio (Node 18+)
```

Para usar no celular, publique a pasta em qualquer hospedagem estática com HTTPS (GitHub Pages, Netlify, Vercel)
e, no navegador do celular, toque em **Adicionar à tela inicial**.

### Sobre os lembretes

- **Notificações do navegador:** disparam no horário escolhido enquanto o app está aberto; no Android, com o app instalado, o navegador também verifica o lembrete em segundo plano.
- **Agenda (.ics):** a forma mais confiável de receber o lembrete todo dia com o app fechado, inclusive no iPhone.

## Estrutura

```
index.html            casca do app e navegação
styles.css            estilos (modo claro/escuro, mobile first)
sw.js                 service worker: offline + lembrete em segundo plano
js/parser.js          transforma o edital em disciplinas/temas
js/planner.js         tema do dia, sequência, revisões, tarefas, coach
js/lessons.js         biblioteca de aulas offline no formato Feynman
js/lessons-pesquisa.js aulas, questões e edital pronto de Pesquisa Clínica (INCA 214)
js/discursivas-pesquisa.js banco de questões discursivas com gabarito e espelho (INCA 214)
js/data.js            banco de questões, frases do coach, etapas Feynman
js/ai.js              integração opcional com a API do Claude
js/notify.js          notificações e arquivo .ics
js/app.js             interface
tests/                testes (node --test)
```

Todos os dados ficam no `localStorage` do aparelho. Use **Ajustes → Backup** para exportar/importar o progresso.
