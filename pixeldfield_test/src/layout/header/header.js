import React from "react";

import { NavBar } from "../../components/";

import {
  StyledHeader,
  Hero,
  Title,
  Description,
  SubTitle,
  Text,
} from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <NavBar />
      <Hero>
        <Title>About Exemplar</Title>
        <Description>
          <SubTitle>
            We’re a real estate technology company whose goal is to empower
            investors with direct access to fully vetted, institutional-grade
            real estate investments faster and smarter than ever before.
          </SubTitle>
          <Text>
            Our Investment Team brings over 20 billion CZK in real estate
            transaction experience from leading firms like Blackstone and
            Goldman Sachs - while our engineering and product teams hail from
            leading tech companies like Dropbox and Square.
          </Text>
          <Text>
            With in-depth experience in real estate, combined with cutting-edge
            technology and close local operator partnerships, Exemplar brings
            you access to institutional-grade investments with greater
            transparency and lower fees. Exemplar brings you access to
            institutional-grade investments with greater transparency and lower
            fees.
          </Text>
        </Description>
      </Hero>
    </StyledHeader>
  );
};
