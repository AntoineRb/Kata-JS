
let myArray = [ '1', '2', '3', '4', '5', '6', '7' ];


function reverseArray( arrayToCheck ) {

    let newArray = [];
    let idToReplace  = 0;

    for ( let i = 0; i < arrayToCheck.length; i++ ) {

        idToReplace =  arrayToCheck.length - ( i + 1 );
        newArray.push( arrayToCheck[ idToReplace ] );
    }   

    return newArray;
}

console.log( reverseArray(myArray) );