import React from "react";

import { fetchData } from "./controller/apiController";

const App = () => {
  const [message, setMessage] = React.useState("");

  const handleClick = async () => {
    try {
      const data = await fetchData();
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>getresponse</button>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
