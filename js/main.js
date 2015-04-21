$(document).ready(function() {
	//When click on ok, function fires that: 
	$('#ok').on('click', function() {
		//1. Places value of inputbox into a variable.
		var inputNum = $('#inputbox').val();
		parseInt(inputNum);
		//2. Creates new function that appends inputNum var into fizzBuzz loop if num is whole number,
		//2a. checks to see if entered info is a number and alerts if not,
		//2b. alerts user if decimal value is used.
		var numAlert = function (num) {
			if(num % 1 == 0) {
				fizzBuzz(inputNum);
			}	
			else if(isNaN(num)) {
				alert("I could have sworn I said, 'Enter a number.' Is that a number?!!!!");
			}	
			else {
			alert("Did I say anything about decimals?");
			}
		};
		//3. Alerts if empty string is entered into inputbox:
		if(inputNum.length == 0) {
			alert("Empty!");
		}
		//4.clears value from inputbox after use:
		$('#inputbox').val("");
		//5.places inputNum var into numAlert function:
		numAlert(inputNum);
	});//end of ok click function.
	
	//This links enter button to OK click:
	$('#inputbox').on('keydown',function(e) {
		if(e.keyCode == 13) {
			event.preventDefault();
			$('#ok').click();
		};
	});
	//Makes the clear button work:
	$('#clear').on('click', function() {
		$('#fizzbuzz-out').empty();
	})
});
	//The actual fizzBuzz loop that appends "Fizz" and "Buzz" to html:
	function fizzBuzz(max) {
		for(var i = 1; i <= max; i++) {
			if(i % 3 == 0 && i % 5 == 0) {
				$('#fizzbuzz-out').append('<p>FizzBuzz</p>');
			}
			else if(i % 3 == 0) {
				$('#fizzbuzz-out').append('<p>Fizz<p>');
			}
			else if(i % 5 == 0) {
				$('#fizzbuzz-out').append('<p>Buzz</p>');
			}
			else {
				$('#fizzbuzz-out').append('<p>' + i + '</p>');
			}
		};
	};