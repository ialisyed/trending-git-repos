import React, { FC } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";

import Box from "../../components/Box";
import Divider from "../../components/Divider";
import Flex from "../../components/Flex";
import { starRepo, unStarRepo } from "./reposSlice";

interface Props {
  isStarred: boolean;
  description: string;
  stars: number;
  fullName: string;
  idx: number;
}

const StarContainer = styled(Flex)`
  &:hover {
    background-color: #e0e0e0;
    border-radius: 5px;
    cursor: pointer;
  }
  &:active {
    color: white;
    box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
  }
`;

const RepoCard: FC<Props> = React.memo(
  ({ isStarred, description, fullName, stars, idx }) => {
    console.log("reder");
    const dispatch = useAppDispatch();
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
          <StarContainer
            onClick={() =>
              isStarred ? dispatch(unStarRepo(idx)) : dispatch(starRepo(idx))
            }
            p="5px"
            justifyContent="space-between"
          >
            <Box>Star</Box>
            <Box>{stars}</Box>
            <Box>{isStarred ? <FaStar color="#FFEA00" /> : <FaRegStar />}</Box>
          </StarContainer>
          <Divider />
          <Box mt="10px" mb="10px">
            {fullName}
          </Box>
        </Flex>
        <Divider />
        <Flex flex={0.8}>
          <Box mt="5px">{description}</Box>
        </Flex>
      </Flex>
    );
  }
);

export default RepoCard;
