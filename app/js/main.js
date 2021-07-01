$(function(){

  $('.footer-top__title-btn').on('click', function(){
    $(this).siblings().slideToggle();
    $(this).toggleClass('active');
  });

  $('.menu__btn').on('click', function(){
    $('.menu').toggleClass('menu--active')
  });


  $('.top-slider__inner').slick({
    dots:true,
    arrows: false
  });

  $('.partners__wrapper').slick({
    arrows: false,
  });


  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});

