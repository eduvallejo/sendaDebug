

var tesituraSoprano = ["C", "D", "E", "F" ,"G","A","B",	
	"c", "d", "e", "f" ,"g","a","b"];
var soprano = [];
for (var i = 0; i < longitudCantus; i++) {
	soprano[i] = "0";
}
soprano[0] = "c"; //podría ser la 8th o la 5th
soprano[longitudCantus - 2] = "B";
soprano[longitudCantus - 1] = "c";
var notaClimaxSoprano = "a"
soprano[posicionClimax] = notaClimaxSoprano;
//cambiar la posicion climax soprano para q sea compas diferente q bajo	

//1a especie
	//intervalos=[primera, quinta, octava, doceava, tercera, sexta, decima, treceava]
	//en 1a especie el intervalo de 4th es disonante, ya q quiere resolver a 3a
	//forbidden direct(paralel or similar) motion into perfect interval(unison, 5ths and 8ths)
	//a un interv de 5th o 8th se llega solo por contrario
		// hidden 5ths and 8ths
	//prohibido antiparalel perfects
		// 5th->12th(8th+5th) or unison to eigth or 8th to 15th(8th+8th)
	//en cambio SI q esta permitido
		// 8th to 5th or 5th to 8th
	//la primera nota es la 8th o la 5th
//se calcilan con respecto al cantus de cda momento
// var intervalosSopranoSubir = [octava, decima, doceava, quinceava];
// var intervalosBajar = [octava, decima, doceava, quinceava];


function vozSoprano(argument) {
	leapsTotal= 0;
	largeLeapsTotal = 0;
	// BUGs Evitar q los leaps se cuemten cuando no se aplican
	var randomInterval = 5;
	// for (var i = 1; i < posicionClimax; i++) {
	for (var i = 1; i < (longitudCantus - 2); i++) {//las dos ultimas estan predefinidas
		var breakInfiniteLoops = 0;
		do{
			breakInfiniteLoops++;
			// console.log("breakInfiniteLoops : " + breakInfiniteLoops);
			if (breakInfiniteLoops > 100) {break;} else {} 
			if (i != posicionClimax) {
				//FIXBUG02
				if (Math.abs(randomInterval) == 3 && (notasMusicales.indexOf(soprano[i]) >= notasMusicales.indexOf(notaClimaxSoprano))) {
					leapsTotal--;
					// //fix bug02
					randomInterval = 0;
				} 
				if (Math.abs(randomInterval) > 3 && (notasMusicales.indexOf(soprano[i]) >= notasMusicales.indexOf(notaClimaxSoprano))) {
					largeLeapsTotal--;
					// //fix bug01
					randomInterval = 0;
				} 

				//para q no se cuelgue
				if (leapsTotal > 4) {
					leapsTotal = 3;	
					// //fix bug01
					randomInterval = 0;
				}
				if (largeLeapsTotal >= 3) {
					largeLeapsTotal = 2;	
					// //fix bug01
					randomInterval = 0;
				}

					//este es el intervalo anterior, ya q aun no hemos calculado el actual
				if (Math.abs(randomInterval) < 3 || i == 1) {//para aplicar recovery()
					if (i < posicionClimax) {
						// console.log("intervalposPermitidos : " + intervalosPermitidos);
						randomInterval = randomFunction(intervalosPermitidos);		
					} else {//i > climax
						randomInterval = randomFunction(intervalosPermitidosBajar);		
					}

					//leaps control
					if (Math.abs(randomInterval) == 3) { 	
						leapsTotal++;
					}
					//LArgeleaps control
					if (Math.abs(randomInterval) > 3) { 
						largeLeapsTotal++;
					}
				} else {//recovery
					if (randomInterval > 1) {//recovery positive
						console.log("PositoveRecovery at " + i + ": " + randomInterval);
						randomInterval = -1;
					} else if(randomInterval < 1){ //bug01-asigna esto cuando ya no puede poner leaps
						//recovery from negative leap
						console.log("NegativeRecovery at " + i + ": " + randomInterval);
						randomInterval = 1;
					}
				}
				//siguiente version de buscar notas(al azar , solo notas superiores a root)
				soprano[i] = notasMusicales[notasMusicales.indexOf(soprano[i - 1]) + 
					randomInterval
				];	
				// console.log("soprano[" + i + "] : " + soprano[i]);	
				// console.log("posicionEnNotasMusicales : " + notasMusicales.indexOf(soprano[i]));
				// console.log("getFrecuenciaNotas[" + soprano[i] + "] : " + getFrecuenciaNotas(soprano[i]));
			}
		//aqui se ponen las reglas del soprano 
		}while( 
			( notasMusicales.indexOf(notaClimaxSoprano) <= notasMusicales.indexOf(soprano[i]) && (i != posicionClimax) ) //volver a hacer la eleccion si la nota es >= q el climax
			|| (notasMusicales.indexOf(notaClimaxSoprano) - notasMusicales.indexOf(soprano[i])) > 9 //o si se supera el rango de 10th con la climax
				|| (soprano[i]) == (soprano[i + 1])	// o si se repite la nota anterior	
					|| (soprano[i - 1][0].toLowerCase() == "f") && (soprano[i][0].toLowerCase() == "b")  	  //o si es un intervalo de 4aug entre grados diatonicos(IV-VII o VII-IV) 
					|| (soprano[i - 1][0].toLowerCase() == "b") && (soprano[i][0].toLowerCase() == "f")  	  //o si es un intervalo de 4aug entre grados diatonicos(IV-VII o VII-IV) 
						|| leapsTotal > 4
							|| largeLeapsTotal >= 3
							|| (soprano[i - 3] + soprano[i - 2] == soprano[i - 1] + soprano[i]) //evitar patrones anteriores
							|| (soprano[i - 1] + soprano[i] == soprano[i + 1] + soprano[i + 2]) //evitar patrones posteriores
				 )  //
	}
	console.log("soprano : " + soprano);
	console.log("cantus : " + cantus);
	//aqui solo se suma el soprano al header de escalaDo
	for (var i = 0; i < soprano.length; i++) {
		escalaDo = escalaDo + soprano[i];
	}
	escalaDo += "\nV:2 clef=bass\n"
	for (var i = 0; i < cantus.length; i++) {
		escalaDo = escalaDo + cantus[i];
	}
	console.log("escalaDo : " + escalaDo);
}


