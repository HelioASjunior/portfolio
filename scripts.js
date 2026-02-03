const swiperContainer = document.querySelector(".mySwiper");

function renderProjects() {
    const slides = projects.map((project) => `
        <swiper-slide>
            <div class="project">
                <a href="${project.href}" target="_blank">
                    <img src="${project.src}" class="swiper-img" />
                    <h3 class="project-h3">${project.name}</h3>
                    <div class="infos-project">
                        <p>${project.detail}</p>
                        <p class="p-reposit">🔗 Ver Repositório no GitHub</p>
                    </div>
                </a>
            </div>
        </swiper-slide>
    `).join("");

    swiperContainer.innerHTML = slides;
}

renderProjects();
