import styled from "styled-components";

import { device } from "../../styling/breakpoints";

export type ImgType = {
  img: string
}

export const StyledTeamBlock = styled.div`
  color: ${({ theme: { colors } }) => colors.blue};
`;

export const Heading = styled.p`
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
  margin: 85px 0;
  text-align: center;

  @media ${device.mobileL} {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.extraM};
    margin: 25px 0;
  }
`;

export const Cards = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  margin-bottom: 20px;
`;

export const Img = styled.div<ImgType>`
  ${({ img }) => (img ? `background: url(${img}) center/cover no-repeat` : "")};
  cursor: pointer;
  display: inline-block;
  height: 278px;
  margin-bottom: 25px;
  position: relative;
  transition: all 0.5s;
  width: 278px;

  &::after {
    background: transparent;
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.5s ease-out;
    width: 100%;
  }

  &:hover {
    &::after {
      background: linear-gradient(
        0deg,
        rgba(10, 52, 95, 0.4),
        rgba(10, 52, 95, 0.4)
      );
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.15);
    }
  }
`;

export const Title = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
`;

export const SubTitle = styled.span`
  color: ${({ theme: { colors } }) => colors.blue};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  opacity: 0.6;
  text-decoration: none;
`;
