export default function SwiperModule() {
    function functionSlider(element, customizeOption, typePagi) {
        const swiperSlider = document.querySelectorAll(element);
        if (swiperSlider) {
            swiperSlider.forEach((item) => {
                const swiper = item.querySelector(".swiper");
                const pagi = item.querySelector(".swiper-pagination");
                const next = item.querySelector(".swiper-next");
                const prev = item.querySelector(".swiper-prev");
                if (!typePagi) {
                    typePagi = "bullets";
                }
                var slide = new Swiper(swiper, {
                    watchSlidesProgress: true,

                    pagination: {
                        el: pagi,
                        type: typePagi,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    fadeEffect: {
                        crossFade: true,
                    },
                    ...customizeOption,
                });
            });
        }
    }

    functionSlider(".element", {
        speed: 1200,
        autoplay: {
            delaY: 5000,
        },
        // slidesPerGroup: 2,
        initialSlide: 0,
        centeredSlides: false,
        loop: false,
        spaceBetween: 24,
        effect: "slide",
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                freeMode: true,
            },
            500: {
                slidesPerView: 2.2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    functionSlider(".banner", {
        speed: 1200,
        autoplay: {
            delaY: 5000,
        },
        slidesPerView: 1,
        initialSlide: 0,
        centeredSlides: false,
        loop: true,
        spaceBetween: 0,
        effect: "slide",
        // breakpoints: {
        //   0: {
        //     slidesPerView: 1.2,
        //     freeMode: true,
        //   },
        //   500: {
        //     slidesPerView: 2.2,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //   },
        //   1200: {
        //     slidesPerView: 3,
        //   },
        // },
        navigation: {
            prevEl: ".bn-navi .swiper-prev",
            nextEl: ".bn-navi .swiper-next",
        },
    });


    functionSlider(".product-group", {
        speed: 1200,
        autoplay: {
            delaY: 5000,
        },
        slidesPerView: "auto",
        initialSlide: 0,
        centeredSlides: false,
        loop: false,
        spaceBetween: 0,
        effect: "slide",
        breakpoints: {
            0: {
                slidesPerView: 1,
                freeMode: true,
            },
            500: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        navigation: {
            prevEl: ".pg-navi .swiper-prev",
            nextEl: ".pg-navi .swiper-next",
        },
    });

    functionSlider(".partner", {
        speed: 3000,
        autoplay: {
            delay: 0,
        },
        slidesPerGroup: 1,
        initialSlide: 0,
        centeredSlides: true,
        loop: true,
        spaceBetween: 0,
        effect: "slide",
        slidesPerView: "auto",
        allowTouchMove: true,
        freeMode: true,
    });
    functionSlider(".partner_tsl", {
        speed: 5000,
        autoplay: {
            delay: 0,
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        initialSlide: 0,
        centeredSlides: true,
        loop: true,
        spaceBetween: 20,
        effect: "slide",
        slidesPerView: "auto",
        allowTouchMove: true,
        freeMode: true,
    });



    // Slider Control
    // topsSliderMain.controller.control = topSliderThumb;
    // topSliderThumb.controller.control = topsSliderMain;

    if (document.querySelectorAll('.panelThumbnail').length > 0) {
        const listPanelThumbnail = document.querySelectorAll('.panelThumbnail');
        listPanelThumbnail.forEach(function(item) {
            const id = item.id;

            // product slider
            let pjThumb = new Swiper(".product-slider-thumb  .swiper." + id, {
                slidesPerView: "auto",
            });

            let pjMain = new Swiper(".product-slider-main .swiper." + id, {
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".product-slider-main .swiper-prev",
                    nextEl: ".product-slider-main .swiper-next",
                },
                pagination: {
                    el: ".product-slider-main .pagination"
                },
                thumbs: {
                    swiper: pjThumb,
                }
            });
        });
    } else {
        // product slider
        var pjThumb = new Swiper(".product-slider-thumb  .swiper", {
            slidesPerView: "auto",
        });
        var pjMain = new Swiper(".product-slider-main .swiper", {
            slidesPerView: "auto",
            navigation: {
                prevEl: ".product-slider-main .swiper-prev",
                nextEl: ".product-slider-main .swiper-next",
            },
            pagination: {
                el: ".product-slider-main .pagination"
            },
            thumbs: {
                swiper: pjThumb,
            }
        });
    }
}