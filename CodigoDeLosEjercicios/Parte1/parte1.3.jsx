const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
    return (
      <div>
        <Header title={course}/>
        <Content props={part1}/>
        <Content props={part2}/>
        <Content props={part3}/>
        <Total v1={part1} v2={part2} v3={part3}/>
  
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
  
  const Content = ({ props }) => {
    return (
      <>
        <p>{props.name} {props.exercises} </p>
      </>
    );
  };
  
  const Total = ({ v1,v2,v3 }) => {
    console.log(v1,v2,v3);
    const suma = v1.exercises+v2.exercises+v3.exercises;
    console.log(suma);
    return (
      <>
        <p>El numero total de ejercicios es de {suma}</p>
      </>
    );
  };