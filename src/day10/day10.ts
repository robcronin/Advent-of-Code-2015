import { range } from '../utils/looping';

const runLookAndSay = (input: number[]) => {
  const output: number[] = [];
  const [first, ...rest] = input;
  let current = first;
  let length = 1;
  rest.forEach((value) => {
    if (current === value) {
      length++;
    } else {
      output.push(length, current);
      current = value;
      length = 1;
    }
  });
  output.push(length, current);

  return output;
};

const runLookAndSayNumTimes = (input: number[], times: number) =>
  range(times).reduce((currentInput) => runLookAndSay(currentInput), input);

export const day10 = (input: number[]) =>
  runLookAndSayNumTimes(input, 40).length;

export const day10part2 = (input: number[]) =>
  runLookAndSayNumTimes(input, 50).length;
