type CharacterLengths = {
  charactersOfCode: number;
  charactersInMemory: number;
  charactersEncoded: number;
};

const countStringLengths = (input: string[]): CharacterLengths => {
  const characterLengths: CharacterLengths = {
    charactersOfCode: 0,
    charactersInMemory: 0,
    charactersEncoded: 0,
  };
  input.forEach((a) => {
    const numBacks = (a.match(/BACK/g) || []).length;
    const numUniCode = (a.match(/BACKx[0-9a-f]{2}/g) || []).length;
    characterLengths.charactersOfCode += a.length - 3 * numBacks;
    characterLengths.charactersInMemory +=
      a.length - 4 * numBacks - 2 * numUniCode - 2;
    characterLengths.charactersEncoded += a.length - numBacks - numUniCode + 4;
  });
  return characterLengths;
};

export const day8 = (input: string[]) => {
  const { charactersOfCode, charactersInMemory } = countStringLengths(input);
  return charactersOfCode - charactersInMemory;
};
export const day8part2 = (input: string[]) => {
  const { charactersOfCode, charactersEncoded } = countStringLengths(input);
  return charactersEncoded - charactersOfCode;
};
