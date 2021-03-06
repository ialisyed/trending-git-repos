import React, { FC, useEffect } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import LOCALE from "../../locale";
import Box from "../../components/Box";
import CheckboxLabel from "../../components/ChecboxLabel";
import Checkbox from "../../components/Checkbox";
import Flex from "../../components/Flex";
import RepoCard from "./RepoCard";
import {
  getTrendingReposAsync,
  Repo,
  selectComputedRepos,
  selectLocalFilters,
  selectRepoError,
  selectRepoLoading,
  setStarredFilter,
} from "./repoSlice";

interface Props {}

const RepoList: FC<Props> = () => {
  /** Repos array */
  const data = useAppSelector(selectComputedRepos);

  /** repo error state array */
  const error = useAppSelector(selectRepoError);

  /** repo loading state array */
  const loading = useAppSelector(selectRepoLoading);

  /** repo localfilter state array */
  const localFilters = useAppSelector(selectLocalFilters);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrendingReposAsync());
  }, []);

  /**
   * update local filter for starred repos in the repo state
   */
  const onCheckboxChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setStarredFilter(e!.target.checked)),
    []
  );

  if (loading) {
    // can be replaced with a loader
    return (
      <Flex alignItems="center" justifyContent="center" mb="10px">
        <label>Loading...</label>
      </Flex>
    );
  }

  if (error) {
    // error message/handling can be improved
    return (
      <Flex alignItems="center" justifyContent="center" mb="10px">
        <label>{error}</label>
      </Flex>
    );
  }

  const renderRepos = () =>
    data.map((repo: Repo) => (
      <Col md={3} sm={12} key={repo.fullName}>
        <Box mb="10px">
          <RepoCard {...repo} />
        </Box>
      </Col>
    ));

  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" mb="10px">
        <label>
          <Checkbox
            onChange={onCheckboxChange}
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
