function colocarNotasDePasoYbordadura(i) {
	if (getIndexBetween(alto[i - 2], alto[i]) == tercera) {
	// console.log("i : " + i);
	// console.log("alto[i - 2] : " + alto[i - 2]);
	// console.log("alto[i] : " + alto[i]);
	alto[i - 1] = 
		notasMusicales[notasMusicales.indexOf(alto[i - 2]) + 1];
	console.log("Coloco de paso en " + alto[i-1] + " en [" + (i-1) + "]");
	// console.log("getIndexBetween(alto[i-2], alto[i]) : " + getIndexBetween(alto[i-2], alto[i]));
	
	}else if (getIndexBetween(alto[i - 2], alto[i]) == -tercera) {
			// console.log("i : " + i);
			// console.log("alto[i - 2] : " + alto[i - 2]);
			// console.log("alto[i] : " + alto[i]);
		alto[i - 1] = 
			notasMusicales[notasMusicales.indexOf(alto[i - 2]) - 1];
		console.log("Coloco de paso en " + alto[i-1] + " en [" + (i-1) + "]");
		// console.log("getIndexBetween(alto[i-2], alto[i]) : " + getIndexBetween(alto[i-2], alto[i]));
	//bordadura siempre 
	}
	else if (getIndexBetween(alto[i - 2], alto[i]) == unisono) {
			// console.log("i : " + i);
			// console.log("alto[i - 2] : " + alto[i - 2]);
			// console.log("alto[i] : " + alto[i]);
		alto[i - 1] = 
			// notasMusicales[notasMusicales.indexOf(alto[i - 2]) + segunda];
			notasMusicales[notasMusicales.indexOf(alto[i - 2]) + intervaloBordadura];
		// console.log("getIndexBetween(alto[i-2], alto[i]) : " + getIndexBetween(alto[i-2], alto[i]));
		console.log("bordadura en:" + i);
	} 
}