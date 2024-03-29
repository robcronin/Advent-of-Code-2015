import { logAnswer } from '../utils/logging';
import { day22, day22part2 } from './day22';
import { data } from './day22.data';

describe('day 22', () => {
  it('answer', () => {
    const answer = day22(data);
    logAnswer(answer, 22, 1);
    expect(answer).toBe(1824);
  });
});

describe('day 22 part 2', () => {
  it('answer', () => {
    const answer = day22part2(data);
    logAnswer(answer, 22, 2);
    expect(answer).toBe(1937);
  });
});
