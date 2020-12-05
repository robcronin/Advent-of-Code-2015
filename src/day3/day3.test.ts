import { logAnswer } from '../utils/logging';
import { day3, day3part2 } from './day3';
import { data } from './day3.data';

const testData = '^>v<';
const testData2 = '^v^v^v^v^v';
const testData3 = '>';

describe('day 3', () => {
  it('test cases', () => {
    expect(day3(testData)).toBe(4);
    expect(day3(testData2)).toBe(2);
    expect(day3(testData3)).toBe(2);
  });

  it('answer', () => {
    const answer = day3(data);
    logAnswer(answer, 3, 1);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(2565);
  });

  it('throws an error with invalid input', () => {
    expect(() => {
      day3('abc');
    }).toThrow('Invalid direction : a');
  });
});

describe('day 3 part 2', () => {
  it('test cases', () => {
    expect(day3part2(testData)).toBe(3);
    expect(day3part2(testData2)).toBe(11);
    expect(day3part2(testData3)).toBe(2);
  });

  it('answer', () => {
    const answer = day3part2(data);
    logAnswer(answer, 3, 2);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(2639);
  });
});
