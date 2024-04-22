const gameboard = {
    board: [],
}

const players = {
    players: [],
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
            let cell = {name,
            fill:'none'}
            rowCells.push(cell)
        }
    gameboard.board.push(rowCells)
    }})();

function fillCell(cell,player) {
    let obj = gameboard.board.find()
}