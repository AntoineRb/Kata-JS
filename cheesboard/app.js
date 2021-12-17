
function chessBoard() {

    let board = '';
    
    for ( let i = 1; i <= 4; i++ ) {
        
        board += '\n' + ' # # # #' + '\n' + '# # # #';
    }

    return board;
}

console.log(chessBoard());