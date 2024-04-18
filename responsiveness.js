const swiperEl = document.querySelector('swiper-container');

if (screen.width < 500) {

    const params = {
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 1.2,
                slidesPerGroup: 2,
            },
        },
        scrollbar: true,
        navigation: true,
        pagination: {
            clickable: true,
        },
    };

    Object.assign(swiperEl, params)

    swiperEl.initialize();

} else if (screen.width < 1030) {

    const params = {
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 1.4,
                slidesPerGroup: 2,
            },
        },
        scrollbar: true,
        navigation: true,
        pagination: {
            clickable: true,
        },
    };

    Object.assign(swiperEl, params)

    swiperEl.initialize();

} else {

    const params = {
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 3,
                slidesPerGroup: 2,
            },
        },
        scrollbar: true,
        navigation: true,
        pagination: {
            clickable: true,
        },
    };

    Object.assign(swiperEl, params)

    swiperEl.initialize();
}