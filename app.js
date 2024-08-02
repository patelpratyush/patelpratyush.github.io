// Variables and Functions

let isModalOpen = false;
let contrastToggle = true; // Default to dark mode
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList.add("modal__overlay--visible");
    emailjs
        .sendForm(
            "service_o60vhrh",
            "template_68g73sg",
            event.target,
            "flrgfS_1a5y35U1C1"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on patelpratyush28@gmail.com"
            );
        });
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove("modal--open");
    } else {
        isModalOpen = true;
        document.body.classList.add("modal--open");
    }
}

// Initialize

document.addEventListener("DOMContentLoaded", () => {
    if (contrastToggle) {
        document.body.classList.add("dark-theme");
    }
});
