window.addEventListener('DOMContentLoaded', () => {
    const presentation_slider = new Swiper('.presentation-block__presentation-slider', {
        slidesPerView: 3,
        spaceBetween: 32,
        breakpoints : {
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
        breakpoints : {
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
})