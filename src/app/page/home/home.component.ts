import { Component, OnInit } from '@angular/core';
import { AppInitService } from '@app/core/services/app-init.service';
import { HeaderTitleService } from '@app/core/services/header-title.service';
import { SeoService } from '@app/core/services/seo.service';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private headerTitleService: HeaderTitleService,
    private seoService: SeoService,
    private appInitService: AppInitService
  ) { }

  ngOnInit(): void {
    this.headerTitleService.setDocTitle('app.title');

    // Config should already be loaded by APP_INITIALIZER
    if (this.appInitService.isConfigLoaded()) {
      this.setSeoData();
    }
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
