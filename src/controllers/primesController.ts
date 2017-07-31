import * as express from 'express';

import * as FormatUtils from './../utils/formatUtils';
import * as NumberUtils from './../utils/numberUtils';

export const get = (req: express.Request, res: express.Response): void => { 
    var value: any = req.params.n;
    try {
        if (NumberUtils.is32BitIntegerGreaterThanOrEqualTo1(value) === false) throw new RangeError('input must be within 1 to ' + NumberUtils.int32BitMax + ' range');
        
        var primes: Array<number> = NumberUtils.generateArrayOfPrimes(value);
        var hashset: Array<Array<number>> = NumberUtils.generateMultiplicationHashSet(primes);
        var table = FormatUtils.formatHashsetToTable(hashset);

        res.send(table);
    }
    catch (e) {
        if (e instanceof TypeError) res.send('input [' + value + '] type invalid: ' + e.message);
        else if (e instanceof RangeError) res.send(e.message);
        else res.send('an unexpected error occurred with input [' + value + ']: ' + e.message);        
    }            
}