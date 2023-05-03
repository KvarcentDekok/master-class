const MAP_WIDTH = '341';
const MAP_HEIGHT = '100';

const mapLink = document.querySelector('.map');

function onMapClick(evt) {
    const iframe = document.createElement('iframe');

    evt.preventDefault();

    iframe.classList.add('map');
    iframe.src = mapLink.dataset.src;
    iframe.width = MAP_WIDTH;
    iframe.height = MAP_HEIGHT;
    iframe.setAttribute('allowfullscreen', 'true');

    mapLink.replaceWith(iframe);
}

function map() {
    mapLink.addEventListener('click', (evt) => {
        onMapClick(evt);
    });
}

export default map;