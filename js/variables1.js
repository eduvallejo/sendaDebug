var notasBajoDef = ["C,", "E" ];
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
	"C,,": 1 ,"^C,,": 1.5,"_D,,": 1.5, "D,,": 2, "^D,,": 2.5, "_E,,": 2.5 ,"E,,": 3 ,"_F,,": 3 ,"^E,,": 4 , "F,," : 4 ,"^F,," : 4.5 ,"_G,," : 4.5 ,"G,,": 5 ,"^G,,": 5.5 ,"_A,,": 5.5 ,"A,,": 6 ,"^A,,": 6.5 ,"_B,,": 6.5 ,"B,,": 7 ,
	"C,": 8 ,"^C,": 8.5,"_D,": 8.5, "D,": 9, "^D,": 9.5, "_E,": 9.5 ,"E,": 10 ,"_F,": 10 ,"^E,": 11 , "F," : 11 ,"^F," : 11.5 ,"_G," : 11.5 ,"G,": 12 ,"^G,": 12.5 ,"_A,": 12.5 ,"A,": 13 ,"^A,": 13.5 ,"_B,": 13.5 ,"B,": 14 ,
	"C": 15 ,"^C": 15.5,"_D": 15.5, "D": 16, "^D": 16.5, "_E": 16.5 ,"E": 17 ,"_F": 17 ,"^E": 18 , "F," : 18 ,"^F," : 18.5 ,"_G," : 18.5 ,"G": 19 ,"^G": 19.5 ,"_A": 19.5 ,"A": 20 ,"^A": 20.5 ,"_B": 20.5 ,"B": 21 ,
	"c": 22 ,"^c": 22.5,"_d": 22.5, "d": 23, "^d": 23.5, "_e": 23.5 ,"e": 24 ,"_f": 24 ,"^e": 25 , "f," : 25 ,"^f," : 25.5 ,"_g," : 25.5 ,"g": 26 ,"^g": 26.5 ,"_a": 26.5 ,"a": 27 ,"^a": 27.5 ,"_b": 27.5 ,"B": 28 ,
};

var posIntervaloSoprano = {
	"C": 15 ,"^C": 15.5,"_D": 15.5,"D": 16, "^D": 16.5, "_E": 16.5 ,"E": 17 ,"_F": 17 ,"^E": 18 , "F," : 18 ,"^F," : 18.5 ,"_G," : 18.5 ,"G": 19 ,"^G": 19.5 ,"_A": 19.5 ,"A": 20 ,"^A": 20.5 ,"_B": 20.5 ,"B": 21 ,
	"c": 22 ,"^c": 22.5,"_d": 22.5, "d": 23, "^d": 23.5, "_e": 23.5 ,"e": 24 ,"_f": 24 ,"^e": 25 , "f," : 25 ,"^f," : 25.5 ,"_g," : 25.5 ,"g": 26 ,"^g": 26.5 ,"_a": 26.5 ,"a": 27 ,"^a": 27.5 ,"_b": 27.5 ,"B": 28 ,
};

// console.log("indiceNota['G,'] : " + indiceNota['G,']);
	// console.log("indiceNota['E,'] : " + indiceNota['E,']);
	console.log("notasBajoDef : " + notasBajoDef[0]);
	console.log("notasSopranoDef : " + notasSopranoDef[0]);


// console.log("10%8 : " + (9%7));
console.log("10%7 : " + (8%8));
console.log("10%7 : " + (9%7));
// tesituras
// 	soprano: (D - a)
// 	contralto: (G, - d)
// 	tenor: (D, - A)
// 	bajo: (F,, - C)

