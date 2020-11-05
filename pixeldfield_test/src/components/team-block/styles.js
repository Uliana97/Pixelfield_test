import styled from "styled-components";

export const StyledTeamBlock = styled.div`
  color: ${({ theme: { colors } }) => colors.blue};
  padding: 100px 0;
`;

export const Heading = styled.p`
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
  margin-bottom: 85px;
  text-align: center;
`;

export const Cards = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div``;

export const Img = styled.div`
  margin-bottom: 25px;
  ${({ img }) => (img ? `background: url(${img}) center/cover no-repeat` : "")};
  cursor: pointer;
  display: inline-block;
  height: 278px;
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
