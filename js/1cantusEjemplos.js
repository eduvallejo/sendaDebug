


var clefSoprano = "treble";
var clefAlto = "treble";
var clefTenor = "treble";
var clefBass = "bass";

checkFinalCantus(cantus);
// mostrarGradosCantus();
// console.clear();
longitudCantus = cantus.length;
// longitudcantusExtendido = longitudCantus * divisionEspecie;
// console.log("longitudCantus : " + longitudCantus);
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

