var context, oscillator;
context = new AudioContext;
var counterOscillator = 0;
var gainNode;
var setIntervalNotas;

var contextSoprano, oscillatorSoprano, oscillatorBajo;
//compressor
var compressor = context.createDynamicsCompressor();

var convolver = context.createConvolver();

function oscillatorFunction() {
	if (counterOscillator >= longitudCantus) {
		clearInterval(setIntervalNotas);
		oscillator.stop();
		// oscillatorSoprano.stop();
		oscillatorBajo.stop();

		playOscillator();
	}else{
		if (oscillator) {
			oscillator.stop();
			oscillatorSoprano.stop();
			oscillatorBajo.stop();
		}
		gainNode = context.createGain();
		gainNode.gain.value = 1;
		gainNode.gain.setTargetAtTime(0, context.currentTime, 0.15);
		gainNode.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);

		// console.log("cantus : " + cantus);
		//oscillator cantus
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
		oscillatorSoprano = context.createOscillator();
		// oscillatorSoprano.frequency.value = 
		// 	frecuenciaNotas[soprano[counterOscillator]]["hz"];
		oscillatorSoprano.frequency.value = 
			getFrequency(soprano, counterOscillator, 0, key);
		oscillatorSoprano.connect(gainNode);
		oscillatorSoprano.start(0);
		// oscillator.stop();
	

		//oscillator bajo//
		oscillatorBajo = context.createOscillator();
		// oscillatorBajo.frequency.value = 
		// 	frecuenciaNotas[Bajo[counterOscillator]]["hz"];
		oscillatorBajo.frequency.value = 
			getFrequency(bajo, counterOscillator, 0, key);
		oscillatorBajo.connect(gainNode);
		oscillatorBajo.start(0);
		// oscillator.stop();


		counterOscillator++;
		// counterOscillatorSoprano++;
	}

}


function playOscillator() {
	//oscillator
	counterOscillator = 0;
	setIntervalNotas = setInterval(oscillatorFunction, 700);
}

// function playOscillatorSoprano(argument) {
// 	counterOscillatorSoprano = 0;
// 	setIntervalNotasSoprano = setInterval(oscillatorFunctionSoprano, 500);
	
// }
