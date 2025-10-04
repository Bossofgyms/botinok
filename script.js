// Полная колода Таро - 78 карт
const TAROT_DECK = [
    // СТАРШИЕ АРКАНЫ (22 карты)
    { 
        name: "0. Шут", 
        meaning: "Начало, невинность, спонтанность", 
        image: "images/fool.jpg",
        emoji: "🃏",
        type: "major"
    },
    { 
        name: "I. Маг", 
        meaning: "Воля, мастерство, концентрация", 
        image: "images/magician.jpg",
        emoji: "🧙",
        type: "major"
    },
    { 
        name: "II. Верховная Жрица", 
        meaning: "Интуиция, тайны, мудрость", 
        image: "images/high_priestess.jpg",
        emoji: "👁️",
        type: "major"
    },
    { 
        name: "III. Императрица", 
        meaning: "Изобилие, творчество, природа", 
        image: "images/empress.jpg",
        emoji: "👑",
        type: "major"
    },
    { 
        name: "IV. Император", 
        meaning: "Власть, структура, контроль", 
        image: "images/emperor.jpg",
        emoji: "⚔️",
        type: "major"
    },
    { 
        name: "V. Иерофант", 
        meaning: "Традиция, вера, духовность", 
        image: "images/hierophant.jpg",
        emoji: "📖",
        type: "major"
    },
    { 
        name: "VI. Влюбленные", 
        meaning: "Выбор, отношения, гармония", 
        image: "images/lovers.jpg",
        emoji: "💑",
        type: "major"
    },
    { 
        name: "VII. Колесница", 
        meaning: "Движение, победа, контроль", 
        image: "images/chariot.jpg",
        emoji: "🏇",
        type: "major"
    },
    { 
        name: "VIII. Сила", 
        meaning: "Мужество, страсть, влияние", 
        image: "images/strength.jpg",
        emoji: "💪",
        type: "major"
    },
    { 
        name: "IX. Отшельник", 
        meaning: "Самоанализ, уединение, мудрость", 
        image: "images/hermit.jpg",
        emoji: "🧘",
        type: "major"
    },
    { 
        name: "X. Колесо Фортуны", 
        meaning: "Судьба, циклы, удача", 
        image: "images/wheel.jpg",
        emoji: "🎡",
        type: "major"
    },
    { 
        name: "XI. Справедливость", 
        meaning: "Баланс, правда, карма", 
        image: "images/justice.jpg",
        emoji: "⚖️",
        type: "major"
    },
    { 
        name: "XII. Повешенный", 
        meaning: "Жертва, сдача, новая перспектива", 
        image: "images/hanged.jpg",
        emoji: "🙃",
        type: "major"
    },
    { 
        name: "XIII. Смерть", 
        meaning: "Конец, трансформация, переход", 
        image: "images/death.jpg",
        emoji: "💀",
        type: "major"
    },
    { 
        name: "XIV. Умеренность", 
        meaning: "Баланс, терпение, гармония", 
        image: "images/temperance.jpg",
        emoji: "⚗️",
        type: "major"
    },
    { 
        name: "XV. Дьявол", 
        meaning: "Искушение, зависимость, материализм", 
        image: "images/devil.jpg",
        emoji: "😈",
        type: "major"
    },
    { 
        name: "XVI. Башня", 
        meaning: "Внезапные изменения, откровение", 
        image: "images/tower.jpg",
        emoji: "🏰",
        type: "major"
    },
    { 
        name: "XVII. Звезда", 
        meaning: "Надежда, вдохновение, духовность", 
        image: "images/star.jpg",
        emoji: "⭐",
        type: "major"
    },
    { 
        name: "XVIII. Луна", 
        meaning: "Иллюзия, страх, подсознание", 
        image: "images/moon.jpg",
        emoji: "🌙",
        type: "major"
    },
    { 
        name: "XIX. Солнце", 
        meaning: "Радость, успех, жизненная сила", 
        image: "images/sun.jpg",
        emoji: "☀️",
        type: "major"
    },
    { 
        name: "XX. Суд", 
        meaning: "Возрождение, призыв, прощение", 
        image: "images/judgement.jpg",
        emoji: "📯",
        type: "major"
    },
    { 
        name: "XXI. Мир", 
        meaning: "Завершение, единство, достижение", 
        image: "images/world.jpg",
        emoji: "🌍",
        type: "major"
    },

    // МЛАДШИЕ АРКАНЫ - ЖЕЗЛЫ (14 карт)
    { 
        name: "Туз Жезлов", 
        meaning: "Вдохновение, энергия, потенциал", 
        image: "images/wands01.jpg",
        emoji: "🔥",
        type: "wands"
    },
    { 
        name: "2 Жезлов", 
        meaning: "Планирование, решение, партнерство", 
        image: "images/wands02.jpg",
        emoji: "📊",
        type: "wands"
    },
    { 
        name: "3 Жезлов", 
        meaning: "Предвидение, сотрудничество, расширение", 
        image: "images/wands03.jpg",
        emoji: "🔭",
        type: "wands"
    },
    { 
        name: "4 Жезлов", 
        meaning: "Стабильность, праздник, основание", 
        image: "images/wands04.jpg",
        emoji: "🏠",
        type: "wands"
    },
    { 
        name: "5 Жезлов", 
        meaning: "Конфликт, конкуренция, дебаты", 
        image: "images/wands05.jpg",
        emoji: "⚔️",
        type: "wands"
    },
    { 
        name: "6 Жезлов", 
        meaning: "Победа, успех, признание", 
        image: "images/wands06.jpg",
        emoji: "🎖️",
        type: "wands"
    },
    { 
        name: "7 Жезлов", 
        meaning: "Стойкость, вызов, защита", 
        image: "images/wands07.jpg",
        emoji: "🛡️",
        type: "wands"
    },
    { 
        name: "8 Жезлов", 
        meaning: "Скорость, действие, движение", 
        image: "images/wands08.jpg",
        emoji: "⚡",
        type: "wands"
    },
    { 
        name: "9 Жезлов", 
        meaning: "Сила, стойкость, бдительность", 
        image: "images/wands09.jpg",
        emoji: "👁️",
        type: "wands"
    },
    { 
        name: "10 Жезлов", 
        meaning: "Бремя, ответственность, давление", 
        image: "images/wands10.jpg",
        emoji: "💼",
        type: "wands"
    },
    { 
        name: "Паж Жезлов", 
        meaning: "Энтузиазм, исследование, новости", 
        image: "images/wands11.jpg",
        emoji: "🎯",
        type: "wands"
    },
    { 
        name: "Рыцарь Жезлов", 
        meaning: "Приключение, энергия, импульс", 
        image: "images/wands12.jpg",
        emoji: "🏇",
        type: "wands"
    },
    { 
        name: "Королева Жезлов", 
        meaning: "Уверенность, независимость, харизма", 
        image: "images/wands13.jpg",
        emoji: "👸",
        type: "wands"
    },
    { 
        name: "Король Жезлов", 
        meaning: "Лидерство, предпринимательство, видение", 
        image: "images/wands14.jpg",
        emoji: "🤴",
        type: "wands"
    },

    // МЛАДШИЕ АРКАНЫ - КУБКИ (14 карт)
    { 
        name: "Туз Кубков", 
        meaning: "Новая любовь, эмоциональное начало", 
        image: "images/cups01.jpg",
        emoji: "🏆",
        type: "cups"
    },
    { 
        name: "2 Кубков", 
        meaning: "Партнерство, союз, притяжение", 
        image: "images/cups02.jpg",
        emoji: "💞",
        type: "cups"
    },
    { 
        name: "3 Кубков", 
        meaning: "Праздник, дружба, сообщество", 
        image: "images/cups03.jpg",
        emoji: "🎉",
        type: "cups"
    },
    { 
        name: "4 Кубков", 
        meaning: "Апатия, созерцание, отступление", 
        image: "images/icups04.jpg",
        emoji: "😐",
        type: "cups"
    },
    { 
        name: "5 Кубков", 
        meaning: "Потеря, сожаление, разочарование", 
        image: "images/cups05.jpg",
        emoji: "😔",
        type: "cups"
    },
    { 
        name: "6 Кубков", 
        meaning: "Ностальгия, невинность, детство", 
        image: "images/cups06.jpg",
        emoji: "👶",
        type: "cups"
    },
    { 
        name: "7 Кубков", 
        meaning: "Выбор, иллюзии, мечты", 
        image: "images/cups07.jpg",
        emoji: "🌈",
        type: "cups"
    },
    { 
        name: "8 Кубков", 
        meaning: "Уход, поиск, отказ", 
        image: "images/cups08.jpg",
        emoji: "🚶",
        type: "cups"
    },
    { 
        name: "9 Кубков", 
        meaning: "Удовлетворение, комфорт, удовольствие", 
        image: "images/cups09.jpg",
        emoji: "😊",
        type: "cups"
    },
    { 
        name: "10 Кубков", 
        meaning: "Счастье, семья, гармония", 
        image: "images/cups10.jpg",
        emoji: "👨‍👩‍👧‍👦",
        type: "cups"
    },
    { 
        name: "Паж Кубков", 
        meaning: "Мечтательность, чувствительность, творчество", 
        image: "images/cups11.jpg",
        emoji: "💭",
        type: "cups"
    },
    { 
        name: "Рыцарь Кубков", 
        meaning: "Романтика, очарование, идеализм", 
        image: "images/cups12.jpg",
        emoji: "💘",
        type: "cups"
    },
    { 
        name: "Королева Кубков", 
        meaning: "Забота, интуиция, сострадание", 
        image: "images/cups13.jpg",
        emoji: "👑",
        type: "cups"
    },
    { 
        name: "Король Кубков", 
        meaning: "Эмоциональный контроль, дипломатия", 
        image: "images/cups14.jpg",
        emoji: "🎭",
        type: "cups"
    },

    // МЛАДШИЕ АРКАНЫ - МЕЧИ (14 карт)
    { 
        name: "Туз Мечей", 
        meaning: "Прорыв, ясность, истина", 
        image: "images/swords01.jpg",
        emoji: "⚔️",
        type: "swords"
    },
    { 
        name: "2 Мечей", 
        meaning: "Тупик, баланс, решение", 
        image: "images/swords02.jpg",
        emoji: "⚖️",
        type: "swords"
    },
    { 
        name: "3 Мечей", 
        meaning: "Сердечная боль, печаль, конфликт", 
        image: "images/swords03.jpg",
        emoji: "💔",
        type: "swords"
    },
    { 
        name: "4 Мечей", 
        meaning: "Отдых, восстановление, медитация", 
        image: "images/swords04.jpg",
        emoji: "😴",
        type: "swords"
    },
    { 
        name: "5 Мечей", 
        meaning: "Конфликт, унижение, поражение", 
        image: "images/swords05.jpg",
        emoji: "😞",
        type: "swords"
    },
    { 
        name: "6 Мечей", 
        meaning: "Переход, движение, улучшение", 
        image: "images/swords06.jpg",
        emoji: "🛶",
        type: "swords"
    },
    { 
        name: "7 Мечей", 
        meaning: "Обман, стратегия, секреты", 
        image: "images/swords07.jpg",
        emoji: "🕵️",
        type: "swords"
    },
    { 
        name: "8 Мечей", 
        meaning: "Ограничения, страх, беспомощность", 
        image: "images/swords08.jpg",
        emoji: "🔒",
        type: "swords"
    },
    { 
        name: "9 Мечей", 
        meaning: "Тревога, кошмары, депрессия", 
        image: "images/swords09.jpg",
        emoji: "😨",
        type: "swords"
    },
    { 
        name: "10 Мечей", 
        meaning: "Конец, предательство, поражение", 
        image: "images/swords10.jpg",
        emoji: "💀",
        type: "swords"
    },
    { 
        name: "Паж Мечей", 
        meaning: "Любознательность, остроумие, бдительность", 
        image: "images/swords11.jpg",
        emoji: "🔍",
        type: "swords"
    },
    { 
        name: "Рыцарь Мечей", 
        meaning: "Амбиции, скорость, прямота", 
        image: "images/swords12.jpg",
        emoji: "💨",
        type: "swords"
    },
    { 
        name: "Королева Мечей", 
        meaning: "Ясность, независимость, принципы", 
        image: "images/swords13.jpg",
        emoji: "👩",
        type: "swords"
    },
    { 
        name: "Король Мечей", 
        meaning: "Интеллект, власть, истина", 
        image: "images/swords14.jpg",
        emoji: "👨",
        type: "swords"
    },

    // МЛАДШИЕ АРКАНЫ - ПЕНТАКЛИ (14 карт)
    { 
        name: "Туз Пентаклей", 
        meaning: "Процветание, возможность, изобилие", 
        image: "images/pents01.jpg",
        emoji: "💰",
        type: "pentacles"
    },
    { 
        name: "2 Пентаклей", 
        meaning: "Баланс, адаптация, приоритеты", 
        image: "images/pents02.jpg",
        emoji: "🎭",
        type: "pentacles"
    },
    { 
        name: "3 Пентаклей", 
        meaning: "Мастерство, сотрудничество, ремесло", 
        image: "images/pents03.jpg",
        emoji: "🛠️",
        type: "pentacles"
    },
    { 
        name: "4 Пентаклей", 
        meaning: "Сохранение, контроль, безопасность", 
        image: "images/pents04.jpg",
        emoji: "💎",
        type: "pentacles"
    },
    { 
        name: "5 Пентаклей", 
        meaning: "Нужда, беспокойство, изоляция", 
        image: "images/pents05.jpg",
        emoji: "🏚️",
        type: "pentacles"
    },
    { 
        name: "6 Пентаклей", 
        meaning: "Щедрость, благотворительность, обмен", 
        image: "images/pents06.jpg",
        emoji: "🎁",
        type: "pentacles"
    },
    { 
        name: "7 Пентаклей", 
        meaning: "Терпение, оценка, перспективы", 
        image: "images/pents07.jpg",
        emoji: "🌱",
        type: "pentacles"
    },
    { 
        name: "8 Пентаклей", 
        meaning: "Мастерство, качество, ремесло", 
        image: "images/pents08.jpg",
        emoji: "⚒️",
        type: "pentacles"
    },
    { 
        name: "9 Пентаклей", 
        meaning: "Изобилие, роскошь, самообеспечение", 
        image: "images/pents09.jpg",
        emoji: "🏡",
        type: "pentacles"
    },
    { 
        name: "10 Пентаклей", 
        meaning: "Богатство, наследие, семья", 
        image: "images/pents10.jpg",
        emoji: "🏰",
        type: "pentacles"
    },
    { 
        name: "Паж Пентаклей", 
        meaning: "Изучение, усердие, потенциал", 
        image: "images/pents11.jpg",
        emoji: "📚",
        type: "pentacles"
    },
    { 
        name: "Рыцарь Пентаклей", 
        meaning: "Трудолюбие, надежность, ответственность", 
        image: "images/pents12.jpg",
        emoji: "🐢",
        type: "pentacles"
    },
    { 
        name: "Королева Пентаклей", 
        meaning: "Изобилие, комфорт, безопасность", 
        image: "images/pents13.jpg",
        emoji: "🌺",
        type: "pentacles"
    },
    { 
        name: "Король Пентаклей", 
        meaning: "Процветание, бизнес, лидерство", 
        image: "images/pents14.jpg",
        emoji: "💼",
        type: "pentacles"
    }
];

