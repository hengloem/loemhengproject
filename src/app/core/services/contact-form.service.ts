import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  constructor(private http: HttpClient) { }

  submitForm(url: string, formData: FormData): Observable<any> {
    return this.http.post(url, formData);
  }
}
