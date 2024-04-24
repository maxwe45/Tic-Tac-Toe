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

const game = {
    won: '',
}

//Populates board with 3by3 cells modeled as an array of arrays the first one modeling rows and the second
//modeling cell # on the row. Each cell is an object with its name and its fill(originally none)
const populateBoard = (function () {
    for(i=1; i<4; i++){
        let rowCells = [];
        for(j=1; j<4; j++){
            let name = `${i}by${j}`
            let cell = {name,fill:'none'}
            rowCells.push(cell)}
    gameboard.board.push(rowCells)
    }})();

//Takes a specific cell and what player wants to fill the cell and then gives that cells object 
//a fill value for that player either x or o.
function fillCell(cell,player) {
    if(player.team === 'x'){cell.fill = 'x'}
    else{cell.fill = 'o'}}

fillCell(gameboard.board[0][2], players.playero)
fillCell(gameboard.board[1][1], players.playero)
fillCell(gameboard.board[2][0], players.playero)

//Should run the turns of the players when finished
function runGame() {
    let player = players.playerx;
    while(true) {
        // const turn = (function (){
        //     return fillCell(choice,player) 
        // })();
        //Changes the player so that they can take turns choosing
        if(player = players.playerx){player = players.playero}else{player = players.playerx};
        //Checks if a player won then breaks if so 
        if(game.won !== ''){break};
    }}

//should check if either x's or o's has diagonal, vertical or horizontal 3 in a row to call a won game
function gameWon() {

}

//Checks horizontal cells
function checkHWin() {
    let xcounter = [0,0,0];
    let ocounter = [0,0,0];
    let r = 0;
    for(let row of gameboard.board){
        for(let cell of row){
            if(cell.fill === 'x'){xcounter[r]+=1}
            else if(cell.fill === 'o'){ocounter[r]+=1}
            else{continue}};
        r++};
    if(ocounter.includes(3)){game.won = 'o'}
    if(xcounter.includes(3)){game.won = 'x'}};

//Checks vertical cells by going through each row and adding a counter for each column to count vertical
function checkVWin(){
    let xcounter = [0,0,0];
    let ocounter = [0,0,0];
    for(let row of gameboard.board){
        if(row[0].fill === 'x'){xcounter[0] += 1}
        if(row[0].fill === 'o'){ocounter[0] += 1}
        if(row[1].fill === 'x'){xcounter[1] += 1}
        if(row[1].fill === 'o'){ocounter[1] += 1}
        if(row[2].fill === 'x'){xcounter[2] += 1}
        if(row[2].fill === 'o'){ocounter[2] += 1}
    }
    if(xcounter.includes(3)){game.won='x'}
    else if(ocounter.includes(3)){game.won='o'}
}

function checkDWin(){
    let xcounterlr = 0;
    let ocounterlr = 0;
    let xcounterrl = 0;
    let ocounterrl = 0;
    let fills = ['x','o'];
    fills.forEach(function findDiag(team) {
        let j=2;
        let i=0;
        for(let row of gameboard.board){
            if(row[i].fill===team){if(team==='x'){xcounterlr++}else{ocounterlr++}};
            if(row[j].fill===team){if(team==='x'){xcounterrl++}else{ocounterrl++}};
            j--;
            i++;
        }
    })
    if((xcounterlr===3)||(xcounterrl===3)){game.won ='x'}
    if((ocounterlr===3||(ocounterrl===3))){game.won = 'o'}}

checkDWin()

checkHWin()

checkVWin()

console.log(game.won)