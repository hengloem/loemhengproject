import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SharedService } from './core/services/shared.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IpLocationService } from './core/services/ip-location.service';

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
    private router: Router,
    private ipLocationService: IpLocationService
  ) {
    // Add supported languages
    this.translate.addLangs(['en', 'kh']);
    
    // Get the user's language preference from local storage
    const lang = this.localStorage.get('lang');

    if (lang) {
      // Use the stored preference if available
      this.translate.setDefaultLang(lang);
    } else {
      // No stored preference, so set default to English until IP location is determined
      this.translate.setDefaultLang('en');
    }
  }

  ngOnInit(): void {
    // Check for language preference in local storage
    const lang = this.localStorage.get('lang');

    if (!lang) {
      // No language preference found, so use IP-based detection
      this.ipLocationService.getUserCountry().subscribe({
        next: (data) => {
          const userCountry = data.country;
          console.log(userCountry);

          // Set language based on IP location (default to English if location unknown)
          const preferredLang = userCountry === 'KH' ? 'kh' : 'en';
          this.translate.use(preferredLang);

          // Save the determined language preference to local storage
          this.localStorage.set('lang', preferredLang);
        },
        error: () => {
          // Handle errors (fallback to English if IP location fails)
          this.translate.use('en');
          this.localStorage.set('lang', 'en');
        }
      });
    }

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
