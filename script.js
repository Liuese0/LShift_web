// ========================================
// Configuration & Constants
// ========================================

// Social Media Links (쉽게 수정 가능)
const SOCIAL_LINKS = {
    instagram: 'https://www.instagram.com/lshift.official/',  // 실제 링크로 변경
    youtube: 'https://www.youtube.com/channel/UCfxWYdOE20AG4E8EH2N4cZw',  // 실제 링크로 변경
    linktree: 'https://linktr.ee/lshift'
};

// Business Email (쉽게 수정 가능)
const BUSINESS_EMAIL = 'lshift.co@gmail.com';  // 실제 이메일로 변경

// Projects Data (쉽게 추가/수정 가능)
const PROJECTS = [
    {
        title: {
            ko: 'ROGOS : forum',
            en: 'ROGOS : forum'
        },
        description: {
            ko: '지식인들을 위한 고대 그리스 토론의 장',
            en: 'A Forum for Ancient Greek Debate Among Intellectuals'
        },
        category: 'app',
        status: 'development',
        statusText: {
            ko: '개발 중',
            en: 'In Development'
        }
    },
    {
        title: {
            ko: 'Map_Diary',
            en: 'Map_Diary'
        },
        description: {
            ko: '지도위에 표시하는 여행 일기 앱',
            en: 'Travel diary app that displays on a map'
        },
        category: 'app',
        status: 'development',
        statusText: {
            ko: '개발 중',
            en: 'In Development'
        }
    }
];

