// Функция для перехода на главную страницу
function logout() {
    location.href = "index.html";
}

// Функция для включения/выключения редактирования
function toggleEdit(button) {
    const section = button.closest("section"); // Находим текущий раздел
    const editableFields = section.querySelectorAll(".info-value");

    // Проверяем текущее состояние редактирования
    const isEditing = button.textContent === "Сохранить";

    editableFields.forEach((field) => {
        field.contentEditable = !isEditing; // Включаем/выключаем редактирование
        if (!isEditing) {
            field.style.borderBottom = "1px dashed #ccc"; // Визуальная подсказка
        } else {
            field.style.borderBottom = "none";
        }
    });

    // Меняем текст кнопки
    button.textContent = isEditing ? "Редактировать" : "Сохранить";
}

function deleteReservation() {
    if (confirm("Вы уверены, что хотите удалить бронь?")) {
        localStorage.removeItem("reservedRoom");
        const reservationBox = document.querySelector(".reservations .reservation-box:first-child");
        reservationBox.innerHTML = `
            <h3 class="reservation-title">Забронированный номер</h3>
            <p>Номер: —</p>
            <p>Даты: —</p>
        `;
    }
}


// Отобразить забронированные услуги
function displayReservedServices() {
    const servicesList = document.getElementById("services-list");
    const reservedServices = JSON.parse(localStorage.getItem("reservedServices")) || [];

    servicesList.innerHTML = ""; // Очищаем список

    // Если услуги есть, выводим их
    if (reservedServices.length > 0) {
        reservedServices.forEach((service, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = service;

            // Кнопка удаления (крестик)
            const deleteButton = document.createElement("span");
            deleteButton.textContent = "✖"; // Используем символ крестика
            deleteButton.style.marginLeft = "10px";
            deleteButton.style.cursor = "pointer";
            deleteButton.style.color = "red";
            deleteButton.style.fontSize = "18px";
            deleteButton.onclick = () => removeService(index);

            listItem.appendChild(deleteButton);
            servicesList.appendChild(listItem);
        });
    } else {
        // Если услуг нет, оставляем пустой список, но заголовок остается
        servicesList.innerHTML = "<li>Нет забронированных услуг.</li>";
    }
}

// Удалить услугу
function removeService(index) {
    let reservedServices = JSON.parse(localStorage.getItem("reservedServices")) || [];
    reservedServices.splice(index, 1); // Удаляем услугу по индексу
    localStorage.setItem("reservedServices", JSON.stringify(reservedServices)); // Сохраняем
    displayReservedServices(); // Обновляем отображение
}

// Вызвать отображение при загрузке страницы
document.addEventListener("DOMContentLoaded", displayReservedServices);

function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none'); // Скрыть все вкладки

    document.getElementById(tabName).style.display = 'block'; // Показать выбранную вкладку
}




//для staff.html
// Функция для переключения между вкладками
function openTab(tabName) {
    // Получаем все блоки контента
    const sections = document.querySelectorAll('.section-content');

    // Скрываем все блоки
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Отображаем выбранный блок
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
}