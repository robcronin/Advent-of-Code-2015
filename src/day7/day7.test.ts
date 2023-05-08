import { logAnswer } from '../utils/logging';
import { day7, day7part2, parseSignalInstructions } from './day7';
import { data } from './day7.data';

const testString = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> a
NOT x -> h
NOT y -> i`;
const testData = parseSignalInstructions(testString);

describe('day 7', () => {
  it('test cases', () => {
    expect(day7(testData)).toBe(114);
  });

  it('answer', () => {
    const answer = day7(data);
    logAnswer(answer, 7, 1);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(16076);
  });
});

describe('day 7 part 2', () => {
  it('answer', () => {
    const answer = day7part2(data);
    logAnswer(answer, 7, 2);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(2797);
  });
});

describe('parseSignalInstructions', () => {
  it('parses signal instructtions', () => {
    const input = `123 -> x
    x AND y -> d
    x OR y -> e
    x LSHIFT 2 -> f
    y RSHIFT 2 -> g
    NOT x -> h`;
    expect(parseSignalInstructions(input)).toStrictEqual([
      { signal: 123, destination: 'x' },
      { gate: 'AND', input1: 'x', input2: 'y', destination: 'd' },
      { gate: 'OR', input1: 'x', input2: 'y', destination: 'e' },
      { gate: 'LSHIFT', input1: 'x', signal: 2, destination: 'f' },
      { gate: 'RSHIFT', input1: 'y', signal: 2, destination: 'g' },
      { gate: 'NOT', input1: 'x', destination: 'h' },
    ]);
  });
  it('throws an error for invalid signal instructtions', () => {
    const input = `X XOR y -> a
    x OR y -> e`;
    expect(() => parseSignalInstructions(input)).toThrow(
      'X XOR y -> a is not a valid signal instruction',
    );
  });
});
