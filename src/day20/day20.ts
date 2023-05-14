import { sumArr } from '../utils/array';
import { range } from '../utils/looping';

const getFactors = (num: number): number[] =>
  range(1, Math.floor(Math.sqrt(num)) + 1).reduce(
    (factors: number[], potentialFactor) => {
      if (num % potentialFactor === 0) {
        if (potentialFactor * potentialFactor === num) {
          return [...factors, potentialFactor];
        }
        return [...factors, potentialFactor, num / potentialFactor];
      }
      return factors;
    },
    [],
  );

const getNumPresents = (factors: number[], _house: number) =>
  sumArr(factors, (factor) => 10 * factor);

const getNumPresents2 = (factors: number[], house: number) => {
  return sumArr(factors, (factor) => {
    if (factor * 50 >= house) return 11 * factor;
    return 0;
  });
};

const getMinStart = (
  target: number,
  getNumPresents: (factors: number[], house: number) => number,
) => {
  let possibleSqrt = 1;
  while (true) {
    const square = possibleSqrt ** 2;
    const maxFactors = range(1, possibleSqrt + 1).reduce(
      (factors: number[], num) => [...factors, num, Math.ceil(square / num)],
      [],
    );
    if (getNumPresents(maxFactors, square) >= target) return square;
    possibleSqrt++;
  }
};

const getMinHouse = (
  target: number,
  getNumPresents: (factors: number[], target: number) => number,
) => {
  const minstart = getMinStart(target, getNumPresents);
  // This is a hack and can produce incorrect answers if you use more than just 2
  const expectedFactors = 2 * 3 * 5 * 7;
  let house = minstart;
  while (house % expectedFactors !== 0) house += 2;
  while (getNumPresents(getFactors(house), house) < target)
    house += expectedFactors;
  return house;
};

export const day20 = (input: number) => getMinHouse(input, getNumPresents);

export const day20part2 = (input: number) =>
  getMinHouse(input, getNumPresents2);
