import { parseSignalInstructions } from '../utils/input';
import { logAnswer } from '../utils/logging';
import { day7, day7part2 } from './day7';
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
