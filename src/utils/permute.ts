export const getPermuatations = <T>(inputArr: Array<T>): Array<Array<T>> => {
  const result: Array<Array<T>> = [];

  const permute = (arr: Array<T>, m: Array<T> = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};
