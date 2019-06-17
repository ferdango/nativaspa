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

//Reserve modal
$('.btn-reserv').click(function() {
  HELPERS.toggleModal('modal-contact-us')
  //$('.modal-contact-us').addClass('active')
})

/*
tns({
  container : '.our-procedures__slider',
  mouseDrag : true,
  items     : 1,
  nav       : true,
  controls  : false,
  lazyload  : true,
  speed     : 400,
  //swipeAngle: false,
  onInit    : function() {}
})*/


// tab

if(window.innerWidth < 1024) {
  setTimeout(() => {
    $('.content__item.active')
      .find('.content__item__header')
      .addClass('active')
      .next()
      .slideDown()
  }, 500)

  $('.content__item__header').click(function() {
    if(!$(this).hasClass('active')) {
      $('.content__item.active')
        .next()
        .slideUp()
      $('.content__item').removeClass('active')
      $('.content__item__header.active').removeClass('active')
      $(this)
        .parent()
        .addClass('active')
      $(this)
        .addClass('active')
        .next()
        .slideDown()
    } else {
      $(this)
        .next()
        .slideUp()
      $('.content__item').removeClass('active')
      $('.content__item__header.active').removeClass('active')
    }
  })
} else {
  /* $('.home-category__link').click(function(e) {
    e.preventDefault()
    let i = $(this).index()
    if(!$(this).hasClass('active')) {
      $('.home-category__link').removeClass('active')
      $(this).addClass('active')
      $('.category-item').removeClass('active')
      $('.category-item')
        .eq(i)
        .addClass('active')
    }
  })*/
}