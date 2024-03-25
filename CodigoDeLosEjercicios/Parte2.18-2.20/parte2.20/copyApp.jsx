import { useState, useEffect, Component } from "react";
import server from "../CodigoDeLosEjercicios/Parte2.18-2.20/parte2.20/server";

const App = () => {
  const [name, setName] = useState([]);
  const [search, setSearch] = useState("");
  const [nameFilter, setNameFilter] = useState([]);
  const [searchActivation, setSearchActivation] = useState(false);
  const [btnDetails, setBtnDetails] = useState([""]);

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

  const obtainInfo = (searchedName) => {
    const country = searchedName.toLowerCase();
    if (country === btnDetails[0]) {
      setBtnDetails([""]);
    } else {
      setBtnDetails([searchedName.toLowerCase()]);
    }
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
        obtainInfo={obtainInfo}
        btnDetails={btnDetails}
      />
    </div>
  );
};

const CountryVisualization = ({
  name,
  searchActivation,
  nameFilter,
  search,
  obtainInfo,
  btnDetails,
}) => {
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
          <FilteredCountries
            nameFilter={nameFilter}
            obtainInfo={obtainInfo}
            name={name}
            btnDetails={btnDetails}
          />
        </>
      );
    }
    if (searchActivation && nameFilter.length === 1) {
      return (
        <>
          <CountryDetail nameFilter={nameFilter} name={name} search={search} />
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

const FilteredCountries = ({ nameFilter, obtainInfo, name, btnDetails }) => {
  return (
    <>
      <h2>Nombre de paises</h2>
      <ol>
        {nameFilter.map((country, id) => {
          return (
            <>
              <li key={country}>
                {country}
                <BtnInfoCountry
                  country={country}
                  obtainInfo={obtainInfo}
                  name={name}
                />
              </li>
              <DetailView
                country={country}
                btnDetails={btnDetails}
                name={name}
              />
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

const CountryDetail = ({ nameFilter, name }) => {
  const languages = [];
  const info = name.find(
    (country) =>
      country.name.common.toLowerCase() === nameFilter[0].toLowerCase()
  );
  for (const leg in info.languages) {
    if (Object.hasOwnProperty.call(info.languages, leg)) {
      const value = info.languages[leg];
      languages.push(value);
    }
  }

  return (
    <>
      <h2>{info.name.common}</h2>
      <p>
        Su capital es: <b>{info.capital}</b>
      </p>
      <p>
        Su ares es: <b>{info.area}</b>
      </p>
      <p>Los idiomas que hablan son:</p>
      <ol>
        {languages.map((names) => {
          return <li key={names}>{names}</li>;
        })}
      </ol>
      <h3>Bandera</h3>
      <img src={info.flags.png} alt="" />
      <ViewWeather info={info} />
    </>
  );
};

const BtnInfoCountry = ({ country, obtainInfo, name }) => {
  return <button onClick={() => obtainInfo(country)}>Ver detalles</button>;
};

const DetailView = ({ country, btnDetails, name }) => {
  {
    if (country.toLowerCase() === btnDetails[0]) {
      return (
        <>
          <CountryDetail nameFilter={btnDetails} name={name} />
        </>
      );
    }
  }
};
const ViewWeather = ({ info }) => {
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);

  const capital = info.capital[0];
  const code = info.cca2;
  server
    .geoLocation(capital, code, import.meta.env.ALGO)
    .then((response) => {
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      const clave = import.meta.env.VITE_SOME_KEY;
      server.weather(lat, lon, clave).then((response) => {
        console.log("dato dia ----->", response.data);
        setTempMax(response.data.data_day.temperature_max[0]);
        setTempMin(response.data.data_day.temperature_min[0]);

        console.log(tempMax, tempMin);
      });
    });
  return (
    <article style={{background:"#F5F5F5"}}>
      <h2>Temperatura</h2>
      <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" style={{width:"100px"}}/>
      <p>Temperatura Minima: {tempMin} °C</p>
      <p>Temperatura Maxima: {tempMax} °C</p>
    </article>
  );
};

export default App;
