import styled from "styled-components";

import { device } from "../../styling/breakpoints";

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
  background: url(${titleBg}) center/cover no-repeat;
  display: flex;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  justify-content: center;
  min-height: 400px;

  @media ${device.tablet} {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.extraM};
    min-height: 300px;
  }
`;

export const Description = styled.div`
  line-height: 1.1;
  margin: 0 auto;
  max-width: 1062px;
  padding: 110px 0 102px 0;
  text-align: center;

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.tablet} {
    padding: 40px 0 40px 0;
    max-width: 502px;
  }

  @media ${device.mobileM} {
    max-width: 300px;
  }
`;

export const SubTitle = styled.div`
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
  margin-bottom: 100px;

  @media ${device.tablet} {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
    margin-bottom: 40px;
  }
`;

export const Text = styled.div`
  display: inline-block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  line-height: 1.5;
  max-width: 430px;
  opacity: 0.8;
  text-align: left;
  vertical-align: top;
  padding: 0 25px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    display: block;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;
