// Navigation & UI Enhancement Controller
const uiEnhancementController = (() => {
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;
    let ticking = false;

    const updateUI = () => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;


        // Floating CTA Visibility
        const floatingCta = document.getElementById('floating-cta');
        if (floatingCta) {
            if (scrollY > 500) {
                floatingCta.classList.add('is-visible');
            } else {
                floatingCta.classList.remove('is-visible');
            }
        }

        // Nav Glass Effect
        if (nav) {
            if (scrollY > 20) {
                nav.classList.add('nav--glass');
            } else {
                nav.classList.remove('nav--glass');
            }
        }

        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateUI);
            ticking = true;
        }
    }, { passive: true });

    updateUI(); // Initial check
})();

// Mega Menu Controller
const megaMenuController = (() => {
    const navItems = document.querySelectorAll('.nav-item.has-dropdown');
    const panel = document.getElementById('mega-menu-panel');
    const overlay = document.getElementById('mega-menu-overlay');
    const sections = document.querySelectorAll('.mega-menu-section');
    let closeTimeout;

    const showMenu = (menuId) => {
        clearTimeout(closeTimeout);
        panel.classList.add('is-active');
        overlay.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open

        sections.forEach(s => {
            if (s.dataset.menu === menuId) {
                s.classList.add('is-active');
            } else {
                s.classList.remove('is-active');
            }
        });
    };

    const hideMenu = () => {
        closeTimeout = setTimeout(() => {
            panel.classList.remove('is-active');
            overlay.classList.remove('is-active');
            document.body.style.overflow = '';
            sections.forEach(s => s.classList.remove('is-active'));
        }, 150);
    };

    navItems.forEach(item => {
        const menuId = item.dataset.menu;
        item.addEventListener('mouseenter', () => showMenu(menuId));
        item.addEventListener('mouseleave', hideMenu);
    });

    panel.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
    panel.addEventListener('mouseleave', hideMenu);
    overlay.addEventListener('mouseenter', hideMenu);
})();


// Search Toggle Controller (now uses mega-menu system)
const searchToggleController = (() => {
    const searchToggle = document.getElementById('search-toggle');
    const panel = document.getElementById('mega-menu-panel');
    const overlay = document.getElementById('mega-menu-overlay');
    const sections = document.querySelectorAll('.mega-menu-section');

    if (!searchToggle || !panel) return;

    const showSearch = () => {
        panel.classList.add('is-active');
        overlay.classList.add('is-active');
        document.body.style.overflow = 'hidden';

        sections.forEach(s => {
            if (s.dataset.menu === 'search') {
                s.classList.add('is-active');
            } else {
                s.classList.remove('is-active');
            }
        });
    };

    const hideSearch = () => {
        panel.classList.remove('is-active');
        overlay.classList.remove('is-active');
        document.body.style.overflow = '';
        sections.forEach(s => s.classList.remove('is-active'));
    };

    searchToggle.addEventListener('click', (e) => {
        e.preventDefault();
        // Toggle: if already showing search, close it
        const searchSection = document.querySelector('[data-menu="search"]');
        if (panel.classList.contains('is-active') && searchSection.classList.contains('is-active')) {
            hideSearch();
        } else {
            showSearch();
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideSearch();
        }
    });

    // Close when clicking overlay
    overlay.addEventListener('click', hideSearch);
})();

// Intersection Observer for Reveal & Counters
const revealObserver = (() => {
    const options = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + '+';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');

                // Trigger counters if this is the stats section
                if (entry.target.classList.contains('welcome-section')) {
                    const stats = entry.target.querySelectorAll('.stat-number');
                    stats.forEach(stat => {
                        const target = parseInt(stat.innerText);
                        animateValue(stat, 0, target, 2000);
                    });
                }

                // Lazy load images
                const lazyImages = entry.target.querySelectorAll('img[data-src]');
                lazyImages.forEach(img => {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// Subtle 3D Card Tilt
const cardTiltEffect = (() => {
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
        });
    });
})();

