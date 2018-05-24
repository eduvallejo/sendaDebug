function oscillatorFunctionAlto() {
	// if (contadorOscillatorAlto >= alto.length) { //previo a ligaduras
	if (contadorOscillatorAlto >= objeto["alto"]["notas"].length) { //a partir de ligaduras
		clearInterval(setIntervalNotasAlto);
		objeto["soprano"]["alto"].stop();
		
		playOscillatorAlto();
	}else{
		getPosicionCursor();
		if (objeto["soprano"]["alto"]) {
			objeto["soprano"]["alto"].stop();
		}
		gainNodeAlto = context.createGain();
		gainNodeAlto.gain.value = 1;
		gainNodeAlto.gain.setTargetAtTime(setTarget, context.currentTime, 0.15);
		gainNodeAlto.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);

		//Alto
		objeto["soprano"]["alto"] = context.createOscillator();
		// console.log("noteLetter[contadorOscillatorAlto] : " + objeto["alto"]["notas"][contadorOscillatorAlto]);
		objeto["soprano"]["alto"].frequency.value = 
			objeto["alto"]["frecuencia"][contadorOscillatorAlto];
			// getFrequency(objeto["alto"]["notas"] , contadorOscillatorAlto, 0, key);
		objeto["soprano"]["alto"].connect(gainNodeAlto);
		objeto["soprano"]["alto"].start(0);
		
		// document.getElementById("demo").innerHTML = arrayDeIntervalos[contadorOscillatorAlto];
		// document.getElementById("intervaloSonando").innerHTML 
		// 	= objeto["tenor"]["intervaloConAlto"][contadorOscillatorAlto];
		// document.getElementById("intervaloSonando").style.left 
		// 	=  (getPosicionCursor().left - 15) + "px";
		// document.getElementById("intervaloSonando").style.top 
		// 	=  (getPosicionCursor().top +75) + "px";
		
		///
		clearInterval(setIntervalNotasAlto);
		setIntervalNotasAlto = setInterval(oscillatorFunctionAlto, objeto["alto"]["tiempos"][contadorOscillatorAlto]);		

		contadorOscillatorAlto++;
		contadorAltoTiempos++;
	}

}

var contadorAltoTiempos = 0;
function playOscillatorAlto(argument) {
	// console.log("frecuencias[alto] : " + objeto["alto"]["frecuencia"]);
	// console.log("objeto["alto"] : " + objeto["alto"]["notas"]);
	contadorOscillatorAlto = 0;
	contadorAltoTiempos = 0;
	// console.log("OscilatortiemposCorrectos : " + tiemposCorrectos);
	        ABCJS.startAnimation(outputElement, tuneObjectArray[0],
			 {showCursor : true, bpm : (60000 /msPerBeat),});
	oscillatorFunctionAlto();//para no tener delay en la 1a ejecucion
}
