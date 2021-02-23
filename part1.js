(function () {
	const resources = "http://students.engr.scu.edu/~adiaztos/resources/";
	
	// Sample 1
	// Create an XMLHttpRequest object
	var engrRequest = new XMLHttpRequest,
	method = "GET",
	url = resources+"sample1.php";

	// Handle succesful responses
	engrRequest.open(method, url, true);

	engrRequest.onreadystatechange = function () {
		// In local files, status is 0 upon success in Mozilla Firefox
		if(engrRequest.readyState === XMLHttpRequest.DONE) {
		  var status = engrRequest.status;
		  if (status === 0 || (status >= 200 && status < 400)) {
			// The request has been completed successfully
			const response = (this.responseText);
			console.log(response);
			document.getElementById("sample1").innerHTML = response;
		  } else {
			console.log("There was an error with your request, could not obtain php file.")
		  }
		}
	  };

	// Get sample1.php
	engrRequest.send();	

	// Sample 2
	// Create an XMLHttpRequest object
	var engrRequestTwo = new XMLHttpRequest,
	methodTwo = "GET",
	urlTwo = resources+"sample2.php";

	// Handle succesful responses
	engrRequestTwo.open(methodTwo, urlTwo, true);

	engrRequestTwo.onreadystatechange = function () {
		// In local files, status is 0 upon success in Mozilla Firefox
		if(engrRequestTwo.readyState === XMLHttpRequest.DONE) {
		  var status = engrRequestTwo.status;
		  if (status === 0 || (status >= 200 && status < 400)) {
			// The request has been completed successfully
			const response = (this.responseText);
			console.log(response);
			document.getElementById("sample2").innerHTML = response;
		  } else {
			console.log("There was an error with your request, could not obtain php file.")
		  }
		}
	  };

	// Get sample2.php
	engrRequestTwo.send();	

	// Sample 3
	// Create an XMLHttpRequest object
	var engrRequestThree = new XMLHttpRequest,
	methodThree = "GET",
	urlThree = resources+"sample3.php";

	// Handle succesful responses
	engrRequestThree.open(methodThree, urlThree, true);

	engrRequestThree.onreadystatechange = function () {
		// In local files, status is 0 upon success in Mozilla Firefox
		if(engrRequestThree.readyState === XMLHttpRequest.DONE) {
		  var status = engrRequestThree.status;
		  if (status === 0 || (status >= 200 && status < 400)) {
			// The request has been completed successfully
			const response = JSON.parse(this.responseText);

			// Sample 3 div
			var sample3Div = document.getElementById("sample3");

			// Create list
			var unList = document.createElement("UL");

			// Iterate through object within object
			var newList;
			for (const friend in response) {
				newList = response[friend];
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
		  } else {
			console.log("There was an error with your request, could not obtain php file.")
		  }
		}
	  };

	// Get sample3.php
	engrRequestThree.send();	

})();