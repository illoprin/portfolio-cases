// page content data
const data = {
  nav: [
    { t: "Коллекция", h: "#catalog" },
    { t: "Как работаем", h: "#process" },
    { t: "Проекты", h: "#projects" },
    { t: "FAQ", h: "#faq" },
  ],
  benefits: [
    ["⌂", "Собственное производство", "Без посредников и лишних наценок."],
    ["0%", "Рассрочка 0%", "Без банка и переплаты."],
    ["✦", "Бесплатный замер", "Приезжаем и проектируем у вас дома."],
    ["✓", "Гарантия 5 лет", "Отвечаем за результат после установки."],
    ["↗", "Под ключ", "Доставка, подъём и профессиональная сборка."],
  ],
  catalog: [
    [
      "Евро",
      "Спокойная классика в современном прочтении.",
      "./images/image4.webp",
    ],
    [
      "Фьюжн",
      "Контраст материалов и выразительные детали.",
      "./images/image5.webp",
    ],
    [
      "Флэт",
      "Чистые линии и максимум воздуха.",
      "./images/image6.webp",
    ],
    [
      "Ницца",
      "Тёплая кухня для долгих семейных вечеров.",
      "./images/image7.webp",
    ],
    [
      "Глетчер",
      "Сдержанная геометрия и холодные оттенки.",
      "./images/image8.webp",
    ],
    [
      "Лофт",
      "Фактурность, металл и характер.",
      "./images/image9.webp",
    ],
    [
      "Сканди",
      "Свет, дерево и функциональный минимализм.",
      "./images/image10.webp",
    ],
    [
      "Прага",
      "Элегантные фасады и мягкие акценты.",
      "./images/image11.webp",
    ],
    [
      "Валерия",
      "Выразительная классика без перегруза.",
      "./images/image12.webp",
    ],
  ],
  steps: [
    ["01", "Заявка / звонок", "Рассказываете о задаче и пожеланиях."],
    ["02", "Бесплатный замер", "Замеряем помещение и учитываем нюансы."],
    ["03", "3D-проект и смета", "Видите будущую кухню и финальную стоимость."],
    ["04", "Производство", "Изготавливаем мебель на своей фабрике."],
    [
      "05",
      "Доставка и сборка",
      "Привозим, устанавливаем и сдаём готовую кухню.",
    ],
  ],
  projects: [
    [
      "Тёплый минимализм",
      "11,4 м²",
      "от 248 000 ₽",
      "./images/image13.webp",
    ],
    [
      "Светлый сканди",
      "9,8 м²",
      "от 219 000 ₽",
      "./images/image14.webp",
    ],
    [
      "Графичный лофт",
      "14,2 м²",
      "от 286 000 ₽",
      "./images/image15.webp",
    ],
  ],
  reviews: [
    [
      "★★★★★",
      "«От первого замера до сборки всё прошло спокойно и понятно. Особенно понравилось, что мы заранее увидели кухню в 3D.»",
      "Анна и Михаил · Нижний Новгород",
    ],
    [
      "★★★★★",
      "«Получили именно то, что хотели. Фасады выглядят дорого, а по цене получилось заметно приятнее салонных вариантов.»",
      "Екатерина · Нижний Новгород",
    ],
    [
      "★★★★★",
      "«Дизайнер предложил несколько решений, ничего не навязывал. Кухней пользуемся уже несколько месяцев — всё отлично.»",
      "Илья · Нижний Новгород",
    ],
  ],
  faq: [
    [
      "Сколько ждать готовую кухню?",
      "Срок зависит от выбранных материалов и загрузки производства. Точные сроки фиксируем после утверждения проекта.",
    ],
    [
      "Есть ли рассрочка?",
      "Да, доступна рассрочка 0% по условиям программы. Подробности расскажет менеджер после расчёта.",
    ],
    [
      "Что входит в стоимость?",
      "В проекте фиксируем комплектацию, фасады, фурнитуру и дополнительные работы. Доставка и сборка рассчитываются прозрачно.",
    ],
    [
      "Можно ли изменить проект?",
      "Конечно. До запуска в производство можно менять планировку, материалы, фурнитуру и детали проекта.",
    ],
  ],
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

// render page sections from the content data
$("#nav").innerHTML = data.nav
  .map((x) => `<a href="${x.h}">${x.t}</a>`)
  .join("");
$("#benefits").innerHTML = data.benefits
  .map(
    (x) =>
      `<article class="benefit reveal"><div class="benefit__icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`,
  )
  .join("");
$("#catalogTrack").innerHTML = data.catalog
  .map(
    (x, i) =>
      `<article class="catalog-card reveal"><img src="${x[2]}" alt="${x[0]}" loading="lazy"><div class="catalog-card__copy"><small>Коллекция 0${i + 1}</small><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`,
  )
  .join("");
$("#steps").innerHTML = data.steps
  .map(
    (x) =>
      `<article class="step reveal"><span class="step__num">${x[0]}</span><div><h3>${x[1]}</h3><p>${x[2]}</p></div><span class="step__arrow">↗</span></article>`,
  )
  .join("");
$("#projects").innerHTML = data.projects
  .map(
    (x) =>
      `<article class="project reveal"><img src="${x[3]}" alt="${x[0]}" loading="lazy"><div class="project__copy"><div class="project__meta"><span>${x[1]}</span><span class="project__price">${x[2]}</span></div><h3>${x[0]}</h3><div class="project__meta"><span>Кухня под ключ</span><span>Рассчитать похожую →</span></div></div></article>`,
  )
  .join("");
$("#reviews").innerHTML = data.reviews
  .map(
    (x) =>
      `<article class="review reveal"><div class="stars">${x[0]}</div><blockquote>${x[1]}</blockquote><div class="review__author">${x[2]}</div></article>`,
  )
  .join("");
$("#faq").innerHTML = data.faq
  .map(
    (x) =>
      `<div class="faq-item reveal"><button class="faq-q">${x[0]}<span>+</span></button><div class="faq-a"><p>${x[1]}</p></div></div>`,
  )
  .join("");

// reveal elements as they enter the viewport
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
$$(".reveal").forEach((el) => observer.observe(el));

const scrollUp = $(".scroll-up");
const updateScrollUp = () =>
  scrollUp.classList.toggle("visible", window.scrollY > window.innerHeight);
window.addEventListener("scroll", updateScrollUp, { passive: true });
updateScrollUp();

// enable pointer dragging on the catalog track
const catalogTrack = $("#catalogTrack");
catalogTrack.style.cursor = "grab";
catalogTrack.querySelectorAll("img").forEach((img) => (img.draggable = false));
let isDraggingCatalog = false;
let catalogStartX = 0;
let catalogScrollLeft = 0;
catalogTrack.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  isDraggingCatalog = true;
  catalogTrack.style.scrollSnapType = "none";
  catalogStartX = e.clientX;
  catalogScrollLeft = catalogTrack.scrollLeft;
  catalogTrack.setPointerCapture(e.pointerId);
  catalogTrack.style.cursor = "grabbing";
});
catalogTrack.addEventListener("pointermove", (e) => {
  if (!isDraggingCatalog) return;
  catalogTrack.scrollLeft = catalogScrollLeft - (e.clientX - catalogStartX);
});
const stopCatalogDrag = () => {
  if (!isDraggingCatalog) return;
  isDraggingCatalog = false;
  catalogTrack.style.cursor = "grab";
  catalogTrack.style.scrollSnapType = "";
};
catalogTrack.addEventListener("pointerup", stopCatalogDrag);
catalogTrack.addEventListener("pointercancel", stopCatalogDrag);
catalogTrack.addEventListener("dragstart", (e) => e.preventDefault());

