//ahora tenemos ya el climax , obtendremos dessde la segunda nota hasta climax
function notasInicioClimax(argument) {
	for (var i = 1; i < posicionClimax; i++) {
		do{
			//segun abajo vamos subiendo stepwise desde root+1
			// cantus[i] = notasMusicales[notasMusicales.indexOf(cantus[0]) + i];

			//siguiente version de buscar notas(al azar , solo notas superiores a root)
			cantus[i] = notasMusicales[notasMusicales.indexOf(cantus[i - 1]) + 
				intervalosPermitidos[Math.floor((Math.random() 
					* intervalosPermitidos.length))]
			];
			console.log("i : " + i);
			console.log("notasMusicales.indexOf("+ cantus[i]+ " ) : " + notasMusicales.indexOf(cantus[i]));
			console.log("notasMusicales.indexOf(climaxcantus["+ notaClimax + "]) : " + notasMusicales.indexOf(notaClimax));
			console.log("(notasMusicales.indexOf(notaClimax) - notasMusicales.indexOf(cantus[i])) : " 
				+ (notasMusicales.indexOf(notaClimax) - notasMusicales.indexOf(cantus[i])));
		//aqui se ponen las reglas del cantus
		//volver a hacer la eleccion si la nota es = o > q el climax
			//o si se supera el rango de 10th con la climax
				// o si se repite la nota anterior
		}while( (notasMusicales.indexOf(notaClimax) <= notasMusicales.indexOf(cantus[i])) 
			|| (notasMusicales.indexOf(notaClimax) - notasMusicales.indexOf(cantus[i])) > 9 
				|| (notasMusicales.indexOf(cantus[i - 1]) == notasMusicales.indexOf(cantus[i])) > 9	)  
	}
}