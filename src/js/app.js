document.addEventListener('DOMContentLoaded', () => {
    // botones();
})

const menu = document.querySelector('.nav-icon');
const contenido = document.querySelector('.nav-menu');


menu.addEventListener('click', () => {
    const contenidoDisplay = contenido.style;

    (contenidoDisplay.display === 'block') ? contenidoDisplay.display = 'none'
        : contenidoDisplay.display = 'block';
});

window.addEventListener('resize', () => {
    (window.innerWidth > 992) ? contenido.style.display = 'block' : contenido.style.display = 'none';
});

