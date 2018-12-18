// @flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { Editor, EditorState } from 'draft-js';
import theme from '../../styles/theme';

const Container = styled.div`
  background: #0b3953;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #d9dee2;
  overflow-x: auto;
  height: 50px;
  .editor {
    position: absolute;
    background: #ffffff;
    width: 70%;
    margin-left: -35%;
    left: 50%;
    height: 100px;
    border-radius: 6px;
    box-shadow: 0 3px 78px 0 rgba(0, 0, 0, 0.15);
  }
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
    <Container
      className="container-fluid"
      tabIndex="0"
      role="Textbox"
      onClick={() => focusEditor}
      onKeyPress={() => focusEditor}
    >
      <div className="editor">
        <Editor
          ref={ref => {
            setEditor = ref;
          }}
          spellCheck
          stripPastedStyles
          editorState={state}
          onChange={editorState => setState(editorState)}
        />
      </div>
    </Container>
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
      setTimeout(focusEditor(), 0);
    }
  })
);

export default enhance(TextEditor);
