
var notasMusicales= ["C,,","D,,","E,,","F,,","G,,","A,,","B,,", 
	"C,","D,","E,","F,","G,","A,","B,",
		"C","D","E","F","G","A","B",
			"c","d","e","f","g","a","b",
				"c'","d'","e'","f'","g'","a'","b'" ];
// var notasMusicales= {"A": {"position":1,},"B": {"position":2,},"C": {"position":3,},"D": {"position":4,},"E": {"position":5,},"F": {"position":6,},"G": {"position":7,},};
var notaClimax;
var longitudCantus = 24;//15 es ideal ya q el click final es como si 16
var cantus = [];
for (var i = 0; i < longitudCantus; i++) {
	cantus[i] = "0";
}
//la primera, penultima y ultima nota las predefinimos
// cantus[0] = "C,";
// cantus[longitudCantus - 1] = "C,";
// cantus[longitudCantus - 2] = "D,";
cantus[0] = "C";
cantus[longitudCantus - 1] = "C";
cantus[longitudCantus - 2] = "D";

//Reglas
// prohibir mas de 4 leaps en un cantus
var leapsTotal= 0;
// prohibir 3 o mas LArge LEAPS(>=5th )
var largeLeapsTotal = 0;
// 	y poner despues de large leaps q haga direccion reversa mediante steps or skips
// despues de intervalo de 4th puede ir como mucho una 3a en el mismo sentido(prohibir saltos > 4th en mismo sentido despues de 4th)
// pero mejor cambiar direccion desdepues de 4th
// prohibir dos saltos seguidos en misma direccion
// prohibir tres saltos seguidos, da igual direccion 


// //la primera, penultima y ultima nota las predefinimos
// cantus[0] = "C,";
// cantus[longitudCantus - 1] = "C,";
// cantus[longitudCantus - 2] = "D,";

//cantidad de tonos de cada intervalo
var segunda = 1;var tercera = 2;var cuarta = 3;var cuartaAug = 3.5;
var quinta = 4;var sexta = 5;var septima = 6;var octava = 7;
var novena = 8;var decima = 9;var onceava = 10;var doceava = 11;
var treceava = 12;var quinceava = 13;
//intervalos desdecendientes
var segundaAbajo = -1;var terceraAbajo = -2;var cuartaAbajo = -3;var quintaAbajo = -4;
var sextaAbajo = -5;var septimaAbajo = -6;var octavaAbajo = -7;

//repito los intervalos  quiero salgan mas amenudo , los stepwise
var intervMelodicPermitidos = [ segunda,segundaAbajo,tercera, tercera,tercera, terceraAbajo, cuarta];
var intervMelodicPermitidosBajar = [ segundaAbajo,segunda,terceraAbajo,terceraAbajo,tercera, quintaAbajo];
console.log("intervMelodicPermitidos : " + intervMelodicPermitidos);


var escalaDo ;



function randomFunction(argument) {
	// console.log("argument : " + argument);
	return argument[Math.floor((Math.random() 
					* argument.length))];
}

//obtener intervalo de dos notas
function getTonesBetween(argument1, argument2) {
  // console.log("notasMusicales.indexOf(" + argument2 + ") - notasMusicales.indexOf(" + argument1 + ") : "  + (notasMusicales.indexOf(argument2) - notasMusicales.indexOf(argument1)));
  return notasMusicales.indexOf(argument2) - notasMusicales.indexOf(argument1);

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
  if (((getTonesBetween(voz1actual, voz1anterior)) >= 1) && ((getTonesBetween(voz2actual, voz2anterior)) >= 1)) {
    console.log("movimientoDirectoAbajo : yes" );
    return true;
  }else if (((getTonesBetween(voz1actual, voz1anterior)) <= -1) && ((getTonesBetween(voz2actual, voz2anterior)) <= -1)) {
  //directo hacia arriba
    console.log("movimientoDirectoArriba : yes" );
    return true;
  }else {return false;}
}

//get intervalo ()
function getInterval(argument1, argument2) {
  return ((((notasMusicales.indexOf(soprano[i + 1])+1)) - ((notasMusicales.indexOf(cantus[i + 1]))+1) + 1));
}

//funciones de checkeo
function checkOctavasSeguidas(argument1, argument2) {
  if ((argument1 == 8 )&&( argument2 == 8)
    // &&(checkMovimientoDirecto(argument1,argument2)== true)== true
    ) {
    console.log("8as seguidas : " );
    return true;
  }
}
//funciones de checkeo
function checkQuintasSeguidas(argument1, argument2) {
  if((argument1 == 5 )&&( argument2 == 5)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    console.log("quintas seguidas : " );
    return true;
  }

}
//funciones de checkeo
function checkQuintasOctavasSeguidas(argument1, argument2) {
  if((argument1 == 5 )&&( argument2 == 8)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    console.log("quintasOCtavas seguidas : " );
    return true;
  }else if((argument1 == 8 )&&( argument2 == 5)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    console.log("OctavasQuintas seguidas : " );
    return true;
  }

}
//funciones de checkeo intervalos seguidos prohibidos
function checkIntervalsProhibidos(interval1, interval2, argument1, argument2) {
  if((argument1 == interval1 )&&( argument2 == interval2)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    console.log("intervalos seguidas : " + interval1 + "ª , " + interval2 + "ª");
    return true;
  }
}
//funciones de checkeo
function checkTercerasSeguidas(argument1, argument2) {
  if((argument1 == 3)&&( argument2 == 3)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    console.log("terceras seguidas : " );
    return true;
  }

}
//funciones de checkeo
function checkSextasSeguidas(argument1, argument2) {
  if((argument1 == 6)&&( argument2 == 6)
        // &&(checkMovimientoDirecto(argument1,argument2 == true
        ){
    console.log("sextas seguidas : " );
  }

}



//intervalos peremitidos

//esta es solo el header al q se se suma el cantus 
// var escalaDo = "X:1\nT:escala de Do\nC:\nL:1/2\nQ:1/4=150\nM:4/2\nK:Cmaj\nV:1 clef=treble\n"
// var escalaDo = "X:1\nT:escala de Do\nC:\nL:1/2\nQ:1/4=150\nM:4/2\nK:Cmaj\nV:1 clef=bass\n"
// console.log("escalaDo : " + escalaDo);

// var escalaDo = "X:1\nM: 4/4\nL: 1/8\nK: Emin\n|:D2|EB{c}BA B2 EB|\n";

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
    "hz":261.63,
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

