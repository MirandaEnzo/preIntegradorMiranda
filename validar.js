document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';
    message.textContent = '';

    // JSON 
    const users = [
        { username: 'omar', password: '123' },
        { username: 'enzo', password: '132' },
        { username: 'miranda', password: '213' }
    ];

    // Funcion para validar login
    function validateLogin(username, password) {
        return users.some(user => user.username === username && user.password === password);
    }

    let valid = true;

    if (username === '') {
        usernameError.textContent = 'Username is required';
        valid = false;
    }

    if (password === '') {
        passwordError.textContent = 'Password is required';
        valid = false;
    }

    if (valid && validateLogin(username, password)) {
        console.log('Login successful! Redirecting...');
        message.textContent = 'usuario logueado correctamente!';
        message.style.color = 'green';
        setTimeout(() => {
            window.location.href ='index.html';
        }, 1000);
    } else if (valid) {
        console.log('Invalid username or password');
        message.textContent = 'el usuario o contraseña son invalidos ';
        message.style.color = 'red';
    }
});
