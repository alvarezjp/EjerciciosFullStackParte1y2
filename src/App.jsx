import { useState, useEffect, Component } from "react";
import server from "../CodigoDeLosEjercicios/Parte2.18-2.20/server";

const App = () => {
  const [name, setName] = useState([]);
  const [search, setSearch] = useState("");
  const [nameFilter, setNameFilter] = useState([]);
  const [searchActivation, setSearchActivation] = useState(false);

  useEffect(() => {
    server.getAll().then((response) => setName(response.data));
  }, []);

  useEffect(() => {
    const data = search.toLocaleLowerCase();
    const rest = name.filter((dato) =>
      dato.name.common.toLocaleLowerCase().includes(data)
    );
    const nameCountry = rest.map((dato) => dato.name.common);
    
    if (data !== "" && nameCountry.length <= 10) {
    setNameFilter(nameCountry);
    console.log(nameFilter)
    setSearchActivation(true);
  } else {
    setSearchActivation(false);
  }
  }, [search,name]);

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchAction = (event) => {
    inputSearch(event);
    // searchNames();
  };

  // const searchNames = () => {
  //   const data = search.toLocaleLowerCase();
  //   // const resultado = name.filter((dato) => dato.name.common.include(data))
  //   const rest = name.filter((dato) =>
  //     dato.name.common.toLocaleLowerCase().includes(data)
  //   );
  //   const nameCountry = rest.map((dato) => dato.name.common);
  //   if (data !== "" && nameCountry.length <= 10) {
  //     setNameFilter(nameCountry)
  //     darValor();
  //     setSearchActivation(true);
  //   } else {
  //     setSearchActivation(false);
  //   }
  //   console.log(nameFilter);
  // };

  return (
    <div>
      <h1>Api de Paises</h1>
      <SearchCountry search={search} searchAction={searchAction} />
      <UserMessage search={search} searchActivation={searchActivation} />
      <CountryVisualization
        name={name}
        searchActivation={searchActivation}
        nameFilter={nameFilter}
      />
    </div>
  );
};

const CountryVisualization = ({ name, searchActivation, nameFilter }) => {
  {
    if (!searchActivation) {
      return (
        <>
          <Paises name={name} />
        </>
      );
    } else {
      return (
        <>
          <FilteredCountries nameFilter={nameFilter} />
        </>
      );
    }
  }
};

const Paises = ({ name }) => {
  return (
    <>
      <h2>Nombre de paises</h2>
      {name.map((nombre) => {
        return <li key={nombre.name.common}>{nombre.name.common}</li>;
      })}
    </>
  );
};
const SearchCountry = ({ search, searchAction }) => {
  return (
    <form>
      <article>
        <label htmlFor="search">Buscar Paises </label>
        <input value={search} onChange={searchAction} />
      </article>
    </form>
  );
};

const FilteredCountries = ({ nameFilter }) => {
  return (
    <>
      <h2>Nombre de paises</h2>
      <ol>
        {nameFilter.map((country, id) => {
          return (
            <>
              <li key={country + id}>{country}</li>
            </>
          );
        })}
      </ol>
    </>
  );
};
const UserMessage = ({ search, searchActivation }) => {
  if (search.length >= 1 && !searchActivation) {
    return (
      <>
        <h2>Realiza una consulta mas especifica</h2>
      </>
    );
  }
};
export default App;
