function calculator() {
    const calcWrapper = document.querySelector('.calculating__field'),
        kkal = document.querySelector('#kkal'),
        params = {
            'height': 0,
            'weight': 0,
            'age': 0
        },
        genders = ['female', 'male'],
        activs = [1.2, 1.375, 1.55, 1.725]
    let gender = 'female', activ = 1.375, siblings, index, num


    function calc(gender, weight, height, age, activ) {
        if (gender === 'male') {
            return Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activ)
        } else {
            return Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activ)
        }
    }

    function draw(num) {
        if (num === 3) {
            kkal.textContent = calc(gender, params.weight, params.height, params.age, activ)
        } else {
            kkal.textContent = 0
        }
    }

    calcWrapper.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('calculating__choose-item')) {
            if (event.target.tagName == 'DIV') {
                event.target.classList.add('calculating__choose-item_active')
                siblings = event.target.parentNode.children
                index = 0
                for (let i = 0; i < siblings.length; i++) {
                    if (siblings[i] != event.target) {
                        siblings[i].classList.remove('calculating__choose-item_active');
                    } else {
                        index = i
                    }
                    if (siblings.length == 2) {
                        gender = genders[index]
                        localStorage.setItem('gender', genders[index])
                    } else {
                        activ = activs[index]
                        localStorage.setItem('activ', activs[index])
                    }
                }
            } else {
                event.target.addEventListener('input', event => {
                    num = 0
                    event.target.classList.add('calculating__choose-item_active')
                    params[event.target.id] = +event.target.value
                    localStorage.setItem(event.target.id, +event.target.value)
                    if (event.target.value === '') {
                        event.target.classList.remove('calculating__choose-item_active')
                        params[event.target.id] = 0
                    }
                    for (let i = 0; i < Object.keys(params).length; i++) {
                        if (params[Object.keys(params)[i]] !== 0) {
                            num += 1
                        }
                    }
                    draw(num)
                })
            }
            draw(num)
        }
    })
}

export default calculator