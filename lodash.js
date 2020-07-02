export const chunk = (array, size) => {
  if (array instanceof Array && typeof size === "number") {
    if (!size) {
      return null;
    }
    if (array.length <= size) {
      return [array];
    }
    return [
      array.concat([]).splice(0, size),
      ...chunk(array.concat([]).splice(size), size),
    ];
  } else {
    throw new Error("should be an Array and number");
  }
};

export const compact = (array) =>
  array.filter(
    (el) =>
      el !== null &&
      el !== "undefined" &&
      el !== 0 &&
      el !== false &&
      el !== NaN &&
      el !== ""
  );

export const _concat = (...args) =>
  args.reduce(
    (arr, cur) => (cur instanceof Array ? [...arr, ...cur] : [...arr, cur]),
    []
  );
