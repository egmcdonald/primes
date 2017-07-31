export const isNxN = (source: Array<Array<number>>): boolean => {
    if (source.length == 0) throw new RangeError('source array cannot be empty');
    
    const n = source.length;
    for (var i = 0; i < n; i++)
        if (source[i].length != n) return false;
    return true;
}

export const generateBooleanArray = (length: number, bit: boolean): Array<boolean> => {
    if (length < 0) throw new RangeError('length cannot be less than 0');
    
    var array: Array<boolean> = Array<boolean>(length);
    for (var i = 0; i < array.length; i++)
        array[i] = bit;
    return array;
}