// === ПОЛНАЯ КОЛОДА ТАРО (78 карт) ===
const TAROT_DECK = [
    { name: "0. Шут", meaning: "Начало, спонтанность", image: "images/fool.jpg" },
    { name: "I. Маг", meaning: "Воля, мастерство", image: "images/magician.jpg" },
    { name: "II. Верховная Жрица", meaning: "Интуиция, тайны", image: "images/high_priestess.jpg" },
    { name: "III. Императрица", meaning: "Изобилие, творчество", image: "images/empress.jpg" },
    { name: "IV. Император", meaning: "Власть, структура", image: "images/emperor.jpg" },
    { name: "V. Иерофант", meaning: "Традиция, вера", image: "images/hierophant.jpg" },
    { name: "VI. Влюбленные", meaning: "Выбор, отношения", image: "images/lovers.jpg" },
    { name: "VII. Колесница", meaning: "Движение, победа", image: "images/chariot.jpg" },
    { name: "VIII. Сила", meaning: "Мужество, влияние", image: "images/strength.jpg" },
    { name: "IX. Отшельник", meaning: "Самоанализ, мудрость", image: "images/hermit.jpg" },
    { name: "X. Колесо Фортуны", meaning: "Судьба, циклы", image: "images/wheel.jpg" },
    { name: "XI. Справедливость", meaning: "Баланс, карма", image: "images/justice.jpg" },
    { name: "XII. Повешенный", meaning: "Жертва, перспектива", image: "images/hanged.jpg" },
    { name: "XIII. Смерть", meaning: "Трансформация", image: "images/death.jpg" },
    { name: "XIV. Умеренность", meaning: "Баланс, терпение", image: "images/temperance.jpg" },
    { name: "XV. Дьявол", meaning: "Искушение, материализм", image: "images/devil.jpg" },
    { name: "XVI. Башня", meaning: "Внезапные изменения", image: "images/tower.jpg" },
    { name: "XVII. Звезда", meaning: "Надежда, вдохновение", image: "images/star.jpg" },
    { name: "XVIII. Луна", meaning: "Иллюзия, подсознание", image: "images/moon.jpg" },
    { name: "XIX. Солнце", meaning: "Радость, успех", image: "images/sun.jpg" },
    { name: "XX. Суд", meaning: "Возрождение, призыв", image: "images/judgement.jpg" },
    { name: "XXI. Мир", meaning: "Завершение, единство", image: "images/world.jpg" },
    { name: "Туз Жезлов", meaning: "Вдохновение, энергия", image: "images/wands01.jpg" },
    { name: "2 Жезлов", meaning: "Планирование, решение", image: "images/wands02.jpg" },
    { name: "3 Жезлов", meaning: "Предвидение, расширение", image: "images/wands03.jpg" },
    { name: "4 Жезлов", meaning: "Стабильность, праздник", image: "images/wands04.jpg" },
    { name: "5 Жезлов", meaning: "Конфликт, конкуренция", image: "images/wands05.jpg" },
    { name: "6 Жезлов", meaning: "Победа, признание", image: "images/wands06.jpg" },
    { name: "7 Жезлов", meaning: "Стойкость, защита", image: "images/wands07.jpg" },
    { name: "8 Жезлов", meaning: "Скорость, действие", image: "images/wands08.jpg" },
    { name: "9 Жезлов", meaning: "Сила, бдительность", image: "images/wands09.jpg" },
    { name: "10 Жезлов", meaning: "Бремя, ответственность", image: "images/wands10.jpg" },
    { name: "Паж Жезлов", meaning: "Энтузиазм, новости", image: "images/wands11.jpg" },
    { name: "Рыцарь Жезлов", meaning: "Приключение, импульс", image: "images/wands12.jpg" },
    { name: "Королева Жезлов", meaning: "Уверенность, харизма", image: "images/wands13.jpg" },
    { name: "Король Жезлов", meaning: "Лидерство, видение", image: "images/wands14.jpg" },
    { name: "Туз Кубков", meaning: "Новая любовь, эмоции", image: "images/cups01.jpg" },
    { name: "2 Кубков", meaning: "Партнерство, союз", image: "images/cups02.jpg" },
    { name: "3 Кубков", meaning: "Праздник, дружба", image: "images/cups03.jpg" },
    { name: "4 Кубков", meaning: "Апатия, созерцание", image: "images/cups04.jpg" },
    { name: "5 Кубков", meaning: "Потеря, сожаление", image: "images/cups05.jpg" },
    { name: "6 Кубков", meaning: "Ностальгия, детство", image: "images/cups06.jpg" },
    { name: "7 Кубков", meaning: "Выбор, иллюзии", image: "images/cups07.jpg" },
    { name: "8 Кубков", meaning: "Уход, поиск", image: "images/cups08.jpg" },
    { name: "9 Кубков", meaning: "Удовлетворение, комфорт", image: "images/cups09.jpg" },
    { name: "10 Кубков", meaning: "Счастье, семья", image: "images/cups10.jpg" },
    { name: "Паж Кубков", meaning: "Мечтательность, творчество", image: "images/cups11.jpg" },
    { name: "Рыцарь Кубков", meaning: "Романтика, идеализм", image: "images/cups12.jpg" },
    { name: "Королева Кубков", meaning: "Забота, интуиция", image: "images/cups13.jpg" },
    { name: "Король Кубков", meaning: "Эмоциональный контроль", image: "images/cups14.jpg" },
    { name: "Туз Мечей", meaning: "Прорыв, ясность", image: "images/swords01.jpg" },
    { name: "2 Мечей", meaning: "Тупик, баланс", image: "images/swords02.jpg" },
    { name: "3 Мечей", meaning: "Боль, конфликт", image: "images/swords03.jpg" },
    { name: "4 Мечей", meaning: "Отдых, восстановление", image: "images/swords04.jpg" },
    { name: "5 Мечей", meaning: "Конфликт, поражение", image: "images/swords05.jpg" },
    { name: "6 Мечей", meaning: "Переход, улучшение", image: "images/swords06.jpg" },
    { name: "7 Мечей", meaning: "Обман, стратегия", image: "images/swords07.jpg" },
    { name: "8 Мечей", meaning: "Ограничения, страх", image: "images/swords08.jpg" },
    { name: "9 Мечей", meaning: "Тревога, депрессия", image: "images/swords09.jpg" },
    { name: "10 Мечей", meaning: "Конец, предательство", image: "images/swords10.jpg" },
    { name: "Паж Мечей", meaning: "Любознательность, бдительность", image: "images/swords11.jpg" },
    { name: "Рыцарь Мечей", meaning: "Амбиции, прямота", image: "images/swords12.jpg" },
    { name: "Королева Мечей", meaning: "Ясность, принципы", image: "images/swords13.jpg" },
    { name: "Король Мечей", meaning: "Интеллект, истина", image: "images/swords14.jpg" },
    { name: "Туз Пентаклей", meaning: "Процветание, возможность", image: "images/pents01.jpg" },
    { name: "2 Пентаклей", meaning: "Баланс, адаптация", image: "images/pents02.jpg" },
    { name: "3 Пентаклей", meaning: "Мастерство, сотрудничество", image: "images/pents03.jpg" },
    { name: "4 Пентаклей", meaning: "Сохранение, контроль", image: "images/pents04.jpg" },
    { name: "5 Пентаклей", meaning: "Нужда, изоляция", image: "images/pents05.jpg" },
    { name: "6 Пентаклей", meaning: "Щедрость, обмен", image: "images/pents06.jpg" },
    { name: "7 Пентаклей", meaning: "Терпение, перспективы", image: "images/pents07.jpg" },
    { name: "8 Пентаклей", meaning: "Мастерство, качество", image: "images/pents08.jpg" },
    { name: "9 Пентаклей", meaning: "Изобилие, роскошь", image: "images/pents09.jpg" },
    { name: "10 Пентаклей", meaning: "Богатство, наследие", image: "images/pents10.jpg" },
    { name: "Паж Пентаклей", meaning: "Изучение, потенциал", image: "images/pents11.jpg" },
    { name: "Рыцарь Пентаклей", meaning: "Трудолюбие, надежность", image: "images/pents12.jpg" },
    { name: "Королева Пентаклей", meaning: "Изобилие, комфорт", image: "images/pents13.jpg" },
    { name: "Король Пентаклей", meaning: "Процветание, бизнес", image: "images/pents14.jpg" }
];

// === ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ===
let selectedCards = [];
let currentCards = [];
let question = '';
let cardBackLoaded = false;
let bgLoaded = false;

// === ИНИЦИАЛИЗАЦИЯ ===
document.addEventListener('DOMContentLoaded', function() {
    // Telegram WebApp
    if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
        const params = new URLSearchParams(window.location.search);
        question = params.get('question') ? decodeURIComponent(params.get('question')) : 'Вопрос не указан';
    } else {
        question = 'Тестовый вопрос';
    }
    
    document.getElementById('questionText').textContent = 
        question.length > 80 ? question.substring(0, 80) + '...' : question;
    
    // ✅ ИСПРАВЛЕНО: Предзагрузка рубашки и фона ПЕРЕД генерацией карт
    preloadAssets(function() {
        generateCards();
    });
    
    // Обработчики кнопок
    document.getElementById('shuffleBtn').addEventListener('click', shuffleCards);
    document.getElementById('submitBtn').addEventListener('click', submitCards);
});

// === ПРЕДЗАГРУЗКА АКТИВОВ (РУБАШКА + ФОН) ===
function preloadAssets(callback) {
    let loaded = 0;
    const total = 2;
    
    function checkDone() {
        loaded++;
        if (loaded >= total && callback) callback();
    }
    
    // 1. Загрузка рубашки карт
    const cardBack = new Image();
    cardBack.onload = function() {
        cardBackLoaded = true;
        applyCardBacks();
        console.log('✅ Рубашка загружена');
        checkDone();
    };
    cardBack.onerror = function() {
        cardBackLoaded = false;
        applyCardBacks(); // Применяет fallback
        console.log('⚠️ Рубашка не загружена, используется fallback');
        checkDone();
    };
    cardBack.src = 'images/card_back.jpg';
    
    // 2. Загрузка фона
    const bg = new Image();
    bg.onload = function() {
        bgLoaded = true;
        applyBackground();
        console.log('✅ Фон загружен');
        checkDone();
    };
    bg.onerror = function() {
        bgLoaded = false;
        applyBackground(); // Применяет градиент
        console.log('⚠️ Фон не загружен, используется градиент');
        checkDone();
    };
    bg.src = 'images/back.jpg';
}

