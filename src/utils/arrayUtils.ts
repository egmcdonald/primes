export const generateBooleanArray = (length: number, bit: boolean): Array<boolean> => {
    if (length < 0) throw new RangeError('length cannot be less than 0');
    
    var array: Array<boolean> = Array<boolean>(length);
    for (var i = 0; i < array.length; i++)
        array[i] = bit;
    return array;
}