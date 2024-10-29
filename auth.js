function isValidEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
}

function isValidPassword(password){
    return password.length >= 6
}

// login 
const loginForm = document.getElementById('loginForm')
const loginError = document.getElementById('loginError')

if (loginForm){
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const email = document.getElementById('loginEmail').value.trim()
        const password = document.getElementById('loginPassword').value 
        
        //basic validation
        if (!email || !password){
            loginError.textContent = 'All fields are required'
            return
        }
        if (!isValidEmail){
            loginError.textContent = 'Please enter a valid email address'
            return
        }
        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'))
        if(!registeredUser || registeredUser.email !== email || registeredUser.password !== password){
            loginError.textContent = 'Invalid email or pasword'
        }

        localStorage.setItem('authenticatedUser', 'true')
        window.location.href = 'index.html'
    })
}

//  Register
const registerForm = document.getElementById('registerForm')
const registerError = document.getElementById('registerError')

if (registerForm){
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const name = document.getElementById('name').value.trim()
        const email = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value
        const confirmPassword = document.getElementById('confirmPassword').value
        
        //Basic validation
        if (!name || !password || !confirmPassword){
            registerError.textContent = 'All fields are required'
            return
        }
        if (!isValidEmail){
            registerError.textContent = 'Please enter a valid email address'
            return
        }
        if (!isValidPassword){
            registerError.textContent = 'Password must be at least 6 characters long'
            return
        }
        if (password !== confirmPassword){
            registerError.textContent = 'Password do not match'
            return
        }
        const user = {name, email, password}
        localStorage.setItem('registeredUser', JSON.stringify(user))

        alert('Registration successful! please log in')
        window.location.href = 'login.html'
    })
}