// BUG: Missing comments for better readibilty
// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the booFactsArray)
	var number = Math.floor((Math.random() * booFactsArray.length));
	// We display the fact from the booFactsArrayFactArray that is in the random position we just generated.
	$("#factText").text(booFactsArray[number])
})

// BUG: Renamed Variable to include Array for better readibilty
// BUG: Missing "" around each array item to seperate the items
var booFactsArray = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

// BUG: Missing comments for better readibilty
// When the textPink button is pressed...
$("#textPink").on("click", function() {
	// Change funText to pink.
	// BUG: missing "" around pink color
	$("#funText").css("color", "pink")
})

// BUG: Missing comments for better readibilty, also added indentation for better readibilty
// When the textOrange button is pressed...
$("#textOrange").on("click", function() {
	// Change funText to orange
	$("#funText").css("color", "orange")
})

// BUG: Missing comments for better readibilty
// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	// Change funText to green
	$("#funText").css("color", "green")
})


// BUG: Missing comments for better readibilty
// When boxGrow button is clicked...
// BUG: missing "" around the click function
$("#boxGrow").on("click", function() {
	// Increase the size of the box
	// BUG: moved text to all one line for better readibilty
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// BUG: Missing comments for better readibilty
// When boxShrink button is clicked...
// BUG: missing "" around the click function
$("#boxShrink").on("click", function() {
	// Decrease the size of the box
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})
