import {assert} from 'chai';
import {makeTriangle} from '../looping-a-triangle/app.js';

// const assert = chai.assert;

describe('#makeTrianle()', () => {

    it('Should do make a triangle with base of 7 sharp', () => {

        const result = makeTriangle();
        assert.equal( result, '#######', `An error has occured the result ( ${result} ) is not expected.`);

    });
});