
function executioner( nb, k ) {

    let circle = {};
    let survivor = [];

    for ( let i = 0; i <= nb; i++ ) {

        if ( i % k == 0 ) {

            circle[i] = 'Killed';
            continue;
        }

        survivor.push(i); 
    }

    for ( let i = 0; i < survivor.length; i++ ) {

        if ( survivor.legnth == 1 ) {
            break;
        }

        console.log(i);
        survivor.splice(survivor.length - 1);
    }

    


    console.log(circle);
    console.log(survivor);
}

executioner(5, 3)