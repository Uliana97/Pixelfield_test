import React from "react";

import Theme from "../../theme";
import { GlobalStyle } from "./styles";
import { Header, Teams } from "../../components/";

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <Teams />
    </Theme>
  );
};
