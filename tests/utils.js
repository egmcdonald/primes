exports.generateRandomWholeNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

exports.mockResponse = (body) => {
    return {
        write: (content) => body += content,
        send: (content) => body = content,
        end: () => {},
        getBody: () => body
    };
};