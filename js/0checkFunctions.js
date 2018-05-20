function checkFinalCantus(argument) {
    //console.log.log("cantus[cantus.length - 2] : " + getIndexOf(cantus[cantus.length - 2]));
    //console.log.log("cantus[cantus.length - 1] : " + getIndexOf(cantus[cantus.length - 1]));
    //console.log.log("cantus[cantus.length - 2] : " + notasMusicales[getIndexOf(cantus[cantus.length - 2])]);
    //console.log.log("cantus[cantus.length - 1] : " + notasMusicales[getIndexOf(cantus[cantus.length - 1])]);

  // console.log("getIndexBetween(cantus[cantus.length - 2], cantus[cantus.length - 1]) : " + getIndexBetween(cantus[cantus.length - 2], cantus[cantus.length - 1]));
  if (getIndexBetweenMismaVoz(cantus, cantus.length - 2, cantus.length - 1) == segundaAbajo) {
    //console.log("final II-I : ");
    return("II-I");
  // } else if((getIndexOf(cantus[cantus.length - 2]) - getIndexOf(cantus[cantus.length - 1])) == -1){
  // } else if (getIndexBetween(cantus[cantus.length - 2], cantus[cantus.length - 1]) == segundaAbajo) {
  } else {//TODO
    //console.log("final VII-I : ");
    return("VII-I");
    // return("II-I");  
  }
}

function checkNotasIguales(voz, iAnt, iPost){
    if(getIndexBetween(voz[iAnt], voz[iPost], iAnt, iPost) == 0){
      // console.log("IGUALES Index("+iAnt+ ":)(" + voz[iPost] + ") - Index("+iPost+":)(" + voz[iAnt] + ") : "  
      //   + (notasMusicales.indexOf(voz[iPost]) - notasMusicales.indexOf(voz[iAnt])));
      // console.log("notas = en " + index + ": " + argument + "=" + voz[iPost]);
      return true;
    }
}
function checkLeapsToRestore(indiceMenos2, indiceMenos1, indiceActual ) {
	if(getIndexBetween(indiceMenos2, indiceMenos1) >= restoreInterval 
		 && (getIndexBetween(indiceMenos1, indiceActual) > 0 	
		 		|| getIndexBetween(indiceMenos1, indiceActual) < -tercera)){
		
		// console.log("indiceMenos2+indiceMenos1+indiceActual : " + indiceMenos2 + "," + indiceMenos1+ "," + indiceActual);
		return true;
	} 	
	//restore leaps q bajan
	if(getIndexBetween(indiceMenos2, indiceMenos1) <= -restoreInterval 
		  && (getIndexBetween(indiceMenos1, indiceActual) < 0 	
		  	|| getIndexBetween(indiceMenos1, indiceActual) > tercera)){

		// console.log("indiceMenos2+indiceMenos1+indiceActual : " + indiceMenos2 + "," + indiceMenos1+ "," + indiceActual);
		return true;
	} 
}

//checkear saltos melodicos prohibidos mayores de ooctava o salto de 7a
function checkForbiddenMelodicInterval(argumentoAnterior, argumentoPosterior, iPosicion) {
  // console.log("intervaloMomento : " + Math.abs(notasMusicales.indexOf(argumentoPosterior) - notasMusicales.indexOf(argumentoAnterior)));
	if (iPosicion != 0) {
      var intervaloMomento = Math.abs(getIndexBetween(argumentoAnterior, argumentoPosterior));
      if (intervaloMomento > intervMelodMax 
          || (intervaloMomento == septima)
        ){
          // console.log("notasMusicales.indexOf(i-1)-(i)(" + argumentoPosterior + ") - notasMusicales.indexOf(" + argumentoAnterior + ") : "  + (notasMusicales.indexOf(argumentoPosterior) - notasMusicales.indexOf(argumentoAnterior)));
          //console.log("En i:" + iPosicion + " melodico > 7a8a en argAnt(" + argumentoAnterior + ") y argPost(" + argumentoPosterior + ") )" 
            // + intervaloMomento );
          return true;
      }
    }
}


//saber si hay dos leaps seguidos
function checkLeaps(argument1, argument2, argument3) {
  if(Math.abs(notasMusicales.indexOf(argument1) - (notasMusicales.indexOf(argument2))) >= 3 
      && Math.abs(notasMusicales.indexOf(argument2) - Math.abs(notasMusicales.indexOf(argument3))) >= 3){
        return true;
  }else{return false;}
}

function checkMovimientoDirecto(voz1actual, voz1anterior, voz2actual, voz2anterior) {
  //directo hacia abajo
  if (((getIndexBetween(voz1actual, voz1anterior)) >= 1) && ((getIndexBetween(voz2actual, voz2anterior)) >= 1)) {
    // console.log("movimientoDirectoAbajo : yes" );
    return true;
  }else if (((getIndexBetween(voz1actual, voz1anterior)) <= -1) && ((getIndexBetween(voz2actual, voz2anterior)) <= -1)) {
  //directo hacia arriba
    // console.log("movimientoDirectoArriba : yes" );
    return true;
  }else {return false;}
}

