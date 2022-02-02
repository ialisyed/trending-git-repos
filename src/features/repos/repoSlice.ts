import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import LOCALE from "../../locale";
import RepoManager from "./repoManager";

export interface Repo {
  fullName: string;
  url: string;
  description: string;
  stars: number;
  isStarred: boolean;
  id: number;
}

export interface RepoFilters {
  sort: "stars" | string;
  order: "asc" | "desc";
}

interface LocalRepoFilters {
  starred: boolean;
}

interface RepoState {
  data: Repo[];
  loading: boolean;
  error?: string;
  filters: RepoFilters;
  localFilters: LocalRepoFilters;
}

const initialState: RepoState = {
  data: [],
  loading: false,
  filters: {
    sort: "stars",
    order: "desc",
  },
  localFilters: {
    starred: false,
  },
};

export const getTrendingReposAsync = createAsyncThunk(
  "repo/getAllRepos",
  async (arg, { getState }) => {
    const state = getState() as RootState;
    const response = await RepoManager.getTrendingRepos(state.repo.filters);
    return response;
  }
);

export const repoSlice = createSlice({
  name: "repo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    starRepo: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const repo = state.data[index];
      repo.isStarred = true;
      repo.stars += 1;
      localStorage.setItem(repo.id.toString(), "1");
    },
    unStarRepo: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const repo = state.data[index];
      repo.isStarred = false;
      repo.stars -= 1;
      localStorage.removeItem(repo.id.toString());
    },
    setStarredFilter: (state, action: PayloadAction<boolean>) => {
      state.localFilters.starred = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingReposAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getTrendingReposAsync.fulfilled,
        (state, action: PayloadAction<Repo[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(getTrendingReposAsync.rejected, (state) => {
        state.error = LOCALE.SOMETHING_WENT_WRONG;
        state.loading = false;
      });
  },
});

export const { starRepo, unStarRepo, setStarredFilter } = repoSlice.actions;

export const selectRepos = (state: RootState) => state.repo.data;

export const selectStarredRepos = createSelector([selectRepos], (repos) =>
  repos.filter((repos) => repos.isStarred)
);
export const selectLocalFilters = (state: RootState) => state.repo.localFilters;

export const selectComputedRepos = createSelector(
  [selectLocalFilters, selectRepos, selectStarredRepos],
  (localFilters, repos, starredRepos) =>
    localFilters.starred ? starredRepos : repos
);

export const selectRepoError = (state: RootState) => state.repo.error;

export const selectRepoLoading = (state: RootState) => state.repo.loading;

export default repoSlice.reducer;
