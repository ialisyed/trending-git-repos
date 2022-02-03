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

/**
 * Data manager for repositories
 */
const RepoManager = {
  getReposInLastSevenDaysAsync,
};

export default RepoManager;
