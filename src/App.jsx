import ShowContact from "../CodigoDeLosEjercicios/Parte2.12-2.15/Parte2.12/ShowContact";
import { useState,useEffect, useReducer } from "react";
import getPersonas from "../CodigoDeLosEjercicios/Parte2.12-2.15/Parte2.12/Server";

const App = () => {
  const [showAll, setShowAll] = useState(true);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [persons, setPersons] = useState([
  ]);


  useEffect(getPersonas,[]);
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
    let verificacion = persons  // persons
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
    setPersons(persons.concat(objeto)); // persons
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
        
        <ShowContact showAll={showAll} persons={persons} search={search} /> // persons
      </ol>
    </div>
  );
};

export default App;
