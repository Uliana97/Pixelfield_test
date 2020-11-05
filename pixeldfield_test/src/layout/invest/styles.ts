import styled from "styled-components";

import { device } from "../../styling/breakpoints";

import investBg from './assets/invest-bg.jpg'

export const InvestContainer = styled.div`
    padding-top: 100px;    
`;

export const Join = styled.div`
    background-image: url(${investBg});
    background-position: right top;
    background-repeat: no-repeat;
    background-size: 50% 100%;
    min-height: 480px;
    position: relative;

    &::before{
      background-color: ${({ theme: { colors } }) => colors.vanil};
      content: "";
      height: 100%;
      position: absolute;
      width: 50%;
      z-index: -1;
    }
  
  @media ${device.laptop} {
    background-position: center;
    background-size: cover;

    &::before {
      height: 0;
    }
  }     
`;

export const Info = styled.div`
  align-items: flex-start;
  color: ${({ theme: { colors } }) => colors.blue};
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts[0]};
  justify-content: center;
  max-width: 480px;
  min-height: 480px;
  text-align: left;

  @media ${device.laptop} {
    align-items: center;
    color: ${({ theme: { colors } }) => colors.white};
    max-width: 100%;
    text-align:center;
  }
`;

export const Title = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
  margin-bottom: 30px;

  @media ${device.mobileL} {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.extraM};
  }
`;

export const SubTitle = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  line-height: 1.5;
  margin-bottom: 30px;
`;


export const InvestBlock = styled.div`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.blue};
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: center;
`;

export const Heading = styled.div`
 color: ${({ theme: { colors } }) => colors.white};
 font-family: ${(props) => props.theme.fonts[0]};
 font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
 margin-bottom: 40px;


 @media ${device.mobileL} {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.extraM};
  }
  
`;



