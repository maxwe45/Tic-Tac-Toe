const docBoard = document.querySelector('.board');
let container = document.querySelector('.container')

let players =(name, mark) => {
    return{name,mark}
}

const gameboard =( ()=>{
    let board = ['','','','','','','','',''];
    let cellsPlayed = [];
    let playerOne = players('Player 1', 'x');
    let playerTwo = players('Player 2', 'o');
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
            (board[0]==='x' && board[1]==='x' && board[2]==='x')||
            (board[3]==='x' && board[4]==='x' && board[5]==='x')||
            (board[6]==='x' && board[7]==='x' && board[8]==='x')||
            (board[0]==='x' && board[3]==='x' && board[6]==='x')||
            (board[1]==='x' && board[4]==='x' && board[7]==='x')||
            (board[2]==='x' && board[5]==='x' && board[8]==='x')||
            (board[0]==='x' && board[4]==='x' && board[8]==='x')||
            (board[2]==='x' && board[4]==='x' && board[6]==='x')
        ){return true,player}
        else if(
            (board[0]==='o' && board[1]==='o' && board[2]==='o')||
            (board[3]==='o' && board[4]==='o' && board[5]==='o')||
            (board[6]==='o' && board[7]==='o' && board[8]==='o')||
            (board[0]==='o' && board[3]==='o' && board[6]==='o')||
            (board[1]==='o' && board[4]==='o' && board[7]==='o')||
            (board[2]==='o' && board[5]==='o' && board[8]==='o')||
            (board[0]==='o' && board[4]==='o' && board[8]==='o')||
            (board[2]==='o' && board[4]==='o' && board[6]==='o')
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
})();