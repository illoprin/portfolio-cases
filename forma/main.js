// landing page content data
const statsData = [
  { num: '500+', label: 'Проектов' },
  { num: '12 лет', label: 'На рынке' },
  { num: '98%', label: 'Довольных клиентов' },
  { num: '3 мес', label: 'Гарантия' }
];

const aboutText = `
  <p>Forma — это мебельная мастерская полного цикла. Мы создаём интерьерные решения, которые раскрывают индивидуальность пространства.</p>
  <p>Работаем с частными заказчиками и дизайнерами. Каждый проект — от первого эскиза до финальной установки — ведёт один мастер.</p>
`;

const aboutValues = [
  'Индивидуальный дизайн под ваш интерьер',
  'Натуральные материалы премиум-класса',
  'Собственное производство в Москве',
  'Гарантия 3 года на всю мебель'
];

const worksData = [
  {
    title: 'Гостиная Loft',
    category: 'Диваны',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Кресло Nordic',
    category: 'Кресла',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Стол Heritage',
    category: 'Столы',
    img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Шкаф Minimalist',
    category: 'Шкафы',
    img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Кровать Aurora',
    category: 'Кровати',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Полки Flex',
    category: 'Полки',
    img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&auto=format&fit=crop&q=80'
  }
];

const processSteps = [
  {
    title: 'Консультация',
    desc: 'Обсуждаем ваши пожелания, замеряем пространство, подбираем материалы и стили.'
  },
  {
    title: 'Дизайн-проект',
    desc: 'Создаём 3D-визуализацию и чертежи. Вносим правки до полного согласования.'
  },
  {
    title: 'Производство',
    desc: 'Изготавливаем мебель на собственном производстве. Контролируем каждый этап.'
  },
  {
    title: 'Доставка и сборка',
    desc: 'Доставляем, собираем и устанавливаем мебель. Проверяем качество на месте.'
  }
];

const materialsData = [
  {
    title: 'Массив дуба',
    desc: 'Европейский дуб класса А',
    img: 'https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=400&auto=format&fit=crop&q=80'
  },
  {
    title: 'Итальянская кожа',
    desc: 'Натуральная кожа премиум',
    img: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400&auto=format&fit=crop&q=80'
  },
  {
    title: 'Металл',
    desc: 'Сталь с порошковым покрытием',
    img: 'https://images.unsplash.com/photo-1492943301880-e4b772f94dc6?w=400&auto=format&fit=crop&q=80'
  },
  {
    title: 'Стекло',
    desc: 'Закалённое стекло 10мм',
    img: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=400&auto=format&fit=crop&q=80'
  }
];

const testimonialsData = [
  {
    quote: 'Заказывали кухню под заказ. Результат превзошёл ожидания — качество безупречное, сроки соблюдены. Мастера — профессионалы своего дела!',
    name: 'Анна Петрова',
    role: 'Москва, ЖК Сколково',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    quote: 'Сделали встроенный шкаф в спальню. Идеально вписался в нишу, используется каждый сантиметр. Очень довольны работой!',
    name: 'Дмитрий Соколов',
    role: 'Московская область',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    quote: 'Обращались за обеденным столом из массива. Получили настоящее произведение искусства. Гости всегда восхищаются!',
    name: 'Елена Иванова',
    role: 'Москва, Патриаршие пруды',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
];

// reveal elements as they enter the viewport
const observeReveals = () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// update header styling on scroll
const initHeaderScroll = () => {
  const header = document.getElementById('site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
};

// toggle the mobile navigation
const initBurger = () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggle = () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', !expanded);
    mobileMenu.setAttribute('aria-hidden', expanded);
  };

  burger.addEventListener('click', toggle);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
};

// render landing page sections
const renderStats = () => {
  const grid = document.getElementById('stats-grid');
  grid.innerHTML = statsData
    .map(
      s => `
    <div class="stat-item">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `
    )
    .join('');
};

const renderAbout = () => {
  document.getElementById('about-text').innerHTML = aboutText;
  document.getElementById('about-values').innerHTML = aboutValues
    .map(
      v => `
    <li class="about-value-item">
      <span class="about-value-icon">✓</span>
      <span class="about-value-text">${v}</span>
    </li>
  `
    )
    .join('');
};

const renderWorks = () => {
  const grid = document.getElementById('works-grid');
  grid.innerHTML = worksData
    .map(
      w => `
    <article class="work-card">
      <img src="${w.img}" alt="${w.title}" class="work-card-img" loading="lazy" />
      <div class="work-card-overlay">
        <h3 class="work-card-title">${w.title}</h3>
        <p class="work-card-category">${w.category}</p>
      </div>
    </article>
  `
    )
    .join('');
};

const renderProcess = () => {
  const list = document.getElementById('process-list');
  list.innerHTML = processSteps
    .map(
      s => `
    <li class="process-item">
      <h3 class="process-title">${s.title}</h3>
      <p class="process-desc">${s.desc}</p>
    </li>
  `
    )
    .join('');
};

const renderMaterials = () => {
  const grid = document.getElementById('materials-grid');
  grid.innerHTML = materialsData
    .map(
      m => `
    <article class="material-card">
      <img src="${m.img}" alt="${m.title}" class="material-img" loading="lazy" />
      <div class="material-body">
        <h3 class="material-title">${m.title}</h3>
        <p class="material-desc">${m.desc}</p>
      </div>
    </article>
  `
    )
    .join('');
};

// render and control the testimonials carousel
const initTestimonials = () => {
  const track = document.getElementById('testimonials-track');
  const dotsContainer = document.getElementById('t-dots');
  const prevBtn = document.getElementById('t-prev');
  const nextBtn = document.getElementById('t-next');

  track.innerHTML = testimonialsData
    .map(
      t => `
    <article class="testimonial-card">
      <blockquote class="testimonial-quote">"${t.quote}"</blockquote>
      <div class="testimonial-author">
        <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" loading="lazy" />
        <div class="testimonial-info">
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </article>
  `
    )
    .join('');

  dotsContainer.innerHTML = testimonialsData
    .map((_, i) => `<button class="t-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Отзыв ${i + 1}"></button>`)
    .join('');

  let currentIndex = 0;

  const updateCarousel = () => {
    const cardWidth = track.children[0].offsetWidth;
    const gap = 16;
    track.scrollTo({ left: currentIndex * (cardWidth + gap), behavior: 'smooth' });

    document.querySelectorAll('.t-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : testimonialsData.length - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < testimonialsData.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  document.querySelectorAll('.t-dot').forEach(dot => {
    dot.addEventListener('click', e => {
      currentIndex = parseInt(e.target.dataset.index);
      updateCarousel();
    });
  });
};

// keep the footer year current
const setFooterYear = () => {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
};

// initialize the landing page
const init = () => {
  renderStats();
  renderAbout();
  renderWorks();
  renderProcess();
  renderMaterials();
  initTestimonials();
  setFooterYear();
  initHeaderScroll();
  initBurger();
  observeReveals();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
