// Функция для добавления услуги
function addService(serviceName) {
    // Получаем текущие услуги из localStorage или создаем новый массив
    let reservedServices = JSON.parse(localStorage.getItem("reservedServices")) || [];

    // Добавляем новую услугу в массив
    reservedServices.push(serviceName);

    // Сохраняем массив в localStorage
    localStorage.setItem("reservedServices", JSON.stringify(reservedServices));

    alert(`Услуга "${serviceName}" успешно добавлена!`);
}