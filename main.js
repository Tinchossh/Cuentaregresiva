const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');


const verano = '21 Dec 2023'

function cuentaRegresiva(){
    const fechaVerano = new Date(verano);
    const fechaActual = new Date();

    const segundosTotales = (fechaVerano - fechaActual) / 1000;

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
//primer llamado
}

cuentaRegresiva();
setInterval(cuentaRegresiva, 1000);
