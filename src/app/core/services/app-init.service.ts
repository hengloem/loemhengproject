import { Injectable } from '@angular/core';
import { from, map, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor() { }
  
  public init(): Promise<any> {
    const config$ = from(fetch('assets/app-config.json')).pipe(
      map(response => {
        if (!response.ok) {
          throw new Error('Failed to load configuration: ' + response.statusText);
        }
        return response.json();
      })
    );

    return lastValueFrom(config$)
      .then(config => config)
      .catch(error => {
        console.error('App initialization failed', error);
        return Promise.reject(error);  // Reject promise on error
      });
  }
}
