import styled from "styled-components";

import {ButtonProps} from './button'

export const ButtonContainer = styled.button<ButtonProps>`
  align-items: center;
  background: ${({ primary, theme: { colors } }) =>
    primary ? colors.blue : colors.white};
  border: 2px solid transparent;
  border: none;
  color: ${({ primary, theme: { colors } }) =>
    primary ? colors.white : colors.blue};
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  font-weight: bold;
  justify-content: center;
  outline: none;
  padding: 8px 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-out;
  ${({ mr }) => (mr ? `margin-right: ${mr}` : "")};

  &:hover {
    color: ${({ primary, theme: { colors } }) =>
      primary ? colors.blue : colors.white};
    background: ${({ primary, theme: { colors } }) =>
      primary ? colors.white : colors.blue};
    border-color: ${({ primary, theme: { colors } }) =>
      primary ? colors.blue : ""};
  }
`;
