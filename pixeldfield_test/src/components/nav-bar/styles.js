import styled, { css } from "styled-components";

import logo from "./assets/logo.png";
import arror from "./assets/arrow.svg";

const After = css`
  background: url(${arror}) center no-repeat;
  content: "";
  height: 5px;
  position: absolute;
  right: -14px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
`;

const Before = css`
  background-color: transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 4px;
  left: 0;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 120%;
`;

export const StyledNavBar = styled.div`
  min-height: 70px;
`;

export const Layout = styled.div`
  align-items: center;
  display: flex;
  min-height: 70px;
`;

export const Logo = styled.div`
  background: url(${logo}) center/100% no-repeat;
  display: inline-block;
  height: 20px;
  margin-right: 40px;
  width: 210px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Nav = styled.div`
  align-items: center;
  display: flex;
`;

export const NavLink = styled.span`
  color: ${({ theme: { colors } }) => colors.blue};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  position: relative;
  text-decoration: none;

  &:not(:last-of-type) {
    margin-right: 40px;
  }

  &::after {
    ${After}
    display: none;
  }

  &::before {
    ${Before}
  }

  &:hover {
    &::after {
      display: inline-block;
    }

    &::before {
      background-color: ${(props) => props.theme.colors.blue};
      bottom: -27px;
    }
  }
`;

export const Login = styled.div``;

export const Lang = styled.span`
  color: ${({ theme: { colors } }) => colors.blue};
  cursor: pointer;
  display: inline-block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  font-weight: bold;
  margin-right: 52px;
  position: relative;
  text-transform: uppercase;

  &::after {
    ${After}
    display: inline-block;
  }

  &::before {
    ${Before}
  }

  &:hover {
    &::before {
      background-color: ${(props) => props.theme.colors.blue};
      bottom: -27px;
    }
  }
`;
