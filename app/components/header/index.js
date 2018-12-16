import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { compose } from 'recompose';
import theme from '../../styles/theme';

const HeaderRow = styled.header`
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
  border-bottom: 1px solid ${props => props.theme.primary};
`;

const Header = () => (
  <ThemeProvider theme={theme}>
    <HeaderRow className="container-fluid">
      <h1 className="text-center">Glosbe</h1>
    </HeaderRow>
  </ThemeProvider>
);

const enhance = compose();

export default enhance(Header);
