$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<img class="slick-prev" src="icons/prevarrow.svg" alt="Стрелка">',
        nextArrow: '<img class="slick-next" src="icons/nextarrow.svg" alt="Стрелка">',
        responsive: [
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

    //Табы с фитнес браслетами 
    const cardWrapper = document.querySelector('.catalog__wrapper'),
        mores = document.querySelectorAll('.more'),
        backs = document.querySelectorAll('.back'),
        cardFace = document.querySelectorAll('.card__face'),
        cardBack = document.querySelectorAll('.card__back'),
        tabWrapper = document.querySelector('.catalog__tabs'),
        tabs = document.querySelectorAll('.catalog__tab'),
        cards = document.querySelectorAll('.card'),
        count = ['first', 'second', 'third']


    console.log(tabWrapper)

    function hideTabContent(i) {
        cardFace[i].classList.toggle('active')
        cardFace[i].classList.toggle('noactive')
    }

    function showTabContent(i) {
        cardBack[i].classList.toggle('active')
        cardBack[i].classList.toggle('noactive')

    }

    cardWrapper.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('more')) {
            mores.forEach((item, i) => {
                if (target == item) {
                    hideTabContent(i)
                    showTabContent(i)
                }
            })
        }
        if (target && target.classList.contains('back')) {
            backs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent(i)
                    showTabContent(i)
                }
            })
        }
    })

    function hideContent() {
        tabs.forEach(item => {
            item.classList.remove('catalog__tab_active')
        })
        cards.forEach(item => {
            item.style.display = 'none'
        })

    }

    function showContent(i = 0) {
        tabs[i].classList.add('catalog__tab_active')
        cards.forEach(item => {
            if (item.classList.contains(count[i])) {
                item.style.display = 'block'
            }
        })


    }

    tabWrapper.addEventListener('click', (event) => {
        const target = event.target;
        console.log(target.parentElement.classList.contains('catalog__tab'));
        if (target && target.parentElement.classList.contains('catalog__tab')) {
            tabs.forEach((item, i) => {
                if (target.parentElement == item) {
                    hideContent()
                    showContent(i)
                }
            })
        }
    })

    //Modal (с помощью библиотеки JQuery)
    //Функции получения элементов через $ и функции fadeIn, fadeOut - библиотечные
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow')
    })
    $('.card__btn').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.card__title').eq(i).text())
            $('.overlay, #order').fadeIn('slow')
        })
    })
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    })

    //Валидация форм с помощью плагина из JQuery
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        })
    }
    validateForms('#consultation form')
    validateForms('#order form')
    validateForms('#consultation-form')

    $("input[name=phone]").mask("+7 (999) 999-99-99");

    $('form').submit(function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        };
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    //Плавный скролл по кнопке вверх
    $(window).scroll(function () {
        let scrol
        if ((window.innerWidth < 1140 && window.innerWidth > 990)) {
            scrol = 3200
        } else {
            scrol = 1200
        }
        if ($(this).scrollTop() > scrol) {
            $('.up').fadeIn()
        } else {
            $('.up').fadeOut()
        }
    })

    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            const hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

