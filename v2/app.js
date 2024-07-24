//template_0l39ewb
//service_5pfyxcu
//OGVq5jbZr4x4aaLdm
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape"); //this returns an array
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1; //if isOdd is true, its -1, if not its 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme" //this adds another class onto the body

    } else {
        document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            "sservice_x3rcr8q",
            "template_68g73sg",
            event.target,
            "flrgfS_1a5y35U1C1"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on patelpratyush28@gmail.com"
            );
        })
}



function toggleModal() {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    //toggle the modal
    document.body.classList += " modal--open"
    
}

