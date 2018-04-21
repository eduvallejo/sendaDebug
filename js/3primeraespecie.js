

var tesituraSoprano = ["C", "D", "E", "F" ,"G","A","B",	
	"c", "d", "e", "f" ,"g","a","b"];
var soprano = [];
var randomIntervalSopranoCantus = [];
for (var i = 0; i < longitudCantus; i++) {
	soprano[i] = "0";
	randomIntervalSopranoCantus[i] = "0";
}
randomIntervalSopranoCantus[0] = 8; //es un Do, intervalo de 1a
soprano[0] = "c"; //podría ser la 8th o la 5th
soprano[longitudCantus - 2] = "B";
soprano[longitudCantus - 1] = "c";
var notaClimaxSoprano = "e"
var posicionClimaxSoprano = posicionClimax + 1;
soprano[posicionClimaxSoprano] = notaClimaxSoprano;
console.log("soprano : " + soprano);
//cambiar la posicion climax soprano para q sea compas diferente q bajo	

//1a especie
	//intervalos=[primera, quinta, octava, doceava, tercera, sexta, decima, treceava]
	//en 1a especie el intervalo de 4th es disonante, ya q quiere resolver a 3a
	//forbidden direct(paralel or similar) motion into perfect interval(unison, 5ths and 8ths)
	//a un interv de 5th o 8th se llega solo por contrario u oblicuo
		// hidden 5ths and 8ths
	//prohibido antiparalel perfects
		// 5th->12th(8th+5th) or unison to eigth or 8th to 15th(8th+8th)
	//en cambio SI q esta permitido
		// 8th to 5th or 5th to 8th
	//la primera nota es la 8th o la 5th

//se calcilan con respecto al cantus de cda momento
// var intervalosSoprano = [octava, decima, doceava, quinceava];
// var intervalosSoprano = [octava, decima, doceava, quinceava];
// var intervalosSoprano = [octava, tercera, quinta, sexta, decima, doceava];
// var intervalosSoprano = [octava, tercera, quinta, sexta, decima, doceava];
// var intervalosSoprano = [octava, tercera, tercera, quinta];
var intervalosSoprano = [octava, tercera,tercera, quinta, sexta,  sexta];

//constante q se le suma a los intervalos para obterner el intervalo definitivo de soprano
constanteSoprano = 0;



