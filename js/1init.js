// console.log("notasMusicales.indexOf('G') : " + notasMusicales["G"]["position"]);
// console.log("posIntervalo['C'] : " + posIntervalo.indexOf["C"]);


var climaxIntervals = [quinta, sexta, ]; //2=itervalo de 3a desde el C
var notaClimax;
// console.log("climaxIntervals : " + climaxIntervals);
var intervaloClimaxDef = climaxIntervals[Math.floor((Math.random() 
	* climaxIntervals.length))];
// console.log("intervaloClimaxDef : " + intervaloClimaxDef);
notaClimax = notasMusicales[intervaloClimaxDef];

//DEBUG
notaClimax = "A";

// notaClimax = notasMusicales[climaxIntervals[Math.floor((Math.random() 
// 	* climaxIntervals.length))]];
// console.log("notaClimax : " + notaClimax);
// console.log("cantus : " + cantus);
//de momento asignamos la posicion del climax a la mitad 
// console.log(Math.floor(longitudCantus / 2) ); 
var posicionClimax = Math.floor(longitudCantus / 2) - 1;
//debug
console.log("posicionClimax : " + posicionClimax);

cantus[Math.floor(posicionClimax)] = notaClimax;
console.log("cantus : " + cantus);

//ahora tenemos ya el climax , obtendremos dessde la segunda nota hasta climax
for (var i = 1; i < posicionClimax; i++) {
	cantus[i] = notasMusicales[notasMusicales.indexOf(cantus[0]) + i];
}
// tengo q buscar la posicion cantus[0] en notasMusicales y hallar la siguinte

//ahora desde el climax hasta la antepenultima
var contadorReversoClimax = 1;
for (var i = posicionClimax + 1; i < longitudCantus - 2; i++) {
		cantus[i] = 
			notasMusicales[notasMusicales.indexOf(notaClimax) - contadorReversoClimax];
		console.log(" : " + notasMusicales[
			(notasMusicales.indexOf(notaClimax)) - contadorReversoClimax
			]);
		// console.log("notasMusicales.indexOf(notasMusicales[i]))-1 : " + 
		// 	(notasMusicales.indexOf(notasMusicales[i])) - contadorReversoClimax);
		contadorReversoClimax++;
		// contadorReversoClimax++;	
}


console.log("notasMusicales.indexOf['C'] : " + (notasMusicales[notasMusicales.indexOf("C")+1]));
console.log("cantus : " + cantus);
















// //obterner nota 3 y 5 
// for (var i = 0; i < notasBajoDef.length; i++) {
// 	// console.log("notasBajoDef[" + i + "] : " + notasBajoDef[i]);
// 	for (var j = 0; j < notasMusicales.length; j++) {
// 		// console.log("notasMusicales[" + i + "] : " + notasMusicales[i]);
// 		// console.log("notasBajoDef[" + 1 + "] : " + notasBajoDef[1][0]);
// 		if (notasMusicales[j] == notasBajoDef[i][0]) {
// 			tercera[i] = notasMusicales[(j + 2) % 7] ;
// 			// console.log("tercera[i] : " + tercera[i]);
// 		}
// 		if (notasMusicales[j] == notasBajoDef[i][0]) {
// 			quinta[i] = notasMusicales[(j + 4) % 7] ;
// 			// console.log("quinta[i] : " + quinta[i]);
// 		}
// 	}
// }
// console.log("tercera : " + tercera);
// console.log("quinta : " + quinta);

// //bucle para recopilar 3as y 5as
// for (var i = 0; i < notasBajoDef.length; i++) {
// 	var contador = 0;
// 	for (var j = 0; j < tesituraSoprano.length; j++) {//para q acepte c o C ponemos upper todo
// 		if (tesituraSoprano[j].toUpperCase() == tercera[i].toUpperCase() ||
// 			 tesituraSoprano[j].toUpperCase() == quinta[i].toUpperCase() ) {
// 			// console.log("tesituraSoprano[" + j + "] : " + tesituraSoprano[j]);

// 			notasSopranoAvailable[i][contador] = tesituraSoprano[j];
// 			contador++;
// 		}
// 	}
// 	console.log("notasSopranoAvailable[" + i + "] : " + notasSopranoAvailable[i]);
// }

// //bucle para elegir al azar entre las disponibles
// for (var i = 0; i < notasBajoDef.length; i++) {
// 	notasSopranoDef[i] = notasSopranoAvailable[i][Math.floor((Math.random() * notasSopranoAvailable[i].length))];

// }



// console.log("notasSopranoDef : " + notasSopranoDef);

// // console.log("Math.floor((Math.random() * notasSopranoAvailable.length)) : " + Math.floor((Math.random() * notasSopranoAvailable[1].length)));
// // console.log("notasSopranoAvailable.length : " + notasSopranoAvailable[1].length);
// // console.log("notasSopranoDef : " + notasSopranoAvailable[Math.floor((Math.random() * notasSopranoAvailable[1].length))]);