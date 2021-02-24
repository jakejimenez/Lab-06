(function () {

	// Add the click handler for the button
	$("button").click(function() { 
		var currentText = $("#myInput").val();
		$("#allUpper").text(currentText.toUpperCase());
		$("#allLower").text(currentText.toLowerCase());
		$("#redText").text(currentText).css("color","red");
		$("#flashyText").text(currentText).addClass("flashy");
	})

})();