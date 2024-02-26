const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header title={course} />

      <Content  ejercicios={exercises1} />
      <Content  ejercicios={exercises2} />
      <Content  ejercicios={exercises3} />
     

      <Total valor1={exercises1} valor2={exercises2} valor3={exercises3} />
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

const Content = ({ parte, ejercicios }) => {
  return (
    <>
      <p>
        {parte} {ejercicios}
      </p>
    </>
  );
};

const Total = ({ valor1, valor2, valor3 }) => {
  const suma =valor1+valor2+valor3;
  return (
    <>
      <p>El numero total de ejercicios es de {suma}</p>
    </>
  );
};
export default App;

