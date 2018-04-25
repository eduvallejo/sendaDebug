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
function getIndexBetween(argument1, argument2) {
  // console.log("notasMusicales.indexOf(i-1)-(i)(" + argument2 + ") - notasMusicales.indexOf(" + argument1 + ") : "  + (notasMusicales.indexOf(argument2) - notasMusicales.indexOf(argument1)));
  return notasMusicales.indexOf(argument2) - notasMusicales.indexOf(argument1);

}


//get intervalo ()
function getInterval(argument1, argument2) {
  return ((((notasMusicales.indexOf(soprano[i + 1])+1)) - ((notasMusicales.indexOf(cantus[i + 1]))+1) + 1));
}
