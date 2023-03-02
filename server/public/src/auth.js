const auth = {
    BASE_URL: `${location.origin}`, 
    init: () => {
        console.log(location.origin)
        auth.addListeners()
    },
    addListeners: () => {
        document
            .querySelector('#register-form')
            .addEventListener('submit', (e) => {e.preventDefault()})
        document
            .querySelector('#register-button')
            .addEventListener('click', auth.handleRegister)
    },
    handleRegister: (e) => {
        console.log('adding user')
        const email = document.querySelector('#email-field').value
        const password = document.querySelector('#password-field').value

        fetch(`${auth.BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(res => { console.log(res) })
     
        // auth.showMessage(res)
    },
    showMessage: (res) => {
        console.log(res)
    }
}

document.addEventListener('DOMContentLoaded', auth.init)