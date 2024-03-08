import React from "react";
import server from "./server";

const ShowContact = ({ showAll, persons, search, setPersons }) => {
  // showAll
  if (showAll) {
    return <ShowAll persons={persons} setPersons={setPersons} />; // persons
  } else {
    return (
      <ShowSearchContact
        persons={persons}
        search={search}
        setPersons={setPersons}
      />
    ); // persons
  }
};

const ShowSearchContact = ({ persons, search, setPersons }) => {
  const filtrado = persons.filter((elemento) =>
    elemento.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(persons)
  return (
    <>
      {filtrado.map((persona) => {
        return (
          <li key={persona.name}>
            {persona.name} {persona.number}
            <BotonDelete id={persona.id} setPersons={setPersons} />
          </li>
        );
      })}
    </>
  );
};

const ShowAll = ({ persons, setPersons }) => {
  // persons
  return (
    <>
      {persons.map((persona) => {
        return (
          <li key={persona.name}>
            {persona.name} {persona.number} 
            <BotonDelete id={persona.id} setPersons={setPersons} />
          </li>
        );
      })}
    </>
  );
};

const BotonDelete = ({ id, setPersons }) => {
  const clickButon = (event) => {
    const key = event.target.id;
    messageDelete(key, setPersons);
  };
  return (
    <button id={id} onClick={clickButon}>
      Delete
    </button>
  );
};

const messageDelete = (id, setPersons) => {
  server
    .getContact(id)
    .then((response) => {
      const pregunta = confirm(
        `Seguro que desea eliminar a --> " ${response.data.name}"`
      );
      if (pregunta) {
        deleteContact(id, setPersons);
      }
    })
    .catch((err) => alert("No se logro encontrar el contacto para eliminar"));
};
const deleteContact = (id, setPersons) => {
  server
    .contactDelete(id)
    .then((response) => {
      setPersons((prePersons) =>
        prePersons.filter((contact) => contact.id !== id)
      );
    })
    .catch((err) => alert("No se pudo eliminar el contacto"));
};

export default ShowContact;
