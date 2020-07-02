// лень писать проверки, представим что они есть

const objectEntriesPolyfill = (obj) => {
  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys.reduce((arr, cur) => arr.concat([[cur, obj[cur]]]), []);
};

const objectFromEntriesPolyfill = (arr) => {
  return arr.reduce(
    (obj, cur) =>
      Object.defineProperty(obj, cur[0], { value: cur[1], enumerable: true }),
    {}
  );
};
