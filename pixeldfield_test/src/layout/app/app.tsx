import React from "react";

import Theme from "../../styling/theme";
import { GlobalStyle } from "./styles";
import { Header, Teams } from "../../components";
import { Invest } from "../invest";

export const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <Teams />
      <Invest/>
    </Theme>
  );
};
