// زر تغيير اللغة باستخدام Google Translate
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    // إظهار واجهة الترجمة وتفعيل الإنجليزية أو العربية
    const frame = document.querySelector('iframe.goog-te-menu-frame');
    if (!frame) {
        document.getElementById('google_translate_element').style.display = 'block';
        setTimeout(() => {
            triggerGoogleTranslate();
        }, 800);
    } else {
        triggerGoogleTranslate();
    }
});

function triggerGoogleTranslate() {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
        const current = document.documentElement.lang === 'ar' ? 'en' : 'ar';
        select.value = current;
        select.dispatchEvent(new Event('change'));
        document.documentElement.lang = current;
    }
}
// زر الوضع الليلي/النهاري
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    setTheme(isDark ? 'light' : 'dark');
});
// عند التحميل: تفعيل التفضيل
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    if (saved) {
        setTheme(saved);
    } else {
        setTheme(prefersDark ? 'dark' : 'light');
    }
});
// زر الصعود للأعلى
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
// Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Progress bar animation
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress').forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
    });
});
