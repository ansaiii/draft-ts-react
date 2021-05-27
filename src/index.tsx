import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Hello from './m1';

function App(): JSX.Element {
  return <Fragment>
    <Hello>hello</Hello>
  </Fragment>;
}

ReactDOM.render(<App />, document.getElementById('root'));