/* =========================================
   RajeshDigitalDev
   Professional Portfolio JavaScript
   ========================================= */


/* ===== CURRENT YEAR ===== */

const footerText = document.querySelector(".footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} RajeshDigitalDev. All Rights Reserved.`;
}


/* ===== NAVIGATION ACTIVE LINK ===== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });
}

window.addEventListener(
    "scroll",
    updateActiveLink
);


/* ===== SMOOTH SCROLL ===== */

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ===== SCROLL REVEAL ===== */

const revealElements = document.querySelectorAll(
    ".skill-card, .service-card, .project-card"
);

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ===== PROJECT LINKS ===== */

const projectLinks =
    document.querySelectorAll(".project-link");

projectLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const linkTarget =
                link.getAttribute("href");

            if (
                !linkTarget ||
                linkTarget === "#"
            ) {

                event.preventDefault();

                alert(
                    "This project link will be updated soon."
                );

            }

        }
    );

});


/* ===== CONTACT BUTTONS ===== */

const contactButtons =
    document.querySelectorAll(
        ".contact-buttons .btn"
    );

contactButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            console.log(
                "Contact button clicked:",
                button.textContent.trim()
            );

        }
    );

});


/* ===== WELCOME MESSAGE ===== */

console.log(
    "Welcome to RajeshDigitalDev!"
);
/* ===== MOBILE MENU ===== */

const menuToggle =
    document.getElementById("menu-toggle");

const navigation =
    document.querySelector(".nav-links");


if (menuToggle && navigation) {

    menuToggle.addEventListener(
        "click",
        function () {

            navigation.classList.toggle("show");

            if (
                navigation.classList.contains("show")
            ) {

                menuToggle.textContent = "✕";
                menuToggle.setAttribute(
                    "aria-label",
                    "Close navigation menu"
                );

            } else {

                menuToggle.textContent = "☰";
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }
    );


    /* Close menu after clicking a link */

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navigation.classList.remove("show");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }
        );

    });

}