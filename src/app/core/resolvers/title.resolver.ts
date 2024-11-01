import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleResolver implements Resolve<string> {
  constructor(
    private _translateService: TranslateService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const titleKey = route.data['titleKey'] || 'default.title';  // Use a default key if none is provided

    return this._translateService.get(titleKey).pipe(
      map((translatedTitle: string) => translatedTitle)
    );
  }
}
