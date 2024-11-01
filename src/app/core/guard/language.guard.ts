import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {
  constructor(private translate: TranslateService) {}

  canActivate(): boolean {
    const userLang = navigator.language.includes('km') ? 'km' : 'en';
    this.translate.use(userLang);
    return true;
  }
}
