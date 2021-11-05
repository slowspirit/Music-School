$(function () {
  $('.menu__btn, .menu__list-link').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $(".menu a, .header__logo, .footer__logo, .top-btn").on("click", function (event) {
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.reviews__slider').slick({
    arrows: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path fill="#d3d3d3" d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#d3d3d3" d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"/></svg></button>',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 590,
        settings: {
          arrows: true,
          dots: true,
        }
      }
    ]
  });
});