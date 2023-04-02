import { answer } from "./answer";
import React from "react";
import ReactDOM from "react-dom/client";
const App = () => {
  return <div>the answer to the universe is {answer}</div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
