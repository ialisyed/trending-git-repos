import React, { FC, useEffect, useState } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Box from "../../components/Box";
import CheckboxLabel from "../../components/ChecboxLabel";
import Checkbox from "../../components/Checkbox";
import Flex from "../../components/Flex";
import LOCALE from "../../locale";
import RepoCard from "./RepoCard";
import { getTrendingReposAsync, Repo, selectRepos } from "./reposSlice";

interface RepoItemProps {
  repo: Repo;
  idx: number;
}

const RepoItem: FC<RepoItemProps> = ({ repo, idx }) => (
  <Col md={3} sm={12} key={repo.fullName}>
    <Box mb="10px">
      <RepoCard {...repo} idx={idx} />
    </Box>
  </Col>
);

interface Props {}

const RepoList: FC<Props> = () => {
  const [shouldFilterStarred, setShouldFilterStarred] = useState(false);

  const data = useAppSelector(selectRepos);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrendingReposAsync());
  }, []);

  const renderStarredRepos = () =>
    data
      .filter((_repo) => _repo.isStarred)
      .map((repo: Repo, idx: number) => <RepoItem repo={repo} idx={idx} />);

  const renderRepos = () =>
    data.map((repo: Repo, idx: number) => <RepoItem repo={repo} idx={idx} />);

  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" mb="10px">
        <label>
          <Checkbox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setShouldFilterStarred(e!.target.checked)
            }
            checked={shouldFilterStarred}
          />
          <CheckboxLabel>{LOCALE.VIEW_ALL_STARRED_REPOS}</CheckboxLabel>
        </label>
      </Flex>
      <Row data-cy="repo-list" alignItems="center" justifyContent="center">
        {shouldFilterStarred ? renderStarredRepos() : renderRepos()}
      </Row>
    </Container>
  );
};

export default RepoList;
