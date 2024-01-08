import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Ви натиснули ${count} разів`;
  });

  return (
    <div className="App">
      <div>
        <p>Ви натиснули {count} разів</p>
        <button onClick={() => setCount(count + 1)}>Натисни мене</button>
      </div>
    </div>
  );
}

export default App;
