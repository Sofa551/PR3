document.addEventListener("DOMContentLoaded", () => {
    // Переключение видимости навигации при нажатии на меню
    const menuImg = document.querySelector('.menu-img');
    const nav = document.querySelector('.nav');
    
    if (menuImg) {
        menuImg.addEventListener('click', () => {
            nav.classList.toggle('visible');
        });
    }

    // Логика для поиска
    const searchButton = document.querySelector('.button-search');
    const locationInput = document.querySelector('.location-subtitle');
    const priceInput = document.querySelector('.price-subtitle');
    const propertyTypeInput = document.querySelector('.apartment-subtitle');

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const location = locationInput.textContent;
            const priceRange = priceInput.textContent;
            const propertyType = propertyTypeInput.textContent;

            alert(`Поиск запущен: 
            Локация: ${location}, 
            Цена: ${priceRange}, 
            Тип недвижимости: ${propertyType}`);
        });
    }

    // Взаимодействие с карточками (пример - выделение при наведении)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0px 10px 15px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });

    // Реализация слайдера (пример для секции с фото)
    const photos = document.querySelectorAll('.photo1');
    let currentPhotoIndex = 0;

    setInterval(() => {
        photos.forEach((photo, index) => {
            photo.style.display = index === currentPhotoIndex ? 'block' : 'none';
        });
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    }, 5000); // 5 секунд на каждую картинку
});