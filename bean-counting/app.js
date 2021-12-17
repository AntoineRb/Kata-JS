
export function countB( str ) {

    let counter = 0;

    for ( let letter of str ) {

        if ( letter.toLowerCase() == 'b' ) {
            counter++;
        }
    }

    return counter;
}

export function countChar( str, char ) {

    let counter = 0;

    for ( let letter of str ) {

        if ( letter.toLowerCase() == char.toLowerCase() ) {
            counter++;
        }
    }

    return counter;
}
