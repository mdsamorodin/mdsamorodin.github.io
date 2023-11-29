import { getData } from '../services/services'

function cards() {
    class MenuItem {
        constructor(parentSelector, img, menuName, text, price) {
            this.img = img
            this.menuName = menuName
            this.text = text
            this.price = price
            this.parent = document.querySelector(parentSelector)
        }

        createItem() {
            let menuItem = document.createElement('div')
            menuItem.innerHTML = `<img src=${this.img} alt="elite">
            <h3 class="menu__item-subtitle">${this.menuName}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`
            menuItem.classList.add('menu__item')
            this.parent.append(menuItem)
        }
    }

    /* fetch('http://localhost:3000/menu')
        .then(res => res.json())
        .then(menu => {
            menu.forEach(({ img, title, descr, price }) => {
                new MenuItem('.menu__field .container', img, title, descr, price).createItem()
            })
        }) */

    getData('http://localhost:3000/menu')
        .then(res => res.json())
        .then(menu => {
            menu.forEach(({ img, title, descr, price }) => {
                new MenuItem('.menu__field .container', img, title, descr, price).createItem()
            })
        })

    /* Хардкодный способ создания cards
        const img1 = "img/tabs/vegy.jpg",
        menuName1 = `"Фитнес"`,
        text1 = `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих
        овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной
        ценой и высоким качеством!`,
        price1 = 229,
        img2 = "img/tabs/elite.jpg",
        menuName2 = `“Премиум”`,
        text2 = `В меню “Премиум” мы используем не только красивый дизайн упаковки, но
        и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода
        в ресторан!`,
        price2 = 550,
        img3 = "img/tabs/post.jpg",
        menuName3 = `"Постное"`,
        text3 = `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
        продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное
        количество белков за счет тофу и импортных вегетарианских стейков.`,
        price3 = 430

    const item1 = new MenuItem('.menu__field .container', img1, menuName1, text1, price1),
        item2 = new MenuItem('.menu__field .container', img2, menuName2, text2, price2),
        item3 = new MenuItem('.menu__field .container', img3, menuName3, text3, price3)
    item1.createItem()
    item2.createItem()
    item3.createItem() */
}
export default cards