// === ПРИМЕНЕНИЕ РУБАШКИ К КАРТАМ ===
function applyCardBacks() {
    const backs = document.querySelectorAll('.card-back');
    backs.forEach(function(back) {
        if (cardBackLoaded) {
            back.classList.remove('fallback');
            back.style.backgroundImage = 'url("images/card_back.jpg")';
        } else {
            back.classList.add('fallback');
            back.style.backgroundImage = '';
        }
    });
}

// === ПРИМЕНЕНИЕ ФОНА К BODY ===
function applyBackground() {
    if (bgLoaded) {
        document.body.classList.add('has-bg-image');
    } else {
        document.body.classList.remove('has-bg-image');
        document.body.style.backgroundImage = 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0f 100%)';
    }
}

// === ПЕРЕМЕШИВАНИЕ (Fisher-Yates) ===
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// === ГЕНЕРАЦИЯ КАРТ ===
function generateCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    
    currentCards = shuffleArray(TAROT_DECK).slice(0, 5);
    
    currentCards.forEach(function(card, index) {
        const cardEl = createCardElement(card);
        container.appendChild(cardEl);
        
        // Плавное появление
        setTimeout(function() {
            cardEl.style.opacity = '0';
            cardEl.style.transform = 'translateY(10px)';
            cardEl.style.transition = 'all 0.3s ease';
            setTimeout(function() {
                cardEl.style.opacity = '1';
                cardEl.style.transform = 'translateY(0)';
            }, 30);
        }, index * 50);
    });
    
    // ✅ ВАЖНО: Применяем рубашку после создания новых карт
    applyCardBacks();
    updateUI();
}

