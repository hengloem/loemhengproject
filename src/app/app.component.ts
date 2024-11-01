import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IpLocationService } from './core/services/ip-location.service';
import { LanguageService } from './core/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private ipLocationService: IpLocationService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    // Set an immediate fallback language (e.g., English)
    this.translate.setDefaultLang('en');
    this.translate.use('en'); // Load English until detection completes

    // Check if language is already set in session
    if (!this.languageService.getLanguage()) {
      // Detect user location and set language based on IP location
      this.ipLocationService.getUserCountry().subscribe({
        next: (data) => {
          const userCountry = data.country;
          const preferredLang = userCountry === 'KH' ? 'kh' : 'en';

          // Set language in CSS
          document.body.classList.toggle('language-khmer', preferredLang === 'kh');
          document.body.classList.toggle('language-english', preferredLang === 'en');

          // Set detected language in LanguageService
          this.languageService.setLanguage(preferredLang);
          this.translate.use(preferredLang);
        },
        error: () => {
          // Default to English if IP detection fails
          document.body.classList.add('language-english');
          this.languageService.setLanguage('en');
          this.translate.use('en')
        }
      });
    } else {
      // Use already set language from service and skip loading spinner
      this.translate.use(this.languageService.getLanguage());
    }


    // Route handling for body classes
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
