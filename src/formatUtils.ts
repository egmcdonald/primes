import * as ArrayUtils from './arrayUtils';

export const formatHashsetToTable = (source: Array<Array<number>>): string => {
    if (source.length == 0) throw new RangeError('source array cannot be empty');
    if (ArrayUtils.isNxN(source) === false) throw new RangeError('source array is not n x n');       

    var table: string = '';
    for(var i = 0; i < source.length; i++) {
        table += '|\t';
        table += source[i].join('\t|\t');    
        table += '\t|\r\n';
    }
    return table;
}