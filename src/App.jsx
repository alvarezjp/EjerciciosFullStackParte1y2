import { useState, useEffect } from "react";
import server from "../CodigoDeLosEjercicios/Parte2.18-2.20/server";

const App = () => {
  const [name, setName] = useState([]);
  const [search, setSearch] = useState("algo");

  useEffect(() => {
    server.getAll().then((response) => setName(response.data));
  }, []);

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

const searchCountry = () => {
  const data = search.toLocaleLowerCase()
  // const resultado = name.filter((dato) => dato.name.common.include(data))
 const rest = name.filter(dato => dato.name.common.toLocaleLowerCase().includes(data));
 console.log(rest.map(dato => dato.name.common));
}

searchCountry();

  // name.filter((nombre) => nombre.name.common.include(comparacion => comparacion === "Kuwait")); // ----------> para poder ver datos en consola

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

  return (
    <div>
      <h1>Api de Paises</h1>
      <SearchCountry search={search} inputSearch={inputSearch}  />
      <Paises />
    </div>
  );
};

const SearchCountry = ({ search, inputSearch }) => {
  return (
    <form>
      <article>
        <label htmlFor="search">Buscar Paises </label>
        <input value={search} onChange={inputSearch} />
      </article>
    </form>
  );
};

export default App;