// keep only one FAQ answer expanded at a time
$("#faq").addEventListener("click", (e) => {
  const q = e.target.closest(".faq-q");
  if (!q) return;
  const item = q.parentElement,
    a = item.querySelector(".faq-a");
  $$(".faq-item.open")
    .filter((x) => x !== item)
    .forEach((x) => {
      x.classList.remove("open");
      x.querySelector(".faq-a").style.maxHeight = null;
    });
  item.classList.toggle("open");
  a.style.maxHeight = item.classList.contains("open")
    ? a.scrollHeight + "px"
    : null;
});

$(".menu-btn").addEventListener("click", () =>
  $("#nav").classList.toggle("open"),
);
$("#nav").addEventListener("click", () => $("#nav").classList.remove("open"));

// quiz and contact modal content
const modal = $("#modal"),
  content = $("#modalContent");
const quiz = {
  step: 0,
  answers: [],
  questions: [
    {
      title: "Какая у вас кухня?",
      opts: ["П-образная", "Угловая", "Прямая", "Пока не знаю"],
    },
    {
      title: "Какой стиль вам ближе?",
      opts: ["Минимализм", "Сканди", "Лофт", "Классика"],
    },
    {
      title: "Когда планируете установку?",
      opts: [
        "Срочно",
        "В течение месяца",
        "В течение 3 месяцев",
        "Просто интересуюсь",
      ],
    },
  ],
};
function renderQuiz() {
  const q = quiz.questions[quiz.step],
    progress = ((quiz.step + 1) / 4) * 100;
  content.innerHTML = `<span class="eyebrow">Шаг ${quiz.step + 1} из 4</span><h2>${q.title}</h2><div class="quiz-progress"><i style="width:${progress}%"></i></div><div class="quiz-options">${q.opts.map((x, i) => `<button class="quiz-option" data-i="${i}">${x}</button>`).join("")}</div>`;
  $$(".quiz-option").forEach(
    (b) =>
      (b.onclick = () => {
        quiz.answers.push(q.opts[+b.dataset.i]);
        quiz.step++;
        quiz.step < 3 ? renderQuiz() : renderForm();
      }),
  );
}
function renderForm() {
  content.innerHTML = `<span class="eyebrow">Последний шаг</span><h2>Куда отправить<br><em>расчёт?</em></h2><p>Покажем ориентировочную стоимость и свяжемся для уточнения деталей.</p><label class="form-field"><span>Ваше имя</span><input id="qName" placeholder="Илья"></label><label class="form-field"><span>Телефон</span><input id="qPhone" type="tel" placeholder="+7 (___) ___-__-__"></label><button class="btn btn--accent" style="width:100%" id="sendQuiz">Получить расчёт ↗</button>`;
  $("#sendQuiz").onclick = () => {
    content.innerHTML = `<div style="text-align:center;padding:35px 0"><div style="font-size:45px;color:#f06051">✓</div><h2>Спасибо!</h2><p>Заявка принята. Менеджер OPAB свяжется с вами для подготовки расчёта.</p></div>`;
  };
}
function openQuiz() {
  quiz.step = 0;
  quiz.answers = [];
  modal.classList.add("is-open");
  renderQuiz();
}
$$(".js-quiz").forEach((b) => b.addEventListener("click", openQuiz));
$$(".js-modal").forEach((b) =>
  b.addEventListener("click", () => {
    modal.classList.add("is-open");
    content.innerHTML = `<span class="eyebrow">Шоурум OPAB</span><h2>Запишитесь<br><em>на экскурсию.</em></h2><p>Оставьте имя и телефон — подберём удобное время.</p><label class="form-field"><span>Ваше имя</span><input placeholder="Ваше имя"></label><label class="form-field"><span>Телефон</span><input type="tel" placeholder="+7 (___) ___-__-__"></label><button class="btn btn--accent" style="width:100%" onclick="this.parentElement.innerHTML='<div style=&quot;text-align:center;padding:35px 0&quot;><div style=&quot;font-size:45px;color:#f06051&quot;>✓</div><h2>Записали!</h2><p>Менеджер свяжется с вами и подтвердит время.</p></div>'">Записаться ↗</button>`;
  }),
);
$(".modal__backdrop").onclick = () => modal.classList.remove("is-open");
$(".modal__close").onclick = () => modal.classList.remove("is-open");
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.classList.remove("is-open");
});
