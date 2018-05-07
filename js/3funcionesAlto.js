function checkingsWhile(i){
	if (i > 0) {
	  if(
	  	checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], quinta, quinta) 
	  		&&  checkMovimientoDirecto(cantusExtendido[i],cantusExtendido[i-1],alto[i],alto[i-1] )
	   //  ||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], octava, octava) 
	   //  	&&  checkMovimientoDirecto(cantusExtendido[i],cantusExtendido[i-1],alto[i],alto[i-1] )
	   //  ||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 5, 8) 
	   //  ||checkIntervalosProhibidos(randomIntervalAltoCantus[i], randomIntervalAltoCantus[i - 1], 8, 5)
	   //  // 5as ocultas (5as por movimiento directo)
	   //  checkMovimientoDirecto(cantusExtendido[i],cantusExtendido[i-1],alto[i],alto[i-1] ) && randomIntervalAltoCantus[i] == 5
	   //  // 8as ocultas (8as por movimiento directo)
	   //  ||checkMovimientoDirecto(cantusExtendido[i],cantusExtendido[i-1],alto[i],alto[i-1] ) && randomIntervalAltoCantus[i] == 8
	   //  // restore leaps q suben o bajan con ibtervalo contrario de maximo 3a
	   //  ||checkLeapsToRestore(alto[i - 2], alto[i - 1],alto[i])
	   //  // chekear q la melodia no salta intervalos prohibidos melodicamente
	   || checkForbiddenMelodicInterval(alto[i - 1], alto[i], i) 
	   //  // chekear q la melodia no salta intervalos prohibidos melodicamente
	   //  ||checkForbiddenMelodicInterval(alto[i], alto[i+1], i) //hacer i-3
	   //  //q no hayas dos notas iguales
	    ||checkNotasIguales(alto, i-1, i)
	    ||checkNotasIguales(alto, i-2, i)
	    ||checkNotasIguales(alto, i, i+1)
	    ||checkNotasIguales(alto, i, i+2)
	   //  ||getIndexBetween(alto[i - 1]) == getIndexBetween(alto[i])
	   //  ||getIndexBetween(alto[i]) == getIndexBetween(alto[i + 1]) 
	    // //q no haya seguidas grupos de dos iguales
	    // ||getIndexBetween(alto[i - 3]) == getIndexBetween(alto[i - 1]) &&
	    // getIndexBetween(alto[i - 2]) == getIndexBetween(alto[i])
	    //q no haya seguidas grupos de dos iguales
	    // ||getIndexBetween(alto[i + 1]) == getIndexBetween(alto[i - 1]) &&
	    // getIndexBetween(alto[i + 2]) == getIndexBetween(alto[i])
	    //q no baje por debajo del F,,
	    ||getIndexOf(alto[i]) < 8
	    ||alto[i] == "F" && alto[i + 1] == "B"
	    ){
	  	return true;
	  }
	} 
}

function colocarSensibleYfinal(tipoFinalCantus) {
	if (tipoFinalCantus == "II-I") {
	// console.log("colocarsensibleyfinal : " + tipoFinalCantus);
		// console.log("cantus.length*divisionEspecie - 3 : " 
		// 	+ (cantus.length*divisionEspecie -3));
		var intervaloAltoFin = [ octava];
/*		alto[cantus.length*divisionEspecie - 3] = //la sensible 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + 6];
		alto[cantus.length*divisionEspecie - 2] = 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
*/		// 	console.log("ColocaDoalto : " + alto);
		// console.log("alto[alto.length-2] : " + alto[alto.length-2]);
		// console.log("alto[alto.length-1] : " + alto[alto.length-1]);
		alto[alto.length - 2] = //la sensible 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + 6];
		alto[alto.length - 1] = 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];

	} else if(tipoFinalCantus == "VII-I"){
	// console.log("colocarsensibleyfinal : " + tipoFinalCantus);
	// 	console.log("cantus.length*divisionEspecie - 3 : " 
	// 		+ (cantus.length*divisionEspecie -3));
		// alto[cantus.length*divisionEspecie - 3] = //la sensible 
		// 	notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) - 1];
		// // var intervaloAltoFin = [ tercera, octava];
		// var intervaloAltoFin = [ octava];
		// alto[cantus.length*divisionEspecie - 2] = 
		// 	notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
		// alto[cantus.length*divisionEspecie - 1] = 
		// 	notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
		// 	console.log("ColocaDoalto : " + alto);	
	}
	// console.log("COLOCARalto : " + alto);
}

function agregarAbc(nota){
    // escalaDoAlto += 
     // 	'"' 
     // 		+(((notasMusicales.indexOf(altoTemp[i]))
    	// 		- (notasMusicales.indexOf(cantus[iCantus])))+1) 
    	// +'ª"'+ 
    	returnnota + "/" + divisionEspecie + " " // (/2 = /) (/4) etc
    	;
}