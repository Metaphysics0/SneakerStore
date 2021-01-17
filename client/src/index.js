import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// The Auth0Provider holds all the information of the current signed in user
ReactDOM.render(
  <Auth0Provider
    domain={'dev-gv2cro59.us.auth0.com'}
    clientId={'anxjqZPTGG4kBmdVG1l2jY0rWYDXK9MX'}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
