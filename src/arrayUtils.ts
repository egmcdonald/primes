export const isNxN = (source: Array<Array<number>>): boolean => {
    if (source.length == 0) throw new RangeError('source array cannot be empty');
    
    const n = source.length;
    for (var i = 0; i < n; i++)
        if (source[i].length != n) return false;
    return true;
}