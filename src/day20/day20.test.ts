import { logAnswer } from '../utils/logging';
import { day20, day20part2 } from './day20';
import { data } from './day20.data';

describe('day 20', () => {
  it('answer', () => {
    const answer = day20(data);
    logAnswer(answer, 20, 1);
    expect(answer).toBe(776160);
  });
});

describe('day 20 part 2', () => {
  it('answer', () => {
    const answer = day20part2(data);
    logAnswer(answer, 20, 2);
    expect(answer).toBe(786240);
  });
});
