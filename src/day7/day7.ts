import { parseLines } from '../utils/input';

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

const transformSignal = (signal: string): string | number =>
  isNaN(+signal) ? signal : +signal;

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
        signal: transformSignal(simpleSignal),
        destination,
      };
    } else if (isAndOrOr) {
      return {
        input1: transformSignal(andOrInput1),
        input2: transformSignal(andOrInput2),
        gate: andOrOr as 'AND' | 'OR',
        destination,
      };
    } else if (isShift) {
      return {
        signal: transformSignal(shiftSignal),
        input1: transformSignal(shiftInput),
        gate: leftOrRightShift as 'LSHIFT' | 'RSHIFT',
        destination,
      };
    } else {
      return {
        gate: 'NOT',
        input1: transformSignal(notInput),
        destination,
      };
    }
  });
};

const runAnd = (input1: number, input2: number): number => input1 & input2;
const runOr = (input1: number, input2: number): number => input1 | input2;
const runNot = (input: number): number => 2 ** 16 - 1 - input;
const runLeft = (input1: number, input2: number): number => {
  let res = input1 << input2;
  return res & (2 ** 16 - 1);
};
const runRight = (input1: number, input2: number): number => input1 >> input2;

export const getFinalValueForWire = (
  input: SignalInstruction[],
  wireLabel: string | number,
  result: Record<string, number>,
): number => {
  if (typeof wireLabel === 'number') return wireLabel;
  if (result[wireLabel]) return result[wireLabel];
  const inst = input.find(
    (instruction) => instruction.destination === wireLabel,
  );
  if (!inst) throw `No instruction for ${wireLabel}`;
  let ans;
  if (!inst.gate) {
    ans = getFinalValueForWire(input, inst.signal, result);
  } else if (inst.gate === 'AND') {
    ans = runAnd(
      getFinalValueForWire(input, inst.input1, result),
      getFinalValueForWire(input, inst.input2, result),
    );
  } else if (inst.gate === 'OR') {
    ans = runOr(
      getFinalValueForWire(input, inst.input1, result),
      getFinalValueForWire(input, inst.input2, result),
    );
  } else if (inst.gate === 'NOT') {
    ans = runNot(getFinalValueForWire(input, inst.input1, result));
  } else if (inst.gate === 'LSHIFT') {
    ans = runLeft(
      getFinalValueForWire(input, inst.input1, result),
      getFinalValueForWire(input, inst.signal, result),
    );
  } else if (inst.gate === 'RSHIFT') {
    ans = runRight(
      getFinalValueForWire(input, inst.input1, result),
      getFinalValueForWire(input, inst.signal, result),
    );
  }
  if (ans === undefined) throw 'undefined ans';

  result[wireLabel] = ans;
  return ans;
};

export const day7 = (input: SignalInstruction[]) =>
  getFinalValueForWire(input, 'a', {});

export const day7part2 = (input: SignalInstruction[]) => {
  const answerPart1 = getFinalValueForWire(input, 'a', {});
  const bWire = input.find((instruction) => instruction.destination === 'b');
  if (bWire && !bWire.gate && bWire.signal) {
    bWire.signal = answerPart1;
  }

  return getFinalValueForWire(input, 'a', {});
};
