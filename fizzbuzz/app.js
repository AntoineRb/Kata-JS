
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
            dictOfValues[i] = i;
        }
    }
    
    return dictOfValues;
}


let result = fizzbuzz( 47, 89 );

console.log(' # ' + Object.keys(result).length );

let leng = Object.keys(result).length
let a = ( leng == ( 89 - 47 ) + 1 ) ? true : false;

console.log(a);

// for ( let key in result ) {
//     console.log(key + ' | ' + result[key]);
// }
