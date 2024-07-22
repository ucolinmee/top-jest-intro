function caesarCipher(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let ascii = text.charCodeAt(i);
        if (isAlphaChar(ascii)) {
            ascii += shift;
            if ((ascii > 90 && text[i] <= 'Z') || ascii > 122) {
                ascii -= 26;
              }
        }
        result += String.fromCharCode(ascii);
    }
    return result;
}

function isAlphaChar(ascii) {
    return ((65 <= ascii && ascii <= 90) || (97 <= ascii && ascii <= 122));
}

export default caesarCipher;