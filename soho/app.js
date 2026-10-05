// karaoke venue landing page

'use strict';

// content data

const PX = (id) => `./images/pexels-photo-${id}.jpeg`;

const DATA = {
  venue: {
    name: 'SOHO',
    address: 'Санкт-Петербург, Лиговский проспект, 87',
    zip: '191040',
    lat: 59.9242297,
    lng: 30.3556430,
    phone: '+7 (812) 123-45-67',
    phoneRaw: '+78121234567',
  },

  features: [
    {
      icon: '🎤',
      title: 'Полный зал',
      text: 'Сцена, свет и звук уровня концертного зала — каждый вечер аншлаг.',
    },
    {
      icon: '✨',
      title: 'Знакомства',
      text: 'Открытая сцена и общий бар, где легко завязать разговор.',
    },
    {
      icon: '🥂',
      title: 'Праздник',
      text: 'Дни рождения, корпоративы и девичники под ключ с ведущим.',
    },
    {
      icon: '💜',
      title: 'Единение',
      text: 'Момент, когда весь зал подхватывает припев в один голос.',
    },
  ],

  counters: [
    { target: 184392, label: 'спетых песен', live: true },
    { target: 12, label: 'приватных залов' },
    { target: 50000, label: 'треков в каталоге', suffix: '+' },
  ],

  gallery: [
    { id: 18428609, caption: 'Соло на большой сцене' },
    { id: 5143166, caption: 'Неоновый танцпол' },
    { id: 19693296, caption: 'Дуэт до последнего припева' },
    { id: 13825633, caption: 'Зеркальные шары главного зала' },
    { id: 29850671, caption: 'Барная стойка SOHO' },
    { id: 16594097, caption: 'Коктейли под неоном' },
    { id: 33425202, caption: 'Вход в клубную зону' },
    { id: 13799699, caption: 'Авторский микс от бармена' },
    { id: 6503527, caption: 'Последний тост вечера' },
  ],

  rooms: [
    {
      name: 'Classic',
      badge: 'от 2 гостей',
      img: 29850671,
      capacity: '2–6 гостей',
      area: '18 м²',
      deposit: '6 000 ₽',
      hours: 'мин. 2 часа',
      desc: 'Уютный кабинет с диваном-полукругом, профессиональным микрофоном и панелью 55". Идеален для первого визита.',
    },
    {
      name: 'Neon',
      badge: 'хит сезона',
      img: 16594097,
      capacity: '4–10 гостей',
      area: '28 м²',
      deposit: '12 000 ₽',
      hours: 'мин. 2 часа',
      desc: 'Неоновая подсветка с настройкой цвета, два беспроводных микрофона и собственная барная стойка внутри зала.',
    },
    {
      name: 'Galaxy',
      badge: 'для компании',
      img: 13825633,
      capacity: '8–20 гостей',
      area: '46 м²',
      deposit: '25 000 ₽',
      hours: 'мин. 3 часа',
      desc: 'Панорамный экран, звёздный потолок, подиум-сцена и место для танцев. Звук Bose с сабвуфером.',
    },
    {
      name: 'Platinum',
      badge: 'premium',
      img: 5143166,
      capacity: '15–30 гостей',
      area: '72 м²',
      deposit: '45 000 ₽',
      hours: 'мин. 3 часа',
      desc: 'Флагманский зал с отдельным входом, гардеробом, персональным менеджером и ведущим по запросу.',
    },
  ],

  dishes: [
    { name: 'Сет тапас SOHO', price: '1 290 ₽', tag: 'хит · к вину и просекко', img: 15231817 },
    { name: 'Сырная тарелка', price: '1 150 ₽', tag: '5 сортов · мёд, орехи', img: 14630314 },
    { name: 'Креветки темпура', price: '980 ₽', tag: 'соус спайси-манго', img: 19725455 },
    { name: 'Начос с чеддером', price: '690 ₽', tag: 'к пиву · гуакамоле', img: 15662155 },
    { name: 'Крылья BBQ', price: '790 ₽', tag: 'острый соус на выбор', img: 10296338 },
    { name: 'Гунканы и брускетты', price: '850 ₽', tag: 'сет на двоих', img: 14994701 },
    { name: 'Снек-платтер', price: '1 490 ₽', tag: 'на компанию 4–6', img: 16220865 },
    { name: 'Тигровые тэмпура-роллы', price: '1 050 ₽', tag: 'новинка', img: 23645830 },
    { name: 'Коктейль «Невский неон»', price: '620 ₽', tag: 'джин · бергамот · тоник', img: 14715944 },
    { name: 'Сигнатурный микс', price: '680 ₽', tag: 'от шеф-бармена', img: 9393916 },
    { name: 'Апероль сет', price: '1 180 ₽', tag: '2 коктейля + снек', img: 13799699 },
    { name: 'Тарелка к виски', price: '1 320 ₽', tag: 'сыр, пастрами, вяленое', img: 1200362 },
  ],

  events: [
    {
      day: 'Понедельник',
      date: 'happy start',
      name: 'Открытый микрофон',
      tags: ['поп', 'рок'],
      offer: 'Первый час зала — бесплатно',
    },
    {
      day: 'Вторник',
      date: 'retro night',
      name: 'Дискотека 80–90х',
      tags: ['ретро', 'диско'],
      offer: 'Коктейли по 390 ₽ до 22:00',
    },
    {
      day: 'Среда',
      date: 'ladies night',
      name: 'Девичник',
      tags: ['поп', 'R&B'],
      offer: 'Просекко в подарок компании от 4 девушек',
    },
    {
      day: 'Четверг',
      date: 'rock session',
      name: 'Рок-караоке с живой группой',
      tags: ['рок', 'метал'],
      offer: '−20% на всё пиво',
    },
    {
      day: 'Пятница',
      date: 'prime time',
      name: 'Битва залов',
      tags: ['хиты', 'танцы'],
      offer: 'Приз победителям — депозит 10 000 ₽',
    },
    {
      day: 'Суббота',
      date: 'до 05:00',
      name: 'Большая ночь SOHO',
      tags: ['хиты', 'диско', 'хаус'],
      offer: 'DJ-сет после 01:00',
    },
    {
      day: 'Воскресенье',
      date: 'soul & jazz',
      name: 'Ламповый вечер',
      tags: ['джаз', 'соул'],
      offer: 'Кухня −25% весь вечер',
    },
  ],

  reviews: [
    {
      name: 'Анна Ковалёва',
      role: 'постоянный гость',
      stars: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Отмечали день рождения в зале Galaxy. Звук честно лучший в городе, а менеджер помог собрать плейлист заранее. Уходили в шесть утра абсолютно счастливые.',
    },
    {
      name: 'Дмитрий Орлов',
      role: 'гость с 2022 года',
      stars: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Прихожу ради каталога: находятся даже редкие би-сайды. Кухня не «для галочки» — сет тапас реально вкусный, а не просто закуска к вину.',
    },
    {
      name: 'Марина Штейн',
      role: 'организатор корпоративов',
      stars: 5,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'Провела здесь три корпоратива подряд. Platinum вмещает 30 человек без тесноты, отдельный вход — плюс для больших групп. Всё чётко по таймингу.',
    },
    {
      name: 'Игорь Бельский',
      role: 'вокалист',
      stars: 4,
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      text: 'Профессиональные микрофоны и адекватный монитор — редкость для караоке. По пятницам шумно, но за атмосферой как раз и приходят.',
    },
    {
      name: 'Софья Ли',
      role: 'гость',
      stars: 5,
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      text: 'Пришли вдвоём в Neon без брони в среду — посадили за десять минут. Подсветку настраиваешь под настроение, это мелочь, которая цепляет.',
    },
  ],

  // artists shown in the semi-transparent marquee right after the hero
  artists: [
    { name: 'Анна Ветрова', genre: 'поп · соул' },
    { name: 'DJ Neon', genre: 'хаус · диско' },
    { name: 'Макс Орлов', genre: 'рок' },
    { name: 'Соня Rivers', genre: 'R&B · джаз' },
    { name: 'Группа Полюс', genre: 'инди' },
    { name: 'Катя Ли', genre: 'хиты 90-х' },
    { name: 'TriO Band', genre: 'фанк' },
    { name: 'Марат Гареев', genre: 'эстрада' },
    { name: 'Luna Sound', genre: 'лаунж' },
    { name: 'Рок-кавер Pro', genre: 'рок-н-ролл' },
  ],

  socials: [
    { label: 'Telegram', href: '#', icon: 'tg' },
    { label: 'WhatsApp', href: '#', icon: 'wa' },
    { label: 'VK', href: '#', icon: 'vk' },
  ],
};

