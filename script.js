
/*
    computerPlay()
    - this function will return a number from the range of 1-3.
    - 0 being rock, 1 is paper and 2 is scissors
*/
function computerPlay() {

    return play = Math.floor(Math.random() * 3); // expected 0, 1 or 2
}

/*
    playRound()
    - this function will play a round
    - it will take two arguments - playerSelction and computerSelection
    - game is simple. Rock beats Scissors, Paper beats Rock and Scissors beats Paper
    - Integer '0' represents Rock, '1' is Paper and '2' is Scissors
    - it will return string value - x means the user won, y means the cpu won and z means a tie
*/
function playRound(playerSelection, computerSelection) {

    
    if (playerSelection == 0) {
        // if playerSelection is rock

        if (computerSelection == 0) {
            // if computerSelection is rock
            return "z";
        } else if (computerSelection == 1) {
            // if computerSelection is paper
            return "y";
        } else {
            // if computerSelection is scissors
            return "x";
        }

    } else if (playerSelection == 1) {
        // if playerSelection is paper

        if (computerSelection == 0) {
            // if computerSelection is rock
            return "x"
        } else if (computerSelection == 1) {
            // if computerSelection is paper
            return "z";
        } else {
            // if computerSelection also is scissors
            return "y";
        }

    } else {
        // playerSelection is scissors

        if (computerSelection == 0) {
            // if computerSelection is rock
            return "y";
        } else if (computerSelection == 1) {
            // if computerSelection is paper
            return "x";
        } else {
            // if computerSelection also is scissors
            return "z";
        }
    }
}

/*
    game()
    - this function will play a game of rock-paper-scissors
    - The game will last 5 rounds.
    - It will record the score during the course of the game.
    - The winner of the game will be declared at the end of the 5th round according to the score.
*/
function game() {

    let playerSelction;
    let computerSelection;

    //variables for player and COM scores
    let playerScore = 0;
    let computerScore = 0;

    // a nodelist of butttons
    const buttons = document.querySelectorAll("button");
    const roundResult = document.querySelector("#result");
    const plays = document.querySelector("#plays");
    const scores = document.querySelector("#scores");
    const gameResult = document.querySelector("#gameResult");

    //iterate each button using  forEach

    buttons.forEach((button) => {

        //add eventListener for every buttons
        button.addEventListener("click", () => {

            if (playerScore < 5 && computerScore < 5) {

                //selections
                playerSelction = parseInt(button.id);
                computerSelection = computerPlay();
                
                //playRound
                let result = playRound(playerSelction, computerSelection);

                //compare result
                if (result == "x") { //player wins

                    playerScore++;
                    roundResult.textContent = "Player wins this round!";
                    plays.textContent = "Player played " + playerSelction + " and Computer played " + computerSelection;
                    scores.textContent = "Player: " + playerScore + " And Computer: " + computerScore;
                } else if (result == "y") { // computer wins

                    computerScore++;
                    roundResult.textContent = "Computer wins this round!";
                    plays.textContent = "Player played " + playerSelction + " and Computer played " + computerSelection;
                    scores.textContent = "Player: " + playerScore + " And Computer: " + computerScore;
                } else { // a tie

                    roundResult.textContent = "It is a tie this round!";
                    plays.textContent = "Player played " + playerSelction + " and Computer played " + computerSelection;
                    scores.textContent = "Player: " + playerScore + " And Computer: " + computerScore;
                }
            } 

            // Winner of the game
            if (parseInt(playerScore) == 5) {

                gameResult.textContent = "Player wins this game!";
            } else if (parseInt(computerScore) == 5) {

                gameResult.textContent = "Computer wins this game!"
            }
        });
    });

            
}

game();
        

