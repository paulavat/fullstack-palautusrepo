import { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa

  const Button = ({ onClick }) => {
    <button onClick={onClick}></button>;
  };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClicks = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <p>Give Feedback</p>
      <button onClick={handleGoodClick}> good </button>
      <button onClick={handleNeutralClick}> neutral </button>
      <button onClick={() => setBad(bad + 1)}> bad </button>
      <p>Statics</p>
      <p>{allClicks.join("")}</p>
      <p>good {good} </p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