const ICONS = {
  tg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.9 4.3l-3 14.1c-.2 1-.8 1.2-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L7.2 12.4 2.7 11c-1-.3-1-1 .2-1.5l17.2-6.6c.8-.3 1.5.2 1.2 1.4h.6z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 2a8 8 0 110 16 8 8 0 01-4.2-1.2l-.4-.2-2.6.7.7-2.5-.3-.4A8 8 0 0112 4zm-2.6 4c-.2 0-.5 0-.7.3-.3.3-.9.9-.9 2s.9 2.3 1 2.5c.1.2 1.6 2.6 4 3.5 2 .8 2.4.6 2.8.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3l-1.5-.7c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.8-1.1-.7-.6-1.1-1.3-1.3-1.5-.1-.2 0-.3.1-.4l.4-.5c.1-.2.1-.3 0-.5l-.6-1.5c-.2-.4-.3-.4-.5-.4h-.3z"/></svg>',
  vk: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.8 16.9c-5.3 0-8.5-3.7-8.6-9.8h2.7c.1 4.5 2.1 6.4 3.7 6.8V7.1h2.6v3.9c1.6-.2 3.2-1.9 3.8-3.9h2.6a7.6 7.6 0 01-3.3 4.8 7.8 7.8 0 013.8 5h-2.9c-.6-1.8-2-3.2-4-3.4v3.4h-.4z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-.9 0-1.4.2-1.7.3-.4.2-.7.3-.9.6-.3.2-.4.5-.6.9-.1.3-.3.8-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 .9.2 1.4.3 1.7.2.4.3.7.6.9.2.3.5.4.9.6.3.1.8.3 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3.9-.6.3-.2.4-.5.6-.9.1-.3.3-.8.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-.9-.2-.3-.5-.4-.9-.6-.3-.1-.8-.3-1.7-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8a3.1 3.1 0 100-6.2 3.1 3.1 0 000 6.2zm6.2-8.2a1.1 1.1 0 11-2.3 0 1.1 1.1 0 012.3 0z"/></svg>',
};

