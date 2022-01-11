import { AxiosResponse } from "axios";
import { Dict } from "../interfaces";
import httpClient from "./axios";

const END_POINT = "repositories";

const resHandler = (res: AxiosResponse) => res.data;

function getAllRepos(params: Dict) {
  return httpClient.get(END_POINT, { params }).then(resHandler);
}

const ReposService = {
  getAllRepos,
};

export default ReposService;
