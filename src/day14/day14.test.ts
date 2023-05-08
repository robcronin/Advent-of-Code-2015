import { logAnswer } from '../utils/logging';
import { day14, day14part2 } from './day14';
import { data, testData } from './day14.data';

describe('day 14', () => {
  it('test cases', () => {
    expect(day14(testData, 1000)).toBe(1120);
  });

  it('answer', () => {
    const answer = day14(data, 2503);
    logAnswer(answer, 14, 1);
    expect(answer).toBe(2640);
  });
});

describe('day 14 part 2', () => {
  it('test cases', () => {
    expect(day14part2(testData, 1000)).toBe(689);
  });

  it('answer', () => {
    const answer = day14part2(data, 2503);
    logAnswer(answer, 14, 2);
    expect(answer).toBe(1102);
  });
});