function vozSoprano(argument) {
	// BUGs Evitar q los leaps se cuemten cuando no se aplican
	var randomInterval = 1;
	// for (var i = 1; i < posicionClimaxSoprano; i++) {
	for (var i = 1; i < (longitudCantus - 2); i++) {//las dos ultimas estan predefinidas
		do{
			if (i != posicionClimaxSoprano) {
					
				if (i < posicionClimaxSoprano) {//eleccion preclimax
					// console.log("intervalposPermitidos : " + intervalosPermitidos);
					randomInterval = randomFunction(intervalosSoprano) ;		
				} else {//eleccion postclimax
					randomInterval = randomFunction(intervalosSoprano)  ;		
				}
		
				//siguiente version de buscar notas(al azar , solo notas superiores a root)
				soprano[i] = notasMusicales[notasMusicales.indexOf(cantus[i]) + 
					randomInterval + constanteSoprano];	
				// randomIntervalSopranoCantus[i] = (((notasMusicales.indexOf(soprano[i]) % 7 + 8 )) -
				// 	+ (notasMusicales.indexOf(cantus[i]) % 7 + 1 ) % 7 + 1)  ;
				randomIntervalSopranoCantus[i] = ((((notasMusicales.indexOf(soprano[i]) + 1)) - ((notasMusicales.indexOf(cantus[i])) + 1) + 1) );
				// console.log("soprano[" + i + "] : " + soprano[i]);	
				// console.log("posicionEnNotasMusicales : " + notasMusicales.indexOf(soprano[i]));
				// console.log("getFrecuenciaNotas[" + soprano[i] + "] : " + getFrecuenciaNotas(soprano[i]));
			}else if(i == posicionClimaxSoprano){
				randomIntervalSopranoCantus[i] = (((notasMusicales.indexOf(soprano[i]) % 7 + 8 )) -
					+ (notasMusicales.indexOf(cantus[i]) % 7 + 1 ) % 7 + 1)  ;
				// console.log("soprano[" + i + "] : " + soprano[i]);	
			}
			// console.log("getInterval(soprano[i-1], soprano[" + i + "]) : " + 
			// 	getInterval(soprano[i - 1], soprano[i]));
				// console.log("randomIntervalSopranoCantus[" + i + "] : " + randomIntervalSopranoCantus[i]);	
				// console.log("randomIntervalSopranoCantus[" + i + "] : " + randomIntervalSopranoCantus[i]);	
			// console.log("notasMusicales.indexOf(soprano[" + i +"]) : " + notasMusicales.indexOf(soprano[i]));
			// console.log("notasMusicales.indexOf("+ soprano[posicionClimaxSoprano] +") : " + notasMusicales.indexOf(soprano[posicionClimaxSoprano]));
			// console.log("checkMovimientoDirecto(cantus[" + i + "]),  : " + checkMovimientoDirecto(cantus[i],cantus[i-1],soprano[i],soprano[i-1] ));
			// console.log("soprano[" + i + "] : " + soprano[i]);
			checkOctavasSeguidas(randomIntervalSopranoCantus[i - 1],randomIntervalSopranoCantus[i]);
			checkQuintasSeguidas(randomIntervalSopranoCantus[i - 1],randomIntervalSopranoCantus[i]);
			checkTercerasSeguidas(randomIntervalSopranoCantus[i - 1],randomIntervalSopranoCantus[i]);
		//aqui se ponen las reglas del soprano 
		}while(
			((notasMusicales.indexOf(soprano[i])  >=  notasMusicales.indexOf(soprano[posicionClimaxSoprano])) && i != posicionClimaxSoprano)
			//octavas seguidas
			// ||(randomIntervalSopranoCantus[i - 1] == 8 )&&( randomIntervalSopranoCantus[i] == 8)
			// 	&&(checkMovimientoDirecto(randomIntervalSopranoCantus[i - 1],randomIntervalSopranoCantus[i]  )== true)
			//quintas seguidas
			// ||(randomIntervalSopranoCantus[i - 1] == 5 )&&( randomIntervalSopranoCantus[i] == 5)
			// 	&&(checkMovimientoDirecto(randomIntervalSopranoCantus[i - 1],randomIntervalSopranoCantus[i] ) == true)
			//octavas -> quintas seguidas
			// ||(randomIntervalSopranoCantus[i - 1] == 8 )&&( randomIntervalSopranoCantus[i] == 5)
			// 	&&(checkMovimientoDirecto(randomIntervalSopranoCantus[i - 1],randomIntervalSopranoCantus[i] ) == true)
			//quintas -> octavas seguidas
			||(randomIntervalSopranoCantus[i - 1] == 5 )&&( randomIntervalSopranoCantus[i] == 8)
				&&(checkMovimientoDirecto(randomIntervalSopranoCantus[i - 1],randomIntervalSopranoCantus[i] ) == true)
			//evitar dos leaps seguidos
			// ||checkLeaps(soprano[i - 2], soprano[i - 1], soprano[i]) == true && i > 2
		)
			// ( notasMusicales.indexOf(notaClimaxSoprano) <= notasMusicales.indexOf(soprano[i]) && (i != posicionClimaxSoprano) ) //repetir  >= q el climax
			// || (notasMusicales.indexOf(notaClimaxSoprano) - notasMusicales.indexOf(soprano[i])) > 9 //o si se supera el rango de 10th con la climax
			// 	|| (soprano[i]) == (soprano[i + 1])	// o si se repite la nota anterior	
			// 		|| (soprano[i - 1][0].toLowerCase() == "f") && (soprano[i][0].toLowerCase() == "b")  	  //o si es un intervalo de 4aug entre grados diatonicos(IV-VII o VII-IV) 
			// 		|| (soprano[i - 1][0].toLowerCase() == "b") && (soprano[i][0].toLowerCase() == "f")  	  //o si es un intervalo de 4aug entre grados diatonicos(IV-VII o VII-IV) 
			// 			|| leapsTotal > 4
			// 				|| largeLeapsTotal >= 3
			// 				|| (soprano[i - 3] + soprano[i - 2] == soprano[i - 1] + soprano[i]) //evitar patrones anteriores
			// 				|| (soprano[i - 1] + soprano[i] == soprano[i + 1] + soprano[i + 2]) //evitar patrones posteriores
				 //)  //
	}
	console.log("soprano : " + soprano);
	console.log("cantus : " + cantus);
	escalaDo = "X:1\nT:escala de Do\nC:\nL:1/2\nQ:1/4=150\nM:4/2\nK:Cmaj\nV:1 clef=treble\n"


	//aqui solo se suma el soprano al header de escalaDo
	for (var i = 0; i < soprano.length; i++) {
		// escalaDo = escalaDo + soprano[i] + ' "' + (((notasMusicales.indexOf(soprano[i + 1]) % 7 + 8 )) -
		// 	+ (notasMusicales.indexOf(cantus[i + 1]) % 7 + 1 ) % 7 + 1)  +'"';
		escalaDo = escalaDo + soprano[i] + '" ' 
			+ ((((notasMusicales.indexOf(soprano[i + 1]) + 1)) - ((notasMusicales.indexOf(cantus[i + 1])) + 1) + 1) ) +'ª"';
	}
	escalaDo += "\nV:2 clef=treble\n"
	for (var i = 0; i < cantus.length; i++) {
		escalaDo = escalaDo + cantus[i] ;
	}
	console.log("escalaDo : " + escalaDo);
	console.log("randomIntervalSopranoCantus : " + randomIntervalSopranoCantus);
}


