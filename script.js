function getComputerChoice() {
    const n = Math.floor(Math.random() * 9);
    if (n <= 2) {
        return "rock";
    } else if (n > 2 && n <= 5) {
        return "paper";
    } else if (n > 5) {
        return "scissor";
    }
}
function getHumanChoice() {
    let choice = prompt("Choose from:- Rock, Paper, Scissor");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(HumanChoice, ComputerChoice) {
        let hc = String(HumanChoice).toLowerCase();
        let cc = String(ComputerChoice).toLowerCase();

        if (hc === cc) {
            console.log("It is a Draw!!");
        } else if ((hc === "rock" && cc === "paper") ||
                   (hc === "paper" && cc === "scissor") ||
                   (hc === "scissor" && cc === "rock")) {
            console.log(`You Lose! ${ComputerChoice} beats ${HumanChoice}`);
            computerScore++;
        } else {
            console.log(`You Win! ${HumanChoice} beats ${ComputerChoice}`);
            humanScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
}
console.log(playGame());