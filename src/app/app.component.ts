import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './core/services/shared.service';
import analytics from '@vercel/analytics';
import { HeaderTitleService } from './core/services/header-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isKh: string = '';
  private routerSubscription: Subscription;

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

    const savedLang = this.localStorage.get('lang');
    this.isKh = savedLang === 'kh' ? 'app.eng' : 'app.kh';
    this.translate.use(savedLang || 'en');

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeClassMap = {
          '/home': 'home',
          '/about': 'about',
          '/portfolio': 'portfolio',
          '/contact': 'contact',
          '/blog': 'blog',
          '/blog-post': 'blog-post',
          '/math-tools': 'math-tools'
        };
        
        const activeClass = Object.keys(routeClassMap).find(key => this.router.url.includes(key)) || '';
        document.body.className = routeClassMap[activeClass] ? `${routeClassMap[activeClass]} light` : 'light';
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }
}
