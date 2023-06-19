const rightSlider = document.getElementById('footer-carousel-right-slider');
const leftSlider = document.getElementById('footer-carousel-left-slider')
const carousel = document.getElementById('footer-carousel');
const sliderLength = carousel.querySelectorAll('div').length;

rightSlider.addEventListener('click', () => changeSlide ('right'));
leftSlider.addEventListener('click', () => changeSlide('left'));


const initialSliderIndex = Math.floor((sliderLength / 2) - 1);
let currentSliderIndex = initialSliderIndex
console.log(currentSliderIndex);

const changeSlide = (direction) => {
    if (direction === 'right') {
        console.log(currentSliderIndex);
        if (currentSliderIndex < sliderLength-3 ){
            currentSliderIndex ++
            carousel.style.transition = 'transform 1s'
        } else {
            currentSliderIndex = initialSliderIndex;
            carousel.style.transition = 'transform 1.5s'
        }
    }

    if (direction === 'left') {
        if (currentSliderIndex === 0 ){
            currentSliderIndex = initialSliderIndex;
            carousel.style.transition = 'transform 1.5s'
        }
        else if (currentSliderIndex > 0 ){
            currentSliderIndex --;
            carousel.style.transition = 'transform 1s'
        }
    }
    carousel.style.transform = `translateX(calc(-400px * ${currentSliderIndex}))`
}

