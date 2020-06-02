const { add, minus } = require("../util/util");

describe("Add", () => {
  describe("Success", () => {
    it("should return the sum of the 2 passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });

  describe("Failure", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => add("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => add(2, "2")).toThrowError();
    });
    it("Should throw an error if no argumentrs received", () => {
      expect(() => add()).toThrowError();
    });
  });
});

describe("Minus", () => {
  describe("Success", () => {
    it("Should return the difference of the 2 passed arguments", () => {
      expect(minus(3, 1)).toBe(2);
    });
  });

  describe("Failure", () => {
    it("Should throw an error if 1st arugment isn't a string", () => {
      expect(() => minus("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd arugment isn't a string", () => {
      expect(() => minus(2, "2")).toThrowError();
    });
    it("Should throw an error if no argument is passed", () => {
      expect(() => minus()).toThrowError();
    });
  });
});
