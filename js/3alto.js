
var divisionPrimeraEspecie = 1;
var divisionSegundaEspecie = 2;
var divisionTerceraEspecie = 4;
var divisionCuartaEspecie = 2;
var divisionEspecie = divisionPrimeraEspecie;
var divisionEspecie = divisionSegundaEspecie;
var divisionEspecie = divisionTerceraEspecie;
// var divisionEspecie = divisionCuartaEspecie;

var posicionClimaxAlto = posicionClimax + 1;

var alto = [];
var randomIntervalAltoCantus = [];
//lo de - (divisionEspecie-1) es porq el cantus , al ser la ultima nota una redonda, tiene menos notas q el cantusExtendido
for (var i = 0; i < (cantus.length*divisionEspecie - (divisionEspecie-1)); i++) {
	alto[i] = "0";
	// console.log("i : " + i);
	randomIntervalAltoCantus[i] = "0";
}
// console.log("alto : " + alto);
// cantusExtendido : " + cantusExtendido);
var cantusExtendido = [];
var contadorTemp = 0;
for (var i = 0; i < cantus.length*divisionEspecie; i++) {
	// console.log(i + " % " + divisionEspecie + ": " + i % divisionEspecie);
	cantusExtendido[i] = cantus[contadorTemp];
	if (i % divisionEspecie == divisionEspecie-1) {
		contadorTemp++;
	} 
	// cantusExtendido[i] = cantus[i - contadorTemp];
}
console.log("altoExtENDIDO : " + alto);
console.log("cantusEXTEN : " + cantusExtendido);



//FOR DEBUGGING, tb cambiar el cantus en cantus.js y el tipo de especie
// alto = ["a","f","e","c","d","B","e","d","b","g","a"];//AbMaj 2a especie

// // alto = ["G","A","d","e","A","B","c"];//CMaj
// // 
// function crearAlto(argument){//FOR DEBUGGING
//     escalaDoAlto = 'V:1 clef=treble\n"8ª"a/2"6ª"f/2|"8ª"e/2"6ª"c/2|"8ª"d/2"6ª"B/2|"6ª"e/2"5ª"d/2|"8ª"b/2"6ª"g/2|"8ª"a'; //AbMaj
//     // escalaDoAlto = 'V:1 clef=treble\n"5ª"G/2"6ª"A/2|"5ª"d/2"6ª"e/2|"5ª"A/2"6ª"B/2|"8ª"c'; //Cmaj

// 	escalaDo = escalaDo.replace(key ,key +"\n" 
// 		+ escalaDoAlto);
//     decodeAjaxResponse(escalaDoAlto);
// }
//END DEBUGGING

colocarSensibleYfinal(checkFinalCantus());
var intervalosArmonicosAlto = [unisono, quinta, sexta, tercera, octava];

// function crearAlto(argument) {
// 	// BUGs Evitar q los leaps se cuemten 3uando no se aplican
// 	var randomInterval = 1;
// 	// for (var i = 1; i < posicionClimaxAlto; i++) {
// 	for (var i = 0; i < (alto.length - 2); i++) {//las dos ultimas estan predefinidas
// 		intervalosArmonicosAlto = [  quinta, sexta, tercera, octava];
// 		breakInfiniteLoops = 0;
// 		var primerIntentoNotaDePaso = true ;
// 		do{
// 		if (i == 0) {
// 			// var intervaloAltoCero = [ quinta, octava];
// 			// alto[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloAltoCero)];
// 			intervalosArmonicosAlto = [ quinta, octava];
// 			alto[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervalosArmonicosAlto)];
// 		}
// 			breakInfiniteLoops++;
// 			if (breakInfiniteLoops>40) {
// 				colgado == true;
// 				// console.log("colgado en  : " + i );
// 				if (i >= 1) { //si se cuelga en el i=1 imposible i-2
// 					console.log("BREAK i: " + i);
// 					// i = 1; //tirar para atras si no hay una solucion buena
// 					i = i - buclesAtrasCuelgue; //tirar para atras si no hay una solucion buena
// 					break;
// 				} 
// 				console.log("BREAK i-2: " + i);
// 				break;
// 			}
// 			randomInterval = randomFunction(intervalosArmonicosAlto) ;
// 				// console.log("randomInterval : " + randomInterval);		
	
// 			alto[i] = notasMusicales[notasMusicales.indexOf(cantusExtendido[i]) + 
// 				randomInterval ];	
// 			randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(alto[i]))
// 				// - ((notasMusicales.indexOf(cantusExtendido[i])))) + 1;
// 				- ((notasMusicales.indexOf(cantusExtendido[i])))) ;

// 			//intentar poner consonancias vecinas para favorecer notas de paso
// 			if (i % divisionEspecie == 0 && i > 1 && primerIntentoNotaDePaso == true) {
// 				// console.log("i Consonancias: " + i);
// 				for (var j = 0; j < intervalosArmonicosAlto.length -1; j++) {// lo de -1 es porq no me gusta la 8va como segunda nota de pasoS
// 					if ((Math.abs(getIndexBetween(alto[i - 2]
// 						,notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]]
// 						, i))) == tercera) 
// 					{
// 						// console.log("(Math: "+ (Math.abs(getIndexBetween(alto[i - 2]
// 						// ,notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]]
// 						// , i))));

