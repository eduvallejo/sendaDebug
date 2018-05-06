var posicionClimaxAlto = posicionClimax + 1;

var divisionPrimeraEspecie = 1;
var divisionSegundaEspecie = 2;
var divisionEspecie = divisionSegundaEspecie;
var divisionEspecie = divisionPrimeraEspecie;


var alto = [];
var randomIntervalAltoCantus = [];
for (var i = 0; i < (cantus.length*divisionEspecie - (divisionEspecie-1)); i++) {
	alto[i] = "0";
	// console.log("i : " + i);
	randomIntervalAltoCantus[i] = "0";
}
console.log("EXTENdalto : " + alto);
// var intervaloAltoCero = [ unisono, quinta, tercera,  octava];
// alto[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloAltoCero)];
// alto[1] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloAltoCero)];

// var divisionEspecie = divisionPrimeraEspecie;


//se calcilan con respecto al cantus de cda momento
// var intervalosArmonicosAlto = [ octava,quinta,tercera,tercera,tercera, sexta, sexta,sexta, quinta];
var intervalosArmonicosAlto = [  quinta, sexta, tercera, octava];

//apaño para q las blabcas se apareen con el cantus adecuado 
//cantus para blancas
// console.log("cantusExtendido : " + cantusExtendido);
var cantusExtendido = [];
var contadorTemp = 0;
for (var i = 0; i < cantus.length*divisionEspecie; i++) {
	if (i % divisionEspecie == 1) {contadorTemp++;} else {}
	cantusExtendido[i] = cantus[i - contadorTemp];
}
colocarSensibleYfinal(checkFinalCantus());
// alto[cantusExtendido.length - 2] = notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
function crearAlto(argument) {
// console.log("alto : " + alto);
// console.log("cantusExtendido.length : " + cantusExtendido.length);
	// BUGs Evitar q los leaps se cuemten 3uando no se aplican
	var randomInterval = 1;
	// for (var i = 1; i < posicionClimaxAlto; i++) {
	for (var i = 0; i < (alto.length - 2); i++) {//las dos ultimas estan predefinidas
	intervalosArmonicosAlto = [  quinta, sexta, tercera, octava];
		breakInfiniteLoops = 0;
		var primerIntento = true ;
		do{
		if (i == 0) {
			// var intervaloAltoCero = [ quinta, octava];
			// alto[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloAltoCero)];
			intervalosArmonicosAlto = [ quinta, octava];
			alto[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervalosArmonicosAlto)];
		}
			breakInfiniteLoops++;
			if (breakInfiniteLoops>40) {
				colgado == true;
				// console.log("colgado en  : " + i );
				if (i >= 1) { //si se cuelga en el i=1 imposible i-2
					// i = i - buclesAtrasCuelgue; //tirar para atras si no hay una solucion buena
					i = 1; //tirar para atras si no hay una solucion buena
				} 
				console.log("BREAK i-2: " + i);
				break;
			}
			randomInterval = randomFunction(intervalosArmonicosAlto) ;
				// console.log("randomInterval : " + randomInterval);		
	
			alto[i] = notasMusicales[notasMusicales.indexOf(cantusExtendido[i]) + 
				randomInterval ];	
			randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(alto[i]))
				// - ((notasMusicales.indexOf(cantusExtendido[i])))) + 1;
				- ((notasMusicales.indexOf(cantusExtendido[i])))) ;

			//intentar poner consonancias vecinas para favorecer notas de paso
			if (i % divisionEspecie == 0 && i > 1 && primerIntento == true) {
				// console.log("i Consonancias: " + i);
				for (var j = 0; j < intervalosArmonicosAlto.length -1; j++) {// lo de -1 es porq no me gusta la 8va como segunda nota de pasoS
					if ((Math.abs(getIndexBetween(alto[i - 2]
						,notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]]
						, i))) == tercera) 
					{
						// console.log("(Math: "+ (Math.abs(getIndexBetween(alto[i - 2]
						// ,notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]]
						// , i))));

						alto[i] = notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]];	
						randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(alto[i]))
							// - ((notasMusicales.indexOf(cantusExtendido[i])))) + 1;
							- ((notasMusicales.indexOf(cantusExtendido[i])))) ;
						// console.log("alto[i-2] : " + alto[i-2]);
						// console.log("alto[" + i +"] : " + alto[i]);
					} else {}
				}
				primerIntento = false;
			}
			// console.log("alto[" + i + "] : " + alto[i]);	
			// console.log("posicionEnNotasMusicales : " + notasMusicales.indexOf(alto[i]));
			// console.log("getFrecuenciaNotas[" + alto[i] + "] : " + getFrecuenciaNotas(alto[i]));
		//aqui se ponen las reglas del alto 
		// console.log("i : " + i);
		}while(//he comentado algunos para poder debugear sin q se cuelgue
			// ((notasMusicales.indexOf(alto[i])  >=  notasMusicales.indexOf(alto[posicionClimaxAlto])) && i != posicionClimaxAlto)
			//octavas seguidas
			// checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 5, 5) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],alto[i],alto[i-1] )
			// ||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 8, 8) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],alto[i],alto[i-1] )
			// ||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 5, 8) 
			// ||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 8, 5)
			// //5as ocultas (5as por movimiento directo)
			// ||checkMovimientoDirecto(cantusExtendido[i],cantusExtendido[i-1],alto[i],alto[i-1] ) && randomIntervalAltoCantus[i] == 5
			// //8as ocultas (8as por movimiento directo)
			// ||checkMovimientoDirecto(cantusExtendido[i],cantusExtendido[i-1],alto[i],alto[i-1] ) && randomIntervalAltoCantus[i] == 8
			// //restore leaps q suben o bajan con ibtervalo contrario de maximo 3a
			// ||checkLeapsToRestore(alto[i - 2], alto[i - 1],alto[i])
			// //chekear q la melodia no salta intervalos prohibidos melodicamente
			// ||checkForbiddenMelodicInterval(alto[i - 1], alto[i], i) 
			// //chekear q la melodia no salta intervalos prohibidos melodicamente
			// // ||checkForbiddenMelodicInterval(alto[i], alto[i+1], i) //hacer i-3
			// //q no hayas dos notas iguales
			// ||getIndexBetween(alto[i - 1]) == getIndexBetween(alto[i])
			// ||getIndexBetween(alto[i]) == getIndexBetween(alto[i + 1]) 
			// //q no haya seguidas grupos de dos iguales
			// ||getIndexBetween(alto[i - 3]) == getIndexBetween(alto[i - 1]) &&
			// getIndexBetween(alto[i - 2]) == getIndexBetween(alto[i])
			// //q no haya seguidas grupos de dos iguales
			// ||getIndexBetween(alto[i + 1]) == getIndexBetween(alto[i - 1]) &&
			// getIndexBetween(alto[i + 2]) == getIndexBetween(alto[i])
			// //q no baje por debajo del F,,
			// ||getIndexOf(alto[i]) < 4
			checkingsWhile(i) == true
		)
		comprobarCuelgue();
		//mirar si shay consonantes vecinas en fuertes para poner nota paso
		if (i%2 == 0 && i > 1 ) {
			colocarNotasDePasoYbordadura(i);
		} 
		// console.log("getIndexBetween(alto[" + (i - 1) + "], alto[" + i +"])" + getIndexBetween(alto[i - 1], alto[i]));		 
	}//end for loop
	
	console.log("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));

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
					- (notasMusicales.indexOf(cantusExtendido[i])))+1) 
			+'ª (' + mostrarGradosVoz(alto, i)+ ') "'
				+ alto[i] + "/" + divisionEspecie//ya q estamos en segunda Especie
		;
		if (i >= alto.length - 1) {
			escalaDoAlto = escalaDoAlto.slice(0 , -2); //slice devuelve desde 0 hasta la 2a al final
		} else {}
		if (i%divisionEspecie == 1 ) {
			escalaDoAlto += "|";
		} 
	}
	// convertirUltimaBlancaEnNegra, REMOVER EL ultimo /
	// escalaDoAlto = escalaDoAlto.substring(0, escalaDoAlto.length-1);
	escalaDo = escalaDo.replace(key ,key +"\n" 
		+ escalaDoAlto); // if you want all the "hello"'s in the string to be replaced
	// console.clear();
	
	console.log("alto : " + alto);
	// escalaDoAlto = 'V:1 clef=alto1\n"5ª (5) "G/1"6ª (10) "e/1"6ª (7) "B/1"8ª (8) "c';
	console.log("escalaDoAlto : " + escalaDoAlto);

	// console.clear();
	decodeAjaxResponse(escalaDoAlto);
	checkFinalCantus();
}


function pararCuelgue(argument) {
	alert("pararCuelgue : ");
	window.location.reload();
}

function comprobarCuelgue(argument) {
	if (colgado == true) {pararCuelgue();}
}
