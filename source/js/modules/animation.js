import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const equipmentCards = document.querySelectorAll('#equipment .card--expandable');

export function productionAnimation() {
    gsap.from('.card--sausage', {
        scrollTrigger: {
            trigger: '#production',
            start: `top 100%`,
            end: '+=500',
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        x: -500,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from('.card--cheese', {
        scrollTrigger: {
            trigger: '#production',
            start: `top 100%`,
            end: '+=500',
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        x: 500,
        opacity: 0,
        ease: "power1.inOut"
    });
}

export function equipmentAnimation() {
    gsap.from(equipmentCards[0], {
        scrollTrigger: {
            trigger: '#equipment',
            start: `top 100%`,
            end: '+=500',
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        x: -500,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from(equipmentCards[1], {
        scrollTrigger: {
            trigger: '#equipment',
            start: `top 100%`,
            end: '+=500',
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        y: 300,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from(equipmentCards[2], {
        scrollTrigger: {
            trigger: '#equipment',
            start: `top 100%`,
            end: '+=500',
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        y: 300,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from(equipmentCards[3], {
        scrollTrigger: {
            trigger: '#equipment',
            start: `top 100%`,
            end: '+=500',
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        x: 500,
        opacity: 0,
        ease: "power1.inOut"
    });
}

export function featuresAnimation() {
    gsap.from('#features', {
        scrollTrigger: {
            trigger: '#features',
            start: `top 100%`,
            end: '+=500',
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        scale: 0,
        opacity: 0,
        ease: "power1.inOut"
    });
}