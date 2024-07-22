class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }

    sub(num1, num2) {
        return num1 - num2;
    }

    mul(num1, num2) {
        return num1 * num2;
    }

    div(num1, num2) {
        if (num2 === 0) return 'Cannot divide by 0';
        return num1 / num2;
    }
}

export default Calculator;