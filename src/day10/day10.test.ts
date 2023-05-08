import { logAnswer } from '../utils/logging';
import { day10, day10part2 } from './day10';
import { data, testData } from './day10.data';

describe('day 10', () => {
  it('test cases', () => {
    expect(day10(testData)).toBe(82350);
  });

  it('answer', () => {
    const answer = day10(data);
    logAnswer(answer, 10, 1);
    expect(answer).toBe(252594);
  });
});

describe('day 10 part 2', () => {
  it('test cases', () => {
    expect(day10part2(testData)).toBe(1166642);
  });

  it('answer', () => {
    const answer = day10part2(data);
    logAnswer(answer, 10, 2);
    expect(answer).toBe(3579328);
  });
});
