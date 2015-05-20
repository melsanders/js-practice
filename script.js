var userNumber = prompt("The wizard says: Choose a number from 1 to 50!");
var computerNumber = Math.floor((Math.random() *50) + 1);
var compare = function (choice1, choice2) {
	if (computerNumber===userNumber) {
		alert("Shazam! You guessed right and defeated the wizard!");
	}
	else if (computerNumber>userNumber) {
		alert("WRONG! The wizard was thinking about a higher number.");
	}
	else if (computerNumber<userNumber) {
		 alert("WRONG! The wizard was thinking about a lower number.");
	}
}
compare (userNumber, computerNumber)