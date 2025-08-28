// Main Application Logic for Setayesh's Journey

class JourneyApplication {
    constructor() {
        this.startTime = null;
        this.currentSection = 0;
        this.responses = {};
        this.insights = [];
        this.completedSections = 0;
        this.totalSections = 10;
        this.sessionId = this.generateSessionId();
        
        // Drawing state
        this.currentDrawingColor = '#ffeaa7';
        this.isDrawing = false;
        
        this.init();
    }
    
    init() {
        this.loadSavedData();
        this.bindEvents();
        this.setupCanvas();
        this.setupDragAndDrop();
        
        // Analytics tracking
        Analytics.track('application_loaded', {
            userAgent: navigator.userAgent,
            timestamp: Date.now()
        });
    }
    
    generateSessionId() {
        return 'setayesh_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    loadSavedData() {
        const saved = Storage.load('setayesh_journey_data');
        if (saved) {
            Object.assign(this, saved);
            this.updateProgress();
        }
    }
    
    saveData() {
        const dataToSave = {
            startTime: this.startTime,
            currentSection: this.currentSection,
            responses: this.responses,
            insights: this.insights,
            completedSections: this.completedSections,
            sessionId: this.sessionId
        };
        
        Storage.save('setayesh_journey_data', dataToSave);
    }
    
