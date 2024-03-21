const curriredFn = (a) => (b) => (c) => {
  return a * b * c;
};
const curriredFn2 = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};

console.log(curriredFn2(3)(3)(4));