// Translations
const TRANSLATIONS = {
    ko: {
        // Navigation
        home: 'Home',
        about: 'About',
        tech: 'Tech',
        projects: 'Projects',
        ideas: 'Ideas',
        contact: 'Contact',

        // Hero Section
        heroTagline1: '작지만 빠른 혁신',
        heroTagline2: 'Shifting the future, LShift',
        heroTagline3: '기술로 미래를 만듭니다',
        viewProjects: '프로젝트 보기',
        contactUs: '연락하기',
        scrollDown: '스크롤하여 더 보기',

        // About Section
        aboutTitle: '회사 소개',
        shiftMessage: '작은 변화로 큰 차이를',
        whoWeAre: '우리는 누구인가',
        aboutDesc1: 'LShift는 앱, 게임, 소프트웨어 등 다양한 분야의 기술을 개발하는 스타트업입니다.',
        aboutDesc2: 'Left Shift 연산자처럼 작은 변화가 기하급수적인 성장을 만들 수 있다는 믿음으로, 우리는 빠르고 혁신적인 솔루션을 제공합니다.',
        value1: '빠른 혁신',
        value2: '기술 중심',
        value3: '창의성',

        // Projects Section
        projectsTitle: '프로젝트',
        tabAll: '전체',
        tabApp: '앱',
        tabGame: '게임',
        tabSoftware: '소프트웨어',

        // Ideas Section
        ideasTitle: '함께 만들어요',
        ideasSubtitle: '당신의 아이디어와 제안을 기다립니다',
        ideaSubmission: '아이디어 응모',
        ideaDesc: '혁신적인 앱이나 게임 아이디어가 있으신가요? 함께 현실로 만들어봅시다.',
        collaboration: '협업 제안',
        collabDesc: '기술 협업, 파트너십, 프로젝트 의뢰 등 다양한 형태의 협업을 환영합니다.',
        formName: '이름',
        formEmail: '이메일',
        formType: '제안 유형',
        formMessage: '메시지',
        formSubmit: '제출하기',
        optionIdea: '아이디어 응모',
        optionCollab: '협업 제안',
        optionOther: '기타',

        // Contact Section
        contactTitle: '연락처',
        businessEmail: '비즈니스 이메일',
        location: '위치',
        locationText: 'Seoul, South Korea',
        followUs: '팔로우하기',

        // Project Modal
        modalDetailsTitle: '프로젝트 세부 정보',
        modalDetailsText: '이 프로젝트에 대한 자세한 정보는 곧 공개될 예정입니다. 더 많은 정보를 원하시면 문의하기를 통해 연락주세요.',

        // Footer
        footerTagline: 'Shifting the future, LShift',

        // Easter Egg
        hitCounter: '때린 횟수:',
        hitMessages: ['아야!', '으악!', 'ㅠㅠ', '그만...', '왜 때려요ㅠ', '아프다고요!', '허억...', '살려주세요'],
        specialMessage: '🎉 축하합니다! 숨겨진 메시지를 발견했어요! 당신은 정말 끈기가 있으시네요! 😄'
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About',
        tech: 'Tech',
        projects: 'Projects',
        ideas: 'Ideas',
        contact: 'Contact',

        // Hero Section
        heroTagline1: 'Small But Fast Innovation',
        heroTagline2: 'Shifting the future, LShift',
        heroTagline3: 'Building Future with Technology',
        viewProjects: 'View Projects',
        contactUs: 'Contact Us',
        scrollDown: 'Scroll Down',

        // About Section
        aboutTitle: 'About Us',
        shiftMessage: 'Small Changes, Big Differences',
        whoWeAre: 'Who We Are',
        aboutDesc1: 'LShift is a startup developing technologies in various fields such as apps, games, and software.',
        aboutDesc2: 'Like the Left Shift operator where small changes create exponential growth, we provide fast and innovative solutions.',
        value1: 'Fast Innovation',
        value2: 'Tech-Centered',
        value3: 'Creativity',

        // Projects Section
        projectsTitle: 'Projects',
        tabAll: 'All',
        tabApp: 'App',
        tabGame: 'Game',
        tabSoftware: 'Software',

        // Ideas Section
        ideasTitle: 'Let\'s Build Together',
        ideasSubtitle: 'We\'re waiting for your ideas and proposals',
        ideaSubmission: 'Submit Ideas',
        ideaDesc: 'Have an innovative app or game idea? Let\'s make it reality together.',
        collaboration: 'Collaboration',
        collabDesc: 'We welcome various forms of collaboration including technical partnerships and project requests.',
        formName: 'Name',
        formEmail: 'Email',
        formType: 'Proposal Type',
        formMessage: 'Message',
        formSubmit: 'Submit',
        optionIdea: 'Idea Submission',
        optionCollab: 'Collaboration',
        optionOther: 'Other',

        // Contact Section
        contactTitle: 'Contact',
        businessEmail: 'Business Email',
        location: 'Location',
        locationText: 'Seoul, South Korea',
        followUs: 'Follow Us',

        // Project Modal
        modalDetailsTitle: 'Project Details',
        modalDetailsText: 'Detailed information about this project will be available soon. For more information, please contact us through the inquiry form.',

        // Footer
        footerTagline: 'Shifting the future, LShift',

        // Easter Egg
        hitCounter: 'Hit Count:',
        hitMessages: ['Ouch!', 'Agh!', 'Stop...', 'Why?!', 'It hurts!', 'Please stop!', 'Oof...', 'Help me!'],
        specialMessage: '🎉 Congratulations! You found the hidden message! You are really persistent! 😄'
    }
};

// ========================================
// Global State
// ========================================

let currentLang = 'ko';
let isDarkMode = true;
let currentProjectCategory = 'all';
let easterEggHitCount = 0;
const EASTER_EGG_SPECIAL_COUNT = 20;

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Initialize loading screen
    initLoadingScreen();

    // Initialize navigation
    initNavigation();

    // Initialize theme toggle
    initThemeToggle();

    // Initialize language toggle
    initLanguageToggle();

    // Initialize hero animations
    initHeroAnimations();

    // Initialize projects
    initProjects();

    // Initialize project modal
    initProjectModal();

    // Initialize form
    initForm();

    // Initialize social links
    initSocialLinks();

    // Initialize easter egg
    initEasterEgg();

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Initialize particles
    createParticles();

    // Initialize scroll animations
    initScrollAnimations();
}

// ========================================
// Loading Screen
// ========================================