    bindEvents() {
        // Auto-save every 30 seconds
        setInterval(() => this.saveData(), 30000);
        
        // Handle page visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.saveData();
            }
        });
        
        // Handle beforeunload
        window.addEventListener('beforeunload', () => {
            this.saveData();
        });
        
        // Global click handler for modals
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target.id);
            }
        });
    }
    
    startJourney() {
        this.startTime = Date.now();
        this.currentSection = 1;
        
        // Hide welcome section
        const welcomeSection = $('#welcomeSection');
        if (welcomeSection) {
            Animation.fadeOut(welcomeSection, 500);
        }
        
        // Show progress container
        const progressContainer = $('#progressContainer');
        if (progressContainer) {
            setTimeout(() => {
                progressContainer.style.display = 'block';
                Animation.fadeIn(progressContainer, 500);
            }, 500);
        }
        
        // Load first section
        setTimeout(() => {
            this.loadSection(1);
        }, 1000);
        
        Analytics.track('journey_started', {
            timestamp: this.startTime
        });
        
        this.saveData();
    }
    
    loadSection(sectionNumber) {
        const sectionsContainer = $('#sectionsContainer');
        if (!sectionsContainer) return;
        
        // Clear existing sections
        sectionsContainer.innerHTML = '';
        
        const sectionData = this.getSectionData(sectionNumber);
        const sectionHTML = this.generateSectionHTML(sectionData, sectionNumber);
        
        sectionsContainer.innerHTML = sectionHTML;
        
        // Animate section appearance
        const section = sectionsContainer.querySelector('.section');
        if (section) {
            setTimeout(() => {
                section.classList.add('visible');
            }, 100);
        }
        
        this.currentSection = sectionNumber;
        this.updateProgress();
        this.setupSectionInteractions(sectionNumber);
        
        Analytics.track('section_loaded', {
            section: sectionNumber,
            timestamp: Date.now()
        });
    }
    
    getSectionData(sectionNumber) {
        const sections = {
            1: {
                title: "Your Core Values & Life Philosophy",
                description: "Let's explore what truly matters to you at the deepest level, Setayesh. Your values shape every decision you make about love, life, and marriage.",
                questions: [
                    {
                        id: "ideal_life_vision",
                        title: "When you imagine your ideal life 10 years from now, what does it look like?",
                        type: "image_selection",
                        options: [
                            { value: "adventure", icon: "fa-mountain", text: "Adventure & Travel" },
                            { value: "family", icon: "fa-home", text: "Family & Home" },
                            { value: "career", icon: "fa-briefcase", text: "Career Success" },
                            { value: "creativity", icon: "fa-palette", text: "Creative Expression" },
                            { value: "service", icon: "fa-hands-helping", text: "Service to Others" },
                            { value: "peace", icon: "fa-leaf", text: "Peace & Tranquility" }
                        ]
                    },
                    {
                        id: "life_priorities",
                        title: "Rank these life priorities from most to least important to you:",
                        type: "priority_ranking",
                        options: [
                            { value: "security", icon: "fa-shield-alt", text: "Financial Security & Stability" },
                            { value: "growth", icon: "fa-seedling", text: "Personal Growth & Learning" },
                            { value: "relationships", icon: "fa-heart", text: "Deep Relationships & Love" },
                            { value: "freedom", icon: "fa-dove", text: "Freedom & Independence" },
                            { value: "achievement", icon: "fa-trophy", text: "Achievement & Recognition" },
                            { value: "spirituality", icon: "fa-pray", text: "Spiritual Connection & Meaning" }
                        ]
                    },
                    {
                        id: "decision_making_style",
                        title: "How do you typically make important life decisions?",
                        type: "response_grid",
                        options: [
                            { value: "intuitive", emoji: "🔮", title: "Trust Your Intuition", description: "Follow your heart and gut feelings" },
                            { value: "analytical", emoji: "📊", title: "Analyze Everything", description: "Make detailed pros and cons lists" },
                            { value: "collaborative", emoji: "👥", title: "Seek Others' Input", description: "Consult trusted friends and family" },
                            { value: "spiritual", emoji: "🙏", title: "Pray or Meditate", description: "Seek divine guidance or inner wisdom" }
                        ]
                    },
                    {
                        id: "marriage_importance",
                        title: "On a scale of 1-10, how important is marriage to your overall life happiness?",
                        type: "slider",
                        min: 1,
                        max: 10,
                        labels: ["Not Important (1)", "Extremely Important (10)"]
                    }
                ]
            },
            2: {
                title: "Your Emotional World & Connection Style",
                description: "Understanding how you connect with others and handle emotions is crucial for building a strong marriage foundation.",
                questions: [
                    {
                        id: "conflict_response",
                        title: "When you're in a disagreement with someone you love, what's your natural response?",
                        type: "response_grid",
                        options: [
                            { value: "address_immediately", emoji: "⚡", title: "Address It Immediately", description: "Face the issue head-on right away" },
                            { value: "need_space", emoji: "🌊", title: "Need Space First", description: "Take time to process before discussing" },
                            { value: "seek_understanding", emoji: "🤝", title: "Seek to Understand", description: "Focus on their perspective first" },
                            { value: "prefer_harmony", emoji: "🕊️", title: "Prefer Harmony", description: "Try to smooth things over peacefully" }
                        ]
                    },
                    {
                        id: "love_expression",
                        title: "Draw how you feel when you're truly loved and appreciated:",
                        type: "drawing_canvas",
                        width: 400,
                        height: 300
                    },
                    {
                        id: "stress_handling",
                        title: "In your ideal relationship, how do you and your partner handle stress?",
                        type: "timeline",
                        options: [
                            { value: "support_together", title: "🤗 Face It Together", description: "Always support each other through challenges as a united team" },
                            { value: "space_then_support", title: "🌱 Space Then Support", description: "Give each other space to process, then come together with solutions" },
                            { value: "individual_strength", title: "💪 Individual Strength", description: "Handle personal stress independently while sharing major challenges" },
                            { value: "seek_external_help", title: "🙏 Seek External Support", description: "Turn to friends, family, or professionals for guidance together" }
                        ]
                    },
                    {
                        id: "love_languages_exploration",
                        title: "How do you naturally show love to the people who matter most?",
                        type: "love_languages_modal"
                    }
                ]
            }
            // Additional sections would be defined here...
        };
        
        return sections[sectionNumber] || null;
    }
    
    generateSectionHTML(sectionData, sectionNumber) {
        if (!sectionData) return '';
        
        let html = `
            <div class="section" id="section${sectionNumber}">
                <div class="section-header">
                    <h2 class="section-title">${sectionData.title}</h2>
                    <p class="section-description">${sectionData.description}</p>
                </div>
        `;
        
        sectionData.questions.forEach((question, index) => {
            html += this.generateQuestionHTML(question, index, sectionNumber);
        });
        
        html += `
                <div style="text-align: center; margin-top: 40px;">
                    <button class="btn btn-primary btn-large" onclick="app.nextSection(${sectionNumber})">
                        <i class="fas fa-arrow-right"></i>
                        Continue Your Journey
                        <i class="fas fa-sparkles"></i>
                    </button>
                </div>
            </div>
        `;
        
        return html;
    }
    
    generateQuestionHTML(question, questionIndex, sectionNumber) {
        let html = `
            <div class="question-card" data-question="${question.id}">
                <h3 class="question-title">${question.title}</h3>
        `;
        
        switch (question.type) {
            case 'image_selection':
                html += '<div class="image-selection">';
                question.options.forEach(option => {
                    html += `
                        <div class="image-option hover-lift" data-value="${option.value}" onclick="app.selectImageOption(this)">
                            <i class="fas ${option.icon}"></i>
                            <p>${option.text}</p>
                        </div>
                    `;
                });
                html += '</div>';
                break;
                
            case 'response_grid':
                html += '<div class="response-grid stagger-fade">';
                question.options.forEach((option, idx) => {
                    html += `
                        <div class="response-option hover-lift fade-in-up" style="animation-delay: ${idx * 0.1}s" data-value="${option.value}" onclick="app.selectResponseOption(this)">
                            <span class="emoji-large">${option.emoji}</span>
                            <h4>${option.title}</h4>
                            <p>${option.description}</p>
                        </div>
                    `;
                });
                html += '</div>';
                break;
                
            case 'slider':
                html += `
                    <div class="slider-container">
                        <input type="range" min="${question.min}" max="${question.max}" value="${Math.floor((question.min + question.max) / 2)}" 
                               class="slider" id="slider_${question.id}" oninput="app.updateSliderValue(this)">
                        <div class="slider-labels">
                            <span>${question.labels[0]}</span>
                            <span class="slider-value" id="value_${question.id}">${Math.floor((question.min + question.max) / 2)}</span>
                            <span>${question.labels[1]}</span>
                        </div>
                    </div>
                `;
                break;
                
            case 'priority_ranking':
                html += '<div class="priority-list" id="priority_' + question.id + '">';
                question.options.forEach(option => {
                    html += `
                        <div class="priority-item" draggable="true" data-value="${option.value}">
                            <i class="fas ${option.icon}"></i>
                            <span>${option.text}</span>
                        </div>
                    `;
                });
                html += '</div>';
                break;
                
            case 'drawing_canvas':
                html += `
                    <div class="drawing-container">
                        <div class="color-palette">
                            <div class="color-option active" style="background: #ff6b6b;" onclick="app.selectDrawingColor('#ff6b6b', this)"></div>
                            <div class="color-option" style="background: #4ecdc4;" onclick="app.selectDrawingColor('#4ecdc4', this)"></div>
                            <div class="color-option" style="background: #45b7d1;" onclick="app.selectDrawingColor('#45b7d1', this)"></div>
                            <div class="color-option" style="background: #96ceb4;" onclick="app.selectDrawingColor('#96ceb4', this)"></div>
                            <div class="color-option" style="background: #ffeaa7;" onclick="app.selectDrawingColor('#ffeaa7', this)"></div>
                            <div class="color-option" style="background: #a29bfe;" onclick="app.selectDrawingColor('#a29bfe', this)"></div>
                        </div>
                        <canvas class="drawing-canvas" id="canvas_${question.id}" width="${question.width}" height="${question.height}"></canvas>
                        <p class="canvas-instructions">
                            <i class="fas fa-paint-brush"></i> Express yourself freely - there are no wrong answers!
                        </p>
                    </div>
                `;
                break;
                
            case 'timeline':
                html += '<div class="timeline-container"><div class="timeline-line"></div>';
                question.options.forEach((option, idx) => {
                    html += `
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content hover-lift" data-value="${option.value}" onclick="app.selectTimelineOption(this)">
                                <h4>${option.title}</h4>
                                <p>${option.description}</p>
                            </div>
                        </div>
                    `;
                });
                html += '</div>';
                break;
                
            case 'love_languages_modal':
                html += `
                    <div class="drag-drop-area" onclick="app.openLoveLanguageModal()">
                        <i class="fas fa-heart fa-3x heartbeat" style="color: var(--primary-gold); margin-bottom: 15px;"></i>
                        <h4>Explore Your Love Languages</h4>
                        <p>Click to discover how you naturally express and receive love</p>
                    </div>
                `;
                break;
        }
        
        html += '</div>';
        return html;
    }
    
    setupSectionInteractions(sectionNumber) {
        // Setup canvas if present
        const canvas = $(`#canvas_love_expression`);
        if (canvas) {
            this.setupCanvasDrawing(canvas);
        }
        
        // Setup drag and drop for priority lists
        this.setupPriorityDragDrop();
        
        // Setup any other interactive elements
        this.currentSection = sectionNumber;
    }
    
    setupCanvas() {
        // This will be called for each canvas when section loads
    }
    
    setupCanvasDrawing(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.lineCap = 'round';
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.currentDrawingColor;
        
        let isDrawing = false;
        
        const startDrawing = (e) => {
            isDrawing = true;
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX || e.touches[0].clientX) - rect.left;
            const y = (e.clientY || e.touches[0].clientY) - rect.top;
            
            ctx.beginPath();
            ctx.moveTo(x, y);
        };
        
        const draw = (e) => {
            if (!isDrawing) return;
            
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX || e.touches[0].clientX) - rect.left;
            const y = (e.clientY || e.touches[0].clientY) - rect.top;
            
            ctx.strokeStyle = this.currentDrawingColor;
            ctx.lineTo(x, y);
            ctx.stroke();
        };
        
        const stopDrawing = () => {
            isDrawing = false;
            ctx.beginPath();
        };
        
        // Mouse events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        
        // Touch events for mobile
        canvas.addEventListener('touchstart', startDrawing);
        canvas.addEventListener('touchmove', draw);
        canvas.addEventListener('touchend', stopDrawing);
    }
    
    setupDragAndDrop() {
        // Will be called when priority lists are created
    }
    
    setupPriorityDragDrop() {
        const priorityLists = $$('.priority-list');
        priorityLists.forEach(list => {
            const items = list.querySelectorAll('.priority-item');
            items.forEach(item => {
                item.addEventListener('dragstart', this.handleDragStart.bind(this));
                item.addEventListener('dragover', this.handleDragOver.bind(this));
                item.addEventListener('drop', this.handleDrop.bind(this));
                item.addEventListener('dragend', this.handleDragEnd.bind(this));
            });
        });
    }
    
    handleDragStart(e) {
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.outerHTML);
    }
    
    handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }
    
    handleDrop(e) {
        e.preventDefault();
        const draggedElement = $('.dragging');
        const targetElement = e.currentTarget;
        
        if (draggedElement !== targetElement) {
            const parent = targetElement.parentNode;
            const draggedIndex = Array.from(parent.children).indexOf(draggedElement);
            const targetIndex = Array.from(parent.children).indexOf(targetElement);
            
            if (draggedIndex < targetIndex) {
                parent.insertBefore(draggedElement, targetElement.nextSibling);
            } else {
                parent.insertBefore(draggedElement, targetElement);
            }
        }
    }
    
    handleDragEnd(e) {
        e.target.classList.remove('dragging');
    }
    
    // User Interaction Methods
    selectImageOption(element) {
        const parent = element.parentElement;
        parent.querySelectorAll('.image-option').forEach(opt => opt.classList.remove('selected'));
        element.classList.add('selected');
        element.classList.add('bounce-in');
        
        this.saveQuestionResponse(element);
        Analytics.track('image_option_selected', { value: element.dataset.value });
    }
    
    selectResponseOption(element) {
        const parent = element.parentElement;
        parent.querySelectorAll('.response-option').forEach(opt => opt.classList.remove('selected'));
        element.classList.add('selected');
        element.classList.add('pulse');
        
        this.saveQuestionResponse(element);
        Analytics.track('response_option_selected', { value: element.dataset.value });
    }
    
    selectTimelineOption(element) {
        const parent = element.parentElement.parentElement;
        parent.querySelectorAll('.timeline-content').forEach(opt => {
            opt.classList.remove('selected');
            opt.style.background = '';
            opt.style.borderLeft = '';
        });
        
        element.classList.add('selected');
        element.style.background = 'var(--accent-light)';
        element.style.borderLeft = '4px solid var(--primary-gold)';
        
        this.saveQuestionResponse(element);
        Analytics.track('timeline_option_selected', { value: element.dataset.value });
    }
    
    selectDrawingColor(color, element) {
        this.currentDrawingColor = color;
        $$('.color-option').forEach(opt => opt.classList.remove('active'));
        element.classList.add('active');
    }
    
    updateSliderValue(slider) {
        const valueElement = $(`#value_${slider.id.replace('slider_', '')}`);
        if (valueElement) {
            valueElement.textContent = slider.value;
        }
        
        this.saveQuestionResponse(slider);
        Analytics.track('slider_updated', { 
            questionId: slider.id, 
            value: slider.value 
        });
    }
    
    saveQuestionResponse(element) {
        const questionCard = element.closest('.question-card');
        if (!questionCard) return;
        
        const questionId = questionCard.dataset.question;
        const sectionId = this.currentSection;
        
        if (!this.responses[sectionId]) {
            this.responses[sectionId] = {};
        }
        
        // Save response based on element type
        if (element.tagName === 'INPUT' && element.type === 'range') {
            this.responses[sectionId][questionId] = parseInt(element.value);
        } else if (element.dataset.value) {
            this.responses[sectionId][questionId] = element.dataset.value;
        }
        
        // Auto-save
        this.saveData();
    }
    
    nextSection(currentSectionNum) {
        // Collect all responses from current section
        this.collectCurrentSectionData(currentSectionNum);
        
        // Mark section as completed
        this.markSectionCompleted(currentSectionNum);
        
        // Show celebration
        this.celebrateProgress();
        
        // Generate and show insight
        this.showSectionInsight(currentSectionNum);
        
        // Move to next section or show results
        if (currentSectionNum < this.totalSections) {
            setTimeout(() => {
                this.loadSection(currentSectionNum + 1);
            }, 2000);
        } else {
            setTimeout(() => {
                this.showFinalResults();
            }, 2000);
        }
        
        Analytics.track('section_completed', {
            section: currentSectionNum,
            timestamp: Date.now()
        });
    }
    
    collectCurrentSectionData(sectionNum) {
        const section = $(`#section${sectionNum}`);
        if (!section) return;
        
        if (!this.responses[sectionNum]) {
            this.responses[sectionNum] = {};
        }
        
        // Collect all responses from current section
        const selectedOptions = section.querySelectorAll('.selected');
        selectedOptions.forEach(option => {
            const questionCard = option.closest('.question-card');
            if (questionCard) {
                const questionId = questionCard.dataset.question;
                this.responses[sectionNum][questionId] = option.dataset.value || option.textContent;
            }
        });
        
        // Collect slider values
        const sliders = section.querySelectorAll('.slider');
        sliders.forEach(slider => {
            const questionId = slider.id.replace('slider_', '');
            this.responses[sectionNum][questionId] = parseInt(slider.value);
        });
        
        // Collect canvas drawings
        const canvases = section.querySelectorAll('canvas');
        canvases.forEach(canvas => {
            const questionId = canvas.id.replace('canvas_', '');
            this.responses[sectionNum][questionId + '_drawing'] = canvas.toDataURL();
        });
        
        // Collect priority rankings
        const priorityLists = section.querySelectorAll('.priority-list');
        priorityLists.forEach(list => {
            const questionId = list.id.replace('priority_', '');
            const order = Array.from(list.children).map(item => item.dataset.value);
            this.responses[sectionNum][questionId] = order;
        });
        
        this.saveData();
    }
    
    markSectionCompleted(sectionNum) {
        const indicator = $(`.indicator[data-section="${sectionNum}"]`);
        if (indicator) {
            indicator.classList.remove('active', 'pending');
            indicator.classList.add('completed');
            indicator.innerHTML = '<i class="fas fa-check"></i>';
        }
        
        this.completedSections++;
        this.updateProgress();
    }
    
    updateProgress() {
        const progress = (this.completedSections / this.totalSections) * 100;
        const progressBar = $('#progressBar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        
        const completionRate = $('#completionRate');
        if (completionRate) {
            completionRate.textContent = Math.round(progress);
        }
        
        const insightsEarned = $('#insightsEarned');
        if (insightsEarned) {
            insightsEarned.textContent = this.insights.length;
        }
        
        if (this.startTime) {
            const timeSpent = Math.round((Date.now() - this.startTime) / 60000);
            const timeElement = $('#timeSpent');
            if (timeElement) {
                timeElement.textContent = `${timeSpent} min`;
            }
        }
        
        // Update section indicators
        $$('.indicator').forEach((indicator, index) => {
            const sectionNum = index + 1;
            indicator.classList.remove('active');
            
            if (sectionNum === this.currentSection) {
                indicator.classList.add('active');
            } else if (sectionNum <= this.completedSections) {
                indicator.classList.add('completed');
                indicator.classList.remove('pending');
            }
        });
    }
    
    celebrateProgress() {
        this.createConfetti();
        Analytics.track('celebration_shown', {
            section: this.currentSection,
            timestamp: Date.now()
        });
    }
    
    createConfetti() {
        const overlay = $('#celebrationOverlay');
        if (!overlay) return;
        
        const colors = ['#d4af37', '#667eea', '#764ba2', '#27ae60', '#e74c3c', '#f39c12'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = create('div', 'confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor
