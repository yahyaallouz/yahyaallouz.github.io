document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Script v14 Loaded - EmailJS Key: zrYW...");

    // Navigation Logic
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const overlay = document.querySelector(".menu-overlay");
    const icon = hamburger ? hamburger.querySelector("i") : null;
    const links = document.querySelectorAll(".nav-links a");

    function toggleMenu() {
        if (!hamburger || !navLinks || !overlay) return;
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");

        if (hamburger.classList.contains("active")) {
            if (icon) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            }
            document.body.style.overflow = "hidden"; // Prevent scrolling
        } else {
            if (icon) {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
            document.body.style.overflow = "auto";
        }
    }

    function closeMenu() {
        if (!hamburger || !navLinks || !overlay) return;
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        if (icon) {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
        document.body.style.overflow = "auto";
    }

    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }

    if (overlay) {
        overlay.addEventListener("click", closeMenu);
    }

    links.forEach(n => n.addEventListener("click", closeMenu));

    // EmailJS Logic
    const contactForm = document.querySelector(".contact-form");
    const successModal = document.getElementById("successModal");

    // Initialize EmailJS with Public Key
    // REPLACE 'YOUR_PUBLIC_KEY' WITH YOUR ACTUAL PUBLIC KEY FROM EMAILJS DASHBOARD
    if (typeof emailjs !== 'undefined') {
        emailjs.init("YOUR_PUBLIC_KEY");
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            // REPLACE 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID'
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(function () {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    contactForm.reset();
                    showModal();
                }, function (error) {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    alert('Failed to send message: ' + JSON.stringify(error));
                });
        });
    }

    // Modal Functions
    window.showModal = function () {
        if (successModal) successModal.classList.add("active");
    }

    window.closeModal = function () {
        if (successModal) successModal.classList.remove("active");
    }
});
