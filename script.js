if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}
window.addEventListener("scroll", Scroll);

function Scroll() {

    var Subiir = document.getElementById('Subir');
    var Ycursor = window.pageYOffset;

    if (Ycursor > 100) {
        Subiir.style.display = "inline-block";
        Subiir.style.animationDuration = "4s";
        Subiir.style.animationName = "SubirAnimacion"
    }
    else {
        Subiir.style.display = "none";
    }

}