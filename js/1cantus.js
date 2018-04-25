// console.log("notasMusicales.indexOf('G') : " + notasMusicales["G"]["position"]);
// console.log("posIntervalo['C'] : " + posIntervalo.indexOf["C"]);

//en este script se halla el intervalo declimax con root(por tanto la nota climax) 
//y luego se halla al azar la posicion del climax dentro del cantus 

//cantus de Schoemberg
//Ej 1a
cantus = ["C","D","F","E","D","C"];
//Ej 1b
// cantus = ["C","D","E","E","D","C","D","F","E","D","C"];
//http://regardecetrucconar.free.fr/src/solfege/Cours-MB/Ecriture/esp/c-cf.htm
//Dupre
// cantus = ["C", "B,", "A,", "C", "D", "F", "E", "D", "C", ]
//Koechlin
// cantus = ["C", "G", "A", "F", "G", "E", "F", "D", "C", ]
// cantus = ["C", "B,", "A,", "C", "D", "F", "E", "D",
// 	"C", "G", "A", "F", "G", "E", "F", "D", "C"];
//Ej2 schoenberg en Gmaj
// key = "Gmaj";
// cantus = ["G,", "A,", "C", "B,", "A,", "G,"];
//Ej3 schoenberg en Fmaj
// key = "Fmaj";
// cantus = ["F,", "G,", "B,", "A,", "G,","F,"];

escalaDo = "X:1\nL:1/2\nK:" + key ;

longitudCantus = cantus.length;
console.log("longitudCantus : " + longitudCantus);
function getClimaxPosition(argument) {
	for (var i = 0; i < cantus.length; i++) {
		cantus[i]
	}
}


var climaxIntervals = [cuarta, quinta, sexta, octava]; //2=itervalo de 3a desde el C
var notaClimax;
//al azar ponemos una distancia de tonos entre root y climax
// // var numeroTonosClimaxRootDef = climaxIntervals[Math.floor((Math.random() 
// // 	* climaxIntervals.length))];
// var numeroTonosClimaxRootDef = randomFunction(climaxIntervals);
// // console.log("numeroTonosClimaxRootDef : " + numeroTonosClimaxRootDef);
// //con esa distancia de tonos , ya podemos saber q nota es el climax
// notaClimax = notasMusicales[ notasMusicales.indexOf(cantus[0]) + numeroTonosClimaxRootDef];
// //DEBUG
// // notaClimax = "e";
// console.log("notaClimax : " + notaClimax);
// // console.log("notasMusicales.indexOf(climax) : " + notasMusicales.indexOf(notaClimax));

// //ahora hallamos una posicion q ocupara el climax por la mitad del cantus
var posicionClimax;
// posicionClimax = Math.floor( (8 * longitudCantus) / 16) ;
// // posicionClimax = 1
// // console.log("posicionClimax : " + posicionClimax);
// //y ponemos la nota climax en esa posicion
// cantus[Math.floor(posicionClimax)] = notaClimax;
// console.log("cantus : " + cantus);
getClimaxPosition();

