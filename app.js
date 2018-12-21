const player = document.querySelector('#add-player');
const playerInput = document.querySelector('#player');
const playerList = document.querySelector('.collection');
const playAgainBtn = document.querySelector('.play-again');
const squares = document.getElementsByClassName('game-board-space');

console.log(squares);
console.log(squares[5]);

//game squares event listener function
let squaresFunction = function() {
    console.log('hi');
};

loadEventListeners();
function loadEventListeners(){
    //add event listener onto add player btn
    player.addEventListener('submit', addPlayer);
    //add event listener to remove player
    playerList.addEventListener ('click', removePlayer);
    //add event listener to play again
    playAgainBtn.addEventListener('mousedown', playAgain);
    //add event listener onto game squares
    for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', squaresFunction, false);
    }
}

//create addPlayer function to add a player
function addPlayer(e) {
    if (playerInput.value === ''){
        alert('Please enter a player');
    }
    //create the list element for the player
    const li = document.createElement ('li');
    //give it a class
    li.className = 'player-name'
    //create text node
    li.appendChild(document.createTextNode(playerInput.value));
    //create link to delete
    const link = document.createElement('a');
    //assign delete a class name
    link.className = 'delete-player secondary-content';
    link.id = "player";
    //give delete an icon
    link.innerHTML = '<i class="fa fa-circle-o"></i>'
    //add delete to li
    li.appendChild(link);
    //add li to player list
    playerList.appendChild(li);
    //remove input value after submission
    playerInput.value = '';
    //prevent default
    e.preventDefault();
}



//function to remove a player
function removePlayer (e){
    if (e.target.parentElement.classList.contains('delete-player')){
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}

//function to play again
function playAgain (e){
    window.location.reload();
    e.preventDefault();
}

