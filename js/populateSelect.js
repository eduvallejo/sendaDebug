// function populateSelect(argument) {
// 	// console.log("populateSelect");	
// 	// var valueSelect = document.getElementById("mySelect").value;
// 	// console.log("valueSelect: " + valueSelect);
// 	var test = "test";
// 	populateAjax(test);
	
// }

//ajax.js
//ajax.js
function populateAjax(fileName) {
	// var url = "js/ajax/echo.php?name=" + fileName;
	// 
	var url = "js/select/getNamesPatterns.php"; 
	// var url = "../select/getNamesPatterns.php?name=" + fileName; 

	//ajax
	var http = new XMLHttpRequest();
	http.open("GET", url, true);
	http.send();
	// console.log("http : " + http);
	http.onreadystatechange = function() {//Call a function when the state changes.
	    if(http.readyState == 4 && http.status == 200) {
	        // console.log("http.response: " + http.response);
			response = JSON.parse(http.response);
			// console.log("response : " + response);
			// console.log("numero de patterns disponibles : " + response.length);
			// console.log("response : " + response);
			for (var i = 0; i < response.length; i++) {
				var option = document.createElement("option");
				option.text = response[i];
				option.value = response[i];
				// option.onclick = console.log("response[i] :" + option.text);
			
			    var select = document.getElementById("mySelect");
			    select.appendChild(option);
			    // document.getElementById("mySelect").a
			    // console.log("response.name : " + response[i]);
		    } 
	    
	       
	    }else{
	      // console.log("http.readyState: " + http.readyState);
	      // console.log("http.status: " + http.status);
	      // console.log("http : " + http);
	      
	    }
	}    

}

function drawOption(argument) {
		oscillatorSoprano.stop(0);
		// clearInterval(setIntervalNotasSoprano);
		oscillatorAlto.stop(0);
		// clearInterval(setIntervalNotasAlto);
		if (numeroVoces == 3) {
			oscillatorTenor.stop(0);
			// clearInterval(setIntervalNotasTenor);
		}
		if (numeroVoces == 4) {
			oscillatorBajo.stop(0);
			// clearInterval(setIntervalNotasBajo);
		}

	var value = document.getElementById("mySelect").value;
	// song = value;
	ajax(value);
	// console.log("response : " + response);
    // document.getElementById("preId").innerHTML += response; // Hide the image after the response from the server
    // document.getElementById("preId").innerHTML += response; // Hide the image after the response from the server
	
}

