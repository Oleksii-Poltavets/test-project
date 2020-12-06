$(document).ready(function(){
  $('.slider').bxSlider({
    pager: false,
    slideWidth: 900
  });

  //animation on click
  const title = document.querySelector('.promo-inner__title'),
        info = document.querySelector('.promo-inner__descr');

  title.addEventListener('click', () => {
    info.classList.toggle('promo-inner__descr_active');
  });

  //header burger
  const menu = document.querySelector('.header-menu'),
    menuItem = document.querySelectorAll('.header-menu__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header-menu_active');
        });
    });
});