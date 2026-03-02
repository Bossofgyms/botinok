const TAROT_DECK = [
    // СТАРШИЕ АРКАНЫ (22 карты)
    { name: "0. Шут", meaning: "Начало, невинность, спонтанность", image: "images/fool.jpg", type: "major" },
    { name: "I. Маг", meaning: "Воля, мастерство, концентрация", image: "images/magician.jpg", type: "major" },
    { name: "II. Верховная Жрица", meaning: "Интуиция, тайны, мудрость", image: "images/high_priestess.jpg", type: "major" },
    { name: "III. Императрица", meaning: "Изобилие, творчество, природа", image: "images/empress.jpg", type: "major" },
    { name: "IV. Император", meaning: "Власть, структура, контроль", image: "images/emperor.jpg", type: "major" },
    { name: "V. Иерофант", meaning: "Традиция, вера, духовность", image: "images/hierophant.jpg", type: "major" },
    { name: "VI. Влюбленные", meaning: "Выбор, отношения, гармония", image: "images/lovers.jpg", type: "major" },
    { name: "VII. Колесница", meaning: "Движение, победа, контроль", image: "images/chariot.jpg", type: "major" },
    { name: "VIII. Сила", meaning: "Мужество, страсть, влияние", image: "images/strength.jpg", type: "major" },
    { name: "IX. Отшельник", meaning: "Самоанализ, уединение, мудрость", image: "images/hermit.jpg", type: "major" },
    { name: "X. Колесо Фортуны", meaning: "Судьба, циклы, удача", image: "images/wheel.jpg", type: "major" },
    { name: "XI. Справедливость", meaning: "Баланс, правда, карма", image: "images/justice.jpg", type: "major" },
    { name: "XII. Повешенный", meaning: "Жертва, сдача, новая перспектива", image: "images/hanged.jpg", type: "major" },
    { name: "XIII. Смерть", meaning: "Конец, трансформация, переход", image: "images/death.jpg", type: "major" },
    { name: "XIV. Умеренность", meaning: "Баланс, терпение, гармония", image: "images/temperance.jpg", type: "major" },
    { name: "XV. Дьявол", meaning: "Искушение, зависимость, материализм", image: "images/devil.jpg", type: "major" },
    { name: "XVI. Башня", meaning: "Внезапные изменения, откровение", image: "images/tower.jpg", type: "major" },
    { name: "XVII. Звезда", meaning: "Надежда, вдохновение, духовность", image: "images/star.jpg", type: "major" },
    { name: "XVIII. Луна", meaning: "Иллюзия, страх, подсознание", image: "images/moon.jpg", type: "major" },
    { name: "XIX. Солнце", meaning: "Радость, успех, жизненная сила", image: "images/sun.jpg", type: "major" },
    { name: "XX. Суд", meaning: "Возрождение, призыв, прощение", image: "images/judgement.jpg", type: "major" },
    { name: "XXI. Мир", meaning: "Завершение, единство, достижение", image: "images/world.jpg", type: "major" },

    // МЛАДШИЕ АРКАНЫ — ЖЕЗЛЫ (14 карт)
    { name: "Туз Жезлов", meaning: "Вдохновение, энергия, потенциал", image: "images/wands01.jpg", type: "wands" },
    { name: "2 Жезлов", meaning: "Планирование, решение, партнерство", image: "images/wands02.jpg", type: "wands" },
    { name: "3 Жезлов", meaning: "Предвидение, сотрудничество, расширение", image: "images/wands03.jpg", type: "wands" },
    { name: "4 Жезлов", meaning: "Стабильность, праздник, основание", image: "images/wands04.jpg", type: "wands" },
    { name: "5 Жезлов", meaning: "Конфликт, конкуренция, дебаты", image: "images/wands05.jpg", type: "wands" },
    { name: "6 Жезлов", meaning: "Победа, успех, признание", image: "images/wands06.jpg", type: "wands" },
    { name: "7 Жезлов", meaning: "Стойкость, вызов, защита", image: "images/wands07.jpg", type: "wands" },
    { name: "8 Жезлов", meaning: "Скорость, действие, движение", image: "images/wands08.jpg", type: "wands" },
    { name: "9 Жезлов", meaning: "Сила, стойкость, бдительность", image: "images/wands09.jpg", type: "wands" },
    { name: "10 Жезлов", meaning: "Бремя, ответственность, давление", image: "images/wands10.jpg", type: "wands" },
    { name: "Паж Жезлов", meaning: "Энтузиазм, исследование, новости", image: "images/wands11.jpg", type: "wands" },
    { name: "Рыцарь Жезлов", meaning: "Приключение, энергия, импульс", image: "images/wands12.jpg", type: "wands" },
    { name: "Королева Жезлов", meaning: "Уверенность, независимость, харизма", image: "images/wands13.jpg", type: "wands" },
    { name: "Король Жезлов", meaning: "Лидерство, предпринимательство, видение", image: "images/wands14.jpg", type: "wands" },

    // МЛАДШИЕ АРКАНЫ — КУБКИ (14 карт)
    { name: "Туз Кубков", meaning: "Новая любовь, эмоциональное начало", image: "images/cups01.jpg", type: "cups" },
    { name: "2 Кубков", meaning: "Партнерство, союз, притяжение", image: "images/cups02.jpg", type: "cups" },
    { name: "3 Кубков", meaning: "Праздник, дружба, сообщество", image: "images/cups03.jpg", type: "cups" },
    { name: "4 Кубков", meaning: "Апатия, созерцание, отступление", image: "images/cups04.jpg", type: "cups" },
    { name: "5 Кубков", meaning: "Потеря, сожаление, разочарование", image: "images/cups05.jpg", type: "cups" },
    { name: "6 Кубков", meaning: "Ностальгия, невинность, детство", image: "images/cups06.jpg", type: "cups" },
    { name: "7 Кубков", meaning: "Выбор, иллюзии, мечты", image: "images/cups07.jpg", type: "cups" },
    { name: "8 Кубков", meaning: "Уход, поиск, отказ", image: "images/cups08.jpg", type: "cups" },
    { name: "9 Кубков", meaning: "Удовлетворение, комфорт, удовольствие", image: "images/cups09.jpg", type: "cups" },
    { name: "10 Кубков", meaning: "Счастье, семья, гармония", image: "images/cups10.jpg", type: "cups" },
    { name: "Паж Кубков", meaning: "Мечтательность, чувствительность, творчество", image: "images/cups11.jpg", type: "cups" },
    { name: "Рыцарь Кубков", meaning: "Романтика, очарование, идеализм", image: "images/cups12.jpg", type: "cups" },
    { name: "Королева Кубков", meaning: "Забота, интуиция, сострадание", image: "images/cups13.jpg", type: "cups" },
    { name: "Король Кубков", meaning: "Эмоциональный контроль, дипломатия", image: "images/cups14.jpg", type: "cups" },

    // МЛАДШИЕ АРКАНЫ — МЕЧИ (14 карт)
    { name: "Туз Мечей", meaning: "Прорыв, ясность, истина", image: "images/swords01.jpg", type: "swords" },
    { name: "2 Мечей", meaning: "Тупик, баланс, решение", image: "images/swords02.jpg", type: "swords" },
    { name: "3 Мечей", meaning: "Сердечная боль, печаль, конфликт", image: "images/swords03.jpg", type: "swords" },
    { name: "4 Мечей", meaning: "Отдых, восстановление, медитация", image: "images/swords04.jpg", type: "swords" },
    { name: "5 Мечей", meaning: "Конфликт, унижение, поражение", image: "images/swords05.jpg", type: "swords" },
    { name: "6 Мечей", meaning: "Переход, движение, улучшение", image: "images/swords06.jpg", type: "swords" },
    { name: "7 Мечей", meaning: "Обман, стратегия, секреты", image: "images/swords07.jpg", type: "swords" },
    { name: "8 Мечей", meaning: "Ограничения, страх, беспомощность", image: "images/swords08.jpg", type: "swords" },
    { name: "9 Мечей", meaning: "Тревога, кошмары, депрессия", image: "images/swords09.jpg", type: "swords" },
    { name: "10 Мечей", meaning: "Конец, предательство, поражение", image: "images/swords10.jpg", type: "swords" },
    { name: "Паж Мечей", meaning: "Любознательность, остроумие, бдительность", image: "images/swords11.jpg", type: "swords" },
    { name: "Рыцарь Мечей", meaning: "Амбиции, скорость, прямота", image: "images/swords12.jpg", type: "swords" },
    { name: "Королева Мечей", meaning: "Ясность, независимость, принципы", image: "images/swords13.jpg", type: "swords" },
    { name: "Король Мечей", meaning: "Интеллект, власть, истина", image: "images/swords14.jpg", type: "swords" },

    // МЛАДШИЕ АРКАНЫ — ПЕНТАКЛИ (14 карт)
    { name: "Туз Пентаклей", meaning: "Процветание, возможность, изобилие", image: "images/pents01.jpg", type: "pentacles" },
    { name: "2 Пентаклей", meaning: "Баланс, адаптация, приоритеты", image: "images/pents02.jpg", type: "pentacles" },
    { name: "3 Пентаклей", meaning: "Мастерство, сотрудничество, ремесло", image: "images/pents03.jpg", type: "pentacles" },
    { name: "4 Пентаклей", meaning: "Сохранение, контроль, безопасность", image: "images/pents04.jpg", type: "pentacles" },
    { name: "5 Пентаклей", meaning: "Нужда, беспокойство, изоляция", image: "images/pents05.jpg", type: "pentacles" },
    { name: "6 Пентаклей", meaning: "Щедрость, благотворительность, обмен", image: "images/pents06.jpg", type: "pentacles" },
    { name: "7 Пентаклей", meaning: "Терпение, оценка, перспективы", image: "images/pents07.jpg", type: "pentacles" },
    { name: "8 Пентаклей", meaning: "Мастерство, качество, ремесло", image: "images/pents08.jpg", type: "pentacles" },
    { name: "9 Пентаклей", meaning: "Изобилие, роскошь, самообеспечение", image: "images/pents09.jpg", type: "pentacles" },
    { name: "10 Пентаклей", meaning: "Богатство, наследие, семья", image: "images/pents10.jpg", type: "pentacles" },
    { name: "Паж Пентаклей", meaning: "Изучение, усердие, потенциал", image: "images/pents11.jpg", type: "pentacles" },
    { name: "Рыцарь Пентаклей", meaning: "Трудолюбие, надежность, ответственность", image: "images/pents12.jpg", type: "pentacles" },
    { name: "Королева Пентаклей", meaning: "Изобилие, комфорт, безопасность", image: "images/pents13.jpg", type: "pentacles" },
    { name: "Король Пентаклей", meaning: "Процветание, бизнес, лидерство", image: "images/pents14.jpg", type: "pentacles" }
];


