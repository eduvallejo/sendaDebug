function notasClimaxFinal(argument) {
	// tengo q buscar la posicion cantus[0] en notasMusicales y hallar la siguinte

	//ahora desde el climax hasta la antepenultima
	var contadorReversoClimax = 1;
	for (var i = posicionClimax + 1; i < longitudCantus - 2; i++) {
		do{
			//primera version
			// cantus[i] = 
			// 	notasMusicales[notasMusicales.indexOf(notaClimax) - contadorReversoClimax];
			// contadorReversoClimax++;

			cantus[i] = notasMusicales[notasMusicales.indexOf(cantus[i - 1]) + 
				intervalosPermitidos[Math.floor((Math.random() 
					* intervalosPermitidos.length))]
			];
		}while( (notasMusicales.indexOf(notaClimax) <= notasMusicales.indexOf(cantus[i])) 
			|| (notasMusicales.indexOf(notaClimax) - notasMusicales.indexOf(cantus[i])) > 9 
				|| (notasMusicales.indexOf(cantus[i - 1]) == notasMusicales.indexOf(cantus[i])) > 9	)  
	}



	//aqui solo se suma el cantus al header de escalaDo
	console.log("notasMusicales.indexOf['C+1'] : " + (notasMusicales[notasMusicales.indexOf("C")+1]));
	console.log("cantus : " + cantus);
	for (var i = 0; i < cantus.length; i++) {
		escalaDo = escalaDo + cantus[i];
	}
}