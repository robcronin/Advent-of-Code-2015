import { parseInput } from '../utils/input';

const testString = `1
2
3
4
5
7
8
9
10
11`;
const input = `1
2
3
5
7
13
17
19
23
29
31
37
41
43
53
59
61
67
71
73
79
83
89
97
101
103
107
109
113`;

export const testData = parseInput(testString) as number[];
export const data = parseInput(input) as number[];
