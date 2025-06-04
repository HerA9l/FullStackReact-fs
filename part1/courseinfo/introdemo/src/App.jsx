const Header = () => {
  return <h1>Half Stack application development</h1>;
};

const Content = () => {
  return (
    <div>
      <p>Part 1: Fundamentals of React - 10 exercises</p>
      <p>Part 2: Using props to pass data - 7 exercises</p>
      <p>Part 3: State of a component - 14 exercises</p>
    </div>
  );
};

const Total = () => {
  return <p>Number of exercises: 31</p>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;
