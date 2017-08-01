import * as ArrayUtils from './arrayUtils';

/**
 * maximum value of a 32-bit integer (2,147,483,647)
 */
export const int32BitMax = 2147483647;

/**
 * function to determine whether a value is a 32-bit integer greater than or equal to 1
 * @param value value to determine 32-bit integer status
 * @throws type error if value is not a whole number
 * @returns true if a whole number in 1 to 32-bit integer max, false if a whole number outside of 1 to 32-bit integer range
 */
export const is32BitIntegerGreaterThanOrEqualTo1 = (value: any): boolean => {
    var n = parseInt(value);        
    if (isNaN(n)) throw new TypeError ('not a number');        
    if (isInteger(value) === false) throw new TypeError('not an integer');        
    return n >= 1 && n <= int32BitMax;
}

/**
 * function to determine whether a number is whole (an integer, not floating point)
 * @param value value to determine integer status
 * @returns true if whole number, false otherwise
 */
export const isInteger = (value: number): boolean => value % 1 === 0;

/**
 * function to generate an array of the first n primes
 * @param n number of primes to generate
 * @throws type error if n is not a whole number
 * @throws range error if n is not within 0 to int 32-bit max range
 * @returns array of the first n primes
 */
export const generateArrayOfPrimes = (n: number): Array<number> => {
    if (isInteger(n) === false) throw new TypeError('n must be a whole number');
    if (n <= 0) throw new RangeError('n cannot be less than or equal to 0');
    if (n > int32BitMax) throw new RangeError('n cannot be greater than 32-bit integer max');

    var limit = estimateUpperLimitForSieve(n);
    var sieve = sieveOfEratosthenes(limit);
    return getTruesFromSieve(sieve, n);    
}

/**
 * function to estimate the upper limit for the nth prime
 * @param n value to calculate upper limit of nth prime for
 * @throws range error is n is less than 0
 * @returns the estimated upper limit for the nth prime
 */
export const estimateUpperLimitForSieve = (n: number): number => {
    if (n < 0) throw new RangeError('n cannot be less than 0');
    
    //following this resource: https://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
    if (n >= 6) return Math.floor(n * Math.log(n) + n * Math.log(Math.log(n)));
    else if (n > 0) return Math.floor([2, 3, 5, 7, 11][n - 1]);
    else return 0;
}

/**
 * function to apply eratosthenes sieve up to limit
 * this calculates all primes between 0 and limit
 * @param limit upper limit to calculate primes for
 * @throws range error if n is less than or equal to 1
 */
export const sieveOfEratosthenes = (limit: number): Array<boolean> => {
    if (limit <= 1) throw new RangeError('n cannot be less than or equal to 1'); //no primes occur below 1
    
    var sieve = ArrayUtils.generateBooleanArray(limit + 1, true);
    
    //we know 0 and 1 are not primes so we can discard these imediately
    sieve[0] = false;
    sieve[1] = false;
    
    //iterate through all remaining values within boolean array
    //sieves sequentially, starting at 2
    //eliminates all values that are divisible by true preceeding array values
    //i.e. eliminates all factors of 2 -> 3 -> 5 -> etc.
    for (var i = 2; i * i <= limit; i++)
        if (sieve[i])
            for (var j = i * i; j <= limit; j += i)
                sieve[j] = false;
    return sieve;
}

/**
 * function to extract all trues from a sieved boolean array and map it into a corresponding number array
 * @param sieve boolean array containing sieved values
 * @param n number of trues to find within sieve
 * @throws range error is sieve is empty
 * @throws range error is n is less than or equal to 0
 * @returns corresponding number array mapped from sieved boolean array
 */
export const getTruesFromSieve = (sieve: Array<boolean>, n: number): Array<number> => {
    if (sieve.length == 0) throw new RangeError('sieve cannot be empty');
    if (n <= 0) throw new RangeError('n cannot be less than or equal to 0');
    
    let trues: Array<number> = [];
    var found = 0;
    for (var i = 0; i < sieve.length; i++)
    {
        if (found == n) break;

        if (sieve[i]) {
            trues.push(i);
            found++;
        }
    }
    return trues;
}

/**
 * function to generate the nth row of a multiplication hashset
 * using a standard multiplication table, the expected grid should be (n + 1) by (n + 1)
 * 0        1       2       ... 0th row
 * 1        1       2       ...
 * 2        2       4       ...
 * ...      ...     ...     ...
 * n        n*1     n*2     ... nth row
 * @param source array to generate multiplication table against
 * @param n row number to generate
 * @throws range error if n is less than 0
 * @throws range error if n is greater than the length of the source array (i.e. n can be equal to source length as grid will be (n + 1) by (n + 1))
 * @returns nth row of the multiplication table created from source array
 */
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