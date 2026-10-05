// clinic content data
const DATA = {
  benefits: [
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L4 10v6c0 7.46 5.16 14.44 12 16 6.84-1.56 12-8.54 12-16v-6L16 4zm-2 18l-4-4 1.41-1.41L14 19.17l6.59-6.59L22 14l-8 8z" fill="currentColor"/>
            </svg>`,
      title: "VIP-сервис",
      text: "Индивидуальное сопровождение, кофе-брейк в лаунж-зоне и отсутствие очередей",
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 8h-6V6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM14 6h4v2h-4V6zm2 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="currentColor"/>
            </svg>`,
      title: "Современное оборудование",
      text: "Микроскопы Carl Zeiss, 3D-томография и лазерные технологии для максимальной точности",
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4c-6.62 0-12 5.38-12 12s5.38 12 12 12 12-5.38 12-12S22.62 4 16 4zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="currentColor"/>
            </svg>`,
      title: "Персональный подход",
      text: "3D-визуализация будущей улыбки и детальный план лечения перед началом работы",
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6l-8 8 8 8 1.41-1.41L9.83 15H28v-2H9.83l5.58-5.59L14 6zm-2 16c-3.31 0-6-2.69-6-6s2.69-6 6-6" fill="currentColor"/>
            </svg>`,
      title: "Без боли",
      text: "Седация, анестезия последнего поколения и заботливый коллектив",
    },
  ],

  gallery: [
    {
      url: "./images/image1.webp",
      caption: "Приёмная с прованскими акцентами",
    },
    {
      url: "./images/image2.webp",
      caption: "Кабинет с современным оборудованием",
    },
    {
      url: "./images/image3.webp",
      caption: "Зона ожидания",
    },
    {
      url: "./images/image4.webp",
      caption: "Лаунж-зона для отдыха",
    },
    {
      url: "./images/image5.webp",
      caption: "Кабинет ортодонта",
    },
    {
      url: "./images/image6.webp",
      caption: "Операционная для имплантации",
    },
  ],

  services: [
    {
      title: "Имплантация под ключ",
      description:
        "Полное восстановление зубов с использованием имплантов Nobel Biocare и Straumann — мировых лидеров качества. Пожизненная гарантия на работу.",
      image:
        "./images/image7.webp",
      features: [
        "3D-планирование операции",
        "Имплантация без боли под седацией",
        "Временные коронки сразу после установки",
        "Костная пластика при необходимости",
      ],
      materials: ["Nobel Biocare", "Straumann", "Astra Tech"],
    },
    {
      title: "Эстетическая ортопедия",
      description:
        "Виниры, коронки и мостовидные протезы из современных материалов. Создаём естественную улыбку с учётом формы лица и индивидуальных особенностей.",
      image:
        "./images/image2.webp",
      features: [
        "Виниры E-max и керамика",
        "Коронки из диоксида циркония",
        "Цифровое моделирование улыбки",
        "Индивидуальный подбор цвета",
      ],
      materials: ["E-max", "Цирконий", "Керамика IPS"],
    },
    {
      title: "Ортодонтия и элайнеры",
      description:
        "Исправление прикуса брекет-системами и прозрачными элайнерами. Незаметное лечение для взрослых и подростков.",
      image:
        "./images/image3.webp",
      features: [
        "Invisalign и Star Smile",
        "Сапфировые и лингвальные брекеты",
        "3D-визуализация результата",
        "Комфортное лечение без боли",
      ],
      materials: ["Invisalign", "Star Smile", "Damon Clear"],
    },
    {
      title: "Профессиональное отбеливание",
      description:
        "Безопасное отбеливание системами Zoom 4 и Opalescence — осветление до 12 тонов за одну процедуру с защитой эмали.",
      image:
        "./images/image5.webp",
      features: [
        "Отбеливание Zoom 4",
        "Домашние системы Opalescence",
        "Укрепление эмали фтором",
        "Долговременный эффект",
      ],
      materials: ["Zoom 4", "Opalescence", "Amazing White"],
    },
  ],

  doctor: {
    image:
      "./images/image8.webp",
    credentials: [
      "Стаж работы более 15 лет",
      "Кандидат медицинских наук",
      "Сертификат Nobel Biocare (Швейцария)",
      "Член Европейской Ассоциации Остеоинтеграции (EAO)",
      "Более 2000 успешных имплантаций",
      "Регулярное обучение в Германии и Швейцарии",
    ],
  },

  reviews: [
    {
      name: "Елена Смирнова",
      date: "2 недели назад",
      rating: 5,
      text: "Делала имплантацию у Анны Сергеевны — это было лучшее решение! Никакой боли, всё прошло быстро. Клиника как из журнала, очень уютно. Результатом в восторге.",
      service: "Имплантация",
      avatar:
        "./images/image9.webp",
    },
    {
      name: "Дмитрий Козлов",
      date: "1 месяц назад",
      rating: 5,
      text: "Ставил виниры, результат превзошёл ожидания. Улыбка выглядит абсолютно естественно. Персонал внимательный, всё объясняют. Рекомендую!",
      service: "Виниры",
      avatar:
        "./images/image10.webp",
    },
    {
      name: "Ольга Петрова",
      date: "3 недели назад",
      rating: 5,
      text: "Исправляла прикус элайнерами Invisalign. Процесс комфортный, никто не замечал, что я их ношу. Результат отличный, зубы ровные. Спасибо команде!",
      service: "Ортодонтия",
      avatar:
        "./images/image11.webp",
    },
    {
      name: "Максим Николаев",
      date: "2 месяца назад",
      rating: 5,
      text: "Делал отбеливание Zoom 4 — зубы стали белоснежными! Процедура безболезненная, заняла около часа. Клиника на высшем уровне.",
      service: "Отбеливание",
      avatar:
        "./images/image12.webp",
    },
    {
      name: "Анастасия Волкова",
      date: "1 неделю назад",
      rating: 5,
      text: "Проходила комплексную диагностику — очень понравился подход. Несколько врачей осмотрели, составили план лечения. Чувствуешь заботу с первых минут.",
      service: "Диагностика",
      avatar:
        "./images/image13.webp",
    },
    {
      name: "Сергей Орлов",
      date: "3 месяца назад",
      rating: 5,
      text: "Установил коронки из циркония — качество на уровне! Цвет подобрали идеально, не отличить от своих зубов. Очень доволен работой докторов.",
      service: "Коронки",
      avatar:
        "./images/image14.webp",
    },
  ],
};

