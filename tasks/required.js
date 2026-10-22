/*
    task-00
    Создайте функцию, которая возвращает строку "Hello, World!"
*/
export const helloWorld = () => {
  const str = "Hello, World!";
  console.log(str);
  return str;
};

/*
    task-01
    Создайте функцию, которая принимает и возвращает эту же строку
*/
export const getString = (str) => {
  return str;
};

/*
    task-02
*/
export const getLength = (arr) => {
  return arr.length;
};

export const getFirst = (arr) => {
  return arr[0];
};

export const getLast = (arr) => {
  return arr[arr.length - 1];
};

export const pushElement = (arr, elem) => {
  arr.push(elem);
  return arr;
};

export const popElement = (arr) => {
  return arr.pop();
};

/*
    task-03
*/
export const getAnimalDescription = (obj) => {
  const { animal, legs, color } = obj;
  return `The ${color} ${animal} has ${legs} legs`;
};

/*
    task-04
*/
export const getObjKeys = (obj) => {
  return Object.keys(obj);
};

export const getObjValues = (obj) => {
  return Object.values(obj);
};

/*
    task-05
*/
export const patchObj = (obj, updates) => {
  return { ...obj, ...updates };
};

/*
    task-06
*/
export const deleteItem = (arr, item) => {
  return arr.filter((el) => el !== item);
};

/*
    task-07
*/
export const multiplyByTwo = (arr) => {
  return arr.map((num) => num * 2);
};

/*
    task-08
*/
export const getAssessments = (arr) => {
  const result = { 5: 0, 4: 0, 3: 0, 2: 0 };

  arr.forEach((count) => {
    if (count === 10) result[5]++;
    else if (count >= 8) result[4]++;
    else if (count >= 5) result[3]++;
    else result[2]++;
  });

  return result;
};

/*
    task-09
*/
export const hasBoolean = (arr) => {
  return arr.some((el) => typeof el === "boolean");
};

export const isStringArray = (arr) => {
  if (arr.length === 0) return false;
  return arr.every((el) => typeof el === "string");
};

/*
    task-10
*/
export const return2007 = (str) => {
  return (
    str
      .split("")
      .map((char, index) => {
        let c = char === "В" || char === "в" ? "Ф" : char;
        c = index % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
        return c;
      })
      .join("") + ":*"
  );
};