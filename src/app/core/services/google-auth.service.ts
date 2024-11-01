import { Injectable } from '@angular/core';
import { environment } from '@env';
import { loadGapiInsideDOM, gapi } from 'gapi-script';

declare const gapi: any;  // Allows TypeScript to recognize `gapi` globally

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private gapiSetup: boolean = false;
  private authInstance: gapi.auth2.GoogleAuth;

  constructor() {
    this.initGapiClient();
  }

  async initGapiClient() {
    await loadGapiInsideDOM();
    gapi.load('client:auth2', async () => {
      await gapi.client.init({
        clientId: environment.googleClientId,
        scope: 'https://www.googleapis.com/auth/blogger',
      });
      this.authInstance = gapi.auth2.getAuthInstance();
      this.gapiSetup = true;
    });
  }

  signIn() {
    return this.authInstance.signIn();
  }

  signOut() {
    return this.authInstance.signOut();
  }
}