// render clinic sections from the content data
function renderBenefits() {
  const grid = document.getElementById("benefits-grid");
  if (!grid) return;

  grid.innerHTML = DATA.benefits
    .map(
      (benefit) => `
        <div class="benefit-card reveal">
            <div class="benefit-icon">${benefit.icon}</div>
            <h3 class="benefit-title">${benefit.title}</h3>
            <p class="benefit-text">${benefit.text}</p>
        </div>
    `,
    )
    .join("");
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  grid.innerHTML = DATA.gallery
    .map(
      (item) => `
        <div class="gallery-item reveal-scale">
            <img src="${item.url}" alt="${item.caption}" loading="lazy">
            <div class="gallery-caption">${item.caption}</div>
        </div>
    `,
    )
    .join("");
}

function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = DATA.services
    .map(
      (service) => `
        <div class="service-card reveal">
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}" loading="lazy">
            </div>
            <div class="service-content">
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <div class="service-features">
                    ${service.features
                      .map(
                        (feature) => `
                        <div class="service-feature">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66667 10.115L4.55167 8L3.72834 8.82333L6.66667 11.7617L12.6667 5.76167L11.8433 4.93834L6.66667 10.115Z" fill="currentColor"/>
                            </svg>
                            ${feature}
                        </div>
                    `,
                      )
                      .join("")}
                </div>
                <div class="service-materials">
                    ${service.materials
                      .map(
                        (material) => `
                        <span class="material-tag">${material}</span>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function renderDoctor() {
  const imageContainer = document.getElementById("doctor-image");
  const credentialsContainer = document.getElementById("doctor-credentials");

  if (imageContainer) {
    imageContainer.classList.add("reveal-left");
    imageContainer.innerHTML = `<img src="${DATA.doctor.image}" alt="Анна Сергеевна Волкова" loading="lazy">`;
  }

  const doctorContent = document.querySelector(".doctor-content");
  if (doctorContent) {
    doctorContent.classList.add("reveal-right");
  }

  if (credentialsContainer) {
    credentialsContainer.innerHTML = DATA.doctor.credentials
      .map(
        (credential) => `
            <div class="credential-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 12.6442L5.69 10.0008L4.75833 10.9325L8.33333 14.5075L15.8333 7.0075L14.9017 6.07583L8.33333 12.6442Z" fill="currentColor"/>
                </svg>
                <span>${credential}</span>
            </div>
        `,
      )
      .join("");
  }
}

function renderReviews() {
  const grid = document.getElementById("reviews-grid");
  if (!grid) return;

  grid.innerHTML = DATA.reviews
    .map(
      (review) => `
        <div class="review-card reveal">
            <div class="review-header">
                <div class="review-avatar">
                    <img src="${review.avatar}" alt="${review.name}" loading="lazy">
                </div>
                <div class="review-author">
                    <div class="review-name">${review.name}</div>
                    <div class="review-date">${review.date}</div>
                </div>
            </div>
            <div class="review-rating">
                ${Array(review.rating)
                  .fill()
                  .map(
                    () => `
                    <svg class="review-star" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1.33334L10.06 5.50668L14.6667 6.18001L11.3333 9.42668L12.12 14.0133L8 11.8467L3.88 14.0133L4.66667 9.42668L1.33333 6.18001L5.94 5.50668L8 1.33334Z" fill="currentColor"/>
                    </svg>
                `,
                  )
                  .join("")}
            </div>
            <p class="review-text">${review.text}</p>
            <div class="review-service">${review.service}</div>
        </div>
    `,
    )
    .join("");
}

// handle consultation form submissions
function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log("Form submitted:", data);

  alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");

  e.target.reset();
}

