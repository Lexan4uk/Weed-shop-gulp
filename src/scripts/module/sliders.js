const presentation_slider = new Swiper('.presentation-block__presentation-slider', {
    slidesPerView: 3,
    spaceBetween: 32,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        769: {
            slidesPerView: 3,
        }
    },
    navigation: {
        prevEl: '.presentation-swiper-button-prev',
        nextEl: '.presentation-swiper-button-next'
    }
});
const feedback_slider = new Swiper('.feedback-block__feedback-slider', {
    slidesPerView: 2,
    spaceBetween: 32,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 2,
        }

    },
    navigation: {
        prevEl: '.feedback-swiper-button-prev',
        nextEl: '.feedback-swiper-button-next'
    }

});
const weed_slider = new Swiper('.weed-block__products-slider', {
    breakpoints: {
        0: {
            spaceBetween: 24,
            slidesPerView: 2,
            grid: {
                fill: "row",
                rows: 4,
            },
        },
        950: {
            spaceBetween: 32,
            slidesPerView: 4,
            grid: {
                fill: "row",
                rows: 2,
            },
        },
    }
});
const choose_slider = new Swiper('.choose-block__slider', {
    breakpoints: {
        0: {
            spaceBetween: 24,
            slidesPerView: 2,
            grid: {
                fill: "row",
                rows: 2,
            },
        },
        950: {
            spaceBetween: 32,
            slidesPerView: 4,

        },
    }
});
const catalog_first_slider = new Swiper('.catalog__first-swiper', {
    slidesPerView: 3,
    spaceBetween: 32,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        769: {
            slidesPerView: 3,
        }
    },
    navigation: {
        prevEl: '.catalog-swiper-button-prev',
        nextEl: '.catalog-swiper-button-next'
    }
});
const catalog_product_slider = new Swiper('.weed-catalog__slider', {
    breakpoints: {
        0: {
            spaceBetween: 24,
            slidesPerView: 2,
            grid: {
                fill: "row",
                rows: 4,
            },
        },
        950: {
            spaceBetween: 32,
            slidesPerView: 4,
            grid: {
                fill: "row",
                rows: 2,
            },
        },
    }
});
const big_weed_slider = new Swiper('.big-weed-block__image-slider', {
    slidesPerView: 1,
    navigation: {
        prevEl: '.big-weed-block-swiper-button-prev',
        nextEl: '.big-weed-block-swiper-button-next'
    },
    pagination: {
        el: '.big-weed-block__pagination',
        clickable: true,
    },
});
const product_card_swiper = new Swiper('.product__weed-swiper', {
    slidesPerView: 1,
    loop: true,
    thumbs: {
      swiper: {
        spaceBetween: 14,
        el: ".product__thumbnail-swiper",
        slidesPerView: 4,
        loop: true,
      }
    }
  });
  const featured_slider = new Swiper('.featured-product__swiper', {
    breakpoints: {
        0: {
            spaceBetween: 24,
            slidesPerView: 2,
            grid: {
                fill: "row",
                rows: 2,
            },
        },
        950: {
            spaceBetween: 32,
            slidesPerView: 4,

        },
    }
});