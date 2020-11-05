import React from "react";

import { Container, Button } from "..";

import {
  StyledNavBar,
  Layout,
  Logo,
  Flex,
  Nav,
  NavLink,
  Login,
  Lang,
} from "./styles";

export const NavBar: React.FC = () => {
  return (
    <StyledNavBar>
      <Container>
        <Layout>
          <Logo as="a" href="/" />
          <Flex>
            <Nav>
              <NavLink as="a" href="/">
                Investments
              </NavLink>
              <NavLink as="a" href="/">
                How to invest
              </NavLink>
              <NavLink as="a" href="/">
                About the Firm
              </NavLink>
              <NavLink as="a" href="/">
                Insights
              </NavLink>
            </Nav>
            <Login>
              <Lang>English</Lang>
              <Button text="Log in" mr="15px" />
              <Button text="Register" primary />
            </Login>
          </Flex>
        </Layout>
      </Container>
    </StyledNavBar>
  );
};
