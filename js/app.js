var stringPantalla = 0;
var contadorPunto = 0;
var suma = 0;
var numero2 = 0;
var resta = 0;
var multiplica = 0;
var divide = 0;
var contadorIgual = 0;
//retornos en la toma de id
function esBoton(ID) {
    switch (ID) {
      case "1": return 1; break;
      case "2": return 2; break;
      case "3": return 3; break;
      case "4": return 4; break;
      case "5": return 5; break;
      case "6": return 6; break;
      case "7": return 7; break;
      case "8": return 8; break;
      case "9": return 9; break;
      case "0": return 0; break;
      case "punto": return 10; break;
      case "on": return 11; break;
      case "igual": return 12; break;
      case "mas": return 13; break;
      case "menos": return 14; break;
      case "por": return 15; break;
      case "dividido": return 16; break;
      case "raiz": return 17; break;
      case "sign": return 18; break;
      default:
        return -2;
    }
};
//funciones para tamaño de botones calculadora
function teclaPequenia(elemento){
  elemento.style = "padding:1%";
};
function teclaNormal(elemento){
  elemento.style = "padding:0";
};
//funcion sumar
function sumar(){
	if (contadorIgual == 1){
		numero2 = stringPantalla;
		stringPantalla = Number(suma) + Number(stringPantalla);
	}else{
		stringPantalla = Number(numero2) + Number(stringPantalla);
	};
};
//funcion restar
function restar(){
	if (contadorIgual == 1){
		numero2 = stringPantalla;
		stringPantalla = Number(resta) - Number(stringPantalla);
	}else{
		stringPantalla = Number(stringPantalla) - Number(numero2);
	};
};
//funcion multiplicar
function multiplicar(){
	if (contadorIgual == 1){
		numero2 = stringPantalla;
		stringPantalla = Number(multiplica) * Number(stringPantalla);
	}else{
		stringPantalla = Number(numero2) * Number(stringPantalla);
	};
};
//funcion dividir
function dividir(){
	if (contadorIgual == 1){
		numero2 = stringPantalla;
		stringPantalla = Number(divide) / Number(stringPantalla);
	}else{
		stringPantalla = Number(stringPantalla) / Number(numero2);
	};
};
//evento para tomar id del elemento con evento del mouse
document.addEventListener('mousedown', function(e) {
    //e = e || window.event; /*compatibilidad*/
	devolucion = esBoton(e.target.id);
//botones calculadora pequeños
    if (devolucion > -2) {
		teclaPequenia(e.target);
	};
//punto	
	if (devolucion == 10){
		contadorPunto = contadorPunto + 1;
		stringPantalla = String(stringPantalla);
		if (contadorPunto == 1 && stringPantalla.length < 7){
		stringPantalla = stringPantalla + ".";
		}
	};
//cero a la izquierda
	if (devolucion > -1 && devolucion < 10) {
		if (stringPantalla === 0) {
			if (devolucion != 0) {
				stringPantalla = String(devolucion);
			}
		} else/* if (stringPantalla.length < 8) */{ 
				stringPantalla = stringPantalla + String(devolucion);	
		}
	};
//signo
	if (devolucion == 18 && stringPantalla != 0){
		stringPantalla = (-1) * stringPantalla;
		stringPantalla = String(stringPantalla);
	};
//boton on/c
	if (devolucion == 11) {
		stringPantalla = 0;
		contadorPunto = 0;
		suma = 0;
		numero2 = 0;
		resta = 0;
		multiplica = 0;
		divide = 0;
		contadorIgual = 0;
	};
//suma
	if (devolucion == 13) {
		suma = stringPantalla;
		stringPantalla = 0;
		contadorPunto = 0;
		contadorIgual = 0;
		resta = 0;
		multiplica = 0;
		divide = 0;
	};
//resta
	if (devolucion == 14) {
		resta = stringPantalla;
		stringPantalla = 0;
		contadorPunto = 0;
		contadorIgual = 0;
		multiplica = 0;
		divide = 0;
		suma = 0;
	};
//multiplicar
	if (devolucion == 15) {
		multiplica = stringPantalla;
		stringPantalla = 0;
		contadorPunto = 0;
		contadorIgual = 0;
		resta = 0;
		divide = 0;
		suma = 0;
	};
//dividir
	if (devolucion == 16) {
		divide = stringPantalla;
		stringPantalla = 0;
		contadorPunto = 0;
		contadorIgual = 0;
		resta = 0;
		multiplica = 0;
		suma = 0;
	};
//igual
	if (devolucion == 12) {
		contadorIgual = contadorIgual + 1;
		if (suma) {
			sumar();
		};if (resta) {
			restar();
		};if (multiplica) {
			multiplicar();
		};if (divide) {
			dividir();
		};
		stringPantalla = String(stringPantalla);
	};
//8 caracteres
	if (stringPantalla.length > 8){
		stringPantalla = stringPantalla.substr(0, 8);
	};
	document.getElementById('display').innerHTML = stringPantalla;	
});
//botones calculadora normales
document.addEventListener('mouseup', function(e) {
    //e = e || window.event; /*compatibilidad*/
    if (esBoton(e.target.id) > -2) {
		teclaNormal(e.target)}
});
document.addEventListener('mouseout', function(e) {
    //e = e || window.event; /*compatibilidad*/
    if (esBoton(e.target.id) > -2) {
		teclaNormal(e.target)}
});




