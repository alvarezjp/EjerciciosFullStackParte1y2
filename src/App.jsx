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
      setSearchActivation(true);
    } else {
      setSearchActivation(false);
    }
  }, [search, name]);

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchAction = (event) => {
    inputSearch(event);
  };

  return (
    <div>
      <h1>Api de Paises</h1>
      <SearchCountry search={search} searchAction={searchAction} />
      <UserMessage
        search={search}
        searchActivation={searchActivation}
        nameFilter={nameFilter}
      />
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
    }
    if (searchActivation && nameFilter.length > 1) {
      return (
        <>
          <FilteredCountries nameFilter={nameFilter} />
        </>
      );
    } else {
      return (
        <>
          <CountryDetail nameFilter={nameFilter} name={name} />
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
const UserMessage = ({ search, searchActivation, nameFilter }) => {
  if (
    (search.length >= 1 && !searchActivation) ||
    (search.length >= 1 && nameFilter.length === 0)
  ) {
    return (
      <>
        <h2>Realiza una consulta mas especifica</h2>
      </>
    );
  }
};

const CountryDetail = ({ nameFilter,name }) => {
console.log(name.find  ( dato => dato.name.common === " chile"));

  return (
    <>
      <h2>Nombre de paises</h2>
      <h4>Esto es el contry detail</h4>
    </>
  );
};
export default App;
