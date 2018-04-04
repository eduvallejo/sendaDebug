//obterner nota 3 y 5 
for (var i = 0; i < notasBajoDef.length; i++) {
	// console.log("notasBajoDef[" + i + "] : " + notasBajoDef[i]);
	for (var j = 0; j < notasMusicales.length; j++) {
		// console.log("notasMusicales[" + i + "] : " + notasMusicales[i]);
		// console.log("notasBajoDef[" + 1 + "] : " + notasBajoDef[1][0]);
		if (notasMusicales[j] == notasBajoDef[i][0]) {
			tercera[i] = notasMusicales[(j + 2) % 7] ;
			// console.log("tercera[i] : " + tercera[i]);
		}
		if (notasMusicales[j] == notasBajoDef[i][0]) {
			quinta[i] = notasMusicales[(j + 4) % 7] ;
			// console.log("quinta[i] : " + quinta[i]);
		}
	}
}
console.log("tercera : " + tercera);
console.log("quinta : " + quinta);

//bucle para recopilar 3as y 5as
for (var i = 0; i < notasBajoDef.length; i++) {
	var contador = 0;
	for (var j = 0; j < tesituraSoprano.length; j++) {//para q acepte c o C ponemos upper todo
		if (tesituraSoprano[j].toUpperCase() == tercera[i].toUpperCase() ||
			 tesituraSoprano[j].toUpperCase() == quinta[i].toUpperCase() ) {
			// console.log("tesituraSoprano[" + j + "] : " + tesituraSoprano[j]);

			notasSopranoAvailable[i][contador] = tesituraSoprano[j];
			contador++;
		}
	}
	console.log("notasSopranoAvailable[" + i + "] : " + notasSopranoAvailable[i]);
}

//bucle para elegir al azar entre las disponibles
for (var i = 0; i < notasBajoDef.length; i++) {
	notasSopranoDef[i] = notasSopranoAvailable[i][Math.floor((Math.random() * notasSopranoAvailable[i].length))];

}



console.log("notasSopranoDef : " + notasSopranoDef);

// console.log("Math.floor((Math.random() * notasSopranoAvailable.length)) : " + Math.floor((Math.random() * notasSopranoAvailable[1].length)));
// console.log("notasSopranoAvailable.length : " + notasSopranoAvailable[1].length);
// console.log("notasSopranoDef : " + notasSopranoAvailable[Math.floor((Math.random() * notasSopranoAvailable[1].length))]);