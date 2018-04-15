// console.log("notasMusicales.indexOf('G') : " + notasMusicales["G"]["position"]);
// console.log("posIntervalo['C'] : " + posIntervalo.indexOf["C"]);

//en este script se halla el intervalo declimax con root(por tanto la nota climax) 
//y luego se halla al azar la posicion del climax dentro del cantus 

var climaxIntervals = [cuarta, quinta, sexta, octava, decima]; //2=itervalo de 3a desde el C
var notaClimax;
//al azar ponemos una distancia de tonos entre root y climax
// var numeroTonosClimaxRootDef = climaxIntervals[Math.floor((Math.random() 
// 	* climaxIntervals.length))];
var numeroTonosClimaxRootDef = randomFunction(climaxIntervals);
console.log("numeroTonosClimaxRootDef : " + numeroTonosClimaxRootDef);
//con esa distancia de tonos , ya podemos saber q nota es el climax
notaClimax = notasMusicales[ notasMusicales.indexOf(cantus[0]) + numeroTonosClimaxRootDef];
//DEBUG
// notaClimax = "e";
console.log("notaClimax : " + notaClimax);
console.log("notasMusicales.indexOf(climax) : " + notasMusicales.indexOf(notaClimax));

//ahora hallamos una posicion q ocupara el climax por la mitad del cantus
var posicionClimax = Math.floor( (8 * longitudCantus) / 16) ;
// posicionClimax = 1
console.log("posicionClimax : " + posicionClimax);
//y ponemos la nota climax en esa posicion
cantus[Math.floor(posicionClimax)] = notaClimax;
console.log("cantus : " + cantus);








// console.log("escalaDo : " + escalaDo); 
















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