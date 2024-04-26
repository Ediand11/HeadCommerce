export function throttle(fun: Function, delay: number) {
  let flag = true;
  return function () {
    if (flag) {
      fun();
      flag = false;
      setTimeout(() => (flag = true), delay);
    }
  };
}
