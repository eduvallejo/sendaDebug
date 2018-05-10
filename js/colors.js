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
	octavaAbajo : "#331a00", septimaAbajo : "#999966", sextaAbajo : "green",   quintaAbajo : "#0059b3",  cuartaAbajo : "red",  terceraAbajo : "#33cccc", segundaAbajo : " #ff33cc", 
	1 : "#331a00", 2 : "#999966", 3 : "green",   4 : "#0059b3",  5 : "red",  6 : "#33cccc", 7 : " #ff33cc", 
	8 : "#331a00", 9 : "#999966", 10 : "green", 11 : "#0059b3", 12 : "red", 13 : "#33cccc",  14 : "#ff33cc", 
	15: "331a00",16 : "#ff4da6" 
}

function pintarNotasRelacionAcorde(argument) {
	// console.clear();
	console.log("coloresNotaAcorde[5] : " + coloresNotaAcorde[5]);
	var notesArray = document.getElementsByClassName("abcjs-note");
	// var notesArray = document.getElementsByTagName("button");
	console.log("notesArray.length : " + notesArray.length);
	//pentagrama superior
	for (var i = 0; i < alto.length; i++){
		// console.log("notesArray[" + i + "].nextSibling.[width] : " + notesArray[i].nextSibling.getAttribute("width"));
		// posicionNota1 = parseInt(posicionNota1) +  parseInt(notesArray[i].nextSibling.getAttribute("width")); 
		notesArray[i].setAttribute("fill", coloresNotaAcorde[mostrarGradosVoz(alto, i)]);
		// console.log(" mostrarGradosVoz(alto, " + i + "): " + mostrarGradosVoz(alto, i));
	}
	//pentagrama siguiente al superior
	for (var i = alto.length; i < notesArray.length; i++){
		// console.log("notesArray[" + i + "].nextSibling.[width] : " + notesArray[i].nextSibling.getAttribute("width"));
		// posicionNota1 = parseInt(posicionNota1) +  parseInt(notesArray[i].nextSibling.getAttribute("width")); 
		notesArray[i].setAttribute("fill", coloresNotaAcorde[mostrarGradosVoz(cantus, i - alto.length)]);
		// console.log(" mostrarGradosVoz(cantus, " + (i - alto.length) + "): " + mostrarGradosVoz(cantus, i - alto.length));
	}
	// tenemos en cuenta la cantidad de sotsenidos para colocar la linea de posicion, aunq a veces no hay y se tieene q catcheaar
	// console.log("key : " + key);
	// try{
	// 	if (key != "Cmaj") {
	// 		posicionNota1 = parseInt(posicionNota1) +  parseInt(staffExtraArray[1].nextSibling.getAttribute("width")); 
	// 		document.getElementById("flecha").style.left = parseInt(screenWidth + posicionNota1 - 3 ) + "px";
	// 		// console.log("posicionNota1 : " + parseInt(staffExtraArray[1].nextSibling.getAttribute('width')));
	// 	}else if(key == "Cmaj"){
	// 		document.getElementById("flecha").style.left = parseInt(screenWidth + 60) + "px"; //25 a ojo
	// 		console.log("else Cmaj : ");
	// 	}
	// }catch(e){//para la tonalidad de C no esta el elemento staff
	// 	document.getElementById("flecha").style.left = parseInt(screenWidth + 60) + "px"; //25 a ojo
	// 	// console.log(" document.getElementById(flecha).getAttribute(left): " + document.getElementById("flecha").getAttribute("left")); //25 a ojo
	// 	console.log("e : ");
	// }

	// // console.log("resetearColores");
	// for (var i = 0; i < notes.length; i++) {
	// 	notes[i].setAttribute("fill", "black");
	// // 			notes[contadorColor].setAttribute("class", "note note_selected");
	// // notes[contadorColor].setAttribute("fill", "grey");
	// }

}