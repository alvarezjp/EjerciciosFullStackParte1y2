const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  
    return (
      <div>
        <Header title={course}/>
        <Content parte={parts}/>
        <Total valor={parts}/>
      </div>
    )
  }
  
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
      <p>{parte[0].name} {parte[0].exercises} </p>
      <p>{parte[1].name} {parte[1].exercises} </p>
      <p>{parte[2].name} {parte[2].exercises} </p>
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
  