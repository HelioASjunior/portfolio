const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elementsLeft = document.querySelectorAll('.hidden-left')
elementsLeft.forEach((element) => {
    myObserver.observe(element)
})

const elementsRight = document.querySelectorAll('.hidden-right')
elementsRight.forEach((element) => {
    myObserver.observe(element)
})

const containers = document.querySelectorAll('.hidden')
containers.forEach((container) => {
    myObserver.observe(container)
})