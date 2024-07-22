import analyseArray from "./analyseArray";

const object = analyseArray([1,8,3,4,2,6]);

test('basic case works', () => {
    expect(
        (object.average === 4 &&
         object.min === 1 &&
         object.max === 8 &&
         object.length === 6)
    ).toBe(true);
})