export const day1 = (input: string) => {
  return [...input].reduce((acc, char) => acc + (char === '(' ? 1 : -1), 0);
};
export const day1part2 = (input: string) => {
  let result;
  let floor = 0;
  [...input].some((char, index) => {
    floor += char === '(' ? 1 : -1;
    if (floor === -1) {
      result = index + 1;
      return true;
    }
  });
  return result;
};
