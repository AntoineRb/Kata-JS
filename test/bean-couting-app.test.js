import chai from 'chai';
import {countB, countChar} from '../bean-counting/app.js';

let assert = chai.assert;

describe('#countB()', () => {

    it('Should do count occurences of letter b', () => {
       const str = 'BqbqbsdsdbfdbsbdbsdszBBab'; // B/b 10
       assert.equal( countB(str), 10, 'An error has occured, the result return by countB() is unexpected.' );
    });
});

describe('#countChar()', () => {

    it('Should do count occurences of letter in paramter', () => {
        const str ='AaAaAaAaAaAaAaBbBbBbBbBb' // A/a = 14
        const letter = 'a';
        assert.equal( countChar(str, letter), 14, 'An error has occured, the result return by countChar() is unexpected.'); 
    });
});
