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
            nextEl: '.slider__control.slider__control--right',
            prevEl: '.slider__control.slider__control--left',
            disabledClass: 'slider__control--disabled'
        }
    });
}