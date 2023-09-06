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
        form = document.querySelector('.form-registration')

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
        console.log('Отработал')
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

});