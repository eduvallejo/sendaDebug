//repito los intervalos  quiero salgan mas amenudo , los stepwise

var intervMelodicPermitidos = [ segunda,segundaAbajo,segunda, segunda, tercera, tercera,tercera, terceraAbajo, cuarta];
var intervMelodicPermitidosBajar = [ segundaAbajo,segunda,terceraAbajo,terceraAbajo,tercera, quintaAbajo];
console.log("intervMelodicPermitidos : " + intervMelodicPermitidos);
function notasInicioFin(argument) {
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
				if (Math.abs(randomInterval) == 3 && (notasMusicales.indexOf(cantus[i]) >= notasMusicales.indexOf(notaClimax))) {
					leapsTotal--;
					// //fix bug02
					randomInterval = 0;
				} 
				if (Math.abs(randomInterval) > 3 && (notasMusicales.indexOf(cantus[i]) >= notasMusicales.indexOf(notaClimax))) {
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
						// console.log("intervalposPermitidos : " + intervMelodicPermitidos);
						randomInterval = randomFunction(intervMelodicPermitidos);		
					} else {//i > climax
						randomInterval = randomFunction(intervMelodicPermitidosBajar);		
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
						// console.log("PositoveRecovery : " + randomInterval);
						randomInterval = -1;
					} else if(randomInterval < 1){ //bug01-asigna esto cuando ya no puede poner leaps
						//recovery from negative leap
						// console.log("NegativeRecovery : " + randomInterval);
						randomInterval = 1;
					}
				}
				//siguiente version de buscar notas(al azar , solo notas superiores a root)
				cantus[i] = notasMusicales[notasMusicales.indexOf(cantus[i - 1]) + 
					randomInterval
				];	
				// console.log("cantus[" + i + "] : " + cantus[i]);	
				// console.log("posicionEnNotasMusicales : " + notasMusicales.indexOf(cantus[i]));
				// console.log("getFrecuenciaNotas[" + cantus[i] + "] : " + getFrecuenciaNotas(cantus[i]));
			}
		//aqui se ponen las reglas del cantus 
		}while( 
			( notasMusicales.indexOf(notaClimax) <= notasMusicales.indexOf(cantus[i]) && (i != posicionClimax) ) //volver a hacer la eleccion si la nota es >= q el climax
			|| (notasMusicales.indexOf(notaClimax) - notasMusicales.indexOf(cantus[i])) > 9 //o si se supera el rango de 10th con la climax
				|| (cantus[i]) == (cantus[i + 1])	// o si se repite la nota anterior	
					|| (cantus[i - 1][0].toLowerCase() == "f") && (cantus[i][0].toLowerCase() == "b")  	  //o si es un intervalo de 4aug entre grados diatonicos(IV-VII o VII-IV) 
					|| (cantus[i - 1][0].toLowerCase() == "b") && (cantus[i][0].toLowerCase() == "f")  	  //o si es un intervalo de 4aug entre grados diatonicos(IV-VII o VII-IV) 
						|| leapsTotal > 4
							|| largeLeapsTotal >= 3
							|| (cantus[i - 3] + cantus[i - 2] == cantus[i - 1] + cantus[i]) //evitar patrones anteriores
							|| (cantus[i - 1] + cantus[i] == cantus[i + 1] + cantus[i + 2]) //evitar patrones posteriores
				 )  //
	}
	//aqui solo se suma el cantus al header de escalaDo
	// for (var i = 0; i < cantus.length; i++) {
	// 	escalaDo = escalaDo + cantus[i];
	// }
	//una vez calculado el cantus, calculamos el soprano
	vozSoprano();
}

// prohibir mas de 4 leaps en un cantus
// prohibir 3 o mas LArge LEAPS(>=5th )
// 	y poner despues de large leaps q haga direccion reversa mediante steps or skips
// despues de intervalo de 4th puede ir como mucho una 3a en el mismo sentido(prohibir saltos > 4th en mismo sentido despues de 4th)
// pero mejor cambiar direccion desdepues de 4th
// prohibir dos saltos seguidos en misma direccion
// prohibir tres saltos seguidos, da igual direccion
