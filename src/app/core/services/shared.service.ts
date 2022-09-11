import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any) { }

  set(key: string, data: any): void {
    try {
      this.localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  get(key: string) {
    try {
      let value = this.localStorage.getItem(key);

      if (value)
        return JSON.parse(value);
      else return value
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  remove(key: string) {
    try {
      this.localStorage.remove(key);
    } catch (e) {

    }
  }
}
