const postData = async (url, data) => {
    return await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: data
    })
}

const getData = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`Ошибкаааа, could not fetch ${url}`)
    } else {
        return res
    }
}

const wrapper = document.querySelector('.posts')
let mult = 0

function posts(mult) {
    class PostItem {
        constructor(parentSelector, name, text) {
            this.name = name
            this.text = text
            this.parent = document.querySelector(parentSelector)
        }

        createItem() {
            let postItem = document.createElement('div')
            postItem.classList.add('posts__item')
            postItem.innerHTML = `<h2 class="posts__title">${this.name}</h2>
            <p class="posts__descr">${this.text}</p>`
            postItem.classList.add('posts__item')
            this.parent.append(postItem)
        }
    }

    getData('http://localhost:3000/posts')
        .then(res => res.json())
        .then(posts => {
            for (let i = posts.length - (1 + mult * 6); i >= 0 && i > posts.length - (1 + (mult + 1) * 6); i--) {
                let { name, text, id } = posts[i]
                new PostItem('.posts', name, text).createItem()
            }
        })
}
posts(mult++)

function postLast() {
    class PostItem {
        constructor(parentSelector, name, text) {
            this.name = name
            this.text = text
            this.parent = document.querySelector(parentSelector)
        }

        createItem() {
            let postItem = document.createElement('div')
            postItem.classList.add('posts__item')
            postItem.innerHTML = `<h2 class="posts__title">${this.name}</h2>
            <p class="posts__descr">${this.text}</p>`
            postItem.classList.add('posts__item')
            this.parent.prepend(postItem)
        }
    }

    getData('http://localhost:3000/posts')
        .then(res => res.json())
        .then(posts => {
            let { name, text, id } = posts[posts.length - 1]
            new PostItem('.posts', name, text).createItem()
        })
}

function forms() {
    const form = document.querySelector('form')

    bindPostData(form)

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const formData = new FormData(form)
            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/posts', json)
                .finally(() => {
                    form.reset()
                    while (wrapper.children.length) {
                        wrapper.children[0].remove();
                    }
                    mult = 0
                    posts(mult++)
                })
        })
    }
}

forms()

function checkPosition() {
    // Нам потребуется знать высоту документа и высоту экрана:
    const height = document.body.offsetHeight
    const screenHeight = window.innerHeight

    // Они могут отличаться: если на странице много контента,
    // высота документа будет больше высоты экрана (отсюда и скролл).

    // Записываем, сколько пикселей пользователь уже проскроллил:
    const scrolled = window.scrollY

    // Обозначим порог, по приближении к которому
    // будем вызывать какое-то действие.
    // В нашем случае — четверть экрана до конца страницы:
    const threshold = height - screenHeight / 4

    // Отслеживаем, где находится низ экрана относительно страницы:
    const position = scrolled + screenHeight

    if (position >= threshold) {
        // Если мы пересекли полосу-порог, вызываем нужное действие.
        posts(mult++)
    }
}

window.addEventListener('scroll', checkPosition)