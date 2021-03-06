import { Repo } from "./repoSlice";
import { Dict } from "../../interfaces";

/**
 * Create repo object as per attributes used in this project
 * @param _repo github api response repos
 * @returns Repo object
 */
export const initRepo = (_repo: Dict) => {
  const isStarred = localStorage.getItem(_repo.id);
  const repo: Repo = {
    fullName: _repo.full_name,
    stars: isStarred ? _repo.stargazers_count + 1 : _repo.stargazers_count,
    description: _repo.description,
    url: _repo.html_url,
    isStarred: !!isStarred,
    id: _repo.id,
  };
  return repo;
};
