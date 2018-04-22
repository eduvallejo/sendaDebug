var notasMusicales= ["C,,","D,,","E,,","F,,","G,,","A,,","B,,", 
	"C,","D,","E,","F,","G,","A,","B,",
		"C","D","E","F","G","A","B",
			"c","d","e","f","g","a","b",
				"c'","d'","e'","f'","g'","a'","b'" ];
// var notasMusicales= {"A": {"position":1,},"B": {"position":2,},"C": {"position":3,},"D": {"position":4,},"E": {"position":5,},"F": {"position":6,},"G": {"position":7,},};
var notaClimax;
var longitudCantus = 6;//15 es ideal ya q el click final es como si 16
var cantus = [];
for (var i = 0; i < longitudCantus; i++) {
	cantus[i] = "0";
}

// prohibir mas de 4 leaps en un cantus
var leapsTotal= 0;
// prohibir 3 o mas LArge LEAPS(>=5th )
var largeLeapsTotal = 0;


//cantidad de tonos de cada intervalo
var segunda = 1;var tercera = 2;var cuarta = 3;var cuartaAug = 3.5;
var quinta = 4;var sexta = 5;var septima = 6;var octava = 7;
var novena = 8;var decima = 9;var onceava = 10;var doceava = 11;
var treceava = 12;var quinceava = 13;
//intervalos desdecendientes
var segundaAbajo = -1;var terceraAbajo = -2;var cuartaAbajo = -3;var quintaAbajo = -4;
var sextaAbajo = -5;var septimaAbajo = -6;var octavaAbajo = -7;


var escalaDo ;

function randomFunction(argument) {
  // console.log("argument : " + argument);
  return argument[Math.floor((Math.random() 
          * argument.length))];
}