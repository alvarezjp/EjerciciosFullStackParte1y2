import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [voto,setVoto] = useState((new Array(8).fill(0)))
  const [selected, setSelected] = useState(0);
  


  console.log("valor pre votacion voto        :", voto);
  // console.log(numRandom);


  const votacion = () => {
    setVoto(copy => {
      const NewCopy = [...copy];
      NewCopy[selected]+=1;
      console.log("valor ya votado:",NewCopy);
      return NewCopy;
    })
  };
  const click = () => {
    let numRandom = Math.floor(Math.random() * 8);
    console.log("numero random-----> ",numRandom)
    return setSelected(numRandom);
  };

  return (
    <div>
      <article>{anecdotes[selected]}</article>
      <article>Esta anecdota tiene {voto[selected]} votaciones</article>
      <Button func={votacion} texto={"Votar"} />
      <Button func={click} texto={"Siguiente anecdota"} />
    </div>
  );
};

const Button = ({ func, texto }) => {
  return <button onClick={func}>{texto}</button>;
};

export default App;
