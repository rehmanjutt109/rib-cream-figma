const swiperBanner = new Swiper('.swiper-banner', {
    loop: true,
    speed: 1200,
    autoplay: {
        delay: 1000
    },
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
document.addEventListener('DOMContentLoaded', function () {
    const driver = new Driver({
        allowClose: false,
    });

    driver.defineSteps([
        {
            element: '#mainnavbar',
            popover: {
                title: 'Welcome to Rib Cream',
                description: 'Start your journey with our premium aesthetic cream products',
                position: 'bottom'
            }
        },
        {
            element: '#productBanner',
            popover: {
                title: 'Our Featured Products',
                description: 'Discover our range of premium numbing creams for all your beauty needs',
                position: 'bottom'
            }
        },
        {
            element: '#productPacks',
            popover: {
                title: 'Product Packs',
                description: 'Choose from our different size options to suit your needs',
                position: 'top'
            }
        },
        {
            element: '#productFeatures',
            popover: {
                title: 'Product Features',
                description: 'Our cream contains only pure and safe ingredients with no prescription required',
                position: 'top'
            }
        },
        {
            element: '#productUse',
            popover: {
                title: 'How To Use',
                description: 'Learn the simple steps to get the best results from our product',
                position: 'top'
            }
        },
        {
            element: '#applicationSteps',
            popover: {
                title: 'Application Process',
                description: 'Follow our easy 4-step process: Wash, Apply, Keep, and Treat',
                position: 'left'
            }
        },
        {
            element: '#productReviews',
            popover: {
                title: 'Customer Reviews',
                description: 'See what our satisfied customers have to say about our products',
                position: 'top'
            }
        },
        {
            element: '#newsletter',
            popover: {
                title: 'Stay Updated',
                description: 'Subscribe to our newsletter for the latest news and exclusive offers',
                position: 'top'
            }
        }
    ]);

    document.getElementById('startTour').addEventListener('click', function () {
        driver.start();
    });
    console.log('Tour initialized');
});
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
