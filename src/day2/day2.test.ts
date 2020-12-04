import { parsePresentMeasurements } from '../utils/input';
import { logAnswer } from '../utils/logging';
import { day2, day2part2 } from './day2';
import { data } from './day2.data';

const testString = `4x3x2
1x10x1`;
const testData = parsePresentMeasurements(testString);

describe('day 2', () => {
  it('test cases', () => {
    expect(day2(testData)).toBe(101);
  });

  it('answer', () => {
    const answer = day2(data);
    logAnswer(answer, 2, 1);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(1586300);
  });
});

describe('day 2 part 2', () => {
  it('test cases', () => {
    expect(day2part2(testData)).toBe(48);
  });

  it('answer', () => {
    const answer = day2part2(data);
    logAnswer(answer, 2, 2);
    expect(typeof answer).toBe('number');
    expect(answer).toBe(3737498);
  });
});
