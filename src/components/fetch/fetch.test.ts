const fetchFunction = require('./fetch')

test('Fetching',() => {
    const string = "Hello World";
    expect(fetchFunction(string)).toBe(string);
})