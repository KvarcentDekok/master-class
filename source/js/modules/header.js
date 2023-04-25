import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CLASSNAME_EXPANDED = 'header--expanded';
const ToggleText = {
    Expanded: 'Свернуть меню',
    Minimized: 'Развернуть меню'
}

const headerElement = document.querySelector('.header');
const headerToggle = headerElement.querySelector('.header__toggle');
const headerToggleText = headerToggle.querySelector('.header__toggle-text');

function onToggleClick() {
    headerElement.classList.toggle(CLASSNAME_EXPANDED);

    if (headerElement.classList.contains(CLASSNAME_EXPANDED)) {
        headerToggle.setAttribute('aria-expanded', 'true');
        headerToggleText.textContent = ToggleText.Expanded;
    } else {
        headerToggle.setAttribute('aria-expanded', 'false');
        headerToggleText.textContent = ToggleText.Minimized;
    }
}

function header() {
    headerToggle.addEventListener('click', () => {
        onToggleClick();
    });

    ScrollTrigger.create({
        start: 'top -223',
        end: 99999,
        toggleClass: {className: 'header--fixed', targets: '.header'}
    });
}

export default header;