const FixAutoFil = () => {
    const AUTOFILLED = 'filled'
    const autoComplete = document.querySelectorAll('input:-webkit-autofill')
    console.log(autoComplete.length)
    autoComplete.forEach( input => {
        input.focus()
        setTimeout( () => {
            input.blur()
        }, 300)
    })
    //autoComplete[autoComplete.length].focus()
    // setTimeout( () => {
    //     document.querySelectorAll('input:-webkit-autofill').forEach( input => {
    //         console.log(input)
    //         input.click()
    //         input.blur()
    //     })
    // }, 300)

    // document.addEventListener('input', function(e) {
    //     console.log(e.target)
    //     var element = e.target.matches(':-webkit-autofill')
    //     if(element) {
    //         // Field auto-completed - Send an analytics event (or whatnot)
    //         console.log(element)
    //         e.target.classList.add(AUTOFILLED)
    //     }
    //     e.target.focus()
    //     e.target.blur()
    //     e.target.click()
    // })
}

export default FixAutoFil