//funciones de checkeo
function checkOctavasSeguidas(argument1, argument2) {
  if ((argument1 == 8 )&&( argument2 == 8)
    // &&(checkMovimientoDirecto(argument1,argument2)== true)== true
    ) {
    // console.log("8as seguidas : " );
    return true;
  }
}
//funciones de checkeo
function checkQuintasSeguidas(argument1, argument2) {
  if((argument1 == 5 )&&( argument2 == 5)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    // console.log("quintas seguidas : " );
    return true;
  }

}
//funciones de checkeo
function checkQuintasOctavasSeguidas(argument1, argument2) {
  if((argument1 == 5 )&&( argument2 == 8)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    //console.log("quintasOCtavas seguidas : " );
    return true;
  }else if((argument1 == 8 )&&( argument2 == 5)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    //console.log("OctavasQuintas seguidas : " );
    return true;
  }

}
//funciones de checkeo intervalos seguidos prohibidos
function checkIntervalosProhibidos(randomIntervalCantusAlto1, randomIntervalCantusAlto2, interval1, interval2) {
  if((randomIntervalCantusAlto1 == interval1 )&&( randomIntervalCantusAlto2 == interval2)
        // &&(checkMovimientoDirecto(randomIntervalCantusAlto1,randomIntervalCantusAlto2 == true
        ){
  //     //console.log.log("randomIntervalCantusAlto1 : " + randomIntervalCantusAlto1);
  // console.log("randomIntervalCantusAlto2 : " + randomIntervalCantusAlto2);
  //     //console.log.log("intervalos seguidas : " + interval1 + "ª , " + interval2 + "ª");
    return true;
  }
}
//funciones de checkeo
function checkTercerasSeguidas(argument1, argument2) {
  if((argument1 == 3)&&( argument2 == 3)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    //console.log("terceras seguidas : " );
    return true;
  }

}
//funciones de checkeo
function checkSextasSeguidas(argument1, argument2) {
  if((argument1 == 6)&&( argument2 == 6)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    //console.log("sextas seguidas : " );
  }

}



//intervalos peremitidos

//esta es solo el header al q se se suma el cantus 
// var abcTenor = "X:1\nT:escala de Do\nC:\nL:1/2\nQ:1/4=150\nM:4/2\nK:Cmaj\nV:1 clef=treble\n"
// var abcTenor = "X:1\nT:escala de Do\nC:\nL:1/2\nQ:1/4=150\nM:4/2\nK:Cmaj\nV:1 clef=bass\n"
// console.log("abcTenor : " + abcTenor);

// var abcTenor = "X:1\nM: 4/4\nL: 1/8\nK: Emin\n|:D2|EB{c}BA B2 EB|\n";

// console.log("indiceNota['G,'] : " + indiceNota['G,']);
	// console.log("indiceNota['E,'] : " + indiceNota['E,']);
	// console.log("notasBajoDef : " + notasBajoDef[0]);
	// console.log("notasSopranoDef : " + notasSopranoDef[0]);


// console.log("10%8 : " + (9%7));
// console.log("10%7 : " + (8%7));
// console.log("10%7 : " + (7%7));

// tesituras
// 	soprano: (D - a)
// 	contralto: (G, - d)
// 	tenor: (D, - A)
// 	bajo: (F,, - C)

