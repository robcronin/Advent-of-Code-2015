import { logAnswer } from '../utils/logging';
import { day13, day13part2 } from './day13';
import { data, testData } from './day13.data';

describe('day 13', () => {
  it('test cases', () => {
    expect(day13(testData)).toBe(330);
  });

  it('answer', () => {
    const answer = day13(data);
    logAnswer(answer, 13, 1);
    expect(answer).toBe(733);
  });
});

describe('day 13 part 2', () => {
  it('test cases', () => {
    expect(day13part2(testData)).toBe(286);
  });

  it('answer', () => {
    const answer = day13part2(data);
    logAnswer(answer, 13, 2);
    expect(answer).toBe(725);
  });
});
