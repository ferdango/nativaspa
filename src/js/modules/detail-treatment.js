tns({
    container : '.our-procedures__slider',
    mouseDrag : true,
    items     : 1,
    axis: 'horizontal',
    slideBy: 'page',
    nav       : true,
    controls  : false,
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
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
    onInit    : function() {}
  })
  
  
  tns({
    container : '.facial-creams__slider',
    mouseDrag : true,
    gutter    : 60,
    items     : 1,
    axis: 'horizontal',
    slideBy: 'page',
    nav       : true,
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    controls  : false,
    lazyload  : true,
    speed     : 400,
    edgePadding: 20,
    responsive: {
      480: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      768: {
        gutter: 40,
        items: 3
      },
      1024: {
        gutter: 50,
        items: 4
      }
    },
    onInit    : function() {}
  })

$(".our-procedures__slider__item").click(function(){
  window.location.href = 'detail-sub-treatment.html';
})

