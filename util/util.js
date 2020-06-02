const add = (num1, num2) => {
  if (typeof num1 != "number") throw new Error("1st argument must be a number");
  return num1 + num2;
};

// const minus = { add: add };

module.exports = { add };
