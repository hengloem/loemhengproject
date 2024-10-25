import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SharedService } from './core/services/shared.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'loemhengproject';
  private routerSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private localStorage: SharedService,
    private router: Router
  ) {
    // Add supported languages
    this.translate.addLangs(['en', 'kh']);

    // Get the user's language preference from local storage
    const lang = this.localStorage.get('lang');

    // Use the user's preference or default to 'en'
    const preferredLang = lang === 'en' || lang === 'kh' ? lang : 'en';
    this.translate.setDefaultLang(preferredLang);

    // Save default language to local storage if needed
    if (!lang) {
      this.localStorage.set('lang', 'en');
    }
  }

  ngOnInit(): void {
    // Subscribe to language change events if needed
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // React to language change if required
    });

    // Efficiently handle route changes
    const routeClassMap = {
      '/home': 'home',
      '/about': 'about',
      '/portfolio': 'portfolio',
      '/contact': 'contact',
      '/blog': 'blog',
      '/blog-post': 'blog-post',
      '/math-tools': 'math-tools'
    };

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;

        const bodyClasses = Object.values(routeClassMap);

        // Find matching route class
        const activeClass = Object.keys(routeClassMap).find(key => currentRoute.includes(key)) || '';

        // Update body class
        document.body.className = bodyClasses.includes(routeClassMap[activeClass]) ? routeClassMap[activeClass] + ' light' : 'light';
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from router events to prevent memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
