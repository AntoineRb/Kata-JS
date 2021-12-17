function minimum( NumberA, NumberB ) {

    if ( !(isNaN(NumberA + NumberB)) && (NumberA != NumberB) )  {
        
        if ( NumberA > NumberB ) {
            console.log(NumberB)
        } else {
            console.log(NumberA)
        }
    }
}

minimum(2, 5);