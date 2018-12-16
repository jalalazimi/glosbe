// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import Header from '../header';

type Props = {};

export default class Main extends Component<Props> {
  props: Props;

  render() {
    return (
      <div data-tid="container">
        <Header />

        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
