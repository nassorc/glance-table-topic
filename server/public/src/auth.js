const auth = {
    BASE_URL: `${location.origin}`, 
    init: () => {
        console.log(location.origin)
        auth.addListeners()
    },
    addListeners: () => {
        const registerForm = document.querySelector('#register-form')
        const loginForm = document.querySelector('#login-form')
        if(registerForm) {
            registerForm
                .addEventListener('submit', (e) => {e.preventDefault()})
            document
                .querySelector('#register-button')
                .addEventListener('click', auth.handleRegister)
            document
                .addEventListener('registerResponseReceived', auth.showMessage)
        }

        if(loginForm) {
            loginForm
                .addEventListener('submit', (e) => e.preventDefault())
            document
                .querySelector('#login-button')
                .addEventListener('click', auth.handleLogin)
        }    
        
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
        .then(res => res.json())
        .then(data => {
            const regsiterEvent = new CustomEvent('registerResponseReceived', {detail: data})
            document.dispatchEvent(regsiterEvent)
        })

    },
    handleLogin: (e) => {
        const email = document.querySelector('#email-field').value
        const password = document.querySelector('#password-field').value

        fetch(`${auth.BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
            
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }, 
    showMessage: (e) => {
        const div = document.createElement('div')
        div.innerHTML = e.detail.message
        div.setAttribute("id", "register-message")
        if(e.detail.details.acknowledged) {
            // add success css property
            div.classList.add('register-success')
        }
        else {
            // 
        }
        document.querySelector('body').appendChild(div)

        setTimeout(() => {
            document.querySelector('#register-message').remove()
        }, 8000)
    }
}
document.addEventListener('DOMContentLoaded', auth.init)