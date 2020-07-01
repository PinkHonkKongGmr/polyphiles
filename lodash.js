export const chunk = (array, size) => {
  if (array instanceof Array && typeof size === "number") {
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
