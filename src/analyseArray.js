function analyseArray(arr) {
    return {
        average: arr.reduce((sum, currVal) => sum + currVal, 0) / arr.length,
        max: Math.max(...arr),
        min: Math.min(...arr),
        length: arr.length
    };
}

export default analyseArray;