

var alto = [];
var randomIntervalAltoCantus = [];
for (var i = 0; i < longitudCantus; i++) {
	alto[i] = "0";
	randomIntervalAltoCantus[i] = "0";
}
var intervaloSopranoCero = [ quinta, tercera,  octava, decima];
alto[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloSopranoCero)];

alto[longitudCantus - 2] = //la sensible 
	notasMusicales[getIndexOf(cantus[longitudCantus - 1]) + 6];
alto[longitudCantus - 1] = //la fundamental
	notasMusicales[getIndexOf(cantus[longitudCantus - 1]) + 7];

//esto del climax sirve para algo?
// var notaClimaxSoprano = "d";
// console.log("posicionClimax : " + posicionClimax);
var posicionClimaxAlto = posicionClimax + 1;
// alto[posicionClimaxAlto] = notaClimaxAlto;
//cambiar la posicion climax alto para q sea compas diferente q bajo	


//se calcilan con respecto al cantus de cda momento
// var intervalosArmonicosAlto = [ octava,quinta,tercera,tercera,tercera, sexta, sexta,sexta, quinta];
var intervalosArmonicosAlto = [ tercera, quinta, sexta, octava];

 



function crearAlto(argument) {
	// BUGs Evitar q los leaps se cuemten cuando no se aplican
	var randomInterval = 1;
	// for (var i = 1; i < posicionClimaxAlto; i++) {
	for (var i = 1; i < (longitudCantus - 2); i++) {//las dos ultimas estan predefinidas
		breakInfiniteLoops = 0;
		do{
			breakInfiniteLoops++;
			if (breakInfiniteLoops>50) { window.location.reload();} else {}
			// if (i != posicionClimaxAlto) {
			if (true) {
					
				if (i < posicionClimaxAlto) {//eleccion preclimax
					// console.log("intervalposPermitidos : " + intervalosPermitidos);
					randomInterval = randomFunction(intervalosArmonicosAlto) ;
					// console.log("randomInterval : " + randomInterval);		
				} else {//eleccion postclimax
					randomInterval = randomFunction(intervalosArmonicosAlto)  ;		
					// console.log("randomInterval : " + randomInterval);		
				}
		
				//siguiente version de buscar notas(al azar , solo notas superiores a root)
				alto[i] = notasMusicales[notasMusicales.indexOf(cantus[i]) + 
					randomInterval ];	
				randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(alto[i]))
					- ((notasMusicales.indexOf(cantus[i])))) + 1;
				// console.log("alto[" + i + "] : " + alto[i]);	
				// console.log("posicionEnNotasMusicales : " + notasMusicales.indexOf(alto[i]));
				// console.log("getFrecuenciaNotas[" + alto[i] + "] : " + getFrecuenciaNotas(alto[i]));
			}else if(i == posicionClimaxAlto){
				// randomIntervalAltoCantus[i] = (((notasMusicales.indexOf(alto[i]) % 7 + 8 )) -
				// 	+ (notasMusicales.indexOf(cantus[i]) % 7 + 1 ) % 7 + 1)  ;
				// console.log("alto[" + i + "] : " + alto[i]);	
			}
		//aqui se ponen las reglas del alto 
		}while(//he comentado algunos para poder debugear sin q se cuelgue
			// ((notasMusicales.indexOf(alto[i])  >=  notasMusicales.indexOf(alto[posicionClimaxAlto])) && i != posicionClimaxAlto)
			//octavas seguidas
			checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 5, 5) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],alto[i],alto[i-1] )
			||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 8, 8) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],alto[i],alto[i-1] )
			||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 5, 8) 
			||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 8, 5)
			//5as ocultas (5as por movimiento directo)
			||checkMovimientoDirecto(cantus[i],cantus[i-1],alto[i],alto[i-1] ) && randomIntervalAltoCantus[i] == 5
			//8as ocultas (8as por movimiento directo)
			||checkMovimientoDirecto(cantus[i],cantus[i-1],alto[i],alto[i-1] ) && randomIntervalAltoCantus[i] == 8
			//restore leaps q suben o bajan con ibtervalo contrario de maximo 3a
			||checkLeapsToRestore(alto[i - 2], alto[i - 1],alto[i])
			//chekear q la melodia no salta intervalos prohibidos melodicamente
			// ||checkIndexBetween(alto[i - 1], alto[i])
		)
		// console.log("getIndexBetween(alto[" + (i - 1) + "], alto[" + i +"])" + getIndexBetween(alto[i - 1], alto[i]));		 
	}//end for loop
	console.log("alto : " + alto);
	// console.log("cantus : " + cantus);
	
	// escalaDo = "X:1\nL:1/2\nK:Cmaj\nV:1 clef=alto1\n"
	// escalaDo = "X:1\nL:1/2\nK:Cmaj\nV:1\n"
	// escalaDo = "X:1\nL:1/2\nK:" + key + "\nV:1 clef=alto3\n"
	// escalaDo = "X:1\nL:1/2\nK:" + key + "\nV:3\n"
	console.log("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));
	// var keyPosition = ("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));
	// [escalaDo.slice(0, keyPosition), "HOLA", escalaDo.slice(keyPosition)].join('');

	var escalaDoAlto;
	// console.log("alto : " + alto);
	escalaDoAlto = "V:1 clef=alto1\n";
	// escalaDo += "\nV:2 clef=treble\n"
	//aqui solo se suma el alto al header de escalaDo
	for (var i = 0; i < alto.length; i++) {
		// escalaDo = escalaDo + alto[i] + ' "' + (((notasMusicales.indexOf(alto[i + 1]) % 7 + 8 )) -
		// 	+ (notasMusicales.indexOf(cantus[i + 1]) % 7 + 1 ) % 7 + 1)  +'"';
		escalaDoAlto += 
		 	'"' 
		 		+(((notasMusicales.indexOf(alto[i]))
					- (notasMusicales.indexOf(cantus[i])))+1) 
			+'ª"'
				+ alto[i]
			;
	}
	// console.log("escalaDoAlto : " + escalaDoAlto);
	escalaDo = escalaDo.replace(key ,key +"\n" + escalaDoAlto); // if you want all the "hello"'s in the string to be replaced
	// escalaDo += "\nV:2 clef=treble\n"
	// for (var i = 0; i < cantus.length; i++) {
	// 	escalaDo = escalaDo + cantus[i] + '"' + (i+1) + '"' ;
	// }
	// escalaDo += "X:1\nL:1/2\nK:Cmaj\nV:1\nCDFEDC"
	// escalaDo += "\nV:2 clef=alto\nCDFEDC"
	// escalaDo += "\nV:2 clef=alto\n" + cantus;
	// escalaDo += "\nV:2 clef=alto4\n" ;
	
	// escalaDo += "\nV:2 clef=alto4\n" ;
	// for (var i = 0; i < cantus.length; i++) {
	// 	escalaDo += cantus[i];
	// }

	// console.log("escalaDo : " + escalaDo);
	// console.log("randomIntervalAltoCantus : " 
	// 	+ randomIntervalAltoCantus);
}


