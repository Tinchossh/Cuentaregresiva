const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

function cuentaRegresiva(){
    const fechaActual = new Date();
    const proximo21Diciembre = new Date(fechaActual.getFullYear(), 11, 21); // December is 11 (0-based index)

    // If today's date is after December 21st, target next year's December 21st
    if (fechaActual > proximo21Diciembre) {
        proximo21Diciembre.setFullYear(proximo21Diciembre.getFullYear() + 1);
    }

    const segundosTotales = (proximo21Diciembre - fechaActual) / 1000;

    const dias = Math.floor(segundosTotales / 3600 / 24)
    const horas = Math.floor(segundosTotales / 3600) % 24;
    const minutos = Math.floor(segundosTotales / 60) % 60;
    const segundos = Math.floor(segundosTotales) % 60;

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatTime(horas);
    minutosEl.innerHTML = formatTime(minutos);
    segundosEl.innerHTML = formatTime(segundos);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

cuentaRegresiva();
setInterval(cuentaRegresiva, 1000);
