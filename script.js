// Language data
const translations = {
    en: {
        title: "Dr. Abanoub Emad",
        intro: "Welcome! I'm Dr. Abanoub Emad, Physiotherapist and Nutritionist, I'm here to guide you towards a better, pain-free and healthy life.",
        servicesTitle: "My Services",
        bookingTitle: "Book an Appointment",
        contactTitle: "Contact Me",
        nameLabel: "Name",
        ageLabel: "Age",
        cityLabel: "City",
        serviceLabel: "Service",
        dateLabel: "Date & Time",
        bookNow: "Book Now",
        phoneLabel: "Phone:",
        facebookLabel: "Facebook:",
        whatsappLabel: "WhatsApp:",
        facebookLink: "Visit my page",
        whatsappContactLink: "Chat on WhatsApp",
        feedbackText: "* Please leave your feedback through ",
        whatsappLink: "WhatsApp",
        feedbackExclamation: "!",
        serviceOptions: ["Physiotherapy", "Nutrition Consultation"],
        physio: "Physiotherapy:",
        nutrition: "Nutrition Consulting:"
    },
    ar: {
        title: "د. أبانوب عماد",
        intro: "مرحبا! أنا د. أبانوب عماد، أخصائي علاج طبيعي وتغذية، وأنا هنا لأساعدك في الوصول إلى حياة أفضل وخالية من الألم وصحية.",
        servicesTitle: "خدماتي",
        bookingTitle: "حجز موعد",
        contactTitle: "تواصل معي",
        nameLabel: "الاسم",
        ageLabel: "العمر",
        cityLabel: "المدينة",
        serviceLabel: "الخدمة",
        dateLabel: "التاريخ والوقت",
        bookNow: "احجز الآن",
        phoneLabel: "الهاتف:",
        facebookLabel: "فيسبوك:",
        whatsappLabel: "واتساب:",
        facebookLink: "زيارة صفحتي",
        whatsappContactLink: "الدردشة على واتساب",
        feedbackText: "* يرجى ترك ملاحظاتك من خلال ",
        whatsappLink: "واتساب",
        feedbackExclamation: "!",
        serviceOptions: ["العلاج الطبيعي", "استشارة التغذية"],
        physio: "العلاج الطبيعي:",
        nutrition: "استشارات التغذية:"
    }
};

const services = {
    en: {
        physio: [
            "Post-surgery rehabilitation",
            "Sports injury management",
            "Chronic pain therapy",
            "Geriatric rehabilitation",
            "Posture correction programs",
            "Neurological rehabilitation"
        ],
        nutrition: [
            "Weight management plans",
            "Special diets for medical conditions",
            "Sports nutrition",
            "Healthy eating coaching",
            "Osteoporosis nutritional management"
        ]
    },
    ar: {
        physio: [
            "التأهيل بعد الجراحة",
            "إصابات الملاعب",
            "علاج الألم المزمن",
            "التأهيل لكبار السن",
            "تصحيح وضع الجسم",
            "التأهيل العصبي"
        ],
        nutrition: [
            "خطط إدارة الوزن",
            "أنظمة غذائية خاصة",
            "التغذية الرياضية",
            "التوجيه الغذائي",
            "إدارة التغذية لهشاشة العظام"
        ]
    }
};

// Get initial language from localStorage, default to English
let lang = localStorage.getItem('lang') || 'en';

// Function to update services
function updateServices(lang) {
    try {
        console.log('Updating services for language:', lang);
        const physioList = document.getElementById('physio-services');
        const nutritionList = document.getElementById('nutrition-services');
        const serviceSelect = document.getElementById('service');

        if (!physioList || !nutritionList || !serviceSelect) {
            console.error('One or more DOM elements not found in updateServices');
            return;
        }

        console.log('Physio services:', services[lang].physio);
        console.log('Nutrition services:', services[lang].nutrition);

        physioList.innerHTML = '';
        nutritionList.innerHTML = '';
        serviceSelect.innerHTML = '';

        services[lang].physio.forEach(service => {
            const li = document.createElement('li');
            li.textContent = service;
            physioList.appendChild(li);
        });

        services[lang].nutrition.forEach(service => {
            const li = document.createElement('li');
            li.textContent = service;
            nutritionList.appendChild(li);
        });

        physioList.style.display = 'block';
        nutritionList.style.display = 'block';

        translations[lang].serviceOptions.forEach((option, index) => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            serviceSelect.appendChild(opt);
        });
    } catch (error) {
        console.error('Error in updateServices:', error);
    }
}

