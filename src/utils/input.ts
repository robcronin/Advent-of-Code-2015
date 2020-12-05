export interface PresentMeasurement {
  h: number;
  w: number;
  l: number;
}

export type Instruction = 'turn on' | 'toggle' | 'turn off';
export interface LightInstruction {
  instruction: Instruction;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
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

export const parseLightInstructions = (input: string): LightInstruction[] => {
  const parsed = parseLines(input, '\n');
  return parsed.map((lightInstruction) => {
    const groups = lightInstruction.match(
      new RegExp(
        '^(turn on|toggle|turn off) ([0-9]+),([0-9]+) through ([0-9]+),([0-9]+)',
      ),
    );
    if (!groups)
      throw new Error(`${lightInstruction} is not a valid light instruction`);
    const [_, instruction, x1, y1, x2, y2] = groups;

    return {
      instruction: instruction as Instruction,
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
    };
  });
};
