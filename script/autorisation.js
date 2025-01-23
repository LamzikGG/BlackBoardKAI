document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Получаем значения полей
    const name = document.getElementById('username').value;
    const password = parseInt(document.getElementById('password').value);

    // Выводим данные в консоль для проверки
    console.log('Отправляемые данные:', { name, password });

    try {
        // Проверяем, что сервер запущен
        const response = await fetch(`http://127.0.0.1:8000/autorisation?name=${name}&password=${password}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        console.log('Статус ответа:', response.status); // Добавляем для отладки

        if (response.ok) {
            const data = await response.json();
            console.log('Успешный ответ:', data);
            window.location.href = 'main.html';
        } else {
            const errorData = await response.json();
            console.error('Ошибка:', errorData);
            document.getElementById('errorMessage').textContent = errorData.detail || 'Неверный логин или пароль';
        }
    } catch (error) {
        console.error('Ошибка подключения:', error);
        document.getElementById('errorMessage').textContent = 'Ошибка подключения к серверу';
    }
});