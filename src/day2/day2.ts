import { PresentMeasurement } from '../utils/input';
import { measurePaper, measureRibbon } from '../utils/present';

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
