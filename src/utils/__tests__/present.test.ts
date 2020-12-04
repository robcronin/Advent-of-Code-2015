import { measurePaper, measureRibbon } from '../present';

const twoThreeFour = { h: 2, w: 3, l: 4 };
const oneOneTen = { h: 1, w: 1, l: 10 };

describe('measurePaper', () => {
  it('should return answer for 2x3x4', () => {
    expect(measurePaper(twoThreeFour)).toBe(58);
  });
  it('should return for answer 1x1x10', () => {
    expect(measurePaper(oneOneTen)).toBe(43);
  });
});

describe('measureRibbon', () => {
  it('should return answer for 2x3x4', () => {
    expect(measureRibbon(twoThreeFour)).toBe(34);
  });
  it('should return for answer 1x1x10', () => {
    expect(measureRibbon(oneOneTen)).toBe(14);
  });
});
