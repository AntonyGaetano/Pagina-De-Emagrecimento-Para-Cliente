
var cont = 0;
function TrocaImg(){
    var foto1 = document.getElementById("foto1");
    var foto2 = document.getElementById("foto2"); 
    var foto3 = document.getElementById("foto3");

    if(cont == 0){
    foto1.style.backgroundImage ="url(4.png)";
    foto2.style.backgroundImage ="url(5.png)";
    foto3.style.backgroundImage ="url(6.png)";
    cont = 1;
    }
    else{
    foto1.style.backgroundImage ="url(1.png)";
    foto2.style.backgroundImage ="url(2.png)";
    foto3.style.backgroundImage ="url(3.png)";
    cont = 0;
    }
}

function inicia(){
  tmp = setInterval(TrocaImg,4000);
}

window.addEventListener("load",inicia);