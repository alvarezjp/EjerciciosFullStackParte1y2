import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
/* API Geo ---> http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} */


const getAll = () => {
  return axios.get(baseUrl);
};

const weather = (lat,lon,key) =>{
  return axios.get(`http://my.meteoblue.com/packages/basic-1h_basic-day?lat=${lat}&lon=${lon}&apikey=${key}

  `)
}

const geoLocation = (country,code,key) => {
  return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${country},${code}&limit=1&appid=${key} `)
}

const create = (newObjet) => {
  return axios.post(baseUrl, newObjet);
};

const contactDelete = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const getContact = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

const replaceContact = (id,data) => {
  return axios.patch(`${baseUrl}/${id}`,data)
}


export default {
  getAll,
  create,
  getContact,
  contactDelete,
  replaceContact,
  weather,
  geoLocation,

};
