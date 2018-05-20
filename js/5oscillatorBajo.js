function oscillatorFunctionBajo() {
	// if (contadorOscillatorBajo >= Bajo.length) { //previo a ligaduras
	if (contadorOscillatorBajo >= noteLetterBajo["notas"].length) { //a partir de ligaduras
		clearInterval(setIntervalNotasBajo);
		oscillatorBajo.stop();
		// console.log("Bajo : " + Bajo);

		// // contadorOscillatorBajo = 0;
		// // contadorBajoTiempos = 0;
		
		// // setIntervalNotasBajo = setInterval(oscillatorFunctionBajo, 
		// tiemposCorrectos[contadorBajoTiempos]);

		playOscillatorBajo();
    //     ABCJS.stopAnimation();
    //     // console.log("msPerBeat	 : " + msPerBeat	);
    //       ABCJS.startAnimation(outputElement, tuneObjectArray[0],
			 // {showCursor : true, bpm : (60000 / msPerBeat),});

        //mirar de poner bien el bpm adecuado
	}else{
		// getPosicionCursor();
		if (oscillatorBajo) {
			oscillatorBajo.stop();
		}
		gainNodeBajo = context.createGain();
		gainNodeBajo.gain.value = 1;
		gainNodeBajo.gain.setTargetAtTime(setTarget, context.currentTime, 0.15);
		gainNodeBajo.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);

		//Bajo
		oscillatorBajo = context.createOscillator();
		// console.log("tiemposCorrectos : " + tiemposCorrectos);
		// console.log("noteLetterBajo[tiempos] : " + noteLetterBajo["tiempos"]);
		oscillatorBajo.frequency.value = 
			// getFrequency(Bajo , contadorOscillatorBajo, 0, key);
			getFrequency(noteLetterBajo["notas"] , contadorOscillatorBajo, 0, key);
		oscillatorBajo.connect(gainNodeBajo);
		oscillatorBajo.start(0);
		
		// document.getElementById("intervaloSonandoBajoTenor").innerHTML 
		// 	= noteLetterBajo["intervaloConTenor"][contadorOscillatorBajo];
		// // 	= "hola";
		// document.getElementById("intervaloSonandoBajoTenor").style.left 
		// 	=  (getPosicionCursor().left - 15) + "px";
		// document.getElementById("intervaloSonandoBajoTenor").style.top 
		// 	=  (getPosicionCursor().top +115) + "px";

		// console.log("contadorOscillatorBajo : " + contadorOscillatorBajo);
		// contadorOscillatorSoprano++;
		// console.log("Bajo[" + contadorOscillatorBajo + "] : " + Bajo[contadorOscillatorBajo]);
		clearInterval(setIntervalNotasBajo);
		setIntervalNotasBajo = setInterval(oscillatorFunctionBajo, 
		tiemposCorrectos[contadorBajoTiempos]);
		contadorOscillatorBajo++;
		contadorBajoTiempos++;
	}

}


function changeSetInterval(argument){
    clearInterval(setIntervalNotasBajo);
    setIntervalNotasBajo = setInterval(oscillatorFunctionBajo, 
		tiemposCorrectos[contadorBajoTiempos]);
}

var contadorBajoTiempos = 0;

function playOscillatorBajo() {	
	// console.log("Bajo : " + Bajo);
	//oscillatorBajo
	contadorOscillatorBajo = 0;
	contadorBajoTiempos = 0;
	oscillatorFunctionBajo();//para no tener delay en la 1a ejecucion
	// setIntervalNotas = setInterval(oscillatorFunctionBajo, 500);
}