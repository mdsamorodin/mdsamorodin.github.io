$(document).ready(function () {
    const readMoreLinks = document.querySelectorAll('.details__link-readmore'),
        extraInfoBlocks = document.querySelectorAll('.content__extrainfo'),
        modal = document.querySelector('.modal'),
        modalDescr = document.querySelector('.modal__descr'),
        modalCloseBtn = document.querySelector('.modal__close'),
        overlayModal = document.querySelector('.overlay__modal'),
        regisrationLink = document.querySelector('.menu__account-link'),
        registrationCloseBtn = document.querySelector('.form-registration__close'),
        overlayForm = document.querySelector('.overlay__form'),
        form = document.querySelector('.form-registration'),
        nav = document.querySelector('.nav'),
        menuAccount = document.querySelector('.menu__account'),
        burgerBtn = document.querySelector('.menu__burger')

    //Плавный скролл по ссылке scroll down
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

    //Модальные окна
    readMoreLinks.forEach((item, i) => {
        item.addEventListener('click', (event) => {
            event.preventDefault()
            modalDescr.textContent = extraInfoBlocks[i].textContent
            document.body.style.overflow = 'hidden'
            overlayModal.classList.toggle('hide')
            overlayModal.classList.toggle('show')
        })
    })

    overlayModal.addEventListener('click', (event) => {
        if ((event.target.parentNode != modal && event.target != modal) || event.target == modalCloseBtn) {
            overlayModal.classList.toggle('hide')
            overlayModal.classList.toggle('show')
            document.body.style.overflow = ''
        }
    })

    //Форма регистрации
    regisrationLink.addEventListener('click', (event) => {
        event.preventDefault()
        document.body.style.overflow = 'hidden'
        overlayForm.classList.toggle('hide')
        overlayForm.classList.toggle('show')
    })

    overlayForm.addEventListener('click', (event) => {
        if ((event.target.parentNode != form && event.target != form) || event.target == registrationCloseBtn) {
            overlayForm.classList.toggle('hide')
            overlayForm.classList.toggle('show')
            document.body.style.overflow = ''
        }
    })

    //Валидация формы
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

    $("input[name=phone]").mask("+7 (999) 999-99-99");

    //Меню бергер
    burgerBtn.addEventListener('click', (event) => {
        nav.classList.toggle('nav_burger-active')
        menuAccount.classList.toggle('menu__account_burger-active')
        burgerBtn.classList.toggle('menu__burger_active')
        document.body.classList.toggle('body_burger-active')
    }
    )
});