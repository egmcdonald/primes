//chai
var chai = require('chai');
var assert = chai.assert;

var Utils = require('./utils');

var NumberUtils = require("../scripts/numberUtils");

describe('is32BitIntegerGreaterThanOrEqualTo1', () => {
    //success cases
    it('should not throw if input is equal to 1', () => assert.doesNotThrow(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(1)));
    it('should return true if input is equal to 1', () => assert.isTrue(NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(1)));
    it('should not throw if input is maximum 32-bit int', () => assert.doesNotThrow(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(NumberUtils.int32BitMax)));
    it('should return true if input is maximum 32-bit int', () => assert.isTrue(NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(NumberUtils.int32BitMax)));
    it('should not throw if input is between 1 and maximum 32-bit int', () => assert.doesNotThrow(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(Utils.generateRandomWholeNumber(1, NumberUtils.int32BitMax))));
    it('should return true if input is between 1 and maximum 32-bit int', () => assert.isTrue(NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(Utils.generateRandomWholeNumber(1, NumberUtils.int32BitMax))));
    
    //fail cases
    it('should throw type error if input is not a number', () => assert.throws(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1('abc'), TypeError, 'not a number'));
    it('should throw type error if input is not a whole number', () => assert.throws(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(1.2), TypeError, 'not an integer'));
    it('should throw range error if input is less than 1', () => assert.throws(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(0), RangeError, 'not greater than or equal to 1'));
    it('should throw range error if input is greater than maximum 32-bit int', () => assert.throws(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(NumberUtils.int32BitMax + 1), RangeError, 'not less than 32-bit integer max'));
});

describe('generateArrayOfPrimes', () => {
    //success cases
    it('should return an array of the first 1 primes', () => assert.deepEqual(NumberUtils.generateArrayOfPrimes(1), [2]));
    it('should return an array of length 1', () => assert.equal(NumberUtils.generateArrayOfPrimes(1).length, 1));
    it('should return an array of the first n primes', () => assert.deepEqual(NumberUtils.generateArrayOfPrimes(5), [2, 3, 5, 7, 11]));
    it('should return an array of length max', () => assert.equal(NumberUtils.generateArrayOfPrimes(NumberUtils.int32BitMax).length, NumberUtils.int32BitMax));

    //fail cases
    it('should throw type error if max is not a whole number', () => assert.throws(() => NumberUtils.generateArrayOfPrimes(Utils.generateRandomWholeNumber(1, NumberUtils.int32BitMax) + 0.1)), RangeError, 'max must be a whole number');
    it('should throw range error if max is 0', () => assert.throws(() => NumberUtils.generateArrayOfPrimes(0), RangeError, 'max cannot be less than or equal to 0'));
    it('should throw range error if max is less than 0', () => assert.throws(() => NumberUtils.generateArrayOfPrimes(Utils.generateRandomWholeNumber(1, NumberUtils.int32BitMax) * -1)), RangeError, 'max cannot be less than or equal to 0');
    it('should throw range error if max is greater than maximum 32-bit int', () => assert.throws(() => NumberUtils.generateArrayOfPrimes(NumberUtils.int32BitMax + 1)), RangeError, 'max cannot be greater than 32-bit integer max');    
});