const swiperElements = document.querySelectorAll(".mySwiper");

swiperElements.forEach((swiper) => {
    const params = {
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: { enabled: true },
        slidesPerView: 1.2,
        breakpoints: {
            500: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1030: {
                slidesPerView: 4,
                slidesPerGroup: 2,
            },
            1600: {
                slidesPerView: 5,
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
