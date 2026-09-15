<<<<<<< HEAD
// Portfolio JavaScript

console.log("Portfolio loaded successfully!");


// Highlight navigation link while scrolling

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "white";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#c084fc";
        }

    });

=======
// Portfolio JavaScript

console.log("Portfolio loaded successfully!");


// Highlight navigation link while scrolling

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "white";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#c084fc";
        }

    });

>>>>>>> 4e05b64895f90d685b8debb648d1d23de7a8bd93
});