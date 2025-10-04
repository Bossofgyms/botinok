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
        console.log('Tarot Mini App initialized');
    }

    preloadCardBack() {
        const cardBackImage = new Image();
        cardBackImage.src = 'images/card_back.png';
        
        cardBackImage.onload = () => {
            console.log('✅ Рубашка карт загружена');
            this.cardBackLoaded = true;
        };
        
        cardBackImage.onerror = () => {
            console.warn('❌ Не удалось загрузить рубашку карт');
            this.cardBackLoaded = false;
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
            
            cardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-back"></div>
                    <div class="card-front">
                        <img src="${card.image}" alt="${card.name}" class="card-image">
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
            document.querySelector('.container').appendChild(resultsContainer);
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
            alert(`Расклад отправлен!\n\nВопрос: ${result.question}\nКарты: ${result.cards.join(', ')}`);
        }
    }

    shuffleCards() {
        this.selectedCards = [];
        this.generateCards();
        this.updateCounter();
        this.updateSubmitButton();
        this.updateResults();
        
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'selectCard 0.5s ease';
            }, 10);
        });
    }
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
    new TarotApp();
});
