import { Repo } from "./reposSlice";
import { Dict } from "../../interfaces";

export const initRepo = (_repo: Dict) => {
  const repo: Repo = {
    fullName: _repo.full_name,
    stars: _repo.stargazers_count,
    description: _repo.description,
    url: _repo.html_url,
    isStarred: false,
  };
  // add local storage mapping here.
  return repo;
};