// Function to update content
function updateContent(lang) {
    try {
        const t = translations[lang];
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        const toggleBtn = document.getElementById('toggle-lang-btn');
        if (toggleBtn) toggleBtn.textContent = lang === 'en' ? 'العربية' : 'English';

        const title = document.getElementById('title');
        if (title) title.textContent = t.title;

        const introText = document.getElementById('intro-text');
        if (introText) introText.textContent = t.intro;

        const servicesTitle = document.getElementById('services-title');
        if (servicesTitle) servicesTitle.textContent = t.servicesTitle;

        const bookingTitle = document.getElementById('booking-title');
        if (bookingTitle) bookingTitle.textContent = t.bookingTitle;

        const contactTitle = document.getElementById('contact-title');
        if (contactTitle) contactTitle.textContent = t.contactTitle;

        const nameLabel = document.getElementById('name-label');
        if (nameLabel) nameLabel.textContent = t.nameLabel;

        const ageLabel = document.getElementById('age-label');
        if (ageLabel) ageLabel.textContent = t.ageLabel;

        const cityLabel = document.getElementById('city-label');
        if (cityLabel) cityLabel.textContent = t.cityLabel;

        const serviceLabel = document.getElementById('service-label');
        if (serviceLabel) serviceLabel.textContent = t.serviceLabel;

        const dateLabel = document.getElementById('date-label');
        if (dateLabel) dateLabel.textContent = t.dateLabel;

        const bookNowBtn = document.getElementById('book-now-btn');
        if (bookNowBtn) bookNowBtn.textContent = t.bookNow;

        const facebookLink = document.getElementById('facebook-link');
        if (facebookLink) facebookLink.textContent = t.facebookLink;

        const whatsappContactLink = document.getElementById('whatsapp-contact-link');
        if (whatsappContactLink) whatsappContactLink.textContent = t.whatsappContactLink;

        const feedbackText = document.getElementById('feedback-text');
        if (feedbackText) feedbackText.textContent = t.feedbackText;

        const whatsappLink = document.getElementById('whatsapp-link');
        if (whatsappLink) whatsappLink.textContent = t.whatsappLink;

        const feedbackExclamation = document.getElementById('feedback-exclamation');
        if (feedbackExclamation) feedbackExclamation.textContent = t.feedbackExclamation;

        const physioHeader = document.querySelector('[data-translate="physio"]');
        if (physioHeader) physioHeader.textContent = t.physio;

        const nutritionHeader = document.querySelector('[data-translate="nutrition"]');
        if (nutritionHeader) nutritionHeader.textContent = t.nutrition;
    } catch (error) {
        console.error('Error in updateContent:', error);
    }
}

// Form handling
document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formErrors = document.getElementById('form-errors');
    if (!formErrors) {
        console.error('Form errors element not found');
        return;
    }
    formErrors.innerHTML = '';
    formErrors.className = '';

    const fields = ['name', 'age', 'city', 'date'];
    fields.forEach(field => {
        const element = document.getElementById(field);
        if (element) element.classList.remove('error');
    });

    let isValid = true;
    fields.forEach(field => {
        const element = document.getElementById(field);
        if (!element) {
            console.error(`Field ${field} not found`);
            isValid = false;
            return;
        }
        if (!element.value.trim()) {
            isValid = false;
            element.classList.add('error');
        }
    });

    if (isValid) {
        formErrors.textContent = lang === 'en'
            ? 'Booking successful! We will contact you soon.'
            : 'تم الحجز بنجاح! سنتواصل معك قريبًا.';
        formErrors.classList.add('success-message');
        e.target.reset();
    } else {
        formErrors.textContent = lang === 'en'
            ? 'Please fill all required fields.'
            : 'يرجى ملء جميع الحقول المطلوبة.';
        formErrors.classList.add('error-message');
    }
});

// Initialize on page load
function initializePage() {
    if (!services.en || !services.ar || !translations.en || !translations.ar) {
        console.error('Services or translations data is incomplete');
        return;
    }
    lang = localStorage.getItem('lang') || 'en';
    console.log('Initial language:', lang);
    updateContent(lang);
    updateServices(lang);
}

// Run initializePage when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');
    initializePage();
});

// Fallback: Run initializePage when the entire page is loaded
window.addEventListener('load', () => {
    console.log('Window load fired');
    initializePage();
});

// Language toggle handler
document.getElementById('toggle-lang-btn')?.addEventListener('click', () => {
    lang = lang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', lang);
    console.log('Language toggled to:', lang);
    updateContent(lang);
    updateServices(lang);
});