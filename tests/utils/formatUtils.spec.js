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

            const expected = '<table>' +
                                '<tr><td>0</td><td>1</td><td>2</td><td>3</td></tr>' +
                                '<tr><td>1</td><td>1</td><td>2</td><td>3</td></tr>' +
                                '<tr><td>2</td><td>2</td><td>4</td><td>6</td></tr>' +
                                '<tr><td>3</td><td>3</td><td>6</td><td>9</td></tr>' +
                             '</table>';

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