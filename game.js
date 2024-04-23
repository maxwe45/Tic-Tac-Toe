const gameboard = {
    board: [],
}

const players = {
    playerx: {
        team: 'x',
    },
    playero: {
        team: 'o',
    },
}

const gameFlow = {
    points: []
}

//Populates board with 3by3 cells modeled as an array of arrays the first one modeling rows and the second
//modeling cell # on the row. Each cell is an object with its name and its fill(originally none)
const populateBoard = (function () {
    for(i=1; i<4; i++){
        let rowCells = [];
        for(j=1; j<4; j++){
            let name = `${i}by${j}`
            let cell = {name,fill:'none'}
            rowCells.push(cell)
        }
    gameboard.board.push(rowCells)
    }})();

//Takes a specific cell and what player wants to fill the cell and then gives that cells object 
//a fill value for that player either x or o.
function fillCell(cell,player) {
    if(player.team === 'x'){cell.fill = 'x'}
    else{cell.fill = 'o'}
}

console.log(fillCell(gameboard.board[0][0], players.playero))

function addPlayers() {
    
}