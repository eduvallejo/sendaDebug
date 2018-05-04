

var alto = [];
var randomIntervalAltoCantus = [];
// for (var i = 0; i < longitudCantus; i++) {
// 	alto[i] = "0";
// 	randomIntervalAltoCantus[i] = "0";
// }
var intervaloAltoCero = [ unisono, quinta,  octava];
// alto[1] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloAltoCero)];

var posicionClimaxAlto = posicionClimax + 1;


//se calcilan con respecto al cantus de cda momento
// var intervalosArmonicosAlto = [ octava,quinta,tercera,tercera,tercera, sexta, sexta,sexta, quinta];

//apaño para q las blabcas se apareen con el cantus adecuado 
var cantusExtendido = [];
var divisionEspecieTercera = 4;
var divisionEspecieSegunda = 2;
var divisionEspecie = divisionEspecieSegunda;

var escalaDoAlto;
// console.log("alto : " + alto);
escalaDoAlto = "V:1 clef=alto1\n";

	console.clear();
colocarSensibleYfinal(checkFinalCantus());

function crearAlto(argument) {
	// console.log("alto : " + alto);
	var contadorAlto = 0;
	// BUGs Evitar q los leaps se cuemten cuando no se aplican
	var randomInterval = 1;
	// for (var i = 1; i < posicionClimaxAlto; i++) {
	// console.log("cantusExtendido : " + cantusExtendido);
	for (var iCantus = 0; iCantus < (cantus.length - 1); iCantus++) {//las dos ultimas estan predefinidas
		var intervalosArmonicosAlto = [ tercera, quinta, sexta, sexta, octava];
		//la primera nota solo vale la quinta u ocatva
		console.log("iCantus : " + iCantus);
		var altoTemp = [];	
	  for (var i = 0; i < (divisionEspecie); i++) {//las dos ultimas estan predefinidas
		if (iCantus == 0 && i == 0) {
			// intervalosArmonicosAlto = [quinta, octava, segunda]
			intervalosArmonicosAlto = [unisono]
			alto[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) 
				+ randomFunction(intervalosArmonicosAlto)];
			altoTemp[0] = alto[0];
			console.log("alto : " + alto);
		}else if(contadorAlto != cantus.length*divisionEspecie - 3){
			breakInfiniteLoops = 0;
			do{
				breakInfiniteLoops++;
				if (breakInfiniteLoops>40) {
					colgado == true;
					console.log("ColgadoAltoji[" + iCantus + "][" + i + "] : " + altoTemp[i]);
					console.log("ColgadorandomInterval : " + randomInterval);
					console.log("Colgadocantus[" + i + "] : " + cantus[i]);
					//tirar para atras si no hay una solucion buena
					// randomIntervalAltoCantus[i] = "";
					// i = i - 1; //tirar para atras si no hay una solucion buena
					break;
				}
				randomInterval = randomFunction(intervalosArmonicosAlto) ;
					// console.log("randomInterval : " + randomInterval);		
		
				altoTemp[i] = notasMusicales[notasMusicales.indexOf(cantus[iCantus]) + 
					randomInterval ];
				randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(altoTemp[i]))
					- ((notasMusicales.indexOf(cantus[iCantus])))) + 1;
				// console.log("alto[" + i + "] : " + alto[i]);	
				// console.log("posicionEnNotasMusicales : " + notasMusicales.indexOf(alto[i]));
				// console.log("getFrecuenciaNotas[" + alto[i] + "] : " + getFrecuenciaNotas(alto[i]));
			//aqui se ponen las reglas del alto 
			}while(//he comentado algunos para poder debugear sin q se cuelgue
				// ((notasMusicales.indexOf(alto[i])  >=  notasMusicales.indexOf(alto[posicionClimaxAlto])) && i != posicionClimaxAlto)
				//octavas seguidas
				checkIntervalosProhibidos(randomIntervalAltoCantus[contadorAlto], randomIntervalAltoCantus[contadorAlto - 1], 5, 5) &&  checkMovimientoDirecto(cantus[iCantus],cantus[iCantus - 1],alto[contadorAlto],alto[contadorAlto - 1] )
				||checkIntervalosProhibidos(randomIntervalAltoCantus[contadorAlto], randomIntervalAltoCantus[contadorAlto - 1], 8, 8) &&  checkMovimientoDirecto(cantus[iCantus],cantus[iCantus - 1],alto[contadorAlto],alto[contadorAlto - 1] )
				||checkIntervalosProhibidos(randomIntervalAltoCantus[contadorAlto], randomIntervalAltoCantus[contadorAlto - 1], 5, 8) 
				||checkIntervalosProhibidos(randomIntervalAltoCantus[contadorAlto], randomIntervalAltoCantus[contadorAlto - 1], 8, 5)
				//5as ocultas (5as por movimiento directo)
				||checkMovimientoDirecto(cantus[iCantus],cantus[iCantus - 1],alto[contadorAlto],alto[contadorAlto - 1] ) && randomIntervalAltoCantus[contadorAlto] == 5
				//8as ocultas (8as por movimiento directo)
				||checkMovimientoDirecto(cantus[iCantus],cantus[iCantus - 1],alto[contadorAlto],alto[contadorAlto - 1] ) && randomIntervalAltoCantus[contadorAlto] == 8
				//restore leaps q suben o bajan con ibtervalo contrario de maximo 3a
				||checkLeapsToRestore(alto[contadorAlto - 2], alto[contadorAlto - 1],alto[contadorAlto])
				//chekear q la melodia no salta intervalos prohibidos melodicamente
				||checkForbiddenMelodicInterval(alto[contadorAlto - 1], alto[contadorAlto])
				||checkForbiddenMelodicInterval(alto[contadorAlto], alto[i + 1])
				// q no hayas dos notas iguales
				||getIndexBetween(alto[contadorAlto - 1]) == getIndexBetween(alto[contadorAlto])
				||getIndexBetween(alto[contadorAlto]) == getIndexBetween(alto[contadorAlto + 1])
				// q no haya seguidas grupos de dos iguales
				||getIndexBetween(alto[contadorAlto - 3]) == getIndexBetween(alto[contadorAlto - 1]) &&
				getIndexBetween(alto[contadorAlto - 2]) == getIndexBetween(alto[contadorAlto])
				// q no haya seguidas grupos de dos iguales
				||getIndexBetween(alto[contadorAlto + 1]) == getIndexBetween(alto[contadorAlto - 1]) &&
				getIndexBetween(alto[i + 2]) == getIndexBetween(alto[contadorAlto])
				// q no baje por debajo del F,,
				||getIndexOf(alto[contadorAlto]) < 4
				// debug
				// false
			)
		}
		comprobarCuelgue();
		//mirar si shay consonantes vecinas en fuertes para poner nota paso
		if (contadorAlto%2 == 0 && contadorAlto > 1 ) {
			colocarNotasDePasoYbordadura(contadorAlto);
		} 
		// console.log("getIndexBetween(alto[" + (i - 1) + "], alto[" + i +"])" + getIndexBetween(alto[i - 1], alto[i]));		 
		// console.log("alto[" + i + "] : " + alto[i]);
				// console.log("alto[" + i + "] : " + alto[i]);
		console.log("altoji[" + iCantus + "][" + i + "] : " + altoTemp[i]);
		// escalaDo = escalaDo + alto[i] + ' "' + (((notasMusicales.indexOf(alto[i + 1]) % 7 + 8 )) -
		// 	+ (notasMusicales.indexOf(cantus[i + 1]) % 7 + 1 ) % 7 + 1)  +'"';
		if (contadorAlto != cantus.length*divisionEspecie - 3) {
			escalaDoAlto += 
			 	'"' 
			 		+(((notasMusicales.indexOf(altoTemp[i]))
						- (notasMusicales.indexOf(cantus[iCantus])))+1) 
				+'ª"'+ 
					altoTemp[i] + "/" + divisionEspecie + " " // (/2 = /) (/4) etc
				;

			alto[contadorAlto] = altoTemp[i];
		} else {}
		contadorAlto++;
		console.log("contadorAlto : " + contadorAlto);
	  }//end for i loop
	}//end for iCantus loop
	//agregar la sensible y final ala voz
	console.log("escalaDoAlto : " + escalaDoAlto);
	for (var i = divisionEspecie + 1; i > 0; i--) {
		console.log("i : " + i);
		console.log("alto.length-1) - i : " + alto[alto.length - i]);
		escalaDoAlto += agregarAbc(alto[alto.length - i]);
	}
	// escalaDoAlto += agregarAbc
	// escalaDo = "X:1\nL:1/2\nK:Cmaj\nV:1 clef=alto1\n"
	// escalaDo = "X:1\nL:1/2\nK:Cmaj\nV:1\n"
	// escalaDo = "X:1\nL:1/2\nK:" + key + "\nV:1 clef=alto3\n"
	// escalaDo = "X:1\nL:1/2\nK:" + key + "\nV:3\n"
	// console.log("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));
	// var keyPosition = ("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));

	console.log("alto : " + alto);
	
	
	escalaDo = escalaDo.replace(key ,key +"\n" 
		+ escalaDoAlto); // if you want all the "hello"'s in the string to be replaced
	console.log("escalaDoAlto : " + escalaDoAlto);
	// console.clear();
console.log("cantus : " + cantus);
	

	// decodeAjaxResponse(escalaDoAlto);
}


function pararCuelgue(argument) {
	alert("pararCuelgue : ");
	window.location.reload();
}

function comprobarCuelgue(argument) {
	if (colgado == true) {pararCuelgue();}
}
