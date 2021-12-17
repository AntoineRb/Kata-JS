
function countB( str ) {

    let counter = 0;

    for ( letter of str ) {

        if ( letter.toLowerCase() == 'b' ) {
            counter++;
        }
    }

    return counter;
}

function countChar( str, char ) {

    let counter = 0;

    for ( letter of str ) {

        if ( letter.toLowerCase() == char.toLowerCase() ) {
            counter++;
        }
    }

    return counter;
}

console.log(countB('BBC'));

console.log(countChar('Kalinka kalinki kalimba', 'k'));