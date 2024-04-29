const docBoard = document.querySelector('.board');
const container = document.querySelector('.container');
const showUsers = document.querySelector('#showUsernames');
const startGame = document.getElementById('startGame')
const modalContainer = document.querySelector('.modalContainer');
const restartGame = document.getElementById('restartGame')
const gameBttns = document.querySelector('.gameBttns')

let players =(name, mark) => {
    let wins = 0;
    let addWin = () => {return wins++}
    let allWins = () => {return wins}
    return{name,mark,addWin,allWins}
}

let displayScores = (()=>{
    let plyrOneWins = document.getElementById('plyrOneWins');
    let plyrTwoWins = document.getElementById('plyrTwoWins');
    return{plyrOneWins,plyrTwoWins};
})();

let displayPlayers = (()=>{
    let plyrOneWinsName = document.getElementById('plyrOneWinsName');
    let plyrTwoWinsName = document.getElementById('plyrTwoWinsName');
    return {plyrOneWinsName,plyrTwoWinsName};
})();

showUsers.addEventListener('click', () => {
    modalContainer.classList.toggle('showModal')
})

startGame.addEventListener('click', ()=>{
    gameboard();
    startGame.classList.toggle('startRunning')
    if(startGame.className === 'startRunning'){
        startGame.style.visibility = 'hidden';
        restartGame.style.visibility = 'visible'
    }});

const closeNames = document.getElementById('userClose');
closeNames.addEventListener('click', ()=>{modalContainer.classList.toggle('showModal')})

function changePlayerNames(){
    let playerOneName = document.getElementById('playerOneName').value;
    let playerTwoName = document.getElementById('playerTwoName').value;
    displayPlayers.plyrOneWinsName.textContent = `${playerOneName}:`;
    displayPlayers.plyrTwoWinsName.textContent = `${playerTwoName}:`;
    return playerOneName, playerTwoName;
}

const submitNames = document.getElementById('submitNames');
submitNames.addEventListener('click', ()=>{
    changePlayerNames();
    modalContainer.classList.toggle('showModal')
})

const gameboard = ()=>{
    let board = ['','','','','','','','',''];
    let cellsPlayed = [];
    let playerOne = players(displayPlayers.plyrOneWinsName.textContent, 'X');
    let playerTwo = players(displayPlayers.plyrTwoWinsName.textContent, 'O');
    let player = playerOne
    let cell = document.querySelectorAll('.cell')

    cell.forEach((cell) => {
        cell.addEventListener('click', () => {runGame(cell)})
    })

    const changePlayer = ()=> {
        if(player === playerOne){player = playerTwo}
        else{player = playerOne}
    }

    const newRound = () => {
        board.fill('');
        cell.forEach((cell)=>{cell.textContent=''})
        cellsPlayed = []
    }

    let checkWinner = () => {
        if(
            (board[0]==='X' && board[1]==='X' && board[2]==='X')||
            (board[3]==='X' && board[4]==='X' && board[5]==='X')||
            (board[6]==='X' && board[7]==='X' && board[8]==='X')||
            (board[0]==='X' && board[3]==='X' && board[6]==='X')||
            (board[1]==='X' && board[4]==='X' && board[7]==='X')||
            (board[2]==='X' && board[5]==='X' && board[8]==='X')||
            (board[0]==='X' && board[4]==='X' && board[8]==='X')||
            (board[2]==='X' && board[4]==='X' && board[6]==='X')
        ){return true,player}
        else if(
            (board[0]==='O' && board[1]==='O' && board[2]==='O')||
            (board[3]==='O' && board[4]==='O' && board[5]==='O')||
            (board[6]==='O' && board[7]==='O' && board[8]==='O')||
            (board[0]==='O' && board[3]==='O' && board[6]==='O')||
            (board[1]==='O' && board[4]==='O' && board[7]==='O')||
            (board[2]==='O' && board[5]==='O' && board[8]==='O')||
            (board[0]==='O' && board[4]==='O' && board[8]==='O')||
            (board[2]==='O' && board[4]==='O' && board[6]==='O')
        ){return true,player}
        }  

    let updateScore = ()=>{
        displayScores.plyrOneWins.textContent = playerOne.allWins();
        displayScores.plyrTwoWins.textContent = playerTwo.allWins();
    }
    
    const runGame = (box) => {
        if(cellsPlayed.includes(box.id)){}
        else{
         board.splice(box.id,1,player.mark)
         box.textContent = player.mark
         cellsPlayed.push(box.id)
         changePlayer()}
     
         if(checkWinner()){
            player.addWin()
            updateScore()
            window.alert(`${player.name} won!`)
            setTimeout(newRound,2000)
         }else if(cellsPlayed.length===9){setTimeout(newRound,2000)}
        }

    restartGame.addEventListener('click', ()=>{
        newRound()
    })



};