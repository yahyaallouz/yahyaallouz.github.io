document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const overlay = document.querySelector(".menu-overlay");
    const icon = hamburger.querySelector("i");
    const links = document.querySelectorAll(".nav-links a");

    function toggleMenu() {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");

        if (hamburger.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            document.body.style.overflow = "auto";
        }
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        document.body.style.overflow = "auto";
    }

    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }
    
    if (overlay) {
        overlay.addEventListener("click", closeMenu);
    }

    links.forEach(n => n.addEventListener("click", closeMenu));
});
