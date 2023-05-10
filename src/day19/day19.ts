type Replacement = {
  start: string;
  end: string;
};

type Medicine = {
  sample: string;
  replacements: Replacement[];
};

const parseReplacements = (input: string[]): Medicine => {
  const sample = input.pop() as string;
  input.pop();
  const replacements = input.map((line) => {
    const [start, end] = line.split(' => ');
    return { start, end };
  });
  return { sample, replacements };
};

const generateMolecules = (medicine: Medicine): Set<string> => {
  const { sample, replacements } = medicine;
  return replacements.reduce((molecules: Set<string>, replacement) => {
    const { start, end } = replacement;
    const indexes = [...sample].reduce((acc: number[], _char, index) => {
      if (sample.slice(index).startsWith(start)) return [...acc, index];
      return acc;
    }, []);
    const newMolecules = new Set<string>();
    indexes.forEach((index) =>
      newMolecules.add(
        sample.slice(0, index) + end + sample.slice(index + start.length),
      ),
    );
    return new Set([...molecules, ...newMolecules]);
  }, new Set<string>());
};

const generateNextMolecules = (
  medicine: Medicine,
  molecules: Set<string>,
  maxLength: number,
): Set<string> =>
  [...molecules].reduce((allNextMolecules, molecule) => {
    const nextMolecules = generateMolecules({
      sample: molecule,
      replacements: medicine.replacements,
    });
    const filteredMolecules = [...nextMolecules].filter(
      (molecule) => molecule.length <= maxLength,
    );
    return new Set([...filteredMolecules, ...allNextMolecules]);
  }, new Set<string>());

export const day19 = (input: string[]) => {
  const medicine = parseReplacements(input);
  const newMolecules = generateMolecules(medicine);
  return newMolecules.size;
};

export const day19part2 = (input: string[]) => {
  const medicine = parseReplacements(input);

  let molecules = new Set<string>('e');
  let count = 0;
  while (!molecules.has(medicine.sample) && count < 10) {
    molecules = generateNextMolecules(
      medicine,
      molecules,
      medicine.sample.length,
    );
    count++;
  }
  console.log(molecules);
  return count;
};