// shared utilities

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fmtNum = (n) => n.toLocaleString('ru-RU');

// escape text before inserting it into HTML
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

// render page content

function renderFeatures() {
  const list = $('#featuresList');
  if (!list) return;
  list.classList.add('stagger');
  list.innerHTML = DATA.features
    .map(
      (f) => `
    <li class="feature">
      <span class="feature__icon" aria-hidden="true">${f.icon}</span>
      <div>
        <h3 class="feature__title">${esc(f.title)}</h3>
        <p class="feature__text">${esc(f.text)}</p>
      </div>
    </li>`
    )
    .join('');
}

function renderGallery() {
  const slider = $('#gallerySlider');
  if (!slider) return;
  slider.innerHTML = DATA.gallery
    .map(
      (g, i) => `
    <figure class="gallery__item">
      <img src="${PX(g.id, 700)}" alt="${esc(g.caption)}" loading="${i < 3 ? 'eager' : 'lazy'}" />
      <figcaption class="gallery__caption">${esc(g.caption)}</figcaption>
    </figure>`
    )
    .join('');
}

function renderRooms() {
  const grid = $('#vipGrid');
  if (!grid) return;
  grid.classList.add('stagger');
  grid.innerHTML = DATA.rooms
    .map(
      (r) => `
    <article class="vip-card">
      <div class="vip-card__media">
        <img src="${PX(r.img, 700)}" alt="Зал ${esc(r.name)}" loading="lazy" />
        <span class="vip-card__badge">${esc(r.badge)}</span>
        <h3 class="vip-card__name">${esc(r.name)}</h3>
      </div>
      <div class="vip-card__body">
        <div class="vip-card__specs">
          <div class="vip-spec">
            <span class="vip-spec__label">Вместимость</span>
            <span class="vip-spec__value">${esc(r.capacity)}</span>
          </div>
          <div class="vip-spec">
            <span class="vip-spec__label">Площадь</span>
            <span class="vip-spec__value">${esc(r.area)}</span>
          </div>
          <div class="vip-spec">
            <span class="vip-spec__label">Депозит</span>
            <span class="vip-spec__value"><em>${esc(r.deposit)}</em></span>
          </div>
          <div class="vip-spec">
            <span class="vip-spec__label">Бронь</span>
            <span class="vip-spec__value">${esc(r.hours)}</span>
          </div>
        </div>
        <p class="vip-card__desc">${esc(r.desc)}</p>
        <a href="#booking" class="vip-card__link" data-room="${esc(r.name)}">
          Подробнее и бронь <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>`
    )
    .join('');
}

