@echo off

REM delete node modules directory
echo deleting node modules directory...
rmdir "node_modules" /s /q 2>nul

REM install local packages
echo installing local packages...
call npm install

REM install global mocha
echo installing mocha...
call npm install mocha -g

REM install gulp globally
echo installing gulp...
call npm install gulp -g

REM build the app using gulp
echo building application...
gulp