import { logAnswer } from '../utils/logging';
import { day24, day24part2 } from './day24';
import { data, testData } from './day24.data';

describe('day 24', () => {
  it.only('test cases', () => {
    console.log(testData);
    expect(day24(testData)).toBe(99);
  });

  it('answer', () => {
    const answer = day24(data);
    logAnswer(answer, 24, 1);
    expect(answer).toBe(10723906903);
  });
});

describe('day 24 part 2', () => {
  it.only('test cases', () => {
    expect(day24part2(testData)).toBe(44);
  });

  it.only('answer', () => {
    const answer = day24part2(data);
    logAnswer(answer, 24, 2);
    expect(answer).toBe(74850409);
  });
});
