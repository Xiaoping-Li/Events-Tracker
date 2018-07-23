import history from '../history';
import auth0 from 'auth0-js';
import config from '../utils/config';

export default class Auth {
  // Use personal credentials to create auth0 object
  auth0 = new auth0.WebAuth({
    domain: config.domain,
    clientID: config.clientID,
    redirectUri: config.callbackURL,
    audience: `https://${config.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid'
  });

  // Add login method
  login = () => {
    this.auth0.authorize();
  }

  // Parses the result after authentication from URL hash
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/events');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // Navigate to the home route
    history.replace('/home');
  }

  logout = () => {
    // Clear Access Token and ID Token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Navigate to the home route
    history.replace('/home');
  }

  isAuthenticated = () => {
    // Check if Access Token expired
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}