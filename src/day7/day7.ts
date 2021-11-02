import { SignalInstruction } from '../utils/input';

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