class TarotApp {
    constructor() {
        this.selectedCards = [];
        this.currentCards = [];
        this.question = this.getQuestionFromUrl();
        this.cardBackLoaded = false;
        this.backgroundLoaded = false;
        this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        this.imageCacheKey = Date.now();
        this.cardImagesLoaded = new Map(); // Отслеживаем загруженные карты
        this.init();
    }

    init() {
        document.documentElement.style.setProperty('--tg-theme-bg-color', '#0a0a0f');
        this.renderQuestion();
        this.preloadAssets();
        this.generateCards();
        this.setupEventListeners();
        
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
        }
        
        console.log('🌙 Web App запущен:', window.location.href);
    }

    getQuestionFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('question') ? decodeURIComponent(urlParams.get('question')) : 'Вопрос не указан';
    }

    renderQuestion() {
        const questionElement = document.getElementById('questionText');
        if (questionElement) { 
            let text = this.question;
            if (text.length > 100) text = text.substring(0, 100) + '...';
            questionElement.textContent = text;
        }
    }

    preloadAssets() {
        console.log('🔄 Предзагрузка активов...', this.imageCacheKey);
        this.loadCardBack();
        this.loadBackground();
    }

    loadCardBack() {
        const img = new Image();
        img.onload = () => {
            console.log('✅ Рубашка карт загружена');
            this.cardBackLoaded = true;
            this.updateCardBacks();
        };
        img.onerror = () => {
            console.warn('❌ Рубашка карт НЕ загружена');
            this.cardBackLoaded = false;
            this.updateCardBacks();
        };
        img.src = 'images/card_back.jpg?t=' + this.imageCacheKey;
    }

    loadBackground() {
        const img = new Image();
        img.onload = () => { 
            console.log('✅ Фон загружен'); 
            this.backgroundLoaded = true; 
            this.applyBackground();
        };
        img.onerror = () => { 
            console.warn('❌ Фон НЕ загружен'); 
            this.backgroundLoaded = false; 
            this.applyBackground();
        };
        img.src = 'images/back.jpg?t=' + this.imageCacheKey;
    }

    updateCardBacks() {
        const cardBacks = document.querySelectorAll('.card-back');
        cardBacks.forEach(back => {
            if (this.cardBackLoaded) {
                back.classList.remove('fallback');
                back.style.backgroundImage = 'url("images/card_back.jpg?t=' + this.imageCacheKey + '")';
            } else {
                back.classList.add('fallback');
                back.style.backgroundImage = '';
            }
        });
    }

    applyBackground() {
        if (this.backgroundLoaded) {
            document.body.classList.add('has-bg-image');
            document.body.style.backgroundImage = 'url("images/back.jpg?t=' + this.imageCacheKey + '")';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundAttachment = 'fixed';
            document.body.style.backgroundBlendMode = 'overlay';
        } else {
            document.body.style.backgroundImage = 'linear-gradient(135deg, #1a1a2e, #0a0a0f)';
            document.body.style.backgroundAttachment = 'fixed';
        }
    }

    generateCards() {
        this.imageCacheKey = Date.now();
        this.cardImagesLoaded.clear();
        console.log('💥 Новые карты! Cache Key:', this.imageCacheKey);
        let availableCards = [...TAROT_DECK];
        this.currentCards = this.shuffleArray([...availableCards]).slice(0, 5);
        this.renderCards();
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    renderCards() {
        const container = document.getElementById('cardsContainer');
        if (!container) { 
            console.error("❌ Контейнер не найден"); 
            return; 
        }
        
        console.log('📝 Рендерим карты. Cache Key:', this.imageCacheKey);
        container.innerHTML = '';
        
        this.currentCards.forEach((card, index) => {
            const cardElement = this.createCardElement(card, index);
            if (cardElement) {
                container.appendChild(cardElement);
                
                // Добавляем небольшую задержку для анимации появления
                setTimeout(() => { 
                    cardElement.classList.add('fade-in'); 
                }, index * 50);
            }
        });
        
        this.updateSubmitButton();
    }

    createCardElement(card, index) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.cardName = card.name;
        cardElement.dataset.cardIndex = index;
        
        const imageUrl = card.image + '?t=' + this.imageCacheKey;
        
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-back"></div>
                <div class="card-front">
                    <img src="${imageUrl}" 
                         alt="${card.name}" 
                         class="card-image" 
                         data-card-name="${card.name}"
                         loading="lazy">
                    <div class="card-info">
                        <div class="card-name">${this.getShortName(card.name)}</div>
                        <div class="card-meaning">${card.meaning}</div>
                    </div>
                </div>
            </div>
        `;

        const img = cardElement.querySelector('.card-image');
        
        // Обработчик загрузки изображения
        img.addEventListener('load', () => {
            console.log(`✅ Карта загружена: ${card.name}`);
            this.cardImagesLoaded.set(card.name, true);
            cardElement.classList.remove('card-loading');
            cardElement.classList.add('card-loaded');
            
            // Если карта была выбрана до загрузки, показываем её
            if (this.selectedCards.some(c => c.name === card.name)) {
                cardElement.classList.add('flipped');
            }
        });

        // Обработчик ошибки загрузки
        img.addEventListener('error', () => {
            console.warn(`❌ Ошибка загрузки: ${imageUrl}`);
            this.cardImagesLoaded.set(card.name, false);
            cardElement.classList.add('card-load-error');
            
            // Показываем информацию о карте даже без изображения
            const cardFront = cardElement.querySelector('.card-front');
            if (cardFront) {
                cardFront.style.backgroundColor = 'rgba(26, 26, 46, 0.95)';
            }
        });

        // Если карта уже была загружена ранее
        if (this.cardImagesLoaded.has(card.name)) {
            if (this.cardImagesLoaded.get(card.name)) {
                cardElement.classList.add('card-loaded');
            } else {
                cardElement.classList.add('card-load-error');
            }
        } else {
            cardElement.classList.add('card-loading');
        }

        // Добавляем обработчик клика
        cardElement.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleCard(card, cardElement);
        });

        return cardElement;
    }

    getShortName(fullName) {
        return fullName.replace(/^[IVXLCDM]+\.\s*/, '').replace(/^0\.\s*/, '');
    }

    toggleCard(card, cardElement) {
        const isSelected = this.selectedCards.some(c => c.name === card.name);
        
        if (isSelected) {
            this.deselectCard(card, cardElement);
        } else {
            this.selectCard(card, cardElement);
        }
    }

    selectCard(card, cardElement) {
        if (this.selectedCards.length >= 3) {
            this.showError('Максимум 3 карты! Выберите 3 из 5.');
            return;
        }

        // Проверяем, загружено ли изображение
        const img = cardElement.querySelector('.card-image');
        const isImageLoaded = img && img.complete && img.naturalHeight !== 0;
        
        if (!isImageLoaded) {
            console.log('⚠️ Изображение ещё не загружено, но добавляем класс flipped');
        }

        // Добавляем классы для переворота
        cardElement.classList.add('flipped', 'selected');
        
        // Сохраняем выбранную карту
        this.selectedCards.push(card);
        
        // Анимация
        this.animateSelection(cardElement);
        this.updateCounter();
        this.updateSubmitButton();
        this.updateResults();
        
        console.log(`🃏 Выбрана карта: ${card.name}`);
    }

    deselectCard(card, cardElement) {
        // Убираем классы переворота
        cardElement.classList.remove('selected');
        cardElement.classList.remove('flipped');
        
        // Удаляем из выбранных
        this.selectedCards = this.selectedCards.filter(c => c.name !== card.name);
        
        // Обновляем интерфейс
        this.updateCounter();
        this.updateSubmitButton();
        this.updateResults();
        
        console.log(`🃏 Карта убрана: ${card.name}`);
    }

    animateSelection(cardElement) {
        cardElement.style.transform = 'scale(1.1)';
        setTimeout(() => { 
            cardElement.style.transform = 'scale(1)'; 
        }, 150);
    }

    updateCounter() {
        const counter = document.getElementById('selectedCount');
        if (counter) {
            counter.textContent = this.selectedCards.length;
            if (this.selectedCards.length === 3) {
                counter.classList.add('highlight');
            } else {
                counter.classList.remove('highlight');
            }
        }
    }

    updateSubmitButton() {
        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) {
            const isEnabled = this.selectedCards.length === 3;
            submitBtn.disabled = !isEnabled;
            submitBtn.textContent = isEnabled ? '🎯 Отправить расклад' : `📨 ${this.selectedCards.length}/3`;
            
            if (isEnabled) {
                submitBtn.classList.add('enabled');
            } else {
                submitBtn.classList.remove('enabled');
            }
        }
    }

    updateResults() {
        const resultsContainer = document.getElementById('resultsContainer');
        const list = document.getElementById('selectedCardsList');
        
        if (this.selectedCards.length > 0) {
            resultsContainer.style.display = 'block';
            list.innerHTML = this.selectedCards.map(card => 
                `<div class="selected-card-item">${this.getShortName(card.name)}</div>`
            ).join('');
        } else {
            resultsContainer.style.display = 'none';
        }
    }

    showError(message) {
        if (window.Telegram?.WebApp && typeof window.Telegram.WebApp.showAlert === 'function') {
            window.Telegram.WebApp.showAlert(message);
        } else if (typeof window.alert === 'function') {
            window.alert(message);
        }
    }

    setupEventListeners() {
        document.getElementById('submitBtn')?.addEventListener('click', () => this.submitCards());
        document.getElementById('shuffleBtn')?.addEventListener('click', () => this.shuffleCards());
        
        // Защита от двойного тапа на мобильных
        document.addEventListener('touchend', (e) => {
            const now = Date.now();
            const lastTouchEnd = this.lastTouchEnd || 0;
            if (now - lastTouchEnd <= 300) { 
                e.preventDefault(); 
            }
            this.lastTouchEnd = now;
        }, { passive: false });
    }

    submitCards() {
        if (this.selectedCards.length !== 3) {
            this.showError('Выберите ровно 3 карты!');
            return;
        }

        // Проверяем, все ли выбранные карты загружены
        const allImagesLoaded = this.selectedCards.every(card => {
            const imgLoaded = this.cardImagesLoaded.get(card.name);
            return imgLoaded === true;
        });

        if (!allImagesLoaded) {
            console.log('⚠️ Не все изображения загружены, но отправляем данные');
        }

        const result = {
            question: this.question,
            cards: this.selectedCards.map(card => ({
                name: card.name,
                meaning: card.meaning,
                type: card.type
            })),
            total_available: 5,
            positions: [1, 2, 3],
            timestamp: new Date().toISOString()
        };
        
        console.log('✅ Отправка:', JSON.stringify(result, null, 2));
        
        if (window.Telegram?.WebApp) {
            try {
                window.Telegram.WebApp.sendData(JSON.stringify(result));
                setTimeout(() => { 
                    if (window.Telegram?.WebApp) {
                        window.Telegram.WebApp.close();
                    }
                }, 1000);
            } catch (error) {
                console.error('Ошибка отправки:', error);
                this.showError('Ошибка отправки. Попробуйте еще раз.');
            }
        }
    }

    shuffleCards() {
        console.log('🔄 Перемешиваем карты...');
        
        // Анимация исчезновения
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.transition = 'opacity 0.3s, transform 0.3s';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
        });
        
        // Сбрасываем состояние
        setTimeout(() => { 
            this.selectedCards = [];
            this.cardImagesLoaded.clear();
            this.updateCounter();
            this.updateSubmitButton();
            this.updateResults();
            
            // Генерируем новые карты
            this.generateCards();
            
        }, 300);
    }
}

// Запускаем приложение после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌙 DOM Content Loaded');
    
    // Добавляем базовые стили, если их нет
    if (!document.querySelector('#tarot-styles')) {
        const style = document.createElement('style');
        style.id = 'tarot-styles';
        style.textContent = `
            .card {
                position: relative;
                width: 100%;
                height: 100%;
                cursor: pointer;
                transition: transform 0.3s, opacity 0.3s;
                transform-style: preserve-3d;
            }
            
            .card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                transition: transform 0.6s;
                transform-style: preserve-3d;
            }
            
            .card.flipped .card-inner {
                transform: rotateY(180deg);
            }
            
            .card-front, .card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                border-radius: 10px;
                overflow: hidden;
            }
            
            .card-front {
                transform: rotateY(180deg);
                background: #1a1a2e;
            }
            
            .card-back {
                background: #2a2a3a;
                background-size: cover;
                background-position: center;
            }
            
            .card-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            
            .card.fade-in {
                opacity: 1 !important;
            }
            
            .card-loading .card-front {
                background: linear-gradient(90deg, #2a2a3a 25%, #3a3a4a 50%, #2a2a3a 75%);
                background-size: 200% 100%;
                animation: loading 1.5s infinite;
            }
            
            @keyframes loading {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
            }
            
            .card-load-error .card-front {
                background: #2a1a1a;
            }
            
            .card-info {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 10px;
                background: rgba(0,0,0,0.7);
                color: white;
                transform: translateY(100%);
                transition: transform 0.3s;
            }
            
            .card:hover .card-info {
                transform: translateY(0);
            }
            
            .card-name {
                font-weight: bold;
                font-size: 14px;
            }
            
            .card-meaning {
                font-size: 12px;
                opacity: 0.9;
            }
        `;
        document.head.appendChild(style);
    }
    
    window.tarotApp = new TarotApp();
});
