import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Entreganos tu feedback</h1>
      <Button texto={"Good"} tipo={good} activador={setGood} />
      <Button texto={"Neutral"} tipo={neutral} activador={setNeutral} />
      <Button texto={"Bad"} tipo={bad} activador={setBad} />
      <h1>Estidisticas</h1>
      <Valor texto={"N° de buenos"} valor={good} />
      <Valor texto={"N° de neutros"} valor={neutral} />
      <Valor texto={"N° de malos"} valor={bad} />
      <Total valor1={good} valor2={neutral} valor3={bad}/>
      <Promedio valor1={good} valor2={neutral} valor3={bad}/>
      <Porcentaje buenas={good} neutras={neutral} malas={bad}/>
    </div>
  );
};

const Button = ({ texto, tipo, activador }) => {
  return <button onClick={() => activador(tipo + 1)}>{texto}</button>;
};

const Valor = ({ texto, valor }) => {
  return (
    <p>
      {texto} {valor}
    </p>
  );
};

const Total = ({ valor1, valor2, valor3 }) => {
  const suma = valor1 + valor2 + valor3;
  return (
    <>
      <p> El valor total de los puntos es {suma} </p>
    </>
  );
};

const Promedio = ({ valor1, valor2, valor3 }) => {
  const suma = (valor1 + valor2 + valor3)/3;
  return (
    <>
      <p> El valor promedio es  {suma} </p>
    </>
  );
};

const Porcentaje = ({ buenas, neutras, malas }) => {
  let porc = ((buenas*100)/(buenas + neutras + malas));
  if ((buenas === 0) && (neutras === 0) && (malas === 0)){
    porc = 0;
  }
  return (
    <>
      <p> El porcentaje es {porc} %</p>
    </>
  );
};

export default App;
