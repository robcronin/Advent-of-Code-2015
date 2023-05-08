import { logAnswer } from '../utils/logging';
import { day16, day16part2 } from './day16';
import { data } from './day16.data';

describe('day 16', () => {
  it('answer', () => {
    const answer = day16(data);
    logAnswer(answer, 16, 1);
    expect(answer).toBe(213);
  });
});

describe('day 16 part 2', () => {
  it('answer', () => {
    const answer = day16part2(data);
    logAnswer(answer, 16, 2);
    expect(answer).toBe(323);
  });
});
