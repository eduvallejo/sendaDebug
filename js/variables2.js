var notasBajoDef = ["C,", "F," ];
var notasSopranoDef = ["G"];//las notas Defes elegidas detro de las posibles 
//la primera nota la ponemos nosotros para facilitar las cosas
// var notasMusicales= ["A","B","C","D","E","F","G"];
var notasMusicales = ["C,,","D,,","E,,","F,,","G,,","A,,","B,,"
	,"C,","D,","E,","F,","G,","A,","B,"
	,"C","D","E","F","G", "A", "B", 
	"c", "d", "e", "f", "g", "a", "b"];
var notasSopranoAvailable=[];//recordar los dobles arrays de conway
for (var i = 0; i < notasBajoDef.length; i++) {
	notasSopranoAvailable[i] = [];
}

var posIntervalo = {
	"C,,": 0 ,"^C,,": 0.5,"_D,,": 0.5, "D,,": 1, "^D,,": 1.5, "_E,,": 1.5 ,"E,,": 2 ,"_F,,": 2 ,"^E,,": 3 , "F,," : 3 ,"^F,," : 3.5 ,"_G,," : 3.5 ,"G,,": 4 ,"^G,,": 4.5 ,"_A,,": 4.5 ,"A,,": 5 ,"^A,,": 5.5 ,"_B,,": 5.5 ,"B,,": 6 ,	
	"C,": 7 ,"^C,": 7.5,"_D,": 7.5, "D,": 8, "^D,": 8.5, "_E,": 8.5 ,"E,": 9 ,"_F,": 9 ,"^E,": 10 , "F," : 10 ,"^F," : 10.5 ,"_G," : 10.5 ,"G,": 11 ,"^G,": 11.5 ,"_A,": 11.5 ,"A,": 12 ,"^A,": 12.5 ,"_B,": 12.5 ,"B,": 13 ,
};

var posIntervaloSoprano = {
	"C": 14 ,"^C": 14.5,"_D": 14.5,"D": 15, "^D": 15.5, "_E": 15.5 ,"E": 16 ,"_F": 16 ,"^E": 17 , "F," : 17 ,"^F," : 17.5 ,"_G," : 17.5 ,"G": 18 ,"^G": 18.5 ,"_A": 18.5 ,"A": 19 ,"^A": 19.5 ,"_B": 19.5 ,"B": 20 ,
	"c": 21 ,"^c": 21.5,"_d": 21.5, "d": 22, "^d": 22.5, "_e": 22.5 ,"e": 23 ,"_f": 23 ,"^e": 24 , "f," : 24 ,"^f," : 24.5 ,"_g," : 24.5 ,"g": 25 ,"^g": 25.5 ,"_a": 25.5 ,"a": 26 ,"^a": 26.5 ,"_b": 26.5 ,"B": 27 ,
};

// console.log("indiceNota['G,'] : " + indiceNota['G,']);
	// console.log("indiceNota['E,'] : " + indiceNota['E,']);
	console.log("notasBajoDef : " + notasBajoDef[0]);
	console.log("notasSopranoDef : " + notasSopranoDef[0]);


// console.log("10%8 : " + (9%7));
console.log("14%8 : " + (14%7));
console.log("21%8 : " + (21%7));
// tesituras
// 	soprano: (D - a)
// 	contralto: (G, - d)
// 	tenor: (D, - A)
// 	bajo: (F,, - C)

