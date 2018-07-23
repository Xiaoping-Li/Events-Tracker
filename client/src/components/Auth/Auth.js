import history from '../../history';
import auth0 from 'auth0-js';
import config from '../../utils/config';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: config.domain,
    clientID: config.clientID,
    redirectUri: config.callbackURL,
    audience: `https://${config.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}