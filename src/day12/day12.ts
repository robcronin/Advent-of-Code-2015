import { sumArr } from '../utils/array';

const countSumNumString = (input: string) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    let multiplier = 1;
    if (Number.isInteger(+char)) {
      if (input[i - 1] === '-') multiplier = -1;
      let offset = 1;
      while (Number.isInteger(+input[i + offset])) {
        offset++;
      }
      const num = +input.slice(i, i + offset);
      sum += num * multiplier;
      i += offset - 1;
    }
  }
  return sum;
};

const recursiveCountSumJson = (obj: Object | Array<any> | number): number => {
  if (typeof obj === 'object') {
    if (Array.isArray(obj))
      return sumArr(obj, (arr) => recursiveCountSumJson(arr));
    if (Object.values(obj).includes('red')) return 0;
    return recursiveCountSumJson(Object.values(obj));
  } else {
    if (Number.isInteger(obj)) return obj;
  }
};

export const day12 = (input: string) => {
  return countSumNumString(input);
};

export const day12part2 = (input: string) => {
  return recursiveCountSumJson(JSON.parse(input));
};
