import React, { FC } from "react";
import Box from "../../components/Box";
import Divider from "../../components/Divider";
import Flex from "../../components/Flex";
import { Repo } from "./reposSlice";

interface Props {
  repo: Repo;
}

const RepoCard: FC<Props> = ({ repo }) => {
  return (
    <Flex
      borderWidth="1px"
      borderStyle="solid"
      borderRadius="5px"
      boxShadow="2px 2px 2px rgba(0,0,0,0.2)"
      p="10px"
      flexDirection="column"
      maxHeight="190px"
      minHeight="190px"
    >
      <Flex flexDirection="column">
        <Flex justifyContent="space-between">
          <Box>
            Stars:
            {" " + repo.stars}
          </Box>
          <Box>{repo.isStarred ? "true" : "false"}</Box>
        </Flex>
        <Divider />
        <Box mt="10px" mb="10px">
          {repo.fullName}
        </Box>
      </Flex>
      <Divider />
      <Flex flex={0.8}>
        <Box mt="5px">{repo.description}</Box>
      </Flex>
    </Flex>
  );
};

export default RepoCard;
