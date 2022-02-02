import { subDays } from "date-fns";

import ReposService from "../../services/api/repos";
import { queryAfterThisDate } from "../../utils/dateQuery";
import { initRepo } from "./reposFactory";
import { Repo, RepoFilters } from "./reposSlice";

const LAST_SEVEN_DAYS = 7;

async function getTrendingRepos(filters: RepoFilters): Promise<Repo[]> {
  const params = {
    q: queryAfterThisDate(subDays(new Date(), LAST_SEVEN_DAYS)),
  };
  const repos = await ReposService.getAllRepos({ ...params, ...filters }).then(
    (data) => data.items
  );
  return repos.map(initRepo);
}

const ReposManager = {
  getTrendingRepos,
};

export default ReposManager;
