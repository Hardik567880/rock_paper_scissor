const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
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

    let humanScore = 0;
    let computerScore = 0;

    function playRound(HumanChoice, ComputerChoice) {
        let hc = String(HumanChoice).toLowerCase();
        let cc = String(ComputerChoice).toLowerCase();
        if (hc === cc) {
            resultsDiv.textContent = "It is a Draw!!";
        } else if ((hc === "rock" && cc === "paper") ||
                   (hc === "paper" && cc === "scissor") ||
                   (hc === "scissor" && cc === "rock")) {
            resultsDiv.textContent = `You Lose! ${ComputerChoice} beats ${HumanChoice}`;
            computerScore++;
        } else {
            resultsDiv.textContent = `You Win! ${HumanChoice} beats ${ComputerChoice}`;
            humanScore++;
        }
        scoreDiv.textContent = `Human ${humanScore} - Computer ${computerScore}`;
        if (humanScore == 5) {
            resultsDiv.textContent = "You Win the Game!";
            button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
            return;
        } else if (computerScore == 5) {
            resultsDiv.textContent = "Computer Wins the Game!";
            button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
            return;
        }
    }


let button1 = document.querySelector("#rockBtn");
button1.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});
let button2 = document.querySelector("#paperBtn");
button2.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
});
let button3 = document.querySelector("#scissorBtn");
button3.addEventListener("click", function () {
    playRound("scissor", getComputerChoice());
});
