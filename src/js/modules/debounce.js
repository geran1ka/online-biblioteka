export const debounce = (cb, msec) => {
  let idTimeout;

  return (...args) => {
    clearTimeout(idTimeout);

    idTimeout = setTimeout(() => {
      cb(...args);
    }, msec);
  };
};
