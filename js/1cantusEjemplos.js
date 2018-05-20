// // console.log("notasMusicales.indexOf('G') : " + notasMusicales["G"]["position"]);
// // console.log("posIntervalo['C'] : " + posIntervalo.indexOf["C"]);

// //en este script se halla el intervalo declimax con root(por tanto la nota climax) 
// //y luego se halla al azar la posicion del climax dentro del cantus 

// //cantus de Schoemberg
// //Ej 1a
// key = "Cmaj";
// cantus = ["C","D","F","E","D","C"];
// //Ej 1b
// // cantus = ["C","D","E","E","D","C","D","F","E","D","C"];
// //http://regardecetrucconar.free.fr/src/solfege/Cours-MB/Ecriture/esp/c-cf.htm
// //Dupre
// // cantus = ["C", "B,", "A,", "C", "D", "F", "E", "D", "C", ]
// //Koechlin
// // cantus = ["C", "G", "A", "F", "G", "E", "F", "D", "C", ]
// // cantus = ["C", "B,", "A,", "C", "D", "F", "E", "D",
// // 	"C", "G", "A", "F", "G", "E", "F", "D", "C"];
// //Ej2 schoenberg en Gmaj
// //Ej3 schoenberg en Fmaj
// //Ej5 schoenberg en Fmaj

// // key = "Cmaj";
// // cantus = ["C","C","C","C", "G,", "G,", "C","C","C","C","C","C","G,", "G,","C" ];

// // //ej 13 segunda especie dos voces
// // key = "Cmaj";
// // cantus = ["C","B,","G,","A,", "E,", "F,", "A,","D,","G,","F,","D,","C,"];

// // //ej 18
// key = "Cmaj";
// cantus = ["C","F", "G", "F", "D", "G" ,"C"];


// // //ej 17
// // //de momento el cantus solo se acaba con II-I o VII-I

// //hearing salzer
// //ej30
// //pieza musescore
// key = "Bbmaj";
// cantus = ["G,", "D", "C", "E", "D", "C", "B,", "C", "D", "B,", "A,", "G,"];



// // key = "Fmaj";
// // cantus = ["F,", "G,", "B,", "A,", "G,","F,"];
// // key = "Gmaj";
// // cantus = ["G,", "A,", "C", "B,", "A,", "G,"];
// // key = "Cmaj";
// // cantus = ["C","E", "D", "A,", "B," ,"D","C"];
// // cantus = ["C","G,", "D", "C"];

// // key = "AbMaj";
// // cantus = ["A","E","D","G","B","A"];

// // //debug
// // key = "Cmaj";
// // cantus = ["C","D","F", "G", "D", "C"];
// // cantus = ["C","G", "B,", "C"]; //VII-I

// //4a especie
// key = "Fmaj";
// cantus = ["D", "F", "E", "D", "G","F", "A", "G", "F", "E", "D" ];

// key = "Cmaj"; //ej 73
// cantus = ["C", "E", "E", "F", "G","F", "G","F"];
// abcTenor = "X:1\nT:Ej 73\nL:1/1\nK:" + key ;

// // key = "Fmaj"; //ej 73d
// // cantus = ["E", "D"];
// // abcTenor = "X:1\nT:Ej 73 D\nL:1/1\nK:" + key ;

// key = "Bbmaj"; //ej 76
// cantus = ["B,", "D", "C","G"];
// abcTenor = "X:1\nT:Ej 76 excesivas corcheas. la progresion de una 7a es mala, así como la precipitación delas corcheas en el movimiento de paso hacia mib. \nL:1/1\nK:" + key ;

// key = "Bbmaj"; //ej 77
// cantus = ["B,", "D", "C","G"];
// abcTenor = "X:1\nT:Ej 77 la precipitación es eliminada al sustituir corcheas por negras\nL:1/1\nK:" + key ;

// key = "Cmaj"; //ej 82 posibilidades quinta aespecie
// cantus = ["C", "D", "E", "F", "G", "E", "F", "D", "C",  ];
// abcTenor = "X:1\nT:Ej 82 posibilidades de la quin­ta especie\nL:1/1\nK:" + key ;

// key = "Fmaj"; //ej 74 mezcla chusca
// cantus = ["D", "F", "E", "D", "G", "F", "A", "G", "F", ];
// abcTenor = "X:1\nT:Ej 74 bloques de valores iguales que, producen falta de continuidad.\nL:1/1\nK:" + key ;

// //Ej 79 Habráque tomar buena nota de las distintas posibilidades que ofrecen las cor­cheas y las negras (ejem. 79)
// key = "Bbmaj"; //ej 79
// cantus = ["G,", "E,", "D,","C,", "B,", ];
// abcTenor = "X:1\nT:Ej 79 Las síncopas forman la verdadera vida rítmica de la melodía.s\nL:4/4\nK:" + key ;

