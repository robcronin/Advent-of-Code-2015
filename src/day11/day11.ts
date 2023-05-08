export const incrementPassword = (password: string[]) => {
  let carry = 1;
  const newPassword = [];
  for (let i = password.length - 1; i >= 0; i--) {
    const newCharCode = password[i].charCodeAt(0) + carry;
    if (newCharCode === 123) {
      newPassword.push('a');
      carry = 1;
    } else {
      newPassword.push(String.fromCharCode(newCharCode));
      carry = 0;
    }
  }
  return newPassword.reverse();
};

export const hasStraight = (password: string[], length: number) =>
  password.some((_, i) => {
    if (i > password.length - length) return false;
    const char0 = password[i].charCodeAt(0);
    const char1 = password[i + 1].charCodeAt(0);
    const char2 = password[i + 2].charCodeAt(0);
    return char1 - char0 === 1 && char2 - char1 === 1;
  });

export const hasAllValidChars = (password: string[]) =>
  !password.includes('i') && !password.includes('o') && !password.includes('l');

export const hasDoubleRepeat = (password: string[]) => {
  const firstDoubleIndex = password.findIndex(
    (char, index) => char === password[index + 1],
  );
  if (firstDoubleIndex === -1) return false;

  const firstDoubleLetter = password[firstDoubleIndex];
  return password.slice(firstDoubleIndex).some((char, index) => {
    if (char === firstDoubleLetter) return false;
    return char === password[firstDoubleIndex + index + 1];
  });
};

const isValidPassword = (password: string[]) =>
  hasStraight(password, 3) &&
  hasAllValidChars(password) &&
  hasDoubleRepeat(password);

const findNextValidPassword = (password: string[]) => {
  let newPassword = incrementPassword(password);
  while (!isValidPassword(newPassword))
    newPassword = incrementPassword(newPassword);
  return newPassword;
};

export const day11 = (input: string[]) => {
  return findNextValidPassword(input).reduce((acc, char) => acc + char, '');
};

export const day11part2 = (input: string[]) => {
  const next = findNextValidPassword(input);
  return findNextValidPassword(next).reduce((acc, char) => acc + char, '');
};
