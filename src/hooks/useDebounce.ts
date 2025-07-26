import { useEffect, useState } from "react";

/**
 * Debounce a value after a specified delay.
 * @param value - Value to debounce
 * @param delay - Debounce delay in ms
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
