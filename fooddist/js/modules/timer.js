function timer(timerSelector, deadline) {

    function getTimeRemaining(endtime) {
        const start = new Date()
        const end = Date.parse(endtime)
        const t = end - start,
            days = Math.floor(t / 86400000),
            hours = Math.floor((t - days * 86400000) / 3600000),
            minutes = Math.floor((t - days * 86400000 - hours * 3600000) / 60000),
            seconds = Math.floor((t - days * 86400000 - hours * 3600000 - minutes * 60000) / 1000)

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000)

        let t = getTimeRemaining(endtime)
        updateClock()

        function updateClock() {
            t = getTimeRemaining(endtime)
            if (t.total <= 0) {
                days.innerHTML = 0
                hours.innerHTML = 0
                minutes.innerHTML = 0
                seconds.innerHTML = 0
            } else {
                days.innerHTML = t.days
                hours.innerHTML = t.hours
                minutes.innerHTML = t.minutes
                seconds.innerHTML = t.seconds
            }

        }

        if (t.total <= 0) {
            clearInterval(timeInterval)
        }

    }

    setClock(timerSelector, deadline)
}
export default timer