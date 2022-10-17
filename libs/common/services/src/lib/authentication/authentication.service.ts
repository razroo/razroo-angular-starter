import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) {}

  setUpOAuthService(authConfig:any) {
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
  }

  get accessToken() {
    return this.oauthService.getAccessToken();
  }

  get refreshToken() {
    return this.oauthService.getRefreshToken();
  }

  get idToken() {
    return this.oauthService.getIdToken();
  }

  refresh(): void {
    this.oauthService.refreshToken();
  }

  loginWithRedirect() {
    return this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  isAuthenticated() {
    if (
      !(
        this.oauthService.hasValidIdToken() &&
        this.oauthService.hasValidAccessToken()
      )
    ) {
      console.log('location set to ', window.location.href);
      localStorage.setItem('redirect_url', window.location.href);
    }
    return (
      this.oauthService.hasValidIdToken() &&
      this.oauthService.hasValidAccessToken()
    );
  }

  logout() {
    this.oauthService.revokeTokenAndLogout(
      {
        client_id: this.oauthService.clientId,
        returnTo: this.oauthService.redirectUri,
      },
      true
    );
  }
}
