import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const cambio = (event) => {
    setNewName(event.target.value);
  };

  const agregar = (event) => {
    event.preventDefault();
    const personObjet = {
      name: newName,
    };
    setPersons(persons.concat(personObjet));
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
          <button type="submit" onClick={agregar}>
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
