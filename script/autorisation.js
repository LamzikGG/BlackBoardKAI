document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '1' && password === '1') {
        window.location.href = 'main.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Неверный логин или пароль';
    }
});