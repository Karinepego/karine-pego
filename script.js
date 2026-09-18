document.addEventListener("DOMContentLoaded", () => {
    // --- 1. TEMA ESCURO ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
    
    if (themeToggleBtn) {
        const iconMoon = '<i class="fa-regular fa-moon"></i>';
        const iconSun = '<i class="fa-regular fa-sun" style="color: rgb(244, 244, 244);"></i>';

        const savedTheme = localStorage.getItem("theme");
        
        if (savedTheme === "dark") {
            body.classList.add("dark-mode");
            themeToggleBtn.innerHTML = iconSun;
        } else {
            themeToggleBtn.innerHTML = iconMoon;
        }

        themeToggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            if (body.classList.contains("dark-mode")) {
                themeToggleBtn.innerHTML = iconSun;
                localStorage.setItem("theme", "dark");
            } else {
                themeToggleBtn.innerHTML = iconMoon;
                localStorage.setItem("theme", "light");
            }
        });
    }

    // --- 2. MODAL DA IMAGEM ---
    const imageButton = document.querySelector(".hero-image-button");
    const imageModal = document.getElementById("image-modal");
    const imageModalClose = document.querySelector(".image-modal-close");

    // Verifica se a imagem existe na página antes de aplicar o código
    if (imageButton && imageModal && imageModalClose) {
        const closeImageModal = () => {
            imageModal.close();
            body.style.overflow = "";
        };

        imageButton.addEventListener("click", () => {
            imageModal.showModal();
            body.style.overflow = "hidden";
            imageModalClose.focus();
        });

        imageModalClose.addEventListener("click", closeImageModal);
        imageModal.addEventListener("click", (event) => {
            if (event.target === imageModal) closeImageModal();
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && imageModal.open) {
                closeImageModal();
                imageButton.focus();
            }
        });
    }

    // --- 3. BOTÕES DE CONTATO ---
    const contatoButtons = document.querySelectorAll(".contato-btn");
    if (contatoButtons.length > 0) {
        contatoButtons.forEach(button => {
            button.addEventListener("click", function() {
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=karinepegoribeiro45@gmail.com&su=Visitei seu portifólio&body=Olá, Karine! Tudo bem? Venho por meio deste email te contatar para ", "_blank");
            });
        });
    }

    // --- 4. MENU HAMBÚRGUER ---
    const mobileBtn = document.getElementById('mobile-btn');
    const navWrapper = document.getElementById('nav-wrapper');
    
    // Verifica se o botão do menu existe na página
    if (mobileBtn && navWrapper) {
        const mobileBtnIcon = mobileBtn.querySelector('i');

        mobileBtn.addEventListener('click', () => {
            navWrapper.classList.toggle('active');
            
            if (navWrapper.classList.contains('active')) {
                mobileBtnIcon.classList.remove('fa-bars');
                mobileBtnIcon.classList.add('fa-xmark');
            } else {
                mobileBtnIcon.classList.remove('fa-xmark');
                mobileBtnIcon.classList.add('fa-bars');
            }
        });

        const menuLinks = navWrapper.querySelectorAll('nav a, .btn-primary');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navWrapper.classList.remove('active');
                mobileBtnIcon.classList.remove('fa-xmark');
                mobileBtnIcon.classList.add('fa-bars');
            });
        });
    }
});