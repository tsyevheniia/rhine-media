const navbar = document.querySelector(".navBar");
const burgerBtn = document.querySelector(".burgerBtn");
const burgerIcon = burgerBtn.querySelector("i");
const mobileMenu = document.querySelector(".mobileMenu");
const faqItems = document.querySelectorAll(".faqItem");
const messageForm = document.querySelector(".messageForm");

faqItems.forEach(item => {
    const question = item.querySelector(".faqQuestion");
    const icon = item.querySelector(".faqQuestion span");

    question.addEventListener("click", () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
                otherItem.querySelector(".faqQuestion span").innerHTML =
                    '<i class="bi bi-caret-down-fill"></i>';
            }
        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            icon.innerHTML = '<i class="bi bi-caret-up-fill"></i>';
        } else {
            icon.innerHTML = '<i class="bi bi-caret-down-fill"></i>';
        }
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("noScroll");

    if (mobileMenu.classList.contains("active")) {
        burgerIcon.classList.remove("bi-list");
        burgerIcon.classList.add("bi-x-lg");
    } else {
        burgerIcon.classList.remove("bi-x-lg");
        burgerIcon.classList.add("bi-list");
    }
});

if (messageForm) {
    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();

        messageForm.classList.add("wasSubmitted");

        if (messageForm.checkValidity()) {
            messageForm.reset();
            messageForm.classList.remove("wasSubmitted");
        }
    });
}

const animatedElements = document.querySelectorAll(".fadeUp");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach((element) => {
    observer.observe(element);
});