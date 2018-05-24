function oscillatorFunctionAlto() {
	// if (contadorOscillatorAlto >= alto.length) { //previo a ligaduras
	if (contadorOscillatorAlto >= noteLetterAlto["notas"].length) { //a partir de ligaduras
		clearInterval(setIntervalNotasAlto);
		oscillatorAlto.stop();
		
		playOscillatorAlto();
	}else{
		getPosicionCursor();
		if (oscillatorAlto) {
			oscillatorAlto.stop();
		}
		gainNodeAlto = context.createGain();
		gainNodeAlto.gain.value = 1;
		gainNodeAlto.gain.setTargetAtTime(setTarget, context.currentTime, 0.15);
		gainNodeAlto.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);

		//Alto
		oscillatorAlto = context.createOscillator();
		// console.log("noteLetter[contadorOscillatorAlto] : " + noteLetterAlto["notas"][contadorOscillatorAlto]);
		oscillatorAlto.frequency.value = 
			frecuencias["alto"][contadorOscillatorAlto];
			// getFrequency(noteLetterAlto["notas"] , contadorOscillatorAlto, 0, key);
		oscillatorAlto.connect(gainNodeAlto);
		oscillatorAlto.start(0);
		
		// document.getElementById("demo").innerHTML = arrayDeIntervalos[contadorOscillatorAlto];
		// document.getElementById("intervaloSonando").innerHTML 
		// 	= noteLetterTenor["intervaloConAlto"][contadorOscillatorAlto];
		// document.getElementById("intervaloSonando").style.left 
		// 	=  (getPosicionCursor().left - 15) + "px";
		// document.getElementById("intervaloSonando").style.top 
		// 	=  (getPosicionCursor().top +75) + "px";
		
		///
		clearInterval(setIntervalNotasAlto);
		setIntervalNotasAlto = setInterval(oscillatorFunctionAlto, noteLetterAlto["tiempos"][contadorOscillatorAlto]);		

		contadorOscillatorAlto++;
		contadorAltoTiempos++;
	}

}

var contadorAltoTiempos = 0;
function playOscillatorAlto(argument) {
	// console.log("frecuencias[alto] : " + frecuencias["alto"]);
	// console.log("noteLetterAlto : " + noteLetterAlto["notas"]);
	contadorOscillatorAlto = 0;
	contadorAltoTiempos = 0;
	// console.log("OscilatortiemposCorrectos : " + tiemposCorrectos);
	        ABCJS.startAnimation(outputElement, tuneObjectArray[0],
			 {showCursor : true, bpm : (60000 /msPerBeat),});
	oscillatorFunctionAlto();//para no tener delay en la 1a ejecucion
}
