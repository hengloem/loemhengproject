import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@app/core/services/shared.service';
import { MENUS } from '@app/data/js/static-data';
import { lh_menuItem } from '@app/shared/models/utils.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  lh_menuData: lh_menuItem[] = [];
  isKh: string = '';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private localStorage: SharedService
  ) { }

  ngOnInit(): void {
    this.lh_menuData = MENUS;
    this.isKh = this.localStorage.get('lang') == 'kh' ? 'app.eng' : 'app.kh';
  }

  menuIsActive(route: string): string {
    return this.router.url === route ? "active" : "";
  }

  preLang() {
    // Toggle between Khmer and English
    const newLang = this.localStorage.get('lang') === 'kh' ? 'en' : 'kh';
    this.localStorage.set('lang', newLang);

    // Update the displayed text
    this.isKh = newLang === 'kh' ? 'app.eng' : 'app.kh';

    // Update the language used by the TranslateService
    this.translate.use(newLang);
  }
}
