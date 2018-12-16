// @flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { compose, withState } from 'recompose';
import Select from 'react-select';
import theme from '../../styles/theme';
import Lang from './data.json';

const HeaderRow = styled.header`
  height: 80px;
  background: #0b3953;
  font-size: 14px;
`;

const options = Object.entries(Lang).map(v => ({
  value: v[0],
  label: v[1].nativeName
}));

const Props = {};

const Header = ({ language, updateLanguage }: Props) => (
  <ThemeProvider theme={theme}>
    <HeaderRow className="container-fluid pt-4">
      <div className="row">
        <div className="col-5">
          <Select
            value={language}
            onChange={updateLanguage}
            options={options}
          />
        </div>
        <div className="col-2">Change</div>
        <div className="col-5">
          <Select
            value={language}
            onChange={updateLanguage}
            options={options}
          />
        </div>
      </div>
    </HeaderRow>
  </ThemeProvider>
);

const enhance = compose(
  withState('language', 'updateLanguage', {
    value: 'en',
    label: 'English'
  })
);

export default enhance(Header);
