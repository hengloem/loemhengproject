import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SharedService } from './core/services/shared.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loemhengproject';

  constructor(
    private translate: TranslateService,
    private localStorage: SharedService,
    private router: Router
  ) {
    // Add supported languages
    translate.addLangs(['en', 'kh']);

    // Get the user's language preference from local storage
    const lang = this.localStorage.get('lang');

    if (lang === 'en' || lang === 'kh') {
      // Use the user's preference if it's 'en' or 'kh'
      this.translate.setDefaultLang(lang);
    } else {
      // Default to 'en' if the user's preference is invalid
      this.translate.setDefaultLang('en');
      this.localStorage.set('lang', 'en');
    }
  }

  ngOnInit(): void {
    // Subscribe to language change events
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // You can add your custom code here to react to language changes
      // For example, you can update the user interface based on the new language.
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        const bodyClasses = ['home', 'about', 'portfolio', 'contact', 'blog', 'blog-post'];
        const routeClasses = ['', '', '', '', '', ''];

        if (currentRoute.includes('/home')) {
          routeClasses[0] = 'home';
        } else if (currentRoute.includes('/about')) {
          routeClasses[1] = 'about';
        } else if (currentRoute.includes('/portfolio')) {
          routeClasses[2] = 'portfolio';
        } else if (currentRoute.includes('/contact')) {
          routeClasses[3] = 'contact';
        } else if (currentRoute.includes('/blog')) {
          routeClasses[4] = 'blog';
        } else if (currentRoute.includes('/sblog-post')) {
          routeClasses[5] = 'blog-post';
        }

        // Remove all route-specific classes
        bodyClasses.forEach((cls, index) => {
          if (routeClasses[index] === '') {
            document.body.classList.remove(cls);
          }
        });

        // Add the appropriate route-specific classes
        bodyClasses.forEach((cls, index) => {
          if (routeClasses[index] !== '') {
            document.body.classList.add(routeClasses[index], 'light');
          }
        });
      }
    });

  }
}
