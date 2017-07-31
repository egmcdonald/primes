//chai
var chai = require('chai');
var assert = chai.assert;

var express = require('mock-express');
var app = express();

var PrimesController = require('../../scripts/controllers/primesController');

var FormatUtils = require('../../scripts/utils/formatUtils');

describe('PrimesController', () => {
    describe('get', () => {
        //success cases
        it('should return multiplication table of primes up to param n', () => {
            var req = { params: { 'n': 3 } };
            var res = app.makeResponse((err, sideEffects) => {
                const expected = '<table>' +
                                    '<tr><td>0</td><td>2</td><td>3</td><td>5</td></tr>' +
                                    '<tr><td>2</td><td>4</td><td>6</td><td>10</td></tr>' +
                                    '<tr><td>3</td><td>6</td><td>9</td><td>15</td></tr>' +
                                    '<tr><td>5</td><td>10</td><td>15</td><td>25</td></tr>' +
                                 '</table>';             
                assert.equal(sideEffects.send, expected);              
            });
            PrimesController.get(req, res);
        });

        //fail cases
        it('should return bad request if n is invalid', () => {
            var req = { params: { 'n': 'abc' } };
            var res = app.makeResponse((err, sideEffects) => {
                assert.equal(sideEffects.send, 'input [abc] type invalid: not a number');
            });
            PrimesController.get(req, res);
        });
        it('should return bad request if n is outwith range', () => {
            var req = { params: { 'n': 0 } };
            var res = app.makeResponse((err, sideEffects) => {
                assert.equal(sideEffects.send, 'input must be within 1 to 2147483647 range');
            });
            PrimesController.get(req, res);
        });
    });
});