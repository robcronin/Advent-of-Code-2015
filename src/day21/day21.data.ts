import { parseInput } from '../utils/input';

const testString = '';
const input = `Hit Points: 104
Damage: 8
Armor: 1`;
const shopItemInputString = `Weapons:    Cost  Damage  Armor
Dagger        8     4       0
Shortsword   10     5       0
Warhammer    25     6       0
Longsword    40     7       0
Greataxe     74     8       0

Armor:      Cost  Damage  Armor
Leather      13     0       1
Chainmail    31     0       2
Splintmail   53     0       3
Bandedmail   75     0       4
Platemail   102     0       5

Rings:      Cost  Damage  Armor
Damage +1    25     1       0
Damage +2    50     2       0
Damage +3   100     3       0
Defense +1   20     0       1
Defense +2   40     0       2
Defense +3   80     0       3`;

export const data = parseInput(input) as string[];
export const shopItemInput = parseInput(
  shopItemInputString,
  '\n\n',
) as string[];