function renderDishes() {
  const track = $('#kitchenTrack');
  if (!track) return;
  track.innerHTML = DATA.dishes
    .map(
      (d) => `
    <article class="dish">
      <div class="dish__media">
        <img src="${PX(d.img, 600)}" alt="${esc(d.name)}" loading="lazy" />
      </div>
      <div class="dish__body">
        <div class="dish__row">
          <h3 class="dish__name">${esc(d.name)}</h3>
          <span class="dish__price">${esc(d.price)}</span>
        </div>
        <p class="dish__tag">${esc(d.tag)}</p>
      </div>
    </article>`
    )
    .join('');
}

function renderEvents() {
  const grid = $('#eventsGrid');
  if (!grid) return;
  grid.classList.add('stagger');
  grid.innerHTML = DATA.events
    .map(
      (e) => `
    <article class="event-card">
      <h3 class="event-card__day">${esc(e.day)}</h3>
      <p class="event-card__date">${esc(e.date)}</p>
      <p class="event-card__name">${esc(e.name)}</p>
      <div class="event-card__tags">
        ${e.tags.map((t) => `<span class="event-tag">${esc(t)}</span>`).join('')}
      </div>
      <p class="event-card__offer">${esc(e.offer)}</p>
    </article>`
    )
    .join('');
}

function renderReviews() {
  const track = $('#reviewsCarousel');
  if (!track) return;
  track.innerHTML = DATA.reviews
    .map(
      (r) => `
    <article class="review-card">
      <div class="review-card__stars" aria-label="Оценка ${r.stars} из 5">
        ${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}
      </div>
      <p class="review-card__quote">${esc(r.text)}</p>
      <div class="review-card__person">
        <img class="review-card__avatar" src="${r.avatar}" alt="" loading="lazy" />
        <div>
          <div class="review-card__name">${esc(r.name)}</div>
          <div class="review-card__role">${esc(r.role)}</div>
        </div>
      </div>
    </article>`
    )
    .join('');
}

function renderSocials() {
  const chip = (s, iconOnly = false) => `
    <a class="social-chip" href="${s.href}" aria-label="${esc(s.label)}"
       ${s.href === '#' ? 'data-stub="1"' : 'target="_blank" rel="noopener"'}>
      ${ICONS[s.icon] || ''}${iconOnly ? '' : `<span>${esc(s.label)}</span>`}
    </a>`;

  const contacts = $('#contactsSocials');
  if (contacts) contacts.innerHTML = DATA.socials.map((s) => chip(s)).join('');

  const footer = $('#footerSocials');
  if (footer) footer.innerHTML = DATA.socials.map((s) => chip(s, true)).join('');
}

// duplicate artists for a seamless marquee loop
function renderMarquee() {
  const track = $('#artistsTrack');
  if (!track) return;

  const item = (a) =>
    `<span class="marquee__item">${esc(a.name)} <em>${esc(a.genre)}</em></span>`;

  const half = DATA.artists.map(item).join('');
  track.innerHTML = half + half;
}

// reveal elements as they enter the viewport

function initReveal() {
  const targets = $$('.reveal, .stagger');
  if (!targets.length) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => io.observe(el));
}

// animated statistics

