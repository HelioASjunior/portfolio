const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

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
