/**
 * function to generate and return a boolean array of length @length and default value @bit
 * @param length length of boolean array
 * @param bit default value to assign to members
 * @throws range error if length is less than 0
 * @returns boolean array of length @length and default value @bit
 */
export const generateBooleanArray = (length: number, bit: boolean): Array<boolean> => {
    if (length < 0) throw new RangeError('length cannot be less than 0');
    
    var array: Array<boolean> = Array<boolean>(length);
    for (var i = 0; i < array.length; i++)
        array[i] = bit;
    return array;
}