function animateCounter(el) {
  const target = Number(el.dataset.target) || 0;
  const suffix = el.dataset.suffix || '';
  const duration = 1800;

  if (prefersReducedMotion) {
    el.textContent = fmtNum(target) + suffix;
    return;
  }

  const start = performance.now();
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = fmtNum(Math.floor(target * easeOut(p))) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = fmtNum(target) + suffix;
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const nums = $$('.counter-num');
  if (!nums.length) return;

  // apply configured counter suffixes
  nums.forEach((el, i) => {
    const cfg = DATA.counters[i];
    if (cfg && cfg.suffix) el.dataset.suffix = cfg.suffix;
  });

  if (!('IntersectionObserver' in window)) {
    nums.forEach(animateCounter);
    startLiveCounter();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
          if (entry.target === nums[0]) startLiveCounter();
        }
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((el) => io.observe(el));
}

// increment the live song count at random intervals
function startLiveCounter() {
  const el = $('.counter-num');
  if (!el || prefersReducedMotion) return;

  let value = Number(el.dataset.target) || 0;
  const tick = () => {
    value += 1;
    el.dataset.target = String(value);
    el.textContent = fmtNum(value);
    el.animate(
      [
        { transform: 'translateY(0)', opacity: 1 },
        { transform: 'translateY(-4px)', opacity: 0.75 },
        { transform: 'translateY(0)', opacity: 1 },
      ],
      { duration: 450, easing: 'ease-out' }
    );
    setTimeout(tick, 6000 + Math.random() * 8000);
  };
  setTimeout(tick, 5000 + Math.random() * 4000);
}

// navigation behavior

function initNav() {
  const nav = $('#nav');
  const burger = $('#navBurger');
  const menu = $('#navMenu');

  const onScroll = () => {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (!burger || !menu) return;

  const closeMenu = () => {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    document.body.classList.remove('nav-open');
  };

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    document.body.classList.toggle('nav-open', open);
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// highlight the link for the visible section
function initActiveSection() {
  const links = $$('.nav__link[href^="#"]');
  const sections = links
    .map((l) => ({ link: l, section: $(l.getAttribute('href')) }))
    .filter((x) => x.section);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const match = sections.find((s) => s.section === entry.target);
        if (!match) return;
        links.forEach((l) => l.classList.remove('is-active'));
        match.link.classList.add('is-active');
      });
    },
    { threshold: 0.35, rootMargin: '-15% 0px -45% 0px' }
  );
  sections.forEach((s) => io.observe(s.section));
}

// drag scrolling for gallery and kitchen
   
// calculate one slide's width including its CSS gap
function slideStep(el) {
  const item = el.firstElementChild;
  if (!item) return 0;
  const styles = getComputedStyle(el);
  const gap = parseFloat(styles.columnGap || styles.gap) || 0;
  return item.offsetWidth + gap;
}

// snap to the nearest slide after dragging
function snapToNearest(el) {
  const step = slideStep(el);
  if (!step) return;

  const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
  const raw = (el.scrollLeft - pad) / step;
  const target = Math.round(raw);
  const left = target * step + pad;

  el.classList.add('is-snapping');
  el.scrollTo({ left, behavior: prefersReducedMotion ? 'auto' : 'smooth' });

  const done = () => {
    el.classList.remove('is-snapping');
    el.removeEventListener('scrollend', done);
  };
  if ('onscrollend' in el) {
    el.addEventListener('scrollend', done);
  } else {
    // use a timeout where scrollend is unavailable
    clearTimeout(el._snapT);
    el._snapT = setTimeout(done, 420);
  }
}


