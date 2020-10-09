export const exponentFunction = (numOne, NumTwo) => {
  return Math.pow(numOne, numTwo);
}

exponentFunction(12, 34);

export function addNums(...nums) {
  let sum = nums.reduce((numOne, numTwo) => numOne + numTwo);
  return sum
}

addNums(14, 56, 32, 27);