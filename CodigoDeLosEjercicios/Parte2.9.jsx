import { useState } from "react";

const App = () => {
  const [showAll, setShowAll] = useState(true);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "888 555 333" },
    { name: "arto Hollas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const changeInSearch = (event) => {
    setSearch(event.target.value);
    let valor = "";
    valor = event.target.value.toLowerCase();
    verifySearch(valor);
  };
  const cambioNombre = (event) => {
    setNewName(event.target.value);
  };
  const cambioNumero = (event) => {
    setNewNumber(event.target.value);
  };

  const crearPersona = (event) => {
    event.preventDefault();
    const personObjet = {
      name: newName,
      number: newNumber,
    };
    verificarNombre(personObjet);
  };

  const verificarNombre = (nombre) => {
    let verificacion = persons
      .map((persona) => persona.name)
      .includes(nombre.name);
    console.log(
      `El nombre a comparar fue ${nombre.name} y la verificacion esta en ${verificacion}`
    );
    if (verificacion) {
      alert(`El nombre ${nombre.name} ya se encuentra agregado en la lista`);
    } else {
      agregarNombre(nombre);
    }
  };

  const agregarNombre = (objeto) => {
    setPersons(persons.concat(objeto));
    setNewName("");
    setNewNumber("");
  };
  const verifySearch = (valor) => {
    if (valor !== "") {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };
  const ShowAll = () => {
    return (
      <>
        {persons.map((persona) => {
          return (
            <li key={persona.name}>
              {persona.name} {persona.number}
            </li>
          );
        })}
      </>
    );
  };

  const ShowSearchContact = () => {
    const filtrado = persons.filter((elemento) =>
      elemento.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <>
        {filtrado.map((persona) => {
          return (
            <li key={persona.name}>
              {persona.name} {persona.number}
            </li>
          );
        })}
      </>
    );
  };

  const ShowContact = () => {
    if (showAll) {
      return <ShowAll />;
    } else {
      return <ShowSearchContact />;
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label htmlFor="search">Buscar </label>
        <input type="text" value={search} onChange={changeInSearch} />
      </div>
      <form>
        <h2>Add a new</h2>
        <div>
          <article>
            <label htmlFor="fname">Nombre </label>
            <input value={newName} onChange={cambioNombre} />
          </article>
          <article>
            <label htmlFor="fnumber">Numero </label>
            <input value={newNumber} onChange={cambioNumero} />
          </article>
        </div>
        <div>
          <button type="submit" onClick={crearPersona}>
            Agregar
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        <ShowContact />
      </ol>
    </div>
  );
};

export default App;
