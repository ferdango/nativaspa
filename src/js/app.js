AOS.init({
  duration: 1200,
})
$(window).scroll(function(){
  if ($(window).scrollTop() >= 70) {
      $('.container-header').addClass('fixed-header');
      $(".brand.white-color").removeClass("active-logo")
      $(".brand.blue-color").addClass("active-logo")
  }
  else {
      $('.container-header').removeClass('fixed-header');
      $(".brand.blue-color").toggleClass("active-logo");
      $(".brand.white-color").toggleClass("active-logo");
  }
});


// Megamenu 
$(".megamenu-container__close").click(function(){
  $(".megamenu-container").removeClass("active")
  $("body").removeClass("active")
  $(".container-nav__link").removeClass("active");
  if(window.innerWidth < 1024) {
    $(".open-sidebar-menu").trigger("click");
  }else{

  }
})

$(".container-nav__link").click(function(){
    $(".container-nav__link").removeClass("active");
    $(this).addClass("active");
    $(".megamenu-container").removeClass("active");
    $("body").removeClass("active");
    $(this).next(".megamenu-container").toggleClass("active");
    $('.container-header').addClass('fixed-header');
    $(".brand.white-color").toggleClass("active-logo");
    $(".brand.blue-color").toggleClass("active-logo");
    $("body").toggleClass("active");
    if(window.innerWidth < 1024) {
      //$(".open-sidebar-menu").
    }else{
      
      
    }
})

//programs view

//only promotion
$(".btn-reservar").click(function(){
    $(".modal-contact-us").addClass("active");
})

//Reserve modal
$('.btn-reserv').click(function() {
  HELPERS.toggleModal('modal-contact-us')
  //$('.modal-contact-us').addClass('active')
})

// tab
if(window.innerWidth < 1024) {
  setTimeout(() => {
    $('.content__item.active')
      .find('.content__item__header')
      .addClass('active')
      .next().stop(false)
      .slideDown()
  }, 100)

  $('.content__item__header').click(function() {
    if(!$(this).hasClass('active')) {
      $('.content__item.active')
        .next().stop(false)
        .slideUp()
      $('.content__item').removeClass('active')
      $('.content__item__header.active').removeClass('active')
      $(this)
        .parent()
        .addClass('active')
      $(this)
        .addClass('active')
        .next().stop(false)
        .slideDown()
    } else {
      $(this)
        .next().stop(false)
        .slideUp()
      $('.content__item').removeClass('active')
      $('.content__item__header.active').removeClass('active')
    }
  })
} else {
  $('.general-tabs__header .tab').click(function(e) {
    e.preventDefault()
    let i = $(this).index()
    if(!$(this).hasClass('active')) {
      $('.general-tabs__header .tab').removeClass('active')
      $(this).addClass('active')
      $('.content__item').removeClass('active')
      $('.content__item')
        .eq(i)
        .addClass('active')
    }
  })
}

//tab megamenu service
if(window.innerWidth < 1024) {
  /*setTimeout(() => {
    $('.content__item.active')
      .find('.content__item__header')
      .addClass('active')
      .next().stop(false)
      .slideDown()
  }, 100)

  $('.content__item__header').click(function() {
    if(!$(this).hasClass('active')) {
      $('.content__item.active')
        .next().stop(false)
        .slideUp()
      $('.content__item').removeClass('active')
      $('.content__item__header.active').removeClass('active')
      $(this)
        .parent()
        .addClass('active')
      $(this)
        .addClass('active')
        .next().stop(false)
        .slideDown()
    } else {
      $(this)
        .next().stop(false)
        .slideUp()
      $('.content__item').removeClass('active')
      $('.content__item__header.active').removeClass('active')
    }
  })*/
} else {
  $('.services .tabs-box__item').click(function(e) {
    e.preventDefault()
    let i = $(this).index()
    
    if(!$(this).hasClass('active')) {
      $('.services .tabs-box__item').removeClass('active')
      $(this).addClass('active')
      console.log( $('.services .tabs-content .content')
      .eq(i))
      $('.services .tabs-content .content').removeClass('active');
      $('.services .tabs-content .content')
        .eq(i)
        .addClass('active');
    }
  })
}

//open menu sidebar
$(".open-sidebar-menu").click(function(){
  $(".container-nav").toggleClass("active")
  $('.container-header').toggleClass('fixed-header');
  $(".brand.white-color").toggleClass("active-logo");
  $(".brand.blue-color").toggleClass("active-logo");
  $(".megamenu-container").removeClass("active")
  $("body").toggleClass("active")
})