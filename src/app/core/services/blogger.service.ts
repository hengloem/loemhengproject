import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { gapi } from 'gapi-script';
import { GoogleAuthService } from './google-auth.service';

@Injectable({
  providedIn: 'root',
})
export class BloggerService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: GoogleAuthService) {}

  async getPosts(): Promise<any> {
    await this.authService.signIn();
    const token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(this.apiUrl, { headers }).toPromise();
  }
}
