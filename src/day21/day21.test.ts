import { logAnswer } from '../utils/logging';
import { day21, day21part2 } from './day21';
import { data, shopItemInput } from './day21.data';

describe('day 21', () => {
  it('answer', () => {
    const answer = day21(data, shopItemInput);
    logAnswer(answer, 21, 1);
    expect(answer).toBe(78);
  });
});

describe('day 21 part 2', () => {
  it('answer', () => {
    const answer = day21part2(data, shopItemInput);
    logAnswer(answer, 21, 2);
    expect(answer).toBe(148);
  });
});
