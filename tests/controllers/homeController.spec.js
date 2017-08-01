//chai
var chai = require('chai');
var assert = chai.assert;

var Utils = require('../utils');

var HomeController = require('../../scripts/controllers/homeController');

describe ('HomeController', () => {
    describe('get', () => {
        //success cases
        it('should return useful response as to how to use application', () => {
            var res = Utils.mockResponse('');

            HomeController.get(null, res);

            assert.equal(res.getBody(), 'modify url to /primes/{int} and calculate prime multiplication table');
        });
    });
});