// format phone input as it is typed
function initPhoneMask() {
  const phoneInput = document.querySelector('input[name="phone"]');
  if (!phoneInput) return;

  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 0) {
      if (value[0] !== "7") {
        value = "7" + value;
      }

      let formatted = "+7";
      if (value.length > 1) {
        formatted += " (" + value.substring(1, 4);
      }
      if (value.length >= 5) {
        formatted += ") " + value.substring(4, 7);
      }
      if (value.length >= 8) {
        formatted += "-" + value.substring(7, 9);
      }
      if (value.length >= 10) {
        formatted += "-" + value.substring(9, 11);
      }

      e.target.value = formatted;
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || !href) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// reveal section content as it enters the viewport
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px 20px 0px",
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // include both static and dynamically rendered content
  const revealElements = document.querySelectorAll(
    ".section-title, .section-subtitle, .benefit-card, .gallery-item, .service-card, .doctor-card > *, .review-card, .consultation-card, .footer-col, .reviews-platforms, .reveal",
  );

  revealElements.forEach((el, index) => {
    if (
      !el.classList.contains("reveal") &&
      !el.classList.contains("reveal-left") &&
      !el.classList.contains("reveal-right") &&
      !el.classList.contains("reveal-scale")
    ) {
      // assign the appropriate reveal animation
      if (el.classList.contains("gallery-item")) {
        el.classList.add("reveal-scale");
      } else if (el.classList.contains("doctor-image")) {
        el.classList.add("reveal-left");
      } else if (el.classList.contains("doctor-content")) {
        el.classList.add("reveal-right");
      } else {
        el.classList.add("reveal");
      }
    }
    observer.observe(el);
  });
}

// render content and initialize page interactions
function init() {
  renderBenefits();
  renderGallery();
  renderServices();
  renderDoctor();
  renderReviews();

  const form = document.getElementById("consultation-form");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }

  initPhoneMask();
  initSmoothScroll();
  initScrollReveal();
}

document.addEventListener("DOMContentLoaded", init);
