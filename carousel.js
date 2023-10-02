
const row = document.querySelector('.row')
const tabs = Array.from(row.children);

const width = tabs[0].getBoundingClientRect().width;
tabs.forEach((tab, index) => {
    tab.style.left = width * index + 'px'
})
moveSlide = (targetSlide, currentSlide, currentDot, targetDot) => {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let moveWidth = '-' + targetSlide.style.left;
    tabs.forEach((tab) => {
        tab.style.transform = `translateX(${moveWidth})`;
        tab.style.transition = `all 0.5s linear`
    })
    if (targetSlide.nextElementSibling === null) {
        next.style.display = 'none';
        prev.style.display = 'block'
    }
    else if (targetSlide.previousElementSibling === null) {
        prev.style.display = 'none';
        next.style.display = 'block';
    }
    else {
        next.style.display = 'block';
        prev.style.display = 'block'
    }
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
    currentDot.classList.remove('currentDot');
    targetDot.classList.add('currentDot');
}
document.querySelector('.next').addEventListener('click', (e) => {
    let currentSlide = document.querySelector('.currentSlide');
    let currentDot = document.querySelector('.currentDot');
    let nextDot = currentDot.nextElementSibling;
    let nextSlide = currentSlide.nextElementSibling;
    moveSlide(nextSlide, currentSlide, currentDot, nextDot)
})
document.querySelector('.prev').addEventListener('click', (e) => {

    let currentSlide = document.querySelector('.currentSlide');
    let previousSlide = currentSlide.previousElementSibling;
    let currentDot = document.querySelector('.currentDot');
    let previousDot = currentDot.previousElementSibling;
    moveSlide(previousSlide, currentSlide, currentDot, previousDot)
})

const carouselDots = document.querySelectorAll('.carouselDot');

carouselDots.forEach((carouselDot, index) => {
    carouselDot.addEventListener('click', (e) => {
        let currentDot = document.querySelector('.currentDot');
        let currentSlide = document.querySelector('.currentSlide');
        let targetSlide = tabs[index];
        currentDot.classList.remove('currentDot')
        moveSlide(targetSlide, currentSlide, currentDot, e.target)
    })
})