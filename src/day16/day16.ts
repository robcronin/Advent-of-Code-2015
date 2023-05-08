type Sue = Partial<{
  number: number;
  children: number;
  cats: number;
  samoyeds: number;
  pomeranians: number;
  akitas: number;
  vizslas: number;
  goldfish: number;
  trees: number;
  cars: number;
  perfumes: number;
}>;

const spottedSue: Sue = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

const parseSues = (input: string[]): Sue[] =>
  input.map((line) => {
    const groups = line.match(
      new RegExp(`Sue ([0-9]+): (([a-z]+: [0-9]+,? ?)+)`),
    );
    if (!groups) throw new Error(`Error parsing ${line}`);
    const [_, number, propertiesString] = groups;
    const properties = propertiesString.split(', ').reduce((acc, property) => {
      const [name, number] = property.split(': ');
      return { ...acc, [name]: +number };
    }, {});
    return { number: +number, ...properties };
  });

const findRealSue = (sues: Sue[]): Sue => {
  const realSue = sues.find((sue) =>
    Object.keys(sue).every((sueKey) => sue[sueKey] === spottedSue[sueKey]),
  );
  if (!realSue) throw new Error('Sue not found');
  return realSue;
};
export const day16 = (input: string[]) => {
  const sues = parseSues(input);
  const realSue = findRealSue(sues);
  return 16;
};

export const day16part2 = (input: string[]) => {
  return 16;
};
