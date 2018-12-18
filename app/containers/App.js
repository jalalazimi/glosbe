// @flow
import * as React from 'react';

type Props = {
  children: React.Node
};

const App = ({ children }: Props) => (
  <React.Fragment>{children}</React.Fragment>
);

export default App;
