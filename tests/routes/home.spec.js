//chai
var chai = require('chai');
var assert = chai.assert;

var express = require('mock-express');
var app = express();

var Home = require('../../scripts/routes/home');

var Router = new Home.Home();

describe ('routes/Home', () => {
    describe('route', () => {
        it('should return useful response as to how to use application', () => {
            var res = app.makeResponse((err, sideEffects) => {
                assert.equal(sideEffects.send, 'modify url to /{int} and calculate prime multiplication table');              
            });
            Router.route(null, res, null);        
        });
    });
});