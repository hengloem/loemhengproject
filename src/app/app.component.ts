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
    this.translate.addLangs(['en', 'kh']);
    this.translate.setDefaultLang('en');
    const lang = this.localStorage.get('lang');
    if (lang == 'en') {
      this.translate.setDefaultLang('en');
      this.localStorage.set('lang', 'en');
    } else {
      this.translate.setDefaultLang('kh');
      this.localStorage.set('lang', 'kh');
    }
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => { });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and set classes accordingly
        const currentRoute = this.router.url;
        if (currentRoute.includes('/home')) {
          // For the "home" page
          document.body.classList.remove('about', 'portfolio', 'contact', 'blog');
          document.body.classList.add('home', 'light');
        } else if (currentRoute.includes('/about')) {
          // For the "about" page
          document.body.classList.remove('home', 'portfolio', 'contact', 'blog');
          document.body.classList.add('about', 'light');
        } else if (currentRoute.includes('/portfolio')) {
          // For the "portfolio" page
          document.body.classList.remove('home', 'about', 'contact', 'blog');
          document.body.classList.add('portfolio', 'light');
        } else if (currentRoute.includes('/contact')) {
          // For the "contact" page
          document.body.classList.remove('home', 'about', 'portfolio', 'blog');
          document.body.classList.add('contact', 'light');
        } else if (currentRoute.includes('/blog')) {
          // For the "blog" page
          document.body.classList.remove('home', 'about', 'portfolio', 'contact', 'blog');
          document.body.classList.add('blog', 'light');
        }
      }
    });
  }
}
