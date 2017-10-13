import TabIndicator from './tab-indicator'
import '../css/login.css'

const Manage = (config) => {
    const AppView = document.getElementById('app')
    const disclaimer = document.createElement('p')
    disclaimer.innerHTML = `This is ${config}`
    AppView.appendChild(disclaimer)

    TabIndicator()

    document.getElementById('theform').addEventListener('blur', function(event) {
        console.log('input: ',event.target.value)
        if (event.target.value !== ''){
            event.target.classList.add('filled')
        } else {
            event.target.classList.remove('filled')
        }
    }, true)
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // execute app when dom is ready
        Manage(document.readyState)
    }
}


