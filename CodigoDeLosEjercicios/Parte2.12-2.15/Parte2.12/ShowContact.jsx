import React from "react";

const ShowContact = ({showAll,persons,search}) => { // showAll
    if (showAll) {
      return <ShowAll persons={persons}  />; // persons 
    } else {
      return <ShowSearchContact persons={persons} search={search} /> ; // persons
    }
  };


  const ShowSearchContact = ({persons,search}) => {
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


  const ShowAll = ({persons}) => { // persons 
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

export default ShowContact;