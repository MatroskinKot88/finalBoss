import '../scss/style.scss'
import '../js/swiper-bundle.js'

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth <= 768) {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      centeredSlades: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        dynamicBullet: true,
        spaceBetween: 30
      }
    })
  }

  const showButton = document.querySelector('.show-more-btn')
  const brandsGrid = document.querySelector('.brands__grid')
  const textButton = document.querySelector('.show-more-btn__text')
  const showIcon = document.querySelector('.show-more-btn__icon')

  showButton.addEventListener('click', function () {
    brandsGrid.classList.toggle('brands__grid--show')
    showIcon.classList.toggle('rotate')

    if (brandsGrid.classList.contains('brands__grid--show')) {
      textButton.textContent = 'Скрыть'
    } else {
      textButton.textContent = 'Показать все'
    }
  })

  // Управление боковым меню
  const sidebar = document.querySelector('.sidebar')
  const burgerBtn = document.querySelector('.header__burger')
  const closeBtn = document.querySelector('.sidebar__close')

  if (burgerBtn && sidebar) {
    burgerBtn.addEventListener('click', function () {
      sidebar.classList.add('open')
    })
  }

  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', function () {
      sidebar.classList.remove('open')
    })
  }
})
