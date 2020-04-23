import React from 'react';
import { usePrevious } from 'react-hooks';

const MyApp = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <h3>
        Current value: {count}, Previous value: {prevCount}
      </h3>
      <button onClick={() => setCount(count + 1)}>Increament</button>
    </div>
  );
};

export default MyApp;
