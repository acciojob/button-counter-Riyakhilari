
import React, { useState } from 'react';
import './../styles/App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Button clicked 0 times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default App
