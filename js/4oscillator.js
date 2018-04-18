var context, oscillator;
context = new AudioContext;
var counterOscillator = 0;
var gainNode;
var setIntervalNotas;

var contextSoprano, oscillatorSoprano;
var counterOscillatorSoprano = 0;
var gainNodeSoprano;
var setIntervalNotasSoprano;


//compressor
var compressor = context.createDynamicsCompressor();
var compressorSoprano = context.createDynamicsCompressor();
// compressor.threshold.setValueAtTime(-50, context.currentTime);
// compressor.knee.setValueAtTime(40, context.currentTime);
// compressor.ratio.setValueAtTime(12, context.currentTime);
// compressor.attack.setValueAtTime(0, context.currentTime);
// compressor.release.setValueAtTime(0.25, context.currentTime);

// connect the AudioBufferSourceNode to the destination
// source.connect(context.destination);

// button.onclick = function() {
//   var active = button.getAttribute('data-active');
//   if(active == 'false') {
//     button.setAttribute('data-active', 'true');
//     button.innerHTML = 'Remove compression';

//     source.disconnect(context.destination);
//     source.connect(compressor);
//     compressor.connect(context.destination);

function oscillatorFunction() {
	if (counterOscillator >= longitudCantus) {
		clearInterval(setIntervalNotas);
		oscillator.stop();
		oscillatorSoprano.stop();

		playOscillator();
	}else{
		if (oscillator) {
			oscillator.stop();
			oscillatorSoprano.stop();
		}
		oscillator = context.createOscillator();
		gainNode = context.createGain();
		gainNode.gain.value = 1;
		oscillator.connect(gainNode);
		oscillator.type = oscillator.syne;
		oscillator.frequency.value = frecuenciaNotas[cantus[counterOscillator]]["hz"];
		//el primer param es a lo q tiende de 0% a 100%, el segundo cuando empieza, , el tercero es la velocidad a la q tiende(0max 1min)
		gainNode.gain.setTargetAtTime(0, context.currentTime, 0.15);
		gainNode.connect(compressor);
		// gainNode.gain.linearRampToValueAtTime(0.3, context.currentTime + 0.4);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.knee.setValueAtTime(40, context.currentTime);
		compressor.ratio.setValueAtTime(12, context.currentTime);
		compressor.attack.setValueAtTime(0, context.currentTime);
		compressor.release.setValueAtTime(0.25, context.currentTime);
		// audioSong.play();
		compressor.connect(context.destination);
		// console.log("context.currentTime : " + context.currentTime);
		oscillator.start(0);
		// oscillator.stop();
		counterOscillator++;

		oscillatorSoprano = context.createOscillator();
		gainNodeSoprano = context.createGain();
		gainNodeSoprano.gain.value = 1;
		gainNodeSoprano.gain.setTargetAtTime(0, context.currentTime, 0.15);
		// gainNodeSoprano.gain.linearRampToValueAtTime(0.3, context.currentTime + 0.4);
		oscillatorSoprano.connect(gainNodeSoprano);
		oscillatorSoprano.type = oscillatorSoprano.syne;
		oscillatorSoprano.frequency.value = 
			frecuenciaNotas[soprano[counterOscillatorSoprano]]["hz"];
		//el primer param es a lo q tiende de 0% a 100%, el segundo cuando empieza, , el tercero es la velocidad a la q tiende(0max 1min)
		
		compressorSoprano.threshold.setValueAtTime(-50, context.currentTime);
		compressorSoprano.knee.setValueAtTime(40, context.currentTime);
		compressorSoprano.ratio.setValueAtTime(12, context.currentTime);
		compressorSoprano.attack.setValueAtTime(0, context.currentTime);
		compressorSoprano.release.setValueAtTime(0.25, context.currentTime);

		gainNodeSoprano.connect(compressorSoprano);
		// audioSong.play();
		compressorSoprano.connect(context.destination);

		// gainNodeSoprano.connect(context.destination);
		// audioSong.play();
		// oscillatorSoprano.connect(context.destination);
		// console.log("context.currentTime : " + context.currentTime);
		oscillatorSoprano.start(0);
		// oscillator.stop();
		counterOscillatorSoprano++;
	}

}


function playOscillator() {
	//oscillator
	counterOscillator = 0;
	counterOscillatorSoprano = 0;
	setIntervalNotas = setInterval(oscillatorFunction, 700);
}

// function playOscillatorSoprano(argument) {
// 	counterOscillatorSoprano = 0;
// 	setIntervalNotasSoprano = setInterval(oscillatorFunctionSoprano, 500);
	
// }
