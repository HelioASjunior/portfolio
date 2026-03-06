const navLinks = document.querySelectorAll(".nav-list a");
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
    const scrollY = window.scrollY + 150;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        const link = document.querySelector(`.nav-list a[href="#${id}"]`);
        if (!link) return;

        if (scrollY >= top && scrollY < top + height) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();
