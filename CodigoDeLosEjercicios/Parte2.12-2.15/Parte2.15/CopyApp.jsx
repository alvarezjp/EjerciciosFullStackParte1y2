import ShowContact from "../CodigoDeLosEjercicios/Parte2.12-2.15/Parte2.15/ShowContact";
import { useState, useEffect } from "react";
import server from "../CodigoDeLosEjercicios/Parte2.12-2.15/Parte2.15/server";

const App = () => {
  const [showAll, setShowAll] = useState(true);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    server.getAll().then((response) => {
      // console.log(response.data);
      setPersons(response.data);
    });
  }, []);

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
    const verificacion = persons
      .map((persona) => persona.name.toLowerCase())
      .includes(nombre.name.toLowerCase());
    const datos = persons.find(
      (contacto) => contacto.name.toLowerCase() === nombre.name.toLowerCase()
    );
    if (verificacion) {
      updateData(nombre, datos);
    } else {
      agregarNombre(nombre);
    }
  };

  const updateData = (nombre, datos) => {
    const pregunta = window.confirm(
      `El nombre ${nombre.name} ya se encuentra agregado en la lista. ¿Quire modificar los datos anteriores por los que agrego ahora?`
    );
    if (pregunta) {
      console.log("console.log de los datos ->>>>", datos.id);
      server.replaceContact(datos.id, nombre).then((response) => {
        setPersons(prePerson =>
          prePerson.map(contact =>
            contact.name.toLowerCase() !== nombre.name.toLowerCase() ? contact : response.data
          )
        );
      });
    }
  };

  const agregarNombre = (objeto) => {
    server.create(objeto).then((response) => {
      console.log(response);
      setPersons(persons.concat(response.data));
      setNewName("");
      setNewNumber("");
    });
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
        <ShowContact
          showAll={showAll}
          persons={persons}
          search={search}
          setPersons={setPersons}
        />
      </ol>
    </div>
  );
};

export default App;
