const head = require("./head");
describe("Head", function () {
  it("Head of [] should be null", () => {
    expect(head([])).toEqual(null);
  });
  it("Head of [1,2,3] should be 1", () => {
    expect(head([1, 2, 3])).toEqual(1);
  });
});
