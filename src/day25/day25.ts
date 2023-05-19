import { range } from '../utils/looping';

const parseInput = (input: string): { row: number; col: number } => {
  const groups = input.match(
    new RegExp(
      'To continue, please consult the code grid in the manual.  Enter the code at row ([0-9]+), column ([0-9]+).',
    ),
  );
  if (!groups) throw new Error(`Bad Input: ${input}`);
  const [_, row, col] = groups;
  return { row: +row, col: +col };
};

const getTriangleNumber = (n: number) => (n * (n + 1)) / 2;

const getDiagonalNumber = (row: number, col: number) => {
  const startRow = getTriangleNumber(row - 1) + 1;
  const colOffset = getTriangleNumber(row - 1 + col) - getTriangleNumber(row);
  return startRow + colOffset;
};

const runAlgoNumTimes = (numTimes: number) => {
  const start = 20151125;
  const multiplier = 252533;
  const modulo = 33554393;
  return range(numTimes - 1).reduce(
    (acc) => (acc * multiplier) % modulo,
    start,
  );
};

export const day25 = (input: string) => {
  const { row, col } = parseInput(input);
  const numberMults = getDiagonalNumber(row, col);
  return runAlgoNumTimes(numberMults);
};
