import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './core/services/shared.service';
import analytics from '@vercel/analytics';
import { HeaderTitleService } from './core/services/header-title.service';
import { MENUS } from './data/js/static-data';
import { lh_menuItem } from './shared/models/utils.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isKh: string = '';
  lh_menuData: lh_menuItem[] = MENUS;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private localStorage: SharedService,
    private headerTitleService: HeaderTitleService,
  ) {
    translate.addLangs(['en', 'kh']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.headerTitleService.setTitle('app.title');

    analytics.inject();
    analytics.track('Page View', { path: window.location.pathname });

    // const savedLang = this.localStorage.get('lang');
    // this.isKh = savedLang === 'kh' ? 'app.eng' : 'app.kh';
    // this.translate.use(savedLang || 'en');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Generate routeClassMap dynamically from MENUS
        const routeClassMap = this.lh_menuData.reduce((acc, menu) => {
          acc[menu.route] = menu.route.substring(1); // Remove the leading slash
          return acc;
        }, {});

        const activeClass = Object.keys(routeClassMap).find(key => this.router.url.includes(key)) || '';
        document.body.className = routeClassMap[activeClass] ? `${routeClassMap[activeClass]} light` : 'light';
      }
    });
  }
}
