import MD5 from 'crypto-js/md5';

export const getLowestByNumberLeadingZeros = (
  input: string,
  numZeroes: number,
) => {
  let result = 0;

  while (true) {
    const hashInput = `${input}${result}`;
    if (
      MD5(hashInput)
        .toString()
        .match(new RegExp(`^0{${numZeroes}}`))
    )
      break;
    result++;
  }
  return result;
};
