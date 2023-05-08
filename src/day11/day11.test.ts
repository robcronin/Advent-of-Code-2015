import { logAnswer } from '../utils/logging';
import {
  day11,
  day11part2,
  hasAllValidChars,
  hasDoubleRepeat,
  hasStraight,
  incrementPassword,
} from './day11';
import { data, testData, testData2 } from './day11.data';

describe('day 11', () => {
  it('test cases', () => {
    expect(day11(testData)).toBe('abcdffaa');
  });
  it.skip('test cases 2', () => {
    expect(day11(testData2)).toBe('ghjaabcc');
  });

  it('answer', () => {
    const answer = day11(data);
    logAnswer(answer, 11, 1);
    expect(answer).toBe('cqjxxyzz');
  });
});

describe('day 11 part 2', () => {
  it('answer', () => {
    const answer = day11part2(data);
    logAnswer(answer, 11, 2);
    expect(answer).toBe('cqkaabcc');
  });
});

describe('helper functions', () => {
  it('should increment password', () => {
    expect(incrementPassword(['a', 'b', 'c'])).toEqual(['a', 'b', 'd']);
    expect(incrementPassword(['a', 'b', 'z'])).toEqual(['a', 'c', 'a']);
    expect(incrementPassword(['a', 'y', 'z'])).toEqual(['a', 'z', 'a']);
    expect(incrementPassword(['a', 'z', 'c'])).toEqual(['a', 'z', 'd']);
    expect(incrementPassword(['a', 'z', 'z'])).toEqual(['b', 'a', 'a']);
  });
  it('should validate straights', () => {
    expect(hasStraight(['d', 'a', 'b', 'c'], 3)).toEqual(true);
    expect(hasStraight(['a', 'b', 'c'], 3)).toEqual(true);
    expect(hasStraight(['a', 'b', 'd', 'e'], 3)).toEqual(false);
    expect(hasStraight(['x', 'y', 'z'], 3)).toEqual(true);
  });
  it('should validate allowed chars', () => {
    expect(hasAllValidChars(['d', 'a', 'b', 'c'])).toEqual(true);
    expect(hasAllValidChars(['a', 'i', 'c'])).toEqual(false);
    expect(hasAllValidChars(['a', 'b', 'o', 'e'])).toEqual(false);
    expect(hasAllValidChars(['x', 'l', 'z'])).toEqual(false);
  });
  it('should validate double repeats', () => {
    expect(hasDoubleRepeat(['a', 'a', 'b', 'b'])).toEqual(true);
    expect(hasDoubleRepeat(['a', 'i', 'c', 'c'])).toEqual(false);
    expect(hasDoubleRepeat(['a', 'b', 'b', 'e', 'f', 'f'])).toEqual(true);
    expect(hasDoubleRepeat(['x', 'x', 'z', 'x', 'x'])).toEqual(false);
  });
});
