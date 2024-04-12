let list = document.querySelector(".mySwiper")
let myLi = ''

async function showAll(itensArray) {
    myLi = ''

    itensArray.forEach(item => {
        myLi += `
        <swiper-slide>
                    <div class="project">
                        <a href=${item.href} target="_blank">
                            <img src=${item.src} class="swiper-img" />
                            <h3 class="project-h3">${item.name}</h3>
                            <div class="infos-project">
                                <p>${item.detail}</p>
                                <p class="p-reposit">🔗 Ver Repositório no GitHub</p>
                            </div>
                        </a>
                    </div>
                </swiper-slide>
            `

    })
    list.innerHTML = myLi
}
