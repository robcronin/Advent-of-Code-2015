import { logAnswer } from '../utils/logging';
import { day23, day23part2 } from './day23';
import { data, testData } from './day23.data';

describe('day 23', () => {
  it('test cases', () => {
    expect(day23(testData)).toBe(2);
  });

  it('answer', () => {
    const answer = day23(data);
    logAnswer(answer, 23, 1);
    expect(answer).toBe(307);
  });
});

describe('day 23 part 2', () => {
  it('answer', () => {
    const answer = day23part2(data);
    logAnswer(answer, 23, 2);
    expect(answer).toBe(160);
  });
});
