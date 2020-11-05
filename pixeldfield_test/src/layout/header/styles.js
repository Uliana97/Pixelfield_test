import styled from "styled-components";

import titleBg from "./assets/title-bg.jpg";

export const StyledHeader = styled.div`
  height: 100%;
`;

export const Hero = styled.div`
  background-color: ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.white};
  height: 100%;
`;

export const Title = styled.div`
  align-items: center;
  background: url(${titleBg}) center no-repeat;
  display: flex;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  justify-content: center;
  min-height: 400px;
`;

export const Description = styled.div`
  line-height: 1.1;
  margin: 0 auto;
  max-width: 1062px;
  padding: 110px 0 102px 0;
  text-align: center;
`;

export const SubTitle = styled.div`
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
  margin-bottom: 100px;
`;

export const Text = styled.div`
  display: inline-block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  line-height: 1.5;
  max-width: 430px;
  opacity: 0.8;
  text-align: left;
  vertical-align: top;

  &:not(:last-of-type) {
    margin-right: 10%;
  }
`;
