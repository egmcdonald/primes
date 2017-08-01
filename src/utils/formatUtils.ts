/**
 * function to format an array into an html table row
 * @param source array to format
 * @returns html string of source contents, each index in a new cell
 */
export const formatTableRow = (source: Array<any>): string => source.length == 0 ? '<tr></tr>' : '<tr><td>' + source.join('</td><td>') + '</td></tr>';