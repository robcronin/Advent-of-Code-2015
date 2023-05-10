import { logAnswer } from '../utils/logging';
import { day18, day18part2 } from './day18';
import { data, testData } from './day18.data';

describe('day 18', () => {
  it('test cases', () => {
    expect(day18(testData, 4)).toBe(4);
  });

  it('answer', () => {
    const answer = day18(data, 100);
    logAnswer(answer, 18, 1);
    expect(answer).toBe(814);
  });
});

describe('day 18 part 2', () => {
  it('test cases', () => {
    expect(day18part2(testData, 5)).toBe(17);
  });

  it('answer', () => {
    const answer = day18part2(data, 100);
    logAnswer(answer, 18, 2);
    expect(answer).toBe(924);
  });
});
