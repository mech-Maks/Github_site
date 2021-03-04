'use strict';

import Swiper from 'swiper/swiper-bundle.js';
import Inputmask from 'inputmask';

window.onload = function() {
  let navMenuBtnElem = document.querySelector('.header__nav-button'),
      headerElem = document.querySelector('.header'),
      getInfoButton = Array.from(document.querySelectorAll('.get-info-button')),
      callButton = Array.from(document.querySelectorAll('.call-button')),
      formContainerElem = document.querySelector('.form-container'),
      submitButton = document.querySelector('.form__submit'),
      phoneNumElem = document.querySelector('.whatsup__input');
      
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(phoneNumElem);
  

  const swiper = new Swiper('.gallery', {
    // Optional parameters
    loop: true,

    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
      840: {
        slidesPerView: 2
        
      },

      1210: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  getInfoButton.forEach(item => {
    item.addEventListener('click', () => {
      formContainerElem.classList.toggle('form-open');
    })
  })

  callButton.forEach(item => {
    item.addEventListener('click', () => {
      formContainerElem.classList.toggle('form-open');
    })
  })

  submitButton.addEventListener('click', () => {
    
    
  })

  formContainerElem.addEventListener('click', (ev) => {
    console.log(ev.target);
    
    if (ev.target == formContainerElem) {
      formContainerElem.classList.toggle('form-open');
    }
  })

  navMenuBtnElem.addEventListener('click', () => {
    headerElem.classList.toggle('open-menu');

    if ( headerElem.classList.contains('open-menu') ) {
      navMenuBtnElem.setAttribute('aria-label', 'закрыть меню')
    } else {
      navMenuBtnElem.setAttribute('aria-label', 'открыть меню')
    }
  })
}
