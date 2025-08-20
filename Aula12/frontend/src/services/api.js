import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api" // 🚀 aponta para o backend
});

export default api;
