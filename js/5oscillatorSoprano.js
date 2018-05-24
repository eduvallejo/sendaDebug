function oscillatorFunctionSoprano() {
	// if (contadorOscillatorSoprano >= soprano.length) { //previo a ligaduras
	if (contadorOscillatorSoprano >= noteLetterSoprano["notas"].length) { //a partir de ligaduras
		clearInterval(setIntervalNotasSoprano);
		oscillatorSoprano.stop();
		
		playOscillatorSoprano();
	}else{
		getPosicionCursor();
		if (oscillatorSoprano) {
			oscillatorSoprano.stop();
		}
		gainNodeSoprano = context.createGain();
		gainNodeSoprano.gain.value = 1;
		gainNodeSoprano.gain.setTargetAtTime(setTarget, context.currentTime, 0.15);
		gainNodeSoprano.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);

		//Soprano
		oscillatorSoprano = context.createOscillator();
		// console.log("noteLetter[contadorOscillatorSoprano] : " + noteLetterSoprano["notas"][contadorOscillatorSoprano]);
		oscillatorSoprano.frequency.value = 
			frecuencias["soprano"][contadorOscillatorSoprano];
			// getFrequency(noteLetterSoprano["notas"] , contadorOscillatorSoprano, 0, key);
		oscillatorSoprano.connect(gainNodeSoprano);
		oscillatorSoprano.start(0);
		
		// document.getElementById("demo").innerHTML = arrayDeIntervalos[contadorOscillatorSoprano];
		// document.getElementById("intervaloSonando").innerHTML 
		// 	= noteLetterTenor["intervaloConSoprano"][contadorOscillatorSoprano];
		// document.getElementById("intervaloSonando").style.left 
		// 	=  (getPosicionCursor().left - 15) + "px";
		// document.getElementById("intervaloSonando").style.top 
		// 	=  (getPosicionCursor().top +75) + "px";
		
		///
		clearInterval(setIntervalNotasSoprano);
		setIntervalNotasSoprano = setInterval(oscillatorFunctionSoprano, noteLetterSoprano["tiempos"][contadorOscillatorSoprano]);		

		contadorOscillatorSoprano++;
		contadorSopranoTiempos++;
	}

}

var contadorSopranoTiempos = 0;
function playOscillatorSoprano(argument) {
	// console.log("frecuencias[soprano] : " + frecuencias["soprano"]);
	// console.log("noteLetterSoprano : " + noteLetterSoprano["notas"]);
	contadorOscillatorSoprano = 0;
	contadorSopranoTiempos = 0;
	// console.log("OscilatortiemposCorrectos : " + tiemposCorrectos);
	   //      ABCJS.startAnimation(outputElement, tuneObjectArray[0],
			 // {showCursor : true, bpm : (60000 /msPerBeat),});
	oscillatorFunctionSoprano();//para no tener delay en la 1a ejecucion
}
