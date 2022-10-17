import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'domainName/',
  // The app's redirectUri configured in Auth0
  redirectUri: window.location.origin,
  // The app's clientId configured in Auth0
  clientId: 'spa',
  // Using Authorization Code Flow
  // (PKCE is activated by default for authorization code flow)
  responseType: 'code',
  // Scopes ("rights") the Angular application wants get delegated
  scope: 'openid profile email offline_access read:roles',
  // Your Auth0 account's logout url
  // Derive it from your application's domain
  logoutUrl: 'domainName/logout',
  showDebugInformation: true,
  customQueryParams: {
    // API identifier configured in Auth0
    audience: 'audienceName'
  },
};