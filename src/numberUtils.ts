import * as ArrayUtils from './arrayUtils';

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

//picked 6 as limit from: https://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
export const estimateUpperLimitForSieve = (n: number): number => {
    if (n < 0) throw new RangeError('n cannot be less than 0');
    
    if (n >= 6) return Math.floor(n * Math.log(n) + n * Math.log(Math.log(n)));
    else if (n > 0) return Math.floor([2, 3, 5, 7, 11][n - 1]);
    else return 0;
}

export const sieveOfEratosthenes = (limit: number): Array<boolean> => {
    if (limit <= 1) throw new RangeError('n cannot be less than or equal to 1'); //no primes occur below 1
    
    var flags = ArrayUtils.generateBooleanArray(limit + 1, true);
    
    //we know 0 and 1 are not primes so we can discard these imediately
    flags[0] = false;
    flags[1] = false;
    
    for (var i = 2; i * i <= limit; i++)
        if (flags[i])
            for (var j = i * i; j <= limit; j += i)
                flags[j] = false;
    return flags;
}

export const getTruesFromSieve = (sieve: Array<boolean>, max: number, limit: number): Array<number> => {
    if (sieve.length == 0) throw new RangeError('sieve cannot be empty');
    if (max <= 0) throw new RangeError('max cannot be less than or equal to 0');
    if (limit <= 0) throw new RangeError('limit cannot be less than or equal to 0');
    
    let primes: Array<number> = [];
    for (var i = 0, found = 0; i < limit && found < max; i++)
    {
        if (sieve[i]) {
            primes.push(i);
            found++;
        }
    }
    return primes;
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