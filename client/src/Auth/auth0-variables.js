export const AUTH_CONFIG = {
  domain: 'olees.auth0.com',
  clientId: 'SnVcPvOB5bL9aycX5XV9t1iadr2wCP5F',
  callbackUrl: window.location.href.includes('localhost') ? 'http://localhost:3000/callback' : 'https://o-lingo.herokuapp.com/callback',
}
