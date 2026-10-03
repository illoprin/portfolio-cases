const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('.site-menu');
const menuClose = document.querySelector('.menu-close');
const menuBackdrop = document.querySelector('.menu-backdrop');
const menuItems = [...document.querySelectorAll('.menu-item')];
const projectCards = [...document.querySelectorAll('.project-card')];

function setMenuImage(index = 0) {
  const image = projectCards[index]?.dataset.menuImage;
  if (image) menuBackdrop.style.backgroundImage = `url("${image}")`;
}

function setMenuOpen(isOpen) {
  document.body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  siteMenu.setAttribute('aria-hidden', String(!isOpen));
  siteMenu.inert = !isOpen;

  if (isOpen) {
    setMenuImage();
    menuItems[0]?.focus({ preventScroll: true });
  } else {
    menuToggle.focus({ preventScroll: true });
  }
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});
menuClose.addEventListener('click', () => setMenuOpen(false));

menuItems.forEach((item) => {
  item.addEventListener('mouseenter', () => setMenuImage(Number(item.dataset.project)));
  item.addEventListener('focus', () => setMenuImage(Number(item.dataset.project)));
  item.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
  }
});
