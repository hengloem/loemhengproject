import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpLocationService {
  constructor(private http: HttpClient) {}

  getUserCountry() {
    return this.http.get<{ country: string }>('https://ipapi.co/json/');
  }
}
