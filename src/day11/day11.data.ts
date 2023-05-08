import { parseInput } from '../utils/input';

const testString = 'abcdefgh';
const testString2 = 'ghijklmn';
const input = 'cqjxjnds';

export const testData = parseInput(testString) as string[];
export const testData2 = parseInput(testString2) as string[];
export const data = parseInput(input) as string[];
