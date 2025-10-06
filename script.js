class TarotApp {
    constructor() {
        this.selectedCards = [];
        this.currentCards = [];
        this.question = this.getQuestionFromUrl();
        this.deckType = 'full';
        this.cardBackLoaded = false;
        this.backgroundLoaded = false;
        this.isMobile = this.detectMobile();
        this.screenSize = this.getScreenSize();
        this.init();
    }

    detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
               window.innerWidth <= 768;
    }

    getScreenSize() {
        const width = window.innerWidth;
        if (width <= 320) return 'xs';
        if (width <= 375) return 'sm';
        if (width <= 425) return 'md';
        if (width <= 767) return 'lg';
        return 'xl';
    }

    init() {
        this.renderQuestion();
        this.preloadAssets();
        this.generateCards();
        this.setupEventListeners();
        this.setupViewport();
        this.updateLayout();
        console.log('Tarot App initialized - Mobile:', this.isMobile, 'Screen:', this.screenSize);
    }

    setupViewport() {
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            document.head.appendChild(viewport);
        }
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    updateLayout() {
        document.body.className = '';
        document.body.classList.add(`screen-${this.screenSize}`);
        if (this.isMobile) document.body.classList.add('mobile');
        this.renderCards();
    }

    preloadAssets() {
        this.loadBackground();
        this.loadCardBack();
    }

    loadBackground() {
        const img = new Image();
        img.src = 'images/background.jpg';
        img.onload = () => {
            console.log('✅ Фон приложения загружен');
            this.backgroundLoaded = true;
            document.body.style.backgroundImage = 'url("images/background.jpg"), linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            document.body.style.backgroundSize = 'cover, auto';
            document.body.style.backgroundPosition = 'center, center';
            document.body.style.backgroundRepeat = 'no-repeat, no-repeat';
            document.body.style.backgroundAttachment = 'fixed, fixed';
        };
        img.onerror = () => {
            console.warn('❌ Фон приложения не загружен, используем градиент');
            this.backgroundLoaded = false;
            document.body.style.backgroundImage = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            document.body.style.backgroundSize = 'auto';
        };
    }

    loadCardBack() {
        const img = new Image();
        img.src = 'images/card_back.jpg';
        img.onload = () => {
            console.log('✅ Рубашка карт загружена');
            this.cardBackLoaded = true;
            this.updateCardBacks();
        };
        img.onerror = () => {
            console.warn('❌ Рубашка карт не загружена, используем fallback');
            this.cardBackLoaded = false;
            this.updateCardBacks();
        };
    }

    updateCardBacks() {
        const backs = document.querySelectorAll('.card-back');
        backs.forEach(back => {
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
        const params = new URLSearchParams(window.location.search);
        const question = params.get('question');
        return question ? decodeURIComponent(question) : 'Вопрос не указан';
    }

    renderQuestion() {
        const el = document.getElementById('questionText');
        if (el) el.textContent = this.question;
    }

    generateCards() {
        const available = this.deckType === 'major' 
            ? TAROT_DECK.filter(card => card.type === 'major')
            : [...TAROT_DECK];
        
        this.currentCards = [...available]
            .sort(() => Math.random() - 0.5)
            .slice(0, 7);
        
        this.renderCards();
    }

    renderCards() {
        const container = document.getElementById('cardsContainer');
        if (!container) return;

        container.innerHTML = '';
        this.currentCards.forEach((card, index) => {
            const cardEl = document.createElement('div');
            cardEl.className = 'card';
            
            const backClass = this.cardBackLoaded ? '' : 'fallback';
            
            cardEl.innerHTML = `
                <div class="card-inner">
                    <div class="card-back ${backClass}"></div>
                    <div class="card-front">
                        <img src="${card.image}" alt="${card.name}" class="card-image"
                             onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                        <div class="card-info">
                            <div class="card-name">${this.getShortName(card.name)}</div>
                            <div class="card-meaning">${card.meaning}</div>
                        </div>
                    </div>
                </div>
            `;

            cardEl.addEventListener('click', () => this.toggleCard(card, index));
            container.appendChild(cardEl);
        });
        
        setTimeout(() => this.updateCardBacks(), 100);
        this.updateResults();
    }

    getShortName(fullName) {
        return fullName.replace(/^[IVXLCDM]+\.\s*/, '').replace(/^0\.\s*/, '');
    }

    toggleCard(card, index) {
        const cardEl = document.querySelectorAll('.card')[index];
        if (!cardEl) return;
        
        const isSelected = this.selectedCards.some(c => c.name === card.name);

        if (isSelected) {
            this.selectedCards = this.selectedCards.filter(c => c.name !== card.name);
            cardEl.classList.remove('selected', 'flipped');
        } else {
            if (this.selectedCards.length < 3) {
                this.selectedCards.push(card);
                cardEl.classList.add('selected', 'flipped');
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
        if (counter) counter.textContent = this.selectedCards.length;
    }

    updateSubmitButton() {
        const btn = document.getElementById('submitBtn');
        if (btn) btn.disabled = this.selectedCards.length !== 3;
    }

    updateResults() {
        let container = document.getElementById('resultsContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'resultsContainer';
            container.className = 'results-container';
            const actions = document.querySelector('.actions');
            if (actions) {
                actions.parentNode.insertBefore(container, actions);
            }
            return;
        }

        if (this.selectedCards.length > 0) {
            container.innerHTML = `
                <div class="results-title">Выбранные карты:</div>
                <div class="selected-cards">
                    ${this.selectedCards.map(card => 
                        `<div class="selected-card-item">${this.getShortName(card.name)}</div>`
                    ).join('')}
                </div>
            `;
        } else {
            container.innerHTML = '';
        }
    }

    showError(message) {
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
        
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitCards());
        if (shuffleBtn) shuffleBtn.addEventListener('click', () => this.shuffleCards());

        window.addEventListener('resize', () => this.handleResize());
        
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) e.preventDefault();
        }, { passive: false });
    }

    handleResize() {
        const oldSize = this.screenSize;
        this.screenSize = this.getScreenSize();
        this.isMobile = this.detectMobile();
        
        if (oldSize !== this.screenSize) this.updateLayout();
        
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
            window.Telegram.WebApp.sendData(JSON.stringify(result));
            window.Telegram.WebApp.showPopup({
                title: 'Успешно',
                message: 'Расклад отправлен!',
                buttons: [{ type: 'ok' }]
            });
            setTimeout(() => window.Telegram.WebApp.close(), 1000);
        } else {
            const text = `Расклад отправлен!\n\nВопрос: ${result.question}\nКарты:\n${this.selectedCards.map((card, i) => `${i + 1}. ${card.name} - ${card.meaning}`).join('\n')}`;
            if (confirm(text + '\n\nНажмите OK для продолжения')) {
                console.log('Расклад завершен');
            }
        }
    }

    shuffleCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.style.transform = 'rotate(3deg)');
        
        setTimeout(() => {
            cards.forEach(card => card.style.transform = 'rotate(-3deg)');
            setTimeout(() => {
                cards.forEach(card => card.style.transform = 'rotate(0deg)');
                this.selectedCards = [];
                this.generateCards();
                this.updateCounter();
                this.updateSubmitButton();
                this.updateResults();
                
                const newCards = document.querySelectorAll('.card');
                newCards.forEach(card => {
                    card.style.animation = 'none';
                    setTimeout(() => card.style.animation = 'selectCard 0.5s ease', 10);
                });
            }, 100);
        }, 100);
    }
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', () => {
    window.tarotApp = new TarotApp();
    
    window.reloadBackground = function() {
        if (window.tarotApp) window.tarotApp.loadBackground();
    };
    
    window.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
        }
    }, true);
});
