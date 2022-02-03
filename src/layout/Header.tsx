import React from "react";

import Flex from "../components/Flex";
import LOCALE from "../locale";

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
      {LOCALE.TRENDING_GIT_REPOS}
    </a>
  </Flex>
);

export default Header;
