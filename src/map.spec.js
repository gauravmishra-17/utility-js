const map = require("./map");

const identity = (element) => {
  return element;
};

const cube = (element) => {
  return element * element * element;
};

describe("Map", () => {
  it("Cube function on [] should give []", () => {
    expect(map([], cube)).toEqual([]);
  });

  it("Identity function on [1,2,3] should give [1,2,3]", () => {
    expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);
  });
});
