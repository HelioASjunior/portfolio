const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenSelectors = [
    ".hidden-left",
    ".hidden-left-swiper",
    ".hidden-right",
    ".hidden",
    ".hidden-curriculo",
];

document.querySelectorAll(hiddenSelectors.join(", ")).forEach((element) => {
    observer.observe(element);
});
