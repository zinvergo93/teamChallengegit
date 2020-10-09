const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const mathWizz = (arr) => {
  let result = arr.reduce((a, b) => a + b);
  return result;
};

console.log(mathWizz(arrNums));
