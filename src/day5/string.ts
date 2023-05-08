export const hasNumVowels = (input: string, numVowels: number): boolean => {
  const groups = input.match(new RegExp('[aeiou]', 'g'));
  return !!groups && groups.length >= numVowels;
};

export const hasNumRepeatLetter = (
  input: string,
  repeatLength: number,
): boolean =>
  !!input.match(new RegExp(`([a-zA-Z])\\1{${repeatLength - 1},}`, 'g'));

export const hasNoNaughtyLetters = (input: string): boolean =>
  !input.match(new RegExp('ab|cd|pq|xy'));

export const hasRepeatingPattern = (
  input: string,
  repeatLength: number,
  numMatches: number = 2,
): boolean =>
  [...input].some((_, index) => {
    const potentialPattern = input.substring(index, index + repeatLength);
    const appearsAgain = input
      .substring(index + repeatLength)
      .match(new RegExp(potentialPattern, 'g'));
    if (appearsAgain && appearsAgain.length >= numMatches - 1) return true;
  });

export const hasNumRepeatLetterWithFilling = (input: string): boolean =>
  [...input].some((letter, index) => input[index + 2] === letter);

export const isOldNiceString = (input: string) =>
  hasNumVowels(input, 3) &&
  hasNumRepeatLetter(input, 2) &&
  hasNoNaughtyLetters(input);

export const isNiceString = (input: string) =>
  hasRepeatingPattern(input, 2, 2) && hasNumRepeatLetterWithFilling(input);
