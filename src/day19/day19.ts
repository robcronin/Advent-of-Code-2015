type Replacement = {
  start: string;
  end: string;
};

type Medicine = {
  sample: string;
  replacements: Replacement[];
};

const parseReplacements = (input: string[]): Medicine => {
  const sample = input.slice(-1)[0];
  const replacements = input.slice(0, -2).map((line) => {
    const [start, end] = line.split(' => ');
    return { start, end };
  });
  return { sample, replacements };
};

const generateMolecules = (
  medicine: Medicine,
  reverse?: boolean,
): Set<string> => {
  const { sample, replacements } = medicine;
  return replacements.reduce((molecules: Set<string>, replacement) => {
    const { start, end } = replacement;
    const needle = reverse ? end : start;
    const newNeedle = reverse ? start : end;
    const indexes = [...sample].reduce((acc: number[], _char, index) => {
      if (sample.slice(index).startsWith(needle)) return [...acc, index];
      return acc;
    }, []);
    const newMolecules = new Set<string>();
    indexes.forEach((index) =>
      newMolecules.add(
        sample.slice(0, index) +
          newNeedle +
          sample.slice(index + needle.length),
      ),
    );
    return new Set([...molecules, ...newMolecules]);
  }, new Set<string>());
};

const attemptDeconstruct = (medicine: Medicine) => {
  const { sample, replacements } = medicine;
  let current = sample;
  let count = 0;
  while (current !== 'e' && current) {
    const options = generateMolecules({ sample: current, replacements }, true);
    const choice = Math.floor(Math.random() * options.size);
    current = [...options][choice];
    count++;
  }
  return current === 'e' ? count : undefined;
};

export const day19 = (input: string[]) => {
  const medicine = parseReplacements(input);
  const newMolecules = generateMolecules(medicine);
  return newMolecules.size;
};

export const day19part2 = (input: string[]) => {
  const medicine = parseReplacements(input);
  let answer;
  while (!answer) answer = attemptDeconstruct(medicine);
  return answer;
};