// Mobile Navigation Controller
const mobileNavController = (() => {
    const toggle = document.getElementById('mobile-menu-toggle');
    const panel = document.getElementById('mobile-nav-panel');
    const closeBtn = document.getElementById('mobile-nav-close');
    const submenuToggles = document.querySelectorAll('.mobile-submenu-toggle');

    if (!toggle || !panel) return;

    const open = () => {
        panel.classList.add('is-active');
        panel.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        panel.classList.remove('is-active');
        panel.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    toggle.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);

    submenuToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement;
            parent.classList.toggle('is-open');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });
    });

    // Close on link click
    panel.querySelectorAll('.mobile-nav-link, .mobile-submenu a').forEach(link => {
        link.addEventListener('click', close);
    });
})();

// Smooth scrolling for navigation links
const smoothScroll = (() => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = 46; // Match navigation height
                const targetPosition = targetElement.offsetTop - navHeight - 20; // Extra offset for breathing room

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
})();

// Greeting script
const greetingScript = (() => {
    const welcomeMessage = document.getElementById('welcome-message');

    if (welcomeMessage) {
        const hour = new Date().getHours();
        let greeting;

        if (hour < 12) {
            greeting = 'Selamat Pagi!';
        } else if (hour < 18) {
            greeting = 'Selamat Siang!';
        } else {
            greeting = 'Selamat Malam!';
        }

        welcomeMessage.textContent = `${greeting} Selamat Datang di Pondok Pesantren Dar Al-Qur'an`;
    }
})();

// MODAL FUNCTIONS (UI Controller)
const modalController = (() => {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const info = document.getElementById('modal-info');
    const form = document.getElementById('modal-form');
    const confirmBtn = document.getElementById('modal-confirm');

    const open = (mode = 'registration') => {
        if (!modal) return;
        modal.classList.add('is-active');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        if (mode === 'registration') {
            title.textContent = 'Formulir Pendaftaran';
            info.style.display = 'none';
            form.style.display = 'block';
            confirmBtn.textContent = 'Daftar';
        } else {
            title.textContent = 'Tentang Kami';
            info.style.display = 'block';
            form.style.display = 'none';
            confirmBtn.textContent = 'Tutup';
        }
    };

    const close = () => {
        if (!modal) return;
        modal.classList.remove('is-active');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    // Close when clicking overlay
    modal.addEventListener('click', (e) => {
        if (e.target === modal) close();
    });

    return { open, close };
})();

// Global access for legacy onclick attributes
window.openModal = () => modalController.open('registration');
window.showMoreInfo = () => modalController.open('info');
window.closeModal = () => modalController.close();
window.submitForm = () => {
    alert('Formulir pendaftaran telah dikirim!');
    modalController.close();
};

// FAQ Accordion Logic
const initFAQ = () => {
    const faqItems = document.querySelectorAll('.question-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.question-header');
        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all other items with a small delay for smoother visuals
            faqItems.forEach(q => {
                if (q !== item) q.classList.remove('is-open');
            });

            // Toggle current item
            item.classList.toggle('is-open');
        });
    });
};

document.addEventListener('DOMContentLoaded', initFAQ);

// Test Functions for Quick Actions
window.createButton = () => {
    const container = document.querySelector('.action-buttons');
    const newBtn = document.createElement('button');
    newBtn.className = 'hero-btn hero-secondary reveal is-revealed';
    newBtn.style.animation = 'revealUp 0.5s ease forwards';
    newBtn.innerHTML = '<i class="fa-solid fa-star"></i> Tombol Baru';
    newBtn.onclick = () => alert('Tombol baru berinteraksi!');
    container.appendChild(newBtn);
};

window.toggleFAQ = () => {
    const faqSection = document.getElementById('faq');
    if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
        // Optional: Open the first item if none are open
        const firstItem = faqSection.querySelector('.question-item');
        if (firstItem && !firstItem.classList.contains('is-open')) {
            setTimeout(() => firstItem.classList.add('is-open'), 600);
        }
    }
};