// === СОЗДАНИЕ ЭЛЕМЕНТА КАРТЫ ===
function createCardElement(card) {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.dataset.cardName = card.name;
    
    cardEl.innerHTML = 
        '<div class="card-inner">' +
            '<div class="card-back' + (cardBackLoaded ? '' : ' fallback') + '"></div>' +
            '<div class="card-front">' +
                '<img src="' + card.image + '" alt="' + card.name + '" class="card-image">' +
                '<div class="card-placeholder">🃏</div>' +
                '<div class="card-info">' +
                    '<div class="card-name">' + getShortName(card.name) + '</div>' +
                    '<div class="card-meaning">' + card.meaning + '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    
    // Обработчики для изображения
    const img = cardEl.querySelector('.card-image');
    const placeholder = cardEl.querySelector('.card-placeholder');
    
    img.addEventListener('load', function() {
        cardEl.classList.remove('card-has-error');
        placeholder.style.display = 'none';
        img.style.display = 'block';
    });
    
    img.addEventListener('error', function() {
        cardEl.classList.add('card-has-error');
        placeholder.style.display = 'flex';
        img.style.display = 'none';
    });
    
    // Обработчик клика
    cardEl.addEventListener('click', function() {
        handleCardClick(card, cardEl);
    });
    
    return cardEl;
}

// === ОБРАБОТКА КЛИКА ПО КАРТЕ ===
function handleCardClick(card, cardEl) {
    const isFlipped = cardEl.classList.contains('flipped');
    
    if (isFlipped) {
        // Снимаем выделение
        cardEl.classList.remove('flipped', 'selected');
        selectedCards = selectedCards.filter(function(c) { 
            return c.name !== card.name; 
        });
    } else {
        // Переворачиваем и выбираем
        if (selectedCards.length < 3) {
            cardEl.classList.add('flipped', 'selected');
            selectedCards.push(card);
        } else {
            if (window.Telegram?.WebApp) {
                window.Telegram.WebApp.showPopup({
                    title: 'Лимит',
                    message: 'Максимум 3 карты!',
                    buttons: [{ type: 'ok' }]
                });
            } else {
                alert('Выберите максимум 3 карты');
            }
            return;
        }
    }
    updateUI();
}

// === КРАТКОЕ ИМЯ КАРТЫ ===
function getShortName(fullName) {
    return fullName.replace(/^[IVXLCDM]+\.\s*/, '').replace(/^0\.\s*/, '');
}

// === ОБНОВЛЕНИЕ ИНТЕРФЕЙСА ===
function updateUI() {
    document.getElementById('selectedCount').textContent = selectedCards.length;
    
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = selectedCards.length !== 3;
    
    const resultsContainer = document.getElementById('resultsContainer');
    const selectedList = document.getElementById('selectedCardsList');
    
    if (selectedCards.length > 0) {
        resultsContainer.classList.add('show');
        selectedList.innerHTML = selectedCards.map(function(card) {
            return '<div class="selected-card-item">' + getShortName(card.name) + '</div>';
        }).join('');
    } else {
        resultsContainer.classList.remove('show');
    }
}

// === ПЕРЕМЕШАТЬ КАРТЫ ===
function shuffleCards() {
    selectedCards = [];
    
    // Анимация перемешивания
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card, index) {
        card.style.transition = 'transform 0.2s';
        card.style.transform = 'scale(0.95) rotate(' + (Math.random() * 10 - 5) + 'deg)';
        setTimeout(function() {
            card.style.transform = 'scale(1) rotate(0deg)';
        }, 200 + index * 30);
    });
    
    // Перегенерация
    setTimeout(function() {
        generateCards();
    }, 300);
}

// === ОТПРАВКА РАСКЛАДА ===
function submitCards() {
    if (selectedCards.length !== 3) {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.showPopup({
                title: 'Ошибка',
                message: 'Выберите ровно 3 карты',
                buttons: [{ type: 'ok' }]
            });
        } else {
            alert('Выберите ровно 3 карты');
        }
        return;
    }
    
    const result = {
        question: question,
        cards: selectedCards.map(function(card) {
            return {
                name: card.name,
                short_name: getShortName(card.name),
                meaning: card.meaning
            };
        }),
        timestamp: new Date().toISOString()
    };
    
    console.log('Отправка:', JSON.stringify(result, null, 2));
    
    if (window.Telegram?.WebApp) {
        try {
            window.Telegram.WebApp.sendData(JSON.stringify(result));
            setTimeout(function() {
                window.Telegram.WebApp.close();
            }, 500);
        } catch (e) {
            console.error('Ошибка отправки:', e);
            alert('Ошибка отправки данных');
        }
    } else {
        alert('Данные в консоли:\n' + JSON.stringify(result, null, 2));
    }
}
