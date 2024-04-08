const showAllProjects = document.querySelector('.btn-show-projects')
const hiddenProjects = document.querySelectorAll('.project:not(.active)')

function allProjects() {
    hiddenProjects.forEach(item => {
        item.classList.add('active')
    })
    showAllProjects.style.visibility = 'hidden'
}

showAllProjects.addEventListener('click', allProjects)