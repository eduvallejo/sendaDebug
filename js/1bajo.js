

var tesiturabajo = ["C", "D", "E", "F" ,"G","A","B",	
	"c", "d", "e", "f" ,"g","a","b"];
var bajo = [];
var randomIntervalBajoCantus = [];
for (var i = 0; i < longitudCantus; i++) {
	bajo[i] = "0";
	randomIntervalBajoCantus[i] = "0";
}
randomIntervalBajoCantus[0] = 8; //es un Do, intervalo de 1a
var intervalobajoCero = [ unisono, octava];
bajo[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) 
	- randomFunction(intervalobajoCero)];
// console.log(notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervalobajoCero)]);
console.log("bajo0 : " + bajo[0]);
console.log("getIndexBetween(bajo[0], cantus[0]) : " + getIndexBetween(bajo[0], cantus[0]));
// bajo[0] = "c"; //podría ser la 8th o la 5th
// bajo[longitudCantus - 2] = "B";
// bajo[longitudCantus - 1] = "c";
// //Gmaj
// bajo[longitudCantus - 2] = "F";
// bajo[longitudCantus - 1] = "G";
bajo[longitudCantus - 2] = //la sensible 
	notasMusicales[getIndexOf(cantus[longitudCantus - 1]) - 1];
bajo[longitudCantus - 1] = //la fundamental
	notasMusicales[getIndexOf(cantus[longitudCantus - 1]) - 0];

//esto del climax sirve para algo?
var notaClimaxBajo = "d";
console.log("posicionClimax : " + posicionClimax);
var posicionClimaxBajo = posicionClimax + 1;
// bajo[posicionClimaxBajo] = notaClimaxBajo;
//cambiar la posicion climax bajo para q sea compas diferente q bajo	


//se calcilan con respecto al cantus de cda momento
// var intervalosArmonicos = [ octava,quinta,tercera,tercera,tercera, sexta, sexta,sexta, quinta];
var intervalosArmonicos = [ tercera,tercera, quinta, sexta, sexta,octava, ];


function crearBajo(argument) {
	// BUGs Evitar q los leaps se cuemten cuando no se aplican
	var randomInterval = 1;
	// for (var i = 1; i < posicionClimaxBajo; i++) {
	for (var i = 1; i < (longitudCantus - 2); i++) {//las dos ultimas estan predefinidas
		breakInfiniteLoops = 0;
		do{
			breakInfiniteLoops++;
			if (breakInfiniteLoops>50) { 
				colgado == true;
				break;
			} else {}
			// if (i != posicionClimaxBajo) {
			if (true) {
					
				if (i < posicionClimaxBajo) {//eleccion preclimax
					// console.log("intervalposPermitidos : " + intervalosPermitidos);
					randomInterval = randomFunction(intervalosArmonicos) ;
					// console.log("randomInterval : " + randomInterval);		
				} else {//eleccion postclimax
					randomInterval = randomFunction(intervalosArmonicos)  ;		
					// console.log("randomInterval : " + randomInterval);		
				}
		
				//siguiente version de buscar notas(al azar , solo notas superiores a root)
				bajo[i] = notasMusicales[notasMusicales.indexOf(cantus[i]) - 
					randomInterval];	
				// randomIntervalBajoCantus[i] = (((notasMusicales.indexOf(bajo[i]) % 7 + 8 )) -
				// 	+ (notasMusicales.indexOf(cantus[i]) % 7 + 1 ) % 7 + 1)  ;
				randomIntervalBajoCantus[i] = ((((notasMusicales.indexOf(cantus[i])) + 1) + 1) 
						-((notasMusicales.indexOf(bajo[i]) + 1)));
				// console.log("bajo[" + i + "] : " + bajo[i]);	
				// console.log("posicionEnNotasMusicales : " + notasMusicales.indexOf(bajo[i]));
				// console.log("getFrecuenciaNotas[" + bajo[i] + "] : " + getFrecuenciaNotas(bajo[i]));
			}else if(i == posicionClimaxBajo){
				// randomIntervalBajoCantus[i] = (((notasMusicales.indexOf(bajo[i]) % 7 + 8 )) -
				// 	+ (notasMusicales.indexOf(cantus[i]) % 7 + 1 ) % 7 + 1)  ;
				// console.log("bajo[" + i + "] : " + bajo[i]);	
			}
		//aqui se ponen las reglas del bajo 
		}while(//he comentado algunos para poder debugear sin q se cuelgue
			// ((notasMusicales.indexOf(bajo[i])  >=  notasMusicales.indexOf(bajo[posicionClimaxBajo])) && i != posicionClimaxBajo)
			//octavas seguidas
			checkIntervalosProhibidos(randomIntervalBajoCantus[i], randomIntervalBajoCantus[i - 1], 5, 5) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],bajo[i],bajo[i-1] )
			||checkIntervalosProhibidos(randomIntervalBajoCantus[i], randomIntervalBajoCantus[i - 1], 8, 8) &&  checkMovimientoDirecto(cantus[i],cantus[i-1],bajo[i],bajo[i-1] )
			||checkIntervalosProhibidos(randomIntervalBajoCantus[i], randomIntervalBajoCantus[i - 1], 5, 8) 
			||checkIntervalosProhibidos(randomIntervalBajoCantus[i], randomIntervalBajoCantus[i - 1], 8, 5)
			// //5as ocultas (5as por movimiento directo)
			||checkMovimientoDirecto(cantus[i],cantus[i-1],bajo[i],bajo[i-1] ) && randomIntervalBajoCantus[i] == 5
			// //8as ocultas (8as por movimiento directo)
			||checkMovimientoDirecto(cantus[i],cantus[i-1],bajo[i],bajo[i-1] ) && randomIntervalBajoCantus[i] == 8
			// //restore leaps q suben o bajan con ibtervalo contrario de maximo 3a
			||checkLeapsToRestore(bajo[i - 2], bajo[i - 1],bajo[i])
			// //chekear q la melodia no salta intervalos prohibidos melodicamente
			||checkIndexBetween(bajo[i - 1], bajo[i])
		)
		comprobarCuelgue();
		// console.log("getIndexBetween(bajo[" + (i - 1) + "], bajo[" + i +"])" + getIndexBetween(bajo[i - 1], bajo[i]));		 
	}//end for loop
	// console.log("bajo : " + bajo);
	console.clear();
	console.log("cantus : " + cantus);
	
	// escalaDo += "\nV:2 clef=alto4\n"
	escalaDo += "\nV:2 clef=alto3\n"
	for (var i = 0; i < cantus.length; i++) {
		escalaDo += cantus[i] + "|";
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
	for (var i = 0; i < bajo.length; i++) {
		// escalaDo = escalaDo + bajo[i] + ' "' + (((notasMusicales.indexOf(bajo[i + 1]) % 7 + 8 )) -
		// 	+ (notasMusicales.indexOf(cantus[i + 1]) % 7 + 1 ) % 7 + 1)  +'"';
		escalaDo = escalaDo 
		 		+ '"' 
		 			+ (( ((notasMusicales.indexOf(cantus[i ])) + 1) 
		 			- ((notasMusicales.indexOf(bajo[i ]) + 1)) + 1) ) 
		 				+'ª"'
			+ bajo[i]
			;
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