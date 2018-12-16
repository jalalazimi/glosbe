// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import Header from '../header';
import Language from '../language';

type Props = {};

export default class Main extends Component<Props> {
  props: Props;

  render() {
    return (
      <div data-tid="container">
        <Header />
        <Language />

        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
