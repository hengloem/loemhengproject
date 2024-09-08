import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://your-backend-url.com/send'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  sendContactForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
