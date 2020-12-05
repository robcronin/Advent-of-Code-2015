import { parseLightInstructions } from '../utils/input';
import { logAnswer } from '../utils/logging';
import { day6, day6part2 } from './day6';
import { data } from './day6.data';

const testString = `turn on 0,0 through 999,999
  toggle 0,0 through 999,0
  turn off 499,499 through 500,500`;
const testString2 = `turn on 0,0 through 0,0
  toggle 0,0 through 999,999`;
const testData = parseLightInstructions(testString);
const testData2 = parseLightInstructions(testString2);

describe('day 6', () => {
  it('test cases', () => {
    expect(day6(testData)).toBe(998996);
  });

  it('answer', () => {
    const answer = day6(data);
    logAnswer(answer, 6, 1);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(543903);
  });
});

describe('day 6 part 2', () => {
  it('test cases', () => {
    expect(day6part2(testData2)).toBe(2000001);
  });

  it('answer', () => {
    const answer = day6part2(data);
    logAnswer(answer, 6, 2);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(14687245);
  });
});
