import { logAnswer } from '../utils/logging';
import { day19, day19part2 } from './day19';
import { data, testData, testData2 } from './day19.data';

describe('day 19', () => {
  it('test cases', () => {
    console.log(testData);
    expect(day19(testData)).toBe(4);
  });

  it('answer', () => {
    const answer = day19(data);
    logAnswer(answer, 19, 1);
    expect(answer).toBe(518);
  });
});

describe('day 19 part 2', () => {
  it('test cases', () => {
    expect(day19part2(testData2)).toBe(6);
  });

  it('answer', () => {
    const answer = day19part2(data);
    logAnswer(answer, 19, 2);
    expect(answer).toBe(19);
  });
});
