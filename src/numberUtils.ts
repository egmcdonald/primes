export const int32BitMax = 2147483647; //2,147,483,647

export const is32BitIntegerGreaterThanOrEqualTo1 = (value: any): boolean => {
    var n = parseInt(value);        
    if (isNaN(n)) throw new TypeError ('not a number');        
    if (isInteger(value) === false) throw new TypeError('not an integer');        
    if (n < 1) throw new RangeError('not greater than or equal to 1');
    if (n > int32BitMax) throw new RangeError('not less than 32-bit integer max');
    return true;
}

export const isInteger = (value: number): boolean => value % 1 === 0;

export const generateArrayOfPrimes = (max: number): Array<number> => {
    if (isInteger(max) === false) throw new TypeError('max must be a whole number');
    if (max <= 0) throw new RangeError('max cannot be less than or equal to 0');
    if (max > int32BitMax) throw new RangeError('max cannot be greater than 32-bit integer max');
    return [];    
}