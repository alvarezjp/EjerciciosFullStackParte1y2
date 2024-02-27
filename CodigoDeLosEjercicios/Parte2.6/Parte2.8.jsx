import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas",number:"888 555 333" }]);
  const [newName, setNewName] = useState("");
  const [newNumber,setNewNumber]= useState("")

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
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={cambioNombre} />
          <div />
          <div>
            number: <input value={newNumber} onChange={cambioNumero}/>
          </div>
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
          return <li key={persona.name}> {persona.name} {persona.number}  </li>;
        })}
      </ol>
    </div>
  );
};

export default App;
