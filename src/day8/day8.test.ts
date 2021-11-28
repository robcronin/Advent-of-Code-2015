import { parseInput } from '../utils/input';
import { logAnswer } from '../utils/logging';
import { day8, day8part2 } from './day8';
import { data } from './day8.data';

const testString = `""
"abc"
"aaaBACK"aaa"
"BACKx27"`;
const testData = parseInput(testString) as string[];

describe('day 8', () => {
  it('test cases', () => {
    expect(day8(testData)).toBe(12);
  });

  it('answer', () => {
    const answer = day8(data);
    logAnswer(answer, 8, 1);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(1371);
  });
});

describe('day 8 part 2', () => {
  it('test cases', () => {
    expect(day8part2(testData)).toBe(19);
  });

  it('answer', () => {
    const answer = day8part2(data);
    logAnswer(answer, 8, 2);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(2117);
  });
});
