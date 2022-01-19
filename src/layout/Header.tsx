import React from "react";
import Flex from "../components/Flex";

const Header = () => (
  <Flex
    boxShadow="md"
    backgroundColor="white"
    justifyContent="center"
    alignItems="center"
    padding="sm"
  >
    <a href="/" title="Trending Git Repos">
      Trending Git Repos
    </a>
  </Flex>
);

export default Header;