// key = "Cmaj"; //ej 46
// cantus = ["E4", "F4", "E4","C4", "E4", "D4", "C4", "A,4"];
// abcTenor = "X:1\nT:Ej 46 bordaduras sobre la parte acentuada o debil  del compás\nL:1/4\nK:" + key ;

// key = "Cmaj"; //ej 46c
// cantus = [ "E4", "D4",];
// abcTenor = "X:1\nT:Ej 46c bordaduras sobre la parte acentuada del compás\nL:1/4\nK:" + key ;

// key = "Cmaj"; //ej 47
// cantus = ["E4", "D4", "E4","E4", "E4", ];
// abcTenor = "X:1\nT:Ej 47 el re va, no hacia el si, sino hacia el do del que es una bordadura.\nT:oído escucha una contracción de dos movimiento de borda­dura\nL:1/4\nK:" + key ;

// // key = "Cmaj"; //ej 48
// // cantus = ["F4",  "E4","F4", "E4", ];
// // abcTenor = "X:1\nT:mas prolongación de la bordadura proporciona este embellecimiento melódico(A).\nT:incluso expandido de nuevo, resultando un embellecimiento de 5 notas (B).\nL:1/4\nK:" + key ;

// key = "Fmaj"; //ej 49
// cantus = ["D4",  "C4"  ,"D4",  "B,4"];
// abcTenor = "X:1\nT:Ej 49 Progresion vs embellecimiento .\nL:1/4\nK:" + key ;

// key = "Fmaj"; //ej 50
// // cantus = ["E","E","E","E",  "F4"];
// cantus = ["E4","F4"];
// abcTenor = "X:1\nT:Ej 50 Progresion mezclado con embellecimiento .\nL:1/4\nK:" + key ;

// key = "Bbmaj"; //ej 54 
// cantus = ["B,4","D4", "C4", "G4", "F4", "E4", "D4", "F4", "E4", "C4", "B,4"];
// abcTenor = "X:1\nT:Ej 54 melodia debil, demasiada bordadura\nT:Espera circular\nI:linebreak $\nL:1/4\nK:" + key ;

// key = "Bbmaj"; //ej 57 
// cantus = ["B,4","D4", "C4", "G4", "F4", "B,4","D4", "C4", "G4", "F4"];
// abcTenor = "X:1\nT:Ej 57 sustitucion melodica\nT:\nI:linebreak $\nL:1/4\nK:" + key ;

// key = "Cmaj"; //ej 59
// cantus = ["C4","E4", "B,4", "C4", "E4", "F4","C4", "D4", "E4", "D4"];
// abcTenor = "X:1\nT:Ej 59 más ejemplos\nT:\nI:linebreak $\nL:1/4\nK:" + key ;

// key = "Bbmaj"; //ej 57debug
// cantus = ["B,4","D4", ];
// abcTenor = "X:1\nT:Ej 57 debug silencios\nT:\nI:linebreak $\nL:1/4\nK:" + key ;

// key = "Bbmaj"; //ej 55 
// cantus = ["B,4","D4", "C4", "G4", "F4", "E4", "D4", "F4", "E4", "C4", "B,4"];
// abcTenor = "X:1\nT:Ej 55 monotonía de bordadura eliminada; se reemplaza x línea q progresa,.\nT: retrocede y vuelve hacia adelante1 hacia el climax\nI:linebreak $\nL:1/4\nK:" + key ;

// key = "maj"; //ej 
// cantus = ["4","4", "4", "4", "4", "4", "4", "4", "4", "4", ];
// abcTenor = "X:1\nT:Ej \nT:Ej \nL:1/4\nK:" + key ;

// key = "maj"; //ej 
// cantus = ["4","4", "4", "4", "4", "4", "4", "4", "4", "4", ];
// abcTenor = "X:1\nT:Ej \nT:Ej \nL:1/4\nK:" + key ;

// key = "maj"; //ej 
// cantus = ["4","4", "4", "4", "4", "4", "4", "4", "4", "4", ];
// abcTenor = "X:1\nT:Ej \nT:Ej \nL:1/4\nK:" + key ;

// key = "maj"; //ej 
// cantus = ["4","4", "4", "4", "4", "4", "4", "4", "4", "4", ];
// abcTenor = "X:1\nT:Ej \nT:Ej \nL:1/4\nK:" + key ;

// key = "maj"; //ej 
// cantus = ["4","4", "4", "4", "4", "4", "4", "4", "4", "4", ];
// abcTenor = "X:1\nT:Ej \nT:Ej \nL:1/4\nK:" + key ;


