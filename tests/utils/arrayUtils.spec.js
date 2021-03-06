//chai
var chai = require('chai');
var assert = chai.assert;

var Utils = require('../utils');

var ArrayUtils = require('../../scripts/utils/arrayUtils');

describe('ArrayUtils', () => {
    describe('generateBooleanArray', () => {
        //success cases
        it('should return boolean array with length specified', () => {
            var length = Utils.generateRandomWholeNumber(1, 5000);
            var array = ArrayUtils.generateBooleanArray(length, true);
            assert.equal(array.length, length);
        });
        it('should return boolean array with length 0', () => {
            var array = ArrayUtils.generateBooleanArray(0, true);
            assert.equal(array.length, 0);
        });
        it('should return boolean array with all true values', () => {
            var length = Utils.generateRandomWholeNumber(1, 5000);
            var array = ArrayUtils.generateBooleanArray(length, true);
            assert.isTrue(array.every(x => x === true));
        });
        it('should return boolean array with all false values', () => {
            var length = Utils.generateRandomWholeNumber(1, 5000);
            var array = ArrayUtils.generateBooleanArray(length, false);
            assert.isTrue(array.every(x => x === false));
        });        

        //fail cases
        it('should throw range error if length is less than 0', () => assert.throws(() => ArrayUtils.generateBooleanArray(Utils.generateRandomWholeNumber(1, 5000) * -1), RangeError, 'length cannot be less than 0'));
    });
});