frecuenciaNotas = {
  "C0": {"hz":16.35,}," C^0/_D ": {"hz":17.32,},"D0": {"hz":18.35,}," D^0/_E ": {"hz":19.45,},"E0": {"hz":20.6,},"F0": {"hz":21.83,}," F^0/_G ": {"hz":23.12,},"G0": {"hz":24.5,}," G^0/_A ": {"hz":25.96,},"A0": {"hz":27.5,}," A^0/_B ": {
    "hz":29.14,
  },
  "B,,,,": {
    "hz":30.87,
  },
  "C,,,": {"hz":32.7,},
  " C^1/Db1 ": {"hz":34.65,},
  "D,,,": {"hz":36.71,},
  " D^1/Eb1 ": {"hz":38.89,},
  "E,,,": {"hz":41.2,},
  "F,,,": {"hz":43.65,},
  " F^1/Gb1 ": {"hz":46.25,},
  "G,,,": {"hz":49,},
  " G^1/Ab1 ": {"hz":51.91,},
  "A,,,": {"hz":55,},
  " A^1/Bb1 ": {"hz":58.27,},
  "B,,,": {"hz":61.74,},
  "C,,": {"hz":65.41,
  },
  " C^2/Db2 ": {
    "hz":69.3,
  },
  "D,,": {
    "hz":73.42,
  },
  " D^2/Eb2 ": {
    "hz":77.78,
  },
  "E,,": {
    "hz":82.41,
  },
  "F,,": {
    "hz":87.31,
  },
  "^F,,/Gb2 ": {
    "hz":92.5,
  },
  " F^2/Gb2 ": {
    "hz":92.5,
  },
  "G,,": {
    "hz":98,
  },
  " G^2/Ab2 ": {
    "hz":103.83,
  },
  "A,,": {
    "hz":110,
  },
  " A^2/Bb2 ": {
    "hz":116.54,
  },
  "B,,": {
    "hz":123.47,
  },
  "C,": {
    "hz":130.81,
  },
  " C^3/Db3 ": {
    "hz":138.59,
  },
  "D,": {
    "hz":146.83,
  },
  " D^3/Eb3 ": {
    "hz":155.56,
  },
  "E,": {
    "hz":164.81,
  },
  "F,": {
    "hz":174.61,
  },
  " F^3/Gb3 ": {
    "hz":185,
  },
  "G,": {
    "hz":196,
  },
  " G^3/Ab3 ": {
    "hz":207.65,
  },
  "A,": {
    "hz":220,
  },
  " A^3/Bb3 ": {
    "hz":233.08,
  },
  "B,": {
    "hz":246.94,
  },
  "C": {
    "hz":261.0,
  },
  " C^4/Db4 ": {
    "hz":277.18,
  },
  "D": {
    "hz":293.66,
  },
  " D^4/Eb4 ": {
    "hz":311.13,
  },
  "E": {
    "hz":329.63,
  },
  "F": {
    "hz":349.23,
  },
  " F^4/Gb4 ": {
    "hz":369.99,
  },
  "G": {
    "hz":391.995,
  },
  " G^4/Ab4 ": {
    "hz":415.3,
  },
  "A": {
    "hz":440,
  },
  " A^4/Bb4 ": {
    "hz":466.16,
  },
  "B": {
    "hz":493.88,
  },
  "c": {
    "hz":523.25,
  },
  " C^5/Db5 ": {
    "hz":554.37,
  },
  "d": {
    "hz":587.33,
  },
  " D^5/Eb5 ": {
    "hz":622.25,
  },
  "e": {
    "hz":659.25,
  },
  "f": {
    "hz":698.46,
  },
  " F^5/Gb5 ": {
    "hz":739.99,
  },
  "g": {
    "hz":783.99,
  },
  " G^5/Ab5 ": {
    "hz":830.61,
  },
  "a": {
    "hz":880,
  },
  " A^5/Bb5 ": {
    "hz":932.33,
  },
  "b": {
    "hz":987.77,
  },
  "c'": {
    "hz":1046.5,
  },
  " C^6/Db6 ": {
    "hz":1108.73,
  },
  "d'": {
    "hz":1174.66,
  },
  " D^6/Eb6 ": {
    "hz":1244.51,
  },
  "e'": {
    "hz":1318.51,
  },
  "f'": {
    "hz":1396.91,
  },
  " F^6/Gb6 ": {
    "hz":1479.98,
  },
  "g'": {
    "hz":1567.98,
  },
  " G^6/Ab6 ": {
    "hz":1661.22,
  },
  "a'": {
    "hz":1760,
  },
  " A^6/Bb6 ": {
    "hz":1864.66,
  },
  "b'": {
    "hz":1975.53,
  },
  "C7": {
    "hz":2093,
  },
  " C^7/Db7 ": {
    "hz":2217.46,
  },
  "D7": {
    "hz":2349.32,
  },
  " D^7/Eb7 ": {
    "hz":2489.02,
  },
  "E7": {
    "hz":2637.02,
  },
  "F7": {
    "hz":2793.83,
  },
  " F^7/Gb7 ": {
    "hz":2959.96,
  },
  "G7": {
    "hz":3135.96,
  },
  " G^7/Ab7 ": {
    "hz":3322.44,
  },
  "A7": {
    "hz":3520,
  },
  " A^7/Bb7 ": {
    "hz":3729.31,
  },
  "B7": {
    "hz":3951.07,
  },
  "C8": {
    "hz":4186.01,
  },
  " C^8/Db8 ": {
    "hz":4434.92,
  },
  "D8": {
    "hz":4698.63,
  },
  " D^8/Eb8 ": {
    "hz":4978.03,
  },
  "E8": {
    "hz":5274.04,
  },
  "F8": {
    "hz":5587.65,
  },
  " F^8/Gb8 ": {
    "hz":5919.91,
  },
  "G8": {
    "hz":6271.93,
  },
  " G^8/Ab8 ": {
    "hz":6644.88,
  },
  "A8": {
    "hz":7040,
  },
  " A^8/Bb8 ": {
    "hz":7458.62,
  },
  "B8": {
    "hz":7902.13,
  }
};

function getFrecuenciaNotas(argument) {
	console.log("argument : " + argument);
	return frecuenciaNotas[argument]["hz"];
	// return frecuenciaNotas[cantus[i]]["hz"]);
}





// console.log("abcTenor : " + abcTenor); 
















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