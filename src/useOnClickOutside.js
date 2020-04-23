import { useEffect } from 'react';

/**
 * Trigger function when user click outside the element
 *
 * @param {*} ref React ref of element you want to detect outside click
 * @param {Function} handler Function that will be called when outside clicks
 * @param {Array} additionalDeps Dependencies array to recall the effect
 */
function useOnClickOutside(ref, handler, additionalDeps = []) {
  useEffect(() => {
    const listener = (event) => {
      // Don't do anything if user click ref's children
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, ...additionalDeps]);
}

export default useOnClickOutside;
