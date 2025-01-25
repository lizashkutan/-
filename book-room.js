let selectedRoomType = ""; // Глобальная переменная для хранения типа номера

// Показать форму бронирования
function showReservationForm(roomType) {
    selectedRoomType = roomType; // Сохраняем название выбранного номера
    document.getElementById("reservation-form-container").style.display = "block";
}

// Скрыть форму бронирования
function hideReservationForm() {
    document.getElementById("reservation-form-container").style.display = "none";
}

// Забронировать номер
function makeReservation() {
    const checkInDate = document.getElementById("check-in-date").value;
    const checkOutDate = document.getElementById("check-out-date").value;

    if (!checkInDate || !checkOutDate) {
        alert("Пожалуйста, выберите даты.");
        return;
    }

    // Сохраняем данные в localStorage
    localStorage.setItem("reservedRoom", JSON.stringify({
        roomType: selectedRoomType, // Используем выбранный тип номера
        checkIn: checkInDate,
        checkOut: checkOutDate
    }));

    alert("Номер успешно забронирован!");
    hideReservationForm();

    // Перенаправляем пользователя на страницу "Мой профиль"
    location.href = "visitor.html";
}