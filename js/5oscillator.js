var context, oscillator;
context = new AudioContext;
var contadorOscillatorTenor = 0;
var contadorOscillatorAlto = 0;
var contadorOscillatorBajo = 0;
var gainNode, gainNodeAlto;
var setIntervalNotas, setIntervalNotasAlto, setIntervalNotasBajo;

var contextSoprano, oscillatorSoprano, oscillatorBajo, oscillatorAlto;
//compressor
var compressor = context.createDynamicsCompressor();

var convolver = context.createConvolver();

// var oscillatorLetters = /[a-gA-GzZ]/;//letters involved in time
// console.log("alto : " + alto);

function oscillatorFunctionTenor() {
	if (contadorOscillatorTenor >= noteLetterTenor["notas"].length) {
		clearInterval(setIntervalNotas);
		oscillator.stop();
		// oscillatorSoprano.stop();
		// oscillatorAlto.stop();
		playOscillatorTenor();
	}else{
		if (oscillator) {
			oscillator.stop();
			// oscillatorSoprano.stop();
			// oscillatorAlto.stop();
		}
		gainNode = context.createGain();
		gainNode.gain.value = 1;
		gainNode.gain.setTargetAtTime(setTarget, context.currentTime, 0.25);
		gainNode.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);
		//oscillator cantus(tenor)
		oscillator = context.createOscillator();
		// oscillator.frequency.value = frecuenciaNotas[cantus[contadorOscillatorTenor]]["hz"];
		// console.log("noteLetter[notas] : " + noteLetterTenor["notas"][contadorOscillatorTenor]);
		// console.log("contadorOscillator : " + contadorOscillator);
		oscillator.frequency.value = 
			getFrequency(noteLetterTenor["notas"], contadorOscillatorTenor, 0, key);

		//el primer param es a lo q tiende de 0% a 100%, el segundo cuando empieza, , el tercero es la velocidad a la q tiende(0max 1min)
		oscillator.connect(gainNode);
		// gainNode.gain.linearRampToValueAtTime(0.3, context.currentTime + 0.4);
		// console.log("context.currentTime : " + context.currentTime);
		oscillator.start(0);

		contadorOscillatorTenor++;
		// contadorOscillatorSoprano++;
	}

}




function oscillatorFunctionAlto() {
	// if (contadorOscillatorAlto >= alto.length) { //previo a ligaduras
	if (contadorOscillatorAlto >= noteLetterAlto["notas"].length) { //a partir de ligaduras
		clearInterval(setIntervalNotasAlto);
		oscillatorAlto.stop();
		// console.log("alto : " + alto);

		// // contadorOscillatorAlto = 0;
		// // contadorAltoTiempos = 0;
		
		// // setIntervalNotasAlto = setInterval(oscillatorFunctionAlto, 
		// tiemposCorrectos[contadorAltoTiempos]);

		playOscillatorAlto();
    //     ABCJS.stopAnimation();
    //     // console.log("msPerBeat	 : " + msPerBeat	);
    //       ABCJS.startAnimation(outputElement, tuneObjectArray[0],
			 // {showCursor : true, bpm : (60000 / msPerBeat),});

        //mirar de poner bien el bpm adecuado
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
			// getFrequency(alto , contadorOscillatorAlto, 0, key);
			getFrequency(noteLetterAlto["notas"] , contadorOscillatorAlto, 0, key);
		oscillatorAlto.connect(gainNodeAlto);
		oscillatorAlto.start(0);
		
		// document.getElementById("demo").innerHTML = arrayDeIntervalos[contadorOscillatorAlto];
		document.getElementById("intervaloSonando").innerHTML 
			= noteLetterTenor["intervaloConAlto"][contadorOscillatorAlto];
		document.getElementById("intervaloSonando").style.left 
			=  (getPosicionCursor().left - 15) + "px";
		document.getElementById("intervaloSonando").style.top 
			=  (getPosicionCursor().top +75) + "px";

		// console.log("contadorOscillatorAlto : " + contadorOscillatorAlto);
		// contadorOscillatorSoprano++;
		// console.log("alto[" + contadorOscillatorAlto + "] : " + alto[contadorOscillatorAlto]);
		clearInterval(setIntervalNotasAlto);
		setIntervalNotasAlto = setInterval(oscillatorFunctionAlto, noteLetterAlto["tiempos"][contadorOscillatorAlto]);		
// tiemposCorrectos[contadorAltoTiempos]);
		contadorOscillatorAlto++;
		contadorAltoTiempos++;
	}

}

var contadorAltoTiempos = 0;
function playOscillatorAlto(argument) {
	// console.log("msPerBeat : " + msPerBeat);
	contadorOscillatorAlto = 0;
	contadorAltoTiempos = 0;
	// console.log("OscilatortiemposCorrectos : " + tiemposCorrectos);
	        ABCJS.startAnimation(outputElement, tuneObjectArray[0],
			 {showCursor : true, bpm : (60000 /msPerBeat),});
	oscillatorFunctionAlto();//para no tener delay en la 1a ejecucion
}

function playOscillatorTenor() {
	// console.log("alto : " + alto);
	//oscillator
	contadorOscillatorTenor = 0;
	oscillatorFunctionTenor();//para no tener delay en la 1a ejecucion
	// setIntervalNotas = setInterval(oscillatorFunction, msPerBeat*4);
	setIntervalNotas = setInterval(oscillatorFunctionTenor, noteLetterTenor["tiempos"][contadorOscillatorTenor]);
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