const swiperBanner = new Swiper('.swiper-banner', {
    loop: true,
    speed: 1200,
    // autoplay: {
    //     delay: 1000
    // },
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});
const swiperFeatures = new Swiper('.swiper-features', {
    loop: true,
    slidesPerView: 3.5,
    slidespergroup: 1,
    spaceBetween: 31,
    speed: 1200,
    autoplay: {
        delay: 900,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.btn-next1',
        prevEl: '.btn-prev1',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3.5,
            spaceBetween: 40
        }
    }
});
const swiperGallery = new Swiper('.swiper-gallery', {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
     speed: 1200,
    autoplay: {
        delay: 900
    },
    navigation: {
        nextEl: '.btn-next2',
        prevEl: '.btn-prev2',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 0
        }
    }
});