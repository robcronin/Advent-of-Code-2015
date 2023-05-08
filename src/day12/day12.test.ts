import { logAnswer } from '../utils/logging';
import { day12, day12part2 } from './day12';
import { data, testData, testData2 } from './day12.data';

describe('day 12', () => {
  it('test cases', () => {
    console.log(testData);
    expect(day12(testData)).toBe(22);
  });

  it('answer', () => {
    const answer = day12(data);
    logAnswer(answer, 12, 1);
    expect(answer).toBe(156366);
  });
});

describe('day 12 part 2', () => {
  it('test cases', () => {
    expect(day12part2(testData)).toBe(-2);
    expect(day12part2(testData2)).toBe(2);
  });

  it('answer', () => {
    const answer = day12part2(data);
    logAnswer(answer, 12, 2);
    expect(answer).toBe(12);
  });
});