function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const typingCode = document.querySelector('.typing-code');

    const codeSnippets = [
        'Initializing LShift...',
        'Loading modules...',
        'Compiling innovation...',
        'Starting engines...',
        'Ready to shift! <<'
    ];

    let currentSnippet = 0;

    const typeInterval = setInterval(() => {
        if (currentSnippet < codeSnippets.length) {
            typingCode.textContent = codeSnippets[currentSnippet];
            currentSnippet++;
        } else {
            clearInterval(typeInterval);
        }
    }, 400);

    // Hide loading screen after content is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 2000);
    });
}

// ========================================
// Navigation
// ========================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active section
        updateActiveSection();
    });

    // Smooth scroll for nav links
    [...navLinks, ...mobileLinks].forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Close mobile menu if open
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
}

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ========================================
// Theme Toggle
// ========================================

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('light-mode');

        // Update icon
        if (isDarkMode) {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    });
}

// ========================================
// Language Toggle
// ========================================

function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ko' ? 'en' : 'ko';
        langText.textContent = currentLang === 'ko' ? 'EN' : 'KO';
        updateLanguage();
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (TRANSLATIONS[currentLang][key]) {
            // Fade effect
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = TRANSLATIONS[currentLang][key];
                element.style.opacity = '1';
            }, 150);
        }
    });

    // Update projects
    renderProjects(currentProjectCategory);

    // Update select options
    updateSelectOptions();
}

function updateSelectOptions() {
    const typeSelect = document.getElementById('type');
    const options = typeSelect.querySelectorAll('option');

    options.forEach(option => {
        const key = option.getAttribute('data-lang');
        if (key && TRANSLATIONS[currentLang][key]) {
            option.textContent = TRANSLATIONS[currentLang][key];
        }
    });
}

// ========================================
// Hero Animations
// ========================================

function initHeroAnimations() {
    const typedText = document.querySelector('.typed-text');
    const taglines = [
        TRANSLATIONS[currentLang].heroTagline1,
        TRANSLATIONS[currentLang].heroTagline2,
        TRANSLATIONS[currentLang].heroTagline3
    ];

    let taglineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentTagline = currentLang === 'ko'
            ? TRANSLATIONS.ko[`heroTagline${taglineIndex + 1}`]
            : TRANSLATIONS.en[`heroTagline${taglineIndex + 1}`];

        if (isDeleting) {
            typedText.textContent = currentTagline.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentTagline.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentTagline.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            taglineIndex = (taglineIndex + 1) % 3;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// ========================================
// Particles Animation
// ========================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 1;
        const startX = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${startX}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
    }
}

// ========================================
// Projects
// ========================================

function initProjects() {
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked tab
            btn.classList.add('active');

            // Get category and filter
            const category = btn.getAttribute('data-category');
            currentProjectCategory = category;
            renderProjects(category);
        });
    });

    // Initial render
    renderProjects('all');
}

function renderProjects(category) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    let filteredProjects = category === 'all'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === category);

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', index * 100);

        card.innerHTML = `
            <div class="project-header">
                <div>
                    <h3 class="project-title">${project.title[currentLang]}</h3>
                </div>
                <span class="project-status status-${project.status}">
                    ${project.statusText[currentLang]}
                </span>
            </div>
            <p class="project-description">${project.description[currentLang]}</p>
            <div class="project-tags">
                <span class="project-tag">${project.category}</span>
            </div>
        `;

        // Add click event to open modal
        card.addEventListener('click', () => {
            openProjectModal(project);
        });

        projectsGrid.appendChild(card);
    });

    // Refresh AOS
    AOS.refresh();
}

// ========================================
// Form Handling
// ========================================

function initForm() {
    const form = document.getElementById('ideas-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            type: document.getElementById('type').value,
            message: document.getElementById('message').value
        };

        console.log('Form submitted:', formData);

        // Show success message
        alert(currentLang === 'ko'
            ? '제출해주셔서 감사합니다! 곧 연락드리겠습니다.'
            : 'Thank you for your submission! We will contact you soon.');

        // Reset form
        form.reset();
    });
}

// ========================================
// Social Links
// ========================================

