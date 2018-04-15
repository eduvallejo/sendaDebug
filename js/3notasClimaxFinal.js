function notasClimaxFinal(argument) {
	// // tengo q buscar la posicion cantus[0] en notasMusicales y hallar la siguinte

	// //ahora desde el climax hasta la antepenultima
	// var contadorReversoClimax = 1;
	// for (var i = posicionClimax + 1; i < longitudCantus - 2; i++) {
	// 	do{
	// 		//para q no se cuelgue
	// 		if (leapsTotal > 4) {
	// 			leapsTotal = 3;	
	// 		}
	// 		if (largeLeapsTotal >= 3) {
	// 			largeLeapsTotal = 2;	
	// 		}

	// 	// var randomInterval = intervalosPermitidosBajar[Math.floor((Math.random() 
	// 	// 			* intervalosPermitidosBajar.length))];
	// 	var randomInterval = randomFunction(intervalosPermitidosBajar);

	// 		//leaps control
	// 		if (Math.abs(randomInterval) == 3) { 
	// 			leapsTotal++;
	// 			console.log("i : " + i);
	// 			console.log("leapsTotal : " + leapsTotal);
	// 		}
	// 		//LArgeleaps control
	// 		if (Math.abs(randomInterval) > 3) { 
	// 			largeLeapsTotal++;
	// 		}
	// 		// console.log("randomInterval : " + randomInterval);
	// 		//siguiente version de buscar notas(al azar , solo notas superiores a root)
	// 		cantus[i] = notasMusicales[notasMusicales.indexOf(cantus[i - 1]) + 
	// 			randomInterval
	// 		];		
	// 	//aqui se ponen las reglas del cantus 
	// 	}while( (notasMusicales.indexOf(notaClimax) <= notasMusicales.indexOf(cantus[i])) //volver a hacer la eleccion si la nota es = o > q el climax
	// 		|| (notasMusicales.indexOf(notaClimax) - notasMusicales.indexOf(cantus[i])) > 9 //o si se supera el rango de 10th con la climax
	// 			|| (cantus[i]) == (cantus[i + 1])	// o si se repite la nota anterior	
	// 				|| (cantus[i - 1][0].toLowerCase() == "f") && (cantus[i][0].toLowerCase() == "b")  	  //o si es un intervalo de 4aug entre grados diatonicos(IV-VII o VII-IV) 
	// 					|| leapsTotal > 4
	// 						|| largeLeapsTotal >= 3
	// 						|| (cantus[i - 3] + cantus[i - 2] == cantus[i - 1] + cantus[i]) 
	// 			 )  //
	// }



	// //aqui solo se suma el cantus al header de escalaDo
	// console.log("notasMusicales.indexOf['C+1'] : " + (notasMusicales[notasMusicales.indexOf("C")+1]));
	// console.log("cantus : " + cantus);
	// for (var i = 0; i < cantus.length; i++) {
	// 	escalaDo = escalaDo + cantus[i];
	// }

}
	
