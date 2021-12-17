
function range( min, max ) {

    let rangeArray = [];
    let result = 0;    

    for ( min; min <= max; min++ ) {
        
        result += min;
        rangeArray.push(min);  
    }

    return `${rangeArray.join(' + ')} est égale à ${result}` ;
}

console.log(range(1, 10));