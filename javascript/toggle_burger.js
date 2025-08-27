const burgerMenuElement = document.querySelector(".burger_menu");
const headerNavElement = document.querySelector("header nav");

function toggleBurgerMenu() {
    burgerMenuElement.classList.toggle("open");
    headerNavElement.classList.toggle("open");

    console.log(headerNavElement.classList);
    
}

export { burgerMenuElement, toggleBurgerMenu };
