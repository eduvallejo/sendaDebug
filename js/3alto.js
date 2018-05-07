var alto = [];
var divisionPrimeraEspecie = 1;
var divisionSegundaEspecie = 2;
var divisionTerceraEspecie = 4;
var divisionEspecie = divisionPrimeraEspecie;
var divisionEspecie = divisionSegundaEspecie;
var divisionEspecie = divisionTerceraEspecie;
var randomIntervalAltoCantus = [];

for (var i = 0; i < (cantus.length*divisionEspecie - (divisionEspecie-1)); i++) {
	alto[i] = "0";
	// console.log("i : " + i);
	randomIntervalAltoCantus[i] = "0";
}
console.log("alto : " + alto);
var posicionClimaxAlto = posicionClimax + 1;

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
    
//     console.log("alto : " + alto);
//     // escalaDoAlto = 'V:1 clef=alto1\n"5ª (5) "G/1"6ª (10) "e/1"6ª (7) "B/1"8ª (8) "c';
//     console.log("escalaDoAlto : " + escalaDoAlto);
// 	decodeAjaxResponse(escalaDoAlto);
//     // tiemposCorrectos = [1000, 1000, 1000, 1000];
//     // tiemposCorrectos = [500, 500,  500, 500, 500, 500 , 1000];
//     // tiemposCorrectos = [250,250,250,250,250,250,250,250,250,250,250,250,1000];

// }



// var intervalosArmonicosAlto = [ octava,quinta,tercera,tercera,tercera, sexta, sexta,sexta, quinta];
var intervalosArmonicosAlto = [  unisono, quinta, sexta, tercera, octava ];

// console.log("cantusExtendido : " + cantusExtendido);
var cantusExtendido = [];
var contadorTemp = 0;

//ESTO es una chapuza, arreglarlo para q valga para todas las especies
// for (var i = 0; i < cantus.length*divisionEspecie; i++) {
// 	console.log(i + " % " + divisionEspecie + ": " + i % divisionEspecie);
// 	if (i % divisionEspecie == 1) {
// 		contadorTemp++;
// 	} 
// 	cantusExtendido[i] = cantus[i - contadorTemp];
// }
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
//

colocarSensibleYfinal(checkFinalCantus());

