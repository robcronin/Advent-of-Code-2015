import { countArr, minArr, sumArr } from '../utils/array';
import { range } from '../utils/looping';

const getOptions = (length: number) => {
  const numOptions = 2 ** length;
  return range(numOptions).map((decimal) => {
    const arr = [...Number(decimal).toString(2)].map(Number);
    while (arr.length < length) arr.unshift(0);
    return arr;
  });
};

export const day17 = (input: number[], capacity: number) => {
  const options = getOptions(input.length);
  return countArr(options, (option) => {
    const total = sumArr(option, (isContainer, index) =>
      isContainer === 1 ? input[index] : 0,
    );
    return total === capacity;
  });
};

export const day17part2 = (input: number[], capacity: number) => {
  const options = getOptions(input.length);
  const numPerNumContainers: Record<number, number> = {};
  options.forEach((option) => {
    const total = sumArr(option, (isContainer, index) =>
      isContainer === 1 ? input[index] : 0,
    );
    if (total === capacity) {
      const numOn = countArr(option, (opt) => opt === 1);
      if (numPerNumContainers[numOn]) numPerNumContainers[numOn]++;
      else numPerNumContainers[numOn] = 1;
    }
    return total === capacity;
  });
  const minContainers = minArr(Object.keys(numPerNumContainers), Number);
  return numPerNumContainers[minContainers];
};
