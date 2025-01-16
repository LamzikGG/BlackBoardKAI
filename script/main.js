 // Получаем элементы
 const profileButton = document.getElementById('profileButton');
 const dropdownMenu = document.getElementById('dropdownMenu');

 // Добавляем обработчик события на кнопку "Профиль"
 profileButton.addEventListener('click', function () {
     // Переключаем видимость
     dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
 });

 exitButton.addEventListener('click', function () {

     window.location.href = 'autorisation.html';
 });

 // Закрываем выпадающее меню, если кликнули вне его
 window.addEventListener('click', function (event) {
     if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
         dropdownMenu.style.display = 'none'; // Скрываем меню
     }
 });