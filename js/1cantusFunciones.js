function mostrarGradosCantus(iPos){
    // for (var i = 0; i < cantus.length; i++) {
    // 	console.log("getIndexOf(cantus[i] -cantus[0]) : " + (getIndexOf(cantus[i]) 
    // 		- getIndexOf(cantus[0])));
    // }

    var grado = (getIndexOf(cantus[iPos]) - getIndexOf(cantus[0]));
    // console.log("grado : " + grado);
    switch (grado) {
    	case unisono:
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
        case 7:
    		return "VIII";
    		break;
        case 8:
            return "II";
        break;
    	case 9:
            return "III";
        break;
        case onceava:
            return "IV";
        break;
        case doceava:
    		return "V";
    	break;
        // default:
        //     return "def: " + grado
        // break;
    		
    }
}

function mostrarGradosVoz(voz, iPos){
    // for (var i = 0; i < cantus.length; i++) {
    //    //console.log.log("getIndexOf(cantus[i] -cantus[0]) : " + (getIndexOf(cantus[i]) 
    //      - getIndexOf(cantus[0])));
    // }

    var grado = (getIndexOf(voz[iPos]) - getIndexOf(cantus[0]));
    // console.log("grado : " + grado);
    switch (grado) {
        case unisono:
            return "1";
            break;
        case segunda:
            return "2";
            break;
        case 2:
            return "3";
            break;
        case 3:
            return "4";
            break;
        case 4:
            return "5";
            break;
        case -3:
            return "5";
            break;
        case 5:
            return "6";
            break;
        case -2:
            return "6";
            break;
        case 6:
            return "7";
            break;
        case -1:
            return "7";
            break;
        case 7:
            return "8";
            break;
        case 8:
            return "9";
        break;
        case 9:
            return "10";
        break;
        case onceava:
            return "11";
        break;
        case doceava:
            return "12";
        break;
        case treceava:
            return "13";
        break;
        // default:
        //     return "def: " + grado
        // break;
            
    }
}