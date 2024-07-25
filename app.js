const previousButtonDom = document.querySelector('.previous-button');
const nextButtonDom = document.querySelector('.next-button');
const mainContainerDom = document.querySelector('.main-container ')
const sliderDom = document.querySelector('.slider');


nextButtonDom.onclick = function () {
    changeCarouselImage('nextButton')
}

previousButtonDom.onclick = function () {
    changeCarouselImage('previousButton');

}



const changeCarouselImage = function (buttonName) {
    console.log(buttonName);

    let carouselContainerDom = document.querySelector('.carousel-container');

    let carouselItemDoms = document.querySelectorAll('.carousel-item')
    let sliderItemDoms = document.querySelectorAll('.slider-item');


    if (buttonName === 'nextButton') {
        carouselContainerDom.appendChild(carouselItemDoms[0]);

        sliderDom.appendChild(sliderItemDoms[0]);

        mainContainerDom.classList.add('next');
        setTimeout(() => {
            mainContainerDom.classList.remove('next');
        }, 2000);

    }
    if (buttonName === 'previousButton') {
        const lastPosition = carouselItemDoms.length - 1;
        carouselContainerDom.prepend(carouselItemDoms[lastPosition]);

        sliderDom.prepend(sliderItemDoms[lastPosition]);

        mainContainerDom.classList.add('previous');
        setTimeout(() => {
            mainContainerDom.classList.remove('previous');
        }, 2000);
    }



}