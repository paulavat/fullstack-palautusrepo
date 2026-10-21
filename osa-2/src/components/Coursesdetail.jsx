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

export default Course;
