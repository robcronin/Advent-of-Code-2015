import { logAnswer } from '../utils/logging';
import { day17, day17part2 } from './day17';
import { data, testData } from './day17.data';

describe('day 17', () => {
  it('test cases', () => {
    expect(day17(testData, 25)).toBe(4);
  });

  it.skip('answer', () => {
    const answer = day17(data, 150);
    logAnswer(answer, 17, 1);
    expect(answer).toBe(1638);
  });
});

describe('day 17 part 2', () => {
  it('test cases', () => {
    expect(day17part2(testData, 25)).toBe(3);
  });

  it.skip('answer', () => {
    const answer = day17part2(data, 150);
    logAnswer(answer, 17, 2);
    expect(answer).toBe(17);
  });
});
