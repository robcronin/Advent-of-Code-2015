import { logAnswer } from '../utils/logging';
import { day2, day2part2, parsePresentMeasurements } from './day2';
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

test('Parses present measurements', () => {
  const input = `2x3x4
  1x1x10`;
  expect(parsePresentMeasurements(input)).toStrictEqual([
    { h: 2, w: 3, l: 4 },
    { h: 1, w: 1, l: 10 },
  ]);
});
