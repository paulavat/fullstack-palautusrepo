import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <p>Statics</p>
      <p>good {good} </p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average{average}</p>
      <p>positive{positive}</p>
    </div>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
      <button onClick={handleBadClicks}> bad </button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
