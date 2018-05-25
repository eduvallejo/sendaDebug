function oscillatorFunctionSoprano() {
	// if (contadorOscillatorSoprano >= soprano.length) { //previo a ligaduras
	if (contadorOscillatorSoprano >= objeto["soprano"]["notas"].length) { //a partir de ligaduras
		clearInterval(setIntervalNotasSoprano);
		objeto["soprano"]["soprano"].stop();
		
		playOscillatorSoprano();
	}else{
		getPosicionCursor();
		if (objeto["soprano"]["soprano"]) {
			objeto["soprano"]["soprano"].stop();
		}
		gainNodeSoprano = context.createGain();
		gainNodeSoprano.gain.value = 1;
		gainNodeSoprano.gain.setTargetAtTime(setTarget, context.currentTime, 0.15);
		gainNodeSoprano.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);

		//Soprano
		objeto["soprano"]["soprano"] = context.createOscillator();
		// console.log("noteLetter[contadorOscillatorSoprano] : " + objeto["soprano"]["notas"][contadorOscillatorSoprano]);
		objeto["soprano"]["soprano"].frequency.value = 
			objeto["soprano"]["frecuencia"][contadorOscillatorSoprano];
			// getFrequency(objeto["soprano"]["notas"] , contadorOscillatorSoprano, 0, key);
		objeto["soprano"]["soprano"].connect(gainNodeSoprano);
		objeto["soprano"]["soprano"].start(0);
		
		// document.getElementById("demo").innerHTML = arrayDeIntervalos[contadorOscillatorSoprano];
		// document.getElementById("intervaloSonando").innerHTML 
		// 	= objeto["tenor"]["intervaloConSoprano"][contadorOscillatorSoprano];
		// document.getElementById("intervaloSonando").style.left 
		// 	=  (getPosicionCursor().left - 15) + "px";
		// document.getElementById("intervaloSonando").style.top 
		// 	=  (getPosicionCursor().top +75) + "px";
		
		///
		clearInterval(setIntervalNotasSoprano);
		setIntervalNotasSoprano = setInterval(oscillatorFunctionSoprano, objeto["soprano"]["tiempos"][contadorOscillatorSoprano]);		

		contadorOscillatorSoprano++;
		contadorSopranoTiempos++;
	}

}

var contadorSopranoTiempos = 0;
function playOscillatorSoprano(argument) {
	// console.log("frecuencias[soprano] : " + objeto["soprano"]["frecuencia"]);
	// console.log("objeto["soprano"] : " + objeto["soprano"]["notas"]);
	contadorOscillatorSoprano = 0;
	contadorSopranoTiempos = 0;
	// console.log("OscilatortiemposCorrectos : " + tiemposCorrectos);
	   //      ABCJS.startAnimation(outputElement, tuneObjectArray[0],
			 // {showCursor : true, bpm : (60000 /msPerBeat),});
	oscillatorFunctionSoprano();//para no tener delay en la 1a ejecucion
}

function stopOscillators(argument){  
	ABCJS.stopAnimation(); 
	switch (numeroVoces) {
	  case 2:
		objeto["soprano"]["soprano"].stop(0);
		objeto["soprano"]["alto"].stop(0);
   		clearInterval(setIntervalNotasSoprano);
   		clearInterval(setIntervalNotasAlto);

	    break;
	  case 3:
		objeto["soprano"]["soprano"].stop(0);
		objeto["soprano"]["alto"].stop(0);
		objeto["soprano"]["tenor"].stop(0);
   		clearInterval(setIntervalNotasSoprano);
   		clearInterval(setIntervalNotasAlto);
   		clearInterval(setIntervalNotasTenor);
	    break;
	  case 4:
		objeto["soprano"]["soprano"].stop(0);
		objeto["soprano"]["alto"].stop(0);
		objeto["soprano"]["tenor"].stop(0);
		objeto["soprano"]["bajo"].stop(0);
   		clearInterval(setIntervalNotasSoprano);
   		clearInterval(setIntervalNotasAlto);
   		clearInterval(setIntervalNotasTenor);
   		clearInterval(setIntervalNotasBajo);
	  break;
	  default:
		objeto["soprano"]["soprano"].stop(0);
   		clearInterval(setIntervalNotasSoprano);
	    break;
	}
}
