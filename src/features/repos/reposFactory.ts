import { Repo } from "./reposSlice";
import { Dict } from "../../interfaces";

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
