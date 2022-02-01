import React, { FC, useEffect } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Box from "../../components/Box";
import CheckboxLabel from "../../components/ChecboxLabel";
import Checkbox from "../../components/Checkbox";
import Flex from "../../components/Flex";
import LOCALE from "../../locale";
import RepoCard from "./RepoCard";
import {
  getTrendingReposAsync,
  Repo,
  selectComputedRepos,
  selectLocalFilters,
  setStarredFilter,
} from "./reposSlice";

interface Props {}

const RepoList: FC<Props> = () => {
  const data = useAppSelector(selectComputedRepos);
  const localFilters = useAppSelector(selectLocalFilters);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrendingReposAsync());
  }, []);

  const renderRepos = () =>
    data.map((repo: Repo, idx: number) => (
      <Col md={3} sm={12} key={repo.fullName}>
        <Box mb="10px">
          <RepoCard {...repo} idx={idx} />
        </Box>
      </Col>
    ));

  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" mb="10px">
        <label>
          <Checkbox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(setStarredFilter(e!.target.checked))
            }
            checked={localFilters.starred}
          />
          <CheckboxLabel>{LOCALE.VIEW_ALL_STARRED_REPOS}</CheckboxLabel>
        </label>
      </Flex>
      <Row data-cy="repo-list" alignItems="center" justifyContent="center">
        {renderRepos()}
      </Row>
    </Container>
  );
};

export default RepoList;
