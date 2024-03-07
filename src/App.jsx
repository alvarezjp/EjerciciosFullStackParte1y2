import { useState, useEffect } from "react";
import server from "../CodigoDeLosEjercicios/Parte2.18-2.20/server";

const App = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    server.getAll().then((response) => setName(response.data));
  }, []);

  name.map((nombre) => console.log(nombre));

  const Paises = () => {
    return (
      <>
        <h2>Nombre de paises</h2>
        {name.map((nombre) => {
          return <li key={nombre.name.common}>{nombre.name.common}</li>;
        })}
      </>
    );
  };

  const SearchCountry = () => {
     return ( 
      <form>
          <label htmlFor="search">Buscar Pais </label>
          <input type="text" placeholder="Ingresa un nombre de pais" />
      </form>
    )
  }

  return (
    <div>
      <h1>Api de Paises</h1>
      <SearchCountry/>
      <Paises />
    </div>
  );
};

export default App;
