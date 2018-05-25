	// var contadorLigadas = 0;
	// var posicionSilenciosColorear = [];


function pintarNotaActual(argument) {
	// console.log("pintarNotaActual");

	while(posicionSilenciosColorear[contadorLigadasActual] == true){
		contadorLigadasActual++;	
	}

	try {
		notes[contadorLigadasActual].setAttribute("fill", "blue");
		contadorLigadasActual++;
		// console.log("TRY contadorLigadasActual : " + contadorLigadasActual);
		// console.log("colorear");
		// console.log("notasLigadas[contadorLigadasActual - 1] : " + notasLigadas[contadorLigadasActual - 1]);
		// bug8
		if (notasLigadas[contadorLigadasActual - 1] == true) {
			notes[contadorLigadasActual].setAttribute("fill", "blue");
			contadorLigadasActual++;
			// console.log("1-IFcontadorLigadasActualNotaActual : " + contadorLigadasActual);
			// contadorColor++;
			if (notasLigadas[contadorLigadasActual - 1] == true) {
				notes[contadorLigadasActual].setAttribute("fill", "blue");
				contadorLigadasActual++;
				// ligaduraHack = true;
				// contadorLigadasActual--;
				// console.log("2-IFcontadorLigadasActualNotaActual : " + contadorLigadasActual);
				// contadorColor++;
			}else{
				// contadorLigadasActual--;
			}
		}
		
	} catch (e) {  }

	contadorSilenciosNotaActual++;
}

function colorear(argument) {
	// console.log("colorear");
	// if(posicionSilenciosColorear[contadorLigadas] == true){
	// 	// notes[contadorLigadas].setAttribute("fill", argument);
	// 		// console.log("EO");
	// 	contadorLigadas++;
	// 	if (posicionSilenciosColorear[contadorLigadas] == true) {
	// 		// console.log("EOEO");
	// 		// console.log("posicionSilenciosColorear[contadorLigadas + 1] : " + posicionSilenciosColorear[contadorLigadas + 1]);
	// 		contadorLigadas++;
	// 		// contadorLigadas++;
	// 	}
	// 	// console.log("contadorLigadas : " + contadorLigadas);
	// 	// console.log("posicionSilenciosColorear[" + contadorLigadas + "] : " + posicionSilenciosColorear[contadorLigadas]);
	// }

	while(posicionSilenciosColorear[contadorLigadas] == true){
		contadorLigadas++;	
	}


	try {
		notes[contadorLigadas].setAttribute("fill", argument);
		contadorLigadas++;
		// console.log("TRY contadorLigadas : " + contadorLigadas);
		// console.log("colorear");
		// console.log("notasLigadas[contadorLigadas - 1] : " + notasLigadas[contadorLigadas - 1]);
		// bug8
		if (notasLigadas[contadorLigadas - 1] == true) {
			notes[contadorLigadas].setAttribute("fill", argument);
			contadorLigadas++;
			// console.log("1-IFcontadorLigadasNotaActual : " + contadorLigadas);
			// contadorColor++;
			if (notasLigadas[contadorLigadas - 1] == true) {
				notes[contadorLigadas].setAttribute("fill", argument);
				contadorLigadas++;
				// ligaduraHack = true;
				// contadorLigadas--;
				// console.log("2-IFcontadorLigadasNotaActual : " + contadorLigadas);
				// contadorColor++;
			}else{
				// contadorLigadas--;
			}
		}
		
	} catch (e) {  }

	contadorSilencios++;
}

var coloresNotaAcorde = {
	octavaAbajo : "#331a00", septimaAbajo : "#999966", sextaAbajo : "green",   quintaAbajo : "#4000ff",  cuartaAbajo : "#b30047",  terceraAbajo : "#00bfff", segundaAbajo : " #ff33cc", 
	1 : "#331a00",2 : "#999966", 3 : "green",   4 : "#4000ff",  5 : "#b30047",  6 : "#00bfff", 7 : " #ff33cc", 
	8 : "#331a00", 9 : "#999966", 10 : "green", 11 : "#4000ff", 12 : "#b30047", 13 : "#00bfff",  14 : "#ff33cc", 
	15: "331a00",16 : "#ff4da6" 
}

function pintarNotasRelacionAcorde(argument) {
	// console.clear();
	// console.log("objeto["alto"][notas] : " + objeto["alto"]["notas"]);
	var notesArray = document.getElementsByClassName("abcjs-note");
	
	for (var i = 0; i < notesArray.length; i++) {
		var clase = notesArray[i].classList[2];//la p-index se encuentra en la segunda clase de las abcjs-note classes
		//el 7 es para quitar los 7 primeros caracteres de la clase y quedarnos con el numero(index de nota)
		clase = clase.slice(7,clase.length);
		notesArray[i].setAttribute("fill", 
			coloresNotaAcorde[mostrarGradosVoz((parseInt(clase%7)+14))]);//la clase abcjs_note le da al Do central la posicion 0, nosotros seria la 14

		// console.log("clase : " + );
		// console.log("mostrarGradosVoz((clase%7)+14) : " + mostrarGradosVoz((clase%7)+14));
	}

	// console.log("grados[alto] : " + grados["alto"]);
}


function getNotaFromSvg(argument){
    
}

function mostrarGradosVoz(nota){
	//nota es un index sacado del svg
	// console.log("notasMusicales[nota] : " + notasMusicales[nota]);
    var grado = (nota - getIndexOf(key[0]));
    // console.log("getIndexOf(key[0]) : " + getIndexOf(key[0]));
	// console.log("nota : 	" + nota);
    switch (grado%7) {
        case unisono:
            return "1";
            break;
        case segunda:
            return "2";
            break;
        case -6:
            return "2";
            break;
        case 2:
            return "3";
            break;
        case -5:
            return "3";
            break;
        case 3:
            return "4";
            break;
        case -4:
            return "4";
            break;
        case 4:
            return "5";
            break;
        case -3:
            return "5";
            break;
        case 5:
            return "6";
            break;
        case -2:
            return "6";
            break;
        case 6:
            return "7";
            break;
        case -1:
            return "7";
            break;
        case 7:
            return "8";
            break;
        case 8:
            return "9";
        break;
        case 9:
            return "10";
        break;
        case onceava:
            return "11";
        break;
        case doceava:
            return "12";
        break;
        case treceava:
            return "13";
        break;
        // default:
        //     return "def: " + grado
        // break;
            
    }
}