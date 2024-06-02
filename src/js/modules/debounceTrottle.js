const debouncetrottle = (callback, delay) => {
  let timeoutId = null;
  let time = 0;

  return (...arg) => {
    let timeout = time - performance.now() + delay;

    if (timeout <= 0) {
      time = performance.now();
      timeout = 0;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      time = performance.now();
      callback(...arg);
    }, timeout);
  };
};

let count = 0;
const test = debouncetrottle((i) => console.log(i), 5000);

// можно просто запускать произвольно test(count++); в консоле,
// будет срабатывать последний вызов,
// но с задержкой между вызовами в 5 секунд;

setInterval(() => test(count++), 1000);
