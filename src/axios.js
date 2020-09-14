import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-feb1e.cloudfunctions.net/api",
  // "http://localhost:5001/clone-feb1e/us-central1/api",
});

export default instance;
