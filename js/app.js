var numeroPantalla = 0;
var stringPantalla = "0";

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
      case "punto":
      case "igual":
      case "mas":
      case "menos":
      case "por":
      case "dividido":
      case "raiz":
      case "sign":
      case "on": return "on"; break;
        return -1;
      break;
      default:
        return -2;
    }
}

//funciones para tamaño de botones calculadora

function teclaPequenia(elemento){
  elemento.style = "padding:1%";
}
function teclaNormal(elemento){
  elemento.style = "padding:0";
}

//evento para tomar id del elemento con evento del mouse

document.addEventListener('mousedown', function(e) {
    //e = e || window.event; /*compatibilidad*/
	devolucion = esBoton(e.target.id);
	
//botones calculadora pequeñas
	
    if (devolucion > -2) {
		teclaPequenia(e.target);
		if (devolucion > -1) {
			if (numeroPantalla == 0) {
				if (devolucion != 0) {
					stringPantalla = String(devolucion);
					numeroPantalla = Number(stringPantalla);
				}
			} else {
				if (stringPantalla.length < 8) { //solo 8 caracteres
					stringPantalla = stringPantalla + String(devolucion);
					numeroPantalla = Number(stringPantalla);					
				}
			}
			document.getElementById('display').innerHTML = stringPantalla;
		}
	}
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

//boton on/c

document.addEventListener('mousedown', function(e) {
    //e = e || window.event; /*compatibilidad*/
    if (esBoton(e.target.id) == "on") {
		document.getElementById('display').innerHTML = 0;
		numeroPantalla = 0;
		stringPantalla = "0";
		}
});