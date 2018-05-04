

var bajo = [];
var randomIntervalBajoCantus = [];
for (var i = 0; i < longitudCantus; i++) {
	bajo[i] = "0";
	randomIntervalBajoCantus[i] = "0";
}
var intervaloSopranoCero = [ octavaAbajo];
bajo[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloSopranoCero)];
bajo[1] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloSopranoCero)];

// bajo[longitudCantus - 2] = //la sensible 
// 	notasMusicales[getIndexOf(cantus[longitudCantus - 1]) + 6];
// bajo[longitudCantus - 1] = //la fundamental
// 	notasMusicales[getIndexOf(cantus[longitudCantus - 1]) + 7];

//esto del climax sirve para algo?
// var notaClimaxSoprano = "d";
// console.log("posicionClimax : " + posicionClimax);
var posicionClimaxbajo = posicionClimax + 1;
// bajo[posicionClimaxbajo] = notaClimaxbajo;
//cambiar la posicion climax bajo para q sea compas diferente q bajo	


//se calcilan con respecto al cantus de cda momento
// var intervalosArmonicosbajo = [ octava,quinta,tercera,tercera,tercera, sexta, sexta,sexta, quinta];
var intervalosArmonicosBajo = [ terceraAbajo, quintaAbajo, sextaAbajo, sextaAbajo,];

 
var cantusExtendido = [];
//cantus para blancas
// console.log("cantusExtendido : " + cantusExtendido);
	var contadorTemp = 0;
	for (var i = 0; i < cantus.length*2; i++) {
		if (i % 2 == 1) {contadorTemp++;} else {}
		cantusExtendido[i] = cantus[i - contadorTemp];
		// console.log(i + " - contadorTemp: " + (i - contadorTemp));
		// cantusExtendido[i + contadorTemp] = cantus[i];
		// contadorTemp++;
		// console.log("i : " + i);
	}

	// console.log("bajoLEnfth : " + bajo.length);
	// console.log("Doble.length : " + cantusExtendido.length);
// console.log("bajo : " + bajo);
	bajo[cantusExtendido.length - 3] = //la sensible 
		// notasMusicales[getIndexOf(cantusExtendido[cantusExtendido.length - 1]) + 6];
		notasMusicales[getIndexOf(cantusExtendido[cantusExtendido.length - 1]) - 1];
		// console.log("bajo : " + bajo);
		// "f";
	bajo[cantusExtendido.length - 2] = //la fndamental 
		// notasMusicales[getIndexOf(cantusExtendido[cantusExtendido.length - 1]) +  7];
		notasMusicales[getIndexOf(cantusExtendido[cantusExtendido.length - 1]) ];
	bajo[cantusExtendido.length - 1] = //la fndamental 
		// notasMusicales[getIndexOf(cantusExtendido[cantusExtendido.length - 1]) +  7];
		notasMusicales[getIndexOf(cantusExtendido[cantusExtendido.length - 1]) ];
