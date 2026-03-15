const projects = {
    trabalhos: [
        { name: "PDF Xino Convert", tech: "Frontend Web App | React 18 + Vite + Tailwind + PDF Processing", img: "pdf-xino-convert.webp", repo: "https://github.com/HelioASjunior/pdf-xino-convert", deploy: "https://pdfxino.com.br/" },
        { name: "Pentest Simulation Kali", tech: "Cybersecurity | Kali Linux | Pentest Simulation", img: "pentest-simulation-kali.webp", repo: "https://github.com/HelioASjunior/pentest-simulation-kali", deploy: null },
        { name: "CRM - Escritório Jurídico", tech: "Sistema Web | CRM para Gestão Jurídica", img: "crm-juridico.webp", repo: "https://github.com/HelioASjunior/crm-escritorio-juridico", deploy: null },
        { name: "Civil EngAICalc", tech: "Engenharia Civil | Cálculos Assistidos por IA", img: "engaicalc.webp", repo: "https://github.com/HelioASjunior/CivilEngAI-Calc", deploy: null },
        { name: "Game Underworld Hero", tech: "Game Development | HTML, CSS e JavaScript", img: "UnderworldHero.webp", repo: "https://github.com/HelioASjunior/UnderWorldHero-Game", deploy: null },
        { name: "Malware Analysis (Estudo)", tech: "Cybersecurity | Estudo de Análise de Malware", img: "Malware Analysis.webp", repo: "https://github.com/HelioASjunior/Malware-Analysis-Study", deploy: null },
        { name: "Wallpaper Animado Steam \"Tema Dev\"", tech: "Python | Wallpaper Engine | Tema Dev", img: "wallpapersteam.webp", repo: "https://github.com/HelioASjunior/Python-Dev-Wallpaper", deploy: "https://steamcommunity.com/sharedfiles/filedetails/?id=3681459754&snr=___" },
        { name: "Estudo Fast API", tech: "Python | FastAPI | Estudos", img: "Estudo_Fast_Api.webp", repo: "https://github.com/HelioASjunior/FastAPI-Estudo", deploy: null },
        { name: "Portifólio Github", tech: "Portifólio | Repositórios e Projetos", img: "portifolio.webp", repo: "https://github.com/HelioASjunior", deploy: null },
    ],
    certificados: [
        { name: "Administrando Banco de Dados", tech: "Certificado", img: "Administrando Banco de Dados.jpg", folder: "certificados" },
        { name: "AWS Simulearn - Generative AI Practitioner", tech: "Certificado", img: "AWS Simulearn - Generative AI Practitioner.jpg", folder: "certificados" },
        { name: "Cibersegurança", tech: "Certificado", img: "Cibersegurança.jpg", folder: "certificados" },
        { name: "Hacking Ético - Vulnerabilidades e Testes de Invasão", tech: "Certificado", img: "Hacking Ético - Vulnerabilidades e Testes de Invasão.jpg", folder: "certificados" },
        { name: "LGPD", tech: "Certificado", img: "LGPD.jpg", folder: "certificados" },
        { name: "Engenheiro de Agentes de IA", tech: "Certificado", img: "Engenheiro de Agentes de IA.png", folder: "certificados" },
        { name: "Git e Github- Controle de Versão e Colaboração", tech: "Certificado", img: "Git e Github- Controle de Versão e Colaboração.png", folder: "certificados" },
    ],
};

function renderSlide(project) {
    let buttons = "";
    const imageFolder = project.folder || "mockups";
    const isCertificateCard = imageFolder === "certificados";
    const imagePath = project.img
        ? `./assets/${imageFolder}/${project.img}`
        : null;

    if (project.repo) {
        buttons += `<a class="btn-repo" href="${project.repo}" target="_blank" rel="noopener noreferrer">Repositório</a>`;
    }
    if (project.deploy) {
        buttons += `<a class="btn-deploy" href="${project.deploy}" target="_blank" rel="noopener noreferrer">Ver Deploy</a>`;
    }
    if (project.folder === "certificados" && imagePath) {
        buttons += `<button class="btn-deploy btn-certificado-imagem" type="button" data-image="${imagePath}" data-title="${project.name}">Ampliar</button>`;
    }
    if (project.pdf) {
        buttons += `<button class="btn-deploy btn-certificado" type="button" data-pdf="./assets/certificados/${project.pdf}" data-title="${project.name}">Ver Certificado</button>`;
    }

    const mediaMarkup = imagePath
        ? `<img class="swiper-img" loading="lazy" src="${imagePath}" alt="${project.name}" />`
        : `<div class="pdf-thumb" aria-label="Certificado em PDF"><i class="fas fa-file-pdf"></i><span>PDF</span></div>`;

    const fixedTitleMarkup = isCertificateCard
        ? ""
        : `<h3 class="project-h3">${project.name}</h3>`;

    const hoverText = isCertificateCard ? project.name : project.tech;

    return `
        <swiper-slide>
            <div class="project">
                ${mediaMarkup}
                ${fixedTitleMarkup}
                <div class="infos-project">
                    <p>${hoverText}</p>
                    <div class="project-buttons">${buttons}</div>
                </div>
            </div>
        </swiper-slide>`;
}

function renderProjects() {
    const swipers = document.querySelectorAll(".mySwiper");
    const categories = ["trabalhos", "certificados"];

    swipers.forEach((swiper, index) => {
        const category = categories[index];
        if (projects[category]) {
            swiper.innerHTML = projects[category].map(renderSlide).join("");
        }
    });
}

renderProjects();

function setupCertificateModal() {
    const modal = document.getElementById("certificate-modal");
    const iframe = document.getElementById("certificate-iframe");
    const image = document.getElementById("certificate-image");
    const title = document.getElementById("certificate-title");
    const closeBtn = document.getElementById("certificate-close");

    if (!modal || !iframe || !image || !title || !closeBtn) {
        return;
    }

    document.addEventListener("click", (event) => {
        const imageTrigger = event.target.closest(".btn-certificado-imagem");
        if (imageTrigger) {
            const imagePath = imageTrigger.dataset.image;
            const certTitle = imageTrigger.dataset.title || "Certificado";
            if (!imagePath) {
                return;
            }

            image.src = imagePath;
            image.style.display = "block";
            iframe.style.display = "none";
            iframe.src = "";
            title.textContent = certTitle;
            modal.classList.add("is-open");
            document.body.style.overflow = "hidden";
            return;
        }

        const trigger = event.target.closest(".btn-certificado");
        if (trigger) {
            const pdfPath = trigger.dataset.pdf;
            const certTitle = trigger.dataset.title || "Certificado";
            if (!pdfPath) {
                return;
            }

            image.style.display = "none";
            image.src = "";
            iframe.style.display = "block";
            iframe.src = pdfPath;
            title.textContent = certTitle;
            modal.classList.add("is-open");
            document.body.style.overflow = "hidden";
            return;
        }

        const backdrop = event.target.closest(".certificate-modal");
        if (backdrop && event.target === backdrop) {
            closeCertificateModal();
        }
    });

    closeBtn.addEventListener("click", closeCertificateModal);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeCertificateModal();
        }
    });

    function closeCertificateModal() {
        modal.classList.remove("is-open");
        iframe.src = "";
        image.src = "";
        document.body.style.overflow = "";
    }
}

setupCertificateModal();
