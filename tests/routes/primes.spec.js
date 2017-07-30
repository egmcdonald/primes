//chai
var chai = require('chai');
var assert = chai.assert;

var express = require('mock-express');
var app = express();

var Primes = require('../../scripts/routes/primes');

var FormatUtils = require('../../scripts/formatUtils');

describe ('routes/Primes', () => {
    describe('route', () => {
        //success cases
        it('should return multiplication table of primes up to param n', () => {
            var req = { params: { 'n': 3 } };
            var res = app.makeResponse((err, sideEffects) => {
                var source = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
                assert.equal(sideEffects.send, FormatUtils.formatHashsetToTable(source));              
            });
            Primes.route(req, res);
        });

        //fail cases
        it('should return bad request if n is invalid', () => {
            var req = { params: { 'n': 'abc' } };
            var res = app.makeResponse((err, sideEffects) => {
                assert.equal(sideEffects.status, 400);
                assert.equal(sideEffects.send, 'input [abc] type invalid: not a number');
            });
            Primes.route(req, res);
        });
        it('should return bad request if n is outwith range', () => {
            var req = { params: { 'n': 0 } };
            var res = app.makeResponse((err, sideEffects) => {
                assert.equal(sideEffects.status, 400);
                assert.equal(sideEffects.send, 'input must be within 1 to 2147483647 range');
            });
            Primes.route(req, res);
        });
    });
});