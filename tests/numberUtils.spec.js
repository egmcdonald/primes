//chai
var chai = require('chai');
var assert = chai.assert;

var Utils = require('./utils');

var NumberUtils = require("../scripts/numberUtils");

describe('NumberUtils', () => {
    describe('is32BitIntegerGreaterThanOrEqualTo1', () => {
        //success cases
        it('should not throw if input is equal to 1', () => assert.doesNotThrow(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(1)));
        it('should return true if input is equal to 1', () => assert.isTrue(NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(1)));
        it('should not throw if input is maximum 32-bit int', () => assert.doesNotThrow(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(NumberUtils.int32BitMax)));
        it('should return true if input is maximum 32-bit int', () => assert.isTrue(NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(NumberUtils.int32BitMax)));
        it('should not throw if input is between 1 and maximum 32-bit int', () => assert.doesNotThrow(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(Utils.generateRandomWholeNumber(1, NumberUtils.int32BitMax))));
        it('should return true if input is between 1 and maximum 32-bit int', () => assert.isTrue(NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(Utils.generateRandomWholeNumber(1, NumberUtils.int32BitMax))));
        it('should return false if input is less than 1', () => assert.isFalse(NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(0)));
        it('should return false if input is greater than maximum 32-bit int', () => assert.isFalse(NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(NumberUtils.int32BitMax + 1)));
        
        //fail cases
        it('should throw type error if input is not a number', () => assert.throws(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1('abc'), TypeError, 'not a number'));
        it('should throw type error if input is not a whole number', () => assert.throws(() => NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(1.2), TypeError, 'not an integer'));
    });

    describe('isInteger', () => {
        //success cases
        it('should return true if input is an integer', () => assert.isTrue(NumberUtils.isInteger(Utils.generateRandomWholeNumber(0, NumberUtils.int32BitMax))));

        //fail cases
        it('should return false if input is not a whole number', () => assert.isFalse(NumberUtils.isInteger(Utils.generateRandomWholeNumber(0, NumberUtils.int32BitMax) + 0.1)));
    });

    describe('generateArrayOfPrimes', () => {
        //success cases
        it('should return an array of the first 1 primes', () => assert.deepEqual(NumberUtils.generateArrayOfPrimes(1), [2]));
        it('should return an array of length 1', () => assert.equal(NumberUtils.generateArrayOfPrimes(1).length, 1));
        it('should return an array of the first n primes', () => assert.deepEqual(NumberUtils.generateArrayOfPrimes(5), [2, 3, 5, 7, 11]));
        it('should return an array of length max', () => assert.equal(NumberUtils.generateArrayOfPrimes(1000).length, 1000));

        //fail cases
        it('should throw type error if max is not a whole number', () => assert.throws(() => NumberUtils.generateArrayOfPrimes(Utils.generateRandomWholeNumber(1, NumberUtils.int32BitMax) + 0.1)), RangeError, 'max must be a whole number');
        it('should throw range error if max is 0', () => assert.throws(() => NumberUtils.generateArrayOfPrimes(0), RangeError, 'max cannot be less than or equal to 0'));
        it('should throw range error if max is less than 0', () => assert.throws(() => NumberUtils.generateArrayOfPrimes(Utils.generateRandomWholeNumber(1, NumberUtils.int32BitMax) * -1)), RangeError, 'max cannot be less than or equal to 0');
        it('should throw range error if max is greater than maximum 32-bit int', () => assert.throws(() => NumberUtils.generateArrayOfPrimes(NumberUtils.int32BitMax + 1)), RangeError, 'max cannot be greater than 32-bit integer max');    
    });

    describe('estimateUpperLimitForSieve', () => {
        //success cases
        it('should return estimated limit when n is 6', () => assert.equal(NumberUtils.estimateUpperLimitForSieve(6), 14)); //this is correct as 6th prime is 13 (and 13 < 14)
        it('should return estimated limit when n is 5', () => assert.equal(NumberUtils.estimateUpperLimitForSieve(5), 11));
        it('should return estimated limit when n is 1', () => assert.equal(NumberUtils.estimateUpperLimitForSieve(1), 2));
        it('should return estimated limit when n is 0', () => assert.equal(NumberUtils.estimateUpperLimitForSieve(0), 0));
    
        //fail cases
        it('should throw range error if n is less than 0', () => assert.throws(() => NumberUtils.estimateUpperLimitForSieve(Utils.generateRandomWholeNumber(1, NumberUtils.int32BitMax) * -1), RangeError, 'n cannot be less than 0'))
    });

    describe('sieveOfEratosthenes', () => {
        //success cases
        it('should return sieved array of prime indexes where n is 2', () => assert.deepEqual(NumberUtils.sieveOfEratosthenes(2), [false, false, true]));
        it('should return sieved array of prime indexes where n is 6', () => assert.deepEqual(NumberUtils.sieveOfEratosthenes(6), [false, false, true, true, false, true, false]));
        it('should return sieved array of length n + 1', () => {
            var limit = Utils.generateRandomWholeNumber(6, 1000);
            assert.equal(NumberUtils.sieveOfEratosthenes(limit).length, limit + 1);
        });

        //fail cases
        it('should throw range error if n is 1', () => assert.throws(() => NumberUtils.sieveOfEratosthenes(1), RangeError, 'n cannot be less than or equal to 1'));
    });

    describe('getTruesFromSieve', () => {
        //success
        it('should return array of numbers from boolean array', () => {
            var flags = Array(Utils.generateRandomWholeNumber(1, 1000));
            for (var i = 0; i < flags.length; i++) 
                flags[i] = i % 2 == 0;

            var actual = NumberUtils.getTruesFromSieve(flags, flags.length, flags.length);

            var expected = [];
            for (var i = 0; i < flags.length; i++)
                if (flags[i])
                    expected.push(i);

            assert.deepEqual(actual, expected);
        });

        //fail cases
        it('should throw range error if sieve is empty', () => assert.throws(() => NumberUtils.getTruesFromSieve([], 0, 0), RangeError, 'sieve cannot be empty'));
        it('should throw range error if max is less than sieve length', () => assert.throws(() => NumberUtils.getTruesFromSieve([true], 0, 0), RangeError, 'max cannot be less than sieve length'));
        it('should throw range error if limit is less than sieve length', () => assert.throws(() => NumberUtils.getTruesFromSieve([true], 1, 0), RangeError, 'limit cannot be less than sieve length'));
    });

    describe('generateMultiplicationHashSet', () => {
        //success cases
        it('should return a hashset of multiplied source array', () => {
            const source = [2, 4, 6];

            var actual = NumberUtils.generateMultiplicationHashSet(source);

            var expected = [[0, 2, 4, 6], [2, 4, 8, 12], [4, 8, 16, 24], [6, 12, 24, 36]];

            assert.deepEqual(actual, expected);
        });

        //fail cases
        it('should throw range error if source array is empty', () => assert.throws(() => NumberUtils.generateMultiplicationHashSet([]), RangeError, 'source cannot be empty'));
    });
});