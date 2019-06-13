$(".container-nav__link").click(function(){
    $(".megamenu-container").removeClass("active");
    $("body").removeClass("active");
    $(this).next(".megamenu-container").toggleClass("active");
    $("body").toggleClass("active");
})

//programs view
$(".my-promotions-container__body__item").click(function(){
    window.location.href = 'detail-promotion.html';
})

//only promotion
$(".btn-reservar").click(function(){
    $(".modal-contact-us").addClass("active");
})

//service treatment card 
$(".treatment-service-card").click(function(){
    window.location.href = 'detail-treatment.html';
})

//detail treatment
$(".our-procedures__slider__item").click(function(){
    window.location.href = 'detail-sub-treatment.html';
})

const our_procedures_slider = tns({
    container: '.our-procedures__slider',
    items: 3,
    axis: 'horizontal',
    autoplay: true,
    mode: "carousel",
    //gutter: 50,
    autoWidth: true,
    slideBy: 1,
    nav: false,    
    autoplay: true,
    speed: 400,
    mouseDrag: true,
    lazyload: true,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
});