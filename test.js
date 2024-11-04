const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([0, 15, 25]) should be 10", () => {
expect(lib.avg([5, 10, 15])).toBe(10);
});
test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});