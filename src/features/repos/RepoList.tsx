import React, { FC, useEffect, useState } from "react";
import { Col, Row } from "styled-bootstrap-grid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Box from "../../components/Box";
import { getTrendingReposAsync, Repo, selectRepos } from "./reposSlice";

interface Props {}

const Repos: FC<Props> = () => {
  const data = useAppSelector(selectRepos);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrendingReposAsync());
  }, []);

  return (
    <Row>
      {data.map((repo: Repo) => (
        <Col sm={12} md={6} xl={4} key={repo.fullName}>
          <Box mb="md">{repo.fullName}</Box>
        </Col>
      ))}
    </Row>
  );
};

export default Repos;
