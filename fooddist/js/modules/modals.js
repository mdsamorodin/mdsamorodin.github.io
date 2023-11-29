function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.toggle('show')
    modal.classList.toggle('hide')
    document.body.style.overflow = 'hidden'
    /* clearInterval(modalTaimerID) */
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.remove('show')
    modal.classList.add('hide')
    document.body.style.overflow = ''
}

function modals(modalTriggerSelector, modalSelector) {
    const modalTrigger = document.querySelectorAll(modalTriggerSelector),
        modal = document.querySelector(modalSelector),
        modalCloseBtn = document.querySelector('[data-close]')

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector))
    })

    modalCloseBtn.addEventListener('click', () => closeModal(modalSelector))

    modal.addEventListener('click', e => {
        if (e.target === modal) {
            closeModal(modalSelector)
        }
    })

    document.addEventListener('keydown', e => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector)
        }
    })

    /* const modalTaimerID = setTimeout(openModal, 5000) */

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll)
}
export default modals