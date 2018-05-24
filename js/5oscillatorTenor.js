var context;
context = new AudioContext;
var contadorOscillatorSoprano = 0;
var contadorOscillatorTenor = 0;
var contadorOscillatorAlto = 0;
var contadorOscillatorBajo = 0;
var gainNode, gainNodeAlto;
var setIntervalNotasSoprano, setIntervalNotasTenor, setIntervalNotasAlto, setIntervalNotasBajo;

// var objeto["soprano"]["tenor"], objeto["soprano"]["bajo"], objeto["soprano"]["alto"];
//compressor
var compressor = context.createDynamicsCompressor();

var convolver = context.createConvolver();

// var oscillatorLetters = /[a-gA-GzZ]/;//letters involved in time
// console.log("alto : " + alto);

function oscillatorFunctionTenor() {
	if (contadorOscillatorTenor >= objeto["tenor"]["notas"].length) {
		clearInterval(setIntervalNotasTenor);
		objeto["soprano"]["tenor"].stop();
		
		playOscillatorTenor();
	}else{
		if (objeto["soprano"]["tenor"]) {
			objeto["soprano"]["tenor"].stop();
			// objeto["soprano"]["soprano"].stop();
			// objeto["soprano"]["alto"].stop();
		}
		gainNode = context.createGain();
		gainNode.gain.value = 1;
		gainNode.gain.setTargetAtTime(setTarget, context.currentTime, 0.25);
		gainNode.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);
		//objeto["soprano"]["tenor"] cantus(tenor)
		objeto["soprano"]["tenor"] = context.createOscillator();
		// objeto["soprano"]["tenor"].frequency.value = frecuenciaNotas[cantus[contadorOscillatorTenor]]["hz"];
		// console.log("noteLetter[notas] : " + objeto["tenor"]["notas"][contadorOscillatorTenor]);
		// console.log("contadorOscillator : " + contadorOscillator);
		objeto["soprano"]["tenor"].frequency.value = 
			objeto["tenor"]["frecuencia"][contadorOscillatorTenor];
			// getFrequency(objeto["tenor"]["notas"], contadorOscillatorTenor, 0, key);

		//el primer param es a lo q tiende de 0% a 100%, el segundo cuando empieza, , el tercero es la velocidad a la q tiende(0max 1min)
		objeto["soprano"]["tenor"].connect(gainNode);
		// gainNode.gain.linearRampToValueAtTime(0.3, context.currentTime + 0.4);
		// console.log("context.currentTime : " + context.currentTime);
		objeto["soprano"]["tenor"].start(0);

		clearInterval(setIntervalNotasTenor);
		setIntervalNotasTenor = 
			setInterval(oscillatorFunctionTenor, objeto["tenor"]["tiempos"][contadorOscillatorTenor]);		
		
		contadorOscillatorTenor++;
		// contadorTenorTiempos++;

	}

}





function playOscillatorTenor() {
	// console.log("alto : " + alto);
	//oscillator
	contadorOscillatorTenor = 0;
	oscillatorFunctionTenor();//para no tener delay en la 1a ejecucion
	// setIntervalNotasTenor = setInterval(oscillatorFunctionTenor, objeto["tenor"]["tiempos"][contadorOscillatorTenor]);
}


var posicionCursor;
function getPosicionCursor(argument){
    // posicionCursor = document.getElementsByClassName("cursor")[0];
    // return posicionCursor.getBoundingClientRect();
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
		objeto["soprano"]["bajo"].stop();
		// console.log("Bajo : " + Bajo);

		playOscillatorBajo();
	}else{
		if (objeto["soprano"]["bajo"]) {
			objeto["soprano"]["bajo"].stop();
		}
		gainNodeBajo = context.createGain();
		gainNodeBajo.gain.value = 1;
		gainNodeBajo.gain.setTargetAtTime(0, context.currentTime, 0.15);
		gainNodeBajo.connect(compressor);
		compressor.threshold.setValueAtTime(-50, context.currentTime);
		compressor.connect(context.destination);

		// oscillator bajo//
		objeto["soprano"]["bajo"] = context.createOscillator();
		objeto["soprano"]["bajo"].frequency.value = 
			getFrequency(bajo, contadorOscillatorAlto, 0, key);
		objeto["soprano"]["bajo"].connect(gainNodeAlto);
		objeto["soprano"]["bajo"].start(0);

		// console.log("contadorOscillatorAlto : " + contadorOscillatorAlto);
		contadorOscillatorBajo++;
		// contadorOscillatorSoprano++;
	}

}

function playOscillatorBajo() {
	// console.log("alto : " + alto);
	//objeto["soprano"]["bajo"]
	contadorOscillatorBajo = 0;
	oscillatorFunctionBajo();//para no tener delay en la 1a ejecucion
	setIntervalNotas = setInterval(oscillatorFunctionBajo, 500);
}