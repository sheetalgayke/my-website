function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}


/* ---------- MOBILE MENU ---------- */
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("open");
}

/* ---------- SMOOTH SCROLL ---------- */
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

/* ---------- SCROLL REVEAL ---------- */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach((elem) => {
        let position = elem.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 120) {
            elem.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ---------- ACTIVE NAV LINK ---------- */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active-link");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active-link");
        }
    });
});
