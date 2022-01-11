import ReposService from "../services/repos";

function getAllRepos() {
  const params = {
    q: "created:>2012-01-02",
    sort: "stars",
    order: "desc",
  };
  return ReposService.getAllRepos(params);
}

const ReposManager = {
  getAllRepos,
};

export default ReposManager;
