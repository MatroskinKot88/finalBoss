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
  },
});
};
