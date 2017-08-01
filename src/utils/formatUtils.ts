import * as ArrayUtils from './arrayUtils';

export const formatHashsetToTable = (source: Array<Array<number>>): string => {
    if (source.length == 0) throw new RangeError('source array cannot be empty');
    if (ArrayUtils.isNxN(source) === false) throw new RangeError('source array is not n x n');

    var table: string = '<table>';
    for(var i = 0; i < source.length; i++)
        table += formatTableRow(source[i]);
    table += '</table>';
    return table;
}

export const formatTableRow = (source: Array<any>): string => source.length == 0 ? '<tr></tr>' : '<tr><td>' + source.join('</td><td>') + '</td></tr>';