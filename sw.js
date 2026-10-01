// Service worker: funciona offline e exibe o lembrete diário.
const CACHE = "plantao-v3";
const ASSETS = [
  "./", "index.html", "styles.css", "manifest.webmanifest", "icon.svg",
  "js/app.js", "js/parser.js", "js/planner.js", "js/data.js", "js/lessons.js", "js/lessons-pesquisa.js", "js/ai.js", "js/notify.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // Rede primeiro (para receber atualizações), cache como reserva offline.
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("index.html"))),
  );
});

// Configuração do lembrete recebida da página (guardada no Cache Storage para sobreviver ao SW dormir).
self.addEventListener("message", (e) => {
  if (e.data?.type === "reminder-config") {
    e.waitUntil((async () => {
      const cache = await caches.open(CACHE);
      const prev = await cache.match("reminder-config").then((r) => (r ? r.json() : {}));
      const cfg = { ...prev, time: e.data.time, message: e.data.message };
      await cache.put("reminder-config", new Response(JSON.stringify(cfg)));
    })());
  }
});

// Android (app instalado): verificação periódica em segundo plano.
self.addEventListener("periodicsync", (e) => {
  if (e.tag === "lembrete-diario") e.waitUntil(checkReminder());
});

async function checkReminder() {
  const cache = await caches.open(CACHE);
  const res = await cache.match("reminder-config");
  if (!res) return;
  const cfg = await res.json();
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const [h, m] = cfg.time.split(":").map(Number);
  if (cfg.lastShown === today || now.getHours() * 60 + now.getMinutes() < h * 60 + m) return;
  await self.registration.showNotification("Hora de estudar! 📚", {
    body: cfg.message || "Seu tema do dia está esperando.",
    icon: "icon.svg",
    tag: "lembrete-estudo",
    data: { url: "./#hoje" },
  });
  cfg.lastShown = today;
  await cache.put("reminder-config", new Response(JSON.stringify(cfg)));
}

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: "window" }).then((list) => {
      const open = list.find((c) => "focus" in c);
      return open ? open.focus() : self.clients.openWindow(e.notification.data?.url || "./");
    }),
  );
});
