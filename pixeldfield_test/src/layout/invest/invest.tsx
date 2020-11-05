import React from "react";

import { Button, Container } from "../../components";

import { InvestContainer, Join, Info, Title, SubTitle, InvestBlock, Heading } from "./styles";

export const Invest: React.FC = () => (
  <InvestContainer>

    <Join>
   <Container>
     <Info>
       <Title>Want to build something great? Join us.</Title>
       <SubTitle>We’re reinventing how people get to invest in real estate. To do that, we’ve assembled a team built on hard work, accountability, and transparency. Come join us.</SubTitle>
       <Button text="Current job openings" primary/>
     </Info>
   </Container>
   </Join>

   <InvestBlock>
       <Heading>Become property investor now</Heading>
       <Button text="Invest" primary/>
   </InvestBlock>

  </InvestContainer>
);
