const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const role = document.getElementById('role').value; // Получаем выбранную роль

    if (role === 'staff') {
        // Если выбран "Сотрудник", открываем страницу для сотрудников в новом окне
        window.open('staff.html', '_blank');
    } else if (role === 'visitor') {
        // Если выбран "Посетитель", открываем страницу для посетителей в новом окне
        window.open('visitor.html', '_blank');
    } else {
        // Если роль не выбрана
        alert('Пожалуйста, выберите роль!');
    }
});