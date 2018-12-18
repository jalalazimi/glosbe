// @flow
import React from 'react';
import Header from '../header';
import Language from '../language';
import Editor from '../editor';

const Main = () => (
  <div data-tid="container">
    <Header />
    <Language />
    <Editor />

    <h2>Home</h2>
  </div>
);

export default Main;
