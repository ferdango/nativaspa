AOS.init({
  duration: 1200,
})

$(".container-nav__link").click(function(){
    $(".megamenu-container").removeClass("active");
    $("body").removeClass("active");
    $(this).next(".megamenu-container").toggleClass("active");
    $("body").toggleClass("active");
})

//programs view
$(".my-promotions-container__body__item").click(function(){
    window.location.href = 'detail-programs.html';
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

// Detail treatment
tns({
  container : '.our-procedures__slider',
  mouseDrag : true,
  gutter    : 60,
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
      edgePadding: 20,
      gutter: 20,
      items: 2
    },
    768: {
      gutter: 30,
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


//Home
$("#video-gallery").lightGallery();

$(document).ready(function(){
  $(".banner-home .tns-nav button").click(function(){      
    resetAnimation()
  })
})

function resetAnimation(){
  var el     = $("#bar"),  
      newone = el.clone(true);
            
  el.before(newone);     
  $("." + el.attr("class") + ":last").remove();

}
var bannerHome = tns({
  container : '.banner-home-container',
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
/*
function loadingSlider() {
  var elem = document.querySelector(".bar"); 
  var width = 1;
  var time = setInterval(frame, 30);
  function frame() {
    if (width >= 100) {
      bannerHome.goTo('next')
      clearInterval(time);
      loadingSlider()
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}*/

tns({
  container : '.exclusive-promotions-container__left__slider',
  mouseDrag : true,
  items     : 1,
  axis: 'horizontal',
  nav       : false,
  controls  : false,
  lazyload  : true,
  slideBy: 1,
  speed     : 400,
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
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
    }
  },
  onInit    : function() {
  }
})



//------
// tab
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
  $('.tabs-box__item').click(function(e) {
    e.preventDefault()
    let i = $(this).index()
    
    if(!$(this).hasClass('active')) {
      $('.tabs-box__item').removeClass('active')
      $(this).addClass('active')
      console.log( $('.content')
      .eq(i))
      $('.content-tab').removeClass('active')
      $('.content-tab')
        .eq(i)
        .addClass('active')
    }
  })
}


//Nosotros
tns({
  container : '.banner-instalations-container__banner',
  mouseDrag : true,
  items     : 1,
  slideBy: 'page',
  controls  : false,
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  lazyload  : true,
  speed     : 400,
  navContainer: '.banner-instalations-container__header .right.nav',
  responsive: {
  },
  onInit    : function() {
  }
})


// Detail program
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


// Megamenu 
$(".megamenu-container__close").click(function(){
    $(".megamenu-container").removeClass("active")
    $("body").removeClass("active")
})

$(".programs .cards").click(function(){
  window.location.href = 'detail-programs.html';
})