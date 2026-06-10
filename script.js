/* ==========================================================================
   Devgiri Residency - Simplified JS Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Sticky Header Controller (Adds scrolled class for background styling)
    const header = document.getElementById('header');
    const scrollThreshold = 50;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    // 3. Dynamic Photo Gallery Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    if (lightbox && lightboxImg && lightboxClose && lightboxPrev && lightboxNext) {
        // Store image URLs for lightbox navigation
        const images = Array.from(galleryItems).map(item => item.querySelector('.gallery-img').src);
        let currentImageIndex = 0;

        const openLightbox = (index) => {
            currentImageIndex = index;
            lightboxImg.src = images[currentImageIndex];
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        const showNextImage = (e) => {
            if (e) e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % images.length;
            lightboxImg.src = images[currentImageIndex];
        };

        const showPrevImage = (e) => {
            if (e) e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentImageIndex];
        };

        // Attach click events to gallery items
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                openLightbox(index);
            });
        });

        // Lightbox control event listeners
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxNext.addEventListener('click', showNextImage);
        lightboxPrev.addEventListener('click', showPrevImage);

        // Close lightbox on clicking background overlay
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard Navigation for Lightbox
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        });
    }

    // 4. Booking Form Controller (Formulates WhatsApp message dynamically)
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        // Set minimum check-in date to today
        const today = new Date().toISOString().split('T')[0];
        const checkInInput = document.getElementById('check-in-date');
        
        if (checkInInput) {
            checkInInput.min = today;
        }

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('guest-name').value.trim();
            const phone = document.getElementById('guest-phone').value.trim();
            const guests = document.getElementById('guest-count').value.trim();
            const roomType = document.getElementById('room-type').value;
            const checkIn = document.getElementById('check-in-date').value;
            const whatsappNumber = document.querySelector('input[name="whatsapp-contact"]:checked').value;
            
            // Format dates for display (e.g. YYYY-MM-DD -> DD/MM/YYYY)
            const formatDate = (dateStr) => {
                if (!dateStr) return '';
                const parts = dateStr.split('-');
                if (parts.length === 3) {
                    return `${parts[2]}/${parts[1]}/${parts[0]}`;
                }
                return dateStr;
            };

            const formattedCheckIn = formatDate(checkIn);

            // Construct structured message
            const message = `Hi, I would like to book a room at Devgiri Residency.\n\nMy Details:\n- Name: ${name}\n- Phone: ${phone}\n- Number of People: ${guests}\n- Check-in Date: ${formattedCheckIn}\n- Room Type: ${roomType}`;
            
            // Encode message and open WhatsApp URL
            const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // 5. Language Switcher & Google Translate Sync
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        const storedLang = localStorage.getItem('selected_language') || 'en';
        langSwitcher.value = storedLang;

        const setGoogleTranslateLanguage = (langCode) => {
            const googleSelect = document.querySelector('.goog-te-combo');
            if (googleSelect) {
                googleSelect.value = langCode;
                googleSelect.dispatchEvent(new Event('change'));
                return true;
            }
            return false;
        };

        langSwitcher.addEventListener('change', () => {
            const langCode = langSwitcher.value;
            localStorage.setItem('selected_language', langCode);
            
            if (!setGoogleTranslateLanguage(langCode)) {
                let retries = 0;
                const interval = setInterval(() => {
                    if (setGoogleTranslateLanguage(langCode) || retries++ > 10) {
                        clearInterval(interval);
                    }
                }, 200);
            }
        });

        // Apply stored language once Google Translate is loaded
        if (storedLang !== 'en') {
            let retries = 0;
            const interval = setInterval(() => {
                if (setGoogleTranslateLanguage(storedLang) || retries++ > 15) {
                    clearInterval(interval);
                }
            }, 300);
        }
    }

});
