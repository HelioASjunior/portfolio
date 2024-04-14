const swiperEl = document.querySelector('swiper-container');

if (screen.width < 500) {
    swiperEl.setAttribute('slides-per-view', '1.2');

} else if (screen.width < 1030) {
    swiperEl.setAttribute('slides-per-view', '1.50');

} else {
    swiperEl.setAttribute('slides-per-view', '3.35');
}