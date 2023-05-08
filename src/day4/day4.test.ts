import { logAnswer } from '../utils/logging';
import { day4, day4part2 } from './day4';
import { data } from './day4.data';

const testData = 'abcdef';
const testData2 = 'pqrstuv';

describe('day 4', () => {
  it.skip('test cases', () => {
    expect(day4(testData)).toBe(609043);
    expect(day4(testData2)).toBe(1048970);
  });

  it('answer', () => {
    const answer = day4(data);
    logAnswer(answer, 4, 1);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(254575);
  });
});

describe('day 4 part 2', () => {
  it.skip('answer', () => {
    const answer = day4part2(data);
    logAnswer(answer, 4, 2);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(1038736);
  });
});
