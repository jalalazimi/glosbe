// @flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { compose, withState, withHandlers } from 'recompose';
import Select from 'react-select';
import theme from '../../styles/theme';
import Lang from './data.json';

const HeaderRow = styled.header`
  height: 80px;
  background: #0b3953;
  font-size: 14px;

  .react-select__control {
    background: #f6f6f6;
    border-color: #f6f6f6;
    border-radius: 50px;
    .react-select__indicator-separator {
      background-color: #f6f6f6;
    }
    .react-select__single-value {
      color: #0b3953;
    }
  }
`;

const options = Object.entries(Lang).map(v => ({
  value: v[0],
  label: v[1].name
}));

const Props = {};

const Header = ({
  sourceLanguage,
  targetLanguage,
  handleSourceLanguageChange,
  handleTargetLanguageChange
}: Props) => (
  <ThemeProvider theme={theme}>
    <HeaderRow className="container-fluid pt-4">
      <div className="row">
        <div className="col-5">
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            value={sourceLanguage}
            onChange={handleSourceLanguageChange}
            options={options}
          />
        </div>
        <div className="col-2">Change</div>
        <div className="col-5">
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            value={targetLanguage}
            onChange={handleTargetLanguageChange}
            options={options}
          />
        </div>
      </div>
    </HeaderRow>
  </ThemeProvider>
);

const enhance = compose(
  withState('sourceLanguage', 'updateSourceLanguage', {
    value: 'en',
    label: 'English'
  }),
  withState('targetLanguage', 'updateTargetLanguage', {
    value: 'fr',
    label: 'French'
  }),
  withHandlers({
    handleSourceLanguageChange: ({
      updateSourceLanguage
    }) => selectedOption => {
      updateSourceLanguage(selectedOption);
    },
    handleTargetLanguageChange: ({
      updateTargetLanguage
    }) => selectedOption => {
      updateTargetLanguage(selectedOption);
    }
  })
);

export default enhance(Header);
