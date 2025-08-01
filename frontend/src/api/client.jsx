import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Uses .env value
  withCredentials: true
});

export default client;
