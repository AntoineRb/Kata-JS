import chai from 'chai';
import {fizzbuzz} from '../fizzbuzz/app.js';

const assert = chai.assert;

describe('#fizzbuzz()', () => {

    
    function fizzbuzzTesting( nbMin, nbMax, minValue, maxValue ) {

        const describeText   = 'Should do return fizz if i % 5 = 0, buzz for i % 3 <= 0 and fizzbuzz if the two conditions is true';

        it( describeText, () => {

            const firstValueOfDictExpected = minValue;
            const lastValueOfDictExpected  = maxValue;


    
            // function return a dictionary
            const fbDict            = fizzbuzz( nbMin, nbMax );
            // Length of dictionary
            const checkLengthOfDict =  ( Object.keys( fbDict ).length ) == ( nbMax - nbMin + 1 ) ? true : false;
    
            // first & last values of dictionary
            const firstValue = fbDict[ nbMin ];
            const lastValue  = fbDict[ nbMax ];
    
            assert.isTrue( checkLengthOfDict, true, 'the length of the dictionary is not expected' );
            assert.equal( firstValue, firstValueOfDictExpected, `First Value ${firstValue} is unexpected` );
            assert.equal( lastValue, lastValueOfDictExpected, `last Value ${lastValue} is unexpected` );
        });

        
    }

    fizzbuzzTesting( 0,  10, 'Fizz', 'Buzz' );
    fizzbuzzTesting( 10, 20, 'Buzz', 'Buzz' );
    fizzbuzzTesting( 20, 30, 'Buzz', 'Fizz' );
    fizzbuzzTesting( 30, 40, 'Fizz', 'Buzz' );
    fizzbuzzTesting( 40, 50, 'Buzz', 'Buzz' );
    fizzbuzzTesting( 0, 100, 'Fizz', 'Buzz' );
});