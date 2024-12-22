import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IpLocationService } from './core/services/ip-location.service';
import { TranslateService } from '@ngx-translate/core';
import { HeaderTitleService } from './core/services/header-title.service';
import { SharedService } from './core/services/shared.service';

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
    private ipLocationService: IpLocationService,
    private headerTitleService: HeaderTitleService,
    private localStorage: SharedService
  ) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('app.title');

    // Check if language is already set in localStorage
    const savedLang = this.localStorage.get('lang');

    if (savedLang) {
      // Use the saved language
      this.isKh = savedLang === 'kh' ? 'app.eng' : 'app.kh';
      this.translate.use(savedLang);
    } else {
      // Detect user's country if no language is set in localStorage
      this.ipLocationService.getUserCountry().subscribe({
        next: (data) => {
          console.log(data);
          
          const lang = data.country === 'KH' ? 'kh' : 'en';

          // Set language in localStorage and apply it
          this.localStorage.set('lang', lang);
          this.isKh = lang === 'kh' ? 'app.eng' : 'app.kh';
          this.translate.use(lang);
        }
      });
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
        const activeClass = Object.keys(routeClassMap).find(key => currentRoute.includes(key)) || '';
        document.body.className = bodyClasses.includes(routeClassMap[activeClass]) ? routeClassMap[activeClass] + ' light' : 'light';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