// enable pointer, wheel, and touch scrolling for a track
function makeDraggable(el, onEnd) {
  if (!el) return;
  let down = false;
  let startX = 0;
  let startScroll = 0;
  let moved = false;

  const start = (x) => {
    down = true;
    moved = false;
    startX = x;
    startScroll = el.scrollLeft;
  };
  const move = (x) => {
    if (!down) return;
    const delta = x - startX;
    if (Math.abs(delta) > 4) {
      moved = true;
      el.classList.add('is-dragging');
    }
    el.scrollLeft = startScroll - delta;
  };
  const end = () => {
    if (!down) return;
    down = false;
    el.classList.remove('is-dragging');
    // snap only after an actual drag
    if (moved && typeof onEnd === 'function') onEnd(el);
  };

  el.addEventListener('mousedown', (e) => {
    start(e.pageX);
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e) => move(e.pageX));
  window.addEventListener('mouseup', end);
  el.addEventListener('mouseleave', end);

  // prevent clicks after dragging
  el.addEventListener('click', (e) => {
    if (moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // map shift-wheel gestures to horizontal scrolling
  el.addEventListener(
    'wheel',
    (e) => {
      const horizontal = e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (horizontal) {
        const delta = e.shiftKey ? e.deltaY : e.deltaX;
        el.scrollBy({ left: delta, behavior: 'smooth' });
        e.preventDefault();
      }
    },
    { passive: false }
  );

  // snap after touch scrolling settles
  el.addEventListener('touchend', () => {
    if (typeof onEnd === 'function') snapToNearest(el);
  }, { passive: true });
}


function initGallery() {
  const slider = $('#gallerySlider');
  const prev = $('#galleryPrev');
  const next = $('#galleryNext');
  if (!slider) return;

  makeDraggable(slider, snapToNearest);

  const step = () => slideStep(slider) || slider.clientWidth * 0.8;

  if (prev) prev.addEventListener('click', () => slider.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => slider.scrollBy({ left: step(), behavior: 'smooth' }));

  const syncArrows = () => {
    const max = slider.scrollWidth - slider.clientWidth - 4;
    if (prev) prev.style.opacity = slider.scrollLeft <= 4 ? '0.35' : '1';
    if (next) next.style.opacity = slider.scrollLeft >= max ? '0.35' : '1';
  };
  slider.addEventListener('scroll', syncArrows, { passive: true });
  window.addEventListener('resize', syncArrows);
  syncArrows();
}

function initKitchen() {


  const track = $('#kitchenTrack');
  if (!track) return;
  makeDraggable(track, snapToNearest);
}





// reviews carousel

function initReviews() {
  const track = $('#reviewsCarousel');
  const dotsWrap = $('#reviewsDots');
  if (!track || !track.children.length) return;

  const cards = Array.from(track.children);
  let index = 0;
  let timer = null;

  const perView = () => (window.innerWidth > 900 ? 2 : 1);
  const maxIndex = () => Math.max(0, cards.length - perView());

  const dots = [];
  const buildDots = () => {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    dots.length = 0;
    for (let i = 0; i <= maxIndex(); i++) {
      const b = document.createElement('button');
      b.className = 'reviews__dot';
      b.type = 'button';
      b.setAttribute('aria-label', `Отзыв ${i + 1}`);
      b.addEventListener('click', () => {
        goTo(i);
        restart();
      });
      dotsWrap.appendChild(b);
      dots.push(b);
    }
  };

  const goTo = (i) => {
    index = Math.max(0, Math.min(i, maxIndex()));
    const card = cards[0];
    const gap = 24;
    const offset = index * (card.offsetWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
    dots.forEach((d, di) => d.classList.toggle('is-active', di === index));
  };

  const nextSlide = () => goTo(index >= maxIndex() ? 0 : index + 1);

  const restart = () => {
    if (timer) clearInterval(timer);
    if (!prefersReducedMotion) timer = setInterval(nextSlide, 5500);
  };

  // support swipe navigation on touch screens
  let touchX = 0;
  track.addEventListener(
    'touchstart',
    (e) => {
      touchX = e.touches[0].clientX;
      if (timer) clearInterval(timer);
    },
    { passive: true }
  );
  track.addEventListener(
    'touchend',
    (e) => {
      const delta = e.changedTouches[0].clientX - touchX;
      if (Math.abs(delta) > 45) goTo(index + (delta < 0 ? 1 : -1));
      restart();
    },
    { passive: true }
  );

  const wrap = $('.reviews__carousel-wrap');
  if (wrap) {
    wrap.addEventListener('mouseenter', () => timer && clearInterval(timer));
    wrap.addEventListener('mouseleave', restart);
  }

  let resizeT;
  window.addEventListener('resize', () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => {
      buildDots();
      goTo(Math.min(index, maxIndex()));
    }, 150);
  });

  buildDots();
  goTo(0);
  restart();
}

// booking form and validation

const VALIDATORS = {
  name: (v) => {
    if (!v.trim()) return 'Укажите имя';
    if (v.trim().length < 2) return 'Слишком короткое имя';
    if (!/^[А-Яа-яЁёA-Za-z\s-]+$/.test(v.trim())) return 'Только буквы, пробел и дефис';
    return '';
  },
  phone: (v) => {
    const digits = v.replace(/\D/g, '');
    if (!digits) return 'Укажите телефон';
    if (digits.length < 11) return 'Введите 11 цифр номера';
    return '';
  },
  date: (v) => {
    if (!v) return 'Выберите дату';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const picked = new Date(v + 'T00:00:00');
    if (Number.isNaN(picked.getTime())) return 'Некорректная дата';
    if (picked < today) return 'Дата уже прошла';
    const limit = new Date(today);
    limit.setMonth(limit.getMonth() + 6);
    if (picked > limit) return 'Бронь открыта на 6 месяцев вперёд';
    return '';
  },
  time: (v) => (v ? '' : 'Выберите время'),
  guests: (v) => (v ? '' : 'Укажите количество гостей'),
  room: () => '',
  comment: () => '',
};

function formatPhone(input) {
  let digits = input.value.replace(/\D/g, '');
  if (digits.startsWith('8')) digits = '7' + digits.slice(1);
  if (!digits.startsWith('7')) digits = '7' + digits;
  digits = digits.slice(0, 11);

  let out = '+7';
  if (digits.length > 1) out += ' (' + digits.slice(1, 4);
  if (digits.length >= 4) out += ') ' + digits.slice(4, 7);
  if (digits.length >= 7) out += '-' + digits.slice(7, 9);
  if (digits.length >= 9) out += '-' + digits.slice(9, 11);
  input.value = out;
}

function initBooking() {
  const form = $('#bookingForm');
  if (!form) return;

  const dateInput = $('#bDate');
  if (dateInput) {
    const today = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    dateInput.min = iso(today);
    const max = new Date(today);
    max.setMonth(max.getMonth() + 6);
    dateInput.max = iso(max);
  }

  const phoneInput = $('#bPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', () => formatPhone(phoneInput));
    phoneInput.addEventListener('focus', () => {
      if (!phoneInput.value) phoneInput.value = '+7 (';
    });
  }

  const fieldOf = (el) => el.closest('.form__field');

  const validateField = (el) => {
    const rule = VALIDATORS[el.name];
    if (!rule) return true;
    const msg = rule(el.value);
    const field = fieldOf(el);
    const errBox = field ? field.querySelector('.form__error') : null;

    if (field) {
      field.classList.toggle('has-error', Boolean(msg));
      field.classList.toggle('is-valid', !msg && Boolean(el.value.trim()));
    }
    if (errBox) errBox.textContent = msg;
    el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  };

  const controls = $$('input, select, textarea', form);
  controls.forEach((el) => {
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => {
      const field = fieldOf(el);
      if (field && field.classList.contains('has-error')) validateField(el);
    });
    el.addEventListener('change', () => validateField(el));
  });

  // preselect the room chosen from a VIP card
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.vip-card__link');
    if (!link) return;
    const roomName = link.dataset.room;
    const select = $('#bRoom');
    if (!select || !roomName) return;
    const opt = Array.from(select.options).find((o) => o.value.startsWith(roomName));
    if (opt) select.value = opt.value;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const ok = controls.map(validateField).every(Boolean);
    if (!ok) {
      const firstBad = form.querySelector('.form__field.has-error input, .form__field.has-error select');
      if (firstBad) {
        firstBad.focus();
        firstBad.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const btn = $('#bookingSubmit');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Отправляем...';
    }

    // demo submission; connect a backend for production
    setTimeout(() => {
      const success = $('#bookingSuccess');
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 900);
  });
}

