import Swiper, {Navigation, Autoplay, Thumbs, Grid, FreeMode} from 'swiper';

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

export function initSliderGallery() {
    const sliderThumbs = new Swiper('#gallery-thumbs', {
        modules: [Grid, Navigation],
        spaceBetween: 10,
        slidesPerView: 5,
        lazy: true,
        slideToClickedSlide: true,
        watchSlidesProgress: true,
        grid: {
            fill: 'row',
            rows: 2,
        },
        breakpoints: {
            900: {
                grid: false
            }
        }
    });

    const sliderPresentation = new Swiper('#gallery-presentation', {
        modules: [Navigation, Thumbs],
        spaceBetween: 30,
        slidesPerView: 1,
        lazy: true,
        navigation: {
            nextEl: '.slider__control.gallery__slider-control.slider__control--right',
            prevEl: '.slider__control.gallery__slider-control.slider__control--left',
            disabledClass: 'slider__control--disabled'
        },
        thumbs: {
            swiper: sliderThumbs,
            slideThumbActiveClass: 'gallery__thumb--active'
        }
    });
}

export function initScrollTable() {
    const tableScroll = new Swiper("#table-scroll", {
        modules: [FreeMode],
        direction: 'horizontal',
        slidesPerView: 'auto',
        freeMode: true
    });
}

export function initRowPhotos() {
    const sliderRowPhotos = new Swiper('#row-photos', {
        modules: [Autoplay],
        spaceBetween: 15,
        slidesPerView: 2,
        lazy: true,
        autoplay: {
            enabled: false
        },
        breakpoints: {
            900: {
                spaceBetween: 25,
                slidesPerView: 3,
                loop: true,
                autoplay: {
                    enabled: true,
                    delay: 0
                },
                speed: 5000,
            },
            1280: {
                spaceBetween: 25,
                slidesPerView: 4,
                loop: true,
                autoplay: {
                    enabled: true,
                    delay: 0
                },
                speed: 5000,
            }
        }
    });
}

export function initRelatedEquipment() {
    const sliderRelatedEquipment = new Swiper('#related-equipment', {
        slidesPerView: 2,
        spaceBetween: 20,
        lazy: true,
        breakpoints: {
            900: {
                slidesPerView: 3
            },
            1260: {
                slidesPerView: 6
            }
        }
    });
}

export function initPreviouslyViewed() {
    const sliderPreviouslyViewed = new Swiper('#previously-viewed', {
        slidesPerView: 2,
        spaceBetween: 20,
        lazy: true,
        breakpoints: {
            900: {
                slidesPerView: 3
            },
            1260: {
                slidesPerView: 6
            }
        }
    });
}