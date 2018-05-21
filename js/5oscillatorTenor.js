var context;
context = new AudioContext;
var contadorOscillatorTenor = 0;
var contadorOscillatorAlto = 0;
var contadorOscillatorBajo = 0;
var gainNode, gainNodeAlto;
var setIntervalNotasTenor, setIntervalNotasAlto, setIntervalNotasBajo;

var contextSoprano, oscillatorTenor, oscillatorBajo, oscillatorAlto;
//compressor
var compressor = context.createDynamicsCompressor();

var convolver = context.createConvolver();

// var oscillatorLetters = /[a-gA-GzZ]/;//letters involved in time
// console.log("alto : " + alto);

function oscillatorFunctionTenor() {
	if (contadorOscillatorTenor >= noteLetterTenor["notas"].length) {
		clearInterval(setIntervalNotasTenor);
		oscillatorTenor.stop();
		
		playOscillatorTenor();
	}else{
		if (oscillatorTenor) {
			oscillatorTenor.stop();
			// oscillatorSoprano.stop();
			// oscillatorAlto.stop();
		}
		gainNode = context.createGain();
		gainNode.gain.value = 1;
		gainNode.gain.setTargetAtTime(setTarget, context.currentTime, 0.25);
		gainNode.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);
		//oscillatorTenor cantus(tenor)
		oscillatorTenor = context.createOscillator();
		// oscillatorTenor.frequency.value = frecuenciaNotas[cantus[contadorOscillatorTenor]]["hz"];
		// console.log("noteLetter[notas] : " + noteLetterTenor["notas"][contadorOscillatorTenor]);
		// console.log("contadorOscillator : " + contadorOscillator);
		oscillatorTenor.frequency.value = 
			getFrequency(noteLetterTenor["notas"], contadorOscillatorTenor, 0, key);

		//el primer param es a lo q tiende de 0% a 100%, el segundo cuando empieza, , el tercero es la velocidad a la q tiende(0max 1min)
		oscillatorTenor.connect(gainNode);
		// gainNode.gain.linearRampToValueAtTime(0.3, context.currentTime + 0.4);
		// console.log("context.currentTime : " + context.currentTime);
		oscillatorTenor.start(0);

		clearInterval(setIntervalNotasTenor);
		setIntervalNotasTenor = 
			setInterval(oscillatorFunctionTenor, noteLetterTenor["tiempos"][contadorOscillatorTenor]);		
		
		contadorOscillatorTenor++;
		// contadorTenorTiempos++;

	}

}





function playOscillatorTenor() {
	// console.log("alto : " + alto);
	//oscillator
	contadorOscillatorTenor = 0;
	oscillatorFunctionTenor();//para no tener delay en la 1a ejecucion
	// setIntervalNotasTenor = setInterval(oscillatorFunctionTenor, noteLetterTenor["tiempos"][contadorOscillatorTenor]);
}


var posicionCursor;
function getPosicionCursor(argument){
    posicionCursor = document.getElementsByClassName("cursor")[0];
    // console.log("posicionCursor.top : " + posicionCursor.getBoundingClientRect().top);
    return posicionCursor.getBoundingClientRect();
}
function changeSetInterval(argument){
    clearInterval(setIntervalNotasAlto);
    setIntervalNotasAlto = setInterval(oscillatorFunctionAlto, 
		tiemposCorrectos[contadorAltoTiempos]);
}

function showAbc(argument) {
	alert(escalaDo);	
}

function oscillatorFunctionBajo() {
	if (contadorOscillatorBajo >= bajo.length) {
		clearInterval(setIntervalNotasBajo);
		oscillatorBajo.stop();
		// console.log("Bajo : " + Bajo);

		playOscillatorBajo();
	}else{
		if (oscillatorBajo) {
			oscillatorBajo.stop();
		}
		gainNodeBajo = context.createGain();
		gainNodeBajo.gain.value = 1;
		gainNodeBajo.gain.setTargetAtTime(0, context.currentTime, 0.15);
		gainNodeBajo.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);

		// oscillator bajo//
		oscillatorBajo = context.createOscillator();
		oscillatorBajo.frequency.value = 
			getFrequency(bajo, contadorOscillatorAlto, 0, key);
		oscillatorBajo.connect(gainNodeAlto);
		oscillatorBajo.start(0);

		// console.log("contadorOscillatorAlto : " + contadorOscillatorAlto);
		contadorOscillatorBajo++;
		// contadorOscillatorSoprano++;
	}

}

function playOscillatorBajo() {
	// console.log("alto : " + alto);
	//oscillatorBajo
	contadorOscillatorBajo = 0;
	oscillatorFunctionBajo();//para no tener delay en la 1a ejecucion
	setIntervalNotas = setInterval(oscillatorFunctionBajo, 500);
}