import { useState } from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const StatiscticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h2>Statics</h2>
      <table>
        <tbody>
          <StatiscticLine text="good" value={good} />
          <StatiscticLine text="neutral" value={neutral} />
          <StatiscticLine text="bad" value={bad} />
          <StatiscticLine text="total" value={total} />
          <StatiscticLine text="average" value={average} />
          <StatiscticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
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
      <h2>Give Feedback</h2>
      <Button onClick={handleGoodClick}>good</Button>
      <Button onClick={handleNeutralClick}> neutral </Button>
      <Button onClick={handleBadClicks}> bad </Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
