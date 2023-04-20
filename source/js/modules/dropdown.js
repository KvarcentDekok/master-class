const SHOW_DROPDOWN_CLASSNAME = 'dropdown--show';

const dropdownControls = document.querySelectorAll('[data-call="dropdown"]');

let activeDropdown;

function controlClickHandler(evt, control) {
    const dropdownTargetId = control.getAttribute('aria-controls');

    if (activeDropdown && activeDropdown.id !== dropdownTargetId) {
        closeDropdownClick();
    }

    if (dropdownTargetId) {
        const dropdownTarget = document.querySelector(`#${dropdownTargetId}`);

        if (dropdownTarget.classList.contains(SHOW_DROPDOWN_CLASSNAME)) {
            closeDropdownClick();
        } else {
            showDropdownClick(dropdownTarget);
        }
    }

    evt.preventDefault();
}

function showDropdownClick(dropdownTarget) {
    const control = document.querySelector(`[aria-controls="${dropdownTarget.id}"]`);

    dropdownTarget.classList.add(SHOW_DROPDOWN_CLASSNAME);
    control.setAttribute('aria-expanded', 'true');

    activeDropdown = dropdownTarget;

    document.addEventListener('click', documentClickHandler);
    document.addEventListener('keydown', escPressHandler);
}

function closeDropdownClick() {
    if (activeDropdown) {
        const control = document.querySelector(`[aria-controls="${activeDropdown.id}"]`);

        activeDropdown.classList.remove(SHOW_DROPDOWN_CLASSNAME);
        control.setAttribute('aria-expanded', 'false');

        activeDropdown = undefined;

        document.removeEventListener('click', documentClickHandler);
        document.removeEventListener('keydown', escPressHandler);
    }
}

function documentClickHandler(evt) {
    let target = evt.target;

    while (target !== document.body) {
        if (target === activeDropdown || target.getAttribute('aria-controls') === activeDropdown.id) {
            return;
        }

        target = target.parentNode;
    }

    closeDropdownClick();
}

function escPressHandler(evt) {
    if (evt.key === 'Escape') {
        evt.preventDefault();

        closeDropdownClick();
    }
}

function dropdown() {
    for (let i = 0; i < dropdownControls.length; i++) {
        dropdownControls[i].addEventListener('click', (evt) => {
            controlClickHandler(evt, dropdownControls[i]);
        });
    }
}

export default dropdown;