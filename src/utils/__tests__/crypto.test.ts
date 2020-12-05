import { getLowestByNumberLeadingZeros } from '../crypto';

test('getLowestByNumberLeadingZeros', () => {
  expect(getLowestByNumberLeadingZeros('abcdef', 3)).toBe(3337);
});
