/*
    task-optional-00
*/
export const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

/*
    task-optional-01
*/
export const fibonacci = (index) => {
  if (index < 0) return -1;
  if (index === 0) return 0;
  if (index === 1) return 1;
  return fibonacci(index - 1) + fibonacci(index - 2);
};

/*
    task-optional-02
*/
export const isFalsy = (value) => {
  return !value;
};

/*
    task-optional-03
*/
export const palindrome = (str) => {
  return str === str.split('').reverse().join('');
};

/*
    task-optional-04
*/
export const keepRepeated = (str) => {
  const map = new Map();

  for (const char of str) {
    const key = char.toLowerCase();
    map.set(key, (map.get(key) || 0) + 1);
  }

  return [...str].filter((char) => map.get(char.toLowerCase()) > 1).join('');
};

/*
    task-optional-05
*/
export const uniqueChars = (str) => {
  const seen = new Set();
  let result = '';

  for (const char of str) {
    const key = char.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      result += char;
    }
  }

  return result;
};