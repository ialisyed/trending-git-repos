import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_ENDPOINT,
});

export default httpClient;
