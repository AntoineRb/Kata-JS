import chai from 'chai';
import {fizzbuzz} from '../fizzbuzz/app.js';

const assert = chai.assert;

describe('#fizzbuzz()', () => {

    const describeText   = 'Should do return fizz if i % 5 = 0, buzz for i % 3 <= 0 and fizzbuzz if the two conditions is true';
    const expectedResult = {40: 'Buzz', 42: 'Fizz', 45: 'Fizz', 48: 'Fizz', 50: 'Buzz'};

    it( describeText, () => {

        // Set Range to check 
        const min        = 0; 
        const max        = 10;

        // 6 for number of key between min = 0 & max = 10
        const lengthOfDictExpected = 6;

        // Expected Values
        const firstValueOfDictExpected = 'Fizz';
        const lastValueOfDictExpected = 'Buzz';

        // function return a dict
        const fbDict      = fizzbuzz( min, max );

        const checkLengthOfDict =  Object.keys(fbDict).length == lengthOfDictExpected ? true : false; 

        // first & last values of dict
        const firstValue = fbDict[min];
        const lastValue  = fbDict[max];

        assert.isTrue(checkLengthOfDict, true, 'the length of the dictionary is not expected');
        assert.equal( firstValue, firstValueOfDictExpected, `First Value ${firstValue} is unexpected`);
        assert.equal( lastValue, lastValueOfDictExpected, `last Value ${lastValue} is unexpected`);







        // assert.equal(fizzbuzz(40, 50), expectedResult, 'Unexptected result from fizzbuzz() return');
    });
});