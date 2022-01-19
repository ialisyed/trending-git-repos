import React from "react";
import Flex from "../components/Flex";

const Header = () => (
  <Flex
    boxShadow="md"
    backgroundColor="#e0e0e0"
    justifyContent="center"
    alignItems="center"
    height={65}
    padding="sm"
  >
    <a href="/" title="Trending Git Repos">
      Trending Git Repos
    </a>
  </Flex>
);

export default Header;
