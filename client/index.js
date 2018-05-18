import React from 'react';
import {reactDom} from 'react-dom';
import App from './component/App'
import store from './store';

render( <Provider store={store}>
    <App />
  </Provider>  , 
  document.getElementById('root')
);

