import 'babel-polyfill'
import TabIndicator from './tab-indicator'
import {FixAutoFill} from './form'
import '../css/login.css'

// polyfill for IE to work with NodeList.forEach()
(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false
    NodeList.prototype.forEach = Array.prototype.forEach
})()

const Manage = () => {

    TabIndicator()
    FixAutoFill()

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
        Manage()
    }
}


