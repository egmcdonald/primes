export const int32BitMax = 2147483647; //2,147,483,647

export const is32BitIntegerGreaterThanOrEqualTo1 = (value: any): boolean => {
    var n = parseInt(value);        
    if (isNaN(n)) throw new TypeError ('not a number');        
    if (isInteger(value) === false) throw new TypeError('not an integer');        
    return n >= 1 && n <= int32BitMax;
}

export const isInteger = (value: number): boolean => value % 1 === 0;

export const generateArrayOfPrimes = (max: number): Array<number> => {
    if (isInteger(max) === false) throw new TypeError('max must be a whole number');
    if (max <= 0) throw new RangeError('max cannot be less than or equal to 0');
    if (max > int32BitMax) throw new RangeError('max cannot be greater than 32-bit integer max');
    return [];    
}

export const generateMultiplicationHashSet = (source: Array<number>): Array<Array<number>> => {
    if (source.length == 0) throw new RangeError('source cannot be empty');
    
    var hashset: Array<Array<number>> = [];
    
    hashset[0] = [0];
    for(var i = 0; i < source.length; i++)
         hashset[0].push(source[i]);
    
    for(var j = 0; j < source.length; j++) {
        hashset[j + 1] = [source[j]];
        for(var k = 0; k < source.length; k++)
            hashset[j + 1].push(source[j] * source[k]);
    }

    return hashset;
}