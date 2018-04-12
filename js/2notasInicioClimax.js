//ahora tenemos ya el climax , obtendremos dessde la segunda nota hasta climax
function notasInicioClimax(argument) {
	for (var i = 1; i < posicionClimax; i++) {
		do{
			//para q no se cuelgue
			if (leapsTotal > 4) {
				leapsTotal = 3;	
			}
			if (largeLeapsTotal >= 3) {
				largeLeapsTotal = 2;	
			}
			// var randomInterval = intervalosPermitidos[Math.floor((Math.random() 
			// 		* intervalosPermitidos.length))];
			var randomInterval = randomFunction(intervalosPermitidos);

			//leaps control
			if (Math.abs(randomInterval) == 3) { 	
				leapsTotal++;
				// console.log("i : " + i);
				// console.log("cantus[" + i + " - 1] : " + cantus[i - 1]);
				// console.log("leapsTotal : " + leapsTotal);
				// console.log("randomInterval : " + randomInterval);
			}
			//LArgeleaps control
			if (Math.abs(randomInterval) > 3) { 
				largeLeapsTotal++;
				// console.log("i : " + i);
				// console.log("cantus[" + i + " - 1] : " + cantus[i - 1]);
				// console.log("largeLeapsTotal : " + largeLeapsTotal);
				// console.log("randomInterval : " + randomInterval);
			}
			// console.log("randomInterval : " + randomInterval);
			//siguiente version de buscar notas(al azar , solo notas superiores a root)
			cantus[i] = notasMusicales[notasMusicales.indexOf(cantus[i - 1]) + 
				randomInterval
			];		
			console.log("cantus[" + i + "] : " + cantus[i]);
		//aqui se ponen las reglas del cantus 
		}while( (notasMusicales.indexOf(notaClimax) <= notasMusicales.indexOf(cantus[i])) //volver a hacer la eleccion si la nota es = o > q el climax
			|| (notasMusicales.indexOf(notaClimax) - notasMusicales.indexOf(cantus[i])) > 9 //o si se supera el rango de 10th con la climax
				|| (cantus[i]) == (cantus[i + 1])	// o si se repite la nota anterior	
					|| (cantus[i - 1][0].toLowerCase() == "f") && (cantus[i][0].toLowerCase() == "b")  	  //o si es un intervalo de 4aug entre grados diatonicos(IV-VII o VII-IV) 
					|| (cantus[i - 1][0].toLowerCase() == "b") && (cantus[i][0].toLowerCase() == "f")  	  //o si es un intervalo de 4aug entre grados diatonicos(IV-VII o VII-IV) 
						|| leapsTotal > 4
							|| largeLeapsTotal >= 3
							|| (cantus[i - 3] + cantus[i - 2] == cantus[i - 1] + cantus[i]) //evitar patrones
				 )  //
	}
}

// prohibir mas de 4 leaps en un cantus
// prohibir 3 o mas LArge LEAPS(>=5th )
// 	y poner despues de large leaps q haga direccion reversa mediante steps or skips
// despues de intervalo de 4th puede ir como mucho una 3a en el mismo sentido(prohibir saltos > 4th en mismo sentido despues de 4th)
// pero mejor cambiar direccion desdepues de 4th
// prohibir dos saltos seguidos en misma direccion
// prohibir tres saltos seguidos, da igual direccion
