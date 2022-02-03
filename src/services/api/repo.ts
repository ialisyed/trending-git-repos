import { Dict } from "../../interfaces";
import httpClient, { resHandler } from "./axios";

const END_POINT = "repositories";

/**
 * Fetches github repositories using github `repositories` api
 * @param params Dictionary
 * @returns Gitub repositories response
 */
function getAllRepos(params: Dict) {
  return httpClient.get(END_POINT, { params }).then(resHandler);
}

/**
 * Service to communicaate with Repository apis of Github
 */
const RepoService = {
  getAllRepos,
};

export default RepoService;
