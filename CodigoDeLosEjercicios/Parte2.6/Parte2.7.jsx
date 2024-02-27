import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const cambio = (event) => {
    setNewName(event.target.value);
  };

  const crearPersona = (event) => {
    event.preventDefault();
    const personObjet = {
      name: newName,
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
    }else{
      agregarNombre(nombre)
    }
  };
  

  const agregarNombre = (objeto) => {
    setPersons(persons.concat(objeto));
    setNewName("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={cambio} />
        </div>
        <div>
          <button type="submit" onClick={crearPersona}>
            Agregar
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {persons.map((persona) => {
          return <li key={persona.name}>{persona.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
