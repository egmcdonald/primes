import * as ArrayUtils from './arrayUtils';

export const int32BitMax = 2147483647; //2,147,483,647

export const is32BitIntegerGreaterThanOrEqualTo1 = (value: any): boolean => {
    var n = parseInt(value);        
    if (isNaN(n)) throw new TypeError ('not a number');        
    if (isInteger(value) === false) throw new TypeError('not an integer');        
    return n >= 1 && n <= int32BitMax;
}

export const isInteger = (value: number): boolean => value % 1 === 0;

export const generateArrayOfPrimes = (n: number): Array<number> => {
    if (isInteger(n) === false) throw new TypeError('n must be a whole number');
    if (n <= 0) throw new RangeError('n cannot be less than or equal to 0');
    if (n > int32BitMax) throw new RangeError('n cannot be greater than 32-bit integer max');

    var limit = estimateUpperLimitForSieve(n);
    var sieve = sieveOfEratosthenes(limit);
    return getTruesFromSieve(sieve, n);    
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
    
    var sieve = ArrayUtils.generateBooleanArray(limit + 1, true);
    
    //we know 0 and 1 are not primes so we can discard these imediately
    sieve[0] = false;
    sieve[1] = false;
    
    for (var i = 2; i * i <= limit; i++)
        if (sieve[i])
            for (var j = i * i; j <= limit; j += i)
                sieve[j] = false;
    return sieve;
}

export const getTruesFromSieve = (sieve: Array<boolean>, n: number): Array<number> => {
    if (sieve.length == 0) throw new RangeError('sieve cannot be empty');
    if (n <= 0) throw new RangeError('n cannot be less than or equal to 0');
    
    let primes: Array<number> = [];
    var found = 0;
    for (var i = 0; i < sieve.length; i++)
    {
        if (found == n) break;

        if (sieve[i]) {
            primes.push(i);
            found++;
        }
    }
    return primes;
}

export const generateNthRowOfMultiplicationHashset = (source: Array<number>, n: number): Array<number> => {
    if (n < 0) throw new RangeError('n must be a valid index within source array');
    if (n > source.length) throw new RangeError('n cannot be greater than source length');
    
    if (n === 0)
        return [0].concat(source);

    var row = [source[n - 1]];
    for(var i = 0; i < source.length; i++)
        row.push(source[i] * source[n - 1]);
    return row;
}