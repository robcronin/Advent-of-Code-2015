import { logAnswer } from '../utils/logging';
import { day1, day1part2 } from './day1';
import { data } from './day1.data';

const testData = `(()(()(`;
const testData2 = `()())`;

describe('day 1', () => {
  it('test cases', () => {
    expect(day1(testData)).toBe(3);
  });

  it('answer', () => {
    const answer = day1(data);
    logAnswer(answer, 1, 1);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(280);
  });
});

describe('day 1 part 2', () => {
  it('test cases', () => {
    expect(day1part2(testData2)).toBe(5);
  });

  it('answer', () => {
    const answer = day1part2(data);
    logAnswer(answer, 1, 2);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(1797);
  });
});
