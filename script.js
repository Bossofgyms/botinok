// Простой набор из 5 карт для теста
const TEST_CARDS = [
    { name: "Шут", image: "images/fool.jpg" },
    { name: "Маг", image: "images/magician.jpg" },
    { name: "Жрица", image: "images/high_priestess.jpg" },
    { name: "Императрица", image: "images/empress.jpg" },
    { name: "Император", image: "images/emperor.jpg" }
];

let selected = [];
let cards = [];

// Fisher-Yates shuffle
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Создаём элемент карты
function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-face card-back">🃏</div>
            <div class="card-face card-front">
                <img src="${cardData.image}" alt="${cardData.name}" onerror="this.parentElement.innerHTML='<div style=\'font-size:30px\'>❌</div>'">
                <div class="card-name">${cardData.name}</div>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => {
        // Если уже выбрана — снимаем
        if (card.classList.contains('flipped')) {
            card.classList.remove('flipped', 'selected');
            selected = selected.filter(c => c.name !== cardData.name);
        } 
        // Если не выбрана и есть место — выбираем
        else if (selected.length < 3) {
            card.classList.add('flipped', 'selected');
            selected.push(cardData);
        }
        updateUI();
    });
    
    return card;
}

// Отрисовка карт
function render() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    cards = shuffle(TEST_CARDS).slice(0, 5);
    cards.forEach(data => container.appendChild(createCard(data)));
    updateUI();
}

// Обновление интерфейса
function updateUI() {
    document.getElementById('count').textContent = selected.length;
    document.getElementById('submit').disabled = selected.length !== 3;
}

// Перемешать
document.getElementById('shuffle').addEventListener('click', () => {
    selected = [];
    render();
});

// Отправить
document.getElementById('submit').addEventListener('click', () => {
    const result = { question: "Тест", cards: selected.map(c => c.name) };
    console.log('Отправка:', result);
    if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.sendData(JSON.stringify(result));
        window.Telegram.WebApp.close();
    } else {
        alert('Отправлено в консоль: ' + JSON.stringify(result));
    }
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }
    render();
});
