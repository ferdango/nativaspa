$(".container-nav__link").click(function(){
    $(this).next(".megamenu-container").addClass("active");
    $("body").addClass("active");
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