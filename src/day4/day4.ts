import { getLowestByNumberLeadingZeros } from '../utils/crypto';

export const day4 = (input: string) => getLowestByNumberLeadingZeros(input, 5);

export const day4part2 = (input: string) =>
  getLowestByNumberLeadingZeros(input, 6);
