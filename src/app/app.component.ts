import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SharedService } from './core/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loemhengproject';

  constructor(
    private translate: TranslateService,
    private localStorage: SharedService
  ) {
    this.translate.addLangs(['en', 'kh']);
    this.translate.setDefaultLang('en');
    const lang = this.localStorage.get('lang');
    if (lang == 'en') {
      this.translate.setDefaultLang('en');
      this.localStorage.set('lang', 'en');
    } else {
      this.translate.setDefaultLang('kh');
      this.localStorage.set('lang', 'kh');
    }
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => { });
  }
}
