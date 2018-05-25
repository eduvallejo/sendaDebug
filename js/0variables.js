
var divisionPrimeraEspecie = 1;
var divisionSegundaEspecie = 2;
var divisionTerceraEspecie = 4;
var divisionCuartaEspecie = 2;
var divisionEspecie = divisionPrimeraEspecie;
var divisionEspecie = divisionSegundaEspecie;
var divisionEspecie = divisionTerceraEspecie;
// var divisionEspecie = divisionCuartaEspecie;

// var numeroVoces = 3
var numeroVoces = 3;
// var numeroVoces = 4;
var objeto = {} ;
iniciarObjeto();
function iniciarObjeto(argument){
	objeto = {"soprano":{}, "alto":{}, "tenor":{}, "bajo":{}};
	for (var i in objeto) {
		// console.log("objeto["+i+"] : " + objeto[i]);
		objeto[i] = {
			"notas" : {}, 
			"tiempos" : {}, 
			"intervalo" : {}, 
			"frecuencia" : {}, 
			"oscillator" : {},
			"abc" : false,
				};
		for (var j in objeto[i]) {
			objeto[i][j] = [];
			// console.log("objeto["+i+"]["+j+"] : " + objeto[i][j]);
		}
	}
}


var grados = ["soprano", "alto","tenor","bajo"];
grados["soprano"] = [];
grados["alto"] = [];
grados["tenor"] = [];
grados["bajo"] = [];



var notasMusicales= ["C,,","D,,","E,,","F,,","G,,","A,,","B,,", 
	"C,","D,","E,","F,","G,","A,","B,",
		"C","D","E","F","G","A","B",
			"c","d","e","f","g","a","b",
				"c'","d'","e'","f'","g'","a'","b'" ];
// var notasMusicales= {"A": {"position":1,},"B": {"position":2,},"C": {"position":3,},"D": {"position":4,},"E": {"position":5,},"F": {"position":6,},"G": {"position":7,},};
var notaClimax;
var longitudCantus = 6;//15 es ideal ya q el click final es como si 16
var blancas = 2; 

var cantus = [];
for (var i = 0; i < longitudCantus; i++) {
	cantus[i] = "0";
}

// var key = "Cmaj";
// var key = "Gmaj";

//cantidad de tonos de cada intervalo
var unisono = 0; var segunda = 1;var tercera = 2;var cuarta = 3;var cuartaAug = 3.5;
var quinta = 4;var sexta = 5;var septima = 6;var octava = 7;
var novena = 8;var decima = 9;var onceava = 10;var doceava = 11;
var treceava = 12;var quinceava = 13;
//intervalos desdecendientes
var segundaAbajo = -1;var terceraAbajo = -2;var cuartaAbajo = -3;var quintaAbajo = -4;
var sextaAbajo = -5;var septimaAbajo = -6;var octavaAbajo = -7; var novenaAbajo = -8; var decimaAbajo = -9; 
var intervMelodMax = sexta;
var restoreInterval = cuarta;

// var objeto["tenor"]["abc"] ;
// objeto["tenor"]["abc"] = "X:1\nL:1/2\nK:Cmaj\nV:1\nCDFEDC"

var buclesAtrasCuelgue = 2;

// var msPerBeat = 1000;
var msPerBeat = 500;
var msPerBeat = 1000;
var numeroTiemposCompas = 4;
//oscillator, 0 siginifca q el obetivo es el silencio
var setTarget = 0.1;

var intervaloBordadura = segundaAbajo;

var arrayDeIntervalos = [];


//bug relacionado con las ligaduras
//realmente no uso esta variable ya q la frecuencia la saco del getFrequency
var frecuenciaNota = []; //para evitar el bug de decodeajax 594 q sale frecuencaNota not defined

function randomFunction(argument) {
  return argument[Math.floor((Math.random() 
          * argument.length))];
}

