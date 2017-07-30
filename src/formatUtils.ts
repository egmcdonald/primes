//TODO: will likely change this function to take a set depending on performance
export const formatMultiplicationTable = (source: Array<number>): string => {
    if (source.length == 0) throw new RangeError('source array cannot be empty');
        
    var table: string = '|\t\t|';

    for(var i = 0; i < source.length; i++) {
        table += '\t'.concat(source[i].toString(), '\t|');
    }

    table += '\r\n';

    for(var j = 0; j < source.length; j++) {
        table += '|\t'.concat(source[j].toString(), '\t|');
        for(var k = 0; k < source.length; k++) {                    
            var entry: string = (source[j] * source[k]).toString();                
            table += '\t'.concat(entry, '\t|');
        }
        table += '\r\n';
    }
    return table;
}