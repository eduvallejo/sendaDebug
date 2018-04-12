var context, oscillator;
context = new AudioContext;
var counterOscillator = 0;
var gainNode;
var setIntervalNotas;


function oscillatorFunction() {
	if (counterOscillator >= longitudCantus) {
		clearInterval(setIntervalNotas);
		oscillator.stop();
		playOscillator();
	}else{
		if (oscillator) {
			oscillator.stop();
		}
		oscillator = context.createOscillator();
		gainNode = context.createGain();
		gainNode.gain.value = 1.2;
		oscillator.connect(gainNode);
		oscillator.type = oscillator.syne;
		oscillator.frequency.value = frecuenciaNotas[cantus[counterOscillator]]["hz"];
		//el primer param es a lo q tiende, el sonido, el tercero es la velocidad a la q tiende
		gainNode.gain.setTargetAtTime(0.2, 0, 0.8);
		gainNode.connect(context.destination);
		// audioSong.play();
		// oscillator.connect(context.destination);
		// console.log("context.currentTime : " + context.currentTime);
		oscillator.start(0);
		// oscillator.stop();
		counterOscillator++;
	}
}
function playOscillator() {
	//oscillator
	counterOscillator = 0;
	setIntervalNotas = setInterval(oscillatorFunction, 1000)
}