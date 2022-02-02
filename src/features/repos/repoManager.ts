import { subDays } from "date-fns";

import RepoService from "../../services/api/repo";
import { queryAfterThisDate } from "../../utils/dateQuery";
import { initRepo } from "./repoFactory";
import { Repo, RepoFilters } from "./repoSlice";

const LAST_SEVEN_DAYS = 7;

async function getTrendingRepos(filters: RepoFilters): Promise<Repo[]> {
  const params = {
    q: queryAfterThisDate(subDays(new Date(), LAST_SEVEN_DAYS)),
  };
  const repos = await RepoService.getAllRepos({ ...params, ...filters }).then(
    (data) => data.items
  );
  return repos.map(initRepo);
}

const RepoManager = {
  getTrendingRepos,
};

export default RepoManager;
