import { useRef, useEffect } from 'react';

/**
 * Get the previous value of a variable, equivalent to prevState / prevProps
 *
 * @param {*} value Value that you want to get the previous data of it
 * @param {Array} additionalDeps Dependencies array to recall the effect
 */
function usePrevious(value, additionalDeps = []) {
  // This ref object will be used to store previous value
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value, ...additionalDeps]);

  // Previous value
  return ref.current;
}

export default usePrevious;
