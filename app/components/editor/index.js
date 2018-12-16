// @flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { Editor, EditorState } from 'draft-js';
import theme from '../../styles/theme';

const HeaderRow = styled.div`
  background: #f6f6f6;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #d9dee2;
  overflow-x: auto;

  .DraftEditor-root {
    width: 90%;
    margin: auto;
    height: 100px;
    line-height: 100px;
    font-size: 24px;
  }
  .public-DraftStyleDefault-block {
    overflow-x: auto;
    white-space: pre;
  }
`;

const Props = {};
let setEditor;

const TextEditor = ({ state, setState, focusEditor }: Props) => (
  <ThemeProvider theme={theme}>
    <HeaderRow
      className="container-fluid"
      tabIndex="0"
      role="Textbox"
      onClick={() => focusEditor}
      onKeyPress={() => focusEditor}
    >
      <Editor
        ref={ref => {
          setEditor = ref;
        }}
        spellCheck
        stripPastedStyles
        editorState={state}
        onChange={editorState => setState(editorState)}
      />
    </HeaderRow>
  </ThemeProvider>
);

const enhance = compose(
  withState('state', 'setState', () => EditorState.createEmpty()),
  withHandlers({
    focusEditor: () => () => {
      if (setEditor) {
        setEditor.focus();
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      const { focusEditor } = this.props;
      focusEditor();
    }
  })
);

export default enhance(TextEditor);
