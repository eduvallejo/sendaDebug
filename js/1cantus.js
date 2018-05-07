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
//Ej3 schoenberg en Fmaj
//Ej5 schoenberg en Fmaj

// key = "Cmaj";
// cantus = ["C","C","C","C", "G,", "G,", "C","C","C","C","C","C","G,", "G,","C" ];

// //ej 13 segunda especie dos voces
// key = "Cmaj";
// cantus = ["C","B,","G,","A,", "E,", "F,", "A,","D,","G,","F,","D,","C,"];

// //ej 18
key = "Cmaj";
cantus = ["C","F", "G", "F", "D", "G" ,"C"];


// //ej 17
// //de momento el cantus solo se acaba con II-I o VII-I

//hearing salzer
//ej30
key = "Bbmaj";
cantus = ["G,", "D", "C", "E", "D", "C", "B,", "C", "D", "B,", "A,","G," ];


// key = "Fmaj";
// cantus = ["F,", "G,", "B,", "A,", "G,","F,"];
// key = "Gmaj";
// cantus = ["G,", "A,", "C", "B,", "A,", "G,"];
// key = "Cmaj";
// cantus = ["C","E", "D", "A,", "B," ,"D","C"];
// cantus = ["C","G,", "D", "C"];

// //debug
// key = "Cmaj";
// cantus = ["C","G","D","C"];


escalaDo = "X:1\nL:1/1\nQ:1/4=60\nK:" + key ;

checkFinalCantus(cantus);
// mostrarGradosCantus();
// console.clear();
longitudCantus = cantus.length;
// longitudcantusExtendido = longitudCantus * divisionEspecie;
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

