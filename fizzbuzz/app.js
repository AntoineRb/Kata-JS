
function fizzbuzz() {  

    let dictOfValues = {};

    for ( let i = 1; i <= 100; i++ ) {

        if ( i % 3 === 0 ) {
            dictOfValues[i] = 'Fizz'
        } else if ( i % 5 === 0 ) {
            dictOfValues[i] = 'Buzz'
        } else if ( ( i % 3 === 0)  && ( i % 5 === 0 ) ) {
            dictOfValues[i] = 'FizzBuzz'
        } else {
            continue;
        }
    }
    
    return dictOfValues;
}


let result = fizzbuzz();
console.log(result);

for ( [key, value] of result ) {
    console.log(key + ' | ' + value);
}
