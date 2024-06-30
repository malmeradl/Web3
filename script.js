// Добавляем слушателя событий, который запускает код, когда DOM полностью загружен
document.addEventListener("DOMContentLoaded", function () {
    // Находим форму обратной связи по её ID
    const feedbackForm = document.getElementById('feedbackForm');
    // Находим элемент для уведомлений по его ID
    const notification = document.getElementById('notification');

    // Добавляем слушателя событий для отправки формы
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

        // Проверяем форму
        if (validateForm()) {
            // Показываем уведомление об успешной отправке
            showNotification("Ваша заявка успешно отправлена!");
            // Очищаем форму после успешной отправки (не обязательно)
            feedbackForm.reset();
        }
    });

    // Функция для проверки формы
    function validateForm() {
        // Получаем значения полей формы
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Простой пример проверки (можно добавить дополнительные проверки по необходимости)
        if (name === '' || email === '' || message === '') {
            // Показываем сообщение об ошибке, если какие-то поля не заполнены
            alert('Пожалуйста, заполните все поля формы.');
            return false; // Возвращаем false, чтобы указать на ошибку
        }

        return true; // Возвращаем true, если все поля заполнены
    }

    // Функция для показа уведомления
    function showNotification(message) {
        // Устанавливаем текст уведомления
        notification.textContent = message;
        // Показываем уведомление
        notification.style.display = 'block';

        // Скрываем уведомление через 3 секунды (можно изменить время)
        setTimeout(function () {
            notification.style.display = 'none';
        }, 3000);
    }
});
