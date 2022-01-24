import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import ReposManager from "./reposManager";

export interface Repo {
  fullName: string;
  url: string;
  description: string;
  stars: number;
  isStarred: boolean;
}

export interface ReposState {
  data: Repo[];
  loading: boolean;
  error?: string;
}

const initialState: ReposState = {
  data: [],
  loading: false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getTrendingReposAsync = createAsyncThunk(
  "repos/getAllRepos",
  async () => {
    const response = await ReposManager.getTrendingRepos();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const reposSlice = createSlice({
  name: "repos",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    starRepo: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const repo = state.data[index];
      repo.isStarred = true;
      repo.stars += 1;
    },
    unStarRepo: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const repo = state.data[index];
      repo.isStarred = false;
      repo.stars -= 1;
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
      );
  },
});

export const { starRepo, unStarRepo } = reposSlice.actions;

export const selectRepos = (state: RootState) => state.repos.data;

export default reposSlice.reducer;
