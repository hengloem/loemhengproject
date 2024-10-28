import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IpLocationService } from './core/services/ip-location.service';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'loemhengproject';
  private routerSubscription: Subscription;

  constructor(
    private router: Router,
    private ipLocationService: IpLocationService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    // Check if language is already set in the session
    if (!this.languageService.getLanguage()) {
      // Detect user location and set language based on IP location
      this.ipLocationService.getUserCountry().subscribe({
        next: (data) => {
          const userCountry = data.country;
          const preferredLang = userCountry === 'KH' ? 'kh' : 'en';

          // Set language in CSS
          const body = document.body;
          body.classList.remove('language-english');
          body.classList.add('language-khmer');

          // Set language in LanguageService
          this.languageService.setLanguage(preferredLang);
        },
        error: () => {
          const body = document.body;
          body.classList.remove('language-khmer');
          body.classList.add('language-english');
          
          // Handle errors by defaulting to English
          this.languageService.setLanguage('en');
        }
      });
    } else {
      // Use the already set language in the service
      this.languageService.setLanguage(this.languageService.getLanguage());
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
