import Calculator from "./calculator";

const calculator = new Calculator();

test('addition', () => {
    expect(calculator.add(5, 2)).toBe(7);
});

test('subtraction', () => {
    expect(calculator.sub(5, 2)).toBe(3);
})

test('multiply', () => {
    expect(calculator.mul(5, 2)).toBe(10);
})

test('divide', () => {
    expect(calculator.div(5, 2)).toBe(2.5);
})

test('divide by 0', () => {
    expect(calculator.div(5, 0)).toBe('Cannot divide by 0');
})