import * as express from 'express';

import * as FormatUtils from './../utils/formatUtils';
import * as NumberUtils from './../utils/numberUtils';

/**
 * function to return a multiplication table of the first N primes (where N is a request parameter)
 * @param req express request
 * @param res express response
 */
export const get = (req: express.Request, res: express.Response): void => { 
    var value: any = req.params.n;
    try {
        if (NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(value) === false) throw new RangeError('input must be within 1 to ' + NumberUtils.int32BitMax + ' range');
        
        var primes: Array<number> = NumberUtils.generateArrayOfPrimes(value);
        
        res.write('<table>');
        for (var i = 0; i <= value; i ++) {
            var row = NumberUtils.generateNthRowOfMultiplicationHashset(primes, i);
            res.write(FormatUtils.formatTableRow(row));
        }
        res.write('</table>');
        
        res.end();
    }
    catch (e) {
        if (e instanceof TypeError) res.send('input [' + value + '] type invalid: ' + e.message);
        else if (e instanceof RangeError) res.send(e.message);
        else res.send('an unexpected error occurred with input [' + value + ']: ' + e.message);        
    }            
}