import Swiper, {Navigation, Autoplay} from 'swiper';

export function initSliderMain() {
    const sliderMain = new Swiper('#main-slider', {
        modules: [Navigation, Autoplay],
        spaceBetween: 30,
        slidesPerView: 'auto',
        lazy: true,
        autoplay: {
            delay: 8000
        },
        navigation: {
            nextEl: '.slider__control.intro__slider-control.slider__control--right',
            prevEl: '.slider__control.intro__slider-control.slider__control--left',
            disabledClass: 'slider__control--disabled'
        }
    });
}

export function initSliderAwards() {
    const sliderAwards = new Swiper('#awards-slider', {
        modules: [Navigation],
        spaceBetween: 10,
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.slider__control.awards__slider-control.slider__control--right',
            prevEl: '.slider__control.awards__slider-control.slider__control--left',
            disabledClass: 'slider__control--disabled'
        }
    });
}