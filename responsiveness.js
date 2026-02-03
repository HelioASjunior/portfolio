const swiperElements = document.querySelectorAll(".mySwiper");

function getSlidesPerView() {
    const width = screen.width;
    if (width < 500) return 1.2;
    if (width < 1030) return 2;
    if (width < 1600) return 4;
    return 5;
}

swiperElements.forEach((swiper) => {
    const params = {
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: { enabled: true },
        breakpoints: {
            769: {
                slidesPerView: getSlidesPerView(),
                slidesPerGroup: 2,
            },
        },
        scrollbar: true,
        navigation: true,
        pagination: { clickable: true },
    };

    Object.assign(swiper, params);
    swiper.initialize();
});
