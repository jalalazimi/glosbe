import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { compose } from 'recompose';
import theme from '../../styles/theme';

const HeaderRow = styled.header`
  height: 80px;
  background: #0b3953;
`;

const Header = () => (
  <ThemeProvider theme={theme}>
    <HeaderRow className="container-fluid">lang</HeaderRow>
  </ThemeProvider>
);

const enhance = compose();

export default enhance(Header);
