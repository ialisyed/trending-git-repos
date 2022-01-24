import React from "react";
import Flex from "../components/Flex";

const Header = () => (
  <Flex
    boxShadow="10px"
    backgroundColor="#e0e0e0"
    justifyContent="center"
    alignItems="center"
    height={65}
    mb="10px"
    padding="10px"
  >
    <a href="/" title="Trending Git Repos">
      Trending Git Repos
    </a>
  </Flex>
);

export default Header;
