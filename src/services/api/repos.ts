import { Dict } from "../../interfaces";
import httpClient, { resHandler } from "./axios";

const END_POINT = "repositories";

function getAllRepos(params: Dict) {
  return httpClient.get(END_POINT, { params }).then(resHandler);
}

const ReposService = {
  getAllRepos,
};

export default ReposService;
