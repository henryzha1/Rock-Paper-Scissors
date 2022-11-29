function getComputerChoice() {
    num = Math.floor(Math.random()*3)+1;
    if(num == 1) {
        return "Rock";
    } else if(num == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if((playerSelection == computerSelection)) {
        return "It's a tie!"
    } else if((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    let win = 0;
    let lose = 0;
    let final = "";
    for(let i = 0; i < 5; i++) {
        let player = prompt("Rock, Paper, or Scissors?");
        let computer = getComputerChoice();
        player = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
        let result = playRound(player, computer);
        if(result.includes("tie")) {
            i--;
        } else if(result.includes("Win")) {
            win++;
        } else {
            lose++;
        }
        console.log(result);
    }
    if(win > lose) {
        final = "won";
    } else {
        final = "lost";
    }
    console.log("You " + final + "! The final score was " + win + "-" + lose);
}

game();