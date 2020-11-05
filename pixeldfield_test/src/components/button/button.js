import { ButtonContainer } from "./styles";

export const Button = ({ text, ...rest }) => (
  <ButtonContainer {...rest}>{text}</ButtonContainer>
);
