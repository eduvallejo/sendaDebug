
function resetearAjax(argument) {
	pointer = 0;
	tiemposCorrectos = [];
	tiemposUsuario = [];
	contadorUsuario = 0;
	fallos = 0;
	numErrores = 0;
	notasLigadas = [];
	repeticion = false; //para saber si tenemos q repetir desde el principio
	contadorRepeticion = 0; //saber desde donde repetir

	tupleApply = [];
	tupleType = 0; //3 para tresillos etc
	dotApply = [];
	corcheasL = false;

	noteLetter = [];
	// audioSong.pause();
	
	// document.getElementById('fallos').innerHTML = 'Fallos: ' + numErrores;

}

function decodeAjaxResponse(song, voz) {
	resetearAjax();
	song = song.replace(/".*?"/g, ""); //elimino las quotes de los acordes, asi descode mmas facil

	var musicLines = false;
	while(musicLines == false){

		if ((isNaN(song[pointer]) && (song[pointer + 1] == ":")) || (song[pointer] == "%" ) || (song[pointer] == "\n")) {
			if (song[pointer] == "L" && song[pointer + 4] == "8") {
				corcheasL = true;
			}else if (song[pointer] == "L" && song[pointer + 5] == "6") {//1/16
				semiCorcheasL = true;
			}else if(song[pointer] == "K"){
				pointer++;
				pointer++;
				key = song[pointer];
				while(song[pointer] != "\n"){
					pointer++;
					key = key + song[pointer];
				}
				key = key.replace("\n", "");
			}else if(song[pointer] == "M"){
				pointer++;
				pointer++;
				timeSignatures[timeSignaturesCounter] = song[pointer];
				for (var i = 0; i < 2; i++) {
					pointer++;
					timeSignatures[timeSignaturesCounter] = timeSignatures[timeSignaturesCounter] + song[pointer];
				}
			}else if(song[pointer] == "Q"){
				pointer++;
				pointer++;
				pointer++;
				pointer++;
				pointer++;
				var bpmTemp = 0;
				while(song[pointer] != "\n"){
					pointer++;
					bpmTemp = parseInt(bpmTemp + song[pointer]);
				}
				bpm = bpmTemp;
				bpmArray.push(bpm);
				msPerBeat = parseFloat(60000 / bpm).toFixed(0);//0 decimales de milisengundos

			}
			while(song[pointer] != "\n"){
				pointer++
			}
		}else {
			musicLines = true;
			pointer--;//para q no se salte la primera nota al decode
		}
			pointer++;
	}

	contadorTc = 0;

	while(song[pointer] != undefined){
		if (song[pointer] == '|') {
			resetearAlteracionesAccidentales();
		}
		if (song[pointer] == '|' && song[pointer + 1] == ":") {
			repeticion = true;
			contadorRepeticion = contadorTc;
			pointer++;
			pointer++;
		}
		if (song[pointer] == ':' && song[pointer + 1] == "|") {
			if(repeticion == true){;
				tiemposRepetir = contadorTc - contadorRepeticion;
					console.log("tiemposCorrectos[" + contadorTc + "] : " + tiemposCorrectos[contadorTc]);
				repeticion = false;
			}else if(repeticion == false){//repetir desde principio si no hay |:
				tiemposRepetir = contadorTc - 0;
			}
			pointer++;
			pointer++; //parae vitar bugs en el :| final
		}

		if (song[pointer] == "(" && !isNaN(song[pointer + 1])) {
			tupleType = song[pointer+1] ;
			for (var i = 0; i < tupleType; i++) {
				tupleApply[i + contadorTc] = tupleType;
			}
		pointer++;
			pointer++;
		}

		if (song[pointer] == ">") {
			dotApply[contadorTc - 1] = 1.5;
			dotApply[contadorTc] = 0.5;
			pointer++;
		}
	
		if (song[pointer] == "<") {
			dotApply[contadorTc - 1] = 0.5;
			dotApply[contadorTc] = 1.5;
			pointer++;
		}

		if (song[pointer] == "-") {
			notasLigadas[contadorTc - 1] = true;
		}else{//hack para colorear ligaduras bug8
			notasLigadas[contadorTc] = false;
		}
		
		if (song[pointer] == "|") {
			measureNumberTimeSignatures.push(false);
		}
		saltarCaracter(pointer); //posicion original de la funcion salyar

		if (song[pointer] == "X" && song[pointer + 1] == ":") {
			for (var i = 0; i < 8; i++) {
				while(song[pointer] != "\n"){
					pointer++
				}
				pointer++;
			}
			console.log("song[" + pointer + "] : " + song[pointer]);
			pointer--;
		}

		if (song[pointer] = "[" && song[pointer + 1] == "K" && (song[pointer + 3] != "t" || song[pointer + 3] != "b")) { //treble or bass key
			var armadura = "";
			pointer++;pointer++;pointer++;
			while(song[pointer] != "]"){
				armadura = armadura + song[pointer];
				pointer++;
			}
			// console.log("armadura :" + armadura);
			key = armadura;
		}else if(song[pointer] = "[" && song[pointer + 1] == "K" && (song[pointer + 3] == "t" || song[pointer + 3] == "b")) {
			while(song[pointer] != "]"){
				pointer++;
			}
		}else if(song[pointer] = "[" && song[pointer + 1] == "M" ){
			measureNumberTimeSignatures.pop();//ya que cuando encontramos un | le ponemos como false
			measureNumberTimeSignatures.push(true);//asi q lo popeamos y le ponemos true
			timeSignaturesCounter++;
			pointer++;
			pointer++;
			pointer++;
			timeSignatures[timeSignaturesCounter] = song[pointer];
			pointer++;
			timeSignatures[timeSignaturesCounter] = timeSignatures[timeSignaturesCounter] + song[pointer];
			pointer++;
			timeSignatures[timeSignaturesCounter] = timeSignatures[timeSignaturesCounter] + song[pointer];
		}else if(song[pointer] = "[" && song[pointer + 1] == "Q"){ //changeTempoInThisNote
			var tempoChange = 0;
			while(song[pointer] != "="){
				pointer++;
			}
			pointer++;
			while(song[pointer] != "]"){
				tempoChange = tempoChange + song[pointer];
				pointer++;
			}
			tempoChange = parseInt(tempoChange);
			bpm = tempoChange;
			bpmArray.push(bpm);
			changeTempoInThisNote[noteLetter.length] = true;
			msPerBeat = parseFloat(60000 / bpm).toFixed(0);
		}

		//LETTERS
		// console.log("key : " + key);
		// console.log("noteLetter : " + noteLetter);
		var lettersTime = /[a-gA-GzZ]/;//letters involved in time
		if (song[pointer].match(lettersTime) ) {

			notasPorLinea[contadorLinea]++;
			if (song[pointer + 1] == "," && song[pointer + 2] == ",") {
				noteLetter.push(song[pointer] + ",,");
			}
			else if (song[pointer + 1] == ",") {
				noteLetter.push(song[pointer] + ",");
			}else if(song[pointer + 1] == "'" && song[pointer + 2] == "'"){
				noteLetter.push(song[pointer] + "''");
			}else if(song[pointer + 1] == "'"){
				noteLetter.push(song[pointer] + "'");
			}else{
				noteLetter.push(song[pointer]);
			}
		if (changeTempoInThisNote[noteLetter.length - 1] != true) {//
			changeTempoInThisNote[noteLetter.length - 1] = (false);
		}
			tiemposCorrectos[contadorTc]  = msPerBeat;//letra a secas 
			if (song[pointer - 1] == "^"  && becuadroAccidental[noteLetter[noteLetter.length - 1]] == false) {
				if (bemolesTonalidades[key][noteLetter[noteLetter.length - 1]] == true) {
					getAlteraciones(noteLetter.length, 2);
				}else{
					getAlteraciones(noteLetter.length, 1);
				}
				sostenidoAccidental[noteLetter[noteLetter.length - 1] ] = true;
			}else if (song[pointer - 1] == "^"  && becuadroAccidental[noteLetter[noteLetter.length - 1]] == true) {
				if ((bemolesTonalidades[key][noteLetter[noteLetter.length - 1]] != true) && (sostenidosTonalidades[key][noteLetter[noteLetter.length - 1]] != true)) {
					getAlteraciones(noteLetter.length, 1); //apaño ,momentaneo
				}else{
					getAlteraciones(noteLetter.length, 0);
				}
				becuadroAccidental[noteLetter[noteLetter.length - 1]] = false;
			}else if (song[pointer - 1] == "="  && becuadroAccidental[noteLetter[noteLetter.length - 1]] == true) {
				getAlteraciones(noteLetter.length, 0);
			}else if (song[pointer - 1] == "=") {
				if (key[1] == "b" || (key[0] == "F" && key[1] == "m")) { // o Fmaj o por ejempo Eb , Bb, Ab...
					if (bemolesTonalidades[key][noteLetter[noteLetter.length - 1]] == false) {
						getAlteraciones(noteLetter.length, 0); //apaño ,momentaneo
					}else if (bemolesTonalidades[key][noteLetter[noteLetter.length - 1][0]] == true){
						getAlteraciones(noteLetter.length, 1); //apaño ,momentaneo
					}
				}else{
					getAlteraciones(noteLetter.length, -1); //apaño ,momentaneo
				}
				becuadroAccidental[noteLetter[noteLetter.length - 1] ] = true;
				if (sostenidoAccidental[noteLetter[noteLetter.length - 1] ] == true) {
					sostenidoAccidental[noteLetter[noteLetter.length - 1] ] = false;
					getAlteraciones(noteLetter.length, 0);
				}
				if (bemolAccidental[noteLetter[noteLetter.length - 1] ] == true) {
					bemolAccidental[noteLetter[noteLetter.length - 1] ] = false;
					getAlteraciones(noteLetter.length, 0);
				}
			}else if (song[pointer - 1] == "_" && becuadroAccidental[noteLetter[noteLetter.length - 1]] == false) {
				if (sostenidosTonalidades[key][noteLetter[noteLetter.length - 1]] == true) {
					getAlteraciones(noteLetter.length, -2);
				}else{
					getAlteraciones(noteLetter.length, -1);
				}
					bemolAccidental[noteLetter[noteLetter.length - 1]] = true;
			}else if (song[pointer - 1] == "_" && becuadroAccidental[noteLetter[noteLetter.length - 1]] == true) {
				if (bemolesTonalidades[key][noteLetter[noteLetter.length - 1]] != true) {
					getAlteraciones(noteLetter.length, -1); //apaño ,momentaneo
				}else{
					getAlteraciones(noteLetter.length, 0);
				}
				becuadroAccidental[noteLetter[noteLetter.length - 1]] = false;
			}else if (sostenidoAccidental[noteLetter[noteLetter.length - 1]] == true) {
				getAlteraciones(noteLetter.length, 1);
			}else if (bemolAccidental[noteLetter[noteLetter.length - 1]] == true) {
				if (sostenidosTonalidades[key][noteLetter[noteLetter.length - 1]] == true) {
					getAlteraciones(noteLetter.length, -2);
				}else{
					getAlteraciones(noteLetter.length, -1);
				}
			}else if (becuadroAccidental[noteLetter[noteLetter.length - 1]] == true) {
				if (sostenidoAccidental[noteLetter[noteLetter.length - 1]] == true) {
					getAlteraciones(noteLetter.length, 0); //apaño ,momentaneo
				}else if (bemolAccidental[noteLetter[noteLetter.length - 1]] == true) {
					getAlteraciones(noteLetter.length, 0); //apaño ,momentaneo
				}else if (key[1] == "b" || key[0] == "F" ) { // por ejempo Eb , Bb, Ab...
					if (bemolesTonalidades[key][noteLetter[noteLetter.length - 1]] != true) {
						getAlteraciones(noteLetter.length, 0); //apaño ,momentaneo
					}else{
						getAlteraciones(noteLetter.length, 1); //apaño ,momentaneo
					}
				}else{
					getAlteraciones(noteLetter.length, -1); //apaño ,momentaneo
				}
			}else{//nota sin alteracion accidental
				getAlteraciones(noteLetter.length, 0);
			}
			//por hacer, para calcular intervalos
			grados[voz][noteLetter.length-1] = (getIndexOf(noteLetter[noteLetter.length - 1]) -getIndexOf(key[0]));
		
		}

		if (song[pointer] == "/" ) {//areglar bug de / sin nada dtras(/2 por defecto)
			contadorTc--;
			if (!isNaN(song[pointer + 1]) && song[pointer + 1] != " ") {
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] / song[pointer+1];
				pointer++;
			}else{
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] / 2;
			}
		}else if(!isNaN(song[pointer]) && song[pointer] != " "){//if it is a number
			contadorTc--;
			if (song[pointer] == " ") {
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] ;
			}else if (song[pointer] != "\n"){//evitar bug fin de linea \
				tiemposCorrectos[contadorTc] = tiemposCorrectos[contadorTc] * song[pointer];
			}else{
				contadorTc++;
			}
		}
		if(song[pointer].match(notSkipCharacters)){ ///[a-gA-GzZ0-9/:<>]/
			contadorTc++;
		}
		pointer++;
		saltarCaracter(pointer);


		if (song[pointer] == "V" && song[pointer + 2] != 1) {
			break;		}
	}//end While

	for (var i = 0; i < tiemposCorrectos.length; i++) {
		if (tupleApply[i] != " " && tupleApply[i] != undefined) {
			tiemposCorrectos[i] = parseInt(2*tiemposCorrectos[i] / tupleApply[i]); 
		}
	}
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		if (dotApply[i] != " " && dotApply[i] != undefined) {
			tiemposCorrectos[i] = parseInt(tiemposCorrectos[i] * dotApply[i]); 
		}
	}
	var temp = 0;
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		if (notasLigadas[i] == true){
			tiemposCorrectos[i] = parseInt(tiemposCorrectos[i]) + parseInt(tiemposCorrectos[i + 1]);
			temp = tiemposCorrectos[i + 1];
			if (notasLigadas[i + 1] == true) {
				tiemposCorrectos[i] = parseInt(tiemposCorrectos[i]) + parseInt(tiemposCorrectos[i + 2]);
				tiemposCorrectos[i + 2] = 0;
			}
			tiemposCorrectos[i + 1] = 0;
		}
		temp = 0;
	}

	for (var i = 0; i < noteLetter.length; i++) {
		if (noteLetter[i] == "z") {
			posicionSilenciosColorear[i] = true;
		}else{
			posicionSilenciosColorear[i] = false;

		}
	}

	for (var i = 0; i < noteLetter.length; i++) {
		if (noteLetter[i] == "z"){
			changeTempoInThisNote.splice([i], 1);
		}
	}

	var contadorPop = 0;
	var tiemposCorrectosLenghtAntesDelPop = tiemposCorrectos.length; //para evitar el bug de las notas ligadas cuando hay muchas
	for (var i = 0; i <= tiemposCorrectosLenghtAntesDelPop ; i++) {
		if (notasLigadas[i] == true){
			tiemposCorrectos.splice([i + 1 - contadorPop], 1);
			noteLetter.splice([i + 1 - contadorPop], 1);
			frecuenciaNota.splice([i + 1 - contadorPop], 1);
			changeTempoInThisNote.splice([i + 1 - contadorPop], 1);

			contadorPop++;
			tiemposRepetir--;
		}
	}

	if (corcheasL == true) {
		for (var i = 0; i < tiemposCorrectos.length; i++) {
			tiemposCorrectos[i] = parseInt(tiemposCorrectos[i] / 2);
		}
	}else if (semiCorcheasL == true) {
		for (var i = 0; i < tiemposCorrectos.length; i++) {
			tiemposCorrectos[i] = parseInt(tiemposCorrectos[i] / 4);
		}
	}

	for (var i = contadorRepeticion; i < tiemposRepetir+contadorRepeticion; i++) {
		tiemposCorrectos.splice(i + tiemposRepetir, 0, tiemposCorrectos[i]);
	}


	var tiemposCorrectosSinSilencios = [];
	var noteLetterLength = noteLetter.length; 
	var contadorSilencios = 0; //este cuenta la posicion de los silencions en el svg -> no tiene q haber pop



	for (var i = 0; i < noteLetterLength; i++) {
		if (noteLetter[i] == "z") {
			// tiemposCorrectos[i - 1]  = parseFloat(tiemposCorrectos[i - 1]) + parseFloat(tiemposCorrectos[i]);
			// tiemposCorrectos.splice([i], 1);
			// noteLetter.splice([i], 1);
			posicionSilencios[contadorSilencios] = true;
			// i--;
		}else if(contadorSilencios < noteLetterLength){
			posicionSilencios[contadorSilencios] = false;
		}
		contadorSilencios++;
	}
		
	// scrollTimeChanging();

	var frecuenciaNotaLength = frecuenciaNota.length; 
	// for (var i = 0; i < frecuenciaNotaLength; i++) {
	// 	if (frecuenciaNota[i] < 1) {
	// 		frecuenciaNota.splice([i], 1);
	// 		i--;
	// 	}
	// }

	contadorRates = 0;
	for (var i = 0; i < tiemposCorrectos.length; i++) {
		if (changeTempoInThisNote[i] == true){
			contadorRates++;
			decayRateNota[i] = parseFloat((Math.pow(tiemposCorrectos[i], 1.25) * 60) / (5500 * bpmArray[contadorRates]*2) + parseFloat(0.2)).toFixed(3);	
		}
		else{
			decayRateNota[i] = parseFloat((Math.pow(tiemposCorrectos[i], 1.25) * 60) / (5500 * bpmArray[contadorRates]*2) + parseFloat(0.2)).toFixed(3);		
		}
	}

	for (var i = 0; i < tiemposCorrectos.length; i++) {
		margenesCorrectosSuperior[i] = parseInt(tiemposCorrectos[i]) + parseInt(tiemposCorrectos[i] * (dificultad / 100)) + compensation;//error relativo a la duracion

		margenesCorrectosInferior[i] = parseInt(tiemposCorrectos[i]) - parseInt(tiemposCorrectos[i] * (dificultad / 100)) - compensation;//error relativo a la duracion
	}

	// getNotesWidth();
	//poner el intervalo en el boton
	if (voz == "soprano") {
		for (var i = 0; i < noteLetter.length; i++) {
			noteLetterSoprano["notas"][i] = noteLetter[i];
			noteLetterSoprano["tiempos"][i] = tiemposCorrectos[i];
		}
	}

	if (voz == "tenor") {
		for (var i = 0; i < noteLetter.length; i++) {
			noteLetterTenor["notas"][i] = noteLetter[i];
			noteLetterTenor["tiempos"][i] = tiemposCorrectos[i];
		}
	}
	for (var i = 0; i < noteLetter.length; i++) {
		arrayDeIntervalos[i] = mostrarNombreIntervalo(getIntervaloArmonico(cantusExtendido[i], noteLetter[i]));
	}
	//poner el intervalo en el boton
	if (voz == "alto") {
		for (var i = 0; i < noteLetter.length; i++) {
			noteLetterAlto["notas"][i] = noteLetter[i];
			noteLetterAlto["tiempos"][i] = tiemposCorrectos[i];
		}
	}
	if (voz == "alto") { 
		var tiemposAcumulados = 0;
		var contadorTenor = 0;
		for (var i = 0; i < noteLetter.length; i++) {
			// if (tiemposAcumulados <  msPerBeat*numeroTiemposCompas) { //version una nota por compas en  tenor
			if (tiemposAcumulados <  noteLetterTenor["tiempos"][contadorTenor]) {
				tiemposAcumulados += tiemposCorrectos[i];
				noteLetterTenor["intervaloConAlto"][i] = 
					mostrarNombreIntervalo(getIntervaloArmonico(noteLetterTenor["notas"][contadorTenor], noteLetterAlto["notas"][i]));
			}else{
				tiemposAcumulados = 0;
				contadorTenor++;
				noteLetterTenor["intervaloConAlto"][i] =
				 mostrarNombreIntervalo(getIntervaloArmonico(noteLetterTenor["notas"][contadorTenor], noteLetterAlto["notas"][i]));
				tiemposAcumulados += tiemposCorrectos[i];
			}
		}
	}

	if (voz == "bajo") {
		for (var i = 0; i < noteLetter.length; i++) {
			noteLetterBajo["notas"][i] = noteLetter[i];
			noteLetterBajo["tiempos"][i] = tiemposCorrectos[i];
		}
	}
	if (voz == "bajo") { 
		for (var i = 0; i < noteLetterBajo["notas"].length; i++) {
			noteLetterBajo["intervaloConTenor"][i] = 
				mostrarNombreIntervalo(getIntervaloArmonico(noteLetterBajo["notas"][i], noteLetterTenor["notas"][i]));
		}
	}


	//
	for (var i = 0; i < frecuenciaNota.length; i++) {
			frecuencias[voz][i] = frecuenciaNota[i];
	}	
}

// var song = 'B/2A/2|"G"G/2F/2G/2A/2 GB,/2C/2|"G"D/2E/2D/2B,/2 DG/2A/2| "G"BB "Em"B/2A/2G/2A/2|"Am"BA "D7"AB/2A/2| "G"G/2F/2G/2A/2 GB,/2C/2|"G"D/2E/2D/2B,/2 DG/2A/2|"G"B/2de/2 "Em"d/2B/2G/2A/2| "D7"BA "G"G:|'; 

function saltarCaracter(pointer) {
	if (pointer <  song.length - 1) {
		while(!song[pointer].match(notSkipCharacters)){
			pointer++;
		}
	}
}
// C-C-D/
