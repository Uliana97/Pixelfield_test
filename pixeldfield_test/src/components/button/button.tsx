import React from "react";

import { ButtonContainer } from "./styles";

export type ButtonProps = {
  text?: string
  mr?: number | string
  primary?: boolean
  upper? : boolean
}

export const Button: React.FC<ButtonProps> = ({ text, ...rest }) => (
  <ButtonContainer {...rest}>{text}</ButtonContainer>
);
