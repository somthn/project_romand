// const slides = document.querySelector('.main-best-item-slider');
// let index = 0;

// function nextSlide(){
//     index = (index + 1) % 2;
//     slides.style.transform = `translateX(-${index * 100}%)`
// }

// setInterval(nextSlide, 3000);

const slides = document.querySelectorAll('.slider-item');
let index = 0;

slides[index].classList.add('active');

function showNextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(showNextSlide, 4000);