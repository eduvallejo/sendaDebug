function getClimaxPosition(argument) {
	console.log("cantus : " + cantus);
	var max = 0;//posicion 0
	console.log("notasMusicales.indexOf(cantus[0] : " + notasMusicales.indexOf(max));
	for (var i = 0; i < cantus.length; i++) {
		if(notasMusicales.indexOf(cantus[i]) 
			> notasMusicales.indexOf(cantus[posicionClimax]) ){
			posicionClimax = i;
		// console.log("posicionClimax : " + posicionClimax);
		// console.log("notasMusicales.indexOf(cantus[" + i + "] : " + notasMusicales.indexOf(cantus[i]));
		// console.log("notasMusicales.indexOf(cantus[" + posicionClimax + "] : " + notasMusicales.indexOf(cantus[posicionClimax]));
		} 
	}
}function getIndexOf(argument) {
	return notasMusicales.indexOf(argument);
}

//obtener intervalo de dos notas
function getIndexBetweenMismaVoz(voz, iAnt, iPost) {
  // console.log("IGUALES Index("+iAnt+ ":)(" + voz[iPost] + ") - Index("+iPost+":)(" + voz[iAnt] + ") : "  
  	// + (notasMusicales.indexOf(voz[iPost]) - notasMusicales.indexOf(voz[iAnt])));
  return (notasMusicales.indexOf(voz[iPost]) - notasMusicales.indexOf(voz[iAnt]));

}

//obtener intervalo de dos notas
function getIndexBetween(argumentPre, argumentPost, iPosAnt, iPosPost) {
  // console.log("IGUALES Index("+iPosAnt+ ":)(" + argumentPost + ") - Index("+iPosPost+":)(" + argumentPre + ") : "  
  	// + (notasMusicales.indexOf(argumentPost) - notasMusicales.indexOf(argumentPre)));
  return (notasMusicales.indexOf(argumentPost) - notasMusicales.indexOf(argumentPre));

}

//obtener intervalo de dos notas
function getIntervaloArmonico(argumentPre, argumentPost, iPosAnt, iPosPost) {
  // console.log("IGUALES Index("+iPosAnt+ ":)(" + argumentPost + ") - Index("+iPosPost+":)(" + argumentPre + ") : "  
    // + (notasMusicales.indexOf(argumentPost) - notasMusicales.indexOf(argumentPre)));
  return (notasMusicales.indexOf(argumentPost) - notasMusicales.indexOf(argumentPre));

}

//cambiar nota en funcion de intervalo
function cambiarNotaConIntervalo(nota, intervalo){
    // console.log("notaAntes : " + nota);
    nota = notasMusicales[getIndexOf(nota) + intervalo];   
    return nota;
    // console.log("notaAntes : " + nota);
}


//get intervalo ()
// function getInterval(argument1, argument2) {
//   return ((((notasMusicales.indexOf(soprano[i + 1])+1)) - ((notasMusicales.indexOf(cantus[i + 1]))+1) + 1));
// }

function mostrarNombreIntervalo(argument){
    // console.log("argument : " + argument);
    switch (argument) {
    	case 0:
    	return 	"1ª";
    		break;
    	case 1:
    	return 	"2ª";
    		break;
    	case 2:
    	return 	"3ª";
    		break;
    	case 3:
    	return 	"4ª";
    		break;
    	case 4:
    	return 	"5ª";
    		break;
    	case 5:
    	return 	"6ª";
    		break;
    	case 6:
    	return 	"7ª";
    		break;
    	case 7:
    	return 	"8ª";
    		break;
        case 8:
        return 	"9ª";
        	break;
        case 9:
        	return "10ª";
        	break;
        case 10:
        	return "11ª";
        	break;
        case 11:
        	return "12ª";
        	break;
        //cruze de voces
        case -1:
        return  "7ª";
            break;
    	default:
    		// to do
    }
}