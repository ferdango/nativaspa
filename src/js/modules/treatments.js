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
    nav       : true,
    controls  : false,
    lazyload  : true,
    speed     : 400,
    responsive: {
    },
    onInit    : function() {
    }
  })
