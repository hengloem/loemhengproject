import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor() { }
  
  public init(): Promise<any> {
    return from(fetch('assets/app-config.json'))
      .pipe(
        map(response => {
          if (!response.ok) {
            throw new Error('Failed to load configuration: ' + response.statusText);
          }
          return response.json();
        }),
        map(config => {
          return config;
        })
      )
      .toPromise()
      .catch(error => {
        console.error('App initialization failed', error);
        return Promise.reject(error);  // Reject promise on error
      });
  }
}
