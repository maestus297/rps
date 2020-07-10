
function game () {

function computerPlay() {
    const x = Math.round(Math.random()*10);
    if (0 < x && x < 4) {
        return ('rock');
}   else if (3 < x && x < 7) {
        return ('paper');
}   else if (6 < x && x <= 9) {
        return ('scissors');
}
}

function game_rock() {
    function playRound_rock(computerSelection) {
            if (computerSelection === 'paper') {
                c_score++;
                const show_ComputerScore = document.querySelector('#computer_score');
                show_ComputerScore.innerHTML = c_score;
                return("You lose! Paper beats Rock!");
            } else if (computerSelection === 'scissors') {
                p_score++;
                const show_PlayerScore = document.querySelector('#player_score');
                show_PlayerScore.innerHTML = p_score;
                return("You win! Rock beats Scissors!");
            } else {
                return("It was a draw. Try again.");
            }
        }
        const computerSelection = computerPlay();
        alert(playRound_rock(computerSelection));
    }     

function game_scissors () {
    function playRound_scissors(computerSelection) {
            if (computerSelection === 'rock') {
                c_score++;
                const show_ComputerScore = document.querySelector('#computer_score');
                show_ComputerScore.innerHTML = c_score;
                return("You lose! Rock beats Scissors!");
            } else if (computerSelection === 'paper') {
                p_score++;
                const show_PlayerScore = document.querySelector('#player_score');
                show_PlayerScore.innerHTML = p_score;
                return("You win! Scissors beats paper!");
            } else {
                return("It was a draw. Try again.");
            }
        }    
        const computerSelection = computerPlay();
        alert(playRound_scissors(computerSelection));
    }

function game_paper() {
    function playRound_paper(computerSelection) {
            if (computerSelection === 'scissors') {
                c_score++;
                const show_ComputerScore = document.querySelector('#computer_score');
                show_ComputerScore.innerHTML = c_score;
                return("You lose! Scissors beats paper!");
            } else if (computerSelection === 'rock') {
                p_score++;
                const show_PlayerScore = document.querySelector('#player_score');
                show_PlayerScore.innerHTML = p_score;
                return("You win! Paper beats Rock!");
            } else {
                return("It was a draw. Try again.");
            }           
        }
        const computerSelection = computerPlay();
        alert(playRound_paper(computerSelection));
    }

    rock.addEventListener('click', () => game_rock());
    paper.addEventListener('click', () => game_paper());
    scissors.addEventListener('click', () => game_scissors());

    let c_score = 0;
    let p_score = 0;

    // const playerSelection = prompt().toLowerCase();
    // console.log(playRound(playerSelection, computerSelection));
    // alert(playRound(playerSelection, computerSelection));  
    // const play = document.querySelector('#center');
    // btn.addEventListener('click,')    //const rock = document.querySelector('#rock');
}

const start = document.querySelector("#start");
start.addEventListener('click', () => game());

