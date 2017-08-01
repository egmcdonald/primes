//chai
var chai = require('chai');
var assert = chai.assert;

var FormatUtils = require('../../scripts/utils/formatUtils');

describe('FormatUtils', () => {
    describe('formatTableRow', () => {
        //success cases
        it('should format a table row of array elements', () => assert.equal(FormatUtils.formatTableRow([1, 2, 3]), '<tr><td>1</td><td>2</td><td>3</td></tr>'));
        it('should format a table row of empty array', () => assert.equal(FormatUtils.formatTableRow([]), '<tr></tr>'));
    });
});