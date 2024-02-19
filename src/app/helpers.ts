export const sleep = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(null);
    }, ms);
  });
};
