import { minArr, sumArr } from '../utils/array';
import { getUniqueOns } from '../utils/permute';

const getOptionsForNumPresents = (
  presents: number[],
  numPresents: number,
  targetWeight: number,
) => {
  const permutations = getUniqueOns(presents.length, numPresents);
  return permutations
    .filter((perm) => {
      const sum = sumArr(perm, (isOn, index) =>
        isOn === 1 ? presents[index] : 0,
      );
      return sum === targetWeight;
    })
    .map((perm) =>
      perm
        .map((isOn, index) => (isOn ? presents[index] : 0))
        .filter((present) => present > 0),
    );
};

const getMinOptions = (
  presents: number[],
  numCompartments: number,
): number[][] => {
  const sumWeight = sumArr(presents, (i) => i);
  const compWeight = sumWeight / numCompartments;
  let numPresents = 1;
  while (true) {
    const options = getOptionsForNumPresents(presents, numPresents, compWeight);
    if (options.length > 0) return options;
    numPresents++;
  }
};

const getMinQe = (presents: number[], numCompartments: number): number => {
  const minOptions = getMinOptions(presents, numCompartments);
  return minArr(minOptions, (option) =>
    option.reduce((acc, val) => acc * val, 1),
  );
};

export const day24 = (input: number[]) => getMinQe(input, 3);

export const day24part2 = (input: number[]) => getMinQe(input, 4);
