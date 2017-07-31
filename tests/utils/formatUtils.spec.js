//chai
var chai = require('chai');
var assert = chai.assert;

var FormatUtils = require('../../scripts/utils/formatUtils');
var NumberUtils = require('../../scripts/utils/numberUtils');

describe('FormatUtils', () => {
    describe('formatHashsetToTable', () => {
        //success cases
        it('should format a source array into a multiplication table', () => {
            const source = NumberUtils.generateMultiplicationHashSet([1, 2, 3]);
            
            var actual = FormatUtils.formatHashsetToTable(source);

            const expected = '|\t0\t|\t1\t|\t2\t|\t3\t|\r\n' +
                             '|\t1\t|\t1\t|\t2\t|\t3\t|\r\n' +
                             '|\t2\t|\t2\t|\t4\t|\t6\t|\r\n' +
                             '|\t3\t|\t3\t|\t6\t|\t9\t|\r\n';

            assert.equal(actual, expected);
        });

        //fail cases
        it('should throw if source array is empty', () => assert.throws(() => FormatUtils.formatHashsetToTable([]), RangeError, 'source array cannot be empty'));
        it('should throw if source array is not n x n', () => {
            const source = [[0, 1, 2], [1, 2], [2, 3, 4]];
            assert.throws(() => FormatUtils.formatHashsetToTable(source), RangeError, 'source array is not n x n');                        
        });
    });
});