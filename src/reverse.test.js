import reverseString from "./reverse";

test('Reverses a string', () => {
    expect(reverseString('samsung')).toBe('gnusmas');
})

test('Reverses a palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar');
})

test('Reverses with space', () => {
    expect(reverseString('apple bottom jeans')).toBe('snaej mottob elppa');
})