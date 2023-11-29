function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsWrapper = document.querySelector(tabsParentSelector)

    function hideTabContent() {
        tabsContent.forEach(tab => {
            tab.style.display = 'none'
        })

        tabs.forEach(item => {
            item.classList.remove(activClass)
        })
    }

    function showTabContent(tabNum = 0) {
        tabsContent[tabNum].style.display = 'block'
        tabs[tabNum].classList.add(activClass)

    }

    hideTabContent()
    showTabContent()

    tabsWrapper.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
}

export default tabs