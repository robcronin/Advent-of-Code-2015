import {
  hasNoNaughtyLetters,
  hasNumRepeatLetter,
  hasNumRepeatLetterWithFilling,
  hasNumVowels,
  hasRepeatingPattern,
  isNiceString,
  isOldNiceString,
} from './string';

describe('hasNumVowels', () => {
  it('should return true if 3 vowels', () => {
    expect(hasNumVowels('abcdefi', 3)).toBe(true);
  });
  it('should return true if 4 vowels', () => {
    expect(hasNumVowels('abcdefiu', 3)).toBe(true);
  });
  it('should return false if 2 vowels', () => {
    expect(hasNumVowels('abcdef', 3)).toBe(false);
  });
});

describe('hasNumRepeatLetter', () => {
  describe('repeatLength 2', () => {
    it('should return true if 2 in a row', () => {
      expect(hasNumRepeatLetter('abccde', 2)).toBe(true);
    });
    it('should return true if 3 in a row', () => {
      expect(hasNumRepeatLetter('abcccde', 2)).toBe(true);
    });
    it('should return false if no repeat', () => {
      expect(hasNumRepeatLetter('abcde', 2)).toBe(false);
    });
  });
  describe('repeatLength 3', () => {
    it('should return false if 2 in a row', () => {
      expect(hasNumRepeatLetter('abccde', 3)).toBe(false);
    });
    it('should return true if 3 in a row', () => {
      expect(hasNumRepeatLetter('abcccde', 3)).toBe(true);
    });
    it('should return true if 4 in a row', () => {
      expect(hasNumRepeatLetter('abccccde', 3)).toBe(true);
    });
  });
});

describe('hasNoNaughtyLetters', () => {
  it('should return true if no naughty', () => {
    expect(hasNoNaughtyLetters('akwpel')).toBe(true);
  });
  it('should return false if naughty letters', () => {
    expect(hasNoNaughtyLetters('abcdefiu')).toBe(false);
  });
});

describe('hasRepeatingPattern', () => {
  describe('repeatLength 2', () => {
    it('should return true if repeating pattern', () => {
      expect(hasRepeatingPattern('xyxy', 2)).toBe(true);
    });
    it('should return true if repeating pattern', () => {
      expect(hasRepeatingPattern('aabcdefgaa', 2)).toBe(true);
    });
    it('should return false if overlapping repeating pattern', () => {
      expect(hasRepeatingPattern('aaa', 2)).toBe(false);
    });
    it('should return false if no repeating pattern', () => {
      expect(hasRepeatingPattern('aba', 2)).toBe(false);
    });
  });
  describe('repeatLength 3', () => {
    it('should return true if repeating pattern', () => {
      expect(hasRepeatingPattern('xyxxyx', 3)).toBe(true);
    });
    it('should return true if repeating pattern', () => {
      expect(hasRepeatingPattern('aaabcdaaefgaaa', 3)).toBe(true);
    });
    it('should return false if overlapping repeating pattern', () => {
      expect(hasRepeatingPattern('aaaaa', 3)).toBe(false);
    });
    it('should return false if no repeating pattern', () => {
      expect(hasRepeatingPattern('aba', 3)).toBe(false);
    });
  });
});

describe('hasNumRepeatLetterWithFilling', () => {
  it('should return true if 2 in a row with filling', () => {
    expect(hasNumRepeatLetterWithFilling('xyx')).toBe(true);
  });
  it('should return true if 2 in a row with filling', () => {
    expect(hasNumRepeatLetterWithFilling('abcdefeghi')).toBe(true);
  });
  it('should return true if 2 in a row with filling', () => {
    expect(hasNumRepeatLetterWithFilling('aaa')).toBe(true);
  });
  it('should return true if 3 in a row with filling', () => {
    expect(hasNumRepeatLetterWithFilling('abccycde')).toBe(true);
  });
  it('should return false if no repeat', () => {
    expect(hasNumRepeatLetterWithFilling('abcde')).toBe(false);
  });
});

describe('isOldNiceString', () => {
  it('should return true if nice', () => {
    expect(isOldNiceString('ugknbfddgicrmopn')).toBe(true);
  });
  it('should return true if nice', () => {
    expect(isOldNiceString('aaa')).toBe(true);
  });
  it('should return false if naughty', () => {
    expect(isOldNiceString('jchzalrnumimnmhp')).toBe(false);
  });
  it('should return false if naughty', () => {
    expect(isOldNiceString('haegwjzuvuyypxyu')).toBe(false);
  });
  it('should return false if naughty', () => {
    expect(isOldNiceString('dvszwmarrgswjxmb')).toBe(false);
  });
});

describe('isNiceString', () => {
  it('should return true if nice', () => {
    expect(isNiceString('qjhvhtzxzqqjkmpb')).toBe(true);
  });
  it('should return true if nice', () => {
    expect(isNiceString('xxyxx')).toBe(true);
  });
  it('should return false if naughty', () => {
    expect(isNiceString('uurcxstgmygtbstg')).toBe(false);
  });
  it('should return false if naughty', () => {
    expect(isNiceString('ieodomkazucvgmuy')).toBe(false);
  });
});
