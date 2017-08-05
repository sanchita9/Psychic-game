var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
		"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var wins = 0;
		var losses = 0;
		var guesses = 0;
		var guessesLeft = 9;
		var guessedLetters =  [];
		var letterToGuess = null;
		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		var updateGuessesLeft = function(){
     document.querySelector("#Guess").innerHTML = "Guesses left: " + guessesLeft;
	};
		var updateLetterToGuess = function() {
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  //this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
	};
		var updateGuessesSoFar = function() {
	document.querySelector("#G1").innerHTML = "Your Guesses so far: " + guessedLetters.join(" , ");
	};
	var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateLetterToGuess();
	updateGuessesLeft();
	updateGuessesSoFar();

	}
	updateLetterToGuess();
	updateGuessesLeft ();

	document.onkeyup = function(event) {
   
	//var userGuess = String.fromCharCode(event.keycode).toLowerCase();
	var userGuess = event.key.toLowerCase();
	guessedLetters.push(userGuess);
	
	 updateGuessesLeft();
	 updateGuessesSoFar();
		if (guessesLeft > 0) {
			
			if (computerGuess === userGuess) {
			alert("Yes, you are psychic!");
			wins++;
			document.querySelector("#Wins").innerHTML = "Wins: " + wins;
			updateLetterToGuess();
			reset();
			}
			else if (computerGuess != userGuess) {
			guessesLeft --; 
			updateGuessesSoFar();
			}
		}

		else if(guessesLeft === 0) {
	    losses++;
	    updateLetterToGuess();
	   document.querySelector("#Loss").innerHTML = "Losses: " + losses;
	   alert("Sorry, you did not guess correct. You are not a psychic, maybe try later?");
	   reset();	
		}
	}
