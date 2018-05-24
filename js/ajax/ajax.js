// ajax.js
var nombreCancion;
function ajax(fileName) {
	nombreCancion = fileName;
	console.log("fileName : " + fileName);
	//resetear
	// noteLetterSoprano["notas"] = [];
	// noteLetterSoprano["tiempos"] = [];
	// clearInterval(setIntervalNotasSoprano);

	noteLetterAlto["notas"] = [];
	noteLetterAlto["tiempos"] = [];
	clearInterval(setIntervalNotasAlto);
	
	noteLetterTenor["notas"] = [];
	noteLetterTenor["tiempos"] = [];
	clearInterval(setIntervalNotasTenor);

	noteLetterBajo["notas"] = [];
	noteLetterBajo["tiempos"] = [];
	clearInterval(setIntervalNotasBajo);


	var url = "js/ajax/echo.php?name=" + encodeURIComponent(fileName);
	// console.log("AJAXfileNameencoded : " + encodeURIComponent(fileName));

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
	        console.log("response.indexOf(V:4) : " + response.indexOf("V:4"));
	        // songResponse = response;

	        abcTenor = response;
	        var split = response.split("\n");
	        key = split[5];
	        key = key.replace("K:", "");
	        // console.log("key : " + key);
			document.getElementById("key").innerHTML = key;
			
			//soprano
	        abcSoprano = split[6] +"\n" + split[7]  ;
	        abcSoprano = abcSoprano.replace("!", "");
	        console.log("abcSoprano : " + abcSoprano);
			//alto
	        abcAlto = split[8] +"\n" + split[9]  ;
	        abcAlto = abcAlto.replace("!", "");


	        if (split[10] != undefined) {
		        //Tenor
		        abcTenor = split[0] + "\n" + split[1] + "\n" + split[2] + "\n" + split[3] + "\n" + split[4] + "\n" + split[5] +"\n" + split[10] + "\n" + split[11]  ;
		        abcTenor = abcTenor.replace("!", "");
		        // abcTenor = split[12] +"\n" + split[13]  ;
		        // abcTenor = abcTenor.replace("!", "");
	        }
	        console.log("split[10] : " + split[10]);
	        // if (split[10] == "V") {//V:4
		       //  //bajo
		       //  numeroVoces = 4;
		       //  abcBajo = split[12] +"\n" + split[13]  ;
		       //  abcBajo = abcBajo.replace("!", "");
	        // }
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