function initSocialLinks() {
    // Update social links
    document.getElementById('instagram-link').href = SOCIAL_LINKS.instagram;
    document.getElementById('youtube-link').href = SOCIAL_LINKS.youtube;
    document.getElementById('linktree-link').href = SOCIAL_LINKS.linktree;

    // Update business email
    document.getElementById('business-email').textContent = BUSINESS_EMAIL;
}

// ========================================
// Project Modal
// ========================================

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalStatus = document.getElementById('modal-status');
    const modalDescription = document.getElementById('modal-description');
    const modalCategory = document.getElementById('modal-category-text');

    // Set content
    modalTitle.textContent = project.title[currentLang];
    modalDescription.textContent = project.description[currentLang];
    modalCategory.textContent = project.category;

    // Set status with proper class
    modalStatus.textContent = project.statusText[currentLang];
    modalStatus.className = `modal-status status-${project.status}`;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize modal close events
function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Close button
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    // Click overlay to close
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

// ========================================
// Easter Egg - Character Hit
// ========================================

function initEasterEgg() {
    const characters = document.querySelectorAll('.easter-egg-char');
    const counter = document.getElementById('easter-egg-counter');
    const hitCountDisplay = document.getElementById('hit-count');

    characters.forEach(char => {
        char.addEventListener('click', () => {
            // Increment hit count
            easterEggHitCount++;
            hitCountDisplay.textContent = easterEggHitCount;

            // Show counter after first hit
            if (easterEggHitCount === 1) {
                counter.classList.remove('hidden');
            }

            // Add hit animation
            char.classList.add('hit');
            setTimeout(() => {
                char.classList.remove('hit');
            }, 500);

            // Show random hit message
            const hitEffect = char.querySelector('.hit-effect');
            const messages = TRANSLATIONS[currentLang].hitMessages;
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];

            hitEffect.textContent = randomMessage;
            hitEffect.classList.add('show');
            setTimeout(() => {
                hitEffect.classList.remove('show');
            }, 1000);

            // Special message at certain count
            if (easterEggHitCount === EASTER_EGG_SPECIAL_COUNT) {
                setTimeout(() => {
                    alert(TRANSLATIONS[currentLang].specialMessage);
                }, 500);
            }

            // Random reactions
            const reactions = ['shake', 'bounce', 'spin', 'squeeze'];
            const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
            applyReaction(char, randomReaction);
        });
    });
}

function applyReaction(element, reaction) {
    const charIcon = element.querySelector('.char-icon');

    switch(reaction) {
        case 'shake':
            charIcon.style.animation = 'none';
            setTimeout(() => {
                charIcon.style.animation = 'hitAnimation 0.5s ease';
            }, 10);
            break;
        case 'bounce':
            charIcon.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                charIcon.style.transform = 'translateY(0)';
            }, 300);
            break;
        case 'spin':
            charIcon.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                charIcon.style.transform = 'rotate(0deg)';
            }, 500);
            break;
        case 'squeeze':
            charIcon.style.transform = 'scaleX(0.7) scaleY(1.3)';
            setTimeout(() => {
                charIcon.style.transform = 'scale(1)';
            }, 300);
            break;
    }
}

// ========================================
// Scroll Animations
// ========================================

function initScrollAnimations() {
    // Add scroll reveal for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ========================================
// Utility Functions
// ========================================

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get random number in range
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// Console Easter Egg
// ========================================

console.log('%cLShift << 🚀', 'font-size: 48px; font-weight: bold; background: linear-gradient(135deg, #00d9ff 0%, #bd00ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%c작지만 빠른 혁신 | Small But Fast Innovation', 'font-size: 16px; color: #00d9ff;');
console.log('%c개발자 도구를 열다니, 당신도 개발자시군요! 👨‍💻', 'font-size: 14px; color: #bd00ff;');
console.log('%cWelcome to the console! You must be a developer! 👨‍💻', 'font-size: 14px; color: #00ff88;');
console.log('%c우리와 함께 일하고 싶으신가요? ' + BUSINESS_EMAIL + '로 연락주세요!', 'font-size: 12px; color: #6b7894;');
console.log('%cWant to work with us? Contact us at ' + BUSINESS_EMAIL, 'font-size: 12px; color: #6b7894;');
