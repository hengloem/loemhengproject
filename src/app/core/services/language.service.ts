import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang: string;

  constructor(private translate: TranslateService) {}

  // Method to set language
  setLanguage(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  // Method to get current language
  getLanguage(): string {
    return this.currentLang;
  }
}
