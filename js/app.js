window.onload = init;
function init(){
    document.querySelector("#btnPlay").addEventListener("click",cronometrar);
    document.querySelector("#btnPause").addEventListener("click",parar);
    document.querySelector("#btnReset").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("cron").innerHTML="00 : 00 : 00";
}

function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.querySelector("#btnPlay").removeEventListener("click",cronometrar);
}

function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){
        m++;
        s=0;
    }
    if (m>59) {
        h++;
        m=0;
    }
    if (h>24) {
        h=0;
    }

    if (s<10) {
        sAux="0"+s;
    } else {
        sAux=s;
    }
    if (m<10) {
        mAux="0"+m;
    } else {
        mAux=m;
    }
    if (h<10) {
        hAux="0"+h;
    } else {
        hAux=h;
    }

    document.getElementById("cron").innerHTML = hAux + " : " + mAux + " : " + sAux; 
}

function parar(){
    clearInterval(id);
    document.querySelector("#btnPlay").addEventListener("click",cronometrar);

}

function reiniciar(){
    clearInterval(id);
    document.getElementById("cron").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector("#btnPlay").addEventListener("click",cronometrar);
}