// 		// "e";
// console.log("bajo : " + bajo);
var intervaloBajoFin = [  octavaAbajo];
// bajo[cantusExtendido.length - 1] = 
// 	notasMusicales[notasMusicales.indexOf(cantus[cantusExtendido.length - 1]) -15];
// bajo[cantusExtendido.length - 2] = 
// // 	notasMusicales[notasMusicales.indexOf(cantus[cantusExtendido.length - 1])  -15];
// console.log("bajo[cantusExtendido.length - 1] : " + bajo[cantusExtendido.length - 1]);
console.clear();
function crearBajo(argument) {
	// BUGs Evitar q los leaps se cuemten cuando no se aplican
	var randomInterval = 1;
	// for (var i = 1; i < posicionClimaxAlto; i++) {
	for (var i = 1; i < (cantusExtendido.length ); i++) {//las dos ultimas estan predefinidas
		breakInfiniteLoops = 0;
		do{
			breakInfiniteLoops++;
			if (breakInfiniteLoops>40) {
				colgado == true;
				// console.log("colgado en  : " + i );
				//tirar para atras si no hay una solucion buena
				// alto[i] =="";
				// randomIntervalAltoCantus[i] = "";
				// i = i - 1; //tirar para atras si no hay una solucion buena
				break;
			}
			randomInterval = randomFunction(intervalosArmonicosBajo) ;
				// console.log("randomInterval : " + randomInterval);		
	
			bajo[i] = notasMusicales[notasMusicales.indexOf(cantusExtendido[i]) + 
				randomInterval ];	
			randomIntervalBajoCantus[i] = ((notasMusicales.indexOf(bajo[i]))
				- ((notasMusicales.indexOf(cantusExtendido[i])))) + 1;
			// console.log("bajo[" + i + "] : " + bajo[i]);	
			// console.log("posicionEnNotasMusicales : " + notasMusicales.indexOf(bajo[i]));
			// console.log("getFrecuenciaNotas[" + bajo[i] + "] : " + getFrecuenciaNotas(bajo[i]));
		//aqui se ponen las reglas del bajo 
		}while(//he comentado algunos para poder debugear sin q se cuelgue
			// ((notasMusicales.indexOf(bajo[i])  >=  notasMusicales.indexOf(bajo[posicionClimaxbajo])) && i != posicionClimaxbajo)
			//octavas seguidas
			checkIntervalosProhibidos(randomIntervalBajoCantus[i], randomIntervalBajoCantus[i - 1], 5, 5) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],bajo[i],bajo[i-1] )
			||checkIntervalosProhibidos(randomIntervalBajoCantus[i], randomIntervalBajoCantus[i - 1], 8, 8) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],bajo[i],bajo[i-1] )
			||checkIntervalosProhibidos(randomIntervalBajoCantus[i], randomIntervalBajoCantus[i - 1], 5, 8) 
			||checkIntervalosProhibidos(randomIntervalBajoCantus[i], randomIntervalBajoCantus[i - 1], 8, 5)
			//5as ocultas (5as por movimiento directo)
			||checkMovimientoDirecto(cantusExtendido[i],cantusExtendido[i-1],bajo[i],bajo[i-1] ) && randomIntervalBajoCantus[i] == 5
			//8as ocultas (8as por movimiento directo)
			||checkMovimientoDirecto(cantusExtendido[i],cantusExtendido[i-1],bajo[i],bajo[i-1] ) && randomIntervalBajoCantus[i] == 8
			//restore leaps q suben o bajan con ibtervalo contrario de maximo 3a
			||checkLeapsToRestore(bajo[i - 2], bajo[i - 1],bajo[i])
			//chekear q la melodia no salta intervalos prohibidos melodicamente
			||checkForbiddenMelodicInterval(bajo[i - 1], bajo[i])
			// ||checkForbiddenMelodicInterval(bajo[i], bajo[i + 1])
			//q no hayas dos notas iguales
			||getIndexBetween(bajo[i - 1]) == getIndexBetween(bajo[i])
			||getIndexBetween(bajo[i]) == getIndexBetween(bajo[i + 1])
			//q no haya seguidas grupos de dos iguales
			||getIndexBetween(bajo[i - 3]) == getIndexBetween(bajo[i - 1]) &&
			getIndexBetween(bajo[i - 2]) == getIndexBetween(bajo[i])
			//q no haya seguidas grupos de dos iguales
			||getIndexBetween(bajo[i + 1]) == getIndexBetween(bajo[i - 1]) &&
			getIndexBetween(bajo[i + 2]) == getIndexBetween(bajo[i])
			//q no baje por debajo del F,,
			||getIndexOf(bajo[i]) < 4
		)
		comprobarCuelgue();
		//mirar si shay consonantes vecinas en fuertes para poner nota paso
		if (i%2 == 0 && i > 1 ) {
			// colocarNotasDePasoYbordadura(i);
		} 
		// console.log("getIndexBetween(bajo[" + (i - 1) + "], bajo[" + i +"])" + getIndexBetween(bajo[i - 1], bajo[i]));		 
	}//end for loop
	
	// console.log("bajo : " + bajo);
	// console.clear();
	// console.log("cantus : " + cantus);
	// console.log("bajo : " + bajo);
	
	escalaDo += "\nV:2 clef=alto4\n"
	// escalaDo += "\nV:2 clef=alto3\n"
	// escalaDo += "\nV:2 clef=treble\n"
	for (var i = 0; i < cantus.length; i++) {
		escalaDo += '"' + mostrarGradosCantus(i)+ '"'+ cantus[i] + "|";
	}
	// escalaDo += "\nV:2 clef=treble\n"
	//aqui solo se suma el bajo al header de escalaDo
	// escalaDo += "\nV:2 clef=treble\n"
	// for (var i = 0; i < cantus.length; i++) {
	// 	escalaDo = escalaDo + cantus[i] + '"' + (i+1) + '"' ;
	// }
	// escalaDo += "X:1\nL:1/2\nK:Cmaj\nV:1\nCDFEDC"
	// escalaDo += "\nV:2 clef=alto\nCDFEDC"
	// escalaDo += "\nV:2 clef=alto\n" + cantus;
	escalaDo += "\nV:3 clef=bass\n" ;
	// escalaDo += "\nV:3 clef=alto4\n" ;
	for (var i = 0; i < bajo.length; i++) {
		// escalaDo = escalaDo + bajo[i] + ' "' + (((notasMusicales.indexOf(bajo[i + 1]) % 7 + 8 )) -
		// 	+ (notasMusicales.indexOf(cantus[i + 1]) % 7 + 1 ) % 7 + 1)  +'"';
		escalaDo = escalaDo 
		 		+ '"' 
		 			+ (( ((notasMusicales.indexOf(cantusExtendido[i ])) + 1) 
		 			- ((notasMusicales.indexOf(bajo[i ]) + 1)) + 1) ) 
		 				+'ª"'
			+ bajo[i] + "/"
			;
		// console.log("getIndexOf(bajo[" + i + "]) : " + getIndexOf(bajo[i]));
		// console.log("getIndexOf(cantus[" + i + "]) : " + getIndexOf(cantusExtendido[i]));
	}

	// console.log("escalaDo : " + escalaDo);
	// console.log("randomIntervalBajoCantus : " 
		// + randomIntervalBajoCantus);
	// crearSoprano();

	crearAlto();
}

var colgado = false;

function pararCuelgue(argument) {
	alert("pararCuelgue : ");
	window.location.reload();
}

function comprobarCuelgue(argument) {
	if (colgado == true) {pararCuelgue();}
}