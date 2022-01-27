import { subDays } from "date-fns";
import { initRepo } from "./reposFactory";
import ReposService from "../../services/repos";
import { queryAfterThisDate } from "../../utils/dateQuery";
import { Repo } from "./reposSlice";

const LAST_SEVEN_DAYS = 7;

async function getTrendingRepos(): Promise<Repo[]> {
  const params = {
    q: queryAfterThisDate(subDays(new Date(), LAST_SEVEN_DAYS)),
    sort: "stars",
    order: "desc",
  };
  const repos = await ReposService.getAllRepos(params).then(
    (data) => data.items
  );
  return repos.map(initRepo);
}

const ReposManager = {
  getTrendingRepos,
};

export default ReposManager;
