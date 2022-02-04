import { subDays } from "date-fns";

import RepoService from "../../services/api/repo";
import { queryAfterThisDate } from "../../utils/dateQuery";
import { initRepo } from "./repoFactory";
import { Repo, RepoFilters } from "./repoSlice";

const LAST_SEVEN_DAYS = 7;

/**
 * Fetch repositories created in last 7 days
 * @param filters Object of type RepoFilters
 * @returns Promise for trending repos in last week
 */
async function getReposInLastSevenDaysAsync(
  filters: RepoFilters
): Promise<Repo[]> {
  const params = {
    q: queryAfterThisDate(subDays(new Date(), LAST_SEVEN_DAYS)),
  };
  const repos = await RepoService.getAllRepos({ ...params, ...filters }).then(
    (data) => data.items
  );
  return repos.map(initRepo);
}

function getRepoById(data: Repo[], id: number) {
  const index = data.findIndex((_repo) => _repo.id === id);
  return data[index];
}

/**
 * Data manager for repositories
 */
const RepoManager = {
  getReposInLastSevenDaysAsync,
  getRepoById,
};

export default RepoManager;
