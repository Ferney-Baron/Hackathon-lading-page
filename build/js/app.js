document.addEventListener('DOMContentLoaded', () => {
    imagenes();
    scrollNav();
})

const menu = document.querySelector('.nav-icon');
const contenido = document.querySelector('.nav-menu');
const formulario = document.querySelector('.formulario');


function scrollNav() {
    const enlaces = document.querySelectorAll('.nav-menu-contenido a');
    // console.log(enlaces);
    
    enlaces.forEach( enlace => {
        enlace.addEventListener( 'click', (e) => {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value)
            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });


    
}

menu.addEventListener('click', () => {
    const contenidoDisplay = contenido.style;

    (contenidoDisplay.display === 'block') ? contenidoDisplay.display = 'none'
        : contenidoDisplay.display = 'block'; 
});

window.addEventListener('resize', () => {
    (window.innerWidth > 992) ? contenido.style.display = 'block' : contenido.style.display = 'none';

});

function imagenes() {
    const patrocinios = document.querySelector('.patrocinadores-img');
    let contenido = '';

    for (let i = 1; i < 7; i++) {
        contenido += `
            <div class="contenedor-img">
                <img class="img img${i}" src="build/img/marcas/${i}.png" alt="patrocinador" />
            </div>
        `
        patrocinios.innerHTML = contenido;
    }
}