// 						alto[i] = notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]];	
// 						randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(alto[i]))
// 							// - ((notasMusicales.indexOf(cantusExtendido[i])))) + 1;
// 							- ((notasMusicales.indexOf(cantusExtendido[i])))) ;
// 						// console.log("alto[i-2] : " + alto[i-2]);
// 						// console.log("alto[" + i +"] : " + alto[i]);
// 						// console.log("nota de paso " + alto[i-1] + " en [" + (i-1) + "]");
// 						primerIntentoNotaDePaso = false;
// 					}
// 				}
// 			}
// 			//notas vecinas2a si no hay de paso
// 			if (primerIntentoNotaDePaso == true) {
// 				for (var j = 0; j < intervalosArmonicosAlto.length; j++) {
// 					if ((Math.abs(getIndexBetween(alto[i - 1]
// 						,notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]]
// 						, i))) == segunda) 
// 					{
// 						alto[i] = notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]];	
// 						randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(alto[i]))
// 							// - ((notasMusicales.indexOf(cantusExtendido[i])))) + 1;
// 							- ((notasMusicales.indexOf(cantusExtendido[i])))) ;
// 						// console.log("nota Vecina 2a  " + alto[i] + " en [" + i + "] con intervalo de " + mostrarNombreIntervalo(intervalosArmonicosAlto[j]));
// 						primerIntentoNotaDePaso  = false;
// 					}	
// 				}
// 			}
// 			//notas a tercera si no hay vecinas
// 			if (primerIntentoNotaDePaso == true) {
// 				for (var j = 0; j < intervalosArmonicosAlto.length; j++) {
// 					if ((Math.abs(getIndexBetween(alto[i - 1]
// 						,notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]]
// 						, i))) == tercera) 
// 					{
// 						alto[i] = notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]];	
// 						randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(alto[i]))
// 							// - ((notasMusicales.indexOf(cantusExtendido[i])))) + 1;
// 							- ((notasMusicales.indexOf(cantusExtendido[i])))) ;
// 						// console.log("nota de 3a en [" + i + "]");
// 						primerIntentoNotaDePaso  = false;
// 					}	
// 				}
// 			}
// 			primerIntentoNotaDePaso  = false;
			
// 			// console.log("getIndexOf(alto[" + i + "]) : " + getIndexOf(alto[i]));
// 		//aqui se ponen las reglas del alto 
// 		// console.log("i : " + i);
// 		}while(//he comentado algunos para poder debugear sin q se cuelgue
// 			checkingsWhile(i) == true
// 		)
// 		comprobarCuelgue();
// 		//mirar si shay consonantes vecinas en fuertes para poner nota paso
// 		//evito notas de paso en la cuarta especie ya que 
// 		// hemos de poner consonancias siempre en la 2a blanca y ligarla
// 		if (divisionEspecie != divisionCuartaEspecie) {
// 			if (i%2 == 0 && i > 1 ) {
// 				colocarNotasDePasoYbordadura(i);
// 			} 
// 		}

// 		//cuarta Especie
// 		if (divisionEspecie == divisionCuartaEspecie) {
// 			// sincopamos la segunda blanca con la 1a del siguiente compas 
// 			if (i % 2 == 0 && i > 1 ) {
// 				alto[i] = alto[i - 1];
// 				// console.log("getIntervaloArmonico(cantusExtendido[" + (i) + "], alto[" + (i) + "] )) : " 
// 				// 	+ mostrarNombreIntervalo(getIntervaloArmonico(cantusExtendido[i], alto[ i])));
// 			}
// 			// console.log("alto[" + i + "] : " + alto[i]);
// 			//restringir como salen las sincopas disonantes
// 			var disonanciassincopaAbajo = [cuarta, septima, onceava, ];
// 			if (i % 2 == 1 && i > 1 ) {
// 				// se mira la sincopa anterior si es disonante y q tipo  para ver si hemos de salir por grado conjunto abajo
// 				if (disonanciassincopaAbajo.includes(getIntervaloArmonico(cantusExtendido[i - 1], alto[ i - 1]))
// 					) {
// 					// console.log("alto[" + i + "] : " + alto[i]);
// 					alto[i] = cambiarNotaConIntervalo(alto[i - 1], segundaAbajo)	
// 					// console.log("alto[" + i + "] : " + alto[i]);
// 				}
// 			}
// 			var disonanciasSincopaArriba = [segunda, novena];
// 			if (i % 2 == 1 && i > 1 ) {
// 				// console.log("i : " + i);
// 				if (disonanciasSincopaArriba.includes(getIntervaloArmonico(cantusExtendido[i - 1], alto[ i - 1]))
// 					) {
// 					alto[i] = cambiarNotaConIntervalo(alto[i - 1], segunda)	
// 				}
// 			}
// 		}

