(function () {
	var resources = "http://students.engr.scu.edu/~adiaztos/resources/";

	// Load sample1.php
	$("#sample1").load(resources+"sample1.php", function(responseTxt, statusTxt, xhr) {
		if (statusTxt == 'success') {
			console.log("Successfully loaded external content [1/3]");
		}

		if (statusTxt == 'error') {
			console.log("Error: " + xhr.status + ": " + xhr.statusText);
		}

		$("#sample1").append(JSON.parse(responseTxt));
	})

	// Load sample2.php
	$("#sample2").load(resources+"sample2.php", function(responseTxt, statusTxt, xhr) {
		if (statusTxt == 'success') {
			console.log("Successfully loaded external content [2/3]");
		}

		if (statusTxt == 'error') {
			console.log("Error: " + xhr.status + ": " + xhr.statusText);
		}

		$("#sample2").append(JSON.parse(responseTxt));
	})

	// Get sample3.php
	$.get(resources+"sample3.php", function(responseTxt, statusTxt, xhr) {
		if (statusTxt == 'success') {
			console.log("Successfully loaded external content [3/3]");

					  // The request has been completed successfully
					  const response = responseTxt;

					  // Sample 3 div
					  var sample3Div = document.getElementById("sample3");
			
					  // Create list
					  var unList = document.createElement("UL");
			
					  // Iterate through object within object
					  var newList = JSON.parse(responseTxt);
					  for (const friend in newList) {
						  newList = newList[friend];
					  }
					  
					  // Log new list
					  console.log(newList);
			
					  for (var i = 0; i < newList.length; i++) {
						  // Log name to console
						  console.log(newList[i].name)
			
						  // List element create 
						  var node = document.createElement("LI");
			
						  node.appendChild(document.createTextNode(newList[i].name+"\n"));
			
						  unList.appendChild(node); 
					  }
					  
					  sample3Div.appendChild(unList);
		}

		if (statusTxt == 'error') {
			alert("Error: " + xhr.status + ": " + xhr.statusText);
		}
		
	});


})();