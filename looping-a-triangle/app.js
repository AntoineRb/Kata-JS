


function makeTriangle( nb ) {

    let sharp = [];
    for (let i = 0; i < nb; i++) {
        
        if ( i >= 7 ) {
            break;
        }

        sharp.push( '#' );
        console.log( sharp.join( '' ) );
        
    }
    console.log( sharp );
    return sharp.length;
}

let result = makeTriangle( 7 );

console.log( result );

