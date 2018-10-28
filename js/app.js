//teclas pequeñas
var numeroPantalla = 0;
var stringPantalla = "0";
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
      case "on":
        return -1;
      break;
      default:
        return -2;
    }
}
function teclaPequenia(elemento){
  elemento.style = "padding:1%";
}
function teclaNormal(elemento){
  elemento.style = "padding:0";
}
document.addEventListener('mousedown', function(e) {
    //e = e || window.event;
	devolucion = esBoton(e.target.id);
    if (devolucion > -2) {
		teclaPequenia(e.target);
		if (devolucion > -1) {
			if (numeroPantalla == 0) {
				if (devolucion != 0) {
					stringPantalla = String(devolucion);
					numeroPantalla = Number(stringPantalla);
				}
			} else {
				if (stringPantalla.length < 8) {
					stringPantalla = stringPantalla + String(devolucion);
					numeroPantalla = Number(stringPantalla);					
				}
			}
			document.getElementById('display').innerHTML = stringPantalla;
			/*
			// borrar el numero 0
			if(numeroPantalla[0] == 0){
				numeroPantalla= Number(numeroPantalla) + Number(devolucion);
			};
			// concatenar números
				numeroPantalla = String(numeroPantalla)+String(devolucion);
			// mostrar la concatenación
			document.getElementById('display').innerHTML = numeroPantalla;
			*/
		}
	}
});
document.addEventListener('mouseup', function(e) {
    //e = e || window.event;
    if (esBoton(e.target.id) > -2) {
		teclaNormal(e.target)}
});

	

	