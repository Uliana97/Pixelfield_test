import React from "react";

import { Container } from "..";
import {
  StyledTeamBlock,
  Heading,
  Cards,
  Card,
  Img,
  Title,
  SubTitle,
} from "./styles";

export interface People {
  img: string
  title: string
  subtitle: string
}

export interface TeamBlockProps {
  heading: string
  data: People[]
}

export const TeamBlock: React.FC<TeamBlockProps> = ({ heading, data }) => (
  <StyledTeamBlock>
    <Container>

      { heading && <Heading>{heading}</Heading> }

      <Cards>
        {data.map(({ img, title, subtitle }) => (
          <Card key={title}>
            <Img as="a" href="/" img={img && img} />
            <Title>{title && title}</Title>
            <SubTitle as="a" href="/">
              {subtitle && subtitle}
            </SubTitle>
          </Card>
        ))}
      </Cards>
    </Container>
  </StyledTeamBlock>
);
