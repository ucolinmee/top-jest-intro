import caesarCipher from "./caesarCipher";

test('basic shift', () => {
    expect(caesarCipher('efg', 5)).toBe('jkl');
})

test('shift with wrapping', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})