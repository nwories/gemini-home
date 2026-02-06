document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');
  const menuOpen = document.querySelector('.menu-btn');
  const menuClose = document.querySelector('.close');

  const openMenu = () => {
    menu.style.transform = 'translateX(0)';
    menuClose.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.style.transform = 'translateX(110%)';
    menuClose.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  };

  menuOpen.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
});