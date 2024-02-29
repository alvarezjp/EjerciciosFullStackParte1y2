import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  const hook = () => {
    console.log("efect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  };

  useEffect(hook, []);

  console.log("render", notes.length, "notes");
  console.log(notes);
};

export default App;
