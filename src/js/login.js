
import '../css/login.css'

const Manage = (config) => {
    const AppView = document.getElementById('app')
    const disclaimer = document.createElement('p')
    disclaimer.innerHTML = `This is ${config}`
    AppView.appendChild(disclaimer)
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // execute app when dom is ready
        Manage(document.readyState)
    }
}


