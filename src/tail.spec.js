const tail = require("./tail");

describe("Tail", function () {
  it("Tail of [] should be []", () => {
    expect(tail([])).toEqual([]);
  });
});
