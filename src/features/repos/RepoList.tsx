import React, { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Box from "../../components/Box";
import RepoCard from "./RepoCard";
import { getTrendingReposAsync, Repo, selectRepos } from "./reposSlice";

interface Props {}

const RepoList: FC<Props> = () => {
  const data = useAppSelector(selectRepos);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrendingReposAsync());
  }, []);

  return (
    <Container>
      <Row alignItems="center" justifyContent="center">
        {data.map((repo: Repo, idx: number) => (
          <Col md={3} sm={12} key={repo.fullName}>
            <Box mb="10px">
              <RepoCard {...repo} idx={idx} />
            </Box>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RepoList;
