import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Root } from './Root';

const renderRoot = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById('app'));
};

renderRoot((
    <Root />
  ));