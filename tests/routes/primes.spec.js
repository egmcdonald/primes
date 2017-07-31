//chai
var chai = require('chai');
var assert = chai.assert;

var express = require('mock-express');
var app = express();

var Primes = require('../../scripts/routes/primes');

var FormatUtils = require('../../scripts/utils/formatUtils');

describe ('routes/Primes', () => {
    describe('route', () => {
        //success cases
        it('should return multiplication table of primes up to param n', () => {
            var req = { params: { 'n': 3 } };
            var res = app.makeResponse((err, sideEffects) => {
                const expected = '|\t0\t|\t2\t|\t3\t|\t5\t|\r\n' +
                                 '|\t2\t|\t4\t|\t6\t|\t10\t|\r\n' +
                                 '|\t3\t|\t6\t|\t9\t|\t15\t|\r\n' +
                                 '|\t5\t|\t10\t|\t15\t|\t25\t|\r\n';                
                assert.equal(sideEffects.send, expected);              
            });
            Primes.route(req, res);
        });

        //fail cases
        it('should return bad request if n is invalid', () => {
            var req = { params: { 'n': 'abc' } };
            var res = app.makeResponse((err, sideEffects) => {
                assert.equal(sideEffects.send, 'input [abc] type invalid: not a number');
            });
            Primes.route(req, res);
        });
        it('should return bad request if n is outwith range', () => {
            var req = { params: { 'n': 0 } };
            var res = app.makeResponse((err, sideEffects) => {
                assert.equal(sideEffects.send, 'input must be within 1 to 2147483647 range');
            });
            Primes.route(req, res);
        });
    });
});