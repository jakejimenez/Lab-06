(function () {
	const template = document.getElementById("template");
	const resources = "http://students.engr.scu.edu/~adiaztos/resources/";

	var responseData;

	// remove template from the page, since it is only a template
	const parent = template.parentNode;
	parent.removeChild(template);

	// Create an XMLHttpRequest object
	var engrRequest = new XMLHttpRequest,
		method = "GET",
		url = resources + "contacts.php";

	// Set onreadystatechange
	engrRequest.onreadystatechange = function () {
		// In local files, status is 0 upon success in Mozilla Firefox
		if (engrRequest.readyState === XMLHttpRequest.DONE) {
			var status = engrRequest.status;
			if (status === 0 || (status >= 200 && status < 400)) {
				// The request has been completed successfully
				responseData = JSON.parse(this.responseText);

				// Log parsed response data to console
				console.log(responseData);

				// Execute function to populate contacts
				populateContacts(responseData)

			} else {
				console.log("There was an error with your request, could not obtain php file.")
			}
		}
	};

	// Open and send requests
	engrRequest.open(method, url, true);
	engrRequest.send();

	// This function takes the list of contacts and clones a new element from the template with the value of each contact
	function populateContacts(contacts) {
		const node = template.cloneNode(true);
		
		for (var i = 0; i < contacts.length; i++) {
			var newNode = node;
			newNode.childNodes[1].childNodes[3].nodeValue = contacts[i].id
		}
	}

	// submits a request with the search query for the filtered list of contacts
	function search() {
		// clear the current contacts list
		while (parent.lastChild)
			parent.removeChild(parent.lastChild);

	}

	// assign the search function as the click handler for search button

})();