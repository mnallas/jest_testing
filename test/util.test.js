const { add } = require("../util/util");

describe("Add", () => {
  describe("Success", () => {
    it("should return the sum of the 2 passed arguments", () => {
      expect(add(2, 2)).toBe(3);
    });
  });
});
