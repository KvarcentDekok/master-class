import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.ru';

const telInputs = document.querySelectorAll('input[type="tel"]');

function makePhoneMask(input) {
    const cleavePhone = new Cleave(input, {
        phone: true,
        phoneRegionCode: 'ru',
        prefix: '+7',
        noImmediatePrefix: true,
    });
}

function inputMask() {
    for (let i = 0; i < telInputs.length; i++) {
        makePhoneMask(telInputs[i]);
    }
}

export default inputMask;