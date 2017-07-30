@echo off

REM start mocha
echo starting mocha...
call mocha tests/*.spec.js

REM keep window open to view outcome of tests
pause