import { subDays } from "date-fns";
import ReposService from "../services/repos";
import { queryAfterThisDate } from "../utils/dateQuery";

const LAST_SEVEN_DAYS = 7;

function getAllRepos() {
  const params = {
    q: queryAfterThisDate(subDays(new Date(), LAST_SEVEN_DAYS)),
    sort: "stars",
    order: "desc",
  };
  return ReposService.getAllRepos(params);
}

const ReposManager = {
  getAllRepos,
};

export default ReposManager;
