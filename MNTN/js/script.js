$(document).ready(function () {
    const readMoreLinks = document.querySelectorAll('.details__link-readmore'),
        extraInfoBlocks = document.querySelectorAll('.content__extrainfo'),
        modalPar = document.querySelector('.modal__descr'),
        modalCloseBtn = document.querySelector('.modal__close'),
        modal = document.querySelector('.modal'),
        overlay = document.querySelector('.overlay')
    //Сверстать само окно, повесить классы show hide, сделать затемненный слой overlay, алгоритм: жму на определенный readmore, беру текст extrainfo с таким же индексом, вставляю в модалку этот текст через через textContent

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
            modalPar.textContent = extraInfoBlocks[i].textContent
            document.body.style.overflow = 'hidden'
            overlay.classList.toggle('hide')
            overlay.classList.toggle('show')
        })
    })

    overlay.addEventListener('click', (event) => {
        if ((event.target.parentNode != modal && event.target != modal) || event.target == modalCloseBtn) {
            overlay.classList.toggle('hide')
            overlay.classList.toggle('show')
            document.body.style.overflow = ''
        }
    })


});