// venue map

function initMap() {
  const node = document.getElementById('map-wide');
  if (!node || typeof L === 'undefined') return;

  const { lat, lng, address, phone, phoneRaw } = DATA.venue;

  const map = L.map(node, {
    center: [lat, lng],
    zoom: 16,
    scrollWheelZoom: false,
    zoomControl: true,
    attributionControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    subdomains: 'abc',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const pin = L.divIcon({
    className: '',
    html: '<div class="map-pin" role="img" aria-label="SOHO Karaoke Bar"></div>',
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    popupAnchor: [0, -28],
  });

  L.marker([lat, lng], { icon: pin, title: 'SOHO Karaoke Bar' })
    .addTo(map)
    .bindPopup(
      `<strong>SOHO Karaoke Bar</strong><br/>${address}<br/>` +
        `<a href="tel:${phoneRaw}">${phone}</a>`
    );

  // enable wheel zoom only while interacting with the map
  map.on('click', () => map.scrollWheelZoom.enable());
  node.addEventListener('mouseleave', () => map.scrollWheelZoom.disable());

  // refresh map dimensions after layout changes
  setTimeout(() => map.invalidateSize(), 300);
  window.addEventListener('resize', () => map.invalidateSize());
}

// menu download

function initMenuDownload() {
  const btn = $('#menuDownload');
  if (!btn) return;
  btn.setAttribute('href', 'menu.pdf');
  btn.setAttribute('download', 'SOHO-menu.pdf');
}

// responsive hero video

function initHeroVideo() {
  const video = $('#heroVideo');
  if (!video) return;

  // avoid video playback for reduced motion or limited data
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const saveData = Boolean(conn && conn.saveData);
  const slowNet = Boolean(conn && /^(slow-2g|2g|3g)$/.test(conn.effectiveType || ''));

  if (prefersReducedMotion || saveData || slowNet) {
    video.removeAttribute('autoplay');
    return; // keep the poster as a static fallback
  }

  // select a video size suited to the viewport
  const w = Math.max(window.innerWidth, window.innerHeight);
  const dpr = window.devicePixelRatio || 1;
  let src;
  if (w < 700) src = video.dataset.srcSd;
  else if (w < 1400 || dpr < 1.5) src = video.dataset.srcMd;
  else src = video.dataset.srcHd;

  const source = document.createElement('source');
  source.src = src || video.dataset.srcMd;
  source.type = 'video/mp4';
  video.appendChild(source);
  video.load();

  // keep the poster if playback fails
  const play = video.play();
  if (play && typeof play.catch === 'function') {
    play.catch(() => {
      /* poster остаётся видимым, это ожидаемое поведение */
    });
  }
  video.addEventListener('error', () => {
    video.style.display = 'none';
  });

  // pause playback while the hero is off screen
  if ('IntersectionObserver' in window) {
    const hero = $('#hero');
    if (hero) {
      new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) video.play().catch(() => {});
            else video.pause();
          });
        },
        { threshold: 0.05 }
      ).observe(hero);
    }
  }
}

