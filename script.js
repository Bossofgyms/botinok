// Полная колода Таро - 78 карт
const TAROT_DECK = [
    // СТАРШИЕ АРКАНЫ (22 карты)
    { 
        name: "0. Шут", 
        meaning: "Начало, невинность, спонтанность", 
        image: "images/fool.jpg",
        type: "major"
    },
    { 
        name: "I. Маг", 
        meaning: "Воля, мастерство, концентрация", 
        image: "images/magician.jpg",
        type: "major"
    },
    { 
        name: "II. Верховная Жрица", 
        meaning: "Интуиция, тайны, мудрость", 
        image: "images/high_priestess.jpg",
        type: "major"
    },
    { 
        name: "III. Императрица", 
        meaning: "Изобилие, творчество, природа", 
        image: "images/empress.jpg",
        type: "major"
    },
    { 
        name: "IV. Император", 
        meaning: "Власть, структура, контроль", 
        image: "images/emperor.jpg",
        type: "major"
    },
    { 
        name: "V. Иерофант", 
        meaning: "Традиция, вера, духовность", 
        image: "images/hierophant.jpg",
        type: "major"
    },
    { 
        name: "VI. Влюбленные", 
        meaning: "Выбор, отношения, гармония", 
        image: "images/lovers.jpg",
        type: "major"
    },
    { 
        name: "VII. Колесница", 
        meaning: "Движение, победа, контроль", 
        image: "images/chariot.jpg",
        type: "major"
    },
    { 
        name: "VIII. Сила", 
        meaning: "Мужество, страсть, влияние", 
        image: "images/strength.jpg",
        type: "major"
    },
    { 
        name: "IX. Отшельник", 
        meaning: "Самоанализ, уединение, мудрость", 
        image: "images/hermit.jpg",
        type: "major"
    },
    { 
        name: "X. Колесо Фортуны", 
        meaning: "Судьба, циклы, удача", 
        image: "images/wheel.jpg",
        type: "major"
    },
    { 
        name: "XI. Справедливость", 
        meaning: "Баланс, правда, карма", 
        image: "images/justice.jpg",
        type: "major"
    },
    { 
        name: "XII. Повешенный", 
        meaning: "Жертва, сдача, новая перспектива", 
        image: "images/hanged.jpg",
        type: "major"
    },
    { 
        name: "XIII. Смерть", 
        meaning: "Конец, трансформация, переход", 
        image: "images/death.jpg",
        type: "major"
    },
    { 
        name: "XIV. Умеренность", 
        meaning: "Баланс, терпение, гармония", 
        image: "images/temperance.jpg",
        type: "major"
    },
    { 
        name: "XV. Дьявол", 
        meaning: "Искушение, зависимость, материализм", 
        image: "images/devil.jpg",
        type: "major"
    },
    { 
        name: "XVI. Башня", 
        meaning: "Внезапные изменения, откровение", 
        image: "images/tower.jpg",
        type: "major"
    },
    { 
        name: "XVII. Звезда", 
        meaning: "Надежда, вдохновение, духовность", 
        image: "images/star.jpg",
        type: "major"
    },
    { 
        name: "XVIII. Луна", 
        meaning: "Иллюзия, страх, подсознание", 
        image: "images/moon.jpg",
        type: "major"
    },
    { 
        name: "XIX. Солнце", 
        meaning: "Радость, успех, жизненная сила", 
        image: "images/sun.jpg",
        type: "major"
    },
    { 
        name: "XX. Суд", 
        meaning: "Возрождение, призыв, прощение", 
        image: "images/judgement.jpg",
        type: "major"
    },
    { 
        name: "XXI. Мир", 
        meaning: "Завершение, единство, достижение", 
        image: "images/world.jpg",
        type: "major"
    },

    // МЛАДШИЕ АРКАНЫ - ЖЕЗЛЫ (14 карт)
    { 
        name: "Туз Жезлов", 
        meaning: "Вдохновение, энергия, потенциал", 
        image: "images/wands01.jpg",
        type: "wands"
    },
    { 
        name: "2 Жезлов", 
        meaning: "Планирование, решение, партнерство", 
        image: "images/wands02.jpg",
        type: "wands"
    },
    { 
        name: "3 Жезлов", 
        meaning: "Предвидение, сотрудничество, расширение", 
        image: "images/wands03.jpg",
        type: "wands"
    },
    { 
        name: "4 Жезлов", 
        meaning: "Стабильность, праздник, основание", 
        image: "images/wands04.jpg",
        type: "wands"
    },
    { 
        name: "5 Жезлов", 
        meaning: "Конфликт, конкуренция, дебаты", 
        image: "images/wands05.jpg",
        type: "wands"
    },
    { 
        name: "6 Жезлов", 
        meaning: "Победа, успех, признание", 
        image: "images/wands06.jpg",
        type: "wands"
    },
    { 
        name: "7 Жезлов", 
        meaning: "Стойкость, вызов, защита", 
        image: "images/wands07.jpg",
        type: "wands"
    },
    { 
        name: "8 Жезлов", 
        meaning: "Скорость, действие, движение", 
        image: "images/wands08.jpg",
        type: "wands"
    },
    { 
        name: "9 Жезлов", 
        meaning: "Сила, стойкость, бдительность", 
        image: "images/wands09.jpg",
        type: "wands"
    },
    { 
        name: "10 Жезлов", 
        meaning: "Бремя, ответственность, давление", 
        image: "images/wands10.jpg",
        type: "wands"
    },
    { 
        name: "Паж Жезлов", 
        meaning: "Энтузиазм, исследование, новости", 
        image: "images/wands11.jpg",
        type: "wands"
    },
    { 
        name: "Рыцарь Жезлов", 
        meaning: "Приключение, энергия, импульс", 
        image: "images/wands12.jpg",
        type: "wands"
    },
    { 
        name: "Королева Жезлов", 
        meaning: "Уверенность, независимость, харизма", 
        image: "images/wands13.jpg",
        type: "wands"
    },
    { 
        name: "Король Жезлов", 
        meaning: "Лидерство, предпринимательство, видение", 
        image: "images/wands14.jpg",
        type: "wands"
    },

    // МЛАДШИЕ АРКАНЫ - КУБКИ (14 карт)
    { 
        name: "Туз Кубков", 
        meaning: "Новая любовь, эмоциональное начало", 
        image: "images/cups01.jpg",
        type: "cups"
    },
    { 
        name: "2 Кубков", 
        meaning: "Партнерство, союз, притяжение", 
        image: "images/cups02.jpg",
        type: "cups"
    },
    { 
        name: "3 Кубков", 
        meaning: "Праздник, дружба, сообщество", 
        image: "images/cups03.jpg",
        type: "cups"
    },
    { 
        name: "4 Кубков", 
        meaning: "Апатия, созерцание, отступление", 
        image: "images/cups04.jpg",
        type: "cups"
    },
    { 
        name: "5 Кубков", 
        meaning: "Потеря, сожаление, разочарование", 
        image: "images/cups05.jpg",
        type: "cups"
    },
    { 
        name: "6 Кубков", 
        meaning: "Ностальгия, невинность, детство", 
        image: "images/cups06.jpg",
        type: "cups"
    },
    { 
        name: "7 Кубков", 
        meaning: "Выбор, иллюзии, мечты", 
        image: "images/cups07.jpg",
        type: "cups"
    },
    { 
        name: "8 Кубков", 
        meaning: "Уход, поиск, отказ", 
        image: "images/cups08.jpg",
        type: "cups"
    },
    { 
        name: "9 Кубков", 
        meaning: "Удовлетворение, комфорт, удовольствие", 
        image: "images/cups09.jpg",
        type: "cups"
    },
    { 
        name: "10 Кубков", 
        meaning: "Счастье, семья, гармония", 
        image: "images/cups10.jpg",
        type: "cups"
    },
    { 
        name: "Паж Кубков", 
        meaning: "Мечтательность, чувствительность, творчество", 
        image: "images/cups11.jpg",
        type: "cups"
    },
    { 
        name: "Рыцарь Кубков", 
        meaning: "Романтика, очарование, идеализм", 
        image: "images/cups12.jpg",
        type: "cups"
    },
    { 
        name: "Королева Кубков", 
        meaning: "Забота, интуиция, сострадание", 
        image: "images/cups13.jpg",
        type: "cups"
    },
    { 
        name: "Король Кубков", 
        meaning: "Эмоциональный контроль, дипломатия", 
        image: "images/cups14.jpg",
        type: "cups"
    },

    // МЛАДШИЕ АРКАНЫ - МЕЧИ (14 карт)
    { 
        name: "Туз Мечей", 
        meaning: "Прорыв, ясность, истина", 
        image: "images/swords01.jpg",
        type: "swords"
    },
    { 
        name: "2 Мечей", 
        meaning: "Тупик, баланс, решение", 
        image: "images/swords02.jpg",
        type: "swords"
    },
    { 
        name: "3 Мечей", 
        meaning: "Сердечная боль, печаль, конфликт", 
        image: "images/swords03.jpg",
        type: "swords"
    },
    { 
        name: "4 Мечей", 
        meaning: "Отдых, восстановление, медитация", 
        image: "images/swords04.jpg",
        type: "swords"
    },
    { 
        name: "5 Мечей", 
        meaning: "Конфликт, унижение, поражение", 
        image: "images/swords05.jpg",
        type: "swords"
    },
    { 
        name: "6 Мечей", 
        meaning: "Переход, движение, улучшение", 
        image: "images/swords06.jpg",
        type: "swords"
    },
    { 
        name: "7 Мечей", 
        meaning: "Обман, стратегия, секреты", 
        image: "images/swords07.jpg",
        type: "swords"
    },
    { 
        name: "8 Мечей", 
        meaning: "Ограничения, страх, беспомощность", 
        image: "images/swords08.jpg",
        type: "swords"
    },
    { 
        name: "9 Мечей", 
        meaning: "Тревога, кошмары, депрессия", 
        image: "images/swords09.jpg",
        type: "swords"
    },
    { 
        name: "10 Мечей", 
        meaning: "Конец, предательство, поражение", 
        image: "images/swords10.jpg",
        type: "swords"
    },
    { 
        name: "Паж Мечей", 
        meaning: "Любознательность, остроумие, бдительность", 
        image: "images/swords11.jpg",
        type: "swords"
    },
    { 
        name: "Рыцарь Мечей", 
        meaning: "Амбиции, скорость, прямота", 
        image: "images/swords12.jpg",
        type: "swords"
    },
    { 
        name: "Королева Мечей", 
        meaning: "Ясность, независимость, принципы", 
        image: "images/swords13.jpg",
        type: "swords"
    },
    { 
        name: "Король Мечей", 
        meaning: "Интеллект, власть, истина", 
        image: "images/swords14.jpg",
        type: "swords"
    },

    // МЛАДШИЕ АРКАНЫ - ПЕНТАКЛИ (14 карт)
    { 
        name: "Туз Пентаклей", 
        meaning: "Процветание, возможность, изобилие", 
        image: "images/pents01.jpg",
        type: "pentacles"
    },
    { 
        name: "2 Пентаклей", 
        meaning: "Баланс, адаптация, приоритеты", 
        image: "images/pents02.jpg",
        type: "pentacles"
    },
    { 
        name: "3 Пентаклей", 
        meaning: "Мастерство, сотрудничество, ремесло", 
        image: "images/pents03.jpg",
        type: "pentacles"
    },
    { 
        name: "4 Пентаклей", 
        meaning: "Сохранение, контроль, безопасность", 
        image: "images/pents04.jpg",
        type: "pentacles"
    },
    { 
        name: "5 Пентаклей", 
        meaning: "Нужда, беспокойство, изоляция", 
        image: "images/pents05.jpg",
        type: "pentacles"
    },
    { 
        name: "6 Пентаклей", 
        meaning: "Щедрость, благотворительность, обмен", 
        image: "images/pents06.jpg",
        type: "pentacles"
    },
    { 
        name: "7 Пентаклей", 
        meaning: "Терпение, оценка, перспективы", 
        image: "images/pents07.jpg",
        type: "pentacles"
    },
    { 
        name: "8 Пентаклей", 
        meaning: "Мастерство, качество, ремесло", 
        image: "images/pents08.jpg",
        type: "pentacles"
    },
    { 
        name: "9 Пентаклей", 
        meaning: "Изобилие, роскошь, самообеспечение", 
        image: "images/pents09.jpg",
        type: "pentacles"
    },
    { 
        name: "10 Пентаклей", 
        meaning: "Богатство, наследие, семья", 
        image: "images/pents10.jpg",
        type: "pentacles"
    },
    { 
        name: "Паж Пентаклей", 
        meaning: "Изучение, усердие, потенциал", 
        image: "images/pents11.jpg",
        type: "pentacles"
    },
    { 
        name: "Рыцарь Пентаклей", 
        meaning: "Трудолюбие, надежность, ответственность", 
        image: "images/pents12.jpg",
        type: "pentacles"
    },
    { 
        name: "Королева Пентаклей", 
        meaning: "Изобилие, комфорт, безопасность", 
        image: "images/pents13.jpg",
        type: "pentacles"
    },
    { 
        name: "Король Пентаклей", 
        meaning: "Процветание, бизнес, лидерство", 
        image: "images/pents14.jpg",
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
        this.backgroundLoaded = false;
        this.isMobile = this.detectMobile();
        this.init();
    }

    detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
               window.innerWidth <= 768;
    }

    init() {
        this.renderQuestion();
        this.preloadAssets();
        this.generateCards();
        this.setupEventListeners();
        this.setupViewport();
        console.log('Tarot App initialized - Mobile:', this.isMobile);
    }

    setupViewport() {
        // Добавляем метатег viewport для лучшего отображения на мобильных
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
    }

    preloadAssets() {
        // Предзагрузка фона приложения
        const bgImage = new Image();
        bgImage.src = 'images/background.jpg';
        
        bgImage.onload = () => {
            console.log('✅ Фон приложения загружен');
            this.backgroundLoaded = true;
            document.body.style.background = 'url("images/background.jpg") center/cover fixed';
        };
        
        bgImage.onerror = () => {
            console.warn('❌ Фон приложения не загружен, используем градиент');
            this.backgroundLoaded = false;
            document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        };

        // Предзагрузка рубашки карт
        const cardBackImage = new Image();
        cardBackImage.src = 'images/card_back.jpg';
        
        cardBackImage.onload = () => {
            console.log('✅ Рубашка карт загружена');
            this.cardBackLoaded = true;
            this.updateCardBacks();
        };
        
        cardBackImage.onerror = () => {
            console.warn('❌ Рубашка карт не загружена, используем fallback');
            this.cardBackLoaded = false;
            this.updateCardBacks();
        };
    }

    updateCardBacks() {
        const cardBacks = document.querySelectorAll('.card-back');
        cardBacks.forEach(back => {
            if (!this.cardBackLoaded) {
                back.classList.add('fallback');
                back.style.background = 'linear-gradient(45deg, #8B4513, #A0522D)';
            } else {
                back.classList.remove('fallback');
                back.style.background = 'url("images/card_back.jpg") center/cover no-repeat';
            }
        });
    }

    getQuestionFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const question = urlParams.get('question');
        return question ? decodeURIComponent(question) : 'Вопрос не указан';
    }

    renderQuestion() {
        const questionElement = document.getElementById('questionText');
        if (questionElement) {
            questionElement.textContent = this.question;
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
        if (!container) return;
        
        container.innerHTML = '';

        this.currentCards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            
            const cardBackClass = this.cardBackLoaded ? '' : 'fallback';
            
            cardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-back ${cardBackClass}"></div>
                    <div class="card-front">
                        <img src="${card.image}" alt="${card.name}" class="card-image"
                             onerror="this.style.display='none';">
                        <div class="card-info">
                            <div class="card-name">${this.getShortName(card.name)}</div>
                            <div class="card-meaning">${card.meaning}</div>
                        </div>
                    </div>
                </div>
            `;

            cardElement.addEventListener('click', () => this.toggleCard(card, index));
            container.appendChild(cardElement);
        });
        
        this.updateResults();
    }

    getShortName(fullName) {
        return fullName.replace(/^[IVXLCDM]+\.\s*/, '').replace(/^0\.\s*/, '');
    }

    toggleCard(card, index) {
        const cardElement = document.querySelectorAll('.card')[index];
        if (!cardElement) return;
        
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
        this.updateResults();
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

    updateResults() {
        let resultsContainer = document.getElementById('resultsContainer');
        
        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'resultsContainer';
            resultsContainer.className = 'results-container';
            const container = document.querySelector('.container');
            if (container) {
                const actions = document.querySelector('.actions');
                container.insertBefore(resultsContainer, actions);
            }
            return;
        }

        if (this.selectedCards.length > 0) {
            resultsContainer.innerHTML = `
                <div class="results-title">Выбранные карты:</div>
                <div class="selected-cards">
                    ${this.selectedCards.map(card => 
                        `<div class="selected-card-item">${this.getShortName(card.name)}</div>`
                    ).join('')}
                </div>
            `;
        } else {
            resultsContainer.innerHTML = '';
        }
    }

    showError(message) {
        // Используем более красивое уведомление вместо alert
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.showPopup({
                title: 'Внимание',
                message: message,
                buttons: [{ type: 'ok' }]
            });
        } else {
            alert(message);
        }
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

        // Добавляем обработчик для изменения ориентации
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Предотвращаем масштабирование при двойном тапе на мобильных
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });

        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }

    handleResize() {
        // Обновляем флаг мобильного устройства при изменении размера
        this.isMobile = this.detectMobile();
        
        // Можно добавить дополнительную логику при изменении размера
        if (window.innerHeight < 500) {
            document.body.classList.add('landscape');
        } else {
            document.body.classList.remove('landscape');
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
            meanings: this.selectedCards.map(card => card.meaning),
            deck_type: this.deckType,
            timestamp: new Date().toISOString()
        };

        console.log('Отправка данных:', result);

        if (window.Telegram && window.Telegram.WebApp) {
            // Для Telegram Web App
            window.Telegram.WebApp.sendData(JSON.stringify(result));
            // Показываем индикатор загрузки
            window.Telegram.WebApp.showPopup({
                title: 'Успешно',
                message: 'Расклад отправлен!',
                buttons: [{ type: 'ok' }]
            });
            setTimeout(() => {
                window.Telegram.WebApp.close();
            }, 1000);
        } else {
            // Для браузера
            const resultText = `Расклад отправлен!\n\nВопрос: ${result.question}\nКарты:\n${this.selectedCards.map((card, index) => `${index + 1}. ${card.name} - ${card.meaning}`).join('\n')}`;
            
            // Показываем красивое уведомление
            if (window.confirm(resultText + '\n\nНажмите OK для продолжения')) {
                // Можно добавить дополнительную логику для браузера
                console.log('Расклад завершен');
            }
        }
    }

    shuffleCards() {
        // Анимация перемешивания
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.transform = 'rotate(5deg)';
            setTimeout(() => {
                card.style.transform = 'rotate(-5deg)';
                setTimeout(() => {
                    card.style.transform = 'rotate(0deg)';
                }, 100);
            }, 100);
        });

        // Обновляем карты после небольшой задержки для анимации
        setTimeout(() => {
            this.selectedCards = [];
            this.generateCards();
            this.updateCounter();
            this.updateSubmitButton();
            this.updateResults();
            
            // Анимация появления новых карт
            const newCards = document.querySelectorAll('.card');
            newCards.forEach(card => {
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'selectCard 0.5s ease';
                }, 10);
            });
        }, 300);
    }

    // Дополнительный метод для отладки
    debugInfo() {
        console.log('=== Tarot App Debug Info ===');
        console.log('Selected cards:', this.selectedCards.length);
        console.log('Current cards:', this.currentCards.length);
        console.log('Question:', this.question);
        console.log('Mobile:', this.isMobile);
        console.log('Background loaded:', this.backgroundLoaded);
        console.log('Card back loaded:', this.cardBackLoaded);
        console.log('============================');
    }
}

// Добавляем глобальную функцию для отладки
window.debugTarotApp = function() {
    if (window.tarotApp) {
        window.tarotApp.debugInfo();
    }
};

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
    window.tarotApp = new TarotApp();
    
    // Добавляем обработчик для ошибок загрузки изображений
    window.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            console.warn('Ошибка загрузки изображения:', e.target.src);
            e.target.style.display = 'none';
        }
    }, true);
});

// Обработчик для видимости страницы (пауза/возобновление)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Приложение скрыто');
    } else {
        console.log('Приложение активно');
    }
});
