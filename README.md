# 🩺 Plantão de Estudos

App de estudo diário para **enfermeiros que estão se preparando para concurso**.
Você cola o conteúdo programático do edital e o app monta a rotina de estudos.

## O que o app faz

| Recurso | Como funciona |
|---|---|
| **Um tema por dia** | O edital é dividido em disciplinas e temas. A cada dia o app traz o próximo tema pendente (dá para trocar ou adiantar). |
| **Técnica Feynman** | 4 etapas guiadas: 1) estudar o conteúdo bruto, 2) explicar com suas palavras, 3) identificar lacunas, 4) simplificar e criar uma analogia. |
| **Checklist do edital** | Todos os temas, agrupados por disciplina, com barra de progresso. Marque como feito ao concluir. |
| **Tarefas diárias** | Leitura (pomodoro), Feynman, questões de múltipla escolha, questão discursiva e revisões espaçadas (1, 7 e 30 dias). |
| **Questões** | Banco offline com questões no estilo das bancas (SUS, ética, Lei 7.498, processo de enfermagem, NR-32, segurança do paciente, cálculo de medicação, PCR, LPP, imunização, etc.) + discursivas com checklist de autocorreção. |
| **Lembretes diários** | Notificações no horário escolhido e botão **📅 Adicionar à agenda**, que cria um evento diário com alarme no calendário do celular. |
| **Coach motivacional** | Mensagens que mudam conforme sua sequência de dias, seu progresso, dias sem estudar e a proximidade da prova. |

### IA opcional (Claude)

Em **Ajustes**, você pode colar uma chave da API do Claude ([console.anthropic.com](https://console.anthropic.com)). Com ela, o app:

- gera o **conteúdo bruto** do tema (resumo, pontos que mais caem, pegadinhas e fontes);
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
js/data.js            banco de questões, frases do coach, etapas Feynman
js/ai.js              integração opcional com a API do Claude
js/notify.js          notificações e arquivo .ics
js/app.js             interface
tests/                testes (node --test)
```

Todos os dados ficam no `localStorage` do aparelho. Use **Ajustes → Backup** para exportar/importar o progresso.
