import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { compose } from 'recompose';
import theme from '../../styles/theme';
import Logo from './logo';

const HeaderRow = styled.header`
  height: 50px;
  background: #0b3953;
  h1 {
    margin: 0;
    color: #eee;
    padding: 0;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
  }
`;

const Header = () => (
  <ThemeProvider theme={theme}>
    <HeaderRow className="container-fluid">
      <h1 className="text-center">
        <Logo />
      </h1>
    </HeaderRow>
  </ThemeProvider>
);

const enhance = compose();

export default enhance(Header);
