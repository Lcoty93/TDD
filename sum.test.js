const capitalize = require('./sum');


test('capitalize string', () => {
    expect(capitalize('string')).toBe('String');
})

test('capitalize string multiple words', () => {
    expect(capitalize('string hello world')).toBe('String hello world');
})

test('capitalize string already capitalized', () => {
    expect(capitalize('String')).toBe('String');
})

test('capitalize string in all caps', () => {
    expect(capitalize('STRING')).toBe('STRING');
})

test('capitalize string, invalid input', () => {
    expect(capitalize('123')).toBe('invalid');
})