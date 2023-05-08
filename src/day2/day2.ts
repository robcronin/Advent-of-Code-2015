import { parseLines } from '../utils/input';
import { measurePaper, measureRibbon } from './present';

export interface PresentMeasurement {
  h: number;
  w: number;
  l: number;
}

export const parsePresentMeasurements = (
  input: string,
): PresentMeasurement[] => {
  const parsed = parseLines(input);
  return parsed.map((presentMeasurement) => {
    const [h, w, l] = presentMeasurement.split('x');
    return { h: +h, w: +w, l: +l };
  });
};

export const day2 = (input: PresentMeasurement[]) => {
  return input.reduce(
    (acc, presentMeasurement) => acc + measurePaper(presentMeasurement),
    0,
  );
};

export const day2part2 = (input: PresentMeasurement[]) => {
  return input.reduce(
    (acc, presentMeasurement) => acc + measureRibbon(presentMeasurement),
    0,
  );
};
