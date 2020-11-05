import React from "react";

import { Container } from "../../components";
import {
  StyledTeamBlock,
  Heading,
  Cards,
  Card,
  Img,
  Title,
  SubTitle,
} from "./styles";

export const TeamBlock = ({ heading, data }) => (
  <StyledTeamBlock>
    <Container>
      <Heading>{heading}</Heading>

      <Cards>
        {data.map(({ img, title, subtitle }) => (
          <Card>
            <Img src={img} />
            <Title>{title}</Title>
            <SubTitle as="a" href="/">
              {subtitle}
            </SubTitle>
          </Card>
        ))}
      </Cards>
    </Container>
  </StyledTeamBlock>
);
