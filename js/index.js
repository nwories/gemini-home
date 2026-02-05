const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const menuOpen = document.querySelector('.menu-btn');
const menuClose = document.querySelector('.close');

// add event listener
menuOpen.addEventListener('click', function(){
    menu.style.right = 0;
    menuClose.style.display = 'block';
    overlay.style.display = 'block';
    console.log('clicked');
})
menuClose.addEventListener('click', () => {
    menu.style.right = '-80%';
    menuClose.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    menu.style.right = '-80%';
    menuClose.style.display = 'none';
    overlay.style.display = 'none';
});
