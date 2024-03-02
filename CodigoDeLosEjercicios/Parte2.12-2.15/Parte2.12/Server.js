import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObjet) => {
  return axios.post(baseUrl, newObjet);
};

const contactDelete = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const getContact = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};


export default {
  getAll,
  create,
  getContact,
  contactDelete
};
