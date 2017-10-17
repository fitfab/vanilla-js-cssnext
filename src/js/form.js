
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

    const inputs = Array.from(event.target.elements)

    inputs.forEach( input => {

        if(input.name === 'email') {
            if (!isEmail(input.value)) {
                input.parentElement.classList.add('error')
                input.nextElementSibling.innerHTML = 'Invalid Email'
            } else {
                input.parentElement.classList.remove('error')
                input.nextElementSibling.innerHTML = 'Email'
            }
        }

        if(input.name === 'password') {
            if(!isPassword(input.value)){
                input.parentElement.classList.add('error')
                input.nextElementSibling.innerHTML = 'Invalid Password'
            } else {
                input.parentElement.classList.remove('error')
                input.nextElementSibling.innerHTML = 'Password'
            }
        }
    })
    return false
}

export const isEmail = (value) => {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    return re.test(value)
}

export const isPassword = (value) => {
    const re = /^(?=.*\d).{8,15}$/
    return re.test(value)
}

export const formInit = (formName = 'theform') => {
    const $form = document.getElementById(formName)
    FixAutoFill()
    $form.addEventListener('blur', function(event) {
        if (event.target.value !== ''){
            event.target.classList.add('filled')
        } else {
            event.target.classList.remove('filled')
        }
    }, true)

    $form.addEventListener('submit', Validate, true)
}

