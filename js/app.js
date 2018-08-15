var name = "";
var email = "";
var age = 0;
var comment = "";

// Capture Button Click
$("#add-user").on("click", function (event) {
	event.preventDefault();

	// Grabbed values from text boxes
	name = $("#name-input").val().trim();
	email = $("#role-input").val().trim();
	age = $("#date-input").val().trim();
	comment = $("#rate-input").val().trim();

	console.log(name);
	// Code for handling the push
	database.ref().push({
		name: name,
		email: email,
		age: age,
		comment: comment,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

});

// Firebase watcher .on("child_added"
database.ref().on("child_added", function (snapshot) {
	// storing the snapshot.val() in a variable for convenience
	var sv = snapshot.val();

	// Console.loging the last user's data
	console.log(sv.name);
	console.log(sv.email);
	console.log(sv.age);
	console.log(sv.comment);

	// Change the HTML to reflect
	$("#name-display").text(sv.name);
	$("#role-input").text(sv.email);
	$("#date-inputy").text(sv.age);
	$("#rate-input").text(sv.comment);
	

	// Handle the errors
}, function (errorObject) {
	console.log("Errors handled: " + errorObject.code);
});