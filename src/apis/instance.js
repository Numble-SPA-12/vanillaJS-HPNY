import axios from "axios";

const instance = axios.create({
  baseURL: "http://43.201.103.199",
});

export default instance;
