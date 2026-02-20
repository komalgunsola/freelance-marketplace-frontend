import axios from "axios";

const API = axios.create({
  baseURL: "https://freelance-marketplace-backend-dh2jsa3bd.vercel.app/api"
});

export default API;