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

const TAROT_DECK = [
    // СТАРШИЕ АРКАНЫ
    { name: "0. Шут", meaning: "Начало, невинность", image: "images/fool.jpg" },
    { name: "I. Маг", meaning: "Воля, мастерство", image: "images/magician.jpg" },
    { name: "II. Жрица", meaning: "Интуиция, тайны", image: "images/high_priestess.jpg" },
    { name: "III. Императрица", meaning: "Изобилие, творчество", image: "images/empress.jpg" },
    { name: "IV. Император", meaning: "Власть, структура", image: "images/emperor.jpg" },
    { name: "V. Иерофант", meaning: "Традиция, вера", image: "images/hierophant.jpg" },
    { name: "VI. Влюбленные", meaning: "Выбор, гармония", image: "images/lovers.jpg" },
    { name: "VII. Колесница", meaning: "Движение, победа", image: "images/chariot.jpg" },
    { name: "VIII. Сила", meaning: "Мужество, страсть", image: "images/strength.jpg" },
    { name: "IX. Отшельник", meaning: "Самоанализ, мудрость", image: "images/hermit.jpg" },
    { name: "X. Колесо Фортуны", meaning: "Судьба, удача", image: "images/wheel.jpg" },
    { name: "XI. Справедливость", meaning: "Баланс, правда", image: "images/justice.jpg" },
    { name: "XII. Повешенный", meaning: "Жертва, сдача", image: "images/hanged.jpg" },
    { name: "XIII. Смерть", meaning: "Трансформация", image: "images/death.jpg" },
    { name: "XIV. Умеренность", meaning: "Баланс, терпение", image: "images/temperance.jpg" },
    { name: "XV. Дьявол", meaning: "Искушение, зависимость", image: "images/devil.jpg" },
    { name: "XVI. Башня", meaning: "Внезапные изменения", image: "images/tower.jpg" },
    { name: "XVII. Звезда", meaning: "Надежда, вдохновение", image: "images/star.jpg" },
    { name: "XVIII. Луна", meaning: "Иллюзия, страх", image: "images/moon.jpg" },
    { name: "XIX. Солнце", meaning: "Радость, успех", image: "images/sun.jpg" },
    { name: "XX. Суд", meaning: "Возрождение, призыв", image: "images/judgement.jpg" },
    { name: "XXI. Мир", meaning: "Завершение, единство", image: "images/world.jpg" },

    // МЛАДШИЕ АРКАНЫ (примеры)
    { name: "Туз Жезлов", meaning: "Вдохновение", image: "images/wands01.jpg" },
    { name: "2 Кубков", meaning: "Партнерство", image: "images/cups02.jpg" },
    { name: "3 Мечей", meaning: "Боль, печаль", image: "images/swords03.jpg" },
    { name: "4 Пентаклей", meaning: "Сохранение", image: "images/pents04.jpg" },
    { name: "5 Жезлов", meaning: "Конфликт", image: "images/wands05.jpg" }
];