// smooth anchor scrolling with a fixed-header offset

function initAnchors() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id === '#') {
      if (link.dataset.stub) e.preventDefault();
      return;
    }
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    const nav = $('#nav');
    const offset = nav ? nav.offsetHeight + 12 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

// support arrow-key navigation in the gallery
function initGalleryKeyboard() {
  const slider = $('#gallerySlider');
  if (!slider) return;
  slider.setAttribute('tabindex', '0');
  slider.setAttribute('role', 'listbox');
  slider.setAttribute('aria-label', 'Галерея клуба');

  slider.addEventListener('keydown', (e) => {
    const step = slideStep(slider);
    if (!step) return;
    if (e.key === 'ArrowRight') {
      slider.scrollBy({ left: step, behavior: 'smooth' });
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      slider.scrollBy({ left: -step, behavior: 'smooth' });
      e.preventDefault();
    }
  });
}

// initialize page content and behavior

function boot() {
  renderFeatures();
  renderGallery();
  renderRooms();
  renderDishes();
  renderEvents();
  renderReviews();
  renderSocials();
  renderMarquee();

  initNav();
  initAnchors();
  initReveal();
  initCounters();
  initGallery();
  initGalleryKeyboard();
  initKitchen();
  initReviews();
  initBooking();
  initMenuDownload();
  initHeroVideo();
  initMap();

  initActiveSection();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
