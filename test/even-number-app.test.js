
import chai from 'chai';
import {isEven} from '../even-number/app.js';

const assert = chai.assert;

describe('#isEven()', () => {

    it('Should do return true if the number is Even', () => {

        let nb = 10;

        assert.isBoolean(isEven(nb), 'Result of return from isBoolean() is not a boolean.')
        assert.equal(isEven(nb), true, 'Unexpected result returm from isEven()')
    });
});