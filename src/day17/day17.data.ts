import { parseInput } from '../utils/input';

const testString = `20
15
10
5
5`;
const input = `43
3
4
10
21
44
4
6
47
41
34
17
17
44
36
31
46
9
27
38`;

export const testData = parseInput(testString) as number[];
export const data = parseInput(input) as number[];
