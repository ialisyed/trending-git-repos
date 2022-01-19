import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getTrendingReposAsync, selectRepos } from "./reposSlice";

interface Props {}

const Repos: FC<Props> = () => {
  const data = useAppSelector(selectRepos);

  console.log("rendering", data);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrendingReposAsync());
  }, []);

  return null;
};

export default Repos;
