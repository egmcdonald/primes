//chai
var chai = require('chai');
var assert = chai.assert;

var ArrayUtils = require('../scripts/arrayUtils');

describe('ArrayUtils', () => {
    describe('isNxN', () => {
        //success cases
        it('should return true if double array is n x n', () => {
            const source = [[1, 2, 3], [3, 4, 5], [6, 7, 8]];
            assert.isTrue(ArrayUtils.isNxN(source));
        });
        it('should return false if double array is not n x n', () => {
            const source = [[1, 2, 3], [3, 5], [6, 7, 8]];
            assert.isFalse(ArrayUtils.isNxN(source));
        });   
        
        //fail cases                    
        it('should throw range error if double array is empty', () => assert.throws(() => ArrayUtils.isNxN([]), RangeError, 'source array cannot be empty'));
    });
});