const App = () => {
    const course = "Half Stack application development";
    const parts = [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ];
  
    return (
      <div>
        <Header title={course} />
        <Content parte={parts[0]} />
        <Content parte={parts[1]} />
        <Content parte={parts[2]} />
        <Total valor={parts}/>
      </div>
    );
  };
  
  const Header = ({ title }) => {
    return (
      <>
        <h1>{title}</h1>
      </>
    );
  };
  
  const Content = ({ parte }) => {
    return (
      <>
        <p>
          {parte.name} {parte.exercises}
        </p>
      </>
    );
  };
  
  const Total = ({ valor }) => {
    const suma = valor[0].exercises+valor[1].exercises+valor[2].exercises;
    return (
      <>
        <p>El numero total de ejercicios es de {suma}</p>
      </>
    );
  };
  export default App;