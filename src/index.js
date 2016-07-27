import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {subscribe, action} from 'stupid-subscribe';
import AppView from './views/app';
import App from './models/app';

const app = new App();

subscribe(
  (appProps) => {
    ReactDOM.render(<AppView {...appProps} />, $("#react-mount")[0]);
  },
  app.getProps
);

// Trigger subscription on app ready (WTF did i just write)
$(document).ready(action(() => {}));
