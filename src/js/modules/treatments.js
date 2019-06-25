$(document).ready(function(){
    $(".banner-treatments__info-footer__item").click(function(){      
        resetAnimation()
    })
})


$(".treatment-service-card").click(function(){
    window.location.href = 'detail-treatment.html';
})

$(".our-procedures__slider__item").click(function(){
    window.location.href = 'detail-sub-treatment.html';
})



var bannerHome = tns({
    container : '.banner-treatments-container',
    mouseDrag : true,
    items     : 1,
    axis: 'horizontal',
    slideBy: 'page',
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    navContainer: '.banner-treatments__info-footer',
    controls  : false,
    lazyload  : true,
    speed     : 400,
    responsive: {
    },
    onInit    : function() {
    }
  })


  var bannerTreatment = tns({
    container : '.service-treatments-container__list',
    mouseDrag : true,
    items     : 1,
    slideBy: 1,
    loop: false,
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls  : false,
    nav  : false,
    lazyload  : true,
    speed     : 400,
    responsive: {
        480: {
          items: 2
        },
        768: {
          items: 3
        },
        1024: {
          items: 4
        }
      },
    onInit    : function() {
    }
  })