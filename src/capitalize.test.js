import capitalize from "./capitalize";

test('Capitalises first letter of string', () => {
    expect(capitalize('samsung')).toBe('Samsung');
})

test('Capitalises first letter of string 2', () => {
    expect(capitalize('Magnus')).toBe('Magnus');
})