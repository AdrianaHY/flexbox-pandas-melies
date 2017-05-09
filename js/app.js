var parrafoUno = document.getElementById("parrafoUno");
var botonUno = document.getElementById("botonUno")
var parrafoDos = document.getElementById("parrafoDos");
var botonDos = document.getElementById("botonDos")
var botonRestaurar = document.getElementById("botonTres");
var span = document.getElementsByClassName("close");

for (var i = 0; i < span.length; i++){
  span[i].addEventListener("click",cerrar);
}


function cerrar() {
  var div = this.parentElement;
  div.style.display = "none";
}

botonUno.addEventListener("click",abrirCerrar);

function abrirCerrar(){
  if(parrafoUno.style.visibility == "visible"){
    parrafoUno.style.visibility= "hidden";
  }else{
    parrafoUno.style.visibility= "visible";
  }
}

botonDos.addEventListener("click", abrirCerrarParrafoDos);

function abrirCerrarParrafoDos(){
  if(parrafoDos.style.visibility == "visible"){
    parrafoDos.style.visibility = "hidden";
  }else{
    parrafoDos.style.visibility = "visible";
  }
}

botonRestaurar.addEventListener("click", restaurar);

function restaurar(){
  for(var i=0; i < span.length; i++){
    span[i].parentElement.style.display= "flex";
  }
}
