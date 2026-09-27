// Lembretes diários.
// 1) Notificações do navegador via Service Worker (disparam enquanto o app/navegador estiver ativo;
//    em Android com o app instalado, o Periodic Background Sync verifica o lembrete em segundo plano).
// 2) Arquivo .ics para adicionar um evento recorrente com alarme à agenda do celular —
//    é a forma mais confiável de receber o lembrete mesmo com o app fechado.

let timer = null;

export function notificationsSupported() {
  return "Notification" in window && "serviceWorker" in navigator;
}

export async function requestPermission() {
  if (!notificationsSupported()) return "unsupported";
  if (Notification.permission === "granted") return "granted";
  return Notification.requestPermission();
}

export async function showNotification(title, body) {
  if (!notificationsSupported() || Notification.permission !== "granted") return false;
  const reg = await navigator.serviceWorker.ready;
  await reg.showNotification(title, {
    body,
    icon: "icon.svg",
    badge: "icon.svg",
    tag: "lembrete-estudo",
    renotify: true,
    data: { url: "./#hoje" },
  });
  return true;
}

function msUntil(time) {
  const [h, m] = time.split(":").map(Number);
  const now = new Date();
  const next = new Date(now);
  next.setHours(h, m, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1);
  return next - now;
}

// Agenda o próximo lembrete enquanto a página estiver aberta e registra a sincronização periódica.
export async function scheduleReminder(time, getMessage, alreadyStudiedToday) {
  clearTimeout(timer);
  if (!time) return;
  timer = setTimeout(async () => {
    if (!alreadyStudiedToday()) await showNotification("Hora de estudar! 📚", getMessage());
    scheduleReminder(time, getMessage, alreadyStudiedToday);
  }, msUntil(time));

  try {
    const reg = await navigator.serviceWorker?.ready;
    reg?.active?.postMessage({ type: "reminder-config", time, message: getMessage() });
    if (reg && "periodicSync" in reg) {
      const status = await navigator.permissions.query({ name: "periodic-background-sync" });
      if (status.state === "granted") {
        await reg.periodicSync.register("lembrete-diario", { minInterval: 60 * 60 * 1000 });
      }
    }
  } catch {
    // Periodic Background Sync não é suportado em todos os navegadores; o .ics cobre esse caso.
  }
}

export function buildICS(time, examTitle) {
  const [h, m] = time.split(":");
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const summary = `Estudo diário${examTitle ? " — " + examTitle : ""}`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Plantao de Estudos//PT-BR",
    "BEGIN:VEVENT",
    `UID:estudo-diario-${stamp}@plantao-de-estudos`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${ymd}T${h}${m}00`,
    "DURATION:PT1H",
    "RRULE:FREQ=DAILY",
    `SUMMARY:${summary}`,
    "DESCRIPTION:Abra o Plantão de Estudos: tema do dia\\, técnica Feynman e questões.",
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    "DESCRIPTION:Hora de estudar! Seu tema do dia está esperando.",
    "TRIGGER:PT0M",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
