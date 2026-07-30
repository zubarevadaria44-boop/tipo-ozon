const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

tabLogin.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
});

tabRegister.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    tabLogin.classList.remove('active');
    tabRegister.classList.add('active');    
});
const registerFormElement = document.getElementById('register-form');

registerFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const users = getList('users');
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
    document.getElementById('register-error').textContent = 'Пользователь с таким email уже существует';
    return;
}
const newUser = { name, email, password };
    users.push(newUser);
    saveList('users', users);
    document.getElementById('register-error').textContent = 'Регистрация прошла успешно';
    registerFormElement.reset();
    // дальше пока ничего не пиши — просто попробуй так
    const loginFormElement = document.getElementById('login-form');
    loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const users = getList('users');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        document.getElementById('login-error').textContent = 'Вход успешен';
    } else {
        document.getElementById('login-error').textContent = 'Неверный email или пароль';
    }
});


});
