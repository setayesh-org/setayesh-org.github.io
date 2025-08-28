// Application Data
const DISCOVERY_DATA = {
    stages: [
        {
            id: "inner-world",
            title: "Your Inner World", 
            description: "Understanding how you connect and feel most loved",
            icon: "💝",
            questions: [
                {
                    id: "love_language",
                    text: "When someone cares about you, what makes you feel most appreciated?",
                    type: "single_select",
                    context: "This helps us understand your heart's language of love.",
                    options: [
                        "Thoughtful words and compliments",
                        "Gentle touches and physical closeness", 
                        "Special time together without distractions",
                        "Meaningful gifts that show they know you",
                        "Helpful actions that make your life easier"
                    ]
                },
                {
                    id: "connection_style", 
                    text: "In close relationships, you tend to:",
                    type: "single_select",
                    context: "Your natural way of connecting reveals beautiful things about you.",
                    options: [
                        "Feel secure and trust that people care about you",
                        "Sometimes worry if people really want to be close to you",
                        "Value independence and personal space highly", 
                        "Experience both closeness and distance needs"
                    ]
                },
                {
                    id: "emotional_needs",
                    text: "What does your heart need most in a relationship?",
                    type: "multiple_select",
                    context: "Choose all that resonate with your soul.",
                    options: [
                        "Deep emotional intimacy and vulnerability",
                        "Consistent reliability and stability", 
                        "Excitement and new experiences together",
                        "Mutual respect and equality",
                        "Spiritual or philosophical connection",
                        "Playfulness and shared laughter",
                        "Intellectual stimulation and growth",
                        "Physical passion and attraction"
                    ]
                },
                {
                    id: "comfort_vulnerability",
                    text: "How comfortable are you sharing your deepest thoughts and fears?",
                    type: "scale",
                    context: "Your openness is a gift - there's no right or wrong answer.",
                    min: 1,
                    max: 5, 
                    labels: ["Very private", "Completely open"]
                }
            ]
        },
        {
            id: "dreams-vision",
            title: "Your Dreams & Vision",
            description: "Exploring your hopes and future aspirations", 
            icon: "🌟",
            questions: [
                {
                    id: "life_timeline",
                    text: "If you could design your perfect next 5 years, what would be most important?",
                    type: "rank_order",
                    context: "Drag to reorder these based on what truly matters to you.",
                    options: [
                        "Building a strong romantic partnership",
                        "Advancing in your career or education", 
                        "Starting or growing a family",
                        "Traveling and having adventures",
                        "Buying a home or improving living situation",
                        "Developing personal skills and hobbies",
                        "Strengthening friendships and community",
                        "Achieving financial security and stability"
                    ]
                },
                {
                    id: "adventure_stability",
                    text: "Your ideal life balance includes:",
                    type: "slider",
                    context: "Find your perfect balance between these beautiful opposites.",
                    leftLabel: "Peaceful stability and routine",
                    rightLabel: "Exciting adventures and change",
                    centerText: "Perfect harmony of both"
                },
                {
                    id: "living_dreams",
                    text: "When you imagine your dream living situation, you see:",
                    type: "single_select",
                    context: "Close your eyes and picture your perfect home environment.",
                    options: [
                        "A cozy home in a quiet neighborhood", 
                        "An exciting apartment in the city center",
                        "A peaceful house with nature nearby",
                        "Traveling and living in different places",
                        "Close to family and childhood friends",
                        "Somewhere that supports career growth",
                        "A place that reflects your values and lifestyle"
                    ]
                },
                {
                    id: "success_definition", 
                    text: "Success in life means:",
                    type: "multiple_select",
                    context: "Your definition of success is uniquely yours.",
                    options: [
                        "Having deep, meaningful relationships",
                        "Achieving professional recognition and impact",
                        "Feeling financially secure and comfortable", 
                        "Maintaining physical and mental health",
                        "Living according to your values and beliefs",
                        "Creating a happy family environment",
                        "Contributing to community or causes you care about",
                        "Experiencing personal growth and learning"
                    ]
                }
            ]
        },
        {
            id: "hearts-compass", 
            title: "Your Heart's Compass",
            description: "Understanding your core values and non-negotiables",
            icon: "🧭",
            questions: [
                {
                    id: "values_scenarios",
                    text: "In a difficult situation, what guides your decisions most?",
                    type: "single_select",
                    context: "Your inner compass reveals your beautiful moral center.",
                    options: [
                        "What feels right in your heart",
                        "What makes logical, practical sense",
                        "What aligns with your beliefs or values",
                        "What protects the people you love",
                        "What leads to the best long-term outcome",
                        "What maintains harmony and peace"
                    ]
                },
                {
                    id: "non_negotiables",
                    text: "What could you never compromise on in a relationship?",
                    type: "multiple_select",
                    context: "These are your sacred boundaries - honor them.",
                    options: [
                        "Complete honesty and transparency",
                        "Faithful commitment to each other",
                        "Respect for your independence and choices", 
                        "Shared spiritual or philosophical beliefs",
                        "Similar views on having children",
                        "Financial responsibility and openness",
                        "Kind treatment of family and friends",
                        "Supporting each other's dreams and goals"
                    ]
                },
                {
                    id: "spiritual_connection",
                    text: "How important is spiritual or philosophical alignment?",
                    type: "scale",
                    context: "Your spiritual journey is sacred and personal.",
                    min: 1,
                    max: 5,
                    labels: ["Not important", "Essential"]
                },
                {
                    id: "moral_compass",
                    text: "When facing ethical dilemmas, you typically:",
                    type: "single_select",
                    context: "Your approach to difficult decisions shows your wisdom.",
                    options: [
                        "Follow established rules and traditions",
                        "Consider what creates the greatest good",
                        "Trust your intuition and feelings", 
                        "Seek advice from people you respect",
                        "Analyze the situation logically",
                        "Consider how it affects relationships"
                    ]
                }
            ]
        },
        {
            id: "communication-style",
            title: "Your Communication Style",
            description: "How you express yourself and handle differences",
            icon: "💬", 
            questions: [
                {
                    id: "conflict_approach",
                    text: "When disagreements arise, you prefer to:",
                    type: "single_select",
                    context: "Your conflict style reveals your caring nature.",
                    options: [
                        "Address issues immediately and directly",
                        "Take time to think before discussing",
                        "Find compromises that work for everyone",
                        "Focus on understanding different perspectives",
                        "Seek peaceful solutions and avoid confrontation",
                        "Stand firm on what matters most to you"
                    ]
                },
                {
                    id: "appreciation_expression",
                    text: "You naturally show care and appreciation by:",
                    type: "multiple_select",
                    context: "Your loving gestures are uniquely beautiful.",
                    options: [
                        "Saying 'I love you' and giving compliments",
                        "Physical affection like hugs and touches",
                        "Doing helpful things without being asked", 
                        "Planning special time together",
                        "Giving thoughtful gifts or surprises",
                        "Really listening when they need to talk",
                        "Supporting their goals and dreams",
                        "Being consistently reliable and present"
                    ]
                },
                {
                    id: "decision_making", 
                    text: "For important life decisions, you prefer to:",
                    type: "single_select",
                    context: "Your decision-making style shows how you value partnership.",
                    options: [
                        "Make decisions together equally",
                        "Each lead in your areas of expertise",
                        "Talk through everything extensively first", 
                        "Trust each other's independent choices",
                        "Seek input from family and friends",
                        "Take time to research and analyze options"
                    ]
                },
                {
                    id: "transparency_comfort",
                    text: "How comfortable are you with complete openness about everything?",
                    type: "scale",
                    context: "Your comfort with transparency is perfectly valid.",
                    min: 1,
                    max: 5,
                    labels: ["Need privacy", "Complete openness"]
                }
            ]
        },
        {
            id: "family-future",
            title: "Your Family & Future",
            description: "Dreams about family, home, and life together",
            icon: "🏡",
            questions: [
                {
                    id: "children_vision",
                    text: "When you think about children in your future:",
                    type: "single_select",
                    context: "Your feelings about family are valid and beautiful.",
                    options: [
                        "You definitely want children soon",
                        "You'd like children eventually", 
                        "You're open to children but not sure when",
                        "You're uncertain about having children",
                        "You prefer not to have children",
                        "You'd consider adoption or other paths to parenthood"
                    ]
                },
                {
                    id: "parenting_style",
                    text: "If you have children, you'd want to raise them:",
                    type: "multiple_select",
                    context: "Your parenting values reflect your caring heart.",
                    options: [
                        "With lots of freedom to explore and learn",
                        "With clear structure and consistent rules",
                        "Close to extended family and grandparents", 
                        "With strong emphasis on education and achievement",
                        "With focus on kindness and emotional intelligence",
                        "With exposure to different cultures and experiences",
                        "With connection to spiritual or religious traditions",
                        "With emphasis on independence and self-reliance"
                    ]
                },
                {
                    id: "family_involvement",
                    text: "How involved should families be in your relationship decisions?",
                    type: "scale",
                    context: "Your family boundaries are important and respected.",
                    min: 1, 
                    max: 5,
                    labels: ["Very independent", "Family-centered"]
                },
                {
                    id: "home_vision",
                    text: "Your dream home would be:",
                    type: "single_select",
                    context: "Imagine the space where love will grow.",
                    options: [
                        "A cozy space perfect for intimate gatherings",
                        "A welcoming home where friends and family visit often",
                        "A peaceful retreat from the busy world",
                        "A stylish space that reflects your personality", 
                        "A practical home that's easy to maintain",
                        "A place with room for hobbies and interests",
                        "Somewhere that could grow with your family"
                    ]
                }
            ]
        },
        {
            id: "practical-life", 
            title: "Your Practical Life",
            description: "Daily rhythms, money, and lifestyle preferences",
            icon: "⚖️",
            questions: [
                {
                    id: "money_philosophy",
                    text: "Your approach to money and financial security:",
                    type: "single_select",
                    context: "Your relationship with money reflects your values.",
                    options: [
                        "Save carefully and spend thoughtfully",
                        "Invest in experiences over material things",
                        "Plan for the future but enjoy the present",
                        "Share financial decisions and resources openly", 
                        "Maintain some financial independence",
                        "Focus on earning enough to live comfortably",
                        "Money is a tool - values matter more"
                    ]
                },
                {
                    id: "work_life_balance",
                    text: "Your ideal work-life balance includes:",
                    type: "multiple_select",
                    context: "Your professional dreams matter deeply.",
                    options: [
                        "Meaningful work that feels like purpose",
                        "Clear boundaries between work and personal time",
                        "Flexibility to prioritize relationships and family",
                        "Opportunities for growth and advancement", 
                        "Financial stability and security",
                        "Colleagues and work environment you enjoy",
                        "Time for hobbies and personal interests",
                        "Ability to travel or work from different places"
                    ]
                },
                {
                    id: "daily_lifestyle",
                    text: "Your perfect daily routine would include:",
                    type: "rank_order",
                    context: "Arrange these to reflect your ideal day.",
                    options: [
                        "Quality time with your partner",
                        "Physical activity or exercise",
                        "Time for personal reflection or spirituality",
                        "Pursuing hobbies or creative interests", 
                        "Meaningful work or productivity",
                        "Connecting with friends or family",
                        "Learning something new",
                        "Relaxation and downtime"
                    ]
                },
                {
                    id: "health_wellness",
                    text: "How important are health and wellness in your life?",
                    type: "scale",
                    context: "Your commitment to wellness shows self-love.",
                    min: 1,
                    max: 5, 
                    labels: ["Occasional focus", "Central to lifestyle"]
                }
            ]
        },
        {
            id: "support-system",
            title: "Your Support System", 
            description: "How you connect with others and manage life's challenges",
            icon: "🤝",
            questions: [
                {
                    id: "social_energy",
                    text: "You feel most energized by:",
                    type: "single_select",
                    context: "Your social style is a gift - embrace it.",
                    options: [
                        "Large groups and social gatherings",
                        "Small groups of close friends",
                        "One-on-one deep conversations",
                        "Mix of social time and solitude",
                        "Quiet time alone to recharge", 
                        "Active social activities and adventures"
                    ]
                },
                {
                    id: "independence_balance",
                    text: "In relationships, you need:",
                    type: "slider",
                    context: "Find your perfect balance of togetherness and independence.",
                    leftLabel: "Lots of together time",
                    rightLabel: "Significant personal space",
                    centerText: "Healthy balance of both"
                },
                {
                    id: "stress_management",
                    text: "When feeling stressed or overwhelmed, you:",
                    type: "multiple_select",
                    context: "Your coping strategies show your strength.",
                    options: [
                        "Talk through feelings with someone you trust",
                        "Take time alone to process and reflect",
                        "Stay busy with activities and distractions",
                        "Focus on solving practical problems", 
                        "Use physical activity or exercise",
                        "Seek comfort through food, entertainment, or hobbies",
                        "Turn to spiritual practices or meditation",
                        "Look for professional help or guidance"
                    ]
                },
                {
                    id: "friendship_style",
                    text: "Your friendships are characterized by:",
                    type: "multiple_select",
                    context: "Your friendships reflect your beautiful heart.",
                    options: [
                        "Long-lasting, deep emotional connections",
                        "Fun activities and shared interests",
                        "Mutual support through life's challenges", 
                        "Intellectual conversations and growth",
                        "Spontaneous adventures and experiences",
                        "Regular contact and consistent presence",
                        "Respect for boundaries and independence",
                        "Shared values and life perspectives"
                    ]
                }
            ]
        },
        {
            id: "relationship-readiness",
            title: "Your Relationship Readiness",
            description: "Understanding your capacity for deep partnership",
            icon: "💕", 
            questions: [
                {
                    id: "past_learning",
                    text: "From past relationships, you've learned:",
                    type: "multiple_select",
                    context: "Your growth shows incredible wisdom and strength.",
                    options: [
                        "The importance of honest communication",
                        "How to maintain your identity within a partnership",
                        "What you truly need in a relationship",
                        "How to navigate conflict constructively", 
                        "The value of shared goals and values",
                        "How to give and receive love effectively",
                        "The importance of timing and readiness",
                        "How to recognize genuine compatibility"
                    ]
                },
                {
                    id: "emotional_availability",
                    text: "Right now, you feel:",
                    type: "single_select",
                    context: "Your current state is exactly where you need to be.",
                    options: [
                        "Completely ready for a deep committed relationship",
                        "Mostly ready with some areas still growing", 
                        "Open to love but taking things slowly",
                        "Focused on personal growth first",
                        "Healing from past experiences",
                        "Exploring what you want in a partner"
                    ]
                },
                {
                    id: "growth_mindset",
                    text: "You believe relationships work best when both people:",
                    type: "multiple_select",
                    context: "Your relationship philosophy is beautiful and wise.",
                    options: [
                        "Continuously work on personal growth",
                        "Communicate openly about needs and concerns",
                        "Support each other's individual goals and dreams", 
                        "Maintain their own friendships and interests",
                        "Share domestic and financial responsibilities",
                        "Show appreciation and affection regularly",
                        "Navigate challenges as a team",
                        "Keep growing in love and understanding"
                    ]
                },
                {
                    id: "commitment_readiness",
                    text: "When you think about long-term commitment, you feel:",
                    type: "scale",
                    context: "Your feelings about commitment are perfectly valid.",
                    min: 1,
                    max: 5,
                    labels: ["Cautious", "Completely ready"]
                }
            ]
        }
    ],

    personalityTypes: [
        {
            id: "dreamer",
            name: "The Dreamer",
            title: "Visionary Heart with Boundless Hope",
            icon: "🌙",
            description: "You see the world through eyes of possibility and wonder. Your heart is open to love's greatest adventures, and you believe in the power of dreams shared between two souls.",
            traits: ["Future-focused", "Idealistic", "Emotionally intuitive", "Growth-oriented"],
            strengths: ["Deep capacity for love", "Inspiring vision for relationships", "Natural optimism", "Emotional intelligence"],
            callToAction: "Your beautiful heart deserves someone who shares your dreams and believes in the magic you see in the world. Trust your vision of love - it will guide you to someone who sees the stars in your eyes and wants to reach them with you."
        },
        {
            id: "builder", 
            name: "The Builder",
            title: "Strong Foundation Creator",
            icon: "🏗️",
            description: "You understand that the most beautiful love stories are built on solid ground. Your practical wisdom and commitment to stability create lasting partnerships that weather any storm.",
            traits: ["Stability-focused", "Practical", "Reliable", "Security-minded"],
            strengths: ["Creates lasting security", "Thoughtful planning", "Consistent presence", "Practical problem-solving"],
            callToAction: "Your commitment to building something lasting is a rare and precious gift. You have the wisdom to create a love that stands the test of time - seek someone who appreciates the beautiful foundation you offer and wants to build a lifetime together."
        },
        {
            id: "adventurer",
            name: "The Adventurer", 
            title: "Free Spirit with Passionate Heart",
            icon: "🦋",
            description: "Your spirit craves experience and growth, and you believe love should be an adventure of discovery. You bring excitement and fresh perspective to everything you touch.",
            traits: ["Experience-focused", "Growth-oriented", "Independent", "Spontaneous"],
            strengths: ["Brings excitement to relationships", "Adaptable and flexible", "Encourages growth", "Enthusiastic approach to life"],
            callToAction: "Your adventurous spirit is magnetic and inspiring. Don't settle for ordinary when your heart craves extraordinary - find someone who will explore life's wonders with you and whose soul dances to the same rhythm as yours."
        },
        {
            id: "nurturer",
            name: "The Nurturer",
            title: "Heart-Centered Caregiver", 
            icon: "🌺",
            description: "Your greatest joy comes from caring for others and creating warm, loving environments. You have a natural gift for making people feel valued, understood, and deeply cherished.",
            traits: ["Connection-focused", "Empathetic", "Family-oriented", "Caring"],
            strengths: ["Deep emotional intelligence", "Creates warm, loving environments", "Natural caregiver", "Strong family values"],
            callToAction: "Your nurturing heart is a precious gift to this world. You deserve someone who not only appreciates your caring nature but reciprocates it fully - someone who will pour the same love into you that you so generously give to others."
        },
        {
            id: "independent",
            name: "The Independent",
            title: "Self-Possessed and Confident",
            icon: "👑",
            description: "You know who you are and what you want. Your strength and independence inspire others, and you believe the best relationships enhance rather than complete you.",
            traits: ["Autonomy-focused", "Self-aware", "Career-oriented", "Confident"],
            strengths: ["Strong sense of self", "Clear boundaries", "Self-sufficient", "Goal-oriented"],
            callToAction: "Your independence is your superpower, not something to compromise. You deserve a partner who celebrates your strength and autonomy - someone who wants to grow alongside you as an equal, not someone who needs to be completed by you."
        },
        {
            id: "harmonizer",
            name: "The Harmonizer",
            title: "Peaceful Balance Creator",
            icon: "🕊️",
            description: "You have a gift for finding balance and creating harmony in all aspects of life. Your diplomatic nature and desire for peace make you a wonderful partner and friend.",
            traits: ["Balance-focused", "Diplomatic", "Compromise-oriented", "Peace-seeking"],
            strengths: ["Excellent at conflict resolution", "Creates peaceful environments", "Fair and balanced", "Emotionally stable"],
            callToAction: "Your gift for creating harmony is rare and beautiful in this world. You deserve a relationship where your peaceful nature is valued and protected - someone who appreciates the calm you bring and helps you maintain the balance you cherish."
        }
    ],

    achievementBadges: [
        {id: "self_aware", name: "Self-Aware", description: "Deep understanding of your inner world", icon: "🪞"},
        {id: "visionary", name: "Visionary", description: "Clear vision for your future", icon: "🔮"},
        {id: "authentic", name: "Authentic", description: "True to your values and beliefs", icon: "✨"},
        {id: "communicator", name: "Communicator", description: "Skilled at expressing yourself", icon: "💬"},
        {id: "family_focused", name: "Family-Minded", description: "Thoughtful about family and future", icon: "👨‍👩‍👧‍👦"},
        {id: "balanced", name: "Balanced", description: "Healthy approach to life priorities", icon: "⚖️"},
        {id: "connected", name: "Connected", description: "Strong relationships and support", icon: "🤝"},
        {id: "ready", name: "Relationship Ready", description: "Prepared for deep commitment", icon: "💕"},
        {id: "complete", name: "Journey Complete", description: "Finished your discovery journey", icon: "🌟"}
    ]
};

