export const debounce = <F extends (...args: any[]) => any>(func: F, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId!);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
