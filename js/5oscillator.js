var context, oscillator;
context = new AudioContext;
var counterOscillator = 0;
var counterOscillatorAlto = 0;
var counterOscillatorBajo = 0;
var gainNode, gainNodeAlto;
var setIntervalNotas, setIntervalNotasAlto, setIntervalNotasBajo;

var contextSoprano, oscillatorSoprano, oscillatorBajo, oscillatorAlto;
//compressor
var compressor = context.createDynamicsCompressor();

var convolver = context.createConvolver();

// var oscillatorLetters = /[a-gA-GzZ]/;//letters involved in time
// console.log("alto : " + alto);

function oscillatorFunction() {
	if (counterOscillator >= longitudCantus) {
		clearInterval(setIntervalNotas);
		oscillator.stop();
		// oscillatorSoprano.stop();
		// oscillatorAlto.stop();

		playOscillator();
	}else{
		if (oscillator) {
			oscillator.stop();
			// oscillatorSoprano.stop();
			// oscillatorAlto.stop();
		}
		gainNode = context.createGain();
		gainNode.gain.value = 1;
		gainNode.gain.setTargetAtTime(0, context.currentTime, 0.25);
		gainNode.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);

		//oscillator cantus(tenor)
		oscillator = context.createOscillator();
		// oscillator.frequency.value = frecuenciaNotas[cantus[counterOscillator]]["hz"];
		oscillator.frequency.value = 
			getFrequency(cantus, counterOscillator, 0, key);

		//el primer param es a lo q tiende de 0% a 100%, el segundo cuando empieza, , el tercero es la velocidad a la q tiende(0max 1min)
		oscillator.connect(gainNode);
		// gainNode.gain.linearRampToValueAtTime(0.3, context.currentTime + 0.4);
		// console.log("context.currentTime : " + context.currentTime);
		oscillator.start(0);



		//oscillator soprano//
		// oscillatorSoprano = context.createOscillator();
		// oscillatorSoprano.frequency.value = 
		// 	getFrequency(soprano, counterOscillator, 0, key);
		// oscillatorSoprano.connect(gainNode);
		// oscillatorSoprano.start(0);
	

		//oscillator bajo//
		// oscillatorBajo = context.createOscillator();
		// oscillatorBajo.frequency.value = 
		// 	getFrequency(bajo, counterOscillator, 0, key);
		// oscillatorBajo.connect(gainNode);
		// oscillatorBajo.start(0);


		counterOscillator++;
		// counterOscillatorSoprano++;
	}

}


function oscillatorFunctionBajo() {
	if (counterOscillatorBajo >= bajo.length) {
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
			getFrequency(bajo, counterOscillatorAlto, 0, key);
		oscillatorBajo.connect(gainNodeAlto);
		oscillatorBajo.start(0);

		// console.log("counterOscillatorAlto : " + counterOscillatorAlto);
		counterOscillatorBajo++;
		// counterOscillatorSoprano++;
	}

}

function playOscillatorBajo() {
	// console.log("alto : " + alto);
	//oscillatorBajo
	counterOscillatorBajo = 0;
	oscillatorFunctionBajo();//para no tener delay en la 1a ejecucion
	setIntervalNotas = setInterval(oscillatorFunctionBajo, 500);
}


function playOscillator() {
	// console.log("alto : " + alto);
	//oscillator
	counterOscillator = 0;
	oscillatorFunction();//para no tener delay en la 1a ejecucion
	setIntervalNotas = setInterval(oscillatorFunction, 1000);
}

function oscillatorFunctionAlto() {
	if (counterOscillatorAlto >= alto.length) {
		clearInterval(setIntervalNotasAlto);
		oscillatorAlto.stop();
		// console.log("alto : " + alto);

		// playOscillatorAlto();
		counterOscillatorAlto = 0;
		contadorAltoTiempos = 0;

			setIntervalNotasAlto = setInterval(oscillatorFunctionAlto, 
		tiemposCorrectos[contadorAltoTiempos]);

	}else{
		if (oscillatorAlto) {
			oscillatorAlto.stop();
		}
		gainNodeAlto = context.createGain();
		gainNodeAlto.gain.value = 1;
		gainNodeAlto.gain.setTargetAtTime(0, context.currentTime, 0.15);
		gainNodeAlto.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);

		//Alto
		oscillatorAlto = context.createOscillator();
		oscillatorAlto.frequency.value = 
			getFrequency(alto , counterOscillatorAlto, 0, key);
		oscillatorAlto.connect(gainNodeAlto);
		oscillatorAlto.start(0);
		// console.log("alto[counterOscillatorAlto] : " + alto[counterOscillatorAlto]);

		// console.log("counterOscillatorAlto : " + counterOscillatorAlto);
		counterOscillatorAlto++;
		contadorAltoTiempos++;
		// counterOscillatorSoprano++;
	}

}
var contadorAltoTiempos = 0;
function playOscillatorAlto(argument) {
	// for (var i = 0; i < alto.length; i++) {
	// 	alto[i] = alto[i].replace("/", ""); //elimino las quotes de los acordes, asi descode mmas facil

	// }
	counterOscillatorAlto = 0;
	contadorAltoTiempos = 0;
	// console.log("OscilatortiemposCorrectos : " + tiemposCorrectos);
	oscillatorFunctionAlto();//para no tener delay en la 1a ejecucion
	// setIntervalNotasAlto = setInterval(oscillatorFunctionAlto, 
	// 	tiemposCorrectos[contadorAltoTiempos]);
	setIntervalNotasAlto = setInterval(oscillatorFunctionAlto, 
		tiemposCorrectos[contadorAltoTiempos]);
}

function showAbc(argument) {
	alert(escalaDo);	
}
