$(document).ready(function(){
  $(".banner-programs__info-footer__item").click(function(){      
    resetAnimation()
  })
})


tns({
    container: '.slider-banner__horizontal',
    items: 1,
    autoHeight: true,
    lazyload: false,
    slideBy: 'page',
    loop: true,
    mouseDrag : true,
    navContainer: '.slider-banner__vertical',
    controls: false
  });
  var Orientation = 'horizontal'
if($(window).width() > 767) Orientation = 'vertical'
  tns({
    container: '.slider-banner__vertical',
    items: 4,
    gutter: 16,
    lazyload: false,
    mouseDrag : true,
    loop: false,
    slideBy: 1,
    axis: Orientation,
    nav: false
  });
  
  $(".programs .cards").click(function(){
    window.location.href = 'detail-programs.html';
  })

  
var bannerHome = tns({
    container : '.banner-programs-container',
    mouseDrag : true,
    items     : 1,
    axis: 'horizontal',
    slideBy: 'page',
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    navContainer: '.banner-programs__info-footer',
    controls  : false,
    lazyload  : true,
    speed     : 400,
    responsive: {
    },
    onInit    : function() {
    }
  })


  var sliderFloatProms = tns({
    container : '.float-promotions__proms .slider',
    mouseDrag : true,
    items     : 3,
    slideBy: 1,
    nav: false,
    autoplay: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls  : false,
    lazyload  : true,
    speed     : 400,
    responsive: {
    },
    onInit    : function() {
    }
  })

$(".my-promotions-container__body__item").click(function(){
    window.location.href = 'detail-programs.html';
})
