

var alto = [];
var randomIntervalAltoCantus = [];
for (var i = 0; i < longitudCantus; i++) {
	alto[i] = "0";
	randomIntervalAltoCantus[i] = "0";
}
var intervaloAltoCero = [ unisono, quinta, tercera,  octava];
alto[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloAltoCero)];
alto[1] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloAltoCero)];

var posicionClimaxAlto = posicionClimax + 1;


//se calcilan con respecto al cantus de cda momento
// var intervalosArmonicosAlto = [ octava,quinta,tercera,tercera,tercera, sexta, sexta,sexta, quinta];
var intervalosArmonicosAlto = [ tercera, quinta, sexta, sexta, octava];

//apaño para q las blabcas se apareen con el cantus adecuado 
var cantusDoble = [];
//cantus para blancas
// console.log("cantusDoble : " + cantusDoble);
var contadorTemp = 0;
for (var i = 0; i < cantus.length*2; i++) {
	if (i % 2 == 1) {contadorTemp++;} else {}
	cantusDoble[i] = cantus[i - contadorTemp];
	// console.log(i + " - contadorTemp: " + (i - contadorTemp));
	// cantusDoble[i + contadorTemp] = cantus[i];
	// contadorTemp++;
	// console.log("i : " + i);
}
colocarSensibleYfinal(checkFinalCantus());
// alto[cantusDoble.length - 3] = //la sensible 
// // notasMusicales[getIndexOf(cantusDoble[cantusDoble.length - 1]) + 6];
// notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + 6];
// // var intervaloAltoFin = [ tercera, octava];
// var intervaloAltoFin = [ octava];
// alto[cantusDoble.length - 1] = notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
// alto[cantusDoble.length - 2] = notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
function crearAlto(argument) {
	// BUGs Evitar q los leaps se cuemten cuando no se aplican
	var randomInterval = 1;
	// for (var i = 1; i < posicionClimaxAlto; i++) {
	for (var i = 1; i < (cantusDoble.length - 3); i++) {//las dos ultimas estan predefinidas
		breakInfiniteLoops = 0;
		do{
			breakInfiniteLoops++;
			if (breakInfiniteLoops>40) {
				colgado == true;
				console.log("colgado en  : " + i );
				//tirar para atras si no hay una solucion buena
				// alto[i] =="";
				// randomIntervalAltoCantus[i] = "";
				// i = i - 1; //tirar para atras si no hay una solucion buena
				break;
			}
			randomInterval = randomFunction(intervalosArmonicosAlto) ;
				// console.log("randomInterval : " + randomInterval);		
	
			alto[i] = notasMusicales[notasMusicales.indexOf(cantusDoble[i]) + 
				randomInterval ];	
			randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(alto[i]))
				- ((notasMusicales.indexOf(cantusDoble[i])))) + 1;
			// console.log("alto[" + i + "] : " + alto[i]);	
			// console.log("posicionEnNotasMusicales : " + notasMusicales.indexOf(alto[i]));
			// console.log("getFrecuenciaNotas[" + alto[i] + "] : " + getFrecuenciaNotas(alto[i]));
		//aqui se ponen las reglas del alto 
		}while(//he comentado algunos para poder debugear sin q se cuelgue
			// ((notasMusicales.indexOf(alto[i])  >=  notasMusicales.indexOf(alto[posicionClimaxAlto])) && i != posicionClimaxAlto)
			//octavas seguidas
			checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 5, 5) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],alto[i],alto[i-1] )
			||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 8, 8) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],alto[i],alto[i-1] )
			||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 5, 8) 
			||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 8, 5)
			//5as ocultas (5as por movimiento directo)
			||checkMovimientoDirecto(cantusDoble[i],cantusDoble[i-1],alto[i],alto[i-1] ) && randomIntervalAltoCantus[i] == 5
			//8as ocultas (8as por movimiento directo)
			||checkMovimientoDirecto(cantusDoble[i],cantusDoble[i-1],alto[i],alto[i-1] ) && randomIntervalAltoCantus[i] == 8
			//restore leaps q suben o bajan con ibtervalo contrario de maximo 3a
			||checkLeapsToRestore(alto[i - 2], alto[i - 1],alto[i])
			//chekear q la melodia no salta intervalos prohibidos melodicamente
			||checkIndexBetween(alto[i - 1], alto[i])
			// ||checkIndexBetween(alto[i], alto[i + 1])
			//q no hayas dos notas iguales
			||getIndexBetween(alto[i - 1]) == getIndexBetween(alto[i])
			||getIndexBetween(alto[i]) == getIndexBetween(alto[i + 1])
			//q no haya seguidas grupos de dos iguales
			||getIndexBetween(alto[i - 3]) == getIndexBetween(alto[i - 1]) &&
			getIndexBetween(alto[i - 2]) == getIndexBetween(alto[i])
			//q no haya seguidas grupos de dos iguales
			||getIndexBetween(alto[i + 1]) == getIndexBetween(alto[i - 1]) &&
			getIndexBetween(alto[i + 2]) == getIndexBetween(alto[i])
			//q no baje por debajo del F,,
			||getIndexOf(alto[i]) < 4
		)
		comprobarCuelgue();
		//mirar si shay consonantes vecinas en fuertes para poner nota paso
		if (i%2 == 0 && i > 1 ) {
			colocarNotasDePasoYbordadura(i);
		} 
		// console.log("getIndexBetween(alto[" + (i - 1) + "], alto[" + i +"])" + getIndexBetween(alto[i - 1], alto[i]));		 
	}//end for loop
	
	// escalaDo = "X:1\nL:1/2\nK:Cmaj\nV:1 clef=alto1\n"
	// escalaDo = "X:1\nL:1/2\nK:Cmaj\nV:1\n"
	// escalaDo = "X:1\nL:1/2\nK:" + key + "\nV:1 clef=alto3\n"
	// escalaDo = "X:1\nL:1/2\nK:" + key + "\nV:3\n"
	console.log("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));
	// var keyPosition = ("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));
	// [escalaDo.slice(0, keyPosition), "HOLA", escalaDo.slice(keyPosition)].join('');
	console.log("alto : " + alto);
	console.log("bajo : " + bajo);
	
	var escalaDoAlto;
	// console.log("alto : " + alto);
	escalaDoAlto = "V:1 clef=alto1\n";
	// escalaDoAlto = "V:1\n";
	// escalaDo += "\nV:2 clef=treble\n"
	//aqui solo se suma el alto al header de escalaDo
	for (var i = 0; i < alto.length; i++) {
		// escalaDo = escalaDo + alto[i] + ' "' + (((notasMusicales.indexOf(alto[i + 1]) % 7 + 8 )) -
		// 	+ (notasMusicales.indexOf(cantus[i + 1]) % 7 + 1 ) % 7 + 1)  +'"';
		escalaDoAlto += 
		 	'"' 
		 		+(((notasMusicales.indexOf(alto[i]))
					- (notasMusicales.indexOf(cantusDoble[i])))+1) 
			+'ª"'
				+ alto[i] + "/" //ya q estamos en segunda Especie
			;
	}
	// convertirUltimaBlancaEnNegra, REMOVER EL ultimo /
	// escalaDoAlto = escalaDoAlto.substring(0, escalaDoAlto.length-1);
	escalaDo = escalaDo.replace(key ,key +"\n" 
		+ escalaDoAlto); // if you want all the "hello"'s in the string to be replaced
	// console.log("escalaDo : " + escalaDo);
	// console.clear();
	
	console.log("alto : " + alto);
	decodeAjaxResponse(escalaDoAlto);
}


function pararCuelgue(argument) {
	alert("pararCuelgue : ");
	window.location.reload();
}

function comprobarCuelgue(argument) {
	if (colgado == true) {pararCuelgue();}
}
