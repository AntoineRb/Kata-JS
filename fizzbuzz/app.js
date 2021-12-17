
export function fizzbuzz( min, max ) {  

    let dictOfValues = {};

    for ( let i = min; i <= max; i++ ) {

        if ( i % 3 === 0 ) {
            dictOfValues[i] = 'Fizz';
        } else if ( i % 5 === 0 ) {
            dictOfValues[i] = 'Buzz';
        } else if ( ( i % 3 === 0)  && ( i % 5 === 0 ) ) {
            dictOfValues[i] = 'FizzBuzz';
        } else {
            continue;
        }
    }
    
    return dictOfValues;
}


// let result = fizzbuzz( 90, 100 );

// console.log( Object.keys(result).length );
// console.log(' # ' + result.length );

// for ( let key in result ) {
//     console.log(key + ' | ' + result[key]);
// }
