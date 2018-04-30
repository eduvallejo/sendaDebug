var context, oscillator;
context = new AudioContext;
var counterOscillator = 0;
var counterOscillatorAlto = 0;
var gainNode, gainNodeAlto;
var setIntervalNotas, setIntervalNotasAlto;

var contextSoprano, oscillatorSoprano, oscillatorBajo, oscillatorAlto;
//compressor
var compressor = context.createDynamicsCompressor();

var convolver = context.createConvolver();

function oscillatorFunction() {
	if (counterOscillator >= longitudCantus) {
		clearInterval(setIntervalNotas);
		oscillator.stop();
		// oscillatorSoprano.stop();
		// oscillatorBajo.stop();
		// oscillatorAlto.stop();

		playOscillator();
	}else{
		if (oscillator) {
			oscillator.stop();
			// oscillatorSoprano.stop();
			// oscillatorBajo.stop();
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

function oscillatorFunctionAlto() {
	if (counterOscillatorAlto >= alto.length) {
		clearInterval(setIntervalNotasAlto);
		oscillatorAlto.stop();
		// console.log("alto : " + alto);

		playOscillatorAlto();
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


		//oscillator bajo//
		// oscillatorBajo = context.createOscillator();
		// oscillatorBajo.frequency.value = 
		// 	getFrequency(bajo, counterOscillator, 0, key);
		// oscillatorBajo.connect(gainNode);
		// oscillatorBajo.start(0);

		// console.log("counterOscillatorAlto : " + counterOscillatorAlto);
		counterOscillatorAlto++;
		// counterOscillatorSoprano++;
	}

}

function playOscillator() {
	//oscillator
	counterOscillator = 0;
	oscillatorFunction();//para no tener delay en la 1a ejecucion
	setIntervalNotas = setInterval(oscillatorFunction, 1200);
}

function playOscillatorAlto(argument) {
	counterOscillatorAlto = 0;
	oscillatorFunctionAlto();//para no tener delay en la 1a ejecucion
	setIntervalNotasAlto = setInterval(oscillatorFunctionAlto, 600);
	
}
function showAbc(argument) {
	alert(escalaDo);	
}