// 		// console.log("getIndexBetween(alto[" + (i - 1) + "], alto[" + i +"])" + getIndexBetween(alto[i - 1], alto[i]));		 
// 	}//end for loop

// 	// console.log("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));

// 	var escalaDoAlto;
// 	// console.log("alto : " + alto);
// 	escalaDoAlto = "V:1 clef=" + clefAlto + "\n";
// 	// escalaDoAlto = "V:1\n";
// 	// escalaDo += "\nV:2 clef=treble\n"
// 	//aqui solo se suma el alto al header de escalaDo
// 	for (var i = 0; i < alto.length; i++) {
// 		// escalaDo = escalaDo + alto[i] + ' "' + (((notasMusicales.indexOf(alto[i + 1]) % 7 + 8 )) -
// 		// 	+ (notasMusicales.indexOf(cantus[i + 1]) % 7 + 1 ) % 7 + 1)  +'"';
// 		escalaDoAlto += 
// 		 	'"' 
// 		 		// +(((notasMusicales.indexOf(alto[i]))
// 					// - (notasMusicales.indexOf(cantusExtendido[i])))+1) 
// 			// +'ª (' + mostrarGradosVoz(alto, i)+ ') "'
// 			+ mostrarNombreIntervalo(getIntervaloArmonico(cantusExtendido[i], alto[i])) + '"'
// 			// +'ª"'
// 				+ alto[i] + "/" + divisionEspecie//ya q estamos en segunda Especie
// 		;

// 		if (i >= alto.length - 1) {
// 			escalaDoAlto = escalaDoAlto.slice(0 , -2); //slice devuelve desde 0 hasta la 2a al final
// 		}
// 		// console.log(i + " % divisionEspecie : " + (i % divisionEspecie));

// 		//4a especie colocamos ligadura antes de la barra 
// 		if (i%divisionEspecie == divisionEspecie - 1 
// 				&& i < alto.length-2 && divisionEspecie == divisionCuartaEspecie) {
// 			// console.log(i + "%" + divisionEspecie + " para | : " + i );
// 			escalaDoAlto += "-"; //ligadura de 4a especie
// 		}
// 		//Colocar la barra de compases
// 		if (i%divisionEspecie == divisionEspecie - 1 ) {
// 			// console.log(i + "%" + divisionEspecie + " para | : " + i );
// 			escalaDoAlto += "|";
// 		} 
// 	}
// 	// convertirUltimaBlancaEnNegra, REMOVER EL ultimo /
// 	// escalaDoAlto = escalaDoAlto.substring(0, escalaDoAlto.length-1);
// 	escalaDo = escalaDo.replace(key ,key +"\n" 
// 		+ escalaDoAlto); // if you want all the "hello"'s in the string to be replaced
// 	// console.clear();
	
// 	// console.log("escalaDoAlto : " + escalaDoAlto);
// 	// console.clear();
// 	console.log("alto : " + alto);
// 	// console.clear();
// 	// var entenderSlice = "0123456789";
// 	// console.log("entenderSlice : " + entenderSlice);
// 	// entenderSlice = entenderSlice.slice(0, -1);
// 	// console.log("entenderSlice : " + entenderSlice);
// 	decodeAjaxResponse(escalaDoAlto);
	
// }




function pararCuelgue(argument) {
	alert("pararCuelgue : ");
	window.location.reload();
}

function comprobarCuelgue(argument) {
	if (colgado == true) {pararCuelgue();}
}

function consoleLog(argument, position){
    //console.log(argument+"[" + position + "] : " + argument[position]);
}

//DEBUG
// function crearAlto(argument){//version sin calculoo para debug
// 	alto = ["G","A","B","c"]; //1a
//     escalaDoAlto = 'V:1 clef=alto1\nG/1A/1B/1c'; //1a especie

//     alto = ["c","B","A" ,"G", "A","B", "c"]; //2a
//     escalaDoAlto = 'V:1 clef=alto1\nc/2B/2 A/2G/2 A/2B/2 c'; //

// 	alto = ["c","B","A","G", "c","B","A","G", "c","B","A","B", "c"]; //3a
//     escalaDoAlto = 'V:1 clef=alto1\nc/4B/4A/4G/4 c/4B/4A/4G/4 c/4B/4A/4B/4 c'; //3a especie
    
//     escalaDo = escalaDo.replace(key ,key +"\n" 
//     	+ escalaDoAlto); // if you want all the "hello"'s in the string to be replaced
//     // console.clear();
    
//     //console.log("alto : " + alto);
//     // escalaDoAlto = 'V:1 clef=alto1\n"5ª (5) "G/1"6ª (10) "e/1"6ª (7) "B/1"8ª (8) "c';
//     //console.log("escalaDoAlto : " + escalaDoAlto);
// 	decodeAjaxResponse(escalaDoAlto);
//     // tiemposCorrectos = [1000, 1000, 1000, 1000];
//     // tiemposCorrectos = [500, 500,  500, 500, 500, 500 , 1000];
//     // tiemposCorrectos = [250,250,250,250,250,250,250,250,250,250,250,250,1000];

// }

