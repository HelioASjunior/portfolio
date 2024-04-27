const swiperEl = document.querySelectorAll('.mySwiper');

swiperEl.forEach((swiper) => {
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

        Object.assign(swiper, params)

        swiper.initialize();

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
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
            },
            scrollbar: true,
            navigation: true,
            pagination: {
                clickable: true,
            },
        };

        Object.assign(swiper, params)

        swiper.initialize();

    } else if (screen.width < 1600) {

        const params = {
            centeredSlides: false,
            slidesPerGroupSkip: 1,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                769: {
                    slidesPerView: 4,
                    slidesPerGroup: 2,
                },
            },
            scrollbar: true,
            navigation: true,
            pagination: {
                clickable: true,
            },
        };

        Object.assign(swiper, params)

        swiper.initialize();
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
                    slidesPerView: 5,
                    slidesPerGroup: 2,
                },
            },
            scrollbar: true,
            navigation: true,
            pagination: {
                clickable: true,
            },
        };

        Object.assign(swiper, params)

        swiper.initialize();
    }
}) 