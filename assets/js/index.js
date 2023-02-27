//Adiciona ou remove a classe scroll na tela;
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navigation");

    if (scrollY > 0) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
});

//Adiciona ou remove a classe show na tela;
window.addEventListener("scroll", () => {
    const backToTopButton = document.getElementById("backToTopButton");

    if (scrollY > 700) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

//Adiciona a classe active de acordo com a seção;
const home = document.getElementById("home");
const services = document.getElementById("services");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const depositions = document.getElementById("depositions");

const scrollMenuSelected = () => {
    activeMenuAtCurrentSection(home);
    activeMenuAtCurrentSection(services);
    activeMenuAtCurrentSection(about);
    activeMenuAtCurrentSection(contact);
};

window.addEventListener("scroll", scrollMenuSelected);

const activeMenuAtCurrentSection = (section) => {
    const targetLine = scrollY + innerHeight / 2;

    //Verificar se a seção passou da linha;
    const sectionTop = section.offsetTop; //offsetTop pega o valor do top da seção;
    const sectionHeight = section.offsetHeight; //offsetHeight pega o valor da altura da seção;

    //O topo da seção chegou ou ultrapassou a linha alto;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    //Verificar se a base está abaixo da linha alvo;
    //A seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    //limites da seção;
    const sectionBoundaries =
        sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute("id");

    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove("active");

    if (sectionBoundaries) {
        menuElement.classList.add("active");
    }
};

//Abir o menu;
const button = document.getElementById("button");
const body = document.body;

button.addEventListener("click", () => {
    body.classList.add("menu-expanded");
});

//Fechar o menu;
const btnCloseMenu = document.getElementById("close-menu");
const buttonWhatsappMenu = document.getElementById("buttonWhats");
const logo = document.querySelector(".logo");
const menuItem = document.querySelectorAll(".menu-item");

const closeMenu = () => {
    body.classList.remove("menu-expanded");
};

btnCloseMenu.addEventListener("click", closeMenu);
buttonWhatsappMenu.addEventListener("click", closeMenu);
logo.addEventListener("click", closeMenu);

menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        body.classList.remove("menu-expanded");
    });
});

//Scroll Reveal;
ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700
}).reveal(`#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);
