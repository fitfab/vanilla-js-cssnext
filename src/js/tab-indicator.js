const TabIndicator = () => {
    const $view = {
        nav: document.querySelector('.tab-indicator'),
        meter: document.querySelector('.__tab-meter'),
        active: document.querySelector('.tab-active')
    }

    if (!$view.nav) {
        return
    }

    $view.nav.addEventListener('mouseenter', (event) => {
        if (event.target.tagName === 'A') {
            $view.meter.style.width = `${event.target.offsetWidth}px`
            $view.meter.style.transform = `translate(${event.target.offsetLeft}px, 0px)`
        }
    },true)

    $view.nav.addEventListener('mouseleave', (event) => {
        if (event.target.tagName === 'A') {
            $view.meter.style.width = `${$view.active.offsetWidth}px`
            $view.meter.style.transform = `translate(${$view.active.offsetLeft}px, 0px)`
        }
    },true)

    $view.nav.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            $view.meter.style.width = `${event.target.offsetWidth}px`
            $view.meter.style.transform = `translate(${event.target.offsetLeft}px, 0px)`
            $view.active.classList.remove('tab-active')
            $view.active = event.target
            $view.active.classList.add('tab-active')
        }
    },true)
}

export default TabIndicator
