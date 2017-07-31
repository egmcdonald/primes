//chai
var chai = require('chai');
var assert = chai.assert;

var express = require('mock-express');
var app = express();

var HomeController = require('../../scripts/controllers/homeController');

describe ('HomeController', () => {
    describe('get', () => {
        //success cases
        it('should return useful response as to how to use application', () => {
            var res = app.makeResponse((err, sideEffects) => {
                assert.equal(sideEffects.send, 'modify url to /primes/{int} and calculate prime multiplication table');              
            });
            HomeController.get(null, res);
        });
    });
});