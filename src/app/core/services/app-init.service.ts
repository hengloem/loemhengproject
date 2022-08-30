import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor() { }

  public init() {
    return from(
      fetch('assets/app-config.json').then((response) => {
        return response.json();
      })
    )
      .pipe(
        map((config) => {
          window.config = config;
          return config;
        })
      )
      .toPromise();
  }
}