function crearAlto(argument){//FOR DEBUGGING
    // abcAlto = 'V:1 clef=treble\n"8ª"a/2"6ª"f/2|"8ª"e/2"6ª"c/2|"8ª"d/2"6ª"B/2|"6ª"e/2"5ª"d/2|"8ª"b/2"6ª"g/2|"8ª"a'; //AbMaj
    // // abcAlto = 'V:1 clef=treble\n"5ª"G/2"6ª"A/2|"5ª"d/2"6ª"e/2|"5ª"A/2"6ª"B/2|"8ª"c'; //Cmaj
    
    // //Ej 73
    // // abcAlto = 
    // // 'V:1 clef=treble\n "A"c/2 B/4 A/4 | G | "B"e/2 d/4 c/4 | d | "C"e/2 d/4 c/4 | d | "MAL?"e/2 d/4 c/4 | A '; 

    // // //Ej 73 D
    // // abcAlto = 
    // // 'V:1 clef=treble\n c/2 B/4 A/4 | B | '; 

    // //Ej 76 
    // abcAlto = 
    // 'V:1 clef=treble\n z/4 B/4 A/4 G/4 | F/4 G/8A/8 B/4 c/8d/8 | e/2 d/4 c/4 | B '; 

    // //Ej 77 
    // abcAlto = 
    // 'V:1 clef=treble\n z/4 B/4  A/4 G/4 | F/4 f/4 e/4 d/4 | e/2 d/4 c/4 | B '; 

    // // //Ej 82 
    // abcAlto = 
    // 'V:1 clef=treble\n z/2 c/2- | c/4 B/8A/8 B/4 A/4 | G/2 e/2 | d/4 e/4 d/4 c/4 | B/4 d/4 e/4 f/4  | g/2 e/2- | e/4 A/4 d/4 c/4 | B/4  c/4 A/4 B/4 | c'; 

    // // //Ej 74 
    // abcAlto = 
    // 'V:1 clef=treble\n z/2 d/2 | A/2 B/2 | c/2 G/2 | A/4 B/4 c/4 d/4 | e/4 d/4 c/4 B/4  | A/2 d/2- | d/2 c/2- | c/2 B/2- |B/2 A/2 '; 

    // //Ej 79 
    // abcAlto = 
    // 'V:1 clef=treble\n z/2 d/2- |d/4 G/4 c/2- |c/4 B/8A/8 B/2- | B/4 G/4 A/2 | B |  '; 

    // // //Ej 46
    // abcAlto = 
    // 'V:1 clef=treble\n "A" c "bd"d c B| A4 | "B" c "bd"B c d |e4| "c" B c "bd"d c | B4 | "d"  e d c "bd"B | c4 '; 

    // // //Ej 46c
    // abcAlto = 
    // 'V:1 clef=treble\n  B c "bd"d c | B4 |'; 

    // // // // //Ej 47
    // abcAlto = 
    // 'V:1 clef=treble\n "A" c d B c| d4 | "B"cd c2 | c B c2 | "doble bordadura" c d B c |  '; 

    // // // //Ej 48
    // // abcAlto = 
    // // 'V:1 clef=treble\n "A"d f e d| c4 | "B"c f e d  | c4 |  |  '; 

    // // // //Ej 49
    // abcAlto = 
    // 'V:1 clef=treble\n "Prog"  F G A B | c4 | "embell" F A G F   | G4 |  '; 

    // // // //Ej 50
    // abcAlto = 
    // 'V:1 clef=treble\n c d c B| A4|  '; 

    // // //Ej 54
    // abcAlto = 
    // 'V:1 clef=treble\n z B A G| FGEF |GFGA  |BcBd | \n"sustitucion melodica(f-F) xa evitar 5as paralelas"fFGA  | BABc |dfdG| AFGA|\n BAGF| EFGA| B4   '; 

    // // //Ej 57
    // abcAlto = 
    // 'V:1 clef=treble\n z B A G| FDEF |"sust de notas de paso "Gedc |BABc | \n d4 | z B A G| FDEF |"sust de notas de paso "GABc |\nBABc |  d4  ';

    // // //Ej 58
    // abcAlto = 
    // 'V:1 clef=treble\n eGAB|c4  |GFED | E4 | \n Bgfe |d4 | GCDE | F4|\nGcBA |  B4  ';

// // //Ej debug zs
//     abcAlto = 
//     'V:1 clef=treble\n z2 B2 | z2 D2 ';

    // //Ej 55
    // abcAlto = 
    // 'V:1 clef=treble\n z B A G| FGAB |cedc | BABc | \ndefd  | gfga |bBfe| dcBA|\n GFGB| ABGA| B4   '; 

    // //Ej 
    // abcAlto = 
    // 'V:1 clef=treble\n |  |  |  |  |  '; 

    // //Ej 
    // abcAlto = 
    // 'V:1 clef=treble\n |  |  |  |  |  '; 

    // //Ej 
    // abcAlto = 
    // 'V:1 clef=treble\n |  |  |  |  |  '; 

	

    //DESCOMENTAR 
    // decodeAjaxResponse(abcAlto);

 //    //aqui se adjunta la clave alto
	// abcTenor = abcTenor.replace(key ,key +"\n" 
	// 	+ abcAlto);
}


var clefSoprano = "treble";
var clefAlto = "treble";
var clefTenor = "treble";
var clefBass = "bass";

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