// Application state
let currentState = {
    currentStage: null,
    currentQuestionIndex: 0,
    responses: {},
    earnedBadges: [],
    stagesCompleted: [],
    insightGems: 0,
    personalityType: null
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application initializing...');
    loadSavedState();
    showScreen('welcome-screen');
    console.log('Application initialized successfully');
});

// Screen management
function showScreen(screenId) {
    console.log('Switching to screen:', screenId);
    
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        console.log('Screen switched successfully to:', screenId);
    } else {
        console.error('Screen not found:', screenId);
    }
}

// Begin journey
function beginJourney() {
    console.log('Beginning journey...');
    try {
        awardBadge('self_aware');
        showJourneyMap();
    } catch (error) {
        console.error('Error beginning journey:', error);
    }
}

// Show journey map
function showJourneyMap() {
    console.log('Showing journey map...');
    try {
        renderJourneyMap();
        updateJourneyProgress();
        updateRecentBadges();
        showScreen('journey-screen');
    } catch (error) {
        console.error('Error showing journey map:', error);
    }
}

// Render journey map
function renderJourneyMap() {
    const mapContainer = document.getElementById('journey-map');
    if (!mapContainer) {
        console.error('Journey map container not found');
        return;
    }
    
    mapContainer.innerHTML = '';
    
    DISCOVERY_DATA.stages.forEach((stage, index) => {
        const isCompleted = currentState.stagesCompleted.includes(stage.id);
        const isLocked = index > 0 && !currentState.stagesCompleted.includes(DISCOVERY_DATA.stages[index - 1].id);
        const progress = getStageProgress(stage.id);
        
        const stageElement = document.createElement('div');
        stageElement.className = `journey-stage ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;
        
        if (!isLocked) {
            stageElement.addEventListener('click', () => {
                console.log('Starting stage:', stage.id);
                startStage(stage.id);
            });
            stageElement.style.cursor = 'pointer';
        }
        
        const statusIcon = isCompleted ? '✨' : isLocked ? '🔒' : progress > 0 ? '🌟' : '💫';
        
        stageElement.innerHTML = `
            <div class="stage-status">${statusIcon}</div>
            <div class="stage-header">
                <span class="stage-emoji">${stage.icon}</span>
                <div class="stage-info">
                    <h3>${stage.title}</h3>
                    <p class="stage-description">${stage.description}</p>
                </div>
            </div>
            <div class="stage-progress">
                <div class="progress-dots">
                    ${stage.questions.map((_, i) => 
                        `<div class="progress-dot ${i < progress * stage.questions.length / 100 ? 'completed' : ''}"></div>`
                    ).join('')}
                </div>
                <p class="stage-progress-text">${Math.round(progress)}% explored</p>
            </div>
        `;
        
        mapContainer.appendChild(stageElement);
    });
    
    console.log('Journey map rendered successfully');
}

// Get stage progress
function getStageProgress(stageId) {
    const stage = DISCOVERY_DATA.stages.find(s => s.id === stageId);
    if (!stage) return 0;
    
    const answeredQuestions = stage.questions.filter(q => 
        currentState.responses[q.id] !== undefined
    ).length;
    
    return (answeredQuestions / stage.questions.length) * 100;
}

// Start stage
function startStage(stageId) {
    console.log('Starting stage:', stageId);
    currentState.currentStage = stageId;
    currentState.currentQuestionIndex = 0;
    showStageIntro();
}

// Show stage introduction
function showStageIntro() {
    const stage = DISCOVERY_DATA.stages.find(s => s.id === currentState.currentStage);
    if (!stage) {
        console.error('Stage not found:', currentState.currentStage);
        return;
    }
    
    const stageIcon = document.getElementById('stage-icon');
    const stageTitle = document.getElementById('stage-title');
    const stageDescription = document.getElementById('stage-description');
    const stageInvitationText = document.getElementById('stage-invitation-text');
    const questionCount = document.getElementById('question-count');
    
    if (stageIcon) stageIcon.textContent = stage.icon;
    if (stageTitle) stageTitle.textContent = stage.title;
    if (stageDescription) stageDescription.textContent = stage.description;
    if (stageInvitationText) stageInvitationText.textContent = getStageInvitation(stage.id);
    if (questionCount) questionCount.textContent = stage.questions.length;
    
    // Render progress dots
    const dotsContainer = document.getElementById('stage-progress-dots');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        stage.questions.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            dotsContainer.appendChild(dot);
        });
    }
    
    showScreen('stage-intro-screen');
}

// Get stage invitation text
function getStageInvitation(stageId) {
    const invitations = {
        'inner-world': "Let's explore the beautiful ways you connect with others and what makes your heart feel most loved.",
        'dreams-vision': "Your dreams for the future are precious and valid. Let's discover what truly matters to your heart.",
        'hearts-compass': "Your values are your guiding light. Let's understand what principles guide your beautiful soul.",
        'communication-style': "The way you express love is uniquely yours. Let's explore your natural communication gifts.",
        'family-future': "Your vision of family and home reflects your deepest values. Let's explore these sacred dreams.",
        'practical-life': "The way you approach daily life reveals your wisdom. Let's understand your practical side.",
        'support-system': "Your relationships and support network are treasures. Let's celebrate how you connect with others.",
        'relationship-readiness': "Your growth and readiness for love is a beautiful journey. Let's honor where you are right now."
    };
    
    return invitations[stageId] || "Let's explore this beautiful part of who you are together.";
}

// Start stage questions
function startStageQuestions() {
    console.log('Starting stage questions');
    showQuestionScreen();
}

// Show question screen
function showQuestionScreen() {
    const stage = DISCOVERY_DATA.stages.find(s => s.id === currentState.currentStage);
    if (!stage) {
        console.error('Stage not found:', currentState.currentStage);
        return;
    }
    
    const question = stage.questions[currentState.currentQuestionIndex];
    if (!question) {
        console.error('Question not found:', currentState.currentQuestionIndex);
        return;
    }
    
    // Update progress
    const progress = ((currentState.currentQuestionIndex + 1) / stage.questions.length) * 100;
    const progressFill = document.getElementById('question-progress-fill');
    const questionPosition = document.getElementById('question-position');
    
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (questionPosition) {
        questionPosition.textContent = `Question ${currentState.currentQuestionIndex + 1} of ${stage.questions.length}`;
    }
    
    // Update question content
    const questionText = document.getElementById('question-text');
    const questionContextText = document.getElementById('question-context-text');
    
    if (questionText) questionText.textContent = question.text;
    if (questionContextText) {
        questionContextText.textContent = question.context || 
            "Take your time and answer from your heart. There are no right or wrong responses - only your beautiful truth.";
    }
    
    // Render question input
    renderQuestionInput(question);
    
    // Update navigation
    const prevBtn = document.getElementById('prev-question');
    if (prevBtn) {
        prevBtn.style.display = currentState.currentQuestionIndex > 0 ? 'block' : 'none';
    }
    
    showScreen('question-screen');
}

// Render question input
function renderQuestionInput(question) {
    const container = document.getElementById('question-input');
    if (!container) {
        console.error('Question input container not found');
        return;
    }
    
    container.innerHTML = '';
    
    try {
        switch (question.type) {
            case 'single_select':
                renderSingleSelect(question, container);
                break;
            case 'multiple_select':
                renderMultipleSelect(question, container);
                break;
            case 'scale':
                renderScale(question, container);
                break;
            case 'rank_order':
                renderRankOrder(question, container);
                break;
            case 'slider':
                renderSlider(question, container);
                break;
            default:
                console.error('Unknown question type:', question.type);
        }
        
        // Load existing response
        const existingResponse = currentState.responses[question.id];
        if (existingResponse !== undefined) {
            loadExistingResponse(question, existingResponse);
            updateContinueButton(true);
        } else {
            updateContinueButton(false);
        }
    } catch (error) {
        console.error('Error rendering question input:', error);
    }
}

// Render single select
function renderSingleSelect(question, container) {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-grid';
    
    question.options.forEach((option, index) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.dataset.value = option;
        
        optionCard.innerHTML = `<div class="option-text">${option}</div>`;
        
        optionCard.addEventListener('click', () => {
            // Remove selection from other options
            optionsContainer.querySelectorAll('.option-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Select this option
            optionCard.classList.add('selected');
            currentState.responses[question.id] = option;
            updateContinueButton(true);
            saveState();
        });
        
        optionsContainer.appendChild(optionCard);
    });
    
    container.appendChild(optionsContainer);
}

// Render multiple select
function renderMultipleSelect(question, container) {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-grid';
    
    question.options.forEach((option, index) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.dataset.value = option;
        
        optionCard.innerHTML = `<div class="option-text">${option}</div>`;
        
        optionCard.addEventListener('click', () => {
            optionCard.classList.toggle('selected');
            updateMultipleSelectResponse(question.id, optionsContainer);
        });
        
        optionsContainer.appendChild(optionCard);
    });
    
    container.appendChild(optionsContainer);
}

// Update multiple select response
function updateMultipleSelectResponse(questionId, container) {
    const selectedCards = container.querySelectorAll('.option-card.selected');
    const values = Array.from(selectedCards).map(card => card.dataset.value);
    
    if (values.length > 0) {
        currentState.responses[questionId] = values;
        updateContinueButton(true);
    } else {
        delete currentState.responses[questionId];
        updateContinueButton(false);
    }
    saveState();
}

// Render scale
function renderScale(question, container) {
    const scaleContainer = document.createElement('div');
    scaleContainer.className = 'scale-question';
    
    scaleContainer.innerHTML = `
        <div class="scale-value-display">
            <span class="scale-value">${question.min}</span>
        </div>
        <div class="scale-track">
            <input type="range" class="scale-slider" min="${question.min}" max="${question.max}" value="${question.min}">
        </div>
        <div class="scale-labels">
            <span>${question.labels[0]}</span>
            <span>${question.labels[1]}</span>
        </div>
    `;
    
    const slider = scaleContainer.querySelector('.scale-slider');
    const valueDisplay = scaleContainer.querySelector('.scale-value');
    
    slider.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        valueDisplay.textContent = value;
        currentState.responses[question.id] = value;
        updateContinueButton(true);
        saveState();
    });
    
    container.appendChild(scaleContainer);
}

// Render rank order
function renderRankOrder(question, container) {
    const rankContainer = document.createElement('div');
    rankContainer.className = 'rank-question';
    
    const instruction = document.createElement('div');
    instruction.className = 'rank-instruction';
    instruction.textContent = 'Drag and drop to rank these from most important (1) to least important (8)';
    
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'rank-items';
    
    question.options.forEach((option, index) => {
        const rankItem = document.createElement('div');
        rankItem.className = 'rank-item';
        rankItem.draggable = true;
        rankItem.dataset.value = option;
        
        rankItem.innerHTML = `
            <div class="rank-number">${index + 1}</div>
            <div class="option-text">${option}</div>
        `;
        
        // Add drag and drop event listeners
        rankItem.addEventListener('dragstart', handleDragStart);
        rankItem.addEventListener('dragover', handleDragOver);
        rankItem.addEventListener('drop', handleDrop);
        rankItem.addEventListener('dragend', handleDragEnd);
        
        itemsContainer.appendChild(rankItem);
    });
    
    rankContainer.appendChild(instruction);
    rankContainer.appendChild(itemsContainer);
    container.appendChild(rankContainer);
    
    // Set initial response
    updateRankOrderResponse(question.id, itemsContainer);
}

// Drag and drop handlers
let draggedItem = null;

function handleDragStart(e) {
    draggedItem = this;
    this.classList.add('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    if (this !== draggedItem) {
        const container = this.parentNode;
        const allItems = Array.from(container.children);
        const draggedIndex = allItems.indexOf(draggedItem);
        const targetIndex = allItems.indexOf(this);
        
        if (draggedIndex < targetIndex) {
            container.insertBefore(draggedItem, this.nextSibling);
        } else {
            container.insertBefore(draggedItem, this);
        }
        
        updateRankNumbers(container);
        
        // Find the question ID
        const question = getCurrentQuestion();
        if (question) {
            updateRankOrderResponse(question.id, container);
        }
    }
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedItem = null;
}

function updateRankNumbers(container) {
    const items = container.querySelectorAll('.rank-item');
    items.forEach((item, index) => {
        item.querySelector('.rank-number').textContent = index + 1;
    });
}

function updateRankOrderResponse(questionId, container) {
    const items = container.querySelectorAll('.rank-item');
    const rankedValues = Array.from(items).map(item => item.dataset.value);
    currentState.responses[questionId] = rankedValues;
    updateContinueButton(true);
    saveState();
}

// Render slider
function renderSlider(question, container) {
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-question';
    
    sliderContainer.innerHTML = `
        <div class="slider-labels">
            <span class="slider-label">${question.leftLabel}</span>
            <span class="slider-center">${question.centerText}</span>
            <span class="slider-label">${question.rightLabel}</span>
        </div>
        <div class="scale-track">
            <input type="range" class="scale-slider" min="1" max="100" value="50">
        </div>
    `;
    
    const slider = sliderContainer.querySelector('.scale-slider');
    
    slider.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        currentState.responses[question.id] = value;
        updateContinueButton(true);
        saveState();
    });
    
    container.appendChild(sliderContainer);
}

// Load existing response
function loadExistingResponse(question, response) {
    const container = document.getElementById('question-input');
    if (!container) return;
    
    try {
        switch (question.type) {
            case 'single_select':
                const singleCard = container.querySelector(`[data-value="${response}"]`);
                if (singleCard) singleCard.classList.add('selected');
                break;
            case 'multiple_select':
                if (Array.isArray(response)) {
                    response.forEach(value => {
                        const multiCard = container.querySelector(`[data-value="${value}"]`);
                        if (multiCard) multiCard.classList.add('selected');
                    });
                }
                break;
            case 'scale':
                const scaleSlider = container.querySelector('.scale-slider');
                const scaleValue = container.querySelector('.scale-value');
                if (scaleSlider && scaleValue) {
                    scaleSlider.value = response;
                    scaleValue.textContent = response;
                }
                break;
            case 'slider':
                const slider = container.querySelector('.scale-slider');
                if (slider) slider.value = response;
                break;
        }
    } catch (error) {
        console.error('Error loading existing response:', error);
    }
}

// Get current question
function getCurrentQuestion() {
    const stage = DISCOVERY_DATA.stages.find(s => s.id === currentState.currentStage);
    return stage ? stage.questions[currentState.currentQuestionIndex] : null;
}

// Update continue button
function updateContinueButton(hasResponse) {
    const continueBtn = document.getElementById('continue-btn');
    if (!continueBtn) return;
    
    continueBtn.disabled = !hasResponse;
    
    const stage = DISCOVERY_DATA.stages.find(s => s.id === currentState.currentStage);
    if (!stage) return;
    
    const isLastQuestion = currentState.currentQuestionIndex === stage.questions.length - 1;
    continueBtn.innerHTML = isLastQuestion ? 
        'Complete Stage <span class="continue-arrow">✨</span>' : 
        'Continue <span class="continue-arrow">→</span>';
}

// Continue to next question or complete stage
function continueToNext() {
    console.log('Continuing to next...');
    const stage = DISCOVERY_DATA.stages.find(s => s.id === currentState.currentStage);
    if (!stage) return;
    
    if (currentState.currentQuestionIndex < stage.questions.length - 1) {
        currentState.currentQuestionIndex++;
        showQuestionScreen();
    } else {
        completeStage();
    }
    
    saveState();
}

// Go to previous question
function goToPreviousQuestion() {
    if (currentState.currentQuestionIndex > 0) {
        currentState.currentQuestionIndex--;
        showQuestionScreen();
    }
}

// Skip current question
function skipCurrentQuestion() {
    const question = getCurrentQuestion();
    if (question) {
        delete currentState.responses[question.id];
        saveState();
    }
    continueToNext();
}

// Return to journey map
function returnToJourney() {
    showJourneyMap();
}

// Complete stage
function completeStage() {
    const stageId = currentState.currentStage;
    console.log('Completing stage:', stageId);
    
    if (!currentState.stagesCompleted.includes(stageId)) {
        currentState.stagesCompleted.push(stageId);
        currentState.insightGems += 1;
        
        // Award stage-specific badge
        awardStageBadge(stageId);
        
        // Check for milestone badges
        if (currentState.stagesCompleted.length === 4) {
            awardBadge('balanced');
        } else if (currentState.stagesCompleted.length === 6) {
            awardBadge('connected');
        } else if (currentState.stagesCompleted.length === 8) {
            awardBadge('complete');
            determinePersonalityType();
        }
    }
    
    saveState();
    showStageComplete();
}

// Award stage-specific badge
function awardStageBadge(stageId) {
    const badgeMap = {
        'inner-world': 'self_aware',
        'dreams-vision': 'visionary',
        'hearts-compass': 'authentic',
        'communication-style': 'communicator',
        'family-future': 'family_focused',
        'practical-life': 'balanced',
        'support-system': 'connected',
        'relationship-readiness': 'ready'
    };
    
    const badgeId = badgeMap[stageId];
    if (badgeId) {
        awardBadge(badgeId);
    }
}

// Award badge and show insight modal
function awardBadge(badgeId) {
    if (currentState.earnedBadges.includes(badgeId)) return;
    
    const badge = DISCOVERY_DATA.achievementBadges.find(b => b.id === badgeId);
    if (!badge) return;
    
    currentState.earnedBadges.push(badgeId);
    currentState.insightGems += 1;
    
    // Show insight modal
    showInsightModal(badge);
}

// Show insight modal
function showInsightModal(badge) {
    const insightTitle = document.getElementById('insight-title');
    const insightDescription = document.getElementById('insight-description');
    const insightAffirmationText = document.getElementById('insight-affirmation-text');
    const insightModal = document.getElementById('insight-modal');
    
    if (insightTitle) insightTitle.textContent = badge.name + ' Discovered!';
    if (insightDescription) insightDescription.textContent = badge.description;
    if (insightAffirmationText) {
        insightAffirmationText.textContent = getInsightAffirmation(badge.id);
    }
    if (insightModal) insightModal.classList.remove('hidden');
}

// Get insight affirmation
function getInsightAffirmation(badgeId) {
    const affirmations = {
        'self_aware': "Your willingness to explore yourself shows incredible courage and wisdom.",
        'visionary': "Your dreams for the future are beautiful and valid. Trust your vision.",
        'authentic': "Your commitment to your values makes you a trustworthy and genuine person.",
        'communicator': "Your communication style is a gift that will serve you well in love.",
        'family_focused': "Your thoughts about family show your caring and nurturing heart.",
        'balanced': "Your approach to life balance shows maturity and self-awareness.",
        'connected': "Your understanding of relationships reveals your emotional intelligence.",
        'ready': "Your readiness for love is evident in your thoughtful responses.",
        'complete': "You have completed this beautiful journey of self-discovery!"
    };
    
    return affirmations[badgeId] || "This insight reveals something beautiful about who you are.";
}

// Close insight modal
function closeInsightModal() {
    const modal = document.getElementById('insight-modal');
    if (modal) modal.classList.add('hidden');
}

// Show stage complete
function showStageComplete() {
    const stage = DISCOVERY_DATA.stages.find(s => s.id === currentState.currentStage);
    if (!stage) return;
    
    const stageCompleteMessage = document.getElementById('stage-complete-message');
    if (stageCompleteMessage) {
        stageCompleteMessage.textContent = 
            `You've just explored "${stage.title}" and discovered beautiful insights about yourself. Your wisdom continues to grow.`;
    }
    
    // Generate stage insights
    const insightsContainer = document.getElementById('stage-insights');
    const insights = generateStageInsights(currentState.currentStage);
    
    if (insightsContainer && insights.length > 0) {
        insightsContainer.innerHTML = `
            <h3>Your Beautiful Insights</h3>
            <div class="insights-list">
                ${insights.map(insight => `
                    <div class="insight-item">
                        <h4>${insight.title}</h4>
                        <p>${insight.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    showScreen('stage-complete-screen');
}

// Generate stage insights
function generateStageInsights(stageId) {
    const insights = [];
    
    // Add insights based on responses
    if (stageId === 'inner-world') {
        const loveLanguage = currentState.responses.love_language;
        if (loveLanguage) {
            insights.push({
                title: "Your Love Language",
                description: `You feel most appreciated through ${loveLanguage.toLowerCase()}. This is a beautiful insight into how you receive love.`
            });
        }
    }
    
    if (stageId === 'dreams-vision') {
        const topPriority = currentState.responses.life_timeline?.[0];
        if (topPriority) {
            insights.push({
                title: "Your Top Priority",
                description: `Your heart is most drawn to ${topPriority.toLowerCase()}. This reveals what matters most to you right now.`
            });
        }
    }
    
    return insights;
}

// Return to journey from stage complete
function returnToJourneyFromComplete() {
    if (currentState.stagesCompleted.length === DISCOVERY_DATA.stages.length) {
        showResults();
    } else {
        showJourneyMap();
    }
}

// Determine personality type
function determinePersonalityType() {
    const responses = currentState.responses;
    const scores = {
        dreamer: 0,
        builder: 0,
        adventurer: 0,
        nurturer: 0,
        independent: 0,
        harmonizer: 0
    };
    
    // Score based on responses
    
    // Dreams and vision responses
    if (responses.life_timeline) {
        const topThree = responses.life_timeline.slice(0, 3);
        if (topThree.includes("Traveling and having adventures")) scores.adventurer += 2;
        if (topThree.includes("Starting or growing a family")) scores.nurturer += 2;
        if (topThree.includes("Advancing in your career or education")) scores.independent += 2;
        if (topThree.includes("Achieving financial security and stability")) scores.builder += 2;
    }
    
    // Adventure vs stability slider
    if (responses.adventure_stability) {
        if (responses.adventure_stability > 70) scores.adventurer += 2;
        else if (responses.adventure_stability < 30) scores.builder += 2;
        else scores.harmonizer += 1;
    }
    
    // Success definition
    if (responses.success_definition?.includes("Having deep, meaningful relationships")) {
        scores.nurturer += 1;
        scores.dreamer += 1;
    }
    if (responses.success_definition?.includes("Achieving professional recognition and impact")) {
        scores.independent += 1;
    }
    
    // Communication style
    if (responses.conflict_approach === "Find compromises that work for everyone") {
        scores.harmonizer += 2;
    }
    if (responses.conflict_approach === "Focus on understanding different perspectives") {
        scores.nurturer += 1;
        scores.dreamer += 1;
    }
    
    // Relationship readiness
    if (responses.commitment_readiness >= 4) {
        scores.builder += 1;
        scores.nurturer += 1;
    }
    
    // Emotional availability
    if (responses.emotional_availability === "Completely ready for a deep committed relationship") {
        scores.builder += 1;
        scores.dreamer += 1;
    }
    if (responses.emotional_availability === "Focused on personal growth first") {
        scores.independent += 2;
    }
    
    // Find the highest scoring type
    const maxScore = Math.max(...Object.values(scores));
    const personalityType = Object.keys(scores).find(key => scores[key] === maxScore) || 'harmonizer';
    
    currentState.personalityType = personalityType;
    console.log('Personality type determined:', personalityType);
}

// Update journey progress
function updateJourneyProgress() {
    const overallProgress = (currentState.stagesCompleted.length / DISCOVERY_DATA.stages.length) * 100;
    const progressElement = document.getElementById('overall-progress-circle');
    const percentageElement = document.getElementById('progress-percentage');
    
    if (progressElement && percentageElement) {
        progressElement.style.background = `conic-gradient(var(--color-primary) ${overallProgress * 3.6}deg, var(--color-secondary) 0deg)`;
        percentageElement.textContent = Math.round(overallProgress) + '%';
    }
    
    const gemsElement = document.getElementById('gems-count');
    if (gemsElement) {
        gemsElement.textContent = currentState.insightGems;
    }
}

// Update recent badges
function updateRecentBadges() {
    const container = document.getElementById('recent-badges');
    if (!container) return;
    
    if (currentState.earnedBadges.length === 0) {
        container.innerHTML = '<div class="no-badges">Begin your journey to unlock beautiful insights about yourself</div>';
        return;
    }
    
    const recentBadges = currentState.earnedBadges
        .slice(-4)
        .map(id => DISCOVERY_DATA.achievementBadges.find(b => b.id === id))
        .filter(b => b);
    
    container.innerHTML = '';
    recentBadges.forEach(badge => {
        const badgeElement = document.createElement('div');
        badgeElement.className = 'achievement-badge';
        badgeElement.innerHTML = `
            <span class="badge-icon">${badge.icon}</span>
            <span>${badge.name}</span>
        `;
        container.appendChild(badgeElement);
    });
}

// Show results
function showResults() {
    const personalityType = DISCOVERY_DATA.personalityTypes.find(t => t.id === currentState.personalityType);
    
    if (personalityType) {
        renderPersonalityReveal(personalityType);
    }
    
    renderInsightsGallery();
    renderJourneySummary();
    renderFinalMessage(personalityType);
    
    showScreen('results-screen');
}

// Render personality reveal
function renderPersonalityReveal(personalityType) {
    const container = document.getElementById('personality-reveal');
    if (!container) return;
    
    container.innerHTML = `
        <div class="personality-type">
            <span class="personality-icon">${personalityType.icon}</span>
            <h2 class="personality-name">${personalityType.name}</h2>
            <h3 class="personality-title">${personalityType.title}</h3>
            <p class="personality-description">${personalityType.description}</p>
            
            <div class="personality-traits">
                ${personalityType.traits.map(trait => `
                    <div class="trait-item">${trait}</div>
                `).join('')}
            </div>
        </div>
    `;
}

// Render insights gallery
function renderInsightsGallery() {
    const container = document.getElementById('insights-gallery');
    if (!container) return;
    
    const insights = generateFinalInsights();
    
    container.innerHTML = `
        <div class="insights-grid">
            ${insights.map(insight => `
                <div class="insight-card">
                    <h4>${insight.title}</h4>
                    <p>${insight.description}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Generate final insights
function generateFinalInsights() {
    const insights = [];
    
    // Love language insight
    const loveLanguage = currentState.responses.love_language;
    if (loveLanguage) {
        insights.push({
            title: "How You Receive Love",
            description: `You feel most appreciated through ${loveLanguage.toLowerCase()}. Understanding this helps you communicate your needs clearly.`
        });
    }
    
    // Future vision insight
    const topPriority = currentState.responses.life_timeline?.[0];
    if (topPriority) {
        insights.push({
            title: "Your Heart's Priority",
            description: `Your soul is most drawn to ${topPriority.toLowerCase()}. This reveals what's calling to you right now.`
        });
    }
    
    // Communication insight
    const conflictStyle = currentState.responses.conflict_approach;
    if (conflictStyle) {
        insights.push({
            title: "Your Conflict Style",
            description: `You prefer to ${conflictStyle.toLowerCase()} when disagreements arise. This shows your natural approach to resolution.`
        });
    }
    
    // Relationship readiness insight
    const readiness = currentState.responses.commitment_readiness;
    if (readiness >= 4) {
        insights.push({
            title: "Your Readiness for Love",
            description: "You feel prepared for deep commitment, which shows emotional maturity and self-awareness."
        });
    } else if (readiness <= 2) {
        insights.push({
            title: "Your Thoughtful Approach",
            description: "You approach commitment carefully, which shows wisdom and self-protection."
        });
    }
    
    return insights.slice(0, 4);
}

// Render journey summary
function renderJourneySummary() {
    const totalGems = document.getElementById('total-gems');
    const stagesCompleted = document.getElementById('stages-completed');
    const insightsGained = document.getElementById('insights-gained');
    
    if (totalGems) totalGems.textContent = currentState.insightGems;
    if (stagesCompleted) stagesCompleted.textContent = currentState.stagesCompleted.length;
    if (insightsGained) insightsGained.textContent = Object.keys(currentState.responses).length;
}

// Render final message
function renderFinalMessage(personalityType) {
    const container = document.getElementById('final-message');
    if (!container) return;
    
    const message = personalityType ? personalityType.callToAction : 
        "You are a unique and wonderful person with so much love to give. Trust in your journey and in your beautiful heart.";
    
    container.innerHTML = `
        <h3>Your Call to Love</h3>
        <p>${message}</p>
        <div class="final-cta">
            <strong>You are ready to share your authentic self with someone who will cherish all that you are.</strong>
        </div>
    `;
}

// Celebrate journey - show final modal
function celebrateJourney() {
    const personalityType = DISCOVERY_DATA.personalityTypes.find(t => t.id === currentState.personalityType);
    
    const ctaContainer = document.getElementById('celebration-cta');
    if (ctaContainer) {
        ctaContainer.innerHTML = `
            <h3>Your Beautiful Truth</h3>
            <p>You are ${personalityType ? personalityType.name : 'wonderfully unique'} with a heart full of love to share.</p>
            <p><strong>Trust your journey. You are exactly where you need to be.</strong></p>
        `;
    }
    
    const celebrationModal = document.getElementById('celebration-modal');
    if (celebrationModal) celebrationModal.classList.remove('hidden');
}

// Close celebration modal
function closeCelebrationModal() {
    const modal = document.getElementById('celebration-modal');
    if (modal) modal.classList.add('hidden');
}

// Save state to localStorage
function saveState() {
    try {
        localStorage.setItem('personalDiscoveryState', JSON.stringify(currentState));
    } catch (error) {
        console.warn('Could not save state to localStorage:', error);
    }
}

// Load saved state
function loadSavedState() {
    try {
        const saved = localStorage.getItem('personalDiscoveryState');
        if (saved) {
            const parsed = JSON.parse(saved);
            currentState = { ...currentState, ...parsed };
        }
    } catch (error) {
        console.warn('Could not load saved state:', error);
    }
}

// Make functions available globally for HTML onclick handlers
window.beginJourney = beginJourney;
window.startStageQuestions = startStageQuestions;
window.continueToNext = continueToNext;
window.goToPreviousQuestion = goToPreviousQuestion;
window.skipCurrentQuestion = skipCurrentQuestion;
window.returnToJourney = returnToJourney;
window.returnToJourneyFromComplete = returnToJourneyFromComplete;
window.celebrateJourney = celebrateJourney;
window.closeInsightModal = closeInsightModal;
window.closeCelebrationModal = closeCelebrationModal;
