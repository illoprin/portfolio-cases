// page content data
const VIDEO_SRC = "footage.mp4";
const U = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
const IMG = {
  hero: "photo-1545324418-cc1a3fa10c00",
  a: "photo-1486406146926-c627a92ad1ab",
  b: "photo-1600607687939-ce8a6c25118c",
};
const OBJECTS = [
  {
    n: "Skyline Apartment",
    t: "Квартиры",
    loc: "Москва, Хамовники",
    area: 105,
    rooms: 3,
    st: "Сдан",
    y: "2024",
    img: "photo-1600585154340-be6161a56a0c",
  },
  {
    n: "Villa Nord",
    t: "Дома",
    loc: "Московская обл., Рублёвка",
    area: 340,
    rooms: 6,
    st: "Строится",
    y: "2027",
    img: "photo-1613490493576-7fde63acd811",
  },
  {
    n: "Atrium Office",
    t: "Коммерция",
    loc: "Санкт-Петербург, Центр",
    area: 1200,
    rooms: 12,
    st: "Строится",
    y: "2026",
    img: "photo-1486406146926-c627a92ad1ab",
  },
  {
    n: "Loft 14",
    t: "Квартиры",
    loc: "Москва, Красный Октябрь",
    area: 86,
    rooms: 2,
    st: "Сдан",
    y: "2023",
    img: "photo-1502672260266-1c1ef2d93688",
  },
  {
    n: "Dom u Reki",
    t: "Дома",
    loc: "Ленинградская обл.",
    area: 210,
    rooms: 5,
    st: "Сдан",
    y: "2024",
    img: "photo-1512917774080-9991f1c4c750",
  },
  {
    n: "Meridian Tower",
    t: "Квартиры",
    loc: "Казань, Кремлёвская наб.",
    area: 142,
    rooms: 4,
    st: "Строится",
    y: "2028",
    img: "photo-1545324418-cc1a3fa10c00",
  },
  {
    n: "Plaza Retail",
    t: "Коммерция",
    loc: "Екатеринбург, Центр",
    area: 640,
    rooms: 8,
    st: "Сдан",
    y: "2022",
    img: "photo-1522708323590-d24dbb6b0267",
  },
  {
    n: "Garden House",
    t: "Дома",
    loc: "Сочи, Хоста",
    area: 180,
    rooms: 4,
    st: "Строится",
    y: "2027",
    img: "photo-1600596542815-ffad4c1539a9",
  },
  {
    n: "Studio 9",
    t: "Квартиры",
    loc: "Москва, Патрики",
    area: 54,
    rooms: 1,
    st: "Сдан",
    y: "2025",
    img: "photo-1560448204-e02f11c3d0e2",
  },
];
const PARTNERS = [
  "Verona Group",
  "Building Partners",
  "Kronos Bank",
  "Norden Steel",
  "Atelier 7",
  "Lumen Glass",
  "Basalt",
  "Arkhe Design",
];
const STEPS = [
  [
    "Анализ участка",
    "Изучаем грунт, окружение и инсоляцию, прежде чем нарисовать первую линию. Ошибка на этом этапе обходится дороже любой другой.",
  ],
  [
    "Проект и согласование",
    "Архитекторы, конструкторы и инженеры работают в одной модели. Решения принимаются до стройки, а не на площадке.",
  ],
  [
    "Строительство",
    "Собственный технадзор и открытый график. Покупатель видит ход работ онлайн и может приехать на объект в любой день.",
  ],
  [
    "Сдача и сопровождение",
    "Передаём ключи по чек-листу из 140 пунктов и ещё пять лет отвечаем за каждый шов и каждую розетку.",
  ],
];
const VALUES = [
  ["Честная геометрия", "Площадь в договоре равна площади в жизни."],
  ["Материал без маски", "Бетон, стекло и камень остаются собой."],
  ["Долгий горизонт", "Проектируем на пятьдесят лет, а не на сдачу."],
];

// shared rendering helpers
const $ = (s, c = document) => c.querySelector(s),
  $$ = (s, c = document) => [...c.querySelectorAll(s)];
const AR =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 19L19 5M8 5h11v11"/></svg>';
const arw = `<span class="arw">${AR}${AR}</span>`;
const big = (t, h, c = "") =>
  h === "submit"
    ? `<button class="big ${c}" type="submit"><i class="fill"></i><span class="lbl">${t}</span>${arw}</button>`
    : `<a class="big ${c}" href="${h}"><i class="fill"></i><span class="lbl">${t}</span>${arw}</a>`;
const round = (label, go) =>
  `<a class="round" href="#/" data-go="${go}" aria-label="${label}"><i class="fill"></i>${arw}</a>`;
const words = (el) => {
  el.innerHTML = el.textContent
    .trim()
    .split(/\s+/)
    .map((w) => `<span class="w"><span>${w}</span></span>`)
    .join(" ");
  return $$(".w>span", el);
};
const scrub = (el) => {
  el.innerHTML = el.textContent
    .trim()
    .split(/\s+/)
    .map((w) => `<span class="sw">${w}</span>`)
    .join(" ");
  return $$(".sw", el);
};
const st = (trigger, extra = {}) => ({ trigger, start: "top 85%", ...extra });
const card = (
  o,
) => `<article class="card"><div class="ph"><img loading="lazy" src="${U(o.img, 900)}" alt="${o.n}" onerror="this.remove()"></div>
<div class="ci"><h3>${o.n}</h3><span class="st">${o.st}</span></div><p>${o.loc}</p>
<dl><div><dt>Площадь</dt><dd>${o.area} м²</dd></div><div><dt>Комнат</dt><dd>${o.rooms}</dd></div><div><dt>Срок</dt><dd>${o.y}</dd></div></dl></article>`;
const footer =
  () => `<footer><div><div class="logo">STRATA</div><p style="margin-top:12px;max-width:30ch">Застройщик премиальной недвижимости. Проектируем и строим с 2009 года.</p></div>
<div><h4>Разделы</h4><a href="#/">Компания</a><a href="#/catalog">Каталог объектов</a></div>
<div><h4>Связь</h4><a href="tel:+70000000000">+7 (000) 000-00-00</a><a href="mailto:hello@strata.example">hello@strata.example</a></div>
<div><h4>Офис</h4><p>Москва, Пресненская наб., 12</p></div></footer>`;

// page templates
const views = {
  home: () => `
<section class="hero"><div class="bg"><img src="${U(IMG.hero, 2000)}" alt="" onerror="this.remove()"></div>
  <h1 id="h1">Строим дома, которые остаются</h1>
  <div class="row"><p class="fade">Жилые комплексы, частные дома и коммерческие здания. Проектируем, строим и передаём ключи без компромиссов в качестве.</p>${round("Прокрутить вниз", "partners")}<i class="rule"></i></div>
</section>
<section class="partners" id="partners"><div class="wrap"><p>Нам доверяют</p></div><div class="track">${[...PARTNERS, ...PARTNERS].map((p) => `<span>${p}</span>`).join("")}</div></section>
<section class="feat wrap"><div class="head"><h2 class="rv">Избранные объекты</h2>${big("Весь каталог", "#/catalog")}</div>
  <div class="flex-row">${OBJECTS.slice(0, 3).map(card).join("")}</div></section>
<section class="approach wrap" id="approach"><div class="head"><h2 class="rv">Подход к работе</h2></div>
  <div class="steps"><i class="track-l"></i><i class="prog"></i>${STEPS.map((s, i) => `<div class="step"><b>0${i + 1}</b><div><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`).join("")}</div></section>
<section class="phil" id="phil"><div class="wrap"><h2 class="rv" style="margin-bottom:40px">Философия</h2>
  <p class="quote" id="q">Архитектура — это не украшение города, а обещание тем, кто будет в нём жить. Мы строим так, чтобы это обещание пережило нас.</p>
  <div class="media"><div class="a">${VIDEO_SRC ? `<video class="par" src="${VIDEO_SRC}" autoplay muted loop playsinline></video>` : `<img class="par" src="${U(IMG.a, 1400)}" alt="" onerror="this.remove()">`}</div><div class="b"><img class="par" src="${U(IMG.b, 900)}" alt="" onerror="this.remove()"></div></div>
  <div class="vals">${VALUES.map((v) => `<div class="val"><h3>${v[0]}</h3><p>${v[1]}</p></div>`).join("")}</div>
  ${big("Смотреть объекты", "#/catalog", "inv")}</div></section>
<section class="cta wrap" id="cta"><h2 class="rv">Хотите увидеть свой дом?</h2>
  <form id="form"><input placeholder="Имя" aria-label="Имя" required><input placeholder="Телефон" aria-label="Телефон" type="tel" required>
  <div class="f">${big("Оставить заявку", "submit")}</div></form></section>${footer()}`,
  catalog: () => `
<section class="cat-head wrap"><h1 id="h1">Каталог объектов</h1>
  <div class="filters">${["Все", "Квартиры", "Дома", "Коммерция"].map((f, i) => `<button class="${i ? "" : "on"}" data-f="${f}">${f}</button>`).join("")}</div></section>
<section class="cat wrap"><div class="grid" id="list"></div></section>${footer()}`,
};

// scroll and entrance animations
const reveal = (root = document) =>
  $$(".rv", root).forEach((el) => {
    gsap.from(words(el), {
      yPercent: 115,
      duration: 1,
      ease: "power4.out",
      stagger: 0.06,
      scrollTrigger: st(el),
    });
  });
