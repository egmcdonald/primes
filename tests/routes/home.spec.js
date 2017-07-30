//chai
var chai = require('chai');
var assert = chai.assert;

var express = require('mock-express');
var app = express();

var Home = require('../../scripts/routes/home');

var Router = new Home.Home();

describe ('routes/Home', () => {
    describe('route', () => {
        it('should return hello world response', () => {
            var res = app.makeResponse((err, sideEffects) => {
                assert.equal(sideEffects.send, 'hello world');              
            });
            Router.route(null, res, null);        
        });
    });
});