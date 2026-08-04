function debounce(fun, dealy) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fun(...args);
    }, dealy);
  };
}

const debouncedApple = debounce(() => console.log("apple"), 2000);
debouncedApple();
