const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const menuOpen = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.close');

const openMenu = () => {
  menu.style.transform = 'translateX(0)';
  menuClose.style.display = 'block';
  overlay.style.display = 'block';
};

const closeMenu = () => {
  menu.style.transform = 'translateX(100%)';
  menuClose.style.display = 'none';
  overlay.style.display = 'none';
};

menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);