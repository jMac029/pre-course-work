// Cache orginal state of box element so that it can be reset
var originalAttributes = $('#box').attr('style');

// When the button1 button is clicked...
$("#button1").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the button2 is pressed...
$("#button2").on("click", function() {
	// Change box color to blue.
	$("#box").css("background-color", "blue")
})

// When the button3 is pressed...
$("#button3").on("click", function() {
	// Change fade of box.
	$("#box").animate({opacity: "0.50"})
})

// When the button4 is pressed...
$("#button4").on("click", function() {
	// Reset Box to orginal size and color.
	$("#box").attr('style',originalAttributes);
})

// When the button5 is clicked...
$("#button5").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})

// When the button6 is pressed...
$("#button6").on("click", function() {
	// Change fade of box.
	$("#box").animate({opacity: "1.00"})
})

// When the button7 is pressed...
$("#button7").on("click", function() {
	// Change box color to green.
	$("#box").css("background-color", "green")
})

// When the button8 is pressed...
$("#button8").on("click", function() {
	// Change box color to red.
	$("#box").css("background-color", "red")
})

// When the button9 is pressed...
$("#button9").on("click", function() {
	// Change box color to yellow.
	$("#box").css("background-color", "yellow")
})

// When the button10 is pressed...
$("#button10").on("click", function() {
	// Change box color to aqua.
	$("#box").css("background-color", "aqua")
})
