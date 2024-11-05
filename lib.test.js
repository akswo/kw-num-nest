const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([0, 10, 20]) should be 10", () => {
expect(lib.avg([0, 10, 20])).toBe(10);
});
test("prime([17]) should be true", () => {
    expect(lib.prime([14])).toBe(true);
});
test("factorial(5) should be 120", ()=>{
    expect(lib.factorial([5])).toBe(120);
});