function colocarSensibleYfinal(tipoFinalCantus) {
	console.log("colocarsensibleyfinal : " + tipoFinalCantus);
	if (tipoFinalCantus == "II-I") {
		// console.log("cantus.length*divisionEspecie - 3 : " 
		// 	+ (cantus.length*divisionEspecie -3));
		alto[cantus.length*divisionEspecie - 3] = //la sensible 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + 6];
		// var intervaloAltoFin = [ tercera, octava];
		var intervaloAltoFin = [ octava];
		alto[cantus.length*divisionEspecie - 2] = 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
		// alto[cantus.length*divisionEspecie - 1] = 
		// 	notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
		// 	console.log("ColocaDoalto : " + alto);
	} else if(tipoFinalCantus == "VII-I"){
		console.log("cantus.length*divisionEspecie - 3 : " 
			+ (cantus.length*divisionEspecie -3));
		alto[cantus.length*divisionEspecie - 3] = //la sensible 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) - 1];
		// var intervaloAltoFin = [ tercera, octava];
		var intervaloAltoFin = [ octava];
		alto[cantus.length*divisionEspecie - 2] = 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
		alto[cantus.length*divisionEspecie - 1] = 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
			console.log("ColocaDoalto : " + alto);	
	}
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