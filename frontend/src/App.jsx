import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  async function handleRequest() {
    try {
      const response = await fetch("http://127.0.0.1:8000/");
      const result = await response.json();
      if (result) {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage(error);
    }
  }
  return (
    <div>
      <button onClick={handleRequest}>getResponse</button>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
