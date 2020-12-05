import {
  parseInput,
  parseLightInstructions,
  parsePresentMeasurements,
} from '../input';

test('Parses a newline delimited array of numbers', () => {
  const input = `142195
  119326
  -57976`;
  expect(parseInput(input)).toStrictEqual([142195, 119326, -57976]);
});

test('Parses a comma delimited array of numbers', () => {
  const input = '1,0,0,3,-1';
  expect(parseInput(input)).toStrictEqual([1, 0, 0, 3, -1]);
});

test('Parses a newline delimited array of strings', () => {
  const input = `YP6)HRL
  5SN)Z3H
  46K)CGP`;
  expect(parseInput(input)).toStrictEqual(['YP6)HRL', '5SN)Z3H', '46K)CGP']);
});

test('Parses a comma delimited array of strings', () => {
  const input = 'R1010,D422,L354,U494';
  expect(parseInput(input)).toStrictEqual(['R1010', 'D422', 'L354', 'U494']);
});

test('Returns an array if no delimiter present', () => {
  const input = '22222';
  expect(parseInput(input)).toStrictEqual([2, 2, 2, 2, 2]);
});

test('Parses present measurements', () => {
  const input = `2x3x4
  1x1x10`;
  expect(parsePresentMeasurements(input)).toStrictEqual([
    { h: 2, w: 3, l: 4 },
    { h: 1, w: 1, l: 10 },
  ]);
});

describe('parseLightInstructions', () => {
  it('parses light instructtions', () => {
    const input = `turn on 0,0 through 999,999
  toggle 0,0 through 999,0
  turn off 499,499 through 500,500`;
    expect(parseLightInstructions(input)).toStrictEqual([
      { instruction: 'turn on', x1: 0, y1: 0, x2: 999, y2: 999 },
      { instruction: 'toggle', x1: 0, y1: 0, x2: 999, y2: 0 },
      { instruction: 'turn off', x1: 499, y1: 499, x2: 500, y2: 500 },
    ]);
  });
  it('throws an error for invalid light instructtions', () => {
    const input = `turn up 0,0 through 999,999
  toggle 0,0 through 999,0
  turn off 499,499 through 500,500`;
    expect(() => parseLightInstructions(input)).toThrow(
      'turn up 0,0 through 999,999 is not a valid light instruction',
    );
  });
});
