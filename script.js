var puntajePc=0;
var puntajePl=0;
var elementoSeleccionadoPc;
alert("Hola bienvenido a PPL, a continuación presiona en jugar para comenzar. Suerte!");

inicio(puntajePc,puntajePl);
document.getElementById("btn_comenzar").onclick = function(){
 habilitarCampos();
}
document.getElementById("btnNext").onclick = function(){
  if(puntajePc< 3 & puntajePl<3){
  	habilitarCampos();
  } 
  else if(puntajePc == 3){
    alert("Perdiste, Gano la PC");
    puntajePc=0;
    puntajePl=0;
    inicio();
    

  }else{
    alert("Ganste, perdio la PC");
    puntajePc=0;
    puntajePl=0;
    inicio();
  }
}
document.getElementById("btn_piedra").onclick = function(){
  document.getElementById("elemento").style.visibility ="visible";
  document.getElementById("elemento").src = 'imagenes/piedra.jpg';
  document.getElementById("btn_papel").disabled = true;
  document.getElementById("btn_tijera").disabled = true;
  jugarMaquina();

  if(elementoSeleccionadoPc == "papel"){
    puntajePc++;
    document.getElementById("puntajePc").innerHTML = puntajePc;

  }else if(elementoSeleccionadoPc == "tijera"){
    puntajePl++;
    document.getElementById("puntajePl").innerHTML = puntajePl;

  }

}


document.getElementById("btn_papel").onclick = function(){
  document.getElementById("elemento").style.visibility ="visible";
  document.getElementById("elemento").src = 'imagenes/papel.jpg';
  document.getElementById("btn_piedra").disabled = true;
  document.getElementById("btn_tijera").disabled = true;
  jugarMaquina();

  if(elementoSeleccionadoPc == "tijera"){
    puntajePc++;
    document.getElementById("puntajePc").innerHTML = puntajePc;

  }else if(elementoSeleccionadoPc == "piedra"){
    puntajePl++;
    document.getElementById("puntajePl").innerHTML = puntajePl;

  }
}


document.getElementById("btn_tijera").onclick = function(){
  document.getElementById("elemento").style.visibility ="visible";
  document.getElementById("elemento").src = 'imagenes/tijera.jpg';
  document.getElementById("btn_papel").disabled = true;
  document.getElementById("btn_piedra").disabled = true;
  jugarMaquina();

  if(elementoSeleccionadoPc == "piedra"){
    puntajePc++;
    document.getElementById("puntajePc").innerHTML = puntajePc;

  }else if(elementoSeleccionadoPc == "papel"){
    puntajePl++;
    document.getElementById("puntajePl").innerHTML = puntajePl;

  }
}



function jugarMaquina(){

 var numRandom = Math.floor(Math.random() * 4);
 if (numRandom==0){
  numRandom++;
}
console.log(numRandom);
switch(numRandom) {
  case 1:
  elementoSeleccionadoPc= "papel";
  document.getElementById("elementoPc").style.visibility ="visible";
  document.getElementById("elementoPc").src = 'imagenes/papel.jpg';
  document.getElementById("btnNext").disabled = false;
  break;
  case 2:
  elementoSeleccionadoPc= "piedra";
  document.getElementById("elementoPc").style.visibility ="visible";
  document.getElementById("elementoPc").src = 'imagenes/piedra.jpg';
  document.getElementById("btnNext").disabled = false;
  break;
  case 3:
  elementoSeleccionadoPc ="tijera";
  document.getElementById("elementoPc").style.visibility ="visible";
  document.getElementById("elementoPc").src = 'imagenes/tijera.jpg';
  document.getElementById("btnNext").disabled = false;
  break;
  default:
    // code block
  }

}

function inicio(){


 document.getElementById("puntajePc").innerHTML = puntajePc;
 document.getElementById("puntajePl").innerHTML = puntajePl;
 document.getElementById("elemento").style.visibility ="hidden";
 document.getElementById("elementoPc").style.visibility ="hidden";
 document.getElementById("btn_comenzar").disabled = false;
 document.getElementById("btn_piedra").disabled = true;
 document.getElementById("btn_papel").disabled = true;
 document.getElementById("btn_tijera").disabled = true;
 document.getElementById("btnNext").disabled = true;



}

function habilitarCampos(){

  document.getElementById("elementoPc").style.visibility ="hidden";
  document.getElementById("elemento").style.visibility ="hidden";
  document.getElementById("btn_piedra").disabled = false;
  document.getElementById("btn_papel").disabled = false;
  document.getElementById("btn_tijera").disabled = false;
  document.getElementById("btn_comenzar").disabled = true;
  document.getElementById("btnNext").disabled = true;

}
