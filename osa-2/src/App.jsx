const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "testi",
        exercises: 5,
        id: 4,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <Content parts={course.parts} />
      <TotalExercises parts={course.parts} />
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

// part 2.3 vastattu, koska käytin 2.2. lukumäärän laskemiseen jo reduce methodia

const TotalExercises = ({ parts }) => {
  const Total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <b>total of {Total} exercises</b>
    </p>
  );
};

export default App;
