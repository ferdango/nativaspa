AOS.init({
  duration: 1200,
})

$(window).scroll(function(){
  if(window.innerWidth > 1024) {
    if ($(window).scrollTop() > 0) {
      $('.container-header').addClass('fixed-header');
      $(".brand.white-color").removeClass("active-logo")
      $(".brand.blue-color").addClass("active-logo")
    }
    else {
        $('.container-header').removeClass('fixed-header');
        $(".brand.blue-color").toggleClass("active-logo");
        $(".brand.white-color").toggleClass("active-logo");
    }
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
    if(window.innerWidth < 1024) {
    
    }else{
      $(".container-nav__link").removeClass("active");
      $(this).addClass("active");
      $(".megamenu-container").removeClass("active");
      $("body").removeClass("active");
      $(this).next(".megamenu-container").toggleClass("active");
      $('.container-header').addClass('fixed-header');
      $(".brand.white-color").toggleClass("active-logo");
      $(".brand.blue-color").toggleClass("active-logo");
      $("body").toggleClass("active");
    }
    
})

//only promotion
$(".btn-reservar").click(function(){
    $(".modal-contact-us").addClass("active");
})

//Reserve modal
$('.btn-reserv').click(function() {
  HELPERS.toggleModal('modal-contact-us')
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
      $('.content__item__body.active')
        .next().stop(false)
        .slideUp()
      $('.content__item__body').removeClass('active')
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
      $('.content__item__body').removeClass('active')
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

} else {
  $('.services .tabs-box__item').mouseover(function(e) {
    e.preventDefault()
    let i = $(this).index()
    
    if(!$(this).hasClass('active')) {
      $('.services .tabs-box__item').removeClass('active')
      $(this).addClass('active')
      console.log( $('.services .tabs-content .content')
      .eq(i))
      $('.services .tabs-content .content').removeClass('active');
      //$(this).find(".icon").activeClass("active");
      $('.services .tabs-content .content')
        .eq(i)
        .addClass('active');
    }
  }) 
}


//LOADING BANNER PROGRESS BAR
function resetAnimation(){
  var el     = $("#bar"),  
      newone = el.clone(true);     
  el.before(newone);     
  $("." + el.attr("class") + ":last").remove();

}


//CLOSE OVERLAY MENU
$(".overlay, .sidebar-menu__header").click(function(){
    console.log("here")
    $(".sidebar-menu, .modal").removeClass("active")
    $(".overlay").removeClass("active");
    $("body").removeClass("active")
})

//OPEN SIDEBAR
$(".open-sidebar-menu").click(function(){
  $(".sidebar-menu").toggleClass("active")
  $(".overlay").toggleClass("active");
  $("body").toggleClass("active")
})


$(".megamenu-container__content .cards").click(function(){
  window.location.href = 'detail-programs.html';
})

//SIDEBAR MENU
$(".sidebar-menu__list__item__link").click(function(){
  if($(this).next(".sidebar-menu__sublist")){
    $(this).next(".sidebar-menu__sublist").toggleClass('active')
    $(this).children(".icon").toggleClass("icon-arrow-right").toggleClass("icon-arrow-down")
  }
})