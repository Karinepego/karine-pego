document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
    
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

    const imageButton = document.querySelector(".hero-image-button");
    const imageModal = document.getElementById("image-modal");
    const imageModalClose = document.querySelector(".image-modal-close");

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
        if (event.target === imageModal) {
            closeImageModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && imageModal.open) {
            closeImageModal();
            imageButton.focus();
        }
    });

    const contatoButtons = document.querySelectorAll(".contato-btn");

    contatoButtons.forEach(button => {
        button.addEventListener("click", function() {
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=karinepegoribeiro45@gmail.com&su=Visitei seu portifólio&body=Olá, Karine! Tudo bem? Venho por meio deste email te contatar para ", "_blank");
        });
    });
});
