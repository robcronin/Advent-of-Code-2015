import { maxArr, sumArr } from '../utils/array';
import { getPermutations } from '../utils/permute';

type HappinessScores = Record<string, Record<string, number>>;

const parseHappinessScores = (input: string[]): HappinessScores =>
  input.reduce((acc: HappinessScores, line) => {
    const groups = line.match(
      new RegExp(
        `([a-zA-Z]+) would (lose|gain) ([0-9]+) happiness units by sitting next to ([a-zA-Z]+).`,
      ),
    );
    if (!groups) throw new Error(`No match with ${line}`);
    const [_, a, loseGain, amount, b] = groups;
    return {
      ...acc,
      [a]: { ...acc[a], [b]: loseGain === 'lose' ? -1 * +amount : +amount },
    };
  }, {});

const getHappinessScoresWithMe = (
  happinessScores: HappinessScores,
): HappinessScores => {
  const people = Object.keys(happinessScores);
  people.forEach((person) => (happinessScores[person].me = 0));
  const meScores = people.reduce(
    (acc, person) => ({ ...acc, [person]: 0 }),
    {},
  );
  return { ...happinessScores, me: meScores };
};

const getPermuationHappiness = (
  perm: string[],
  happinessScores: HappinessScores,
) =>
  sumArr(perm, (person, index) => {
    const leftIndex = (index - 1 + perm.length) % perm.length;
    const rightIndex = (index + 1) % perm.length;
    const leftPerson = perm[leftIndex];
    const rightPerson = perm[rightIndex];
    const leftScore = happinessScores[person][leftPerson] || 0;
    const rightScore = happinessScores[person][rightPerson] || 0;
    return leftScore + rightScore;
  });

const getMaxHappiness = (happinessScores: HappinessScores) => {
  const people = Object.keys(happinessScores);
  const permutations = getPermutations(people);
  return maxArr(permutations, (perm) =>
    getPermuationHappiness(perm, happinessScores),
  );
};

export const day13 = (input: string[]) => {
  const happinessScores = parseHappinessScores(input);
  return getMaxHappiness(happinessScores);
};

export const day13part2 = (input: string[]) => {
  const happinessScores = parseHappinessScores(input);
  const happinessScoresWithMe = getHappinessScoresWithMe(happinessScores);
  return getMaxHappiness(happinessScoresWithMe);
};
