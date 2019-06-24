$("#video-gallery").lightGallery();

$(document).ready(function(){
    $('.container-header').removeClass('fixed-header');
    $(".brand.blue-color").css("display" , "none");
    $(".brand.white-color").css("display" , "block");
    $(".banner-home__info-footer__item").click(function(){      
      resetAnimation()
    })
})




var bannerHome = tns({
  container : '.banner-home-container',
  mouseDrag : true,
  items     : 1,
  axis: 'horizontal',
  slideBy: 'page',
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  navContainer: '.banner-home__info-footer',
  controls  : false,
  lazyload  : true,
  speed     : 400,
  responsive: {
  },
  onInit    : function() {
  }
})

tns({
  container : '.exclusive-promotions-container__left__slider',
  mouseDrag : true,
  items     : 1,
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  nav       : false,
  controls  : false,
  lazyload  : true,
  slideBy: 1,
  speed     : 400,
  responsive: {
    480: {
      items: 2
    },
    768: {
      items: 3
    },
    1024: {
    }
  },
  onInit    : function() {
  }
})



// SPECIALITY TAB
if(window.innerWidth < 1024) {
  setTimeout(() => {
    $('.speciality .content-tab.active')
      .find('.content-tab__header')
      .addClass('active')
      .next().stop(false)
      .slideDown()
  }, 100)

  $('.speciality .content-tab__header').click(function() {
    if(!$(this).hasClass('active')) {
      $('speciality .content-tab.active')
        .next().stop(false)
        .slideUp()
      $('.speciality .content-tab').removeClass('active')
      $('.speciality .content-tab__header.active').removeClass('active')
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
      $('.speciality .content-tab').removeClass('active')
      $('.speciality .content-tab__header.active').removeClass('active')
    }
  })
} else {
  $('.speciality .tabs-box__item').click(function(e) {
    e.preventDefault()
    let i = $(this).index()
    
    if(!$(this).hasClass('active')) {
      $('.speciality .tabs-box__item').removeClass('active')
      $(this).addClass('active')
      console.log( $('.speciality .tabs-content .content-tab')
      .eq(i))
      $('.speciality .tabs-content .content-tab').removeClass('active')
      $('.speciality .tabs-content .content-tab')
        .eq(i)
        .addClass('active')
    }
  })
}

//MENU FUNCTION
$(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
        $('.container-header').addClass('fixed-header');
        $(".brand.blue-color").css("display" , "block");
        $(".brand.white-color").css("display" , "none");
    }
    else {
        $('.container-header').removeClass('fixed-header');
        $(".brand.blue-color").css("display" , "none");
        $(".brand.white-color").css("display" , "block");
    }
});