// ajax.js
var nombreCancion;
function ajax(fileName) {
	nombreCancion = fileName;
	console.log("fileName : " + fileName);
	//resetear
	noteLetterSoprano["notas"] = [];
	noteLetterSoprano["tiempos"] = [];
	abcSoprano = false;
	// frecuencias["soprano"] = [];
	clearInterval(setIntervalNotasSoprano);

	noteLetterAlto["notas"] = [];
	noteLetterAlto["tiempos"] = [];
	abcAlto = false;
	// frecuencias["alto"] = [];
	clearInterval(setIntervalNotasAlto);
	
	noteLetterTenor["notas"] = [];
	noteLetterTenor["tiempos"] = [];
	abcTenor = false;
	// frecuencias["tenor"] = [];
	clearInterval(setIntervalNotasTenor);

	noteLetterBajo["notas"] = [];
	noteLetterBajo["tiempos"] = [];
	abcBajo = false;
	// frecuencias["bajo"] = [];
	clearInterval(setIntervalNotasBajo);

	

	var url = "js/ajax/echo.php?name=" + encodeURIComponent(fileName);
	// console.log("AJAXfileNameencoded : " + encodeURIComponent(fileName));
	console.clear();
	//ajax
	var http = new XMLHttpRequest();
  	document.getElementById("loading").innerHTML = '<img src="js/ajax/spinner.gif" />'; // Set here the image before sending request
	http.open("GET", url, true);
	http.send();

	http.onreadystatechange = function() {//Call a function when the state changes.
	// console.log("url : " + url);
	    if(http.readyState == 4 && http.status == 200) {
	        // console.log("numero de patrones: " + http.response.length);
	        // console.log("http.response : " + http.response);
	        response = JSON.parse(http.response);
	        //songResponse es lo q se muestra en renderAbc
	        // songResponse = response;

	        // abcTenor = response;
	        var split = response.split("\n");
	        key = split[5];
	        key = key.replace("K:", "");
	        // console.log("key : " + key);
			document.getElementById("key").innerHTML = key;
			
			//soprano
	        if (response.indexOf("V:1") != -1) {//V:2
	        	numeroVoces = 1;
		        console.log("numeroVoces : " + numeroVoces);
		        abcSoprano = split[6] +"\n" + split[7]  ;
		        abcSoprano = abcSoprano.replace("!", "");
	        }
	        // console.log("abcSoprano : " + abcSoprano);
			//alto
	        console.log("response.indexOf(V:2 : " + response.indexOf("V:2"));
	        if (response.indexOf("V:2") != -1) {//V:2
	        	numeroVoces = 2;
		        console.log("numeroVoces : " + numeroVoces);
		        abcAlto = split[8] +"\n" + split[9]  ;
		        abcAlto = abcAlto.replace("!", "");
			}			

	        // console.log("split[10] : " + split[10]);
	        // if (split[10] != undefined) {
	        console.log("response.indexOf(V:3 : " + response.indexOf("V:3"));
	        if (response.indexOf("V:3") != -1) {//V:3
		        //Tenor
		        numeroVoces = 3;
		        console.log("numeroVoces : " + numeroVoces);
		        abcTenor = split[0] + "\n" + split[1] + "\n" + split[2] + "\n" + split[3] + "\n" + split[4] + "\n" + split[5] +"\n" + split[10] + "\n" + split[11]  ;
		        abcTenor = abcTenor.replace("!", "");
	        }
	        console.log("response.indexOf(V:4) : " + response.indexOf("V:4"));
	        // console.log("split[12] : " + split[12]);
	        if (response.indexOf("V:4") != -1) {//V:4
		       //  //bajo
		        numeroVoces = 4;
		        console.log("numeroVoces : " + numeroVoces);
		        abcBajo = split[12] +"\n" + split[13]  ;
		        abcBajo = abcBajo.replace("!", "");
		        // console.log("abcBajo : " + abcBajo);
	        }
	        // console.log("abcAlto : " + abcAlto);
	        //
	     
		    appendSong(response);
      		document.getElementById("loading").innerHTML = ''; // Hide the image after the response from the server
		 	
      		// document.getElementById("loading").innerHTML = ''; // Hide the image after the response from the server
      		// document.getElementById("preId").innerHTML += response; // Hide the image after the response from the server
	    	}
	// console.log("ajax: " + fileName);
	}     

}
