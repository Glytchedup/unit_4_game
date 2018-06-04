$(document).ready(function() {


	var compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick + " Bux" + "   " + " <-- Target"); 

	var charOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 1: " + charOne); 
		$("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + charOne + ">"); 

	var charTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 2: " + charTwo); 
		$("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + charTwo + ">"); 

	var charThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 3: " + charThree); 
		$("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + charThree + ">");
	
	var charFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 4: " + charFour); 
		$("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + charFour + ">");
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 

	function reset () {
		compPick = Math.floor(Math.random() * 102) + 19; 
			console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick + " bux" + "  " + " <-- Target"); 

		score = 0; 
		$(".scoreDisplay").html(score + " bux"); 

		charOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + charOne); 
		$("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + charOne + ">"); 

		charTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + charTwo); 
		$("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + charTwo + ">"); 

		charThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + charThree); 
		$("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + charThree + ">");
	
		charFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + charFour); 
		$("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + charFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore + " bux"); 

			if(newScore === compPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > compPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore + " bux"); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 