function crearAlto(argument) {
	// console.log("alto : " + alto);
	// console.log("cantusExtendido.length : " + cantusExtendido.length);
	// BUGs Evitar q los leaps se cuemten 3uando no se aplican
	var randomInterval = 1;
	// for (var i = 1; i < posicionClimaxAlto; i++) {
	for (var i = 0; i < (alto.length - 2); i++) {//las dos ultimas estan predefinidas
	intervalosArmonicosAlto = [  quinta, sexta, tercera, octava];
		breakInfiniteLoops = 0;
		var primerIntento = true ;
		do{
		if (i == 0) {
			// var intervaloAltoCero = [ quinta, octava];
			// alto[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervaloAltoCero)];
			intervalosArmonicosAlto = [ quinta, octava];
			alto[0] = notasMusicales[notasMusicales.indexOf(cantus[0]) + randomFunction(intervalosArmonicosAlto)];
		}
			breakInfiniteLoops++;
			if (breakInfiniteLoops>40) {
				colgado == true;
				// console.log("colgado en  : " + i );
				if (i >= 1) { //si se cuelga en el i=1 imposible i-2
					// i = i - buclesAtrasCuelgue; //tirar para atras si no hay una solucion buena
					i = 1; //tirar para atras si no hay una solucion buena
					break;
				} 
				console.log("BREAK i-2: " + i);
				break;
			}
			randomInterval = randomFunction(intervalosArmonicosAlto) ;
				// console.log("randomInterval : " + randomInterval);		
	
			alto[i] = notasMusicales[notasMusicales.indexOf(cantusExtendido[i]) + 
				randomInterval ];	
			randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(alto[i]))
				// - ((notasMusicales.indexOf(cantusExtendido[i])))) + 1;
				- ((notasMusicales.indexOf(cantusExtendido[i])))) ;

			//intentar poner consonancias vecinas para favorecer notas de paso
			if (i % divisionEspecie == 0 && i > 1 && primerIntento == true) {
				// console.log("i Consonancias: " + i);
				for (var j = 0; j < intervalosArmonicosAlto.length -1; j++) {// lo de -1 es porq no me gusta la 8va como segunda nota de pasoS
					if ((Math.abs(getIndexBetween(alto[i - 2]
						,notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]]
						, i))) == tercera) 
					{
						// console.log("(Math: "+ (Math.abs(getIndexBetween(alto[i - 2]
						// ,notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]]
						// , i))));

						alto[i] = notasMusicales[getIndexOf(cantusExtendido[i]) + intervalosArmonicosAlto[j]];	
						randomIntervalAltoCantus[i] = ((notasMusicales.indexOf(alto[i]))
							// - ((notasMusicales.indexOf(cantusExtendido[i])))) + 1;
							- ((notasMusicales.indexOf(cantusExtendido[i])))) ;
						// console.log("alto[i-2] : " + alto[i-2]);
						// console.log("alto[" + i +"] : " + alto[i]);
					} else {}
				}
				primerIntento = false;
			}
			// console.log("getIndexOf(alto[" + i + "]) : " + getIndexOf(alto[i]));
		//aqui se ponen las reglas del alto 
		// console.log("i : " + i);
		}while(//he comentado algunos para poder debugear sin q se cuelgue
			checkingsWhile(i) == true
		)
		comprobarCuelgue();
		//mirar si shay consonantes vecinas en fuertes para poner nota paso
		if (i%2 == 0 && i > 1 ) {
			colocarNotasDePasoYbordadura(i);
		} 
		// console.log("getIndexBetween(alto[" + (i - 1) + "], alto[" + i +"])" + getIndexBetween(alto[i - 1], alto[i]));		 
	}//end for loop
	
	console.log("escalaDo.indexOf(" + key + "); : " + escalaDo.indexOf(key));

	var escalaDoAlto;
	// console.log("alto : " + alto);
	escalaDoAlto = "V:1 clef=alto1\n";
	// escalaDoAlto = "V:1\n";
	// escalaDo += "\nV:2 clef=treble\n"
	//aqui solo se suma el alto al header de escalaDo
	for (var i = 0; i < alto.length; i++) {
		// escalaDo = escalaDo + alto[i] + ' "' + (((notasMusicales.indexOf(alto[i + 1]) % 7 + 8 )) -
		// 	+ (notasMusicales.indexOf(cantus[i + 1]) % 7 + 1 ) % 7 + 1)  +'"';
		escalaDoAlto += 
		 	'"' 
		 		+(((notasMusicales.indexOf(alto[i]))
					- (notasMusicales.indexOf(cantusExtendido[i])))+1) 
			+'ª (' + mostrarGradosVoz(alto, i)+ ') "'
				+ alto[i] + "/" + divisionEspecie//ya q estamos en segunda Especie
		;

		if (i >= alto.length - 1) {
			escalaDoAlto = escalaDoAlto.slice(0 , -2); //slice devuelve desde 0 hasta la 2a al final
		}
		//Colocar la barra de compases
		// console.log(i + " % divisionEspecie : " + (i % divisionEspecie));
		if (i%divisionEspecie == divisionEspecie - 1 ) {
			// console.log(i + "%" + divisionEspecie + " para | : " + i );
			escalaDoAlto += "|";
		} 
	}
	// convertirUltimaBlancaEnNegra, REMOVER EL ultimo /
	// escalaDoAlto = escalaDoAlto.substring(0, escalaDoAlto.length-1);
	escalaDo = escalaDo.replace(key ,key +"\n" 
		+ escalaDoAlto); // if you want all the "hello"'s in the string to be replaced
	// console.clear();
	
	console.log("escalaDoAlto : " + escalaDoAlto);

	// console.clear();
	decodeAjaxResponse(escalaDoAlto);
	console.log("alto : " + alto);
	for (var i = 0; i < alto.length; i++) {
		// console.log("getIndexOf(alto[" + i + "]) : " + getIndexOf(alto[i]));
	}
}




function pararCuelgue(argument) {
	alert("pararCuelgue : ");
	window.location.reload();
}

function comprobarCuelgue(argument) {
	if (colgado == true) {pararCuelgue();}
}

function consoleLog(argument, position){
    console.log(argument+"[" + position + "] : " + argument[position]);
}
