import { isNiceString, isOldNiceString } from './string';

export const day5 = (input: string[]) =>
  input.reduce((num, string) => num + (isOldNiceString(string) ? 1 : 0), 0);

export const day5part2 = (input: string[]) =>
  input.reduce((num, string) => num + (isNiceString(string) ? 1 : 0), 0);
