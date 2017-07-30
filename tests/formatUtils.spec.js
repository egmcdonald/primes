//chai
var chai = require('chai');
var assert = chai.assert;

var FormatUtils = require("../scripts/formatUtils");

describe('FormatUtils', () => {
    describe('formatMultiplicationTable', () => {
        //success cases
        it('should not throw if source array is not empty', () => assert.doesNotThrow(() => FormatUtils.formatMultiplicationTable([1, 2, 3])));
        it('should format a source array into a multiplication table', () => {
            const source = [1, 2, 3];
            
            var actual = FormatUtils.formatMultiplicationTable(source);

            const expected = '|\t\t|\t1\t|\t2\t|\t3\t|\r\n' +
                            '|\t1\t|\t1\t|\t2\t|\t3\t|\r\n' +
                            '|\t2\t|\t2\t|\t4\t|\t6\t|\r\n' +
                            '|\t3\t|\t3\t|\t6\t|\t9\t|\r\n';

            assert.equal(actual, expected);
        });

        //fail cases
        it('should throw if source array is empty', () => assert.throws(() => FormatUtils.formatMultiplicationTable([]), RangeError, 'source array cannot be empty'));
    });
});