function reverseString(string) {
    return string.split("").reduce((reversed, curr) => curr + reversed);
}

export default reverseString