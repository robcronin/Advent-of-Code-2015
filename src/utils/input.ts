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

export type SignalInstruction = { destination: string } & (
  | {
      gate: undefined;
      signal: number | string;
    }
  | {
      gate: 'AND' | 'OR';
      input1: number | string;
      input2: number | string;
    }
  | {
      gate: 'LSHIFT' | 'RSHIFT';
      input1: number | string;
      signal: number | string;
    }
  | {
      gate: 'NOT';
      input1: number | string;
    }
);

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

export const parseSignalInstructions = (input: string): SignalInstruction[] => {
  const parsed = parseLines(input);
  return parsed.map((signalInstruction) => {
    const groups = signalInstruction.match(
      new RegExp(
        '^(([0-9a-z]+)|(NOT ([0-9a-z]+))|(([0-9a-z]+) (AND|OR) ([0-9a-z]+))|(([0-9a-z]+) (LSHIFT|RSHIFT) ([0-9a-z]+))) -> ([a-z]+)$',
      ),
    );
    if (!groups)
      throw new Error(`${signalInstruction} is not a valid signal instruction`);
    const [
      _,
      _source,
      simpleSignal,
      isNot,
      notInput,
      isAndOrOr,
      andOrInput1,
      andOrOr,
      andOrInput2,
      isShift,
      shiftInput,
      leftOrRightShift,
      shiftSignal,
      destination,
    ] = groups;

    if (simpleSignal) {
      return {
        signal: isNaN(+simpleSignal) ? simpleSignal : +simpleSignal,
        destination,
      };
    } else if (isAndOrOr) {
      return {
        input1: isNaN(+andOrInput1) ? andOrInput1 : +andOrInput1,
        input2: isNaN(+andOrInput2) ? andOrInput2 : +andOrInput2,
        gate: andOrOr as 'AND' | 'OR',
        destination,
      };
    } else if (isShift) {
      return {
        signal: isNaN(+shiftSignal) ? shiftSignal : +shiftSignal,
        input1: isNaN(+shiftInput) ? shiftInput : +shiftInput,
        gate: leftOrRightShift as 'LSHIFT' | 'RSHIFT',
        destination,
      };
    } else {
      return {
        gate: 'NOT',
        input1: isNaN(+notInput) ? notInput : +notInput,
        destination,
      };
    }
  });
};
