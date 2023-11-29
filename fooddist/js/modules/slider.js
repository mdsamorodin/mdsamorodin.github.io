function slider(sliderWrapper) {
    const curSlide = document.querySelector('#current'),
        totalSlides = document.querySelector('#total')
    $(sliderWrapper).slick({
        speed: 200,
        adaptiveHeight: true,
        prevArrow: '<div class="offer__slider-prev"><img src="icons/left.svg" alt="prev"></div>', //стилизуем стрелки
        nextArrow: '<div class="offer__slider-next"><img src="icons/right.svg" alt="next"></div>', //стилизуем стрелки
        responsive: [ //адаптив
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    dotsClass: 'carousel__dots',
                    arrows: false
                }
            }
        ]
    });
    $('.offer__slider-prev').on('click', (enent) => {
        let prevContent = curSlide.textContent
        if (prevContent === '01') {
            curSlide.textContent = totalSlides.textContent
        } else {
            curSlide.textContent = '0' + (+prevContent - 1)
        }
    })
    $('.offer__slider-next').on('click', (enent) => {
        let nextContent = curSlide.textContent
        if (nextContent === totalSlides.textContent) {
            curSlide.textContent = '01'
        } else {
            curSlide.textContent = '0' + (+nextContent + 1)
        }
    })
}
export default slider