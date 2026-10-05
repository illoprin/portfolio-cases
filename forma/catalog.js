// catalog product data
const productsData = [
  {
    id: 1,
    title: 'Диван Loft Modern',
    type: 'sofa',
    materials: ['fabric', 'wood'],
    img: './images/image1.webp'
  },
  {
    id: 2,
    title: 'Диван Cloud',
    type: 'sofa',
    materials: ['fabric'],
    img: './images/image14.webp'
  },
  {
    id: 3,
    title: 'Кресло Nordic',
    type: 'chair',
    materials: ['wood', 'fabric'],
    img: './images/image2.webp'
  },
  {
    id: 4,
    title: 'Кресло Velvet',
    type: 'chair',
    materials: ['fabric', 'metal'],
    img: './images/image15.webp'
  },
  {
    id: 5,
    title: 'Стол Heritage',
    type: 'table',
    materials: ['wood'],
    img: './images/image3.webp'
  },
  {
    id: 6,
    title: 'Стол Glass Top',
    type: 'table',
    materials: ['glass', 'metal'],
    img: './images/image16.webp'
  },
  {
    id: 7,
    title: 'Шкаф Minimalist',
    type: 'cabinet',
    materials: ['wood'],
    img: './images/image4.webp'
  },
  {
    id: 8,
    title: 'Шкаф Industrial',
    type: 'cabinet',
    materials: ['wood', 'metal'],
    img: './images/image17.webp'
  },
  {
    id: 9,
    title: 'Кровать Aurora',
    type: 'bed',
    materials: ['wood', 'fabric'],
    img: './images/image5.webp'
  },
  {
    id: 10,
    title: 'Кровать Luxury',
    type: 'bed',
    materials: ['wood', 'leather'],
    img: './images/image18.webp'
  },
  {
    id: 11,
    title: 'Полки Flex',
    type: 'shelf',
    materials: ['wood', 'metal'],
    img: './images/image6.webp'
  },
  {
    id: 12,
    title: 'Полки Floating',
    type: 'shelf',
    materials: ['wood'],
    img: './images/image4.webp'
  },
  {
    id: 13,
    title: 'Диван Chester',
    type: 'sofa',
    materials: ['leather', 'wood'],
    img: './images/image19.webp'
  },
  {
    id: 14,
    title: 'Кресло Lounge',
    type: 'chair',
    materials: ['leather', 'metal'],
    img: './images/image20.webp'
  },
  {
    id: 15,
    title: 'Стол Console',
    type: 'table',
    materials: ['wood', 'metal'],
    img: './images/image21.webp'
  }
];

const categoryLabels = {
  sofa: 'Диваны',
  chair: 'Кресла',
  table: 'Столы',
  cabinet: 'Шкафы',
  bed: 'Кровати',
  shelf: 'Полки'
};

const materialLabels = {
  wood: 'Дерево',
  metal: 'Металл',
  glass: 'Стекло',
  fabric: 'Ткань',
  leather: 'Кожа'
};

// active catalog filters
let filters = {
  type: 'all',
  material: 'all'
};

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
// render products matching the active filters
const renderProducts = () => {
  const grid = document.getElementById('catalog-grid');
  const emptyState = document.getElementById('catalog-empty');

  const filtered = productsData.filter(p => {
    const typeMatch = filters.type === 'all' || p.type === filters.type;
    const materialMatch = filters.material === 'all' || p.materials.includes(filters.material);
    return typeMatch && materialMatch;
  });

  if (filtered.length === 0) {
    grid.style.display = 'none';
    emptyState.style.display = 'block';
  } else {
    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    grid.innerHTML = filtered
      .map(
        p => `
      <article class="product-card " data-id="${p.id}">
        <img src="${p.img}" alt="${p.title}" class="product-img" loading="lazy" />
        <div class="product-body">
          <h3 class="product-title">${p.title}</h3>
          <p class="product-category">${categoryLabels[p.type]}</p>
          <div class="product-meta">
            ${p.materials.map(m => `<span class="product-tag">${materialLabels[m]}</span>`).join('')}
          </div>
        </div>
      </article>
    `
      )
      .join('');

    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        openModal();
      });
    });
  }
};

// update the result count
const updateSummary = () => {
  const summary = document.getElementById('filters-summary');
  const count = productsData.filter(p => {
    const typeMatch = filters.type === 'all' || p.type === filters.type;
    const materialMatch = filters.material === 'all' || p.materials.includes(filters.material);
    return typeMatch && materialMatch;
  }).length;

  summary.textContent = `Найдено товаров: ${count}`;
};

// connect filter controls
const initFilters = () => {
  const typeSelect = document.getElementById('filter-type');
  const materialSelect = document.getElementById('filter-material');
  const resetBtn = document.getElementById('filter-reset');

  typeSelect.addEventListener('change', e => {
    filters.type = e.target.value;
    renderProducts();
    updateSummary();
  });

  materialSelect.addEventListener('change', e => {
    filters.material = e.target.value;
    renderProducts();
    updateSummary();
  });

  resetBtn.addEventListener('click', () => {
    filters.type = 'all';
    filters.material = 'all';
    typeSelect.value = 'all';
    materialSelect.value = 'all';
    renderProducts();
    updateSummary();
  });
};

// request modal behavior
const openModal = () => {
  const modal = document.getElementById('request-modal');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  const modal = document.getElementById('request-modal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.getElementById('request-form').reset();
  document.getElementById('modal-success').style.display = 'none';
  document.querySelector('.modal-form').style.display = 'flex';
  document.querySelectorAll('.form-error').forEach(e => (e.style.display = 'none'));
  document.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));
};

const initModal = () => {
  const modal = document.getElementById('request-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');
  const openBtn = document.getElementById('open-request-modal');
  const successCloseBtn = document.getElementById('success-close');
  const form = document.getElementById('request-form');

  openBtn?.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  successCloseBtn.addEventListener('click', closeModal);

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const email = document.getElementById('form-email').value.trim();

    let valid = true;

    document.querySelectorAll('.form-error').forEach(e => {
      e.textContent = '';
      e.classList.remove('visible');
    });
    document.querySelectorAll('.form-input').forEach(i => i.classList.remove('error'));

    if (!name) {
      document.getElementById('error-name').textContent = 'Введите имя';
      document.getElementById('error-name').classList.add('visible');
      document.getElementById('form-name').classList.add('error');
      valid = false;
    }

    if (!phone) {
      document.getElementById('error-phone').textContent = 'Введите телефон';
      document.getElementById('error-phone').classList.add('visible');
      document.getElementById('form-phone').classList.add('error');
      valid = false;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('error-email').textContent = 'Некорректный email';
      document.getElementById('error-email').classList.add('visible');
      document.getElementById('form-email').classList.add('error');
      valid = false;
    }

    if (valid) {
      // replace with a real request when backend integration is added
      console.log('Form submitted:', { name, phone, email });
      document.querySelector('.modal-form').style.display = 'none';
      document.getElementById('modal-success').style.display = 'block';
    }
  });
};

// shared header behavior
const initHeaderScroll = () => {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
};

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

const setFooterYear = () => {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
};

// initialize the catalog page
const init = () => {
  renderProducts();
  updateSummary();
  initFilters();
  initModal();
  initHeaderScroll();
  initBurger();
  setFooterYear();
  observeReveals();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
