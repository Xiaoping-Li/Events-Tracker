import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'xiaoping-li.auth0.com',
    clientID: '1xHelLx5BWNDw8KPgV3XaXzqL3VQWfuV',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://xiaoping-li.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}