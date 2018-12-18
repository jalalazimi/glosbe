// @flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { compose, withState, withHandlers } from 'recompose';
import Select from 'react-select';
import theme from '../../styles/theme';
import Lang from './data.json';
import Swap from './swap';

const HeaderRow = styled.header`
  height: 80px;
  background: #0b3953;
  font-size: 14px;

  .swap {
    cursor: pointer;
    transition: all ease 0.25s;
    :hover {
      transform: scale(1.1);
    }
    :active {
      outline: none;
    }
    :focus {
      outline: none;
    }
  }

  .react-select__control {
    background: transparent;
    border-color: transparent;
    border-radius: 50px;

    input {
      color: #ffffff !important;
      text-align: center;
      width: 100% !important;
    }
    .react-select__indicator-separator {
      background-color: transparent;
    }
    .react-select__single-value {
      color: #ffffff;
      text-align: center;
      width: 100%;
      text-transform: uppercase;
    }
    .react-select__dropdown-indicator {
      display: none;
    }
  }
`;

const options = Object.entries(Lang).map(v => ({
  value: v[0],
  label: v[1].name
}));

const Props = {};

const Language = ({
  sourceLanguage,
  targetLanguage,
  handleSourceLanguageChange,
  handleTargetLanguageChange,
  swap
}: Props) => (
  <ThemeProvider theme={theme}>
    <HeaderRow className="container-fluid pt-3">
      <div className="col-10 m-auto">
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
          <div
            className="col-2 text-center pt-2 swap"
            role="button"
            tabIndex="0"
            onClick={swap}
            onKeyPress={swap}
          >
            <Swap />
          </div>
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
    },
    swap: ({
      updateTargetLanguage,
      sourceLanguage,
      updateSourceLanguage,
      targetLanguage
    }) => () => {
      updateTargetLanguage(sourceLanguage);
      updateSourceLanguage(targetLanguage);
    }
  })
);

export default enhance(Language);
