
export const __webkit = /AppleWebKit/i.test(navigator.userAgent)

export const FixAutoFill = () => {
    const AUTOFILLED = 'filled'

    setTimeout( () => {
        if(__webkit) {
            document.querySelectorAll('input:-webkit-autofill').forEach( input => {
                input.classList.add(AUTOFILLED)
            })
        } else {
            document.querySelectorAll('input').forEach( input => {
                if (input.value.length > 0) {
                    input.classList.add(AUTOFILLED)
                }
            })
        }
    }, 100)
}

export const Validate = (event) => {
    event.preventDefault()
    console.log(event.target)
    return false
}

export const isEmail = (email) => {
    const re = /\S+@\S+\.S+/
    return re.test(email)
}

export const formSetup = (formName = 'form') => {
    const $form = document.querySelector(formName)

    $form.addEventListener('submit', Validate, true)
}

