export interface PresentMeasurement {
  h: number;
  w: number;
  l: number;
}

const getDelimiter = (input: string) => {
  if (input.includes(',')) {
    return ',';
  }
  if (input.includes('\n')) {
    return '\n';
  }
  return '';
};

const mapToNumberIfNecessary = (input: string[]) => {
  if (input.every((value) => !isNaN(Number(value)))) {
    return input.map((element) => Number(element));
  }
  return input;
};

const parseLines = (input: string, delimiter?: string) => {
  const inputArray = input.split(delimiter || getDelimiter(input));
  return inputArray.map((element) => element.trim());
};

export const parseInput = (input: string) => {
  const parsed = parseLines(input);
  return mapToNumberIfNecessary(parsed);
};

export const parsePresentMeasurements = (
  input: string,
): PresentMeasurement[] => {
  const parsed = parseLines(input);
  return parsed.map((presentMeasurement) => {
    const [h, w, l] = presentMeasurement.split('x');
    return { h: +h, w: +w, l: +l };
  });
};
