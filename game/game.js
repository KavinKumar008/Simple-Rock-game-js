let playGame = confirm("Shall we play Rock , Paper, or Scissors");

if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper , or scissor");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
         
             
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissor") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);

            let computer =
                computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissor";

            let result = playerOne === computer ? "Tie"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer:${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissor"
                ? `playerOne: ${playerOne}\nComputer:${computer}\nComputer Wins!`
                : playerOne === "scissor" && computer === "rock"
                ? `playerOne : ${playerOne}\nComputer:${computer}\nComputer Wins!`
                : `playerOne : ${playerOne}\nComputer:${computer}\nplayerOne Wins!`
            alert(result);
            let playAgain = confirm("Play Again");
            playAgain ? location.reload() : alert('Ok, thanks for playing');
        }
        else {
            alert('You didnt enter rock, paper, or scissor');
        }
    }
    else {
        alert('I guess you changed your mind.Maybe next time');
    }
        
       
}
else {
    alert('Ok, maybe next time');
}