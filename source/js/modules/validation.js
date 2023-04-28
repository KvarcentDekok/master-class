const InvalidMessage = {
    PhoneMismatch: 'Укажите корректный номер телефона',
    ValueMissing: 'Это поле обязательно для заполнения'
}

const forms = document.querySelectorAll('form');
const listenersControl = {};

function onFormSubmit(evt) {
    const form = evt.target;
    const controls = form.querySelectorAll('input');

    let firstInvalid = false;

    window.stopSubmit = false;

    for (let i = 0; i < controls.length; i++) {
        if (controls[i].checkValidity() === false) {
            styleInvalid(controls[i]);

            if (!listenersControl[controls[i].id]) {
                controls[i].addEventListener('input', onControlInput);

                listenersControl[controls[i].id] = true;
            }

            window.stopSubmit = true;

            if (!firstInvalid) {
                firstInvalid = true;
                controls[i].focus();
            }
        }
    }

    if (window.stopSubmit) {
        evt.preventDefault();
    }
}

function onControlInput(evt) {
    const control = evt.target;
    const messageInvalid = control.parentNode.querySelector('.invalid-element');

    if (control.checkValidity() === false) {
        styleInvalid(control);
    } else {
        if (messageInvalid) {
            messageInvalid.remove();
            control.setAttribute('aria-invalid', 'false');
            control.removeAttribute('aria-errormessage');
        }
    }
}

function CustomValidation() {}

function styleInvalid(control) {
    const customValidation = new CustomValidation();
    const messageInvalid = control.parentNode.querySelector('.invalid-element');

    customValidation.invalidities = [];
    customValidation.checkValidity(control);

    let customValidityMessage;

    if (!messageInvalid) {
        customValidityMessage = customValidation.getInvalidities();
        control.setAttribute('aria-invalid', 'true');
        control.setAttribute('aria-errormessage', control.id + '-error');
        control.parentNode.insertAdjacentHTML(
            'beforeend',
            `<p class="invalid-element" id="${control.id}-error" aria-live="polite">${customValidityMessage}</p>`
        );
    } else {
        customValidityMessage = customValidation.getInvalidities();
        messageInvalid.textContent = customValidityMessage;
    }
}

function validation() {
    for (let i = 0; i < forms.length; i++) {
        forms[i].noValidate = true;
        forms[i].addEventListener('submit', (evt) => {
            onFormSubmit(evt);
        });
    }
}

CustomValidation.prototype = {
    invalidities: [],
    checkValidity: function (input) {
        const validity = input.validity;

        if (validity.patternMismatch) {
            if (input.type === 'tel') {
                this.addInvalidity(InvalidMessage.PhoneMismatch);
            }
        }

        if (validity.valueMissing) {
            this.addInvalidity(InvalidMessage.ValueMissing);
        }
    },
    addInvalidity: function (message) {
        this.invalidities.push(message);
    },
    getInvalidities: function () {
        return this.invalidities.join('. ');
    },
};

export default validation;