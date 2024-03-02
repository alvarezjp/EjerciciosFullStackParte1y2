import axios from "axios";

const getPersonas = () => {
    axios.get("http://localhost:3001/persons").then(response=>{
    console.log("Lectura del json.server") ;
    console.log(response.data)})  
   }

export default getPersonas;