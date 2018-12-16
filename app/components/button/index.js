// @flow
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

export const Btn = styled.button`
  background: ${props =>
    props.disabled ? props.theme.gray_light : props.theme.secondary};
  border-radius: 100px;
  font-size: 1.4em;
  color: ${props => props.theme.white};
  line-height: 16px;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: all ease-in 0.25s;
  cursor: ${props => (props.disabled ? `default` : `pointer`)};
  font-weight: 600;
  letter-spacing: 1.35px;
  :focus {
    outline: none;
  }
  :hover {
    background: ${props =>
      props.disabled ? props.theme.gray_light : props.theme.secondary};
  }
`;

type Props = {
  disabled: boolean,
  className: string,
  children: React.Node
};

const Button = ({ disabled, className, children }: Props) => (
  <ThemeProvider theme={theme}>
    <Btn disabled={disabled} className={className}>
      {children}
    </Btn>
  </ThemeProvider>
);

export default Button;
