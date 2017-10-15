const FixAutoFil = () => {
    const AUTOFILLED = 'filled'    
    setTimeout( () => {
        document.querySelectorAll('input:-webkit-autofill').forEach( input => {
            input.classList.add(AUTOFILLED)
        })
       
    }, 100)
}

export default FixAutoFil