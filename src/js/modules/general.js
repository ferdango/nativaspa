var HELPERS = {
    activeOverlay() {
      $('.overlay').addClass('active')
      $('body').addClass('active')
    },
    closeOverlay() {
      $('.overlay').removeClass('active')
      $('body').removeClass('active')
    },
    toggleModal(modal, callback = null) {
      var modalNode = document.querySelector(`.${modal}`),
        closeModal = modalNode.querySelector('* .modal__close')
  
      modalNode.classList.add('active')
      HELPERS.activeOverlay()
  
      closeModal.onclick = function() {
        HELPERS.closeModal(modalNode, callback)
      }
  
      document.querySelector('.overlay').onclick = function() {
        for (const i in ACTIVE_OVERLAY) {
          const element = ACTIVE_OVERLAY[i]
          if($(`.${element}`).hasClass('active')) {
            if(callback) callback()
            $(`.${element}`)
              .removeClass('active')
              .removeAttr('style')
            HELPERS.closeOverlay()
          }
        }
      }
    },
    closeModal(modalNode, callback) {
      // console.log(modalNode)
      if(typeof modalNode === 'string') modalNode = document.getElementById(modalNode)
  
      if(callback) callback()
      modalNode.classList.remove('active')
      HELPERS.closeOverlay()
    },
    removeActive() {
      $('.overlay').on('click', () => {
        /*console.log("here")
        $(".sidebar-menu, .modal").removeClass("active")
        $(".overlay").removeClass("active");
        $("body").removeClass("active")*/
      })
    }
  }
  
  var ACTIVE_OVERLAY = {
    SIDEBAR_CART  : 'sidebar-cart',
    MODAL         : 'modal',
    MENU          : 'menu',
    BOX_SEARCH    : 'box-search',
    SIZE_GUIDE    : 'size-guide',
    PRODUCT_TAB   : 'product-tab',
    HEADER_MOVIL  : 'header-mobile',
    MEGAMENU_MOVIL: 'megamenu-mobile'
  }
  
  HELPERS.removeActive()
  