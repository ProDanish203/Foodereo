window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
});

window.addEventListener("click", (e) => {
    if(e.target.id != "nav" && e.target.id != "menu"){
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-times");
        nav.classList.remove("active");
    }
});
window.addEventListener("scroll", () => {
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-times");
    nav.classList.remove("active");
})