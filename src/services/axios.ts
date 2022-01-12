import axios, { AxiosResponse } from "axios";

export const resHandler = (res: AxiosResponse) => res.data;

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_ENDPOINT,
});

export default httpClient;
