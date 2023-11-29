import { postData } from '../services/services'

function forms(formSelector) {
    const forms = document.querySelectorAll(formSelector),
        thanks = document.querySelector('.overlay'),
        thanksClose = document.querySelector('.thanks__close'),
        modal = document.querySelector('.modal')

    forms.forEach(item => {
        bindPostData(item)
    })

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const formData = new FormData(form)
            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            function closeThanks() {
                thanks.classList.remove('show')
                thanks.classList.add('hide')
                document.body.style.overflow = ''
            }

            postData('http://localhost:3000/requests', json)
                .then(() => {
                    if (modal.classList.contains('show')) {
                        modal.classList.remove('show')
                        modal.classList.add('hide')
                        document.body.style.overflow = ''
                    }
                    thanks.classList.toggle('show')
                    thanks.classList.toggle('hide')
                    document.body.style.overflow = 'hidden'
                    thanksClose.addEventListener('click', closeThanks)

                    thanks.addEventListener('click', e => {
                        if (e.target === thanks) {
                            closeThanks()
                        }
                    })
                }).finally(() => {
                    form.reset()
                })


            //С помощью XMLHttpRequest()
            /* const request = new XMLHttpRequest()
            request.open('POST', 'server.php')

            const formData = new FormData(form)

            request.send(formData)

            function closeThanks() {
                thanks.classList.remove('show')
                thanks.classList.add('hide')
                document.body.style.overflow = ''
            }

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    form.reset()
                    if (modal.classList.contains('show')) {
                        modal.classList.remove('show')
                        modal.classList.add('hide')
                        document.body.style.overflow = ''
                    }
                    thanks.classList.toggle('show')
                    thanks.classList.toggle('hide')
                    document.body.style.overflow = 'hidden'
                    thanksClose.addEventListener('click', closeThanks)

                    thanks.addEventListener('click', e => {
                        if (e.target === thanks) {
                            closeThanks()
                        }
                    })
                }
            }) */
        })
    }
}
export default forms