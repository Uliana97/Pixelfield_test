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

export const Img = styled.img`
  margin-bottom: 25px;
  width: 278px;
  /* transition: transform 0.5s;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.15);
    content: "";
    opacity: 0;
    z-index: -1;
  }

  &:hover,
  &:focus {
    transform: scale3d(1.006, 1.006, 1);

    &::after {
      opacity: 1;
    }
  } */
`;

export const Title = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
`;

export const SubTitle = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  color: ${({ theme: { colors } }) => colors.blue};
  text-decoration: none;
  opacity: 0.6;
`;
