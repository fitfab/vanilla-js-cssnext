import TabIndicator from './tab-indicator'
import '../css/login.css'

const Manage = () => {

    TabIndicator()

    document.getElementById('theform').addEventListener('blur', function(event) {
        if (event.target.value !== ''){
            event.target.classList.add('filled')
        } else {
            event.target.classList.remove('filled')
        }
    }, true)
}

// on DomReady init the app
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // execute app when dom is ready
        Manage(document.readyState)
    }
}


