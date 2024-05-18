const fetchy = require('./fetch')

test('Fetching',() => {
    const string = "Hello World";
    expect(fetchy(string)).toBe(string);
})