/**
 * function to generate a random whole number between min and max
 * @param min minimum bound for random number
 * @param max maximum bound for random number
 * @returns random whole number between min and max
 */
exports.generateRandomWholeNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * function to generate a mock express response
 * @param body initial body of response
 * @returns mock response object
 */
exports.mockResponse = (body) => {
    return {
        write: (content) => body += content,
        send: (content) => body = content,
        end: () => {},
        getBody: () => body
    };
};