class TarotApp {
    constructor() {
        this.selectedCards = [];
        this.currentCards = [];
        this.question = this.getQuestionFromUrl();
        this.imageLoadErrors = new Set();
        this.deckType = 'full';
        this.cardBackLoaded = false;
        this.init();
    }

    init() {
        this.renderQuestion();
        this.preloadCardBack();
        this.generateCards();
        this.setupEventListeners();
        this.setupDeckTypeSelector();
        console.log('Tarot Mini App initialized with local card back');
    }

    // Предзагрузка рубашки карты
    preloadCardBack() {
        const cardBackImage = new Image();
        cardBackImage.src = 'images/card_back.png';
        
        cardBackImage.onload = () => {
            console.log('✅ Рубашка карт загружена');
            this.cardBackLoaded = true;
            document.querySelectorAll('.card-back').forEach(back => {
                back.classList.remove('loading');
            });
        };
        
        cardBackImage.onerror = () => {
            console.warn('❌ Не удалось загрузить рубашку карт');
            this.cardBackLoaded = false;
            document.querySelectorAll('.card-back').forEach(back => {
                back.style.background = 'linear-gradient(45deg, #8B0000, #B22222)';
                back.style.border = '3px solid #FFD700';
            });
        };
    }

    getQuestionFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const question = urlParams.get('question');
        return question ? decodeURIComponent(question) : 'Вопрос не указан';
    }

    renderQuestion() {
        const questionElement = document.getElementById('questionText');
        questionElement.textContent = this.question;
    }

    setupDeckTypeSelector() {
        const deckTypeSelect = document.getElementById('deckType');
        if (deckTypeSelect) {
            deckTypeSelect.addEventListener('change', (e) => {
                this.deckType = e.target.value;
                this.selectedCards = [];
                this.generateCards();
                this.updateCounter();
                this.updateSubmitButton();
            });
        }
    }

    generateCards() {
        let availableCards = [];
        
        if (this.deckType === 'major') {
            availableCards = TAROT_DECK.filter(card => card.type === 'major');
        } else {
            availableCards = [...TAROT_DECK];
        }
        
        const shuffled = availableCards.sort(() => Math.random() - 0.5);
        this.currentCards = shuffled.slice(0, 7);
        this.renderCards();
    }

    renderCards() {
        const container = document.getElementById('cardsContainer');
        container.innerHTML = '';

        this.currentCards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            
            // Добавляем класс loading если рубашка еще не загрузилась
            const backClass = this.cardBackLoaded ? '' : 'loading';
            
            cardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-back ${backClass}"></div>
                    <div class="card-front">
                        <img src="${card.image}" alt="${card.name}" class="card-image" 
                             onerror="app.handleCardImageError(this, '${card.emoji}')">
                        <div class="card-name">${this.getShortName(card.name)}</div>
                        <div class="card-meaning">${card.meaning}</div>
                        <div class="card-type ${card.type}">${this.getTypeSymbol(card.type)}</div>
                    </div>
                </div>
            `;

            cardElement.addEventListener('click', () => this.toggleCard(card, index));
            container.appendChild(cardElement);
        });
    }

    getShortName(fullName) {
        return fullName.replace(/^[IVXLCDM]+\.\s*/, '').replace(/^0\.\s*/, '');
    }

    getTypeSymbol(type) {
        const symbols = {
            'major': '🌟',
            'wands': '🔥',
            'cups': '💧', 
            'swords': '⚔️',
            'pentacles': '💰'
        };
        return symbols[type] || '🎴';
    }

    // Обработчик ошибок для изображений карт
    handleCardImageError(imgElement, emoji) {
        if (!this.imageLoadErrors.has(imgElement.src)) {
            console.warn(`Не удалось загрузить изображение карты: ${imgElement.src}`);
            this.imageLoadErrors.add(imgElement.src);
        }
        
        // Заменяем на эмодзи как fallback
        imgElement.outerHTML = `<div class="card-emoji">${emoji}</div>`;
    }

    toggleCard(card, index) {
        const cardElement = document.querySelectorAll('.card')[index];
        const isSelected = this.selectedCards.some(c => c.name === card.name);

        if (isSelected) {
            this.selectedCards = this.selectedCards.filter(c => c.name !== card.name);
            cardElement.classList.remove('selected', 'flipped');
        } else {
            if (this.selectedCards.length < 3) {
                this.selectedCards.push(card);
                cardElement.classList.add('selected', 'flipped');
            } else {
                this.showError('Можно выбрать только 3 карты!');
                return;
            }
        }

        this.updateCounter();
        this.updateSubmitButton();
    }

    updateCounter() {
        const counter = document.getElementById('selectedCount');
        if (counter) {
            counter.textContent = this.selectedCards.length;
        }
    }

    updateSubmitButton() {
        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) {
            submitBtn.disabled = this.selectedCards.length !== 3;
        }
    }

    showError(message) {
        alert(message);
    }

    setupEventListeners() {
        const submitBtn = document.getElementById('submitBtn');
        const shuffleBtn = document.getElementById('shuffleBtn');
        
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitCards());
        }
        if (shuffleBtn) {
            shuffleBtn.addEventListener('click', () => this.shuffleCards());
        }
    }

    submitCards() {
        if (this.selectedCards.length !== 3) {
            this.showError('Пожалуйста, выберите 3 карты');
            return;
        }

        const result = {
            question: this.question,
            cards: this.selectedCards.map(card => card.name),
            deck_type: this.deckType
        };

        console.log('Отправка данных:', result);

        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.sendData(JSON.stringify(result));
            window.Telegram.WebApp.close();
        } else {
            alert(`Расклад отправлен!\n\nВопрос: ${result.question}\nКарты: ${result.cards.join(', ')}\nКолода: ${this.deckType === 'major' ? 'Старшие Арканы' : 'Полная колода'}`);
        }
    }

    shuffleCards() {
        this.selectedCards = [];
        this.generateCards();
        this.updateCounter();
        this.updateSubmitButton();
        
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'selectCard 0.5s ease';
            }, 10);
        });
    }
}

// Создаем глобальную ссылку для обработчиков ошибок
let app;

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
    app = new TarotApp();
});