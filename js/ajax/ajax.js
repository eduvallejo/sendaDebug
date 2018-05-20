// ajax.js
function ajax(fileName) {
	//resetear
	noteLetterAlto["notas"] = [];
	noteLetterAlto["tiempos"] = [];
	noteLetterTenor["notas"] = [];
	noteLetterTenor["tiempos"] = [];
	noteLetterBajo["notas"] = [];
	noteLetterBajo["tiempos"] = [];

	// console.clear();
	// console.log("AJAXfileName : " + fileName);
	// // document.getElementById("preId").innerHTML = '';		
	// try {//CON ESTE TRY CATCH EL PROGRAMA NO SE VA A LA MIERDA
 //    // Fix up for prefixing
	// 	audioSong.pause();
	//   }
	//   catch(e) {
	//     // console.log('no audioSong playing still');
	//   }

	// //Sin melodia
	// audioSong = new Audio('ogg/' + fileName.replace('.abc', '.ogg')); //oggs ssin melodia
	// // console.log("audioSong : " + audioSong);
	// //CON MELODIAS
	// // audioSong = new Audio('melodiasOgg/' + fileName.replace('.abc', '.ogg')); //ogg con melodia
	
	// // console.log("audioDuration : " + (audioSong.duration));
	// for (properties in audioSong){
	// 	// console.log("properties : " + properties.value);
	// }
	// // audioSong = new Audio('ogg/arabesque120Compases1-38.ogg'); //ogg
	


	
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
	        songResponse = response;
	        abcTenor = response;
	        var split = response.split("\n");
	        key = split[4];
	        key = key.replace("K:", "");
			document.getElementById("key").innerHTML = key;

			//alto
	        abcAlto = split[6] +"\n" + split[7]  ;
	        abcAlto = abcAlto.replace("!", "");

	        //Tenor
	        abcTenor = split[0] + "\n" + split[1] + "\n" + split[2] + "\n" + split[3] + "\n" + split[4] + "\n" + split[5] +"\n" + split[8] + "\n" + split[9]  ;
	        // abcAlto = split[5] +"\n" + split[6]  ;
	        abcTenor = abcTenor.replace("!", "");

	        if (split[10] != undefined) {
	        //bajo
		        numeroVoces = 3;
		        abcBajo = split[10] +"\n" + split[11]  ;
		        abcBajo = abcBajo.replace("!", "");
	        	console.log("split[10] : " + split[10]);
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
