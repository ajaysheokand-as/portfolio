import axios from "axios";
const instance = axios.create({
  baseURL: "https://tools-web-backend.onrender.com", // Replace with your API base URL
});

export default instance;
