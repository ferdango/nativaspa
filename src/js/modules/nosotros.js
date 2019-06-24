var bannerInstallations = tns({
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
      $(".banner-instalations-container__banner__controls .right").click(function(){
        bannerInstallations.goTo('next')
      })

      $(".banner-instalations-container__banner__controls .left").click(function(){
        bannerInstallations.goTo('prev')
      })
  }
});