class TarotApp {
    constructor() {
        this.selectedCards = [];
        this.currentCards = [];
        this.question = this.getQuestionFromUrl();
        this.cardsLoaded = false;
        
        // Функция предзагрузки изображения
        this.preloadImage = (url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = url;
            });
        };
        
        this.init();
    }

    async init() {
        this.renderQuestion();
        
        console.log('🌙 Web App запущен');
        
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
        }
        
        // Предзагрузка картинок рубашки и фона
        await this.preloadImage('/images/card_back.jpg');
        await this.preloadImage('/images/back.jpg');
        
        this.cardsLoaded = true;
        this.generateCards();
        this.setupEventListeners();
    }

    getQuestionFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const q = params.get('question');
        if (!q || q === '') return 'Вопрос';
        return decodeURIComponent(q).length > 60 ? decodeURIComponent(q).substring(0, 60) + '...' : decodeURIComponent(q);
    }

    renderQuestion() {
        document.getElementById('questionText').textContent = this.question;
    }

    generateCards() {
        // СБРОС ВЫБОРА КАРТ
        this.selectedCards = [];
        
        // ГЕНЕРАЦИЯ НОВЫХ КАРТ
        const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
        this.currentCards = shuffled.slice(0, 5);
        
        this.renderCards();
        this.updateUI();
    }

    renderCards() {
        const container = document.getElementById('cardsContainer');
        
        // Очистка контейнера
        container.innerHTML = '';
        
        // Создание новых карт
        this.currentCards.forEach((card, index) => {
            const cardEl = document.createElement('div');
            cardEl.className = 'card';
            cardEl.dataset.cardName = card.name;
            
            // Создаём структуру карты
            cardEl.innerHTML = `
                <div class="card-inner">
                    <div class="card-back"></div>
                    <div class="card-front">
                        <img src="${card.image}" alt="${card.name}" class="card-image" data-name="${card.name}">
                        <div class="card-placeholder" data-name="${card.name}">🃏</div>
                        <div class="card-info">
                            <div class="card-name">${this.shorten(card.name)}</div>
                            <div class="card-meaning">${card.meaning}</div>
                        </div>
                    </div>
                </div>
            `;
            
            // Добавляем обработчики событий
            const img = cardEl.querySelector('.card-image');
            const placeholder = cardEl.querySelector('.card-placeholder');
            
            if (img) {
                img.style.display = 'block';
                
                img.addEventListener('load', () => {
                    cardEl.classList.remove('card-has-error');
                    if (placeholder) placeholder.style.display = 'none';
                });
                
                img.addEventListener('error', () => {
                    cardEl.classList.add('card-has-error');
                    if (placeholder) placeholder.style.display = 'flex';
                    img.style.display = 'none';
                });
            }
            
            cardEl.addEventListener('click', () => this.toggleCard(card, cardEl));
            
            // Добавляем в DOM с задержкой для плавности
            setTimeout(() => {
                container.appendChild(cardEl);
            }, index * 50);
        });
        
        this.updateSubmitButton();
    }

    toggleCard(card, element) {
        const isSelected = this.selectedCards.some(c => c.name === card.name);
        
        if (isSelected) {
            // Снимаем выбор
            this.selectedCards = this.selectedCards.filter(c => c.name !== card.name);
            element.classList.remove('flipped', 'selected');
        } else {
            if (this.selectedCards.length >= 3) {
                this.showAlert('Максимум 3 карты! Выберите 3 из 5.');
                return;
            }
            
            // Добавляем выбор
            this.selectedCards.push(card);
            element.classList.add('flipped', 'selected');
        }
        
        this.updateUI();
    }

    updateUI() {
        // Обновляем счётчик
        document.getElementById('selectedCount').textContent = this.selectedCards.length;
        
        // Активируем кнопку отправки
        document.getElementById('submitBtn').disabled = this.selectedCards.length !== 3;
        
        // Обновляем текст кнопки
        if (this.selectedCards.length === 3) {
            document.getElementById('submitBtn').textContent = '🎯 Отправить расклад';
        } else {
            document.getElementById('submitBtn').textContent = `📨 ${this.selectedCards.length}/3`;
        }
        
        // Показываем список выбранных карт
        const list = document.getElementById('selectedCardsList');
        const container = document.getElementById('resultsContainer');
        
        if (this.selectedCards.length > 0) {
            list.innerHTML = this.selectedCards.map(c => 
                `<div class="selected-card-item">${this.shorten(c.name)}</div>`
            ).join('');
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }

    showAlert(message) {
        if (window.Telegram?.WebApp?.showAlert) {
            window.Telegram.WebApp.showAlert(message);
        } else {
            alert(message);
        }
    }

    shorten(fullName) {
        return fullName.replace(/^[IVXLCDM]+\.\s*/, '').replace(/^0\.\s*/, '');
    }

    setupEventListeners() {
        document.getElementById('submitBtn').addEventListener('click', () => this.submitCards());
        document.getElementById('shuffleBtn').addEventListener('click', () => {
            this.showShuffleAnimation();
        });
    }

    showShuffleAnimation() {
        // Простая анимация исчезновения
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.opacity = '0';
        });
        
        setTimeout(() => {
            this.generateCards();
            
            cards.forEach(card => {
                card.style.opacity = '1';
            });
        }, 300);
    }

    submitCards() {
        if (this.selectedCards.length !== 3) {
            this.showAlert('Выберите ровно 3 карты!');
            return;
        }
        
        const result = {
            question: this.question,
            cards: this.selectedCards.map(c => c.name),
            positions: [1, 2, 3]
        };
        
        console.log('✅ Отправка:', result);
        
        if (window.Telegram?.WebApp) {
            try {
                window.Telegram.WebApp.sendData(JSON.stringify(result));
                setTimeout(() => {
                    window.Telegram.WebApp.close();
                }, 1000);
            } catch (e) {
                console.error('Ошибка:', e);
                this.showAlert('Ошибка отправки');
            }
        }
    }
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
    window.tarotApp = new TarotApp();
});
