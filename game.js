const docBoard = document.querySelector('.board');
const container = document.querySelector('.container');
const showUsers = document.querySelector('#showUsernames');
const startGame = document.querySelector('.startGame')
const modalContainer = document.querySelector('.modalContainer');

let players =(name, mark) => {
    let wins = 0;
    let addWin = () => {return wins++}
    let allWins = () => {return wins}
    return{name,mark,addWin,allWins}
}

showUsers.addEventListener('click', () => {
    modalContainer.classList.toggle('showModal')
})

startGame.addEventListener('click', ()=>{
    gameboard();
    startGame.classList.toggle('startGame');
    startGame.classList.toggle('startRunning');
    if(startGame.className === 'startRunning'){
        return startGame.value = 'Restart'
    }
    else{
        return startGame.value ='Start'
}})

const gameboard = ()=>{
    let board = ['','','','','','','','',''];
    let cellsPlayed = [];
    let playerOne = players('Player 1', 'X');
    let playerTwo = players('Player 2', 'O');
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
    
    const runGame = (box) => {
        if(cellsPlayed.includes(box.id)){!changePlayer()}
        else{
         board.splice(box.id,1,player.mark)
         box.textContent = player.mark
         changePlayer()}
     
         if(checkWinner()){
            setTimeout(newRound,1000)
         }
        }
};