const cards = (root) =>
  $$(".card", root).forEach((c) => {
    gsap.from($(".ph", c), {
      clipPath: "inset(100% 0 0 0)",
      duration: 1.2,
      ease: "power4.inOut",
      scrollTrigger: st(c, { start: "top 90%" }),
    });
    gsap.from($("img", c) || c, {
      scale: 1.3,
      duration: 1.6,
      ease: "power3.out",
      scrollTrigger: st(c, { start: "top 90%" }),
    });
    gsap.from($$(".ci,p,dl", c), {
      y: 24,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      delay: 0.3,
      scrollTrigger: st(c, { start: "top 90%" }),
    });
  });
const init = {
  home() {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(".hero .bg", {
      clipPath: "inset(0 0 100% 0)",
      duration: 1.4,
      ease: "power4.inOut",
    })
      .from(".hero .bg img", { scale: 1.4, duration: 2.2 }, 0)
      .from(
        words($("#h1")),
        { yPercent: 120, duration: 1.2, stagger: 0.09 },
        0.5,
      )
      .from(
        ".hero .rule",
        { scaleX: 0, duration: 1.6, ease: "power3.inOut" },
        1,
      )
      .from(".hero .fade", { y: 30, opacity: 0, duration: 1 }, 1.3)
      .from(
        ".hero .round",
        { scale: 0, rotate: -90, duration: 1.1, ease: "back.out(1.5)" },
        1.4,
      );
    gsap.to(".hero .bg img", {
      yPercent: 18,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".track", {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
    gsap.from(".partners p", {
      opacity: 0,
      y: 20,
      scrollTrigger: st(".partners"),
    });
    reveal();
    cards(document);
    $$(".head .big").forEach((b) =>
      gsap.from(b, {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: st(b),
      }),
    );
    gsap.to(".steps .prog", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".steps",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true,
      },
    });
    $$(".step").forEach((s) => {
      gsap.from(s.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: st(s, { start: "top 80%" }),
      });
    });
    gsap.to(scrub($("#q")), {
      opacity: 1,
      stagger: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: "#q",
        start: "top 80%",
        end: "bottom 45%",
        scrub: true,
      },
    });
    $$(".par").forEach((p) =>
      gsap.fromTo(
        p,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: p.parentNode,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      ),
    );
    gsap.from(".val", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      scrollTrigger: st(".vals"),
    });
    gsap.from("#form>*", {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      scrollTrigger: st("#form"),
    });
    $("#form").onsubmit = (e) => {
      e.preventDefault();
      $("#form .lbl").textContent = "Заявка отправлена";
    };
  },
  catalog() {
    gsap.from(words($("#h1")), {
      yPercent: 120,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.1,
    });
    gsap.from(".filters button", {
      y: 20,
      opacity: 0,
      stagger: 0.07,
      delay: 0.5,
      duration: 0.8,
    });
    const list = $("#list");
    const draw = (f) => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      list.innerHTML = OBJECTS.filter((o) => f === "Все" || o.t === f)
        .map(card)
        .join("");
      cards(list);
      ScrollTrigger.refresh();
    };
    $$(".filters button").forEach(
      (b) =>
        (b.onclick = () => {
          $$(".filters button").forEach((x) =>
            x.classList.toggle("on", x === b),
          );
          draw(b.dataset.f);
        }),
    );
    draw("Все");
  },
};

// hash routing with curtain transitions
const app = $("#app"),
  cur = $(".curtain");
let first = true;
gsap.registerPlugin(ScrollTrigger);
const mount = () => {
  const p = location.hash.startsWith("#/catalog") ? "catalog" : "home";
  ScrollTrigger.getAll().forEach((t) => t.kill());
  app.innerHTML = views[p]();
  window.scrollTo(0, 0);
  init[p]();
  $$("nav a[data-r]").forEach((a) =>
    a.classList.toggle("on", a.dataset.r === p),
  );
  ScrollTrigger.refresh();
};
addEventListener("hashchange", () => {
  gsap
    .timeline()
    .fromTo(
      cur,
      { yPercent: 0, y: "100%" },
      { y: "0%", duration: 0.7, ease: "power4.inOut" },
    )
    .add(mount)
    .to(cur, { y: "-100%", duration: 0.7, ease: "power4.inOut" });
});
document.addEventListener("click", (e) => {
  const g = e.target.closest("[data-go]");
  if (!g) return;
  const go = () => {
    const t = document.getElementById(g.dataset.go);
    t && t.scrollIntoView({ behavior: "smooth" });
  };
  if (location.hash.startsWith("#/catalog")) {
    e.preventDefault();
    location.hash = "#/";
    setTimeout(go, 1600);
  } else {
    e.preventDefault();
    go();
  }
});
document.fonts.ready.then(mount);
