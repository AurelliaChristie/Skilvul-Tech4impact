import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { storeReducer } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeReducer}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


