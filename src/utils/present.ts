import { PresentMeasurement } from './input';

export const measurePaper = (presentMeasurement: PresentMeasurement) => {
  const measurements = Object.values(presentMeasurement).sort((a, b) => a - b);
  return (
    3 * measurements[0] * measurements[1] +
    2 * measurements[1] * measurements[2] +
    2 * measurements[0] * measurements[2]
  );
};

export const measureRibbon = (presentMeasurement: PresentMeasurement) => {
  const measurements = Object.values(presentMeasurement).sort((a, b) => a - b);
  return (
    2 * measurements[0] +
    2 * measurements[1] +
    measurements[0] * measurements[1] * measurements[2]
  );
};
