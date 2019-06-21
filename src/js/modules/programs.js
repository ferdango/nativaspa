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
  
  tns({
    container: '.slider-banner__vertical',
    items: 4,
    gutter: 16,
    lazyload: false,
    mouseDrag : true,
    loop: false,
    slideBy: 1,
    axis: 'vertical',
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
    nav       : true,
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
