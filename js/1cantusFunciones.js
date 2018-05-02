function mostrarGradosCantus(i){
    // for (var i = 0; i < cantus.length; i++) {
    // 	console.log("getIndexOf(cantus[i] -cantus[0]) : " + (getIndexOf(cantus[i]) 
    // 		- getIndexOf(cantus[0])));
    // }

    var grado = (getIndexOf(cantus[i]) - getIndexOf(cantus[0]));
    switch (grado) {
    	case 0:
    		return "I";
    		break;
    	case 1:
    		return "II";
    		break;
    	case 2:
    		return "III";
    		break;
    	case 3:
    		return "IV";
    		break;
    	case 4:
    		return "V";
    		break;
    	case -3:
    		return "V";
    		break;
    	case 5:
    		return "VI";
    		break;
    	case -2:
    		return "VI";
    		break;
    	case 6:
    		return "VII";
    		break;
    	case -1:
    		return "VII";
    		break;
    		
    }
}