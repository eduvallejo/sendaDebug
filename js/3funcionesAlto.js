function colocarSensibleYfinal(tipoFinalCantus) {
	console.log("colocarsensibleyfinal : " + tipoFinalCantus);
	if (tipoFinalCantus == "II-I") {
		alto[cantusDoble.length - 3] = //la sensible 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + 6];
		// var intervaloAltoFin = [ tercera, octava];
		var intervaloAltoFin = [ octava];
		alto[cantusDoble.length - 1] = 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
		alto[cantusDoble.length - 2] = 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
	} else if(tipoFinalCantus == "VII-I"){
		alto[cantusDoble.length - 3] = //la supertonica
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + novena];
		// var intervaloAltoFin = [ tercera, octava];
		var intervaloAltoFin = [ octava];
		alto[cantusDoble.length - 1] = 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];
		alto[cantusDoble.length - 2] = 
			notasMusicales[notasMusicales.indexOf(cantus[cantus.length - 1]) + randomFunction(intervaloAltoFin)];		
	}
}