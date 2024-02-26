import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Entreganos tu feedback</h1>
      <Button texto={"Good"} tipo={good} activador={setGood} />
      <Button texto={"Neutral"} tipo={neutral} activador={setNeutral} />
      <Button texto={"Bad"} tipo={bad} activador={setBad} />
      <Valor texto={"N° de buenos"} valor={good} />
      <Valor texto={"N° de neutros"} valor={neutral} />
      <Valor texto={"N° de malos"} valor={bad} />
 
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



export default App;
