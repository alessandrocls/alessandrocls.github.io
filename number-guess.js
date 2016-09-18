var ans = Math.floor(Math.random() * 10)+1
    var tries = 5
    while(tries > 0)
      {
       var guess = prompt("Guess a number between 1-10\nYou have " + tries + " tries")
       if (isNaN(guess))
       {
       	alert("Please input a number!")
       }
       else{
      	if ( guess > ans)
       {
       	alert("Your guess is too big!")
       }
       else if (guess < ans)
       {
       	alert("Your guess is too small!")
       }
      else
       {
       	alert("Congratulations! You won!")
       	break
       }
       tries--
      }
      }
      if (tries == 0)
	{
	alert("Better luck next time")
	}
	
	console.log("Thanks for playing!")