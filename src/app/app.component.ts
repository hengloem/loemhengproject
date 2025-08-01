import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './core/services/shared.service';
import analytics from '@vercel/analytics';
import { HeaderTitleService } from './core/services/header-title.service';
import { MENUS } from './data/js/static-data';
import { lh_menuItem } from './shared/models/utils.model';
import { SchemaService } from './core/services/schema.service';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { environment } from 'environments/environment.prod';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isKh: string = '';
  lh_menuData: lh_menuItem[] = MENUS;

  theme: 'light' | 'dark' = 'light';

  constructor(
    private translate: TranslateService,
    private router: Router,
    private localStorage: SharedService,
    private headerTitleService: HeaderTitleService,
    private schemaService: SchemaService,
    private seoService: SeoService
  ) {
    translate.addLangs(['en', 'kh']);
    translate.setDefaultLang('en');

    // Load saved theme from localStorage
    const savedTheme = this.localStorage.get('theme');
    this.theme = (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme : 'light';
  }

  ngOnInit(): void {
    this.headerTitleService.setTitle('app.title');

    // Add global schema markup
    this.schemaService.addWebsiteSchema();
    this.schemaService.addPersonSchema();

    analytics.inject();
    analytics.track('Page View', { path: window.location.pathname });
    injectSpeedInsights();

    // const savedLang = this.localStorage.get('lang');
    // this.isKh = savedLang === 'kh' ? 'app.eng' : 'app.kh';
    // this.translate.use(savedLang || 'en');

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Generate routeClassMap dynamically from MENUS
    //     const routeClassMap = this.lh_menuData.reduce((acc, menu) => {
    //       acc[menu.route] = menu.route.substring(1); // Remove the leading slash
    //       return acc;
    //     }, {});

    //     const activeClass = Object.keys(routeClassMap).find(key => this.router.url.includes(key)) || '';
    //     document.body.className = routeClassMap[activeClass] ? `${routeClassMap[activeClass]} light` : 'light';
    //   }
    // });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBodyClass(); // Always applies the current theme
      }
    });
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.localStorage.set('theme', this.theme); // Save to localStorage
    this.updateBodyClass();
  }

  updateBodyClass(): void {
    const routeClassMap = this.lh_menuData.reduce((acc, menu) => {
      acc[menu.route] = menu.route.substring(1);
      return acc;
    }, {});
    const activeClass = Object.keys(routeClassMap).find(key => this.router.url.includes(key)) || '';
    document.body.className = routeClassMap[activeClass]
      ? `${routeClassMap[activeClass]} ${this.theme}`
      : this.theme;
  }

  private setSeoData() {
    this.seoService.updatePageSeo({
      title: 'Home',
      description: environment.siteDescription,
      keywords: 'Loem Heng, portfolio, tech blog, web development, Angular, programming, Cambodia developer',
      path: '/home',
      image: '/assets/img/photos/03_610_x_1020.jpg'
    });
  }
}
